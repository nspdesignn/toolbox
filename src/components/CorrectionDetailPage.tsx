import React, { useState } from 'react';
import {
  ArrowLeft,
  FileCheck2,
  Scale,
  FileText,
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Copy,
  Check,
  Building,
  Home,
  HelpCircle,
  ExternalLink,
  MapPin,
  Calendar,
  Search,
  BookOpen,
  Layers
} from 'lucide-react';
import { CORRECTION_RULINGS } from '../data/correctionRulings';
import { CORRECTION_DRAFTS } from '../data/correctionDrafts';

interface CorrectionDetailPageProps {
  onBack: () => void;
}

// 態樣檢核清單資料
const CHECKLISTS = {
  buildingLand: {
    badge: '態樣Ａ',
    title: '更正為建築用地',
    desc: '編定公告前已建有合法自用房屋，申請更正為建築用地',
    docs: [
      '建管前建物面積證明合法文件（擇一）：房屋稅籍、建物登記謄本、建築使用執照、工業技術研究院歷史航照圖判讀建物面積',
      '建築管理日期或公告編定日期（70年2月15日，或對應較早之日期）前已作住家使用之合法文件：戶籍設籍證明、用水用電證明（須載明住家用）',
      '土地謄本、申請人身分證明文件、土地更正編定同意書'
    ]
  },
  otherGeneral: {
    badge: '態樣Ｂ・一般',
    title: '更正為其他用地（一般情形）',
    desc: '公告編定前或期間已變更使用為非建築用地（如農牧、林業等）',
    docs: [
      '70年2月15日公告編定前或編定期間已變更使用之合法證明文件',
      '面積證明合法文件：建築使用執照、主管機關認定文件等',
      '土地謄本、申請人身分證明文件、土地更正編定同意書'
    ]
  },
  otherPublic: {
    badge: '態樣Ｂ・供公眾使用建築物',
    title: '更正為其他用地（如寺廟等）',
    desc: '申請標的屬建築法第5條規定之供公眾使用建築物（基準日提前為60年12月22日）',
    docs: [
      '供公眾使用建築物適用之建築管理日期（60年12月22日）前已變更使用之合法證明文件（此日期提前，非一般公告編定日期70年2月15日）',
      '面積證明合法文件：建築使用執照、主管機關認定等',
      '土地謄本、申請人身分證明文件、土地更正編定同意書'
    ]
  }
};

// 合法使用認定基準日對照表 (PDF 第3頁)
const BASELINE_DATES = [
  { scope: '建築法第5條規定之供公眾使用建築物', date: '60年12月22日', note: '如寺廟等，基準日提前' },
  { scope: '「田」地目 1～12 等則土地', date: '62年12月24日', note: '特定農業用地管理提前' },
  { scope: '「田」地目 13～26 等則土地', date: '65年1月1日', note: '特定農業用地管理提前' },
  { scope: '原瑞芳鎮', date: '66年11月25日', note: '轄區建管實施日期' },
  { scope: '原淡水鎮、三芝鄉、板橋市、新莊市、新店市、樹林市、三峽鎮、土城市、金山鄉內各類則土地', date: '62年12月24日', note: '都市計畫外特定區域實施建管日' },
  { scope: '原板橋市、三重市、泰山鄉、五股鄉、新莊市、蘆洲市等部分區域（淡水河洪水平原管制區）', date: '57年5月29日', note: '洪水平原管制禁建發布日' },
  { scope: '非屬上述土地（例如林、旱地目等一般土地）', date: '70年2月15日', note: '新北市非都市土地全面編定公告基準日' }
];

// 應備證明文件與申請地點彙整 (PDF 第3頁)
const DOC_OFFICES = [
  { name: '稅籍證明', office: '稅捐稽徵處各轄區分處', note: '證明建物存在及使用情形' },
  { name: '設籍證明', office: '各轄區戶政事務所', note: '證明70年2月15日前已作住家使用' },
  { name: '用水證明', office: '自來水公司各轄區營運所', note: '須載明「住家用」' },
  { name: '用電證明', office: '電力公司各轄區服務所', note: '須載明「住家用」' },
  { name: '建物登記謄本', office: '各轄區地政事務所', note: '證明建物登記情形' },
  { name: '建築使用執照或合法房屋證明', office: '工務局施工科、使用管理科', note: '證明建物合法性' },
  { name: '航照圖判識結果（歷史影像判識）', office: '工業技術研究院', note: '判讀建物面積，作為無其他文件時之替代證明' }
];

