import React, { useState } from 'react';
import {
  ArrowLeft,
  FileCheck2,
  Table,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Layers,
  FileText,
  Search,
  Building,
  TreePine,
  ShieldCheck,
  Mountain
} from 'lucide-react';

interface SupplementaryNoteDetailPageProps {
  onBack: () => void;
}

// 4 大作業流程
const WORKFLOW_STEPS = [
  {
    step: 1,
    title: '收件',
    item: '農業局檢送可利用限度查定結果清冊',
    notes: [
      '接獲新北市政府農業局檢送之山坡地可利用限度查定結果清冊及相關地籍圖說。',
      '登錄收文號並確認所送查定清冊所涵蓋之地段、地號與土地筆數。'
    ]
  },
  {
    step: 2,
    title: '確認清冊',
    item: '依「製定非都市土地使用分區圖及編定各種使用地作業須知」第 9 點說明 8(4)，補註使用地類別為農牧用地、林業用地或國土保安用地',
    notes: [
      '1. 確認查定結果與航照是否符合（例如：有沒有寫宜農地，但航照是一堆建物）。',
      '2. 照查定結果補註為農牧、林業或國土保安用地。',
      '3. 不屬查定範圍者：依該使用分區主要用地編定（參考編定原則表）。'
    ],
    highlight: true
  },
  {
    step: 3,
    title: '異動',
    item: '製作補註用地清冊，發文請地所異動',
    notes: [
      '完成查核及編定比對後，製作「補註使用地類別清冊」。',
      '以府函發文囑託轄區地政事務所辦理土地登記簿標示部使用地類別異動登記。'
    ]
  },
  {
    step: 4,
    title: '地所備查',
    item: '地所異動完成後，會報府備查',
    notes: [
      '轄區地政事務所完成登記異動與圖冊標註後，檢附異動清冊函報市府備查。',
      '承辦人審核無誤後予以結案歸檔。'
    ]
  }
];

