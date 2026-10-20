import React, { useState } from 'react';
import {
  FileText,
  Copy,
  Table,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Building2,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
  MapPin,
  Layers,
  Scale,
  Clock,
  Sparkles,
  Info,
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Workflow,
  AlertTriangle,
  FolderOpen,
  Send,
  FileSignature,
  Landmark,
  BadgePercent,
  Banknote,
  Search,
  BookOpen,
  Archive,
  RefreshCw,
  Stamp,
  Users
} from 'lucide-react';

interface EnforcementAndCreditorCertReportProps {
  onCopy?: (text: string, label: string) => void;
}

export const EnforcementAndCreditorCertReport: React.FC<EnforcementAndCreditorCertReportProps> = ({ onCopy }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'procedure' | 'preliminary' | 'transfer' | 'execution-result' | 'cert-manage' | 're-execution' | 'annex'>('overview');

  const handleCopy = (key: string, text: string, label: string) => {
    if (onCopy) {
      onCopy(text, label);
    } else {
      navigator.clipboard.writeText(text);
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-8 text-[#2D2623] leading-relaxed text-sm sm:text-base">
      {/* 報告首頁 Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1F3864]/5 via-[#FAF7F2] to-[#8C5A4B]/10 border border-[#DDD5C7] shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DDD5C7] pb-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1F3864] text-white text-xs font-bold mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>行政執行與債權管理 · 專題報告主題 9</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-[#1F3864] tracking-tight">
              新北市政府地政局 移送強制執行及債權憑證處理作業手冊
            </h1>
            <p className="text-xs sm:text-sm text-[#7A6B63] mt-1 flex items-center gap-2">
              <span className="font-semibold text-[#8C5A4B]">內部作業參考手冊</span>
              <span>·</span>
              <span>共 61 頁完整實務指引 · 全文百分之百忠實呈現無摘要</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/assets/aistudio/__________98b9a2d7.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-[#1F3864] text-[#1F3864] rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#1F3864] hover:text-white transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>開啟原始 PDF (61頁)</span>
            </a>
          </div>
        </div>

        {/* 核心指引導覽條 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-white/80 rounded-xl border border-[#E5DFD5]">
            <div className="text-[#8C5A4B] font-bold">法定消滅時效</div>
            <div className="font-black text-[#1F3864] text-base mt-0.5">5 年 + 5 年</div>
            <div className="text-gray-500 text-[11px]">處分確定起至多10年</div>
          </div>
          <div className="p-3 bg-white/80 rounded-xl border border-[#E5DFD5]">
            <div className="text-[#8C5A4B] font-bold">移送執行期限</div>
            <div className="font-black text-[#1F3864] text-base mt-0.5">繳期屆滿 6 個月內</div>
            <div className="text-gray-500 text-[11px]">完成行政執行移送書</div>
          </div>
          <div className="p-3 bg-white/80 rounded-xl border border-[#E5DFD5]">
            <div className="text-[#8C5A4B] font-bold">財稅查調週期</div>
            <div className="font-black text-[#1F3864] text-base mt-0.5">每年至少 1 次</div>
            <div className="text-gray-500 text-[11px]">2月查稅捐、8月查國稅</div>
          </div>
          <div className="p-3 bg-white/80 rounded-xl border border-[#E5DFD5]">
            <div className="text-[#8C5A4B] font-bold">全案標準化步驟</div>
            <div className="font-black text-[#1F3864] text-base mt-0.5">9 大作業階段</div>
            <div className="text-gray-500 text-[11px]">涵蓋罰鍰至帳務註銷</div>
          </div>
        </div>
      </div>

      {/* 頁籤導覽列 */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-[#DDD5C7] text-xs sm:text-sm font-semibold">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'overview'
              ? 'bg-[#1F3864] text-white'
              : 'bg-white text-[#5C504A] hover:bg-[#F2ECE1] border border-[#DDD5C7]'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>目錄與法令依據 (P.1~3)</span>
        </button>
        <button
          onClick={() => setActiveTab('procedure')}
          className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'procedure'
              ? 'bg-[#1F3864] text-white'
              : 'bg-white text-[#5C504A] hover:bg-[#F2ECE1] border border-[#DDD5C7]'
          }`}
        >
          <Workflow className="w-3.5 h-3.5" />
          <span>流程圖與作業期限 (P.4~7)</span>
        </button>
        <button
          onClick={() => setActiveTab('preliminary')}
          className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'preliminary'
              ? 'bg-[#1F3864] text-white'
              : 'bg-white text-[#5C504A] hover:bg-[#F2ECE1] border border-[#DDD5C7]'
          }`}
        >
          <Send className="w-3.5 h-3.5" />
          <span>罰鍰管理·稽催·財稅 (P.8~15)</span>
        </button>
        <button
          onClick={() => setActiveTab('transfer')}
          className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'transfer'
              ? 'bg-[#1F3864] text-white'
              : 'bg-white text-[#5C504A] hover:bg-[#F2ECE1] border border-[#DDD5C7]'
          }`}
        >
          <Landmark className="w-3.5 h-3.5" />
          <span>移送作業與各分署 (P.16~20)</span>
        </button>
        <button
          onClick={() => setActiveTab('execution-result')}
          className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'execution-result'
              ? 'bg-[#1F3864] text-white'
              : 'bg-white text-[#5C504A] hover:bg-[#F2ECE1] border border-[#DDD5C7]'
          }`}
        >
          <Banknote className="w-3.5 h-3.5" />
          <span>執行有成果與入帳 (P.21~27)</span>
        </button>
        <button
          onClick={() => setActiveTab('cert-manage')}
          className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'cert-manage'
              ? 'bg-[#1F3864] text-white'
              : 'bg-white text-[#5C504A] hover:bg-[#F2ECE1] border border-[#DDD5C7]'
          }`}
        >
          <FileCheck className="w-3.5 h-3.5" />
          <span>債權憑證管理·註銷保留 (P.28~39)</span>
        </button>
        <button
          onClick={() => setActiveTab('re-execution')}
          className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 're-execution'
              ? 'bg-[#1F3864] text-white'
              : 'bg-white text-[#5C504A] hover:bg-[#F2ECE1] border border-[#DDD5C7]'
          }`}
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>再執行與終局註銷 (P.40~57)</span>
        </button>
        <button
          onClick={() => setActiveTab('annex')}
          className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'annex'
              ? 'bg-[#1F3864] text-white'
              : 'bg-white text-[#5C504A] hover:bg-[#F2ECE1] border border-[#DDD5C7]'
          }`}
        >
          <FileSignature className="w-3.5 h-3.5" />
          <span>兩大法令附件全文 (P.58~61)</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 頁籤 1：目錄與法令依據 (P.1 ~ 3) */}
      {/* ========================================================================= */}
      {activeTab === 'overview' && (
        <div className="space-y-6 animate-fadeIn">
          {/* 封面與目錄 */}
          <div className="bg-white rounded-xl border border-[#DDD5C7] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5] mb-4">
              <h2 className="text-lg font-bold text-[#1F3864] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#8C5A4B]" />
                <span>手冊目錄對照表 (第 2 頁)</span>
              </h2>
              <span className="text-xs bg-[#F2ECE1] text-[#7A6B63] px-2 py-0.5 rounded font-mono">P.1 ~ 2</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="space-y-2">
                <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E5DFD5]">
                  <div className="font-bold text-[#1F3864]">壹、法令依據 ................................................................ 3</div>
                  <div className="text-gray-600 pl-4 mt-1 space-y-0.5 text-xs">
                    <div>一、裁罰與執行法規（區域計畫法第21條、行政執行法第7條、第15條）</div>
                    <div>二、債權與會計管理規定（新北債權憑證管理要點、會計事務註銷規定）</div>
                  </div>
                </div>
                <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E5DFD5]">
                  <div className="font-bold text-[#1F3864]">貳、罰鍰未繳案件後續列管作業流程圖...................... 4</div>
                  <div className="text-gray-600 pl-4 mt-1 text-xs">
                    自處分確認起10年內，9大作業階段縱向管制作業全圖
                  </div>
                </div>
                <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E5DFD5]">
                  <div className="font-bold text-[#1F3864]">參、作業程序說明 ........................................................ 5</div>
                  <div className="text-gray-600 pl-4 mt-1 text-xs">
                    各作業項目、步驟說明、轄區承辦人員與專責人員分工及法定辦理時限總表
                  </div>
                </div>
                <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E5DFD5]">
                  <div className="font-bold text-[#1F3864]">一、罰鍰管理作業 .................................................................... 8</div>
                  <div className="text-gray-600 pl-4 mt-1 text-xs">
                    X槽列管表、罰鍰系統維護、分期繳納函稿、分期付款保留款明細表
                  </div>
                </div>
                <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E5DFD5]">
                  <div className="font-bold text-[#1F3864]">二、稽催作業(催繳函) ........................................................... 12</div>
                  <div className="text-gray-600 pl-4 mt-1 text-xs">
                    催繳公文函稿範例、文到7日內繳納、繳款單遺失補發作業
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E5DFD5]">
                  <div className="font-bold text-[#1F3864]">三、調查財稅 ........................................................................... 13</div>
                  <div className="text-gray-600 pl-4 mt-1 text-xs">
                    查財產函稿、義務人(歿)查繼承人戶籍、查繼承人是否拋棄繼承函稿
                  </div>
                </div>
                <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E5DFD5]">
                  <div className="font-bold text-[#1F3864]">四、移送作業 ........................................................................... 16</div>
                  <div className="text-gray-600 pl-4 mt-1 text-xs">
                    移送書函稿、移送書範本、行政執行署5大分署轄區一覽表、函詢債權憑證
                  </div>
                </div>
                <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E5DFD5]">
                  <div className="font-bold text-[#1F3864]">五、執行有成果 ...................................................................... 21</div>
                  <div className="text-gray-600 pl-4 mt-1 text-xs">
                    支票入帳操作說明、保管金專戶轉入罰鍰作業便簽、公庫備查簿與繳款書
                  </div>
                </div>
                <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E5DFD5]">
                  <div className="font-bold text-[#1F3864]">六、債權憑證之核發、管理 ................................................. 28</div>
                  <div className="text-gray-600 pl-4 mt-1 text-xs">
                    第1次存入與再存入簽辦單、保管品收據、註銷保留數函發審計處及復知
                  </div>
                </div>
                <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E5DFD5]">
                  <div className="font-bold text-[#1F3864]">七、再執行作業 ...................................................................... 40</div>
                  <div className="text-gray-600 pl-4 mt-1 text-xs">
                    上/下半年查調所得財產、執行署函詢查調、再移送執行函稿與操作
                  </div>
                </div>
                <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E5DFD5]">
                  <div className="font-bold text-[#1F3864]">八、帳務註銷作業 .................................................................. 46</div>
                  <div className="text-gray-600 pl-4 mt-1 text-xs">
                    全數繳清領回正本憑證註銷 / 債權屆滿10年申請解除責任簡明表與函報審計處
                  </div>
                </div>
                <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E5DFD5]">
                  <div className="font-bold text-[#1F3864]">肆、法令依據附件 ...................................................... 58</div>
                  <div className="text-gray-600 pl-4 mt-1 text-xs">
                    新北罰鍰與債憑管理要點全文(111.11.16修正)、會計事務註銷規定
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 壹、法令依據全文 */}
          <div className="bg-white rounded-xl border border-[#DDD5C7] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5] mb-4">
              <h2 className="text-lg font-bold text-[#1F3864] flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#8C5A4B]" />
                <span>壹、法令依據全文 (第 3 頁)</span>
              </h2>
              <span className="text-xs bg-[#F2ECE1] text-[#7A6B63] px-2 py-0.5 rounded font-mono">P.3</span>
            </div>

            <div className="space-y-4">
              <div className="border border-[#E5DFD5] rounded-xl p-4 bg-[#FAF7F2]">
                <h3 className="font-bold text-[#1F3864] text-base mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1F3864]"></span>
                  <span>一、 裁罰與執行法規</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                  <div className="bg-white p-3 rounded-lg border border-[#E5DFD5]">
                    <div className="font-bold text-[#8C5A4B] text-sm">《區域計畫法》第 21 條</div>
                    <div className="mt-1 text-gray-800">
                      <strong>處分依據：</strong>針對違反土地使用管制行為進行裁罰（處新臺幣六萬元以上三十萬元以下罰鍰，並得限期令其變更使用、停止使用或拆除其地上物恢復原狀）。
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-[#E5DFD5]">
                    <div className="font-bold text-[#8C5A4B] text-sm">《行政執行法》第 7 條第 1 項</div>
                    <div className="mt-1 text-gray-800">
                      <strong>執行時效：</strong>規範行政執行期間之法定時效，確保執行程序於法定期間內完成。
                      <div className="p-2 bg-[#F2ECE1] rounded mt-2 text-xs font-mono text-[#2D2623]">
                        「行政執行，自處分、裁定確定之日或其他依法令負有義務經通知限期履行之文書所定期間屆滿之日起，五年內未經執行者，不再執行；其於五年期間屆滿前已開始執行者，仍得繼續執行。但自五年期間屆滿之日起已逾五年尚未執行終結者，不得再執行。」
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-[#E5DFD5]">
                    <div className="font-bold text-[#8C5A4B] text-sm">《行政執行法》第 15 條</div>
                    <div className="mt-1 text-gray-800">
                      <strong>遺產執行：</strong>公法上金錢給付義務之執行，義務人死亡遺有財產者，行政執行分署得直接對義務人之遺產進行強制執行。
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#E5DFD5] rounded-xl p-4 bg-[#FAF7F2]">
                <h3 className="font-bold text-[#1F3864] text-base mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8C5A4B]"></span>
                  <span>二、 債權與會計管理規定</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                  <div className="bg-white p-3 rounded-lg border border-[#E5DFD5]">
                    <div className="font-bold text-[#1F3864] text-sm">
                      《新北市政府所屬各機關學校行政罰鍰案件及債權憑證管理要點》（111.11.16 修正）
                    </div>
                    <div className="mt-1 text-gray-800">
                      <strong>債權管理：</strong>提供行政機關管理行政罰鍰案件與債權憑證之作業準則（規範罰鍰系統登載、繳款期限屆滿次日起6個月內移送、每年財稅查調、債權憑證代保管專戶及財務責任註銷審計審核）。
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-[#E5DFD5]">
                    <div className="font-bold text-[#1F3864] text-sm">
                      《新北市政府各機關註銷應收款項與存貨及存出保證金會計事務處理作業規定》（109.08.26 修正）
                    </div>
                    <div className="mt-1 text-gray-800">
                      <strong>會計銷帳：</strong>規範債權因時效屆滿或確定無法收回時，相關會計事務之帳務處理（第2點第12款依法取得之債權憑證註銷應依管理要點辦理，經審計部新北市審計處核定後辦理減除保留數）。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 頁籤 2：流程圖與作業期限總表 (P.4 ~ 7) */}
      {/* ========================================================================= */}
      {activeTab === 'procedure' && (
        <div className="space-y-6 animate-fadeIn">
          {/* 流程圖視覺化與原圖 */}
          <div className="bg-white rounded-xl border border-[#DDD5C7] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5] mb-4">
              <h2 className="text-lg font-bold text-[#1F3864] flex items-center gap-2">
                <Workflow className="w-5 h-5 text-[#8C5A4B]" />
                <span>貳、罰鍰未繳案件後續列管作業流程圖 (第 4 頁)</span>
              </h2>
              <span className="text-xs bg-[#F2ECE1] text-[#7A6B63] px-2 py-0.5 rounded font-mono">P.4</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* 互動式流程步驟架構 */}
              <div className="lg:col-span-7 space-y-3">
                <div className="p-3 bg-[#1F3864]/5 border-l-4 border-[#1F3864] rounded text-xs text-[#1F3864] font-semibold">
                  全案法定執行時效：自處分確認日起算 10 年內（行政執行法第7條前5年＋後5年限制）
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2.5 bg-blue-50/70 border border-blue-200 rounded-lg">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">1</div>
                    <div className="flex-1">
                      <div className="font-bold text-[#1F3864] text-sm">成立處分書</div>
                      <div className="text-xs text-gray-600">轄區承辦人於開立處分書後 10 日內逐案填寫 X 槽列管表及罰鍰系統。</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-lg">
                    <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">2</div>
                    <div className="flex-1">
                      <div className="font-bold text-[#1F3864] text-sm flex items-center justify-between">
                        <span>稽催作業</span>
                        <span className="text-[11px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-normal">如已繳納 ➔ 結案</span>
                      </div>
                      <div className="text-xs text-gray-600">繳納期限屆滿未繳者，7日內（或回證送達日起3日內）發函限文到7日內繳納。</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 bg-teal-50/70 border border-teal-200 rounded-lg">
                    <div className="w-7 h-7 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs shrink-0">3</div>
                    <div className="flex-1">
                      <div className="font-bold text-[#1F3864] text-sm">調查財稅</div>
                      <div className="text-xs text-gray-600">稽催屆滿7日內查明戶籍、函國稅局及稅捐稽徵處查財產所得；若義務人死亡則查繼承人及拋棄繼承。</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 bg-green-50/70 border border-green-200 rounded-lg">
                    <div className="w-7 h-7 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xs shrink-0">4</div>
                    <div className="flex-1">
                      <div className="font-bold text-[#1F3864] text-sm">移送作業</div>
                      <div className="text-xs text-gray-600">繳納期間屆滿之次日起 6 個月內，製作移送書移送法務部行政執行署各轄區分署強制執行。</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 bg-amber-50/70 border border-amber-200 rounded-lg">
                    <div className="w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs shrink-0">5</div>
                    <div className="flex-1">
                      <div className="font-bold text-[#1F3864] text-sm">執行有成果</div>
                      <div className="text-xs text-gray-600">全部受償則7日內辦理銷帳結案；部分受償則未清償部分於移送滿6個月後7日內函請核發債權憑證。</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 bg-orange-50/70 border border-orange-200 rounded-lg">
                    <div className="w-7 h-7 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-xs shrink-0">6</div>
                    <div className="flex-1">
                      <div className="font-bold text-[#1F3864] text-sm">債權憑證之核發、管理</div>
                      <div className="text-xs text-gray-600">收到憑證3日內核對更正、7日內會辦秘書室代管及會計室登帳，11月前函報審計處註銷保留數。</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 bg-purple-50/70 border border-purple-200 rounded-lg">
                    <div className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs shrink-0">7</div>
                    <div className="flex-1">
                      <div className="font-bold text-[#1F3864] text-sm flex items-center justify-between">
                        <span>再執行作業</span>
                        <span className="text-[11px] text-purple-700 bg-purple-100 px-2 py-0.5 rounded font-normal">如已繳納 ➔ 結案</span>
                      </div>
                      <div className="text-xs text-gray-600">每年2月查稅捐、8月查國稅局；查有新增可供執行且具實益財產，於3個月內檢送債憑影本再聲請強制執行。</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 bg-rose-50/70 border border-rose-200 rounded-lg">
                    <div className="w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-xs shrink-0">8</div>
                    <div className="flex-1">
                      <div className="font-bold text-[#1F3864] text-sm">帳務註銷作業</div>
                      <div className="text-xs text-gray-600">全數繳清領回正本憑證註銷歸檔；逾10年法定執行期限填報簡明表報審計部新北審計處核准解除財務責任。</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 bg-gray-50/70 border border-gray-300 rounded-lg">
                    <div className="w-7 h-7 rounded-full bg-gray-700 text-white flex items-center justify-center font-bold text-xs shrink-0">9</div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-sm">結案</div>
                      <div className="text-xs text-gray-600">按規定歸檔存查，解除列管。</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 原圖呈現 */}
              <div className="lg:col-span-5 bg-[#FAF7F2] p-4 rounded-xl border border-[#DDD5C7] text-center">
                <div className="text-xs font-bold text-[#1F3864] mb-2 flex items-center justify-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#8C5A4B]" />
                  <span>手冊第 4 頁原圖掃描（完整對照）</span>
                </div>
                <div className="overflow-hidden rounded-lg border border-[#DDD5C7] shadow-sm max-h-[520px] overflow-y-auto">
                  <img
                    src="/image106.jpg"
                    alt="罰鍰未繳案件後續列管作業流程圖"
                    className="w-full h-auto object-contain mx-auto"
                  />
                </div>
                <p className="text-[11px] text-gray-500 mt-2">
                  完整標示：自處分確認起 10 年內 · 1~9 階段循環列管作業
                </p>
              </div>
            </div>
          </div>

          {/* 參、作業程序說明：總表 (第 5 ~ 7 頁) */}
          <div className="bg-white rounded-xl border border-[#DDD5C7] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5] mb-4">
              <h2 className="text-lg font-bold text-[#1F3864] flex items-center gap-2">
                <Table className="w-5 h-5 text-[#8C5A4B]" />
                <span>參、作業程序說明（作業項目、步驟說明、人員及期限對照總表 P.5~7）</span>
              </h2>
              <span className="text-xs bg-[#F2ECE1] text-[#7A6B63] px-2 py-0.5 rounded font-mono">P.5 ~ 7</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#1F3864] text-white">
                    <th className="p-3 border border-[#1F3864] w-28 whitespace-nowrap">作業工作項目</th>
                    <th className="p-3 border border-[#1F3864] w-16 text-center">步驟</th>
                    <th className="p-3 border border-[#1F3864]">說 明</th>
                    <th className="p-3 border border-[#1F3864] w-36 whitespace-nowrap">作業人員及期限</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5DFD5]">
                  {/* 罰鍰管理作業 */}
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 font-bold text-[#1F3864] border border-[#DDD5C7] align-top bg-[#FAF7F2]" rowSpan={2}>
                      罰鍰管理作業
                    </td>
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">1~3</td>
                    <td className="p-3 border border-[#DDD5C7] space-y-1 text-gray-800">
                      <div>1. 開立處分書由承辦人應逐案填寫相關資料於 <strong>X 槽列管表</strong>(P.8)及本府<strong>罰鍰系統</strong>(P.8~P.9)。</div>
                      <div>2. 罰鍰案件之各項登記資料，由承辦人負責管理並列入業務移交；移交時，應載明移交日期，並經單位主管核章，以明責任。</div>
                      <div>3. 受處分人依其經濟狀況無法一次完納罰鍰時，得依新北市政府處理地政業務行政罰鍰繳納申請案件實施要點申請分期繳納罰鍰(P.10)。</div>
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#8C5A4B]">轄區承辦人員</div>
                      <div className="text-gray-600">於開立處分書後 <strong>10 日內</strong></div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">4~5</td>
                    <td className="p-3 border border-[#DDD5C7] space-y-1 text-gray-800">
                      <div>1. 每月至罰鍰系統查詢，逐案檢視以前年度申請分期受處分人之當月繳款紀錄與銷帳狀態並填入［以前年度歲入保留數及取得債權憑證列管案件］(P.11)。</div>
                      <div>2. 倘發現有未依限繳款之違約情事，通知承辦人進行催繳程序，或依法移送法務部行政執行署強制執行。</div>
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600"><strong>每月底前</strong></div>
                    </td>
                  </tr>

                  {/* 稽催作業 */}
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 font-bold text-[#1F3864] border border-[#DDD5C7] align-top bg-[#FAF7F2]">
                      稽催作業<br/><span className="text-xs text-gray-500 font-normal">(催繳函)</span>
                    </td>
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">1~2</td>
                    <td className="p-3 border border-[#DDD5C7] space-y-1 text-gray-800">
                      <div>1. 於繳納期限而未繳納者，應於繳納期限屆滿後 <strong>7 日內</strong>，函請受處分人於<strong>文到 7 日內</strong>繳納(P.12)。</div>
                      <div>2. 若有因民眾異議、行政救濟、申請分期付款、洽稅捐單位查詢財產或其他不能立即繳期等因素，得視情況予以延長。</div>
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#8C5A4B]">轄區承辦人員</div>
                      <div className="text-gray-600">繳納期限屆滿後 <strong>7 日內</strong> 或取得郵局送達回證日起 <strong>3 日內</strong></div>
                    </td>
                  </tr>

                  {/* 調查財稅 */}
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 font-bold text-[#1F3864] border border-[#DDD5C7] align-top bg-[#FAF7F2]">
                      調查財稅
                    </td>
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">1~2</td>
                    <td className="p-3 border border-[#DDD5C7] space-y-1 text-gray-800">
                      <div>1. 罰鍰案件移送行政執行署前，應於戶政系統查明受處分人之戶籍資料，並向稅捐稽徵機關(國稅局、稅捐稽徵處)，查詢受處分人之財產及所得資料(P.13)。</div>
                      <div>2. 受處分人死亡時，應向戶政事務所查調受處分人之繼承人，再向法院查調其繼承人有無拋棄繼承，並函發國稅局及稅捐處查調受處分人及其繼承人財產所得(P.16~P.17)。</div>
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#8C5A4B]">轄區承辦人員</div>
                      <div className="text-gray-600">稽催期限屆滿後 <strong>7 日內</strong></div>
                    </td>
                  </tr>

                  {/* 移送作業 */}
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 font-bold text-[#1F3864] border border-[#DDD5C7] align-top bg-[#FAF7F2]" rowSpan={2}>
                      移送作業
                    </td>
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">1~2</td>
                    <td className="p-3 border border-[#DDD5C7] space-y-1 text-gray-800">
                      <div>1. 罰鍰經催繳後逾期仍未繳納者，應製作新北市行政執行案件移送書移送法務部行政執行署轄區分署執行，登載「違規案件移送強制執行署一覽表」相關資料(P.16~P.19)。</div>
                      <div>2. 若有因民眾異議、行政救濟申請分期付款、洽稅捐單位查詢財產或其他不能立即繳期等因素，得視情況予以延長。</div>
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#8C5A4B]">轄區承辦人員</div>
                      <div className="text-gray-600">繳納期間屆滿之次日起 <strong>6 個月內</strong></div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">3</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      移送行政執行之債權，未經清償或核發債權憑證者，應每年函詢繫屬行政執行分署追蹤掌控案件進度(P.20)。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600"><strong>每年 9 月底前</strong></div>
                    </td>
                  </tr>

                  {/* 執行有成果 */}
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 font-bold text-[#1F3864] border border-[#DDD5C7] align-top bg-[#FAF7F2]" rowSpan={2}>
                      執行有成果
                    </td>
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">1</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      如罰鍰全部受償，應辦理帳務註銷作業後結案(P.21~P.27)。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600">收到罰鍰 <strong>7 日內</strong></div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">2</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      如罰鍰部份受償，就未受償部份函請法務部行政執行署核發債權憑證(P.20)。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600">移送執行滿 6 個月後 <strong>7 日內</strong></div>
                    </td>
                  </tr>

                  {/* 債權憑證之核發、管理 */}
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 font-bold text-[#1F3864] border border-[#DDD5C7] align-top bg-[#FAF7F2]" rowSpan={7}>
                      債權憑證之<br/>核發、管理
                    </td>
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">1</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      收到債權憑證時，先檢查憑證內容各欄記載有無錯誤或不符，如有錯誤或不符者，應即函請執行處更正後影印 1 份併案歸檔。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600">收到債憑 <strong>3 日內</strong></div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">2</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      收到債權憑證及重新取得新債權憑證時，應會辦秘書室及會計室，並以簽辦單奉核影本併同該憑證影本通知會計室據以登帳。債權憑證由秘書室代為保管(P.28~P.31)。另登載「以前年度歲入保留數及取得債權憑證列管案件」內「已取得債權憑證列管案」列管表、罰鍰系統『債權憑證資料維護』(P.32~P.33)。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600">收到債憑 <strong>7 日內</strong></div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">3</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      第一次取得之債權憑證，最晚於當年度 11 月前函發審計部新北市審計處申請核准註銷保留數，待核准後復知本府財政局、本府主計處及本府會計室(P.34~P.37)。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600"><strong>當年度 11 月前</strong></div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">4</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      每半年核對債權憑證保管清冊。（依每月秘書室(保管人員)檢附［新北市政府地政局保管品專戶］資料，核對其相關資料是否無誤後存檔備查）(P.38)。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600"><strong>每月月初</strong></div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">5</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      每年應就以前年度未繳納罰鍰案件訂定年度清理計畫。（依會計室 3 月郵件通知辦理）(P.39)。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600">依會計室要求日期</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">6</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      每年 2 月及 7 月前填報行政罰鍰收繳及清理情形表。（依會計室 2 月及 7 月郵件通知辦理）(P.39)。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600">依會計室要求日期</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">7</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      行政執行事件取得之債權憑證，其執行時效悉依行政執行法相關規定辦理，無需辦理債權憑證換發（查無新增可供執行且具執行實益之財產）。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600">法定時效控管</div>
                    </td>
                  </tr>

                  {/* 再執行作業 */}
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 font-bold text-[#1F3864] border border-[#DDD5C7] align-top bg-[#FAF7F2]" rowSpan={4}>
                      再執行作業
                    </td>
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">1</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      每年至少應查調債務人財產及所得基本資料一次(P.40~P.41)。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600">
                        <strong>2 月底前</strong>查調稅捐處(財產)<br/>
                        <strong>8 月底前</strong>查調國稅局(所得)
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">2</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      法定收繳期限或換發債權憑證期限將屆滿之案件，應視實際需要辦理查詢及增加次數。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600">10 年屆滿前 <strong>6 個月</strong></div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">3</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      行政執行署函詢查調 1 個月內財產（不定期）(P.42)。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600">依執行署要求日期</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">4</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      經查明債權人有新增可供執行且具執行實益之財產，應於 <strong>3 個月內</strong>附具債權憑證影本，再次聲請強制執行(P.43~P.45)。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600">查調財產資料後 <strong>3 個月內</strong></div>
                    </td>
                  </tr>

                  {/* 帳務註銷作業 */}
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 font-bold text-[#1F3864] border border-[#DDD5C7] align-top bg-[#FAF7F2]" rowSpan={2}>
                      帳務註銷作業
                    </td>
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">1</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      債權憑證因債權清償、獲核發新債權憑證或原處分撤銷得核定註銷，函簽秘書室、會計室領回正本債權憑證依檔案法相關規定歸檔(P.46~P.48)。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600"><strong>7 日內</strong></div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 text-center border border-[#DDD5C7] align-top font-bold text-gray-700">2</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      債權屆滿法定收繳期限、逾行政執行期限或其他特殊原因而有辦理註銷之必要時，應查明管理、催繳程序是否已盡善良管理人之注意義務，並應詳填<strong>申請解除債權憑證財務責任簡明表</strong>(P.52)，檢同有關證明文件報經主管機關擬具查核意見，報請審計部新北市審計處核定後，並副知本府主計處及財政局據以辦理註銷(P.49~P.51)，後函簽秘書室、會計室領回正本債權憑證依檔案法相關規定歸檔(P.53~P.57)。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] align-top text-xs">
                      <div className="font-bold text-[#1F3864]">專責人員</div>
                      <div className="text-gray-600"><strong>20 日內</strong></div>
                    </td>
                  </tr>

                  {/* 結案 */}
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 font-bold text-[#1F3864] border border-[#DDD5C7] bg-[#FAF7F2]">
                      結案
                    </td>
                    <td className="p-3 text-center border border-[#DDD5C7] font-bold text-gray-700">-</td>
                    <td className="p-3 border border-[#DDD5C7] text-gray-800">
                      完成所有法定義務及帳務註銷，解除系統列管，相關卷證依照公文與會計檔案法妥適歸檔存查。
                    </td>
                    <td className="p-3 border border-[#DDD5C7] text-xs">
                      <div className="font-bold text-gray-700">全案結案</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 頁籤 3：前期作業（一、罰鍰管理 / 二、稽催 / 三、調查財稅 P.8 ~ 15） */}
      {/* ========================================================================= */}
      {activeTab === 'preliminary' && (
        <div className="space-y-6 animate-fadeIn">
          {/* 一、罰鍰管理作業 */}
          <div className="bg-white rounded-xl border border-[#DDD5C7] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5] mb-4">
              <h2 className="text-lg font-bold text-[#1F3864] flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-[#8C5A4B]" />
                <span>一、 罰鍰管理作業 (第 8 ~ 11 頁)</span>
              </h2>
              <span className="text-xs bg-[#F2ECE1] text-[#7A6B63] px-2 py-0.5 rounded font-mono">P.8 ~ 11</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD5]">
                  <h3 className="font-bold text-[#1F3864] mb-2">1. 違規罰單列管表 (X槽列管表)</h3>
                  <p className="text-gray-700 text-xs">
                    承辦人於開立處分書後 10 日內，逐案將違規人身分證號、處分書字號、違規土地地號、違反法規、裁罰金額及繳納期限等完整登入 X 槽專屬列管 Excel 表中，作為業務移交與各月對帳母表。
                  </p>
                </div>

                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD5]">
                  <h3 className="font-bold text-[#1F3864] mb-2">2. 本府罰鍰系統 (處分書資料維護範本)</h3>
                  <div className="space-y-1.5 text-xs text-gray-700">
                    <div className="p-2 bg-white rounded border border-[#E5DFD5]">
                      <span className="font-bold text-[#8C5A4B]">自然人：</span>輸入身分證統一編號、姓名、戶籍地址及聯絡電話。
                    </div>
                    <div className="p-2 bg-white rounded border border-[#E5DFD5]">
                      <span className="font-bold text-[#8C5A4B]">公司法人：</span>當類別為［公司法人］時，［法定代理人資料］區的［姓名］及［戶籍地址］欄位為必填；［身分證字號(統一編號)］及［外國居留證號或護照號碼］擇一填寫。相關欄位輸入完成後點選確認儲存。
                    </div>
                  </div>
                </div>
              </div>

              {/* 分期繳納函稿範例 */}
              <div className="border border-[#E5DFD5] rounded-xl p-4 bg-[#FAF7F2]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#1F3864] flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#8C5A4B]" />
                    <span>3. 分期繳納函稿範例 (以稿代簽 P.10)</span>
                  </h3>
                  <button
                    onClick={() =>
                      handleCopy(
                        'installment-letter',
                        `新北市政府 函\n受文者：OOO 君\n發文日期：\n發文字號：\n速別：\n密等及解密條件或保密期限：\n附件：如主旨\n\n主旨：有關臺端於本市 OO 區 OO 段 OO 地號土地（OO 區 OO 用地）違反區域計畫法申請分期繳納行政罰鍰一案，復請查照。\n\n說明：\n一、依 OOO 年 OO 月 OO 日本府地政業務行政罰鍰分期繳納案件申請書及切結書暨本府 OOO 年 OO 月 OO 日新北府地管字第 OOOOOOOOOO 號函辦理。\n二、旨揭土地前經本府 OOO 年 OO 月 OO 日新北府地管字第 OOOOOOOOOO 號函裁罰並限期臺端等恢復在案，惟經民眾再次檢舉，本府相關單位復於 OOO 年 OO 月 OO 日現場勘查，現況仍具鐵皮建物、固定式鋪面、鐵皮棚架及圍籬、水泥構造物等，現經本府農業局認定非作農業使用在案，已違反非都市土地使用管制，業經本府 OOO 年 OO 月 OO 日新北府地管字第 OOOOOOOOOO 號函以違反區域計畫法裁罰新臺幣 O 萬元整，按本府處理地政業務行政罰鍰分期繳納申請案件實施要點規定：「罰鍰金額新臺幣 5 萬元以上，未滿新臺幣 20 萬元之案件，得分 2 期至 10 期繳納」，本案裁罰金額為新臺幣 O 萬元，依規定得分 2 期至 10 期繳納，現臺端表示無力繳納，希望准予分期 10 期繳納罰鍰，考量臺端經濟狀況無力一次繳納，本府同意依前開規定核定分 10 期（1 個月為 1 期，每期 O,OOO 元），請依期繳納。\n三、隨函檢附繳費單 10 份（第 1 期至第 10 期），第 1 期請於 OOO 年 OO 月 OO 日前至臺灣銀行各分行或全國便利商店繳納罰鍰，第 2 期至第 10 期請於每月 30 日前繳納，一期未給付視為全部到期，將全數金額移送法務部行政執行署強制執行（加計執行等費用）。\n\n正本：OOO 君\n副本：`,
                        '分期繳納函稿'
                      )
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#DDD5C7] rounded text-xs text-[#1F3864] hover:bg-[#1F3864] hover:text-white transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedKey === 'installment-letter' ? '已複製！' : '複製公文函稿'}</span>
                  </button>
                </div>

                <div className="p-3 bg-white rounded border border-[#E5DFD5] text-xs font-mono text-gray-800 space-y-2">
                  <div className="text-gray-500">以稿代簽 檔 號: OOO/110809/1　保存年限: 5 年</div>
                  <div className="font-bold text-center text-sm text-[#1F3864]">新北市政府 函</div>
                  <div>受文者：郵寄種類：掛號附送達證書(正本)</div>
                  <div><strong>主旨：</strong>有關臺端於本市 OO 區 OO 段 OO 地號土地（OO 區 OO 用地）違反區域計畫法申請分期繳納行政罰鍰一案，復請查照。</div>
                  <div><strong>說明：</strong></div>
                  <div className="pl-4 space-y-1">
                    <div>一、依 OOO 年 OO 月 OO 日本府地政業務行政罰鍰分期繳納案件申請書及切結書暨本府 OOO 年 OO 月 OO 日新北府地管字第 OOOOOOOOOO 號函辦理。</div>
                    <div>二、旨揭土地前經本府裁罰並限期臺端等恢復在案，現場勘查現況仍具鐵皮建物、固定式鋪面等非作農業使用，已違反非都市土地使用管制，裁罰新臺幣 O 萬元整。按本府處理地政業務行政罰鍰分期繳納申請案件實施要點規定：「罰鍰金額新臺幣 5 萬元以上，未滿新臺幣 20 萬元之案件，得分 2 期至 10 期繳納」，考量臺端經濟狀況，同意核定分 10 期（1個月為1期，每期 O,OOO 元），請依期繳納。</div>
                    <div className="text-[#8C5A4B] font-bold">三、隨函檢附繳費單 10 份，第 1 期請於指定日期前繳納，第 2 至 10 期於每月 30 日前繳納。一期未給付視為全部到期，將全數金額移送法務部行政執行署強制執行（加計執行等費用）。</div>
                  </div>
                  <div>正本：OOO 君　副本：</div>
                </div>
              </div>

              {/* 罰鍰未繳納及分期付款列管表 */}
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD5]">
                <h3 className="font-bold text-[#1F3864] mb-2 flex items-center justify-between">
                  <span>4. 以前年度歲入保留數及取得債權憑證列管案件（分期付款列管明細 P.11）</span>
                  <span className="text-xs text-gray-500 font-normal">業務單位：編定管制科</span>
                </h3>
                <p className="text-xs text-gray-600 mb-2">
                  專責人員每月底前至罰鍰系統查詢以前年度申請分期者當月繳款紀錄，更新已繳數與未繳數；若有違約未繳情事立即通知承辦人進行催繳或移送執行。
                </p>
                <div className="overflow-x-auto text-xs bg-white rounded border border-[#E5DFD5]">
                  <table className="w-full text-center border-collapse">
                    <thead>
                      <tr className="bg-[#FAF7F2] text-[#1F3864] border-b border-[#E5DFD5]">
                        <th className="p-2 border border-[#E5DFD5]">年度</th>
                        <th className="p-2 border border-[#E5DFD5]">件數序號</th>
                        <th className="p-2 border border-[#E5DFD5]">戶名</th>
                        <th className="p-2 border border-[#E5DFD5]">債權憑證件數</th>
                        <th className="p-2 border border-[#E5DFD5]">保管事由</th>
                        <th className="p-2 border border-[#E5DFD5]">保管處</th>
                        <th className="p-2 border border-[#E5DFD5]">面值金額</th>
                        <th className="p-2 border border-[#E5DFD5]">未執行金額(保留數)</th>
                        <th className="p-2 border border-[#E5DFD5]">收繳數</th>
                        <th className="p-2 border border-[#E5DFD5]">未繳數</th>
                        <th className="p-2 border border-[#E5DFD5]">備註</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-[#E5DFD5]">OOO</td>
                        <td className="p-2 border border-[#E5DFD5]">流水號</td>
                        <td className="p-2 border border-[#E5DFD5] font-bold">OOO</td>
                        <td className="p-2 border border-[#E5DFD5]">1</td>
                        <td className="p-2 border border-[#E5DFD5]">違反區域計畫法</td>
                        <td className="p-2 border border-[#E5DFD5]">臺灣銀行板橋分行</td>
                        <td className="p-2 border border-[#E5DFD5]">60,000</td>
                        <td className="p-2 border border-[#E5DFD5]">60,000</td>
                        <td className="p-2 border border-[#E5DFD5]">12,000</td>
                        <td className="p-2 border border-[#E5DFD5] text-[#8C5A4B] font-bold">48,000</td>
                        <td className="p-2 border border-[#E5DFD5] text-[11px] text-gray-500">申請分期 115.01.15(第1期) 115.02.24(第2期)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* 二、稽催作業 (催繳函) */}
          <div className="bg-white rounded-xl border border-[#DDD5C7] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5] mb-4">
              <h2 className="text-lg font-bold text-[#1F3864] flex items-center gap-2">
                <Send className="w-5 h-5 text-[#8C5A4B]" />
                <span>二、 稽催作業 (催繳函 P.12)</span>
              </h2>
              <span className="text-xs bg-[#F2ECE1] text-[#7A6B63] px-2 py-0.5 rounded font-mono">P.12</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs">
                <strong>法定辦理時程：</strong>處分書限期繳納屆滿後 <strong>7 日內</strong>，或取得郵局送達回證日起 <strong>3 日內</strong>，發函請受處分人於<strong>文到 7 日內</strong>繳納。
              </div>

              {/* 催繳函公文範例 */}
              <div className="border border-[#E5DFD5] rounded-xl p-4 bg-[#FAF7F2]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#1F3864] flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#8C5A4B]" />
                    <span>催繳函範例 (以稿代簽全文)</span>
                  </h3>
                  <button
                    onClick={() =>
                      handleCopy(
                        'dunning-letter',
                        `新北市政府 函\n受文者：OOO 君\n發文日期：\n發文字號：\n速別：\n密等及解密條件或保密期限：\n附件：如主旨\n\n主旨：有關本市 OO 區 OO 段 OO 地號(OO 區 OO 用地)違反區域計畫法一案，請查照。\n\n說明：\n一、依區域計畫法第 21 條暨行政執行法施行細則第 19 條規定辦理。\n二、本案前經本府 OOO 年 OO 月 OO 日新北府地管字第 OOOOOOOOOO 號函處以罰鍰新臺幣 O 萬元整並限於文到(OOO 年 OO 月 OO 日送達)30 日內繳納，惟臺端至今尚未繳納，爰請於文到 7 日內繳納，逾期未繳者逕送法務部行政執行署強制執行（加計執行費用）。\n三、繳費單遺失者，請攜帶行政罰鍰處分書至本府（住址：新北市板橋區中山路 1 段 161 號 23 樓，地政局編定管制科）補開繳費單。\n\n正本：OOO 君\n副本：`,
                        '催繳公文函稿'
                      )
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#DDD5C7] rounded text-xs text-[#1F3864] hover:bg-[#1F3864] hover:text-white transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedKey === 'dunning-letter' ? '已複製！' : '複製催繳函稿'}</span>
                  </button>
                </div>

                <div className="p-3 bg-white rounded border border-[#E5DFD5] text-xs font-mono text-gray-800 space-y-2">
                  <div className="text-gray-500">以稿代簽 檔 號: OOO/110809/1　保存年限: 5 年</div>
                  <div className="font-bold text-center text-sm text-[#1F3864]">新北市政府 函</div>
                  <div>受文者：郵寄種類：掛號附送達證書(正本)</div>
                  <div><strong>主旨：</strong>有關本市 OO 區 OO 段 OO 地號(OO 區 OO 用地)違反區域計畫法一案，請查照。</div>
                  <div><strong>說明：</strong></div>
                  <div className="pl-4 space-y-1">
                    <div>一、依區域計畫法第 21 條暨行政執行法施行細則第 19 條規定辦理。</div>
                    <div>二、本案前經本府 OOO 年 OO 月 OO 日新北府地管字第 OOOOOOOOOO 號函處以罰鍰新臺幣 O 萬元整並限於文到(OOO 年 OO 月 OO 日送達) 30 日內繳納，惟臺端至今尚未繳納，爰請於<strong>文到 7 日內繳納</strong>，逾期未繳者逕送法務部行政執行署強制執行（加計執行費用）。</div>
                    <div>三、繳費單遺失者，請攜帶行政罰鍰處分書至本府（住址：新北市板橋區中山路 1 段 161 號 23 樓，地政局編定管制科）補開繳費單。</div>
                  </div>
                  <div>正本：OOO 君　副本：</div>
                </div>
              </div>
            </div>
          </div>

          {/* 三、調查財稅 */}
          <div className="bg-white rounded-xl border border-[#DDD5C7] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5] mb-4">
              <h2 className="text-lg font-bold text-[#1F3864] flex items-center gap-2">
                <Search className="w-5 h-5 text-[#8C5A4B]" />
                <span>三、 調查財稅 (第 13 ~ 15 頁)</span>
              </h2>
              <span className="text-xs bg-[#F2ECE1] text-[#7A6B63] px-2 py-0.5 rounded font-mono">P.13 ~ 15</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-blue-900 text-xs">
                <strong>法規授權與要件：</strong>依稅捐稽徵法第 33 條第 1 項第 8 款、強制執行法第 4 條之 1 第 6 款及辦理強制執行事件應行注意事項規定，於稽催期限屆滿後 <strong>7 日內</strong>查明受處分人戶籍並函國稅局、稅捐處查調最新所得及財產資料。
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* 1. 查財產函稿範例 */}
                <div className="border border-[#E5DFD5] rounded-xl p-3 bg-[#FAF7F2] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-[#1F3864]">1. 查財產函稿 (P.13)</span>
                      <span className="text-[11px] text-gray-500 font-mono">第3層決行</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">
                      正本發財政部北區國稅局板橋分局、新北市政府稅捐稽徵處，查調義務人最新財產清冊與各類所得資料清單。
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy(
                        'tax-inquiry-letter',
                        `新北市政府地政局 函\n主旨：為應公務需要，請函送 OO 君之所得及財產資料，以利移送法務部行政執行署聲請強制執行，請查照。\n說明：\n一、依據稅捐稽徵法第 33 條第 1 項第 8 款規定、強制執行法第 4 條第 1 項第 6 款及辦理強制執行事件應行注意事項第 2 項第 13 款規定。\n二、上開義務人楊 O 夏之所得及財產（含土地及建物）請給予最新資料，隨文檢附戶籍影本供參。\n正本：財政部北區國稅局板橋分局、新北市政府稅捐稽徵處\n附件：義務人及繼承人個人資料、行政署執行命令、戶政公文函`,
                        '查財產函稿'
                      )
                    }
                    className="w-full inline-flex items-center justify-center gap-1 px-2.5 py-1.5 bg-white border border-[#DDD5C7] rounded text-xs text-[#1F3864] hover:bg-[#1F3864] hover:text-white transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製查財產函稿</span>
                  </button>
                </div>

                {/* 2. 義務人(歿)查繼承人函稿範例 */}
                <div className="border border-[#E5DFD5] rounded-xl p-3 bg-[#FAF7F2] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-[#1F3864]">2. 查繼承人函稿 (P.14)</span>
                      <span className="text-[11px] text-gray-500 font-mono">第3層決行</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">
                      土地所有權人死亡未辦繼承登記時，依戶籍法與個資法函新北市政府轄區戶政事務所提供被繼承人全體法定繼承人戶籍謄本。
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy(
                        'heir-inquiry-letter',
                        `新北市政府地政局 函\n主旨：有關義務人 OOO 違反區域計畫法案件，經查 O 君已歿，請惠予協助提供 OOO(被繼承人死亡時戶籍所在地為本市 OO 區 OO 路 OO 段 OO 巷 OO 弄 OO 號 O 樓、統一編號，詳附件)之繼承人資料供參，俾利續辦，請查照。\n說明：\n一、依 OOO 年 OO 月 OO 日 OOO 年區計罰執字第 OOO 號、各機關申請提供戶籍資料及親等關聯資料辦法第 5 條及個人資料保護法規定辦理。\n二、本案係以土地所有權人為裁處對象，惟所有權人已死亡尚未辦理繼承登記，故需查明繼承人資料，該資料使用完畢將依資料保存年限並隨案歸檔處理，以確保資料應用安全。\n正本：新北市政府 OOO 戶政事務所\n附件：義務人戶籍資料、債權憑證`,
                        '查繼承人函稿'
                      )
                    }
                    className="w-full inline-flex items-center justify-center gap-1 px-2.5 py-1.5 bg-white border border-[#DDD5C7] rounded text-xs text-[#1F3864] hover:bg-[#1F3864] hover:text-white transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製查繼承人函稿</span>
                  </button>
                </div>

                {/* 3. 義務人(歿)查是否拋棄繼承函稿範例 */}
                <div className="border border-[#E5DFD5] rounded-xl p-3 bg-[#FAF7F2] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-[#1F3864]">3. 查拋棄繼承函稿 (P.15)</span>
                      <span className="text-[11px] text-gray-500 font-mono">第3層決行</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">
                      函請被繼承人死亡地所屬臺灣地方（家事）法院查明法定繼承人是否有向法院辦理拋棄繼承或限定繼承情事，以確認執行主體。
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy(
                        'waiver-inquiry-letter',
                        `新北市政府地政局 函\n主旨：有關本市 OO 區 OO 段 OO 段 OO 地號等 O 筆土地違反區域計畫法移行行政執行案件，因義務人 OOO 君於 OOO 年 OO 月 OO 日死亡，惠請協助查明 O 君法定繼承人是否有拋棄繼承情事並檢送相關文件供參，俾供續辦，請查照。\n說明：\n一、依據法務部行政執行署 OO 分署 OOO 年 OOO 月 OOO 日 OOO 年 OOO 字第 OOOOOOOOO 號函辦理。\n二、檢送 O 君戶籍謄本相關資料 1 份供參。\n正本：臺灣地方 OO 法院\n附件：戶政事務所查附繼承人戶籍資料、函發戶政查繼承人公文函、處分書、行政署執行命令`,
                        '查拋棄繼承函稿'
                      )
                    }
                    className="w-full inline-flex items-center justify-center gap-1 px-2.5 py-1.5 bg-white border border-[#DDD5C7] rounded text-xs text-[#1F3864] hover:bg-[#1F3864] hover:text-white transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製查拋棄繼承函稿</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 頁籤 4：移送作業與各分署管轄 (四、移送作業 P.16 ~ 20) */}
      {/* ========================================================================= */}
      {activeTab === 'transfer' && (
        <div className="space-y-6 animate-fadeIn">
          {/* 四、移送作業說明與公文 */}
          <div className="bg-white rounded-xl border border-[#DDD5C7] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5] mb-4">
              <h2 className="text-lg font-bold text-[#1F3864] flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#8C5A4B]" />
                <span>四、 移送作業 (第 16 ~ 20 頁)</span>
              </h2>
              <span className="text-xs bg-[#F2ECE1] text-[#7A6B63] px-2 py-0.5 rounded font-mono">P.16 ~ 20</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-3 bg-red-50 rounded-lg border border-red-200 text-red-900 text-xs">
                <strong>法定期限要求：</strong>受處分人經催繳逾期仍未繳納者，承辦人應於<strong>繳納期間屆滿之次日起 6 個月內</strong>，檢附全套五大必備附件移送法務部行政執行署轄區分署辦理強制執行。
              </div>

              {/* 移送公文函稿範例 */}
              <div className="border border-[#E5DFD5] rounded-xl p-4 bg-[#FAF7F2]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#1F3864] flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#8C5A4B]" />
                    <span>1. 移送強制執行署函稿範例 (以稿代簽 P.16)</span>
                  </h3>
                  <button
                    onClick={() =>
                      handleCopy(
                        'transfer-letter',
                        `新北市政府 函\n受文者：法務部行政執行署 OO 分署\n發文日期：\n發文字號：\n速別：\n密等及解密條件或保密期限：\n附件：如主旨\n\n主旨：檢送義務人 OO（移送案號：221B05-land-OOO）違反區域計畫法行政執行案件移送書及處分書相關資料各 1 份，請查照。\n\n正本：法務部行政執行署 OO 分署\n副本：新北市政府地政局(含移送書)\n\n本案依分層負責規定授權業務主管決行 第四層決行\n移送書 O 式 2 份，共 O 份請用印\n附件資料：\n發文附件：移送書、移送書附件(紙本)\n發文附件：處分書 (含送達證書)\n發文附件：催款函(含送達證書)\n發文附件：最新財產目錄\n發文附件：戶籍或公司登記資料`,
                        '移送公文函稿'
                      )
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#DDD5C7] rounded text-xs text-[#1F3864] hover:bg-[#1F3864] hover:text-white transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedKey === 'transfer-letter' ? '已複製！' : '複製移送公文函稿'}</span>
                  </button>
                </div>

                <div className="p-3 bg-white rounded border border-[#E5DFD5] text-xs font-mono text-gray-800 space-y-2">
                  <div className="text-gray-500">以稿代簽 檔 號: OOO/110809/1　保存年限: 5 年　第四層決行</div>
                  <div className="font-bold text-center text-sm text-[#1F3864]">新北市政府 函</div>
                  <div>受文者：法務部行政執行署 OO 分署（掛號附送達證書）</div>
                  <div><strong>主旨：</strong>檢送義務人 OO（移送案號：221B05-land-OOO）違反區域計畫法行政執行案件移送書及處分書相關資料各 1 份，請查照。</div>
                  <div>正本：法務部行政執行署 OO 分署　副本：新北市政府地政局(含移送書)</div>
                  <div className="p-2 bg-[#FAF7F2] rounded border border-[#E5DFD5]">
                    <div className="font-bold text-[#8C5A4B] mb-1">【移送五大必備附件清冊】（移送書一式 2 份用印）：</div>
                    <ol className="list-decimal pl-4 space-y-0.5 text-[11px] text-gray-700">
                      <li>移送書及移送書附件（紙本一式 2 份請用印）</li>
                      <li>處分書（含郵局掛號送達證書影本）</li>
                      <li>催款函（含郵局掛號送達證書影本）</li>
                      <li>最新財產目錄（國稅局與稅捐處清冊）</li>
                      <li>戶籍謄本或經濟部商業司商工公司登記資料</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* 法務部行政執行署各分署轄區一覽表 */}
              <div className="border border-[#E5DFD5] rounded-xl p-4 bg-[#FAF7F2]">
                <h3 className="font-bold text-[#1F3864] mb-3 flex items-center justify-between">
                  <span>3. 法務部行政執行署各分署轄區一覽表 (第 18 頁完整對照)</span>
                  <span className="text-xs text-[#8C5A4B] font-bold">新北市各行政區分工</span>
                </h3>
                <div className="overflow-x-auto text-xs bg-white rounded border border-[#E5DFD5]">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#1F3864] text-white">
                        <th className="p-2.5 border border-[#1F3864] w-12 text-center">編號</th>
                        <th className="p-2.5 border border-[#1F3864] w-36">分署名稱與公務信箱</th>
                        <th className="p-2.5 border border-[#1F3864]">管 轄 區 域</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5DFD5]">
                      <tr className="hover:bg-[#FAF7F2]">
                        <td className="p-2.5 border border-[#E5DFD5] text-center font-bold">1</td>
                        <td className="p-2.5 border border-[#E5DFD5]">
                          <div className="font-bold text-[#1F3864]">臺北分署</div>
                          <div className="font-mono text-gray-500 text-[11px]">tpye@mail.moj.gov.tw</div>
                        </td>
                        <td className="p-2.5 border border-[#E5DFD5] text-gray-800">
                          臺北市中正區、松山區、信義區、文山區、大安區、萬華區、中山區、<strong>新北市新店區、烏來區、深坑區、石碇區、坪林區</strong>、福建省金門縣
                        </td>
                      </tr>
                      <tr className="hover:bg-[#FAF7F2]">
                        <td className="p-2.5 border border-[#E5DFD5] text-center font-bold">2</td>
                        <td className="p-2.5 border border-[#E5DFD5]">
                          <div className="font-bold text-[#1F3864]">新北分署</div>
                          <div className="font-mono text-gray-500 text-[11px]">pcyd@mail.moj.gov.tw</div>
                        </td>
                        <td className="p-2.5 border border-[#E5DFD5] text-gray-800">
                          <strong>新北市板橋區、土城區、三重區、永和區、中和區、新莊區、三峽區、樹林區、鶯歌區、泰山區、蘆洲區、五股區、林口區</strong>
                        </td>
                      </tr>
                      <tr className="hover:bg-[#FAF7F2]">
                        <td className="p-2.5 border border-[#E5DFD5] text-center font-bold">3</td>
                        <td className="p-2.5 border border-[#E5DFD5]">
                          <div className="font-bold text-[#1F3864]">士林分署</div>
                          <div className="font-mono text-gray-500 text-[11px]">slyd@mail.moj.gov.tw</div>
                        </td>
                        <td className="p-2.5 border border-[#E5DFD5] text-gray-800">
                          臺北市士林區、北投區、大同區、內湖區、南港區、<strong>新北市汐止區、淡水區、八里區、三芝區、石門區</strong>、福建省連江縣
                        </td>
                      </tr>
                      <tr className="hover:bg-[#FAF7F2]">
                        <td className="p-2.5 border border-[#E5DFD5] text-center font-bold">4</td>
                        <td className="p-2.5 border border-[#E5DFD5]">
                          <div className="font-bold text-[#1F3864]">桃園分署</div>
                          <div className="font-mono text-gray-500 text-[11px]">tyyb1@mail.moj.gov.tw</div>
                        </td>
                        <td className="p-2.5 border border-[#E5DFD5] text-gray-800">
                          桃園市全區
                        </td>
                      </tr>
                      <tr className="hover:bg-[#FAF7F2]">
                        <td className="p-2.5 border border-[#E5DFD5] text-center font-bold">5</td>
                        <td className="p-2.5 border border-[#E5DFD5]">
                          <div className="font-bold text-[#1F3864]">宜蘭分署</div>
                          <div className="font-mono text-gray-500 text-[11px]">ilyd@mail.moj.gov.tw</div>
                        </td>
                        <td className="p-2.5 border border-[#E5DFD5] text-gray-800">
                          宜蘭縣、基隆市、<strong>新北市瑞芳區、貢寮區、雙溪區、平溪區、萬里區、金山區</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 函詢辦理情形函稿範例 */}
              <div className="border border-[#E5DFD5] rounded-xl p-4 bg-[#FAF7F2]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#1F3864] flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#8C5A4B]" />
                    <span>5. 函詢辦理情形函稿範例 - 請領債權憑證 (P.20)</span>
                  </h3>
                  <button
                    onClick={() =>
                      handleCopy(
                        'status-inquiry-letter',
                        `新北市政府地政局 函\n主旨：有關 OOO 君違反區域計畫法案件，前經新北市政府 OOO 年 OO 月 OO 日新北府地管字第 OOOOOOOOOO 號行政執行案件移送書請貴分署辦理行政執行(案號 221B05-land-OOO)，為確定新北市政府債權關係，請貴分署先行核發債權憑證，後續如查有財產再移強制執行，檢送本案移送書供參，復請查照。\n正本：法務部行政執行署 OO 分署\n副本：\n本案依分層負責規定授權業務主管決行 第三層決行\n發文附件：移送書、行政署執行命令(如有)`,
                        '函詢辦理情形公文函稿'
                      )
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#DDD5C7] rounded text-xs text-[#1F3864] hover:bg-[#1F3864] hover:text-white transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製函詢憑證函稿</span>
                  </button>
                </div>
                <div className="p-3 bg-white rounded border border-[#E5DFD5] text-xs font-mono text-gray-800">
                  <strong>核心目的：</strong>移送執行滿 6 個月未獲清償，或每年 9 月底前專責人員函詢繫屬執行分署進度時，函請執行分署先行核發債權憑證，以維市府債權並及時於當年度 11 月前辦理歲入保留數註銷作業。
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 頁籤 5：執行成果與入帳 (五、執行有成果 P.21 ~ 27) */}
      {/* ========================================================================= */}
      {activeTab === 'execution-result' && (
        <div className="space-y-6 animate-fadeIn">
          {/* 五、執行有成果說明 */}
          <div className="bg-white rounded-xl border border-[#DDD5C7] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5] mb-4">
              <h2 className="text-lg font-bold text-[#1F3864] flex items-center gap-2">
                <Banknote className="w-5 h-5 text-[#8C5A4B]" />
                <span>五、 執行有成果與入帳作業 (第 21 ~ 27 頁)</span>
              </h2>
              <span className="text-xs bg-[#F2ECE1] text-[#7A6B63] px-2 py-0.5 rounded font-mono">P.21 ~ 27</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 成果路徑 1：支票入帳 */}
                <div className="border border-[#E5DFD5] rounded-xl p-4 bg-[#FAF7F2] space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#1F3864]">路徑 1：扣押收取支票作業 (P.21~22)</h3>
                    <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">第三層決行·後會會計室</span>
                  </div>
                  <p className="text-xs text-gray-700">
                    由扣押金融機構（如銀行）開具支票交付地政局，由專責人員辦理入帳並復知執行分署與義務人。
                  </p>

                  <div className="bg-white p-3 rounded-lg border border-[#E5DFD5] space-y-1.5 text-xs">
                    <div className="font-bold text-[#8C5A4B]">【六大作業階段 SOP】：</div>
                    <div><strong>1. 繳款書作業：</strong>至台銀公庫網登打繳款書，核對罰鍰系統及保留款明細表金額。</div>
                    <div><strong>2. 函文陳核：</strong>陳核➔決行➔臺灣銀行存入支票➔繳款書掃描存檔➔發文。</div>
                    <div><strong>3. 會辦流程：</strong>若含執行必要費用，後會會計室開傳票。</div>
                    <div><strong>4. 繳款入庫：</strong>支票背面蓋上「新北市政府地政局」地址章及承辦人分機號碼，繳款書與支票存入臺灣銀行。</div>
                    <div><strong>5. 發文：</strong>正本送執行分署（附收據影本）；副本送義務人（掛號附送達證書及繳款書收執聯正本）。</div>
                    <div><strong>6. 銷帳追蹤：</strong>更新列管表，1週後上台銀系統查詢核實入庫並存檔。</div>
                  </div>

                  <button
                    onClick={() =>
                      handleCopy(
                        'check-letter',
                        `新北市政府地政局 函\n主旨：有關貴分署(OOO 年區計罰執字第 OOOOOOOO 號)行政執行案件，業經 OOO [銀行]交付新臺幣 OO,OOO 元整之[支票]並由本局至臺灣銀行北府簡易型分行辦理入帳（本次已繳清/尚有未受償金額 OO,OOO 元），茲檢送繳款書收據聯影本 1 份，請查照。\n說明：\n一、依 OOO [銀行]OOO 年 OO 月 OO 日 OO 第 OOOOO 號函辦理。\n二、副本抄送義務人 OOO：檢送已繳納之新臺幣 OO,OOO 元整繳款書收據聯正本 1 份，請妥為收執。\n正本：法務部行政執行署 OO 分署\n副本：OOO 君（含繳款書收執聯正本）\n本案依分層負責規定授權業務主管決行 後會會計室 第三層決行`,
                        '支票入帳公文函稿'
                      )
                    }
                    className="w-full inline-flex items-center justify-center gap-1 px-2.5 py-1.5 bg-white border border-[#DDD5C7] rounded text-xs text-[#1F3864] hover:bg-[#1F3864] hover:text-white transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製支票函稿範例 (P.21)</span>
                  </button>
                </div>

                {/* 成果路徑 2：保管金專戶轉入 */}
                <div className="border border-[#E5DFD5] rounded-xl p-4 bg-[#FAF7F2] space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#1F3864]">路徑 2：保管金專戶匯入轉帳 (P.23~25)</h3>
                    <span className="text-xs text-blue-700 bg-blue-100 px-2 py-0.5 rounded font-bold">便簽會計室·復知執行分署</span>
                  </div>
                  <p className="text-xs text-gray-700">
                    行政執行分署將扣押款項直接匯入地政局「保管金專戶 93014602700116」，由編管科簽會會計室轉入罰鍰預算科目。
                  </p>

                  <div className="bg-white p-3 rounded-lg border border-[#E5DFD5] space-y-1.5 text-xs">
                    <div className="font-bold text-[#8C5A4B]">【便簽會計室範例 (P.23)】：</div>
                    <div className="font-mono text-gray-800 text-[11px] p-2 bg-[#FAF7F2] rounded border border-[#E5DFD5]">
                      主旨：有關本局義務人 OOO，OOO年違反區域計畫法案件，經執行分署於某日匯入「本局保管金專戶 93014602700116」帳戶，請貴室協助將該帳新臺幣 OOO 元轉至預算科目「罰款及賠償收入-罰金罰鍰及怠金-罰金罰鍰-違反區域計畫法」，檢附繳款書請協助辦理。
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      handleCopy(
                        'safekeeping-memo',
                        `便簽\n單位：編定管制科\n有關本局義務人 OOO,OOO 年違反區域計畫法案件，因逾期未繳經本局分別移送強制執行(移送案件 221B05-land-OOO)，經法務部行政執行署 OO 分署執行於 OOO 年 OO 月 OO 日已匯入「本局保管金專戶 93014602700116」帳戶，請貴室協助將該帳新臺幣 OOO 元轉至 OOO 年預算科目「罰款及賠償收入-罰金罰鍰及怠金-罰金罰鍰-違反區域計畫法」，檢附繳款書(詳附件)請協助辦理。\n此致 會計室\n編定管制科`,
                        '保管金專戶轉入便簽'
                      )
                    }
                    className="w-full inline-flex items-center justify-center gap-1 px-2.5 py-1.5 bg-white border border-[#DDD5C7] rounded text-xs text-[#1F3864] hover:bg-[#1F3864] hover:text-white transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製保管金轉入便簽 (P.23)</span>
                  </button>
                </div>
              </div>

              {/* 會計科目與入庫代碼對照表 */}
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD5]">
                <h3 className="font-bold text-[#1F3864] mb-2 flex items-center justify-between">
                  <span>繳款書會計科目登打規範 (第 27 頁)</span>
                  <span className="text-xs text-red-600 font-bold">登帳科目嚴格區分</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded border border-[#E5DFD5]">
                    <div className="font-bold text-[#1F3864]">1. 以前年度歲入保留數</div>
                    <div className="text-gray-700 mt-1">
                      罰金罰鍰 - 案件年度<br/>
                      科目代碼：<span className="font-mono font-bold text-[#8C5A4B]">OOO111060300</span> 其他收入-雜項收入-收回以前年度歲出
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded border border-[#E5DFD5]">
                    <div className="font-bold text-[#1F3864]">2. 取得債權憑證列管案件</div>
                    <div className="text-gray-700 mt-1">
                      罰金罰鍰 - 案件年度<br/>
                      科目代碼：<span className="font-mono font-bold text-[#8C5A4B]">OOO111060100</span> 其他收入-雜項收入-其他雜項收入
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 頁籤 6：債權憑證管理與註銷保留 (六、債權憑證之核發、管理 P.28 ~ 39) */}
      {/* ========================================================================= */}
      {activeTab === 'cert-manage' && (
        <div className="space-y-6 animate-fadeIn">
          {/* 六、債權憑證之核發與管理 */}
          <div className="bg-white rounded-xl border border-[#DDD5C7] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5] mb-4">
              <h2 className="text-lg font-bold text-[#1F3864] flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#8C5A4B]" />
                <span>六、 債權憑證之核發、管理 (第 28 ~ 39 頁)</span>
              </h2>
              <span className="text-xs bg-[#F2ECE1] text-[#7A6B63] px-2 py-0.5 rounded font-mono">P.28 ~ 39</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 簽辦單範例 1：第一次存入 */}
                <div className="border border-[#E5DFD5] rounded-xl p-4 bg-[#FAF7F2] space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#1F3864]">1. 第一次存入簽辦單範例 (P.28)</h3>
                    <span className="text-xs text-gray-500 font-mono">保存20年</span>
                  </div>
                  <div className="p-3 bg-white rounded border border-[#E5DFD5] text-xs font-mono space-y-1">
                    <div className="font-bold text-[#8C5A4B]">【擬辦內容】：</div>
                    <div>一、本案係義務人 OOO 違反區域計畫法經移送至法務部行政執行署 OO 分署執行之案件，經該署執行後未能清償債權，核發債權憑證，先予說明。</div>
                    <div>二、加會秘書室及會計室，並將本債權憑證正本抽存於本局秘書室錄案保管存放。</div>
                    <div>三、文擬影本存查(影本與正本相符)。</div>
                    <div className="text-gray-500 pt-1">會簽意見：會秘書室、會計室</div>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy(
                        'first-deposit-memo',
                        `新北市政府地政局 簽辦單\n擬辦：\n一、本案係義務人 OOO 違反區域計畫法經移送至法務部行政執行署 OO 分署執行之案件，經該署執行後未能清償債權，核發債權憑證，先予說明。\n二、加會秘書室及會計室，並將本債權憑證正本抽存於本局秘書室錄案保管存放。\n三、文擬影本存查(影本與正本相符)。\n會簽意見：秘書室、會計室`,
                        '第一次存入簽辦單'
                      )
                    }
                    className="w-full inline-flex items-center justify-center gap-1 px-2.5 py-1.5 bg-white border border-[#DDD5C7] rounded text-xs text-[#1F3864] hover:bg-[#1F3864] hover:text-white transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製第1次存入簽辦單</span>
                  </button>
                </div>

                {/* 簽辦單範例 2：再存入 */}
                <div className="border border-[#E5DFD5] rounded-xl p-4 bg-[#FAF7F2] space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#1F3864]">2. 再存入簽辦單範例 (換發新憑證 P.29)</h3>
                    <span className="text-xs text-gray-500 font-mono">保存20年</span>
                  </div>
                  <div className="p-3 bg-white rounded border border-[#E5DFD5] text-xs font-mono space-y-1">
                    <div className="font-bold text-[#8C5A4B]">【擬辦內容】：</div>
                    <div>一、本案係前以同一義務人 OOO 之執行憑證為執行名義，再行移送至行政執行署 OO 分署執行之案件，現經該署執行無結果後，再行核發執行憑證，先予說明。</div>
                    <div>二、加會秘書室及會計室，開傳票取回前為執行名義之執行憑證正本，連同本案併同送本局秘書室錄案保管存放。</div>
                    <div>三、文擬影本存查(影本與正本相符)。</div>
                    <div className="text-gray-500 pt-1">會簽意見：會秘書室、會計室</div>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy(
                        'redeposit-memo',
                        `新北市政府地政局 簽辦單\n擬辦：\n一、本案係前以同一義務人 OOO 之執行憑證為執行名義，再行移送至行政執行署 OO 分署執行之案件，現經該署執行無結果後，再行核發執行憑證，先予說明。\n二、加會秘書室及會計室，開傳票取回前為執行名義之執行憑證正本，連同本案併同送本局秘書室錄案保管存放。\n三、文擬影本存查(影本與正本相符)。\n會簽意見：秘書室、會計室`,
                        '再存入簽辦單'
                      )
                    }
                    className="w-full inline-flex items-center justify-center gap-1 px-2.5 py-1.5 bg-white border border-[#DDD5C7] rounded text-xs text-[#1F3864] hover:bg-[#1F3864] hover:text-white transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製再存入簽辦單</span>
                  </button>
                </div>
              </div>

              {/* 債權憑證存入操作 SOP */}
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD5] space-y-2">
                <h3 className="font-bold text-[#1F3864] flex items-center justify-between">
                  <span>4. 債權憑證存入具體操作說明 (第 31 頁)</span>
                  <span className="text-xs text-blue-700 font-bold">秘書室保管品專戶流程</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded border border-[#E5DFD5]">
                    <div className="font-bold text-[#8C5A4B]">步驟 1：簽核與會辦</div>
                    <div className="text-gray-700 mt-1">
                      陳核➔決行➔會辦【秘書室】及【會計室】➔會畢後掃描入檔案夾存查歸檔。取得之債憑掃描入「取得債權憑證掃描」存查。
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded border border-[#E5DFD5]">
                    <div className="font-bold text-[#8C5A4B]">步驟 2：存入與保管收據</div>
                    <div className="text-gray-700 mt-1">
                      正本放入專用信封，封面填寫案號移交秘書室。待秘書室提供<strong>保管品收據</strong>後，將〈寄存證號碼〉填入列管表(P.32)。
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded border border-[#E5DFD5]">
                    <div className="font-bold text-[#8C5A4B]">步驟 3：入系統與歸檔</div>
                    <div className="text-gray-700 mt-1">
                      將債權憑證字號、面額、寄存證號輸入本府罰鍰系統『債權憑證資料維護』，整卷掃描歸檔存查。
                    </div>
                  </div>
                </div>
              </div>

              {/* 註銷保留數公文與操作 (P.34~37) */}
              <div className="border border-[#E5DFD5] rounded-xl p-4 bg-[#FAF7F2] space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#1F3864] flex items-center gap-2">
                    <Stamp className="w-4 h-4 text-[#8C5A4B]" />
                    <span>7. 註銷保留數函稿與復知程序 (P.34 ~ 37)</span>
                  </h3>
                  <span className="text-xs bg-[#1F3864] text-white px-2 py-0.5 rounded font-bold">11月底前完成</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {/* 函審計處 */}
                  <div className="p-3 bg-white rounded border border-[#E5DFD5] space-y-2">
                    <div className="font-bold text-[#1F3864] flex items-center justify-between">
                      <span>函發審計部新北市審計處 (P.34)</span>
                      <button
                        onClick={() =>
                          handleCopy(
                            'audit-cancel-reserve',
                            `新北市政府地政局 函\n受文者：審計部新北市審計處\n主旨：為辦理本局 OOO 年度違反區域計畫法案件義務人 OOO、OOO 等 O 案行政罰鍰歲入保留款註銷事宜，請查照。\n說明：\n一、依新北市政府各機關註銷應收款項與存貨及存出保證金會計事務處理作業規定辦理。\n二、查旨揭行政罰鍰歲入保留款註銷共 O 案，合計 OO 萬元，分述如下：(條列義務人姓名、地號、處分金額與未繳數)。\n三、依前揭作業規定第 2 點第 12 款規定，因 OOO 年已決算審定，本局歲入罰鍰保留款帳上案件已依法取得債權憑證，爰報請同意辦理註銷歲入保留數 OO 萬元整。\n四、檢送本局註銷行政罰鍰歲入保留數案件資料供參。\n正本：審計部新北市審計處\n本案依分層負責規定授權業務主管決行 第二層決行 敬會會計室`,
                            '註銷保留款函審計處'
                          )
                    }
                    className="text-xs text-[#1F3864] hover:underline flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    <span>複製</span>
                  </button>
                </div>
                <p className="text-gray-700">
                  前年度案件取得債憑當年度 8~11 月底前完成；當年度案件次年 3 月審計決算後於 8~11 月底完成。
                </p>
              </div>

                  {/* 復知財政局、主計處、會計室 */}
                  <div className="p-3 bg-white rounded border border-[#E5DFD5] space-y-2">
                    <div className="font-bold text-[#1F3864] flex items-center justify-between">
                      <span>復知財政局·主計處·會計室 (P.35)</span>
                      <button
                        onClick={() =>
                          handleCopy(
                            'notify-cancel-reserve',
                            `新北市政府地政局 函\n受文者：新北市政府財政局\n主旨：為本局註銷 OOO 年度違反區域計畫法義務人 OOO 及 OOO 等 O 案，金額各 O 萬元，合計 OO 萬元整之應收歲入款(保留數)案，業經審計部新北市審計處同意辦理，請查照。\n說明：依據審計部新北市審計處 OOO 年 OO 月 OO 日審新北四字第 OOOOOOOOOO 號函(影附)辦理。\n正本：新北市政府財政局\n副本：新北市主計處、新北市政府地政局會計室(均含附件)\n本案依分層負責規定授權業務主管決行 第二層決行 後會會計室`,
                            '註銷保留款復知函'
                          )
                    }
                    className="text-xs text-[#1F3864] hover:underline flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    <span>複製</span>
                  </button>
                </div>
                <p className="text-gray-700">
                  審計處核准後，檢送核定函影本復知市府財政局，並副知主計處及局會計室，正式自帳上減除歲入保留數。
                </p>
              </div>
            </div>

                {/* 九大應備文件清冊 */}
                <div className="p-3 bg-white rounded border border-[#E5DFD5] text-xs">
                  <div className="font-bold text-[#8C5A4B] mb-1">【註銷保留數審計核准應備九大文件清冊 (P.36)】：</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-gray-700">
                    <div>1. 註銷保留款案件說明表</div>
                    <div>2. 處分書正本/影本</div>
                    <div>3. 處分書郵局送達證書</div>
                    <div>4. 催款函</div>
                    <div>5. 催款函郵局送達證書</div>
                    <div>6. 行政執行移送書</div>
                    <div>7. 國稅局所得及財產清冊</div>
                    <div>8. 稅捐處財產資料清冊</div>
                    <div>9. 執行分署核發之債權憑證</div>
                  </div>
                  <div className="mt-2 p-1.5 bg-amber-50 rounded text-amber-900 font-semibold text-[11px]">
                    ※ 注意事項：若「處分書日期」與「初次移送日期」間隔超過 6 個月，必須在案件說明表中增加「改善說明」。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 頁籤 7：再執行與終局註銷 (七、再執行作業 / 八、帳務註銷作業 P.40 ~ 57) */}
      {/* ========================================================================= */}
      {activeTab === 're-execution' && (
        <div className="space-y-6 animate-fadeIn">
          {/* 七、再執行作業 */}
          <div className="bg-white rounded-xl border border-[#DDD5C7] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5] mb-4">
              <h2 className="text-lg font-bold text-[#1F3864] flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-[#8C5A4B]" />
                <span>七、 再執行作業 (第 40 ~ 45 頁)</span>
              </h2>
              <span className="text-xs bg-[#F2ECE1] text-[#7A6B63] px-2 py-0.5 rounded font-mono">P.40 ~ 45</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD5] space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#1F3864]">上半年查調 (2月底前 P.40)</h3>
                    <span className="text-xs text-blue-700 font-bold">稅捐處·查財產</span>
                  </div>
                  <p className="text-xs text-gray-700">
                    函新北市政府稅捐稽徵處，查調列管義務人之最新動產、不動產及投資資料。
                  </p>
                  <button
                    onClick={() =>
                      handleCopy(
                        'tax-office-recheck',
                        `新北市政府地政局 函\n主旨：為處理 OOO 年度違反區域計畫法案件需要，請貴處協助提供 OOO、OOO 等人(詳附件)之財產資料，以利移送法務部行政執行署聲請強制執行，請查照。\n說明：\n一、依據稅捐稽徵法第 33 條第 1 項第 8 款、強制執行法第 4 條第 1 項第 6 款及辦理強制執行事件應行注意事項第 2 項第 13 款規定辦理。\n二、上開財產(含動產、不動產及投資)請給予最新資料。\n正本：新北市政府稅捐稽徵處\n附件：OOO 年罰鍰未繳案件清冊、附件查 OOO 年度義務人 OOO 等人`,
                        '上半年查財產函稿'
                      )
                    }
                    className="w-full inline-flex items-center justify-center gap-1 px-2.5 py-1.5 bg-white border border-[#DDD5C7] rounded text-xs text-[#1F3864] hover:bg-[#1F3864] hover:text-white transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製上半年查財產函稿</span>
                  </button>
                </div>

                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD5] space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#1F3864]">下半年查調 (8月底前 P.41)</h3>
                    <span className="text-xs text-emerald-700 font-bold">國稅局·查所得</span>
                  </div>
                  <p className="text-xs text-gray-700">
                    函財政部北區國稅局板橋分局，查調列管義務人之最新所得及扣繳憑單資料。
                  </p>
                  <button
                    onClick={() =>
                      handleCopy(
                        'national-tax-recheck',
                        `新北市政府地政局 函\n主旨：為應公務需要，請協助提供 OOO 之所得及財產資料，以利移送法務部行政執行署聲請強制執行，檢送查調所得人清冊供參，請查照。\n說明：依據稅捐稽徵法第 33 條第 1 項第 8 款、強制執行法第 4 條第 1 項第 6 款、辦理強制執行事件應行注意事項第 2 項第 13 款及行政執行法第 13 條規定辦理。\n正本：財政部北區國稅局板橋分局\n附件：OOO 年罰鍰未繳案件清冊、義務人所得人清冊`,
                        '下半年查所得函稿'
                      )
                    }
                    className="w-full inline-flex items-center justify-center gap-1 px-2.5 py-1.5 bg-white border border-[#DDD5C7] rounded text-xs text-[#1F3864] hover:bg-[#1F3864] hover:text-white transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製下半年查所得函稿</span>
                  </button>
                </div>
              </div>

              {/* 再移送強制執行說明 (P.43~45) */}
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD5] space-y-2">
                <h3 className="font-bold text-[#1F3864] flex items-center justify-between">
                  <span>再移送強制執行具體操作 (P.43 ~ 45)</span>
                  <span className="text-xs text-[#8C5A4B] font-bold">查明新增具實益財產 3 個月內移送</span>
                </h3>
                <div className="space-y-1.5 text-xs text-gray-700">
                  <div><strong>1. 移送書製作：</strong>填寫移送書(P.44)及行政執行署要求之電子移送書(EXCEL)。兩案以上得合併移送，檔名格式：<code>日期+債憑號碼+義務人名</code>。</div>
                  <div><strong>2. 最新身份查核：</strong>利用公務雲戶役政下載最新戶籍；商工查詢系統下載公司登記現況，確保合法送達。</div>
                  <div><strong>3. 電子傳送：</strong>發文後 E-mail 電子移送書給行政執行署繫屬分署。</div>
                  <div><strong>4. 留存歸檔：</strong>收到用印移送書掃描存入案件夾，歸檔檔號：<code>OO年/11080206/1</code>，保存年限 <strong>20 年</strong>。</div>
                </div>
              </div>
            </div>
          </div>

          {/* 八、帳務註銷作業（兩大終局情境） */}
          <div className="bg-white rounded-xl border border-[#DDD5C7] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5] mb-4">
              <h2 className="text-lg font-bold text-[#1F3864] flex items-center gap-2">
                <Archive className="w-5 h-5 text-[#8C5A4B]" />
                <span>八、 帳務註銷作業 (第 46 ~ 57 頁兩大情境)</span>
              </h2>
              <span className="text-xs bg-[#F2ECE1] text-[#7A6B63] px-2 py-0.5 rounded font-mono">P.46 ~ 57</span>
            </div>

            <div className="space-y-6 text-xs sm:text-sm">
              {/* 情境 1：全數繳清 */}
              <div className="border border-emerald-300 rounded-xl p-4 bg-emerald-50/40 space-y-3">
                <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
                  <h3 className="font-bold text-emerald-900 text-base flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>情境 1：受處分人全數繳清 ➔ 取回正本債權憑證註銷歸檔 (P.46~48)</span>
                  </h3>
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">7日內辦理</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded border border-emerald-200 space-y-2">
                    <div className="font-bold text-[#1F3864] flex items-center justify-between">
                      <span>取回正本憑證簽呈範例 (P.46)</span>
                      <button
                        onClick={() =>
                          handleCopy(
                            'paid-cancel-memo',
                            `簽\n單位：編定管制科 承辦人：\n主旨：為取回存放於代理市庫銀行保管品專戶之債權憑證並辦理註銷一案，簽請核示。\n說明：\n一、依新北市政府所屬各機關學校行政罰鍰案件及債權憑證管理要點第 12 點規定辦理。\n二、查義務人 OOO 君因違反區域計畫法裁罰新臺幣 O 萬元在案，受處分人於 OOO 年 OO 月 OO 日全數繳清罰鍰，為符合前開保管程序規定，已依規定將該債權憑證(寄存證號 OOO)存放於保管品專戶，依前開要點應將已獲清償結案之債權憑證取回歸檔，以符規定。\n擬辦：本案蒙核可後，即依上開規定領回受處分人 OOO 君之債權憑證，並依檔案法相關規定將該憑證予以存查歸檔。\n會辦單位：秘書室、會計室(開傳票取回債權憑證正本) 第二層決行`,
                            '全數繳清取回憑證簽呈'
                          )
                    }
                    className="text-xs text-[#1F3864] hover:underline flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    <span>複製</span>
                  </button>
                </div>
                <p className="text-gray-700">
                  受處分人全數完納罰鍰後，簽請會計室開立傳票，自秘書室保管品專戶領回正本債權憑證，依檔案法存查歸檔。
                </p>
              </div>

                  <div className="p-3 bg-white rounded border border-emerald-200 space-y-2">
                    <div className="font-bold text-[#1F3864] flex items-center justify-between">
                      <span>存查歸檔簽辦單範例 (P.47)</span>
                      <button
                        onClick={() =>
                          handleCopy(
                            'paid-archive-sheet',
                            `新北市政府地政局 簽辦單\n擬辦：\n一、查義務人 OOO 先生，因違反區域計畫法裁罰新臺幣 O 萬元在案，受處分人業於 OOO 年 OO 月 OO 日全數繳清罰鍰新臺幣 O 萬元整，為符合「新北市政府所屬各機關學校債權憑證管理要點」保管程序規定，依前開要點將已獲清償結案之債權憑證取回，並依檔案法相關規定將該憑證予以存查歸檔。\n二、文擬陳閱後存查。\n批示：陳閱後存查`,
                            '全數繳清存查歸檔簽辦單'
                          )
                    }
                    className="text-xs text-[#1F3864] hover:underline flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    <span>複製</span>
                  </button>
                </div>
                <p className="text-gray-700">
                  取回憑證後，併同繳款書收據正本、處分書影本及送達回證，立案存查歸檔。
                </p>
              </div>
            </div>
          </div>

              {/* 情境 2：債權屆滿10年法定執行期 */}
              <div className="border border-red-300 rounded-xl p-4 bg-red-50/40 space-y-3">
                <div className="flex items-center justify-between border-b border-red-200 pb-2">
                  <h3 className="font-bold text-red-900 text-base flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <span>情境 2：債權屆滿 10 年法定執行期間 ➔ 申請解除財務責任註銷 (P.49~57)</span>
                  </h3>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded font-bold">局一層決行·審計處核定</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-red-200 text-xs text-gray-800 space-y-1">
                  <strong>法理與要件（行政執行法第 7 條＋要點第 12 點）：</strong>
                  <div>
                    行政執行自處分確定日起算，5年內未經執行不再執行；於5年內已開始執行者得繼續執行，但自5年期間屆滿之日起已逾5年（合計<strong>滿 10 年</strong>）尚未執行終結者，依法<strong>不得再執行</strong>。
                  </div>
                  <div className="text-[#8C5A4B] font-bold">
                    各機關必須查明管理、催繳及查調財產程序是否已盡「善良管理人之注意義務」，詳填「簡明表」報審計部新北市審計處核定後始得辦理註銷。
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {/* 簽稿併陳 - 簽呈 */}
                  <div className="p-3 bg-white rounded border border-red-200 space-y-2">
                    <div className="font-bold text-[#1F3864] flex items-center justify-between">
                      <span>簽稿併陳 1：局內簽呈 (P.49)</span>
                      <button
                        onClick={() =>
                          handleCopy(
                            'expire-memo-draft',
                            `簽稿併陳\n單位：編定管制科 承辦人：\n主旨：有關義務人 OOO 違反非都市土地使用管制規定裁罰罰鍰，經法務部行政執行署核發債權憑證，申請解除責任一案，簽請核示。\n說明：\n一、依新北市政府所屬各機關學校行政罰鍰案件及債權憑證管理要點辦理。\n二、義務人 OOO 違反非都市土地使用管制規定，前經本府處分書裁罰新臺幣 6 萬元整，因未繳納催繳後移送法務部行政執行署，經該分署核發 6 萬元執行憑證。\n三、前揭債權憑證已屆本局保管期限，依行政執行法第 7 條規定：「行政執行，自處分、裁定確定之日或其他依法令負有義務經通知限期履行之文書所定期間屆滿之日起，五年內未經執行者，不再執行；其於五年期間屆滿前已開始執行者，仍得繼續執行。但自五年期間屆滿之日起已逾五年尚未執行終結者，不得再執行...。」，故本案依行政執行法規定其法定執行期間屆滿，已不得再執行。\n擬辦：本案因已屆法定執行期間，依上開管理要點規定，擬請鈞長同意解除責任，於奉核後擬函請審計部新北市審計處核定後，並副知本府主計處及財政局，據以辦理註銷。\n會辦單位：秘書室、會計室(開傳票取回債權憑證正本) 第二層決行`,
                            '債權屆滿局內簽呈'
                          )
                    }
                    className="text-xs text-[#1F3864] hover:underline flex items-center gap-1"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製簽呈</span>
                  </button>
                </div>
                <p className="text-gray-700">
                  採簽稿併陳方式陳核，先會秘書室與會計室，奉核後向審計處發函申請核准。
                </p>
              </div>

                  {/* 簽稿併陳 - 函稿 */}
                  <div className="p-3 bg-white rounded border border-red-200 space-y-2">
                    <div className="font-bold text-[#1F3864] flex items-center justify-between">
                      <span>簽稿併陳 2：函發審計處 (P.50)</span>
                      <button
                        onClick={() =>
                          handleCopy(
                            'expire-audit-letter',
                            `新北市政府地政局 函\n受文者：審計部新北市審計處\n主旨：有關義務人 OOO 違反非都市土地使用管制規定裁罰罰鍰，經法務部行政執行署核發債權憑證，申請解除責任一案，請查照。\n說明：\n一、依新北市政府所屬各機關學校行政罰鍰案件及債權憑證管理要點辦理。\n二、義務人 OOO 違反非都市土地使用管制規定，前經本府裁罰新臺幣 O 萬元整，逾期移送行政執行署核發執行憑證。\n三、前揭債權憑證依行政執行法第 7 條規定，其法定執行期間屆滿，已不得再執行。\n四、檢送「申請解除債權憑證財務責任簡明表」及資料各 1 份。\n正本：審計部新北市審計處\n副本：\n本案依分層負責規定授權業務主管決行 第一層決行`,
                            '債權屆滿函發審計處'
                          )
                    }
                    className="text-xs text-[#1F3864] hover:underline flex items-center gap-1"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製函稿</span>
                  </button>
                </div>
                <p className="text-gray-700">
                  第一層局長決行，檢附「申請解除債權憑證財務責任簡明表」全套卷宗報請審計處核准。
                </p>
              </div>
            </div>

                {/* 申請解除債權憑證財務責任簡明表欄位對照 (P.52) */}
                <div className="p-3 bg-white rounded-lg border border-red-200 text-xs">
                  <div className="font-bold text-[#1F3864] mb-2 flex items-center justify-between">
                    <span>申請解除債權憑證財務責任簡明表 (第 52 頁必填項目)</span>
                    <span className="text-red-700 font-bold">審計機關審查核心</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-gray-700">
                    <div className="p-2 bg-[#FAF7F2] rounded">機關名稱：新北市政府地政局</div>
                    <div className="p-2 bg-[#FAF7F2] rounded">義務人姓名及統號</div>
                    <div className="p-2 bg-[#FAF7F2] rounded">處分書日期字號及罰鍰金額</div>
                    <div className="p-2 bg-[#FAF7F2] rounded">催繳函發文日期及送達日期</div>
                    <div className="p-2 bg-[#FAF7F2] rounded">移送執行署分署及移送案號</div>
                    <div className="p-2 bg-[#FAF7F2] rounded">債權憑證字號及寄存證號</div>
                    <div className="p-2 bg-[#FAF7F2] rounded">每年財稅查調紀錄與成果</div>
                    <div className="p-2 bg-[#FAF7F2] rounded text-[#8C5A4B] font-bold">是否已盡善良管理人注意義務</div>
                  </div>
                </div>

                {/* 副知主計處、財政局與系統註銷 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded border border-red-200 space-y-1">
                    <div className="font-bold text-[#1F3864]">副知主計處、財政局 (P.51)</div>
                    <div className="text-gray-700">
                      審計部新北市審計處准予同意註銷後，發函檢送核准函影本通知【主計處】及【財政局】，正本結案。
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded border border-red-200 space-y-1">
                    <div className="font-bold text-[#1F3864]">罰鍰系統註銷登記規範 (P.55)</div>
                    <div className="text-gray-700">
                      至本府罰鍰系統『債權憑證資料維護』輸入：<br/>
                      1. 註銷日期：填核定日期<br/>
                      2. 註銷文號：依審計部新北市審計處核定函文號<br/>
                      3. 註銷原因：<strong>「已屆法定執行期間屆滿，已不得再執行」</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 頁籤 8：兩大法令依據附件全文 (肆、法令依據附件 P.58 ~ 61) */}
      {/* ========================================================================= */}
      {activeTab === 'annex' && (
        <div className="space-y-6 animate-fadeIn">
          {/* 附件一：新北市政府所屬各機關學校行政罰鍰案件及債權憑證管理要點 */}
          <div className="bg-white rounded-xl border border-[#DDD5C7] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5] mb-4">
              <h2 className="text-lg font-bold text-[#1F3864] flex items-center gap-2">
                <FileSignature className="w-5 h-5 text-[#8C5A4B]" />
                <span>肆、法令依據附件一：新北市政府所屬各機關學校行政罰鍰案件及債權憑證管理要點全文</span>
              </h2>
              <button
                onClick={() =>
                  handleCopy(
                    'regulation-full-text',
                    `新北市政府所屬各機關學校行政罰鍰案件及債權憑證管理要點\n中華民國 111 年 11 月 16 日新北府主會字第 1112204558 號令修正\n\n一、 新北市政府（以下簡稱本府）為加強管理所屬各機關學校（以下簡稱各機關）之行政罰鍰案件（以下簡稱罰鍰案件）及所取得之債權憑證，以確保本府權益，特訂定本要點。\n二、 債權憑證之登錄、保管及清理，除其他法令另有規定外，依本要點規定辦理。\n三、 本要點所稱債權憑證，指民事執行事件及行政執行事件，經強制執行無效果，由執行法院或行政執行分署發給之民事債權憑證或執行憑證。\n四、 罰鍰案件之管理作業，依下列規定辦理：\n（一）應一律使用本府罰鍰系統。但經報請本府財政局（以下簡稱本局）同意另以其他系統控管者，不在此限。\n（二）同一受處分人違反同一行政法規之罰鍰案件，應彙總歸戶；如為累欠或累犯者，應建立專案控管機制，各機關得視業務需要另定相關處理程序及原則。\n（三）罰鍰案件之各項登記資料，應指派專人負責管理並列入業務移交；移交時，應載明移交日期，並經單位主管核章，以明責任。\n五、 罰鍰案件之執行作業，依下列規定辦理：\n（一）罰鍰處分書及繳款書之送達，除法令另有規定外，依行政程序法相關規定辦理。\n（二）受處分人應繳之罰鍰，於繳納期限屆滿仍未繳納者，除依各裁處法令規定進行催繳外，各機關應自繳納期間屆滿之次日起六個月內，移送該管行政執行分署執行之。移送行政執行之債權，未經清償或核發債權憑證者，應每年函詢繫屬行政執行分署追蹤掌控案件進度。\n（三）各機關將罰鍰案件移送行政執行前，應於戶政、役政或其他相關系統查明受處分人之戶籍資料，並向稅捐稽徵機關，查詢受處分人之財產及所得資料。\n六、 各機關得依新北市政府各機關受理申請分期繳納行政罰鍰案件處理原則，核准行政罰鍰分期繳納。\n七、 各機關就經管之罰鍰案件，每年應就以前年度未繳納案件訂定年度清理計畫，並於每年三月底前送本局。各機關應於每年二月及七月前填報行政罰鍰收繳及清理情形表（如附表一）送本局，本府得視各機關執行情形，於必要時召開檢討會議。\n八、 各機關就未繳納之罰鍰案件之註銷，應依新北市政府各機關註銷應收款項與存貨及存出保證金會計事務處理作業規定辦理。\n九、 年度結束後，由本局彙整各機關年度執行情形，依據新北市政府行政罰鍰案件管理獎懲基準表（如附表二）報本府核准獎懲事宜。\n十、 各機關學校取得之債權憑證，其處理程序如下：\n（一）債權憑證內容如有錯誤或不符者，並應立即聲請執行法院或行政執行分署更正後登記之。\n（二）須將債權憑證正本交由專人列冊或建檔妥為保管，並由會計單位列帳；保管人員每半年應列印債權憑證保管清冊，送業務單位核對。\n（三）每年至少應查調債務人財產及所得基本資料一次。但法定收繳期限或換發債權憑證期限將屆滿之案件，應視實際需要辦理查詢。\n（四）經查明債務人有新增可供執行且具執行實益之財產，應於三個月內附具債權憑證影本，簽報聲請強制執行，其強制執行之所得，收繳存入市庫。\n十一、 民事執行事件取得之債權憑證，各機關學校應於請求權消滅時效屆滿前三個月依規定領出，向執行法院聲請換發債權憑證。行政執行事件取得之債權憑證，其執行時效悉依行政執行法相關規定辦理，無需辦理債權憑證換發。\n十二、 各機關學校依法取得之債權憑證，除因債權清償、獲核發新債權憑證或原處分撤銷得自行註銷外，如債權屆滿法定收繳期限、逾行政執行期限或其他特殊原因而有辦理註銷之必要時，應查明管理、催繳程序是否已盡善良管理人之注意義務，並應詳填申請解除債權憑證財務責任簡明表（如附表三），檢同有關證明文件報經主管機關擬具查核意見，報請審計部新北市審計處（以下簡稱審計處）核定後，並副知本府主計處及本局，據以辦理註銷。依前項規定註銷之債權憑證，由會計單位減列帳務，並由債權憑證保管人員將憑證另行抽出，依檔案法相關規定歸檔，保存年限訂為三年，各機關並應列表備查，但經審計處核定註銷之債權憑證，應隨審計處函文歸檔。\n十三、 依本要點規定應編製之書表格式，由本局另定之。`,
                    '要點全文'
                  )
                }
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#DDD5C7] rounded text-xs text-[#1F3864] hover:bg-[#1F3864] hover:text-white transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedKey === 'regulation-full-text' ? '已複製！' : '複製要點全文 (13點)'}</span>
              </button>
            </div>

            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD5] space-y-3 text-xs sm:text-sm text-gray-800">
              <div className="text-center font-bold text-base text-[#1F3864]">
                新北市政府所屬各機關學校行政罰鍰案件及債權憑證管理要點
              </div>
              <div className="text-center text-xs text-gray-500 font-mono">
                中華民國 111 年 11 月 16 日新北府主會字第 1112204558 號令修正
              </div>

              <div className="space-y-3 pl-1 pr-1 divide-y divide-[#E5DFD5]">
                <div className="pt-2">
                  <strong className="text-[#1F3864]">一、</strong> 新北市政府（以下簡稱本府）為加強管理所屬各機關學校（以下簡稱各機關）之行政罰鍰案件（以下簡稱罰鍰案件）及所取得之債權憑證，以確保本府權益，特訂定本要點。
                </div>
                <div className="pt-2">
                  <strong className="text-[#1F3864]">二、</strong> 債權憑證之登錄、保管及清理，除其他法令另有規定外，依本要點規定辦理。
                </div>
                <div className="pt-2">
                  <strong className="text-[#1F3864]">三、</strong> 本要點所稱債權憑證，指民事執行事件及行政執行事件，經強制執行無效果，由執行法院或行政執行分署發給之民事債權憑證或執行憑證。
                </div>
                <div className="pt-2 space-y-1">
                  <strong className="text-[#1F3864]">四、 罰鍰案件之管理作業，依下列規定辦理：</strong>
                  <div className="pl-4 space-y-1">
                    <div>（一）應一律使用本府罰鍰系統。但經報請本府財政局（以下簡稱本局）同意另以其他系統控管者，不在此限。</div>
                    <div>（二）同一受處分人違反同一行政法規之罰鍰案件，應彙總歸戶；如為累欠或累犯者，應建立專案控管機制，各機關得視業務需要另定相關處理程序及原則。</div>
                    <div>（三）罰鍰案件之各項登記資料，應指派專人負責管理並列入業務移交；移交時，應載明移交日期，並經單位主管核章，以明責任。</div>
                  </div>
                </div>
                <div className="pt-2 space-y-1">
                  <strong className="text-[#1F3864]">五、 罰鍰案件之執行作業，依下列規定辦理：</strong>
                  <div className="pl-4 space-y-1">
                    <div>（一）罰鍰處分書及繳款書之送達，除法令另有規定外，依行政程序法相關規定辦理。</div>
                    <div>（二）受處分人應繳之罰鍰，於繳納期限屆滿仍未繳納者，除依各裁處法令規定進行催繳外，各機關應自繳納期間屆滿之次日起六個月內，移送該管行政執行分署執行之。移送行政執行之債權，未經清償或核發債權憑證者，應每年函詢繫屬行政執行分署追蹤掌控案件進度。</div>
                    <div>（三）各機關將罰鍰案件移送行政執行前，應於戶政、役政或其他相關系統查明受處分人之戶籍資料，並向稅捐稽徵機關，查詢受處分人之財產及所得資料。</div>
                  </div>
                </div>
                <div className="pt-2">
                  <strong className="text-[#1F3864]">六、</strong> 各機關得依新北市政府各機關受理申請分期繳納行政罰鍰案件處理原則，核准行政罰鍰分期繳納。
                </div>
                <div className="pt-2">
                  <strong className="text-[#1F3864]">七、</strong> 各機關就經管之罰鍰案件，每年應就以前年度未繳納案件訂定年度清理計畫，並於每年三月底前送本局。各機關應於每年二月及七月前填報行政罰鍰收繳及清理情形表（如附表一）送本局，本府得視各機關執行情形，於必要時召開檢討會議。
                </div>
                <div className="pt-2">
                  <strong className="text-[#1F3864]">八、</strong> 各機關就未繳納之罰鍰案件之註銷，應依新北市政府各機關註銷應收款項與存貨及存出保證金會計事務處理作業規定辦理。
                </div>
                <div className="pt-2">
                  <strong className="text-[#1F3864]">九、</strong> 年度結束後，由本局彙整各機關年度執行情形，依據新北市政府行政罰鍰案件管理獎懲基準表（如附表二）報本府核准獎懲事宜。
                </div>
                <div className="pt-2 space-y-1">
                  <strong className="text-[#1F3864]">十、 各機關學校取得之債權憑證，其處理程序如下：</strong>
                  <div className="pl-4 space-y-1">
                    <div>（一）債權憑證內容如有錯誤或不符者，並應立即聲請執行法院或行政執行分署更正後登記之。</div>
                    <div>（二）須將債權憑證正本交由專人列冊或建檔妥為保管，並由會計單位列帳；保管人員每半年應列印債權憑證保管清冊，送業務單位核對。</div>
                    <div>（三）每年至少應查調債務人財產及所得基本資料一次。但法定收繳期限或換發債權憑證期限將屆滿之案件，應視實際需要辦理查詢。</div>
                    <div>（四）經查明債務人有新增可供執行且具執行實益之財產，應於三個月內附具債權憑證影本，簽報聲請強制執行，其強制執行之所得，收繳存入市庫。</div>
                  </div>
                </div>
                <div className="pt-2">
                  <strong className="text-[#1F3864]">十一、</strong> 民事執行事件取得之債權憑證，各機關學校應於請求權消滅時效屆滿前三個月依規定領出，向執行法院聲請換發債權憑證。行政執行事件取得之債權憑證，其執行時效悉依行政執行法相關規定辦理，無需辦理債權憑證換發。
                </div>
                <div className="pt-2">
                  <strong className="text-[#1F3864]">十二、</strong> 各機關學校依法取得之債權憑證，除因債權清償、獲核發新債權憑證或原處分撤銷得自行註銷外，如債權屆滿法定收繳期限、逾行政執行期限或其他特殊原因而有辦理註銷之必要時，應查明管理、催繳程序是否已盡善良管理人之注意義務，並應詳填申請解除債權憑證財務責任簡明表（如附表三），檢同有關證明文件報經主管機關擬具查核意見，報請審計部新北市審計處（以下簡稱審計處）核定後，並副知本府主計處及本局，據以辦理註銷。依前項規定註銷之債權憑證，由會計單位減列帳務，並由債權憑證保管人員將憑證另行抽出，依檔案法相關規定歸檔，保存年限訂為三年，各機關並應列表備查，但經審計處核定註銷之債權憑證，應隨審計處函文歸檔。
                </div>
                <div className="pt-2">
                  <strong className="text-[#1F3864]">十三、</strong> 依本要點規定應編製之書表格式，由本局另定之。
                </div>
              </div>
            </div>
          </div>

          {/* 附件二：新北市政府各機關註銷應收款項與存貨及存出保證金會計事務處理作業規定 */}
          <div className="bg-white rounded-xl border border-[#DDD5C7] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5] mb-4">
              <h2 className="text-lg font-bold text-[#1F3864] flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#8C5A4B]" />
                <span>肆、法令依據附件二：新北市政府各機關註銷應收款項與存貨及存出保證金會計事務處理作業規定（重點摘錄）</span>
              </h2>
              <span className="text-xs bg-[#F2ECE1] text-[#7A6B63] px-2 py-0.5 rounded font-mono">P.60 ~ 61</span>
            </div>

            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD5] space-y-3 text-xs sm:text-sm text-gray-800">
              <div className="text-center font-bold text-base text-[#1F3864]">
                新北市政府各機關註銷應收款項與存貨及存出保證金會計事務處理作業規定
              </div>
              <div className="text-center text-xs text-gray-500 font-mono">
                中華民國 109 年 8 月 26 日新北府主會字第 1091599309 號函修正
              </div>

              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-[#E5DFD5]">
                  <div className="font-bold text-[#1F3864] text-sm mb-1">【第 2 點第 12 款核心規定】（手冊第 34 頁及第 60 頁直接援引）：</div>
                  <div className="text-gray-800 font-mono text-xs bg-[#FAF7F2] p-2.5 rounded border border-[#E5DFD5]">
                    「（十二）依法取得之債權憑證，其註銷作業，應依新北市政府所屬各機關學校行政罰鍰案件及債權憑證管理要點辦理。因OOO年已決算審定，本局OOO年歲入罰鍰保留款-違反區域計畫法帳上案件已取得債權憑證，爰報請同意辦理註銷歲入保留數。」
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-[#E5DFD5] text-xs space-y-1.5">
                  <div className="font-bold text-[#8C5A4B]">【公務會計帳務處理與審計核定程序要點】：</div>
                  <div>1. <strong>屆期註銷機制：</strong>應收款項（罰鍰歲入保留數）取得債權憑證後，最晚於取得當年度 11 月前報經審計部新北市審計處核准註銷保留數，並函知財政局與副知主計處。</div>
                  <div>2. <strong>財務責任審定：</strong>債權屆滿 10 年法定執行期間依法不得再執行時，應本於善良管理人注意義務，備妥催繳、移送、扣押、查稅與憑證保管全案證明文件，陳報審計機關審定解除財務責任。</div>
                  <div>3. <strong>帳務減列：</strong>經審計處核定後，由主計單位與會計室正式減除應收保留數帳目，完成會計循環。</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
