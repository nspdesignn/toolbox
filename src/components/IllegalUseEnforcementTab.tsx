import React, { useState } from 'react';
import {
  FileText,
  Mail,
  Copy,
  Check,
  AlertTriangle,
  Building2,
  Search,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldAlert,
  Send,
  Users,
  User,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';

// 法務部行政執行署各分署轄區清單
interface BranchJurisdiction {
  id: number;
  name: string;
  shortName: string;
  email: string;
  ntpcDistricts: string[];
  otherJurisdiction: string;
  fullJurisdictionText: string;
}

const BRANCH_JURISDICTIONS: BranchJurisdiction[] = [
  {
    id: 1,
    name: '法務部行政執行署臺北分署',
    shortName: '臺北分署',
    email: 'tpye@mail.moj.gov.tw',
    ntpcDistricts: ['新店區', '烏來區', '深坑區', '石碇區', '坪林區'],
    otherJurisdiction: '臺北市中正區、松山區、信義區、文山區、大安區、萬華區、中山區；福建省金門縣',
    fullJurisdictionText: '臺北市中正區、松山區、信義區、文山區、大安區、萬華區、中山區、新北市新店區、烏來區、深坑區、石碇區、坪林區、福建省金門縣'
  },
  {
    id: 2,
    name: '法務部行政執行署新北分署',
    shortName: '新北分署',
    email: 'pcyd@mail.moj.gov.tw',
    ntpcDistricts: ['板橋區', '土城區', '三重區', '中和區', '永和區', '新莊區', '三峽區', '樹林區', '鶯歌區', '泰山區', '蘆洲區', '五股區', '林口區'],
    otherJurisdiction: '（新北市大部分行政區）',
    fullJurisdictionText: '新北市板橋區、土城區、三重區、中和區、永和區、新莊區、三峽區、樹林區、鶯歌區、泰山區、蘆洲區、五股區、林口區'
  },
  {
    id: 3,
    name: '法務部行政執行署士林分署',
    shortName: '士林分署',
    email: 'slyd@mail.moj.gov.tw',
    ntpcDistricts: ['汐止區', '淡水區', '八里區', '三芝區', '石門區'],
    otherJurisdiction: '臺北市士林區、北投區、大同區、內湖區、南港區；福建省連江縣',
    fullJurisdictionText: '臺北市士林區、北投區、大同區、內湖區、南港區、新北市汐止區、淡水區、八里區、三芝區、石門區、福建省連江縣'
  },
  {
    id: 4,
    name: '法務部行政執行署桃園分署',
    shortName: '桃園分署',
    email: 'tyyb1@mail.moj.gov.tw',
    ntpcDistricts: [],
    otherJurisdiction: '桃園市全區',
    fullJurisdictionText: '桃園市'
  },
  {
    id: 5,
    name: '法務部行政執行署宜蘭分署',
    shortName: '宜蘭分署',
    email: 'ilyd@mail.moj.gov.tw',
    ntpcDistricts: ['瑞芳區', '貢寮區', '雙溪區', '平溪區', '萬里區', '金山區'],
    otherJurisdiction: '宜蘭縣全境、基隆市全境',
    fullJurisdictionText: '宜蘭縣、基隆市、新北市瑞芳區、貢寮區、雙溪區、平溪區、萬里區、金山區'
  }
];

export const IllegalUseEnforcementTab: React.FC = () => {
  // 移送書範例切換：1 人 vs 多人
  const [sampleType, setSampleType] = useState<'single' | 'multiple'>('single');
  // 檢視模式：公文格式表格 vs 純文字範本
  const [viewMode, setViewMode] = useState<'table' | 'raw'>('table');
  // 行政區快速篩選搜尋
  const [districtQuery, setDistrictQuery] = useState<string>('');
  // 複製回饋浮條提示
  const [copiedTip, setCopiedTip] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedTip(`已複製「${label}」至剪貼簿！`);
    setTimeout(() => setCopiedTip(null), 2500);
  };

  // 移送書 1：受處分人為 1 人純文字範例（依照移行政執行署.pdf 第 2 頁）
  const singleRawText = `移送案號：221B05-land-681

新北市政府 行政執行案件移送書
發文日期：中華民國 114 年 07 月   日
發文字號：新北府地管字第 1141506885 號

義務人：
姓名或名稱：天峰谷育樂股份有限公司
法定代理人或代表人：
出生年月日：
性別：
身分證統一號碼或營利事業統一編號：22488808
住居所或事務所、營業所地址及郵遞區號：221 新北市汐止區汐平路二段 107 號
執行標的物所在地：詳如財產清單
分署收案日期：

義務發生之原因與日期：違反區域計畫法案件，114 年 2 月 11 日新北府地管字第 1140244847 號行政處分書
行政處分或裁定確定日：■114 年 7 月 14 日  □尚未確定
移送法條：■依據行政執行法第 11 條  ■依據相關之移送法條
繳納期間屆滿日：114 年 7 月 14 日
執行必要費用核銷機關（單位）名稱及統一編號：核銷機關(單位)名稱 新北市政府地政局 / 統一編號 10046981
應納金額：60,000 元 (細目詳如附件)

承辦移送業務機關（單位）名稱與受款金融機構帳戶及帳號：
承辦機關(單位)名稱：新北市政府地政局
□執行（債權）憑證再移送
□執行憑證編號：
立帳金融機構名稱：台灣銀行板橋分行 0040277
受款帳戶：新北市政府地政局保管金專戶
帳號：93014602700116
催繳情形：■業經催繳  □未經催繳
催繳方式：□電話催繳  ■明信片或信函方式催繳  □其他方式

附件：
□附表
■處分文書、裁定書或義務人依法令負有義務之證明文件及送達證明文件
■義務人經限期履行而逾期仍不履行之證明文件及送達證明文件
■義務人之財產目錄
□土地登記簿謄本
■義務人之戶籍資料
□保全措施之資料
□執行（債權）憑證

保全措施：
□已限制出境（日期： 年 月 日） □已禁止處分 □已提供擔保 □已假扣押 □已勒令停業

此致
法務部行政執行署士林分署`;

  // 移送書 2：受處分人為多人純文字範例（依照移行政執行署.pdf 第 3、4 頁）
  const multipleRawText = `移送案號：221B05-land-693

新北市政府 行政執行案件移送書
發文日期：中華民國 114 年 9 月 30 日
發文字號：新北府地管字第 1141951459 號

義務人：
姓名或名稱：如後附
法定代理人或代表人：
出生年月日：如後附
性別：如後附
身分證統一號碼或營利事業統一編號：如後附
住居所或事務所、營業所地址及郵遞區號：如後附
執行標的物所在地：詳如財產清單
分署收案日期：

義務發生之原因與日期：違反區域計畫法案件，114 年 6 月 18 日新北府地管字第 1141151841 號行政處分書
行政處分或裁定確定日：■114 年 7 月 21 日  □尚未確定
移送法條：■依據行政執行法第 11 條  ■依據相關之移送法條
繳納期間屆滿日：114 年 7 月 21 日
執行必要費用核銷機關（單位）名稱及統一編號：核銷機關(單位)名稱 新北市政府地政局 / 統一編號 10046981
應納金額：60,000 元 (細目詳如附件)

承辦移送業務機關（單位）名稱與受款金融機構帳戶及帳號：
承辦機關(單位)名稱：新北市政府地政局
□執行（債權）憑證再移送
□執行憑證編號：
立帳金融機構名稱：台灣銀行板橋分行 0040277
受款帳戶：新北市政府地政局保管金專戶
帳號：93014602700116
催繳情形：■業經催繳  □未經催繳
催繳方式：□電話催繳  ■明信片或信函方式催繳  □其他方式

附件：
□附表
■處分文書、裁定書或義務人依法令負有義務之證明文件及送達證明文件
■義務人經限期履行而逾期仍不履行之證明文件及送達證明文件
■義務人之財產目錄
□土地登記簿謄本
■義務人之戶籍資料
□保全措施之資料
□執行（債權）憑證

保全措施：
□已限制出境（日期： 年 月 日） □已禁止處分 □已提供擔保 □已假扣押 □已勒令停業

此致
法務部行政執行署宜蘭分署

--------------------------------------------------
【義務人附表】
姓名或名稱：吳 OO / 吳 OO / 魏 OO / 徐 OO
出生年月日：OO 年 OO 月 OO 日 / OO 年 OO 月 OO 日 / OO 年 OO 月 OO 日 / OO 年 OO 月 OO 日
性別：女 / 男 / 男 / 男
身分證統一號碼或營利事業統一編號：OOOOOOOOOO / OOOOOOOOOO / OOOOOOOOOO / OOOOOOOOOO
住居所或事務所、營業所地址及郵遞區號：OOO / OOO / OOO / OOO`;

  // 篩選行政執行分署
  const filteredBranches = BRANCH_JURISDICTIONS.filter((branch) => {
    if (!districtQuery.trim()) return true;
    const q = districtQuery.trim().toLowerCase();
    return (
      branch.name.toLowerCase().includes(q) ||
      branch.shortName.toLowerCase().includes(q) ||
      branch.fullJurisdictionText.toLowerCase().includes(q) ||
      branch.ntpcDistricts.some((d) => d.includes(q))
    );
  });

  return (
    <div className="space-y-6">
      {/* 浮條複製通知 */}
      {copiedTip && (
        <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-sm animate-in fade-in duration-150">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{copiedTip}</span>
        </div>
      )}

      {/* 提示警語橫幅 */}
      <div className="bg-[#FFFBEB] border-2 border-[#FDE68A] text-[#92400E] px-4 sm:px-5 py-3.5 rounded-2xl flex items-center gap-3 shadow-2xs">
        <span className="text-[#D97706] shrink-0 font-extrabold text-lg">★</span>
        <div className="flex-1 text-sm sm:text-base font-bold">
          【實際回文內容仍須由承辦人依個案判斷撰寫】
        </div>
      </div>

      {/* 一、流程 (適用時機) 時序引導卡片 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-[#ECE6DB]">
          <div className="p-2 bg-[#1F3864] text-white rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
              一、流程（適用時機）
            </h2>
            <p className="text-xs sm:text-sm text-[#7D7065]">
              非都市土地違反區域計畫法處分確定後，未繳納罰鍰之催繳與強制執行時序
            </p>
          </div>
        </div>

        {/* 箭頭橫向流程鏈 */}
        <div className="p-4 sm:p-5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] overflow-x-auto">
          <div className="flex items-center gap-2 sm:gap-3 min-w-[700px] text-xs sm:text-sm font-bold text-[#2D2623]">
            <div className="px-3.5 py-2.5 bg-white border border-[#DDD5C7] rounded-xl text-center shadow-2xs shrink-0">
              <span className="text-[#1F3864]">違規處分書</span>
            </div>

            <ArrowRight className="w-4 h-4 text-[#8C5A4B] shrink-0" />

            <div className="px-3 py-2 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-center shadow-2xs shrink-0">
              <span>(一個月後) 查罰鍰是否繳清</span>
            </div>

            <ArrowRight className="w-4 h-4 text-[#8C5A4B] shrink-0" />

            <div className="px-3 py-2 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-center shadow-2xs shrink-0">
              <span>未繳</span>
            </div>

            <ArrowRight className="w-4 h-4 text-[#8C5A4B] shrink-0" />

            <div className="px-3.5 py-2.5 bg-white border border-[#DDD5C7] rounded-xl text-center shadow-2xs shrink-0">
              <div className="text-[#1F3864]">發文催繳</div>
              <div className="text-[11px] text-[#B45309] font-normal">限 7 日內或月底繳清</div>
            </div>

            <ArrowRight className="w-4 h-4 text-[#8C5A4B] shrink-0" />

            <div className="px-3 py-2 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-center shadow-2xs shrink-0">
              <span>未繳</span>
            </div>

            <ArrowRight className="w-4 h-4 text-[#8C5A4B] shrink-0" />

            <div className="px-4 py-2.5 bg-[#8C5A4B] text-white rounded-xl text-center font-bold shadow-2xs shrink-0 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              <span>移行政執行署強制執行</span>
            </div>
          </div>
        </div>
      </div>

      {/* 二、移行政執行署強制執行流程與附件要點 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
        <div className="flex items-center gap-2.5 pb-3 border-b border-[#ECE6DB]">
          <div className="p-2 bg-[#8C5A4B] text-white rounded-xl">
            <Send className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
              二、移行政執行署強制執行流程
            </h2>
            <p className="text-xs sm:text-sm text-[#7D7065]">
              依行政執行法規定備齊受處分人財產資料、移送書用印、陳核及發文副知地政局規範
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 步驟 1 */}
          <div className="p-4 sm:p-5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#1F3864] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <span className="font-bold text-base text-[#1F3864]">查受處分人財產</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A3E39] pt-2 leading-relaxed">
                發文給<strong>稅捐處</strong>、<strong>國稅局</strong>，查調受處分人名下最新之全國財產總歸戶清單與所得資料。
              </p>
            </div>
            <div className="pt-2 text-[11px] text-[#7D7065] border-t border-[#ECE6DB]">
              需檢附財產資料作為移送附件(4)
            </div>
          </div>

          {/* 步驟 2 */}
          <div className="p-4 sm:p-5 bg-[#FAF7F2] rounded-xl border-2 border-[#8C5A4B]/40 space-y-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#8C5A4B] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <span className="font-bold text-base text-[#8C5A4B]">發文行政執行署</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A3E39] pt-2 leading-relaxed">
                發文<strong>行政執行署</strong>（依受處分人戶籍或財產所在分署），<strong>副本抄送地政局</strong>。備齊 5 大發文附件並辦理用印陳核。
              </p>
            </div>
            <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-xs font-bold text-rose-800 leading-snug">
              ★ 注意：給副本地政局的發文附件「只有移送書」！
            </div>
          </div>

          {/* 步驟 3 */}
          <div className="p-4 sm:p-5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#1F3864] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <span className="font-bold text-base text-[#1F3864]">發文後寄送電子檔</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A3E39] pt-2 leading-relaxed">
                完成發文取號後，填寫 <strong>Excel 電子檔</strong>，並以公務信箱 <strong>Email 寄給該管行政執行分署</strong> 窗口信箱完成案件移送。
              </p>
            </div>
            <div className="pt-2 text-[11px] text-[#7D7065] border-t border-[#ECE6DB]">
              各分署收件 Email 詳見下方一覽表
            </div>
          </div>
        </div>

        {/* 發文附件 5 項檢核表與注意事項 */}
        <div className="p-4 sm:p-5 bg-white rounded-xl border-2 border-[#1F3864]/30 space-y-3.5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-sm sm:text-base font-bold text-[#1F3864] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#8C5A4B]" />
              發文行政執行署之 5 大必備附件清單：
            </span>
            <span className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-0.5 rounded-full">
              正本檢附全套 / 副本僅附移送書
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs sm:text-sm">
            <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#DDD5C7] flex flex-col justify-between">
              <div>
                <span className="font-bold text-[#8C5A4B]">(1) 移送書（要用印）</span>
                <p className="text-xs text-[#5B584E] mt-1 leading-relaxed">
                  移送案號要去 <strong>X 槽列管表取號</strong>。<br />
                  <span className="text-[#C0392B] font-bold">★ 發文日陳核時先不用填（只要填年月，發文後始填日）</span>
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#DDD5C7] flex flex-col justify-between">
              <div>
                <span className="font-bold text-[#8C5A4B]">(2) 處分書影本 + 送達證書</span>
                <p className="text-xs text-[#5B584E] mt-1 leading-relaxed">
                  處分書需為<strong>已經用印的影本</strong>，並附上合法送達回執（送達證書影本）。
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#DDD5C7] flex flex-col justify-between">
              <div>
                <span className="font-bold text-[#8C5A4B]">(3) 催繳函 + 送達證書</span>
                <p className="text-xs text-[#5B584E] mt-1 leading-relaxed">
                  附催繳公文影本及郵局送達證書（雙掛號回執證明）。
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#DDD5C7] flex flex-col justify-between">
              <div>
                <span className="font-bold text-[#8C5A4B]">(4) 國稅局、稅捐處財產資料</span>
                <p className="text-xs text-[#5B584E] mt-1 leading-relaxed">
                  前揭函查所得之財產清單與所得歸戶明細資料。
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#DDD5C7] flex flex-col justify-between">
              <div>
                <span className="font-bold text-[#8C5A4B]">(5) 受處分人戶籍資料</span>
                <p className="text-xs text-[#5B584E] mt-1 leading-relaxed">
                  受處分人之個人戶籍謄本或新式戶口名簿影本。
                </p>
              </div>
            </div>

            <div className="p-3 bg-rose-50 rounded-lg border border-rose-200 flex flex-col justify-center">
              <div className="text-xs sm:text-sm font-bold text-rose-800 leading-relaxed">
                ⚠️ 重要特別提醒：<br />
                <span className="font-normal text-rose-700">
                  給「副本地政局」的發文附件<strong>只有移送書</strong>，其他 4 項附件皆不必檢附，以符公文減紙及個資保護原則！
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 法務部行政執行署各分署轄區一覽表與 Email 窗口 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#ECE6DB]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#1F3864] text-white rounded-xl">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                法務部行政執行署各分署轄區一覽表
              </h2>
              <p className="text-xs sm:text-sm text-[#7D7065]">
                查明受處分人住居所或不動產所在地之管轄分署與寄送 Excel 電子檔信箱
              </p>
            </div>
          </div>

          {/* 新北市行政區快速篩選輸入框 */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#7D7065] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={districtQuery}
              onChange={(e) => setDistrictQuery(e.target.value)}
              placeholder="輸入行政區快查（如汐止、板橋）"
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-xl border border-[#DDD5C7] bg-[#FAF7F2] focus:bg-white focus:outline-hidden focus:border-[#8C5A4B] transition-all"
            />
          </div>
        </div>

        {/* 轄區表格 */}
        <div className="overflow-x-auto rounded-xl border border-[#DDD5C7]">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-[#1F3864] text-white">
                <th className="p-3 w-12 text-center">編號</th>
                <th className="p-3 w-48 whitespace-nowrap">分署機關名稱</th>
                <th className="p-3 min-w-[320px]">轄區（新北市行政區標註）</th>
                <th className="p-3 w-56 whitespace-nowrap">寄送 Excel 電子檔 Email</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ECE6DB] bg-white">
              {filteredBranches.map((branch) => (
                <tr key={branch.id} className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="p-3 text-center font-bold text-[#1F3864]">
                    {branch.id}
                  </td>
                  <td className="p-3 font-bold text-[#2D2623]">
                    <div className="text-sm font-semibold text-[#1F3864]">{branch.name}</div>
                    <div className="text-xs text-[#7D7065]">{branch.shortName}</div>
                  </td>
                  <td className="p-3 leading-relaxed text-[#2D2623]">
                    {branch.ntpcDistricts.length > 0 && (
                      <div className="mb-1 flex flex-wrap gap-1 items-center">
                        <span className="text-[11px] font-bold text-[#8C5A4B] mr-1">新北轄區：</span>
                        {branch.ntpcDistricts.map((dist) => (
                          <span
                            key={dist}
                            className={`px-1.5 py-0.5 rounded text-[11px] font-medium border ${
                              districtQuery && dist.includes(districtQuery.trim())
                                ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold'
                                : 'bg-[#F2ECE3] text-[#4A3E39] border-[#DDD5C7]'
                            }`}
                          >
                            {dist}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="text-xs text-[#7D7065]">
                      {branch.fullJurisdictionText}
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-1.5 font-mono text-xs text-[#1F3864] font-medium">
                      <span>{branch.email}</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(branch.email, `${branch.shortName} Email`)}
                        title="複製 Email"
                        className="p-1 hover:bg-[#F2ECE3] rounded transition-colors text-[#8C5A4B] cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 三、移送書範例 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ECE6DB]">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
              三、移送書範例
            </h2>
          </div>

          {/* 右上角切換與複製按鈕 */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex rounded-xl bg-[#FAF7F2] p-1 border border-[#DDD5C7]">
              <button
                type="button"
                onClick={() => setSampleType('single')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  sampleType === 'single'
                    ? 'bg-[#8C5A4B] text-white shadow-xs'
                    : 'text-[#4A3E39] hover:bg-white/60'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>1. 受處分人為 1 人</span>
              </button>
              <button
                type="button"
                onClick={() => setSampleType('multiple')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  sampleType === 'multiple'
                    ? 'bg-[#8C5A4B] text-white shadow-xs'
                    : 'text-[#4A3E39] hover:bg-white/60'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>2. 受處分人為多人 (附名冊)</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleCopy(sampleType === 'single' ? singleRawText : multipleRawText, sampleType === 'single' ? '移送書（1人）' : '移送書（多人）')}
              className="px-3.5 py-1.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#8C5A4B] hover:bg-[#734437] transition-all cursor-pointer flex items-center gap-1.5 shadow-xs shrink-0"
            >
              <Copy className="w-4 h-4" />
              <span>一鍵複製全文範本</span>
            </button>
          </div>
        </div>

        {/* 紅字陳核重點與提示 */}
        <div className="p-4 bg-[#FFF5F5] border border-[#FECACA] rounded-xl text-xs sm:text-sm text-[#991B1B] space-y-1.5">
          <div className="font-bold flex items-center gap-1.5 text-base text-[#B91C1C]">
            <AlertTriangle className="w-4 h-4" />
            <span>【移送書填寫與陳核要領（紅字標註重點）】：</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-1 font-medium text-xs sm:text-sm text-[#7F1D1D]">
            <div className="p-2.5 bg-white rounded-lg border border-[#FCA5A5]">
              <span className="font-bold text-[#DC2626]">① 移送案號：</span>
              <span>要去公務電腦 <strong>X 槽取號</strong></span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-[#FCA5A5]">
              <span className="font-bold text-[#DC2626]">② 發文日期：</span>
              <span><strong>陳核時只要填年月</strong>（發文後由發文人員填日）</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-[#FCA5A5]">
              <span className="font-bold text-[#DC2626]">③ 裁定確定日：</span>
              <span>日期填<strong>處分書送達後一個月</strong></span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-[#FCA5A5]">
              <span className="font-bold text-[#DC2626]">④ 此致分署：</span>
              <span><strong>一定要依當事人管轄改轄區分署</strong></span>
            </div>
          </div>
        </div>

        {/* 檢視模式切換：表格格式 vs 純文字 */}
        <div className="flex items-center justify-between pt-2">
          <div className="text-sm font-bold text-[#1F3864] flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#8C5A4B]" />
            <span>
              {sampleType === 'single' ? '移送書範本：受處分人為 1 人' : '移送書範本：受處分人為多人（附名冊）'}
            </span>
          </div>

          <div className="inline-flex rounded-lg bg-[#FAF7F2] p-1 border border-[#DDD5C7] text-xs">
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer font-semibold ${
                viewMode === 'table' ? 'bg-[#1F3864] text-white' : 'text-[#4A3E39]'
              }`}
            >
              公文格式表格
            </button>
            <button
              type="button"
              onClick={() => setViewMode('raw')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer font-semibold ${
                viewMode === 'raw' ? 'bg-[#1F3864] text-white' : 'text-[#4A3E39]'
              }`}
            >
              純文字全文
            </button>
          </div>
        </div>

        {/* 1. 公文格式表格檢視 */}
        {viewMode === 'table' ? (
          <div className="border-2 border-[#DDD5C7] rounded-xl overflow-hidden bg-white shadow-xs text-xs sm:text-sm font-sans">
            {/* 表頭 */}
            <div className="p-4 sm:p-5 bg-[#FAF7F2] border-b border-[#DDD5C7] space-y-2">
              <div className="flex justify-end items-center gap-2">
                <span className="font-bold text-[#7D7065]">移送案號：</span>
                <span className="font-mono font-bold text-base px-2.5 py-0.5 rounded bg-white border border-[#DDD5C7] text-[#1F3864]">
                  {sampleType === 'single' ? '221B05-land-681' : '221B05-land-693'}
                </span>
                <span className="text-[#DC2626] text-xs font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  【X槽取號】
                </span>
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                  新北市政府 行政執行案件移送書
                </h3>
                <div className="text-xs text-[#7D7065] flex items-center justify-center gap-3">
                  <span>
                    發文日期：中華民國 {sampleType === 'single' ? '114 年 07 月   日' : '114 年 9 月 30 日'}
                  </span>
                  <span className="text-[#DC2626] font-bold">
                    【陳核時只要填年月】
                  </span>
                </div>
                <div className="text-xs font-mono text-[#7D7065]">
                  發文字號：{sampleType === 'single' ? '新北府地管字第 1141506885 號' : '新北府地管字第 1141951459 號'}
                </div>
              </div>
            </div>

            {/* 表格主體 */}
            <table className="w-full border-collapse border-t border-[#DDD5C7]">
              <tbody>
                {/* 義務人基本資料 */}
                <tr className="border-b border-[#DDD5C7]">
                  <td className="w-24 sm:w-32 p-2.5 sm:p-3 bg-[#FAF7F2] font-bold text-[#1F3864] text-center border-r border-[#DDD5C7]">
                    義務人
                  </td>
                  <td className="p-2.5 sm:p-3 space-y-1.5" colSpan={3}>
                    {sampleType === 'single' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <span className="font-bold text-[#7D7065]">姓名或名稱：</span>
                          <span className="font-semibold text-[#1F3864]">天峰谷育樂股份有限公司</span>
                        </div>
                        <div>
                          <span className="font-bold text-[#7D7065]">法定代理人或代表人：</span>
                          <span className="font-semibold text-[#1F3864]"></span>
                        </div>
                        <div>
                          <span className="font-bold text-[#7D7065]">出生年月日：</span>
                          <span></span>
                        </div>
                        <div>
                          <span className="font-bold text-[#7D7065]">性別：</span>
                          <span></span>
                        </div>
                        <div>
                          <span className="font-bold text-[#7D7065]">統編 / 身分證字號：</span>
                          <span className="font-mono">22488808</span>
                        </div>
                        <div className="sm:col-span-2">
                          <span className="font-bold text-[#7D7065]">住居所 / 事務所地址：</span>
                          <span>221 新北市汐止區汐平路二段 107 號</span>
                        </div>
                      </div>
                    ) : (
                      <div className="py-1">
                        <span className="font-bold text-[#1F3864]">姓名或名稱、出生年月日、性別、統編、地址：</span>
                        <span className="text-[#8C5A4B] font-bold px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#DDD5C7] ml-2">
                          如後附（詳如義務人附表）
                        </span>
                      </div>
                    )}
                  </td>
                </tr>

                {/* 執行標的物所在地 */}
                <tr className="border-b border-[#DDD5C7]">
                  <td className="p-2.5 sm:p-3 bg-[#FAF7F2] font-bold text-[#1F3864] text-center border-r border-[#DDD5C7]">
                    執行標的物所在地
                  </td>
                  <td className="p-2.5 sm:p-3 font-semibold text-[#1F3864]" colSpan={3}>
                    詳如財產清單
                  </td>
                </tr>

                {/* 義務發生原因與行政處分確定日 */}
                <tr className="border-b border-[#DDD5C7]">
                  <td className="p-2.5 sm:p-3 bg-[#FAF7F2] font-bold text-[#1F3864] text-center border-r border-[#DDD5C7]">
                    義務發生之<br />原因與日期
                  </td>
                  <td className="p-2.5 sm:p-3 leading-relaxed border-r border-[#DDD5C7]">
                    {sampleType === 'single'
                      ? '違反區域計畫法案件，114 年 2 月 11 日新北府地管字第 1140244847 號行政處分書'
                      : '違反區域計畫法案件，114 年 6 月 18 日新北府地管字第 1141151841 號行政處分書'}
                  </td>
                  <td className="p-2.5 sm:p-3 leading-relaxed" colSpan={2}>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-bold text-[#1F3864]">行政處分或裁定確定日：</span>
                      <span className="font-mono font-bold text-[#8C5A4B]">
                        ■ {sampleType === 'single' ? '114 年 7 月 14 日' : '114 年 7 月 21 日'}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#DC2626] font-bold mt-1">
                      ★ 日期填處分書送達後一個月
                    </div>
                  </td>
                </tr>

                {/* 移送法條與繳納期間 */}
                <tr className="border-b border-[#DDD5C7]">
                  <td className="p-2.5 sm:p-3 bg-[#FAF7F2] font-bold text-[#1F3864] text-center border-r border-[#DDD5C7]">
                    移送法條
                  </td>
                  <td className="p-2.5 sm:p-3 border-r border-[#DDD5C7]">
                    ■ 依據行政執行法第 11 條<br />
                    ■ 依據相關之移送法條
                  </td>
                  <td className="p-2.5 sm:p-3" colSpan={2}>
                    <span className="font-bold text-[#1F3864]">繳納期間屆滿日：</span>
                    <span className="font-mono font-semibold ml-1">
                      {sampleType === 'single' ? '114 年 7 月 14 日' : '114 年 7 月 21 日'}
                    </span>
                  </td>
                </tr>

                {/* 核銷機關統編與應納金額 */}
                <tr className="border-b border-[#DDD5C7]">
                  <td className="p-2.5 sm:p-3 bg-[#FAF7F2] font-bold text-[#1F3864] text-center border-r border-[#DDD5C7]">
                    核銷機關統編
                  </td>
                  <td className="p-2.5 sm:p-3 border-r border-[#DDD5C7]">
                    新北市政府地政局<br />
                    統一編號：<span className="font-mono font-bold">10046981</span>
                  </td>
                  <td className="p-2.5 sm:p-3" colSpan={2}>
                    <span className="font-bold text-[#1F3864]">應納金額：</span>
                    <span className="text-base font-bold text-rose-700 ml-1">60,000 元</span>
                    <span className="text-xs text-[#7D7065] ml-1.5">(細目詳如附件)</span>
                  </td>
                </tr>

                {/* 承辦機關與受款帳戶資訊 */}
                <tr className="border-b border-[#DDD5C7]">
                  <td className="p-2.5 sm:p-3 bg-[#FAF7F2] font-bold text-[#1F3864] text-center border-r border-[#DDD5C7]">
                    承辦機關<br />與金融帳戶
                  </td>
                  <td className="p-2.5 sm:p-3 space-y-1 border-r border-[#DDD5C7]" colSpan={2}>
                    <div><strong>承辦機關：</strong>新北市政府地政局</div>
                    <div><strong>金融機構：</strong>台灣銀行板橋分行 0040277</div>
                    <div><strong>受款帳戶：</strong>新北市政府地政局保管金專戶</div>
                    <div><strong>帳號：</strong><span className="font-mono font-bold">93014602700116</span></div>
                  </td>
                  <td className="p-2.5 sm:p-3 space-y-1">
                    <div><strong>催繳情形：</strong>■ 業經催繳</div>
                    <div><strong>催繳方式：</strong>■ 明信片或信函方式催繳</div>
                  </td>
                </tr>

                {/* 附件勾選清單 */}
                <tr className="border-b border-[#DDD5C7]">
                  <td className="p-2.5 sm:p-3 bg-[#FAF7F2] font-bold text-[#1F3864] text-center border-r border-[#DDD5C7]">
                    附件清單
                  </td>
                  <td className="p-2.5 sm:p-3" colSpan={3}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                      <div className="font-semibold text-[#1F3864]">
                        ■ 處分文書、裁定書或義務人依法令負有義務之證明文件及送達證明文件
                      </div>
                      <div className="font-semibold text-[#1F3864]">
                        ■ 義務人經限期履行而逾期仍不履行之證明文件及送達證明文件
                      </div>
                      <div className="font-semibold text-[#1F3864]">
                        ■ 義務人之財產目錄
                      </div>
                      <div className="font-semibold text-[#1F3864]">
                        ■ 義務人之戶籍資料
                      </div>
                    </div>
                  </td>
                </tr>

                {/* 此致分署受文機關 */}
                <tr>
                  <td className="p-2.5 sm:p-3 bg-[#FAF7F2] font-bold text-[#1F3864] text-center border-r border-[#DDD5C7]">
                    此致
                  </td>
                  <td className="p-2.5 sm:p-3" colSpan={3}>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-base font-bold text-[#1F3864]">
                        {sampleType === 'single'
                          ? '法務部行政執行署士林分署'
                          : '法務部行政執行署宜蘭分署'}
                      </span>
                      <span className="text-xs bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded border border-rose-300">
                        【★ 要改轄區分署，不可照抄】
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* 多人情況下的義務人名冊附表 */}
            {sampleType === 'multiple' && (
              <div className="p-4 sm:p-5 border-t-2 border-[#1F3864] bg-[#FAF7F2] space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#8C5A4B]" />
                    <span>【義務人附表（受處分人名冊）】</span>
                  </h4>
                  <span className="text-xs text-[#7D7065]">
                    多人受處分時作為移送書附件名冊
                  </span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] bg-white">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#1F3864] text-white">
                        <th className="p-2.5 text-center w-12">編號</th>
                        <th className="p-2.5 w-24">姓名或名稱</th>
                        <th className="p-2.5 w-36">出生年月日</th>
                        <th className="p-2.5 w-16 text-center">性別</th>
                        <th className="p-2.5 w-36">身分證/統編</th>
                        <th className="p-2.5">住居所、營業所地址及郵遞區號</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ECE6DB]">
                      <tr>
                        <td className="p-2.5 text-center font-bold">1</td>
                        <td className="p-2.5 font-bold text-[#1F3864]">吳 OO</td>
                        <td className="p-2.5 font-mono">OO 年 OO 月 OO 日</td>
                        <td className="p-2.5 text-center">女</td>
                        <td className="p-2.5 font-mono">OOOOOOOOOO</td>
                        <td className="p-2.5">OOO</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 text-center font-bold">2</td>
                        <td className="p-2.5 font-bold text-[#1F3864]">吳 OO</td>
                        <td className="p-2.5 font-mono">OO 年 OO 月 OO 日</td>
                        <td className="p-2.5 text-center">男</td>
                        <td className="p-2.5 font-mono">OOOOOOOOOO</td>
                        <td className="p-2.5">OOO</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 text-center font-bold">3</td>
                        <td className="p-2.5 font-bold text-[#1F3864]">魏 OO</td>
                        <td className="p-2.5 font-mono">OO 年 OO 月 OO 日</td>
                        <td className="p-2.5 text-center">男</td>
                        <td className="p-2.5 font-mono">OOOOOOOOOO</td>
                        <td className="p-2.5">OOO</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 text-center font-bold">4</td>
                        <td className="p-2.5 font-bold text-[#1F3864]">徐 OO</td>
                        <td className="p-2.5 font-mono">OO 年 OO 月 OO 日</td>
                        <td className="p-2.5 text-center">男</td>
                        <td className="p-2.5 font-mono">OOOOOOOOOO</td>
                        <td className="p-2.5">OOO</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* 2. 純文字檢視模式 */
          <div className="space-y-2">
            <pre className="p-5 sm:p-6 bg-[#FAF7F2] text-[#2D2623] border-2 border-[#DDD5C7] rounded-xl font-mono text-xs sm:text-base leading-relaxed overflow-x-auto whitespace-pre-wrap select-all shadow-inner">
              {sampleType === 'single' ? singleRawText : multipleRawText}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