export const SupplementaryNoteDetailPage: React.FC<SupplementaryNoteDetailPageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'workflow' | 'table'>('workflow');

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* 頂部標題區 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ECE6DB]">
          <div className="flex items-center gap-3.5 min-w-0">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm sm:text-base font-semibold text-[#4A3E39] bg-[#F5EFE7] hover:bg-[#EAE2D7] border border-[#DDD5C7] rounded-xl transition-colors cursor-pointer shrink-0 whitespace-nowrap shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">返回業務選單</span>
            </button>
            <div className="h-6 w-px bg-[#DDD5C7] shrink-0" />
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl font-serif-tc font-semibold text-[#1F3864]">
                補註用地
              </h1>
              <p className="text-sm sm:text-base text-[#5B584E] mt-0.5">
                依可利用限度查定結果清冊補註使用地類別為農牧、林業或國土保安用地
              </p>
            </div>
          </div>
        </div>

        {/* 2 大功能分頁按鈕 */}
        <div className="flex flex-wrap items-center gap-2.5 pt-4 text-sm sm:text-base">
          <button
            onClick={() => setActiveTab('workflow')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'workflow'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>辦理流程與注意事項</span>
          </button>

          <button
            onClick={() => setActiveTab('table')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'table'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Table className="w-4 h-4" />
            <span>編定原則表</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 分頁 1：辦理流程與注意事項 (依 補註用地別.pdf 第 1 頁) */}
      {/* ========================================================================= */}
      {activeTab === 'workflow' && (
        <div className="space-y-6">
          {/* 法規依據重點提示卡 */}
          <div className="bg-[#FFFFFF] border-2 border-[#1F3864]/20 rounded-2xl p-5 sm:p-6 shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-[#1F3864] font-bold text-base sm:text-lg">
              <Mountain className="w-5 h-5 text-[#8C5A4B]" />
              <span>法規依據與作業依循</span>
            </div>
            <p className="text-sm sm:text-base text-[#2A2822] leading-relaxed">
              依<strong>「製定非都市土地使用分區圖及編定各種使用地作業須知」第 9 點說明 8(4)</strong>規定，山坡地範圍內暫未編定用地，依主管機關檢送之可利用限度查定結果清冊，補註使用地類別為<strong>農牧用地</strong>、<strong>林業用地</strong>或<strong>國土保安用地</strong>。
            </p>
          </div>

          {/* 流程表格卡片 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
            <div className="border-b border-[#ECE6DB] pb-3 flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864] flex items-center gap-2">
                <FileCheck2 className="w-6 h-6 text-[#1F3864]" />
                <span>補註用地作業流程</span>
              </h2>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#FAF7F2] text-[#5B584E] border border-[#DDD5C7]">
                共 4 個步驟
              </span>
            </div>

            {/* 1:1 對齊 PDF 第 1 頁作業表格 */}
            <div className="overflow-x-auto rounded-xl border-2 border-[#1F3864] shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#1F3864] text-white">
                    <th className="py-3 px-4 font-bold border-r border-[#314E80] w-16 text-center">序號</th>
                    <th className="py-3 px-4 font-bold border-r border-[#314E80] w-28 whitespace-nowrap">流程</th>
                    <th className="py-3 px-5 font-bold border-r border-[#314E80] w-2/5">項目</th>
                    <th className="py-3 px-5 font-bold">注意事項</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ECE6DB] text-[#2A2822]">
                  {WORKFLOW_STEPS.map((s, idx) => (
                    <tr
                      key={s.step}
                      className={`hover:bg-[#FAF7F2] ${s.highlight ? 'bg-amber-50/40' : idx % 2 === 1 ? 'bg-[#FAF7F2]/50' : 'bg-white'}`}
                    >
                      <td className="py-4 px-4 text-center font-bold text-[#1F3864] border-r border-[#ECE6DB] font-mono text-base align-top">
                        {s.step}
                      </td>
                      <td className="py-4 px-4 font-bold text-[#1F3864] border-r border-[#ECE6DB] text-sm sm:text-base align-top whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#8C5A4B]" />
                          <span>{s.title}</span>
                        </div>
                      </td>
                      <td className="py-4 px-5 border-r border-[#ECE6DB] text-sm sm:text-base text-[#2A2822] align-top leading-relaxed font-medium">
                        {s.item}
                      </td>
                      <td className="py-4 px-5 space-y-2 align-top text-xs sm:text-sm text-[#3E342F] leading-relaxed">
                        {s.step === 2 ? (
                          <div className="space-y-2">
                            <div className="p-3 bg-amber-50 rounded-lg border border-amber-300 text-amber-950 font-bold space-y-1">
                              <div className="flex items-center gap-1.5 text-[#C4711A]">
                                <AlertTriangle className="w-4 h-4 shrink-0" />
                                <span>審核核心 3 大注意事項：</span>
                              </div>
                              <div className="pl-5 space-y-1 font-normal text-xs sm:text-sm">
                                <p><strong>1. 確認查定結果與航照是否符合</strong>（例如：有沒有寫宜農地，但航照是一堆建物）。</p>
                                <p><strong>2. 照查定結果補註為農牧、林業或國土保安用地</strong>。</p>
                                <p><strong>3. 不屬查定範圍者</strong>：依該使用分區主要用地編定（參考編定原則表）。</p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-1">
                            {s.notes.map((n, nIdx) => (
                              <p key={nIdx}>• {n}</p>
                            ))}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 實務心法指引卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-1.5">
                <div className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-1.5">
                  <TreePine className="w-4 h-4 text-emerald-600" />
                  <span>1. 查定結果核對航照</span>
                </div>
                <p className="text-xs text-[#5B584E] leading-relaxed">
                  務必套疊最新正射航照圖比對。若查定註記為宜農地，現地卻已興建密集建物或非農業使用，應審慎查明現況成因。
                </p>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-1.5">
                <div className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E6DA8]" />
                  <span>2. 依查定結果補註</span>
                </div>
                <p className="text-xs text-[#5B584E] leading-relaxed">
                  查定屬宜農牧地者補註為「農牧用地」；宜林地者補註為「林業用地」；加強保育地或不宜農林者補註為「國土保安用地」。
                </p>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-1.5">
                <div className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-1.5">
                  <Table className="w-4 h-4 text-[#8C5A4B]" />
                  <span>3. 不屬查定範圍者</span>
                </div>
                <p className="text-xs text-[#5B584E] leading-relaxed">
                  土地若未納入查定範圍，則應參照「編定原則表」，依該土地所屬之使用分區主要用地類別進行編定。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 分頁 2：編定原則表 (依 補註用地別.pdf 第 2 頁) */}
      {/* ========================================================================= */}
      {activeTab === 'table' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
          <div className="border-b border-[#ECE6DB] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864] flex items-center gap-2.5">
                <Table className="w-6 h-6 text-[#1F3864]" />
                <span>製定非都市土地使用分區圖及編定各種使用地作業須知編定原則表</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                依照《補註用地別.pdf》第 2 頁附表，查定範圍外依該使用分區主要用地編定對照圖表
              </p>
            </div>

            <a
              href="/supplementary_note_rules_table.svg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold bg-[#1F3864] text-white hover:bg-[#162744] rounded-xl transition-colors cursor-pointer shadow-2xs self-start sm:self-auto shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
              <span>檢視原始大圖</span>
            </a>
          </div>

          {/* 表格圖檔直接展示 */}
          <div className="border-2 border-[#1F3864]/40 rounded-xl overflow-hidden bg-white shadow-sm">
            <div className="bg-[#1F3864] text-white px-4 py-2 text-xs sm:text-sm font-bold flex items-center justify-between">
              <span>【作業須知編定原則表】使用分區與使用地類別對照準則</span>
              <span className="text-xs text-amber-200">向量清晰圖檔</span>
            </div>

            <div className="p-3 sm:p-5 bg-[#FAF7F2] flex justify-center">
              <div className="max-w-4xl w-full bg-white p-3 sm:p-4 rounded-xl border border-[#DDD5C7] shadow-xs">
                <img
                  src="/supplementary_note_rules_table.svg"
                  alt="製定非都市土地使用分區圖及編定各種使用地作業須知編定原則表"
                  className="w-full h-auto block select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* 圖例快速導覽 */}
          <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2">
            <div className="font-bold text-xs sm:text-sm text-[#1F3864]">編定原則表符號判定說明：</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm">
              <div className="p-2.5 bg-white rounded-lg border border-[#DDD5C7] flex items-center gap-2">
                <span className="text-emerald-700 font-bold text-base">✓</span>
                <span><strong>編定原則主要用地</strong>（直接作為該分區編定原則）</span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-[#DDD5C7] flex items-center gap-2">
                <span className="text-amber-700 font-bold text-base">△</span>
                <span><strong>視實際狀況或計畫編定</strong>（需現況勘查或核准計畫）</span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-[#DDD5C7] flex items-center gap-2">
                <span className="text-rose-700 font-bold text-base">✕</span>
                <span><strong>不合分區性質</strong>（該分區原則不得編定該使用地）</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