export const CorrectionDetailPage: React.FC<CorrectionDetailPageProps> = ({ onBack }) => {
  // 5 個主要功能按鈕切換
  const [activeTab, setActiveTab] = useState<'flow-tool' | 'doc-offices' | 'laws' | 'drafts' | 'aerial-tool'>('flow-tool');

  // 常用相關法令及函釋 子分頁: 'statutes' (常用相關法令) | 'interpretations' (函釋)
  const [lawSubTab, setLawSubTab] = useState<'statutes' | 'interpretations'>('statutes');
  const [rulingSearch, setRulingSearch] = useState<string>('');
  const [copiedDocId, setCopiedDocId] = useState<number | null>(null);

  const handleCopyDocNumber = (id: number, docNum: string) => {
    navigator.clipboard?.writeText(docNum);
    setCopiedDocId(id);
    setTimeout(() => setCopiedDocId(null), 2000);
  };

  const filteredRulings = CORRECTION_RULINGS.filter((r) => {
    if (!rulingSearch.trim()) return true;
    const q = rulingSearch.trim().toLowerCase();
    return (
      r.content.toLowerCase().includes(q) ||
      r.docNumber.toLowerCase().includes(q) ||
      r.id.toString() === q
    );
  });

  // 公文函稿參考 子分頁: 'meeting' | 'correction' | 'urge' | 'approval' | 'change'
  const [draftSubTab, setDraftSubTab] = useState<'meeting' | 'correction' | 'urge' | 'approval' | 'change'>('meeting');
  const [copiedDraftKey, setCopiedDraftKey] = useState<string | null>(null);

  const handleCopyDraft = (key: string, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedDraftKey(key);
    setTimeout(() => setCopiedDraftKey(null), 2000);
  };

  // 篩選工具當前步驟: 'q0' (前提篩選) | 'q1' (用地別判斷) | 'q2' (公眾使用建物判斷) | 'result' (態樣清單) | 'warn' (不符要件)
  const [step, setStep] = useState<'q0' | 'q1' | 'q2' | 'result' | 'warn'>('q0');
  const [resultKey, setResultKey] = useState<keyof typeof CHECKLISTS>('buildingLand');
  const [copied, setCopied] = useState<boolean>(false);

  // 複製清單文字
  const handleCopyChecklist = (key: keyof typeof CHECKLISTS) => {
    const r = CHECKLISTS[key];
    const text = `【新北市更正編定應備文件清單－${r.title}（${r.badge}）】\n` +
      r.docs.map((d, i) => `${i + 1}. ${d}`).join('\n');
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-5">
      {/* 頂部標題區 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ECE6DB]">
          <div className="flex items-center gap-3.5">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm sm:text-base font-semibold text-[#4A3E39] bg-[#F5EFE7] hover:bg-[#EAE2D7] border border-[#DDD5C7] rounded-xl transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>返回業務選單</span>
            </button>
            <div className="h-6 w-px bg-[#DDD5C7]" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif-tc font-semibold text-[#2D2623]">
                更正編定
              </h1>
              <p className="text-sm sm:text-base text-[#665A54] mt-0.5">
                新北市非都市土地更正編定作業指引與應備文件審查
              </p>
            </div>
          </div>
        </div>

        {/* 畫面上 4 個主要按鈕 */}
        <div className="flex flex-wrap items-center gap-2.5 pt-4 text-sm sm:text-base">
          <button
            onClick={() => setActiveTab('flow-tool')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'flow-tool'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            <span>辦理流程＋判斷工具</span>
          </button>

          <button
            onClick={() => setActiveTab('doc-offices')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'doc-offices'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>證明文件與申請地點</span>
          </button>

          <button
            onClick={() => setActiveTab('laws')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'laws'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>常用相關法令及函釋</span>
          </button>

          <button
            onClick={() => setActiveTab('drafts')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'drafts'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>公文函稿參考</span>
          </button>

          <button
            onClick={() => setActiveTab('aerial-tool')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'aerial-tool'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>航照套疊地籍小工具</span>
          </button>
        </div>
      </div>

      {/* 1. 辦理流程＋判斷工具分頁內容 */}
      {activeTab === 'flow-tool' && (
        <div className="space-y-6">
          {/* 重要前提提醒橫幅 (依附件PDF說明) */}
          <div className="bg-[#FFFDF9] border-2 border-[#EADFCB] rounded-xl p-4 sm:p-5 shadow-2xs">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#8C5A4B]/10 border border-[#8C5A4B]/20 flex items-center justify-center text-[#8C5A4B] shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="space-y-1 text-sm sm:text-base leading-relaxed">
                <div className="font-bold text-[#704437]">
                  重要前提提醒：更正編定與變更編定的本質不同
                </div>
                <div className="text-[#5A4B43]">
                  更正編定是<strong>「編定當時就錯了」</strong>（原編定存在客觀錯誤，檢具證明更正）；變更編定是<strong>「原本編定沒錯，後來使用性質才改變」</strong>。承辦人受理前應先確認申請人主張之使用時點是否早於適用的認定基準日；若為基準日之後才興建，應請申請人改走變更編定程序，而非受理更正編定。
                </div>
              </div>
            </div>
          </div>

          {/* 兩欄排版：左欄為辦理流程總覽（圖片之完整流程圖），右欄為應備文件判斷工具 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* 左側：辦理流程總覽（移除 sticky 以免在視窗滑動時卡在畫面中間，字體放大更清晰） */}
            <div className="lg:col-span-5 bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="border-b border-[#ECE6DB] pb-3 flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#2D2623]">
                    辦理流程總覽
                  </h2>
                  <p className="text-sm text-[#7D7065] mt-1">
                    依作業須知第23點及實務審查程序整理
                  </p>
                </div>
                <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded-md bg-[#FAF7F2] text-[#8C5A4B] border border-[#DDD5C7]">
                  全案流程圖
                </span>
              </div>

              {/* 向量流程圖 SVG：字體加大，方塊高度與比例最佳化 */}
              <div className="w-full overflow-hidden flex justify-center py-2 bg-[#FAF7F4] rounded-xl border border-[#E8E0D4] p-3 sm:p-4">
                <svg
                  viewBox="0 0 390 620"
                  className="w-full h-auto max-w-[390px]"
                  style={{ fontFamily: 'inherit' }}
                >
                  <defs>
                    <marker
                      id="flow-arrow"
                      viewBox="0 0 10 10"
                      refX="6"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M1 2 L8 5 L1 8" fill="none" stroke="#C5B8A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </marker>
                  </defs>

                  {/* 1. 收件 */}
                  <rect x="30" y="8" width="330" height="46" rx="9" fill="#FFFFFF" stroke="#1F3864" strokeWidth="2" />
                  <text x="195" y="31" textAnchor="middle" dominantBaseline="central" fill="#1F3864" fontSize="17" fontWeight="800">收件</text>

                  {/* 箭頭 1 -> 2 */}
                  <path d="M195 54 L195 72" fill="none" stroke="#C5B8A5" strokeWidth="2" markerEnd="url(#flow-arrow)" />

                  {/* 2. 初步書面審查 */}
                  <rect x="30" y="72" width="330" height="64" rx="9" fill="#FFFFFF" stroke="#1F3864" strokeWidth="2" />
                  <text x="195" y="93" textAnchor="middle" dominantBaseline="central" fill="#1F3864" fontSize="17" fontWeight="800">初步書面審查</text>
                  <text x="195" y="117" textAnchor="middle" dominantBaseline="central" fill="#5B584E" fontSize="13.5" fontWeight="500">確認權利人、謄本、證明文件齊全</text>

                  {/* 箭頭 2 -> 3 */}
                  <path d="M195 136 L195 154" fill="none" stroke="#C5B8A5" strokeWidth="2" markerEnd="url(#flow-arrow)" />

                  {/* 3. 會辦各單位＋排定會勘 */}
                  <rect x="30" y="154" width="330" height="46" rx="9" fill="#FFFFFF" stroke="#1F3864" strokeWidth="2" />
                  <text x="195" y="177" textAnchor="middle" dominantBaseline="central" fill="#1F3864" fontSize="16.5" fontWeight="800">會辦各單位＋排定會勘</text>

                  {/* 箭頭 3 -> 4 */}
                  <path d="M195 200 L195 218" fill="none" stroke="#C5B8A5" strokeWidth="2" markerEnd="url(#flow-arrow)" />

                  {/* 4. 補正（非必要，15天） */}
                  <rect x="30" y="218" width="330" height="46" rx="9" fill="#FFFFFF" stroke="#1F3864" strokeWidth="2" />
                  <text x="195" y="241" textAnchor="middle" dominantBaseline="central" fill="#1F3864" fontSize="16.5" fontWeight="800">補正（非必要，15天）</text>

                  {/* 箭頭 4 -> 5 */}
                  <path d="M195 264 L195 282" fill="none" stroke="#C5B8A5" strokeWidth="2" markerEnd="url(#flow-arrow)" />

                  {/* 5. 簽核（簽稿併陳）或駁回 */}
                  <rect x="30" y="282" width="330" height="46" rx="9" fill="#FFFFFF" stroke="#1F3864" strokeWidth="2" />
                  <text x="195" y="305" textAnchor="middle" dominantBaseline="central" fill="#1F3864" fontSize="16.5" fontWeight="800">簽核（簽稿併陳）或駁回</text>

                  {/* 分流箭頭 5 -> 6 (整筆更正 / 部分更正) */}
                  <path d="M195 328 L195 340 L102 340 L102 350" fill="none" stroke="#C5B8A5" strokeWidth="2" markerEnd="url(#flow-arrow)" />
                  <path d="M195 328 L195 340 L288 340 L288 350" fill="none" stroke="#C5B8A5" strokeWidth="2" markerEnd="url(#flow-arrow)" />

                  {/* 6. 整筆更正 */}
                  <rect x="10" y="350" width="176" height="66" rx="9" fill="#FFFFFF" stroke="#1F3864" strokeWidth="2" />
                  <text x="98" y="372" textAnchor="middle" dominantBaseline="central" fill="#1F3864" fontSize="16.5" fontWeight="800">整筆更正</text>
                  <text x="98" y="396" textAnchor="middle" dominantBaseline="central" fill="#5B584E" fontSize="13" fontWeight="500">核准文送地所辦異動</text>

                  {/* 6. 部分更正 */}
                  <rect x="204" y="350" width="176" height="66" rx="9" fill="#FFFFFF" stroke="#1F3864" strokeWidth="2" />
                  <text x="292" y="372" textAnchor="middle" dominantBaseline="central" fill="#1F3864" fontSize="16.5" fontWeight="800">部分更正</text>
                  <text x="292" y="396" textAnchor="middle" dominantBaseline="central" fill="#5B584E" fontSize="13" fontWeight="500">先辦分割，地政局核位置</text>

                  {/* 匯流箭頭 6 -> 7 */}
                  <path d="M98 416 L98 428 L195 428 L195 438" fill="none" stroke="#C5B8A5" strokeWidth="2" markerEnd="url(#flow-arrow)" />
                  <path d="M292 416 L292 428 L195 428 L195 438" fill="none" stroke="#C5B8A5" strokeWidth="2" />

                  {/* 7. 地所完成登記，會報地政局備查 */}
                  <rect x="30" y="438" width="330" height="48" rx="9" fill="#FFFFFF" stroke="#1F3864" strokeWidth="2" />
                  <text x="195" y="462" textAnchor="middle" dominantBaseline="central" fill="#1F3864" fontSize="15.5" fontWeight="800">地所完成登記，會報地政局備查</text>

                  {/* 箭頭 7 -> 8 */}
                  <path d="M195 486 L195 504" fill="none" stroke="#C5B8A5" strokeWidth="2" markerEnd="url(#flow-arrow)" />

                  {/* 8. 同意備查，案件結案 */}
                  <rect x="30" y="504" width="330" height="46" rx="9" fill="#FFFFFF" stroke="#1F3864" strokeWidth="2" />
                  <text x="195" y="527" textAnchor="middle" dominantBaseline="central" fill="#1F3864" fontSize="17" fontWeight="800">同意備查，案件結案</text>
                </svg>
              </div>

              <div className="text-xs sm:text-sm text-[#5B584E] text-center pt-1 font-medium leading-relaxed">
                流程簡述：收件 ➔ 書審 ➔ 會勘 ➔ 補正 ➔ 簽核（整筆/部分更正分流）➔ 地所登記 ➔ 備查結案
              </div>
            </div>

            {/* 右側：應備文件判斷篩選工具（7欄寬度，模擬 更正編定.html） */}
            <div className="lg:col-span-7 space-y-5">
              <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs">
                <div className="border-b border-[#ECE6DB] pb-3 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#2D2623]">
                      應備文件判斷篩選工具
                    </h2>
                    <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                      點選條件自動導引判定態樣與應備證明文件清單
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep('q0')}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold text-[#8C5A4B] bg-[#FAF7F4] hover:bg-[#F2ECE4] border border-[#8C5A4B] rounded-lg transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>重新判斷</span>
                  </button>
                </div>

                {/* 步驟 Q0: 前提篩選 */}
                {step === 'q0' && (
                  <div className="pt-4 space-y-4">
                    <div className="border-l-4 border-l-[#1F3864] pl-3">
                      <div className="text-xs font-bold text-[#7D7065] tracking-wide">
                        前提篩選
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#1F3864] mt-0.5">
                        申請人能否提出客觀證明，『建物存在時點』或『使用計畫核准時點』早於適用的建築管理日期或公告編定日期？
                      </h3>
                    </div>

                    <div className="flex flex-col gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep('q1')}
                        className="text-left p-4 rounded-xl border-2 border-[#E4DCC8] hover:border-[#1F3864] bg-[#FBF7EE] text-[#2A2822] transition-all cursor-pointer group"
                      >
                        <div className="font-bold text-base group-hover:text-[#1F3864] flex items-center justify-between">
                          <span>能，時點確實早於該日期</span>
                          <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">符合前提</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#5B584E] mt-1">
                          檢附早於新北市公告編定基準日（民國70年2月15日）或特定建管前合法證明文件
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep('warn')}
                        className="text-left p-4 rounded-xl border-2 border-[#E4DCC8] hover:border-[#9C3B30] bg-[#FBF7EE] text-[#2A2822] transition-all cursor-pointer group"
                      >
                        <div className="font-bold text-base group-hover:text-[#9C3B30] flex items-center justify-between">
                          <span>不能，或時點晚於該日期</span>
                          <span className="text-xs px-2 py-0.5 rounded bg-rose-100 text-rose-800">不符前提</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#5B584E] mt-1">
                          時點晚於公告編定日，或無法提出任何時點證明文件
                        </p>
                      </button>
                    </div>
                  </div>
                )}

                {/* 前提不符合：警示卡片 */}
                {step === 'warn' && (
                  <div className="pt-4 space-y-4">
                    <div className="border-l-4 border-l-[#9C3B30] pl-3">
                      <div className="text-xs font-bold text-[#9C3B30] tracking-wide">
                        前提篩選結果
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#2A2822] mt-0.5">
                        申請人能否提出客觀證明，『建物存在時點』或『使用計畫核准時點』早於適用的建築管理日期或公告編定日期？
                      </h3>
                    </div>

                    <div className="p-4 bg-[#FBEEEE] border-l-4 border-l-[#9C3B30] rounded-xl text-sm sm:text-base text-[#2A2822] leading-relaxed space-y-2">
                      <div className="font-bold text-[#9C3B30] flex items-center gap-1.5">
                        <AlertTriangle className="w-5 h-5 shrink-0" />
                        <span>不符合更正編定要件</span>
                      </div>
                      <p>
                        這不是「編定錯誤」，而是<strong>使用性質事後改變</strong>，不符合更正編定要件。
                      </p>
                      <p className="text-xs sm:text-sm text-[#5B584E]">
                        應請申請人改走<strong>變更編定程序</strong>（如申請興辦事業計畫核准後辦理變更編定），而非受理更正編定。
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setStep('q0')}
                        className="px-4 py-2.5 rounded-xl border-2 border-[#1F3864] text-[#1F3864] font-bold text-sm hover:bg-[#F2ECE4] transition-all cursor-pointer"
                      >
                        ↺ 重新判斷另一筆案件
                      </button>
                    </div>
                  </div>
                )}

                {/* 步驟 Q1: 擬更正用地別判斷 */}
                {step === 'q1' && (
                  <div className="pt-4 space-y-4">
                    <div className="border-l-4 border-l-[#1F3864] pl-3">
                      <div className="text-xs font-bold text-[#7D7065] tracking-wide">
                        判斷點（第一階段）
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#1F3864] mt-0.5">
                        擬更正為下列哪一種用地？
                      </h3>
                    </div>

                    <div className="flex flex-col gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setResultKey('buildingLand');
                          setStep('result');
                        }}
                        className="text-left p-4 rounded-xl border-2 border-[#E4DCC8] hover:border-[#1F3864] bg-[#FBF7EE] text-[#2A2822] transition-all cursor-pointer group"
                      >
                        <div className="font-bold text-base group-hover:text-[#1F3864] flex items-center gap-2">
                          <Home className="w-4 h-4 text-[#1F3864]" />
                          <span>建築用地</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#5B584E] mt-1">
                          建管前老舊合法房屋，擬更正為甲種、乙種或丙種建築用地（態樣Ａ）
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep('q2')}
                        className="text-left p-4 rounded-xl border-2 border-[#E4DCC8] hover:border-[#1F3864] bg-[#FBF7EE] text-[#2A2822] transition-all cursor-pointer group"
                      >
                        <div className="font-bold text-base group-hover:text-[#1F3864] flex items-center gap-2">
                          <Building className="w-4 h-4 text-[#1F3864]" />
                          <span>其他用地</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#5B584E] mt-1">
                          擬更正為農牧、林業、國土保安、交通、宗教用地等非建築用地
                        </p>
                      </button>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setStep('q0')}
                        className="text-xs text-[#7D7065] hover:text-[#2A2822] underline cursor-pointer"
                      >
                        ← 返回上一步
                      </button>
                    </div>
                  </div>
                )}

                {/* 步驟 Q2: 供公眾使用建築物判斷 */}
                {step === 'q2' && (
                  <div className="pt-4 space-y-4">
                    <div className="border-l-4 border-l-[#1F3864] pl-3">
                      <div className="text-xs font-bold text-[#7D7065] tracking-wide">
                        判斷點（第二階段）
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#1F3864] mt-0.5">
                        申請標的是否屬建築法第5條規定之供公眾使用建築物（如寺廟）？
                      </h3>
                    </div>

                    <div className="flex flex-col gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setResultKey('otherPublic');
                          setStep('result');
                        }}
                        className="text-left p-4 rounded-xl border-2 border-[#E4DCC8] hover:border-[#1F3864] bg-[#FBF7EE] text-[#2A2822] transition-all cursor-pointer group"
                      >
                        <div className="font-bold text-base group-hover:text-[#1F3864] flex items-center justify-between">
                          <span>是（屬供公眾使用建築物）</span>
                          <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800">基準日提前：60.12.22</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#5B584E] mt-1">
                          如寺廟等供公眾使用建築物，適用之建管認定日期提前至民國 60 年 12 月 22 日
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setResultKey('otherGeneral');
                          setStep('result');
                        }}
                        className="text-left p-4 rounded-xl border-2 border-[#E4DCC8] hover:border-[#1F3864] bg-[#FBF7EE] text-[#2A2822] transition-all cursor-pointer group"
                      >
                        <div className="font-bold text-base group-hover:text-[#1F3864] flex items-center justify-between">
                          <span>否，一般情形</span>
                          <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800">基準日：70.02.15</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#5B584E] mt-1">
                          一般非建築用地案件，適用新北市非都市土地公告編定日（70年2月15日）
                        </p>
                      </button>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setStep('q1')}
                        className="text-xs text-[#7D7065] hover:text-[#2A2822] underline cursor-pointer"
                      >
                        ← 返回上一步
                      </button>
                    </div>
                  </div>
                )}

                {/* 判定結果：態樣卡片與應備文件清單 */}
                {step === 'result' && (
                  <div className="pt-4 space-y-4">
                    <div className="p-5 bg-[#FAF7F2] border-2 border-[#1F3864] rounded-xl space-y-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded-md bg-[#1F3864] text-white">
                          {CHECKLISTS[resultKey].badge}
                        </span>
                        <span className="text-xs text-[#5B584E]">
                          依「製定非都市土地使用分區圖及編定各種使用地作業須知」第23點
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                        {CHECKLISTS[resultKey].title}
                      </h3>
                      <p className="text-sm text-[#5B584E]">
                        {CHECKLISTS[resultKey].desc}
                      </p>

                      <div className="pt-2 border-t border-[#E4DCC8]">
                        <div className="font-bold text-base text-[#1F3864] mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                          <span>應備證明文件清單：</span>
                        </div>

                        <ul className="space-y-2.5 pl-1">
                          {CHECKLISTS[resultKey].docs.map((doc, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#2A2822] leading-relaxed">
                              <span className="font-bold text-[#1F3864] shrink-0 mt-0.5">
                                {idx + 1}.
                              </span>
                              <span>{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => handleCopyChecklist(resultKey)}
                        className="px-4 py-2 text-sm font-bold text-[#1F3864] bg-[#FFFFFF] hover:bg-[#F2ECE4] border-2 border-[#1F3864] rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-2xs"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-600" />
                            <span>已複製清單文字</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-[#1F3864]" />
                            <span>複製應備文件清單</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep('q0')}
                        className="px-4 py-2 text-sm font-bold text-white bg-[#1F3864] hover:bg-[#152747] rounded-xl transition-all cursor-pointer shadow-2xs"
                      >
                        ↺ 重新判斷另一筆案件
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 合法使用認定基準日速查清單（列表呈現，字體調整更精緻適中、免左右滑動、不切字） */}
              <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#ECE6DB]">
                  <div className="flex items-center gap-2.5 text-base sm:text-lg font-bold text-[#2D2623]">
                    <Calendar className="w-5 h-5 text-[#8C5A4B]" />
                    <span>合法使用認定基準日對照</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold px-2.5 py-1 rounded-md bg-[#FAF7F2] text-[#8C5A4B] border border-[#DDD5C7]">
                    新北市適用規定
                  </span>
                </div>

                <div className="space-y-2.5">
                  {BASELINE_DATES.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 sm:p-3.5 bg-[#FAF7F2] border border-[#E8DFC9] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:border-[#8C5A4B]/40 transition-colors"
                    >
                      <div className="space-y-0.5 min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-bold text-[#2D2623] leading-snug">
                          {item.scope}
                        </div>
                        {item.note && (
                          <div className="text-xs text-[#7D7065]">
                            {item.note}
                          </div>
                        )}
                      </div>
                      <div className="shrink-0 self-start sm:self-center">
                        <span className="inline-block px-3 py-1 rounded-lg bg-white border border-[#8C5A4B] text-[#8C5A4B] font-bold text-xs sm:text-sm whitespace-nowrap shadow-2xs font-mono">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. 證明文件與申請地點分頁內容 */}
      {activeTab === 'doc-offices' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-6 sm:p-7 shadow-xs space-y-6">
          <div className="border-b border-[#ECE6DB] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#2D2623] flex items-center gap-2.5">
                <MapPin className="w-6 h-6 text-[#8C5A4B]" />
                <span>證明文件與申請地點</span>
              </h2>
              <p className="text-sm text-[#7D7065] mt-1">
                新北市更正編定各項合法證明文件、發證權責機關與證明目的全覽
              </p>
            </div>
            <span className="text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg bg-[#FAF7F2] text-[#8C5A4B] border border-[#DDD5C7] self-start sm:self-auto">
              權責機關分工
            </span>
          </div>

          <div className="space-y-4">
            {DOC_OFFICES.map((doc, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#FAF7F2] border-2 border-[#E4DCC8] hover:border-[#8C5A4B]/60 rounded-xl transition-all space-y-3 shadow-2xs hover:shadow-xs"
              >
                {/* 上半部：證明文件名稱（大字粗體）與申請地點標籤 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#EADFCB]">
                  <div className="text-lg sm:text-xl font-bold text-[#1F3864] flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1F3864] shrink-0" />
                    <span>{doc.name}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#8C5A4B] bg-white px-3.5 py-1.5 rounded-lg border border-[#DDD5C7] w-fit shadow-2xs">
                    <span className="text-xs sm:text-sm text-[#7D7065] font-normal">申請地點：</span>
                    <span className="font-bold text-[#8C5A4B]">{doc.office}</span>
                  </div>
                </div>

                {/* 下半部：證明目的說明 */}
                <div className="flex items-start gap-2.5 text-sm sm:text-base text-[#3E342F] leading-relaxed">
                  <span className="text-xs sm:text-sm font-bold text-[#7D7065] bg-[#EFE8DC] px-2.5 py-0.5 rounded-md shrink-0 mt-0.5">
                    證明目的
                  </span>
                  <span className="font-medium text-[#2D2623]">{doc.note}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 實務申請提醒卡片 */}
          <div className="p-5 bg-[#FFFDF9] rounded-xl border-2 border-[#EADFCB] space-y-2.5">
            <div className="font-bold text-base text-[#704437] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#8C5A4B]" />
              <span>實務申請注意事項</span>
            </div>
            <ul className="space-y-1.5 text-sm sm:text-base text-[#5A4B43] pl-1 leading-relaxed">
              <li>• <strong>水電證明</strong>：申請時請務必請公用事業機構出具載明<strong>「住家用」</strong>之證明文件，營業用或動力用電無法直接佐證住家使用事實。</li>
              <li>• <strong>戶籍設籍證明</strong>：戶政事務所設籍證明須查明<strong>初次設籍日期</strong>是否早於適用的基準日（如 70年2月15日）。</li>
            </ul>
          </div>
        </div>
      )}

      {/* 3. 常用相關法令及函釋分頁內容（分為「常用相關法令」與「函釋」2 個分頁） */}
      {activeTab === 'laws' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
          {/* 頂部標題與 2 個子分頁按鈕 */}
          <div className="border-b border-[#ECE6DB] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#2D2623] flex items-center gap-2.5">
                <Scale className="w-6 h-6 text-[#8C5A4B]" />
                <span>常用相關法令及函釋</span>
              </h2>
            </div>

            {/* 常用相關法令和函釋 2 個分頁 */}
            <div className="inline-flex p-1 bg-[#F5EFE7] border-2 border-[#DDD5C7] rounded-xl self-start sm:self-auto shadow-2xs">
              <button
                type="button"
                onClick={() => setLawSubTab('statutes')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm sm:text-base transition-all cursor-pointer ${
                  lawSubTab === 'statutes'
                    ? 'bg-[#8C5A4B] text-white shadow-xs'
                    : 'text-[#4A3E39] hover:bg-[#EAE2D7]'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>常用相關法令</span>
              </button>
              <button
                type="button"
                onClick={() => setLawSubTab('interpretations')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm sm:text-base transition-all cursor-pointer ${
                  lawSubTab === 'interpretations'
                    ? 'bg-[#8C5A4B] text-white shadow-xs'
                    : 'text-[#4A3E39] hover:bg-[#EAE2D7]'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>函釋（93 項）</span>
              </button>
            </div>
          </div>

          {/* 分頁 1：常用相關法令（僅包含製定作業須知、新北市編定公告、建築法） */}
          {lawSubTab === 'statutes' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-3 shadow-2xs">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#1F3864] text-white font-mono">
                      1
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-[#1F3864]">
                      製定非都市土地使用分區圖及編定各種使用地作業須知
                    </h3>
                  </div>
                  <a
                    href="https://glrs.moi.gov.tw/LawContent.aspx?id=FL003260"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-[#1F3864] bg-white hover:bg-[#F2ECE4] border border-[#1F3864]/30 rounded-lg transition-colors shadow-2xs cursor-pointer"
                  >
                    <span>法規連結</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <ul className="space-y-2 pl-2 text-sm sm:text-base text-[#3E342F]">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1F3864] shrink-0 mt-2" />
                    <span>
                      <strong>第 22 點</strong>（依編定當時規定不得編定為某種使用地，而依修正後之規定可編定者）。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1F3864] shrink-0 mt-2" />
                    <span>
                      <strong>第 23 點</strong>（公告編定前或公告編定期間已變更使用之合法證明文件者）。
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#8C5A4B] text-white font-mono">
                    2
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-[#2D2623]">
                    新北市非都市土地編定公告 70 年 2 月 15 日
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#4A3E39] pl-2 leading-relaxed">
                  本市（新北市）係民國 70 年 2 月 15 日就當時現況合法使用辦理非都市土地編定公告，故無特殊規定之土地，一律以 70 年 2 月 15 日為認定基準。
                </p>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-2.5 shadow-2xs">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#9C6B14] text-white font-mono">
                      3
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-[#2D2623]">
                      建築法
                    </h3>
                  </div>
                  <a
                    href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0070109&flno=5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-[#9C6B14] bg-white hover:bg-[#F2ECE4] border border-[#9C6B14]/30 rounded-lg transition-colors shadow-2xs cursor-pointer"
                  >
                    <span>第 5 條法規條文</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <ul className="space-y-2 pl-2 text-sm sm:text-base text-[#3E342F]">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#9C6B14] shrink-0 mt-2" />
                    <span>
                      <strong>第 5 條</strong>（供公眾使用建築物）
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* 分頁 2：函釋（共 93 項，完整收錄附件 PDF 第 4～14 頁清冊） */}
          {lawSubTab === 'interpretations' && (
            <div className="space-y-4">
              {/* 搜尋與即時統計列 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-[#FAF7F4] rounded-xl border border-[#DDD5C7]">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7D7065]" />
                  <input
                    type="text"
                    value={rulingSearch}
                    onChange={(e) => setRulingSearch(e.target.value)}
                    placeholder="搜尋函釋內容或文號（例如：寺廟、面積、使用執照、放領、共有、林業...）"
                    className="w-full pl-10 pr-4 py-2 bg-white border border-[#DDD5C7] rounded-lg text-sm text-[#2A2822] placeholder-[#9E9085] focus:outline-none focus:ring-2 focus:ring-[#8C5A4B]/40 focus:border-[#8C5A4B]"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#665A54] shrink-0 font-medium px-1">
                  <span>共 93 項函釋</span>
                  {rulingSearch.trim() && (
                    <span className="text-[#8C5A4B] font-bold">
                      （篩選出 {filteredRulings.length} 筆）
                    </span>
                  )}
                  {rulingSearch.trim() && (
                    <button
                      type="button"
                      onClick={() => setRulingSearch('')}
                      className="text-xs text-[#8C5A4B] underline hover:text-[#5A382E] cursor-pointer ml-1"
                    >
                      清除搜尋
                    </button>
                  )}
                </div>
              </div>

              {/* 93 筆函釋卡片清單 */}
              {filteredRulings.length === 0 ? (
                <div className="text-center py-12 text-[#7D7065] bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2">
                  <p className="text-base font-semibold">查無符合「{rulingSearch}」之函釋</p>
                  <p className="text-xs text-[#9E9085]">請嘗試其他關鍵字，如：地目、法定空地、分割、建管等</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredRulings.map((r) => (
                    <div
                      key={r.id}
                      className="p-4 sm:p-5 bg-[#FAF7F2] border-2 border-[#E4DCC8] hover:border-[#8C5A4B]/50 rounded-xl transition-all space-y-2.5 shadow-2xs hover:shadow-xs"
                    >
                      {/* 上半部：編號與函釋公文文號 */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-[#EADFCB]">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#1F3864] text-white font-mono text-xs font-bold">
                            編號 {r.id}
                          </span>
                          <span className="text-xs font-semibold text-[#7D7065]">
                            更正編定重要函釋
                          </span>
                        </div>
                        <div className="flex items-center gap-2 self-start sm:self-center flex-wrap">
                          <span className="text-xs sm:text-sm font-bold text-[#8C5A4B] bg-white px-3 py-1 rounded-lg border border-[#DDD5C7] shadow-2xs font-mono">
                            {r.docNumber}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopyDocNumber(r.id, r.docNumber)}
                            className="p-1 sm:px-2 sm:py-1 rounded-md bg-white hover:bg-[#F2ECE4] border border-[#DDD5C7] text-xs font-medium text-[#4A3E39] transition-all cursor-pointer flex items-center gap-1 shadow-2xs active:scale-95"
                            title="複製函釋文號"
                          >
                            {copiedDocId === r.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="hidden sm:inline text-emerald-700 font-bold">已複製</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-[#7D7065]" />
                                <span className="hidden sm:inline">複製文號</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* 下半部：函釋主要內容 */}
                      <div className="text-sm sm:text-base text-[#2A2822] leading-relaxed font-medium pl-0.5">
                        {r.content}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 4. 公文函稿參考分頁內容 */}
      {activeTab === 'drafts' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
          <div className="border-b border-[#ECE6DB] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center flex-wrap gap-2.5">
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#2D2623] flex items-center gap-2.5">
                <FileText className="w-6 h-6 text-[#8C5A4B]" />
                <span>公文函稿參考</span>
              </h2>
              <span className="text-xs sm:text-sm font-normal text-[#8C5A4B] bg-[#FFF5EA] px-3 py-1 rounded-md border border-[#F0D8A8]">
                實際回文內容仍須由承辦人依個案判斷撰寫
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#7D7065]">
              更正編定各審查階段常見公文函稿與簽稿範本
            </p>
          </div>

          {/* 5 個分頁按鈕 */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F5EFE7] border-2 border-[#DDD5C7] rounded-xl shadow-2xs">
            {CORRECTION_DRAFTS.map((d) => (
              <button
                key={d.key}
                type="button"
                onClick={() => setDraftSubTab(d.key)}
                className={`px-3.5 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap ${
                  draftSubTab === d.key
                    ? 'bg-[#8C5A4B] text-white shadow-xs'
                    : 'text-[#4A3E39] hover:bg-[#EAE2D7]'
                }`}
              >
                {d.tabName}
              </button>
            ))}
          </div>

          {/* 分頁內容展示 */}
          {(() => {
            const currentDraft = CORRECTION_DRAFTS.find((d) => d.key === draftSubTab) || CORRECTION_DRAFTS[0];
            return (
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#ECE6DB]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1F3864]">
                      {currentDraft.title}
                    </h3>
                    {currentDraft.note && (
                      <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                        💡 {currentDraft.note}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  {currentDraft.sections.map((sec, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-3 shadow-2xs"
                    >
                      <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#EADFCB] flex-wrap">
                        <span className="font-bold text-sm sm:text-base text-[#1F3864]">
                          {sec.label || currentDraft.tabName}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyDraft(`${currentDraft.key}-${idx}`, sec.content)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold text-[#8C5A4B] bg-white hover:bg-[#F2ECE4] border-2 border-[#8C5A4B]/40 hover:border-[#8C5A4B] rounded-lg transition-all cursor-pointer shadow-2xs active:scale-95"
                        >
                          {copiedDraftKey === `${currentDraft.key}-${idx}` ? (
                            <>
                              <Check className="w-4 h-4 text-emerald-600" />
                              <span>已複製公文全文</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-[#8C5A4B]" />
                              <span>複製公文全文</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="text-xs sm:text-sm text-[#2A2822] bg-white p-4 rounded-xl border border-[#DDD5C7] font-mono leading-relaxed whitespace-pre-wrap select-text">
                        {sec.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* 5. 航照套疊地籍小工具分頁 */}
      {activeTab === 'aerial-tool' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
          <div className="border-b border-[#ECE6DB] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#2D2623] flex items-center gap-2.5">
                <Layers className="w-6 h-6 text-[#8C5A4B]" />
                <span>航照套疊地籍小工具</span>
              </h2>
              <p className="text-sm text-[#7D7065] mt-1">
                線上歷史航照影像與地籍圖快速套疊比對系統，輔助認定建築物存在年代與坐落地號
              </p>
            </div>
            <a
              href="https://land-toolbox.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#8C5A4B] hover:bg-[#734437] transition-all shadow-xs cursor-pointer self-start sm:self-auto shrink-0"
            >
              <span>在新分頁開啟小工具</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* 說明卡片 */}
          <div className="p-4 sm:p-5 bg-[#FAF7F2] border-2 border-[#E4DCC8] rounded-xl space-y-2 text-sm sm:text-base text-[#4A3E39] leading-relaxed">
            <div className="font-bold text-[#8C5A4B] flex items-center gap-2">
              <span>實務使用說明</span>
            </div>
            <p>
              本工具可直接查詢地籍圖並套疊臺灣歷史空照影像（包含農林航空測量所、中央研究院及相關圖資），支援定位新北市非都市土地地號，快速檢視民國 70 年 2 月 15 日新北市公告編定基準日前後之地上物存在狀況，作為更正編定案件初審與現場會勘前的重要佐證參考。
            </p>
          </div>

          {/* 線上工具視窗 */}
          <div className="w-full rounded-2xl border-2 border-[#DDD5C7] overflow-hidden shadow-xs bg-[#FAF7F2]">
            <div className="p-3 bg-[#F5EFE7] border-b border-[#DDD5C7] flex items-center justify-between text-xs sm:text-sm font-medium text-[#665A54]">
              <span className="font-mono">https://land-toolbox.vercel.app/</span>
              <a
                href="https://land-toolbox.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8C5A4B] font-bold hover:underline flex items-center gap-1"
              >
                <span>全螢幕開啟</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <iframe
              src="https://land-toolbox.vercel.app/"
              title="航照套疊地籍小工具"
              className="w-full h-[680px] border-0"
              allow="geolocation"
            />
          </div>
        </div>
      )}
    </div>
  );
};
