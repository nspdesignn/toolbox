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
  Scale,
  Clock,
  Sparkles,
  Info,
  ChevronRight,
  BookOpen,
  Sliders,
  Flame,
  Search,
  Gavel,
  Zap,
  Users,
  Eye,
  AlertTriangle,
  FileCheck,
  Compass,
  ArrowUpDown
} from 'lucide-react';

interface SpatialPlanningViolationsReportProps {
  onCopy?: (text: string, label: string) => void;
}

export const SpatialPlanningViolationsReport: React.FC<SpatialPlanningViolationsReportProps> = ({
  onCopy
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [copiedTip, setCopiedTip] = useState<string | null>(null);
  const [filterQuery, setFilterQuery] = useState<string>('');

  // 互動裁量檢核計算器狀態
  const [selectedViolationType, setSelectedViolationType] = useState<number>(1);
  const [hasLicense, setHasLicense] = useState<boolean>(false);
  const [isPerpetratorFound, setIsPerpetratorFound] = useState<boolean>(true);
  const [landOwnership, setLandOwnership] = useState<'private' | 'public'>('private');

  const handleLocalCopy = (text: string, label: string) => {
    if (onCopy) {
      onCopy(text, label);
    } else {
      navigator.clipboard?.writeText(text);
      setCopiedTip(`已複製「${label}」！`);
      setTimeout(() => setCopiedTip(null), 2500);
    }
  };

  const tabs = [
    { id: 'all', label: '全文瀏覽（12頁完整呈現）', icon: BookOpen },
    { id: 'purpose-and-framework', label: '緣起與制度定位（第38條三大支柱）', icon: Compass },
    { id: 'penalties-and-actors', label: '行政罰態樣與行為人認定（含3大案例）', icon: Gavel },
    { id: 'regulatory-and-execution', label: '管制處分與行政執行（斷水電／拆除／怠金）', icon: Zap },
    { id: 'investigation-and-discretion', label: '行政調查與裁量原則（職權調查／比例原則）', icon: Scale },
    { id: 'conclusions-and-recommendations', label: '結論與執法建議（六大具體建議）', icon: CheckCircle2 },
    { id: 'appendix-statutory-text', label: '附件一：第38條法條全文（1～7項精解）', icon: FileCheck },
    { id: 'discretion-simulator', label: '實務裁量與處分流程速查工具', icon: Sliders }
  ];

  return (
    <div className="space-y-8 text-[#2B231D]">
      {/* 浮動複製提示 */}
      {copiedTip && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-[#1F3864] text-white text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{copiedTip}</span>
        </div>
      )}

      {/* 報告主橫幅 Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1F3864] via-[#2A4B82] to-[#152747] text-white p-6 sm:p-8 shadow-md">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>國土計畫法第 38 條執法基準專題研究報告 • 115.03 版本</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-snug">
              國土計畫違規查處作業方式 — 國土計畫法第 38 條執行原則
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              依據原始檔案《國土計畫違規查處.pdf》（共 12 頁全文無保留、無自行摘要）完整收錄。解析由傳統分區編定邁入國土功能分區時代之土地管制變革，建立「行政罰＋管制性不利益處分＋行政執行」三合一完整查處架構，防止處分遭訴願或行政訴訟撤銷。
            </p>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
            <a
              href="/assets/aistudio/_________a6775eab.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 shadow-md hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              <span>查看原始 PDF (12頁)</span>
            </a>
            <span className="text-[11px] text-slate-300">
              新制行政罰 • 限期改善 • 強制拆除 • 怠金斷水電
            </span>
          </div>
        </div>
      </div>

      {/* 標籤頁導航列 */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#DDD5C7] scrollbar-thin">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                isActive
                  ? 'bg-[#1F3864] text-white shadow-sm'
                  : 'bg-white hover:bg-[#FAF7F2] text-[#4A3E39] border border-[#DDD5C7]'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-[#8C5A4B]'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 核心內容區 */}
      <div className="space-y-10">
        {/* ======================= 一、報告緣起與目的 & 二、制度定位 ======================= */}
        {(activeTab === 'all' || activeTab === 'purpose-and-framework') && (
          <section className="bg-white rounded-2xl border border-[#DDD5C7] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EEE8DE] gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#1F3864] text-white flex items-center justify-center font-bold text-sm">
                  壹
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#1F3864]">
                    一、報告緣起與目的 & 二、國土計畫法第 38 條之制度定位
                  </h2>
                  <p className="text-xs text-[#6E5D53]">
                    PDF 第 1 ~ 2 頁完整內容 • 管制邏輯翻轉與三合一制裁體系
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleLocalCopy(
                    `一、報告緣起與目的\n《國土計畫法》逐步取代《區域計畫法》，土地管制制度由傳統「使用分區／使用地編定」轉為以「國土功能分區」為核心的新制。此一轉型代表土地使用管制邏輯的重大改變，對第一線執法人員而言，既是挑戰也是契機。\n在新制下，土地使用行為的合法性判斷不再僅依舊有的分區編定，而必須同時考量功能分區原則與使用許可制度。若缺乏一致的操作基準，容易導致裁量不一、程序瑕疵，進而造成處分遭撤銷的風險。\n因此，本報告目的在於：\n• 協助承辦人員正確理解第 38 條(附件一)的規範結構與法律性質。\n• 釐清行政罰、管制性不利益處分與行政執行之間的適用關係。\n• 建立一致、可受檢驗的查處流程與裁量原則。\n• 降低因程序或裁量瑕疵導致處分遭撤銷的風險。\n\n二、國土計畫法第 38 條之制度定位\n第 38 條雖屬罰則條文，但其適用必須連結：\n• 第 23 條：國土功能分區及其分類之土地使用管制。\n• 第 24 條：一定規模以上或性質特殊土地使用之使用許可制度。\n換言之，若未釐清土地使用行為是否符合分區原則，或是否應申請使用許可，即難以正確適用第 38 條各項裁罰規定。\n第 38 條七項規範可分為三大類：\n• 行政罰（第 1–3 項）：針對違反土地使用管制規則之行為，科處罰鍰。\n• 管制性不利益處分（第 4、6 項）：要求行為人限期改善、停止使用或拆除。\n• 行政執行（第 5、6 項）：對不遵從管制性處分者，採取怠金、斷水斷電、代履行等措施。\n此結構顯示，第 38 條並非單純的罰鍰規定，而是結合「行政罰＋行政處分＋行政執行」的完整違規處理機制。`,
                    '一、報告緣起與目的及二、制度定位'
                  )
                }
                className="px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:bg-[#FAF7F2] text-xs font-bold text-[#1F3864] flex items-center gap-1.5 self-start cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>複製本節全文</span>
              </button>
            </div>

            {/* 一、報告緣起與目的 */}
            <div className="space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8C5A4B]"></span>
                一、報告緣起與目的
              </h3>
              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                《國土計畫法》逐步取代《區域計畫法》，土地管制制度由傳統「使用分區／使用地編定」轉為以「國土功能分區」為核心的新制。此一轉型代表土地使用管制邏輯的重大改變，對第一線執法人員而言，既是挑戰也是契機。
              </p>
              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                在新制下，土地使用行為的合法性判斷不再僅依舊有的分區編定，而必須同時考量功能分區原則與使用許可制度。若缺乏一致的操作基準，容易導致裁量不一、程序瑕疵，進而造成處分遭撤銷的風險。
              </p>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
                <p className="text-xs sm:text-sm font-bold text-[#1F3864]">因此，本報告目的在於：</p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#4A3E39]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>協助承辦人員正確理解第 38 條(附件一)的規範結構與法律性質。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>釐清行政罰、管制性不利益處分與行政執行之間的適用關係。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>建立一致、可受檢驗的查處流程與裁量原則。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>降低因程序或裁量瑕疵導致處分遭撤銷的風險。</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 二、國土計畫法第 38 條之制度定位 */}
            <div className="space-y-4 pt-4 border-t border-[#EEE8DE]">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8C5A4B]"></span>
                二、國土計畫法第 38 條之制度定位
              </h3>
              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                第 38 條雖屬罰則條文，但其適用必須連結：
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
                  <div className="font-bold text-xs sm:text-sm text-[#1F3864]">
                    • 第 23 條：土地使用管制
                  </div>
                  <div className="text-xs text-blue-900 mt-1">
                    國土功能分區及其分類之土地使用管制規則。
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-200">
                  <div className="font-bold text-xs sm:text-sm text-[#1F3864]">
                    • 第 24 條：使用許可制度
                  </div>
                  <div className="text-xs text-indigo-900 mt-1">
                    一定規模以上或性質特殊土地使用之使用許可審查規範。
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                換言之，若未釐清土地使用行為是否符合分區原則，或是否應申請使用許可，即難以正確適用第 38 條各項裁罰規定。
              </p>

              <div className="p-4 rounded-xl bg-[#F4F6F9] border border-[#CBD5E1] space-y-3">
                <div className="font-bold text-xs sm:text-sm text-[#1F3864]">
                  第 38 條七項規範可分為三大類：
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                    <div className="text-xs font-bold text-rose-700 flex items-center gap-1.5">
                      <Gavel className="w-4 h-4" />
                      <span>行政罰（第 1–3 項）</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-1.5 leading-normal">
                      針對違反土地使用管制規則之行為，科處罰鍰（100萬~500萬 / 30萬~150萬 / 6萬~30萬）。
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                    <div className="text-xs font-bold text-amber-700 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      <span>管制性不利益處分（第 4、6 項）</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-1.5 leading-normal">
                      要求行為人限期改善、停止使用、拆除地上物恢復原狀或勒令歇業、廢止登記。
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                    <div className="text-xs font-bold text-blue-700 flex items-center gap-1.5">
                      <Zap className="w-4 h-4" />
                      <span>行政執行（第 5、6 項）</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-1.5 leading-normal">
                      對不遵從管制性處分者，採取按次處罰、怠金、停止供水供電、強制拆除、代履行等強制手段。
                    </p>
                  </div>
                </div>
                <p className="text-xs font-bold text-[#1F3864] pt-1">
                  💡 此結構顯示，第 38 條並非單純的罰鍰規定，而是結合「行政罰＋行政處分＋行政執行」的完整違規處理機制。
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ======================= 三、行政罰之違規態樣與裁處原則 ======================= */}
        {(activeTab === 'all' || activeTab === 'penalties-and-actors') && (
          <section className="bg-white rounded-2xl border border-[#DDD5C7] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EEE8DE] gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#8C5A4B] text-white flex items-center justify-center font-bold text-sm">
                  貳
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#1F3864]">
                    三、行政罰之違規態樣與裁處原則
                  </h2>
                  <p className="text-xs text-[#6E5D53]">
                    PDF 第 2 ~ 5 頁完整內容 • 四種違規態樣、行為人認定原則、適用法規與三大典型案例
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleLocalCopy(
                    `三、行政罰之違規態樣與裁處原則\n(一) 第 38 條第 1 至第 3 項規範了四種主要違規態樣\n1. 未符合分區原則，且達一定規模或性質特殊\n⚫ 此類行為通常涉及大面積或高強度的土地使用，對國土環境影響重大。\n⚫ 例如在保育區進行大規模開發，既違反分區原則，又達到「一定規模以上」標準。\n⚫ 因此，法律規定罰鍰範圍為新臺幣 100 萬至 500 萬元，以彰顯嚴重性。\n2. 符合分區原則，但應申請使用許可而未申請\n⚫ 雖符合分區原則，但因規模或性質特殊，仍需透過許可管制。\n⚫ 例如在農業區進行大型倉儲設施建置，雖屬可使用項目，但因規模過大，必須申請許可。\n⚫ 罰鍰範圍為新臺幣 30 萬至 150 萬元，反映其惡性程度低於第一類，但仍需嚴正處理。\n3. 已取得使用許可，但未依核准計畫內容使用\n⚫ 屬於挑戰法定管制計畫的行為，惡性不亞於未申請許可。\n⚫ 例如核准建置農業設施，但實際上改作商業用途。\n⚫ 罰鍰範圍同樣為新臺幣 30 萬至 150 萬元，因其惡性與未申請許可相當。\n4. 違反土地使用管制規則（未達一定規模或非屬性質特殊）\n⚫ 雖屬輕微違規，但仍需透過行政罰維持管制效力。\n⚫ 雖然影響較小，但仍破壞土地管制秩序，因此法律規定罰鍰範圍為新臺幣 6 萬至 30 萬元。\n\n(二) 行為人之認定原則\n在行政罰的適用上，最重要的問題之一是「誰是行為人」。依據行政罰法，行為人必須具備故意或過失，主管機關負有舉證責任。行為人不僅限於施工者，還包括：\n⚫ 積極使用土地或地上物者：如在禁止建築的土地上蓋房屋，或在核准用途之外使用建築物。\n⚫ 協助或放任違法使用之所有權人、管理人：強調的是「消極不作為」或「縱容」。例如土地所有人或管理人於出租之後明知承租人違規，卻沒有阻止或採取措施。\n⚫ 明知違法仍提供使用之人：則更偏向「積極作為」。例如出租人於出租當時明知違法，仍簽約提供土地或建物使用，或管理人主動允許他人傾倒廢棄物。\n此外，若行為人為法人，則董事或有代表權之人若有故意或重大過失，亦須負責。`,
                    '三、行政罰之違規態樣與裁處原則'
                  )
                }
                className="px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:bg-[#FAF7F2] text-xs font-bold text-[#1F3864] flex items-center gap-1.5 self-start cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>複製本節全文</span>
              </button>
            </div>

            {/* (一) 四大主要違規態樣 */}
            <div className="space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864]">
                (一) 第 38 條第 1 至第 3 項規範了四種主要違規態樣
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-600 text-white">
                      第1項 • 最嚴重
                    </span>
                    <span className="text-sm font-black text-red-700">100 萬 – 500 萬元</span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-red-950">
                    1. 未符合分區原則，且達一定規模或性質特殊
                  </h4>
                  <ul className="text-xs text-red-900 space-y-1 pl-3 list-disc">
                    <li>此類行為通常涉及大面積或高強度的土地使用，對國土環境影響重大。</li>
                    <li>例如在保育區進行大規模開發，既違反分區原則，又達到「一定規模以上」標準。</li>
                    <li>因此，法律規定罰鍰範圍為新臺幣 100 萬至 500 萬元，以彰顯嚴重性。</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-600 text-white">
                      第2項第1款 • 惡性中等
                    </span>
                    <span className="text-sm font-black text-amber-800">30 萬 – 150 萬元</span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-amber-950">
                    2. 符合分區原則，但應申請使用許可而未申請
                  </h4>
                  <ul className="text-xs text-amber-900 space-y-1 pl-3 list-disc">
                    <li>雖符合分區原則，但因規模或性質特殊，仍需透過許可管制。</li>
                    <li>例如在農業區進行大型倉儲設施建置，雖屬可使用項目，但因規模過大，必須申請許可。</li>
                    <li>罰鍰範圍為新臺幣 30 萬至 150 萬元，反映其惡性程度低於第一類，但仍需嚴正處理。</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-orange-600 text-white">
                      第2項第2款 • 惡性中等
                    </span>
                    <span className="text-sm font-black text-orange-800">30 萬 – 150 萬元</span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-orange-950">
                    3. 已取得使用許可，但未依核准計畫內容使用
                  </h4>
                  <ul className="text-xs text-orange-900 space-y-1 pl-3 list-disc">
                    <li>屬於挑戰法定管制計畫的行為，惡性不亞於未申請許可。</li>
                    <li>例如核准建置農業設施，但實際上改作商業用途。</li>
                    <li>罰鍰範圍同樣為新臺幣 30 萬至 150 萬元，因其惡性與未申請許可相當。</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-600 text-white">
                      第3項 • 輕微違規
                    </span>
                    <span className="text-sm font-black text-slate-800">6 萬 – 30 萬元</span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-950">
                    4. 違反土地使用管制規則（未達一定規模或非屬性質特殊）
                  </h4>
                  <ul className="text-xs text-slate-700 space-y-1 pl-3 list-disc">
                    <li>雖屬輕微違規，但仍需透過行政罰維持管制效力。</li>
                    <li>雖然影響較小，但仍破壞土地管制秩序，因此法律規定罰鍰範圍為新臺幣 6 萬至 30 萬元。</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* (二) 行為人之認定原則 */}
            <div className="space-y-4 pt-4 border-t border-[#EEE8DE]">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864]">
                (二) 行為人之認定原則
              </h3>
              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                在行政罰的適用上，最重要的問題之一是「誰是行為人」。依據行政罰法，行為人必須具備故意或過失，主管機關負有舉證責任。行為人不僅限於施工者，還包括：
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7]">
                  <div className="font-bold text-xs sm:text-sm text-[#1F3864]">
                    ⚫ 積極使用土地或地上物者
                  </div>
                  <p className="text-xs text-[#5D4E46] mt-1.5 leading-relaxed">
                    如在禁止建築的土地上蓋房屋，或在核准用途之外使用建築物。
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7]">
                  <div className="font-bold text-xs sm:text-sm text-[#1F3864]">
                    ⚫ 協助或放任違法使用之所有人、管理人
                  </div>
                  <p className="text-xs text-[#5D4E46] mt-1.5 leading-relaxed">
                    強調的是「消極不作為」或「縱容」。例如土地所有人或管理人於出租之後明知承租人違規，卻沒有阻止或採取措施。
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7]">
                  <div className="font-bold text-xs sm:text-sm text-[#1F3864]">
                    ⚫ 明知違法仍提供使用之人
                  </div>
                  <p className="text-xs text-[#5D4E46] mt-1.5 leading-relaxed">
                    則更偏向「積極作為」。例如出租人於出租當時明知違法，仍簽約提供土地或建物使用，或管理人主動允許他人傾倒廢棄物。
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-200 text-xs text-blue-950 flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  <strong>法人責任：</strong>若行為人為法人，則董事或有代表權之人若有故意或重大過失，亦須依行政罰法第 15 條負連帶責任。
                </span>
              </div>

              {/* 手冊原始對照表格 */}
              <div className="overflow-x-auto rounded-xl border border-[#DDD5C7]">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#1F3864] text-white">
                      <th className="p-3 font-bold border-r border-[#2A4B82]">違規態樣</th>
                      <th className="p-3 font-bold border-r border-[#2A4B82] w-36">罰鍰範圍</th>
                      <th className="p-3 font-bold">說明</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DDD5C7] bg-white">
                    <tr className="hover:bg-[#FAF7F2]/60">
                      <td className="p-3 font-medium text-[#1F3864] border-r border-[#EEE8DE]">
                        未符合分區原則，且達一定規模或性質特殊
                      </td>
                      <td className="p-3 font-black text-rose-700 border-r border-[#EEE8DE]">
                        100萬 – 500萬元
                      </td>
                      <td className="p-3 text-[#4A3E39]">嚴重違規，影響國土環境重大</td>
                    </tr>
                    <tr className="hover:bg-[#FAF7F2]/60">
                      <td className="p-3 font-medium text-[#1F3864] border-r border-[#EEE8DE]">
                        符合分區原則但未申請使用許可
                      </td>
                      <td className="p-3 font-black text-amber-700 border-r border-[#EEE8DE]">
                        30萬 – 150萬元
                      </td>
                      <td className="p-3 text-[#4A3E39]">惡性中等，規模或性質特殊仍需許可</td>
                    </tr>
                    <tr className="hover:bg-[#FAF7F2]/60">
                      <td className="p-3 font-medium text-[#1F3864] border-r border-[#EEE8DE]">
                        已取得使用許可但未依計畫使用
                      </td>
                      <td className="p-3 font-black text-amber-700 border-r border-[#EEE8DE]">
                        30萬 – 150萬元
                      </td>
                      <td className="p-3 text-[#4A3E39]">惡性中等，挑戰管制計畫</td>
                    </tr>
                    <tr className="hover:bg-[#FAF7F2]/60">
                      <td className="p-3 font-medium text-[#1F3864] border-r border-[#EEE8DE]">
                        輕微違反土地管制規則（未達一定規模或非屬性質特殊）
                      </td>
                      <td className="p-3 font-black text-slate-700 border-r border-[#EEE8DE]">
                        6萬 – 30萬元
                      </td>
                      <td className="p-3 text-[#4A3E39]">輕微違規，仍破壞管制秩序</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* (三) 行政罰適用的法律規範 */}
            <div className="space-y-4 pt-4 border-t border-[#EEE8DE]">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864]">
                (三) 行政罰適用的法律規範
              </h3>
              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                由於第 38 條第 1 至第 3 項的罰鍰屬行政罰，因此必須與《行政罰法》相互呼應：
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] text-xs space-y-1">
                  <strong className="text-[#1F3864]">• 故意或過失要件：</strong>
                  <p className="text-[#4A3E39]">
                    依行政罰法第 7 條，行為人必須具備故意或過失，主管機關須負舉證責任。
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] text-xs space-y-1">
                  <strong className="text-[#1F3864]">• 精神狀態不足者：</strong>
                  <p className="text-[#4A3E39]">
                    依行政罰法第 9 條，若行為人心智不足，得減輕或免除處罰。
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] text-xs space-y-1">
                  <strong className="text-[#1F3864]">• 法人責任：</strong>
                  <p className="text-[#4A3E39]">
                    依行政罰法第 15 條，法人董事或代表人若未盡監督義務，亦須負責。
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] text-xs space-y-1">
                  <strong className="text-[#1F3864]">• 程序保障：</strong>
                  <p className="text-[#4A3E39]">
                    課予行政罰的決定本身也是行政處分，必須依行政程序法第 102 條給予陳述意見機會，必要時舉行聽證。
                  </p>
                </div>
              </div>
            </div>

            {/* (四) 案例說明 */}
            <div className="space-y-4 pt-4 border-t border-[#EEE8DE]">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864]">
                (四) 案例說明（手冊三大實務情境）
              </h3>

              <div className="space-y-3">
                {/* 案例 1 */}
                <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-1 rounded bg-[#1F3864] text-white">
                      案例一：行為人案例（出租土地放任傾倒廢棄物）
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        handleLocalCopy(
                          `行為人案例：某農地所有人將面積達 5 公頃的土地出租給業者傾倒營建廢棄物。此行為不僅違反國土功能分區使用原則，且因面積超過「一定規模以上」的標準，屬於第 38 條第 1 項的重大違規。雖然土地所有人並非直接施工者，但因明知違法仍出租土地，放任違法使用，仍屬「行為人」。主管機關依第 38 條第 1 項裁罰新臺幣 100 萬至 500 萬元，並依行政罰法第 10 條認定其防止義務。(「一定規模以上」判斷依據：國土計畫法施行細則第 14 條及主管機關公告的「一定規模以上或性質特殊土地申請使用許可認定標準」。)`,
                          '行為人案例'
                        )
                      }
                      className="text-xs text-[#8C5A4B] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>複製案例</span>
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                    某農地所有人將面積達 <strong>5 公頃</strong>的土地出租給業者傾倒營建廢棄物。此行為不僅違反國土功能分區使用原則，且因面積超過「一定規模以上」的標準，屬於第 38 條第 1 項的重大違規。雖然土地所有人並非直接施工者，但因明知違法仍出租土地，放任違法使用，仍屬「行為人」。主管機關依第 38 條第 1 項裁罰新臺幣 <strong>100 萬至 500 萬元</strong>，並依行政罰法第 10 條認定其防止義務。
                  </p>
                  <p className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded border border-slate-200">
                    💡 「一定規模以上」判斷依據：國土計畫法施行細則第 14 條及主管機關公告的「一定規模以上或性質特殊土地申請使用許可認定標準」。
                  </p>
                </div>

                {/* 案例 2 */}
                <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-1 rounded bg-[#8C5A4B] text-white">
                      案例二：小規模違規案例（農地角落搭建簡易鐵皮棚）
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        handleLocalCopy(
                          `小規模違規案例：某農地所有人在未申請使用許可的情況下，於農地角落搭建簡易鐵皮棚，用來存放農具與臨時物料。該建築物面積不大，未達「一定規模以上」或「性質特殊」的標準，因此不屬於第 38 條第 1 項或第 2 項的重大違規。但因其使用方式違反了土地使用管制規則，仍屬第 38 條第 3 項所規範的違規態樣，裁罰金額落在新臺幣 6 萬至 30 萬元之間，並要求限期改善或拆除，以恢復土地使用的合法狀態。`,
                          '小規模違規案例'
                        )
                      }
                      className="text-xs text-[#8C5A4B] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>複製案例</span>
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                    某農地所有人在未申請使用許可的情況下，於農地角落搭建簡易鐵皮棚，用來存放農具與臨時物料。該建築物面積不大，未達「一定規模以上」或「性質特殊」的標準，因此不屬於第 38 條第 1 項或第 2 項的重大違規。但因其使用方式違反了土地使用管制規則，仍屬第 38 條第 3 項所規範的違規態樣，裁罰金額落在新臺幣 <strong>6 萬至 30 萬元</strong>之間，並要求限期改善或拆除，以恢復土地使用的合法狀態。
                  </p>
                </div>

                {/* 案例 3 */}
                <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-1 rounded bg-amber-700 text-white">
                      案例三：使用許可逸脫案例（農業設施違規改作商業用途）
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        handleLocalCopy(
                          `使用許可逸脫案例：某業者依法申請並取得使用許可，在農業發展地區建置農業設施，核准用途為農業生產。然而，該業者卻將設施改作商業用途，例如經營餐飲或零售，明顯逸脫核准計畫。此行為破壞土地管制秩序，並可能造成交通負擔或影響周邊居民生活品質，屬第 38 條第 2 項違規，裁罰金額落在 30 萬至 150 萬元，並要求限期改善或恢復原狀。`,
                          '使用許可逸脫案例'
                        )
                      }
                      className="text-xs text-[#8C5A4B] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>複製案例</span>
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                    某業者依法申請並取得使用許可，在農業發展地區建置農業設施，核准用途為農業生產。然而，該業者卻將設施改作商業用途，例如經營餐飲或零售，明顯逸脫核准計畫。此行為破壞土地管制秩序，並可能造成交通負擔或影響周邊居民生活品質，屬第 38 條第 2 項違規，裁罰金額落在 <strong>30 萬至 150 萬元</strong>，並要求限期改善或恢復原狀。
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ======================= 四、管制性處分 & 五、行政執行 ======================= */}
        {(activeTab === 'all' || activeTab === 'regulatory-and-execution') && (
          <section className="bg-white rounded-2xl border border-[#DDD5C7] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EEE8DE] gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-700 text-white flex items-center justify-center font-bold text-sm">
                  參
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#1F3864]">
                    四、管制性不利益處分之適用 & 五、行政執行與間接強制措施
                  </h2>
                  <p className="text-xs text-[#6E5D53]">
                    PDF 第 5 ~ 7 頁完整內容 • 限期改善、怠金、斷水斷電、封閉拆除、代履行及行政執行法第27/28/32條
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleLocalCopy(
                    `四、管制性不利益處分之適用\n第 38 條第 4 項與第 6 項規範管制性不利益處分：\n• 找得到行為人：主管機關得命其限期改善，包括變更使用、停止使用、拆除地上物、恢復原狀；必要時勒令歇業並通知廢止登記。\n• 找不到行為人：\n  o 私有土地：依序命使用人 → 管理人 → 所有人限期改善。\n  o 公有土地：由管理機關提出改善計畫報主管機關核備；涉及公共安全者不得緩辦。\n此類處分屬行政處分，不適用「一行為不二罰」原則，但須遵循行政程序法第 102 條程序保障。\n\n五、行政執行與間接強制措施\n第 38 條第 5 項、第 6 項規範行政執行：\n• 不遵從管制性處分者得依下列處分：\n  怠金：依行政執行法第 28 條規定，主管機關得按次處罰，直到義務人履行為止。怠金的金額必須依違規情節輕重而定，既要有嚇阻效果，又不能過度苛刻。\n  停止供水供電：對於違規使用建築物或設施者，主管機關得採取斷水斷電措施，以迫使其停止使用。此措施雖具強制性，但必須在比例原則下謹慎使用。\n  封閉或強制拆除：若違規建築物持續存在且危害重大，主管機關得採取封閉或拆除措施。此為最嚴厲的手段，必須在其他措施無效時才予以採用。\n  代履行：主管機關得代替義務人執行拆除或改善，並由義務人負擔費用。此措施確保違規狀態能被消除，即使行為人拒絕履行。\n• 行政執行程序要件：\n  o 書面告誡，明確記載履行期限、執行方式及費用估算。\n  o 依行政執行法第 27、28、32 條辦理。`,
                    '四、管制性處分與五、行政執行'
                  )
                }
                className="px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:bg-[#FAF7F2] text-xs font-bold text-[#1F3864] flex items-center gap-1.5 self-start cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>複製本節全文</span>
              </button>
            </div>

            {/* 四、管制性不利益處分之適用 */}
            <div className="space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                四、管制性不利益處分之適用
              </h3>
              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                第 38 條第 4 項與第 6 項規範管制性不利益處分：
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <div className="font-bold text-xs sm:text-sm text-emerald-950 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>找得到行為人</span>
                  </div>
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    主管機關得命其<strong>限期改善</strong>，包括：
                  </p>
                  <ul className="text-xs text-emerald-900 space-y-1 pl-4 list-disc">
                    <li>變更使用</li>
                    <li>停止使用</li>
                    <li>拆除地上物</li>
                    <li>恢復原狀</li>
                    <li>必要時<strong>勒令歇業</strong>並通知該管主管機關廢止其全部或一部登記</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
                  <div className="font-bold text-xs sm:text-sm text-amber-950 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-amber-700" />
                    <span>找不到行為人</span>
                  </div>
                  <div className="space-y-2 text-xs text-amber-900">
                    <div className="p-2.5 bg-white/80 rounded-lg border border-amber-200">
                      <strong>私有土地：</strong>依序命<strong>使用人 → 管理人 → 所有人</strong>限期改善。
                    </div>
                    <div className="p-2.5 bg-white/80 rounded-lg border border-amber-200">
                      <strong>公有土地：</strong>由管理機關提出改善計畫報主管機關核備；涉及公共安全者不得緩辦。
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800">
                ⚖️ <strong>法理性說明：</strong>此類處分屬行政處分，<strong>不適用「一行為不二罰」原則</strong>（與罰鍰得併行），但必須遵循行政程序法第 102 條之程序保障（給予陳述意見機會）。
              </div>
            </div>

            {/* 五、行政執行與間接強制措施 */}
            <div className="space-y-4 pt-4 border-t border-[#EEE8DE]">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                五、行政執行與間接強制措施
              </h3>
              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                第 38 條第 5 項、第 6 項規範行政執行，不遵從管制性處分者得依下列處分：
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
                  <div className="font-bold text-xs sm:text-sm text-[#1F3864] flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs">手段一</span>
                    <span>怠金（按次處罰）</span>
                  </div>
                  <p className="text-xs text-[#5D4E46] leading-relaxed">
                    依行政執行法第 28 條規定，主管機關得按次處罰，直到義務人履行為止。怠金的金額必須依違規情節輕重而定，既要有嚇阻效果，又不能過度苛刻。
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
                  <div className="font-bold text-xs sm:text-sm text-[#1F3864] flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-xs">手段二</span>
                    <span>停止供水供電</span>
                  </div>
                  <p className="text-xs text-[#5D4E46] leading-relaxed">
                    對於違規使用建築物或設施者，主管機關得採取斷水斷電措施，以迫使其停止使用。此措施雖具強制性，但必須在比例原則下謹慎使用。
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
                  <div className="font-bold text-xs sm:text-sm text-[#1F3864] flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 text-xs">手段三</span>
                    <span>封閉或強制拆除</span>
                  </div>
                  <p className="text-xs text-[#5D4E46] leading-relaxed">
                    若違規建築物持續存在且危害重大，主管機關得採取封閉或拆除措施。此為最嚴厲的手段，必須在其他措施無效時才予以採用。
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
                  <div className="font-bold text-xs sm:text-sm text-[#1F3864] flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-xs">手段四</span>
                    <span>代履行（費用由義務人負擔）</span>
                  </div>
                  <p className="text-xs text-[#5D4E46] leading-relaxed">
                    主管機關得代替義務人執行拆除或改善，並由義務人負擔費用。此措施確保違規狀態能被消除，即使行為人拒絕履行。
                  </p>
                </div>
              </div>

              {/* 行政執行程序要件 */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
                <div className="font-bold text-xs sm:text-sm text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  <span>行政執行程序要件（非常重要，避免遭撤銷）</span>
                </div>
                <ul className="text-xs sm:text-sm text-amber-900 space-y-1.5 pl-4 list-disc">
                  <li><strong>書面告誡：</strong>明確記載履行期限、執行方式及費用估算。</li>
                  <li><strong>法定程序：</strong>依行政執行法第 27、28、32 條辦理。</li>
                </ul>
                <p className="text-xs text-amber-950 leading-relaxed pt-1">
                  在行政執行過程中，主管機關必須先行書面告誡，明確記載履行期限、執行方式及費用估算。若未履行，方得採取強制措施。此程序保障不僅是法律要求，也是避免行政處分遭撤銷的必要步驟。
                </p>
              </div>

              {/* 參考法條全文 */}
              <div className="space-y-3 pt-2">
                <div className="font-bold text-xs text-[#1F3864]">參考法條全文：</div>
                
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-1 text-xs">
                  <strong className="text-[#1F3864]">行政執行法第 27 條</strong>
                  <p className="text-[#4A3E39] leading-relaxed">
                    依法令或本於法令之行政處分，負有行為或不行為義務，經於處分書或另以書面限定相當期間履行，逾期仍不履行者，由執行機關依間接強制或直接強制方法執行之。
                  </p>
                  <p className="text-[#4A3E39] leading-relaxed">
                    前項文書，應載明不依限履行時將予強制執行之意旨。
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-1 text-xs">
                  <strong className="text-[#1F3864]">行政執行法第 28 條</strong>
                  <p className="text-[#4A3E39] leading-relaxed">前條所稱之間接強制方法如下：一、代履行。二、怠金。</p>
                  <p className="text-[#4A3E39] leading-relaxed">
                    前條所稱之直接強制方法如下：
                    <br />一、扣留、收取交付、解除占有、處置、使用或限制使用動產、不動產。
                    <br />二、進入、封閉、拆除住宅、建築物或其他處所。
                    <br />三、收繳、註銷證照。
                    <br />四、斷絕營業所必須之自來水、電力或其他能源。
                    <br />五、其他以實力直接實現與履行義務同一內容狀態之方法。
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-1 text-xs">
                  <strong className="text-[#1F3864]">行政執行法第 32 條</strong>
                  <p className="text-[#4A3E39] leading-relaxed">
                    經間接強制不能達成執行目的，或因情況急迫，如不及時執行，顯難達成執行目的時，執行機關得依直接強制方法執行之。
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ======================= 六、行政調查 & 七、裁量基準 ======================= */}
        {(activeTab === 'all' || activeTab === 'investigation-and-discretion') && (
          <section className="bg-white rounded-2xl border border-[#DDD5C7] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EEE8DE] gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-700 text-white flex items-center justify-center font-bold text-sm">
                  肆
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#1F3864]">
                    六、行政調查與程序注意事項 & 七、裁量基準與風險控管原則
                  </h2>
                  <p className="text-xs text-[#6E5D53]">
                    PDF 第 7 ~ 9 頁完整內容 • 職權調查主義、有利不利一併注意、比例原則與最小侵害
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleLocalCopy(
                    `六、行政調查與程序注意事項\n行政調查階段須注意：\n• 職權調查主義：不得僅憑他機關資料即認定行為人。主管機關必須自行調查，避免「應調查而未調查」之瑕疵。\n• 有利不利一併注意：避免只摘錄不利事實，應同時呈現有利於當事人的情況。\n• 陳述意見機會：\n  o 原則於裁罰前依行政程序法第 102 條辦理。\n  o 情節重大者，宜於調查階段即書面通知，完備程序正義。\n在違規查處過程中，行政調查是最關鍵的基礎工作。主管機關必須依據職權調查原則，主動蒐集事實與證據，而不能僅依賴其他機關提供的資料。若僅憑外部資料即認定行為人，將可能構成「應調查而未調查」的瑕疵，進而影響處分的合法性。\n行政調查的核心精神在於「有利不利一併注意」。主管機關在調查時，必須同時呈現對當事人有利與不利的事實，避免僅摘錄不利情節而忽略可能的抗辯理由。例如，在農地違規使用案件中，若土地所有人已經提出改善計畫，主管機關必須在調查報告中予以記載，而不能僅呈現違規事實。\n此外，行政程序法第 39 條規定，主管機關在必要時得通知相關人陳述意見。這意味著，在情節重大或爭議性高的案件中，主管機關應在調查階段即給予當事人表達意見的機會，而不僅限於裁罰前的第 102 條程序。這樣的做法不僅能提升程序正義，也能降低後續訴願或行政訴訟的風險。\n最後，行政調查必須有完整的紀錄。包括訪視、勘驗、查察的過程，均應製作書面紀錄，並保存相關照片、文件或證據。這些紀錄不僅是裁罰的依據，也是日後面對訴訟挑戰的重要防線。\n\n七、裁量基準與風險控管原則\n裁量基準應審酌：\n• 危害程度：行為對環境、公共安全的影響。\n例如，若行為對環境造成嚴重破壞，或對公共安全構成重大威脅，則裁罰金額與管制措施應相對提高，以彰顯法律的嚴肅性。反之，若違規行為僅屬輕微，則應避免過度處罰，以維持比例原則。\n• 侵害範圍與國土類型：農地、保育區、水源保護區或特殊用途區域。\n其土地使用的敏感性與公共利益價值不同。舉例而言，在保育區或水源保護區的違規行為，因涉及生態環境與公共安全，裁量應更為嚴格；而在一般農地的小規模違規，則可採取較為寬緩的處理方式。\n• 不法所得與行為人資力：避免處分過輕或過重。\n若行為人因違規而獲取巨額利益，僅以低額罰鍰處理，將失去嚇阻效果；反之，若行為人資力有限，過高的裁罰可能造成不合理的負擔。因此，裁量必須在公平性與嚇阻性之間取得平衡。\n管制處分與執行措施應符合：\n• 比例原則：處分的強度必須與違規行為的嚴重性相稱，避免過度或不足。\n• 必要性原則：僅在確有必要時才採取管制或強制措施，避免行政資源浪費或對人民權利造成不必要的侵害。\n• 最小侵害原則：在達成管制目的的前提下，選擇對人民權利影響最小的手段，例如先要求限期改善，再考慮斷水斷電或拆除。\n透過上述裁量基準與原則，主管機關能在執法過程中展現合理性與正當性，降低行政訴訟或訴願中被撤銷的風險。換言之，這些原則不僅是法律技術上的要求，更是確保行政處分穩定性與公信力的核心。`,
                    '六、行政調查與七、裁量基準'
                  )
                }
                className="px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:bg-[#FAF7F2] text-xs font-bold text-[#1F3864] flex items-center gap-1.5 self-start cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>複製本節全文</span>
              </button>
            </div>

            {/* 六、行政調查與程序注意事項 */}
            <div className="space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                六、行政調查與程序注意事項
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
                  <div className="font-bold text-xs sm:text-sm text-[#1F3864] flex items-center gap-1.5">
                    <Search className="w-4 h-4 text-blue-700" />
                    <span>職權調查主義</span>
                  </div>
                  <p className="text-xs text-blue-900 leading-relaxed">
                    不得僅憑他機關資料即認定行為人。主管機關必須自行調查，避免「應調查而未調查」之瑕疵。
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <div className="font-bold text-xs sm:text-sm text-emerald-950 flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-emerald-700" />
                    <span>有利不利一併注意</span>
                  </div>
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    避免只摘錄不利事實，應同時呈現有利於當事人的情況（例如已提出改善計畫）。
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-2">
                  <div className="font-bold text-xs sm:text-sm text-purple-950 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-purple-700" />
                    <span>陳述意見機會</span>
                  </div>
                  <p className="text-xs text-purple-900 leading-relaxed">
                    原則於裁罰前依行政程序法第 102 條辦理；情節重大者，宜於調查階段即書面通知（行政程序法第39條）。
                  </p>
                </div>
              </div>

              {/* 手冊詳細說明段落 */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-3 text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                <p>
                  在違規查處過程中，行政調查是最關鍵的基礎工作。主管機關必須依據職權調查原則，主動蒐集事實與證據，而不能僅依賴其他機關提供的資料。若僅憑外部資料即認定行為人，將可能構成「應調查而未調查」的瑕疵，進而影響處分的合法性。
                </p>
                <p>
                  行政調查的核心精神在於「有利不利一併注意」。主管機關在調查時，必須同時呈現對當事人有利與不利的事實，避免僅摘錄不利情節而忽略可能的抗辯理由。例如，在農地違規使用案件中，若土地所有人已經提出改善計畫，主管機關必須在調查報告中予以記載，而不能僅呈現違規事實。
                </p>
                <p>
                  此外，行政程序法第 39 條規定，主管機關在必要時得通知相關人陳述意見。這意味著，在情節重大或爭議性高的案件中，主管機關應在調查階段即給予當事人表達意見的機會，而不僅限於裁罰前的第 102 條程序。這樣的做法不僅能提升程序正義，也能降低後續訴願或行政訴訟的風險。
                </p>
                <p>
                  最後，行政調查必須有完整的紀錄。包括訪視、勘驗、查察的過程，均應製作書面紀錄，並保存相關照片、文件或證據。這些紀錄不僅是裁罰的依據，也是日後面對訴訟挑戰的重要防線。
                </p>
              </div>
            </div>

            {/* 七、裁量基準與風險控管原則 */}
            <div className="space-y-4 pt-4 border-t border-[#EEE8DE]">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                七、裁量基準與風險控管原則
              </h3>

              <div className="space-y-3">
                <div className="font-bold text-xs sm:text-sm text-[#1F3864]">裁量基準應審酌三大要素：</div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
                    <strong className="text-xs sm:text-sm text-[#1F3864]">1. 危害程度</strong>
                    <p className="text-xs text-[#5D4E46] leading-relaxed">
                      行為對環境、公共安全的影響。例如，若行為對環境造成嚴重破壞，或對公共安全構成重大威脅，則裁罰金額與管制措施應相對提高，以彰顯法律的嚴肅性。反之，若違規行為僅屬輕微，則應避免過度處罰，以維持比例原則。
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
                    <strong className="text-xs sm:text-sm text-[#1F3864]">2. 侵害範圍與國土類型</strong>
                    <p className="text-xs text-[#5D4E46] leading-relaxed">
                      農地、保育區、水源保護區或特殊用途區域。其土地使用的敏感性與公共利益價值不同。舉例而言，在保育區或水源保護區的違規行為，因涉及生態環境與公共安全，裁量應更為嚴格；而在一般農地的小規模違規，則可採取較為寬緩的處理方式。
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
                    <strong className="text-xs sm:text-sm text-[#1F3864]">3. 不法所得與行為人資力</strong>
                    <p className="text-xs text-[#5D4E46] leading-relaxed">
                      避免處分過輕或過重。若行為人因違規而獲取巨額利益，僅以低額罰鍰處理，將失去嚇阻效果；反之，若行為人資力有限，過高的裁罰可能造成不合理的負擔。因此，裁量必須在公平性與嚇阻性之間取得平衡。
                    </p>
                  </div>
                </div>
              </div>

              {/* 管制處分與執行措施應符合之憲法原則 */}
              <div className="space-y-3 pt-2">
                <div className="font-bold text-xs sm:text-sm text-[#1F3864]">
                  管制處分與執行措施應符合三大公法原則：
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200">
                    <div className="text-xs font-bold text-amber-900">比例原則（適當性）</div>
                    <p className="text-xs text-amber-800 mt-1 leading-normal">
                      處分的強度必須與違規行為的嚴重性相稱，避免過度或不足。
                    </p>
                  </div>
                  <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200">
                    <div className="text-xs font-bold text-amber-900">必要性原則</div>
                    <p className="text-xs text-amber-800 mt-1 leading-normal">
                      僅在確有必要時才採取管制或強制措施，避免行政資源浪費或對人民權利造成不必要的侵害。
                    </p>
                  </div>
                  <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200">
                    <div className="text-xs font-bold text-amber-900">最小侵害原則</div>
                    <p className="text-xs text-amber-800 mt-1 leading-normal">
                      在達成管制目的的前提下，選擇對人民權利影響最小的手段，例如先要求限期改善，再考慮斷水斷電或拆除。
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                🛡️ <strong>總結效益：</strong>透過上述裁量基準與原則，主管機關能在執法過程中展現合理性與正當性，降低行政訴訟或訴願中被撤銷的風險。換言之，這些原則不僅是法律技術上的要求，更是確保行政處分穩定性與公信力的核心。
              </div>
            </div>
          </section>
        )}

        {/* ======================= 八、結論與建議 ======================= */}
        {(activeTab === 'all' || activeTab === 'conclusions-and-recommendations') && (
          <section className="bg-white rounded-2xl border border-[#DDD5C7] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EEE8DE] gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
                  伍
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#1F3864]">
                    八、結論與建議（含六大具體實務建議）
                  </h2>
                  <p className="text-xs text-[#6E5D53]">
                    PDF 第 9 ~ 11 頁完整內容 • 執法風險、跨機關合作、教育訓練與持續改善
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleLocalCopy(
                    `八、結論與建議\n國土計畫法第 38 條提供完整的違規處理機制，結合了行政罰、管制性不利益處分與行政執行三大面向，形成一套完整的違規查處機制。這樣的制度架構，既有嚇阻功能，也有修復功能，並透過行政執行確保處分落實。然而，制度再完善，若在執行過程中缺乏一致性與透明性，仍可能面臨挑戰。\n\n（一）執法風險與挑戰\n在實務上，承辦人員常面臨以下風險：\n1. 程序瑕疵：若未依行政程序法給予陳述意見機會，或調查過程未完整記錄，處分容易在訴願或行政訴訟中遭撤銷。\n2. 裁量不一致：不同縣市或不同承辦人員對同類案件的裁量標準差異過大，可能造成人民質疑行政公平性。\n3. 跨機關協調不足：涉及公共安全或環境保護的案件，往往需要多機關合作，若協調不佳，執法效果將大打折扣。\n\n（二）跨機關合作的重要性\n土地違規案件往往涉及多面向，例如環境保護、公共安全、建築管理、甚至刑事責任。因此，建議主管機關：\n• 建立跨機關聯合稽查制度，確保資訊共享與執法一致。\n• 在重大案件中，主動邀集環保、警政、消防等單位共同參與，提升執法效能。\n• 建立定期通報與回饋機制，避免案件處理斷層。\n\n（三）教育訓練與能力提升\n承辦人員是制度落實的第一線，若缺乏充分的法律知識與程序意識，容易造成執法瑕疵。建議：\n• 定期舉辦教育訓練，針對《國土計畫法》第 38 條的適用、行政程序法的要求、行政執行法的操作進行案例教學。\n• 建立案例資料庫，讓承辦人員能快速查詢過往裁罰案例，作為裁量參考。\n• 鼓勵承辦人員參與座談會或研討會，累積實務經驗，提升專業判斷能力。\n\n（四）制度檢討與持續改善\n法律制度必須隨著社會與環境的變化而調整。建議主管機關：\n• 定期檢討第 38 條的適用情況，若罰鍰金額不足以嚇阻，應考慮修法提高。\n• 檢討管制性不利益處分的執行效果，若斷水斷電或封閉措施效果有限，應思考其他更有效的手段。\n• 強化行政透明度，公開裁罰基準與案例，提升人民對制度的信任。\n\n（五）整體建議\n綜合以上分析，本報告提出以下具體建議：\n1. 逐案檢核：承辦人員應依本執行原則逐案檢核違規態樣、行為人認定、處分類型與程序合法性。\n2. 標準化流程：建立統一的查處流程，確保各地執法一致。\n3. 文件紀錄強化：完整保存調查紀錄與裁量理由，降低處分遭撤銷風險。\n4. 跨機關合作：建立聯合稽查與通報機制，提升執法效能。\n5. 教育訓練：持續強化承辦人員的法律知識與程序意識。\n6. 制度檢討：定期檢視第 38 條的適用情況，必要時提出修法建議。`,
                    '八、結論與建議'
                  )
                }
                className="px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:bg-[#FAF7F2] text-xs font-bold text-[#1F3864] flex items-center gap-1.5 self-start cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>複製本節全文</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
              國土計畫法第 38 條提供完整的違規處理機制，結合了行政罰、管制性不利益處分與行政執行三大面向，形成一套完整的違規查處機制。這樣的制度架構，既有嚇阻功能，也有修復功能，並透過行政執行確保處分落實。然而，制度再完善，若在執行過程中缺乏一致性與透明性，仍可能面臨挑戰。
            </p>

            {/* 四大維度深度解析 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* （一）執法風險與挑戰 */}
              <div className="p-4 rounded-xl bg-red-50/50 border border-red-200 space-y-2">
                <div className="font-bold text-xs sm:text-sm text-red-950 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-red-700" />
                  <span>（一）執法風險與挑戰</span>
                </div>
                <p className="text-xs text-red-900 leading-normal">
                  在實務上，承辦人員常面臨以下三大風險：
                </p>
                <ol className="text-xs text-red-900 space-y-1.5 pl-4 list-decimal">
                  <li>
                    <strong>程序瑕疵：</strong>若未依行政程序法給予陳述意見機會，或調查過程未完整記錄，處分容易在訴願或行政訴訟中遭撤銷。
                  </li>
                  <li>
                    <strong>裁量不一致：</strong>不同縣市或不同承辦人員對同類案件的裁量標準差異過大，可能造成人民質疑行政公平性。
                  </li>
                  <li>
                    <strong>跨機關協調不足：</strong>涉及公共安全或環境保護的案件，往往需要多機關合作，若協調不佳，執法效果將大打折扣。
                  </li>
                </ol>
              </div>

              {/* （二）跨機關合作的重要性 */}
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 space-y-2">
                <div className="font-bold text-xs sm:text-sm text-blue-950 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-blue-700" />
                  <span>（二）跨機關合作的重要性</span>
                </div>
                <p className="text-xs text-blue-900 leading-normal">
                  土地違規案件往往涉及多面向（環境保護、公共安全、建築管理、刑事責任等），建議：
                </p>
                <ul className="text-xs text-blue-900 space-y-1.5 pl-4 list-disc">
                  <li>建立跨機關聯合稽查制度，確保資訊共享與執法一致。</li>
                  <li>在重大案件中，主動邀集環保、警政、消防等單位共同參與，提升執法效能。</li>
                  <li>建立定期通報與回饋機制，避免案件處理斷層。</li>
                </ul>
              </div>

              {/* （三）教育訓練與能力提升 */}
              <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-200 space-y-2">
                <div className="font-bold text-xs sm:text-sm text-purple-950 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-purple-700" />
                  <span>（三）教育訓練與能力提升</span>
                </div>
                <p className="text-xs text-purple-900 leading-normal">
                  承辦人員是制度落實的第一線，若缺乏充分的法律知識與程序意識，容易造成執法瑕疵。建議：
                </p>
                <ul className="text-xs text-purple-900 space-y-1.5 pl-4 list-disc">
                  <li>定期舉辦教育訓練，針對《國土計畫法》第 38 條的適用、行政程序法的要求、行政執行法的操作進行案例教學。</li>
                  <li>建立案例資料庫，讓承辦人員能快速查詢過往裁罰案例，作為裁量參考。</li>
                  <li>鼓勵承辦人員參與座談會或研討會，累積實務經驗，提升專業判斷能力。</li>
                </ul>
              </div>

              {/* （四）制度檢討與持續改善 */}
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-2">
                <div className="font-bold text-xs sm:text-sm text-emerald-950 flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-emerald-700" />
                  <span>（四）制度檢討與持續改善</span>
                </div>
                <p className="text-xs text-emerald-900 leading-normal">
                  法律制度必須隨著社會與環境的變化而調整。建議主管機關：
                </p>
                <ul className="text-xs text-emerald-900 space-y-1.5 pl-4 list-disc">
                  <li>定期檢討第 38 條的適用情況，若罰鍰金額不足以嚇阻，應考慮修法提高。</li>
                  <li>檢討管制性不利益處分的執行效果，若斷水斷電或封閉措施效果有限，應思考其他更有效的手段。</li>
                  <li>強化行政透明度，公開裁罰基準與案例，提升人民對制度的信任。</li>
                </ul>
              </div>
            </div>

            {/* （五）整體建議：六大具體實務建議卡片 */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#1F3864] to-[#152747] text-white space-y-4">
              <div className="font-black text-sm sm:text-base text-amber-300 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>（五）整體建議 — 具體執行六大指導方針</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200">
                綜合以上分析，本報告提出以下六項具體建議，提供第一線執法人員作業準據：
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 bg-white/10 rounded-xl border border-white/20 backdrop-blur-xs space-y-1">
                  <div className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-[10px] font-black">
                      1
                    </span>
                    <span>逐案檢核</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-200 leading-normal">
                    承辦人員應依本執行原則逐案檢核違規態樣、行為人認定、處分類型與程序合法性。
                  </p>
                </div>

                <div className="p-3.5 bg-white/10 rounded-xl border border-white/20 backdrop-blur-xs space-y-1">
                  <div className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-[10px] font-black">
                      2
                    </span>
                    <span>標準化流程</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-200 leading-normal">
                    建立統一的查處流程，確保各地執法一致，消除不同公務員間的標準差異。
                  </p>
                </div>

                <div className="p-3.5 bg-white/10 rounded-xl border border-white/20 backdrop-blur-xs space-y-1">
                  <div className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-[10px] font-black">
                      3
                    </span>
                    <span>文件紀錄強化</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-200 leading-normal">
                    完整保存調查紀錄與裁量理由（訪視勘驗照片書面），降低處分遭撤銷風險。
                  </p>
                </div>

                <div className="p-3.5 bg-white/10 rounded-xl border border-white/20 backdrop-blur-xs space-y-1">
                  <div className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-[10px] font-black">
                      4
                    </span>
                    <span>跨機關合作</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-200 leading-normal">
                    建立聯合稽查與通報機制（環保、建管、警政），提升整體行政執法效能。
                  </p>
                </div>

                <div className="p-3.5 bg-white/10 rounded-xl border border-white/20 backdrop-blur-xs space-y-1">
                  <div className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-[10px] font-black">
                      5
                    </span>
                    <span>教育訓練</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-200 leading-normal">
                    持續強化承辦人員的法律知識與程序意識，建立案例庫與判決經驗傳承。
                  </p>
                </div>

                <div className="p-3.5 bg-white/10 rounded-xl border border-white/20 backdrop-blur-xs space-y-1">
                  <div className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-[10px] font-black">
                      6
                    </span>
                    <span>制度檢討</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-200 leading-normal">
                    定期檢視第 38 條的適用情況與強制效果，必要時主動提出法規修正建議。
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ======================= 附件一：國土計畫法第 38 條法定條文全文 ======================= */}
        {(activeTab === 'all' || activeTab === 'appendix-statutory-text') && (
          <section className="bg-white rounded-2xl border border-[#DDD5C7] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EEE8DE] gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-rose-700 text-white flex items-center justify-center font-bold text-sm">
                  陸
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#1F3864]">
                    附件一：國土計畫法第 38 條（法定條文完整抄本與 1～7 項逐項解析）
                  </h2>
                  <p className="text-xs text-[#6E5D53]">
                    PDF 第 12 頁附件一全文抄本 • 國土計畫法罰則核心母法條文
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleLocalCopy(
                    `國土計畫法第 38 條\n從事未符合國土功能分區及其分類使用原則之一 定規模以上或性質特殊之土地使用者，由該管直轄市、縣（市）主管機關處行為人新臺幣一百萬元以上五百萬元以下罰鍰。\n有下列情形之一者，由該管直轄市、縣（市）主管機關處行為人新臺幣三十萬元以上一百五十萬元以下罰鍰：\n一、未經使用許可而從事符合國土功能分區及其分類使用原則之一定規模以上或性質特殊之土地使用。\n二、未依許可使用計畫之使用地類別、使用配置、項目、強度進行使用。\n違反第二十三條第二項或第四項之管制使用土地者，由該管直轄市、縣（市）主管機關處行為人新臺幣六萬元以上三十萬元以下罰鍰。\n依前三項規定處罰者，該管直轄市、縣（市）主管機關得限期令其變更使用、停止使用或拆除其地上物恢復原狀；於管制使用土地上經營業務者，必要時得勒令歇業，並通知該管主管機關廢止其全部或一部登記。\n前項情形經限期變更使用、停止使用、拆除地上物恢復原狀或勒令歇業而不遵從者，得按次依第一項至第三項規定處罰，並得依行政執行法規定停止供水、供電、封閉、強制拆除或採取其他恢復原狀之措施，其費用由行為人負擔。\n有第一項、第二項第一款或第三項情形無法發現行為人時，直轄市、縣（市）主管機關應依序命土地或地上物使用人、管理人或所有人限期停止使用或恢復原狀；屆期不履行，直轄市、縣（市）主管機關得依行政執行法規定辦理。\n前項土地或地上物屬公有者，管理人於收受限期恢復原狀之通知後，得於期限屆滿前擬定改善計畫送主管機關核備，不受前項限期恢復原狀規定之限制。但有立即影響公共安全之情事時，應迅即恢復原狀或予以改善。`,
                    '國土計畫法第38條法條全文'
                  )
                }
                className="px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:bg-[#FAF7F2] text-xs font-bold text-[#1F3864] flex items-center gap-1.5 self-start cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>複製法條全文</span>
              </button>
            </div>

            {/* 逐項法條與重點解析 */}
            <div className="space-y-4">
              {/* 第 1 項 */}
              <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-red-700 text-white">
                    第 1 項 • 未符分區原則重大違規
                  </span>
                  <span className="text-xs font-black text-red-800">100 萬 ~ 500 萬元罰鍰</span>
                </div>
                <blockquote className="p-3 bg-white rounded-lg border-l-4 border-red-600 text-xs sm:text-sm text-red-950 font-medium leading-relaxed">
                  「從事未符合國土功能分區及其分類使用原則之一定規模以上或性質特殊之土地使用者，由該管直轄市、縣（市）主管機關處行為人新臺幣一百萬元以上五百萬元以下罰鍰。」
                </blockquote>
                <div className="text-xs text-red-900 space-y-1">
                  <strong>實務剖析：</strong>雙重違法構成要件 — ①違反分區原則＋②達一定規模或性質特殊。屬國土計畫法最嚴厲之罰鍰階層。
                </div>
              </div>

              {/* 第 2 項 */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-amber-700 text-white">
                    第 2 項 • 未經許可或未依許可使用
                  </span>
                  <span className="text-xs font-black text-amber-900">30 萬 ~ 150 萬元罰鍰</span>
                </div>
                <blockquote className="p-3 bg-white rounded-lg border-l-4 border-amber-600 text-xs sm:text-sm text-amber-950 font-medium leading-relaxed space-y-1">
                  <p>「有下列情形之一者，由該管直轄市、縣（市）主管機關處行為人新臺幣三十萬元以上一百五十萬元以下罰鍰：</p>
                  <p className="pl-3">一、未經使用許可而從事符合國土功能分區及其分類使用原則之一定規模以上或性質特殊之土地使用。</p>
                  <p className="pl-3">二、未依許可使用計畫之使用地類別、使用配置、項目、強度進行使用。」</p>
                </blockquote>
                <div className="text-xs text-amber-900 space-y-1">
                  <strong>實務剖析：</strong>第一款針對「雖合於分區原則但未申請使用許可」；第二款針對「已取得許可但改作其他用途或變更強度配置（逸脫許可計畫）」。
                </div>
              </div>

              {/* 第 3 項 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-slate-700 text-white">
                    第 3 項 • 一般違反管制規則（輕微違規）
                  </span>
                  <span className="text-xs font-black text-slate-800">6 萬 ~ 30 萬元罰鍰</span>
                </div>
                <blockquote className="p-3 bg-white rounded-lg border-l-4 border-slate-600 text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">
                  「違反第二十三條第二項或第四項之管制使用土地者，由該管直轄市、縣（市）主管機關處行為人新臺幣六萬元以上三十萬元以下罰鍰。」
                </blockquote>
                <div className="text-xs text-slate-700 space-y-1">
                  <strong>實務剖析：</strong>未達一定規模或非屬性質特殊之小規模違規（如私設簡易資材棚架、鋪設水泥鋪面等一般違規）。
                </div>
              </div>

              {/* 第 4 項 */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-blue-700 text-white">
                    第 4 項 • 管制性不利益處分（恢復原狀／歇業）
                  </span>
                  <span className="text-xs font-black text-blue-900">限期履行義務處分</span>
                </div>
                <blockquote className="p-3 bg-white rounded-lg border-l-4 border-blue-600 text-xs sm:text-sm text-blue-950 font-medium leading-relaxed">
                  「依前三項規定處罰者，該管直轄市、縣（市）主管機關得限期令其變更使用、停止使用或拆除其地上物恢復原狀；於管制使用土地上經營業務者，必要時得勒令歇業，並通知該管主管機關廢止其全部或一部登記。」
                </blockquote>
                <div className="text-xs text-blue-900 space-y-1">
                  <strong>實務剖析：</strong>非屬行政罰鍰，為恢復國土原狀之管制處分，可與第 1~3 項罰鍰同時作成。
                </div>
              </div>

              {/* 第 5 項 */}
              <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-purple-700 text-white">
                    第 5 項 • 不遵從處分之行政執行（按次處罰與強制斷水電拆除）
                  </span>
                  <span className="text-xs font-black text-purple-900">連續罰＋強制手段</span>
                </div>
                <blockquote className="p-3 bg-white rounded-lg border-l-4 border-purple-600 text-xs sm:text-sm text-purple-950 font-medium leading-relaxed">
                  「前項情形經限期變更使用、停止使用、拆除地上物恢復原狀或勒令歇業而不遵從者，得按次依第一項至第三項規定處罰，並得依行政執行法規定停止供水、供電、封閉、強制拆除或採取其他恢復原狀之措施，其費用由行為人負擔。」
                </blockquote>
                <div className="text-xs text-purple-900 space-y-1">
                  <strong>實務剖析：</strong>行政執行的直接強制與間接強制並行；執行費用全數依法令行為人負擔。
                </div>
              </div>

              {/* 第 6 項 */}
              <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-indigo-700 text-white">
                    第 6 項 • 無法發現行為人之遞補命限期改善義務
                  </span>
                  <span className="text-xs font-black text-indigo-900">使用人 → 管理人 → 所有人</span>
                </div>
                <blockquote className="p-3 bg-white rounded-lg border-l-4 border-indigo-600 text-xs sm:text-sm text-indigo-950 font-medium leading-relaxed">
                  「有第一項、第二項第一款或第三項情形無法發現行為人時，直轄市、縣（市）主管機關應依序命土地或地上物使用人、管理人或所有人限期停止使用或恢復原狀；屆期不履行，直轄市、縣（市）主管機關得依行政執行法規定辦理。」
                </blockquote>
                <div className="text-xs text-indigo-900 space-y-1">
                  <strong>實務剖析：</strong>法定順位極為明確：①使用人 → ②管理人 → ③所有人，承辦人員不可直接越級命所有權人限期改善，以避免處分瑕疵。
                </div>
              </div>

              {/* 第 7 項 */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-emerald-700 text-white">
                    第 7 項 • 公有土地之特殊改善計畫機制
                  </span>
                  <span className="text-xs font-black text-emerald-900">改善計畫報核備</span>
                </div>
                <blockquote className="p-3 bg-white rounded-lg border-l-4 border-emerald-600 text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                  「前項土地或地上物屬公有者，管理人於收受限期恢復原狀之通知後，得於期限屆滿前擬定改善計畫送主管機關核備，不受前項限期恢復原狀規定之限制。但有立即影響公共安全之情事時，應迅即恢復原狀或予以改善。」
                </blockquote>
                <div className="text-xs text-emerald-900 space-y-1">
                  <strong>實務剖析：</strong>兼顧公產管理實務之彈性；但若有立即危及公安之情形，不得緩辦，必須立即排除危險。
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ======================= 實務裁量與處分流程速查工具 ======================= */}
        {(activeTab === 'all' || activeTab === 'discretion-simulator') && (
          <section className="bg-white rounded-2xl border border-[#DDD5C7] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EEE8DE] gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                  🎛️
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#1F3864]">
                    實務裁量與處分流程速查工具（第 38 條情境模擬）
                  </h2>
                  <p className="text-xs text-[#6E5D53]">
                    第一線承辦人員快速判斷適用條項、罰鍰區間、管制處分與行政執行程序
                  </p>
                </div>
              </div>
            </div>

            {/* 互動設定選項 */}
            <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 違規態樣選取 */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-[#1F3864] flex items-center gap-1.5">
                    <Gavel className="w-4 h-4 text-[#8C5A4B]" />
                    <span>1. 違規使用行為類型</span>
                  </label>
                  <select
                    value={selectedViolationType}
                    onChange={(e) => setSelectedViolationType(Number(e.target.value))}
                    className="w-full p-2.5 bg-white rounded-lg border border-[#DDD5C7] text-xs sm:text-sm text-[#3A2F2A] font-medium focus:ring-2 focus:ring-[#1F3864]"
                  >
                    <option value={1}>
                      態樣一：未符合分區原則，且達一定規模或性質特殊（第38條第1項）
                    </option>
                    <option value={2}>
                      態樣二：符合分區原則，但應申請使用許可而未申請（第38條第2項第1款）
                    </option>
                    <option value={3}>
                      態樣三：已取得使用許可，但未依核准計畫內容使用（第38條第2項第2款）
                    </option>
                    <option value={4}>
                      態樣四：輕微違反土地使用管制規則（未達規模非特殊）（第38條第3項）
                    </option>
                  </select>
                </div>

                {/* 是否找得到行為人 */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-[#1F3864] flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#8C5A4B]" />
                    <span>2. 是否找得到行為人（自然人/施工人/縱容人）</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsPerpetratorFound(true)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isPerpetratorFound
                          ? 'bg-[#1F3864] text-white border-[#1F3864]'
                          : 'bg-white text-[#4A3E39] border-[#DDD5C7]'
                      }`}
                    >
                      ✓ 找得到行為人（可舉證故意或過失）
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsPerpetratorFound(false)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        !isPerpetratorFound
                          ? 'bg-rose-700 text-white border-rose-700'
                          : 'bg-white text-[#4A3E39] border-[#DDD5C7]'
                      }`}
                    >
                      ✕ 找不到行為人（適用第6項）
                    </button>
                  </div>
                </div>

                {/* 土地權屬（當找不到行為人時） */}
                {!isPerpetratorFound && (
                  <div className="space-y-2 md:col-span-2 p-3 bg-white rounded-lg border border-amber-200">
                    <label className="text-xs sm:text-sm font-bold text-[#1F3864] flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-amber-700" />
                      <span>3. 土地權屬性質（適用第 6 項 vs 第 7 項）</span>
                    </label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-1.5 text-xs font-bold text-[#4A3E39] cursor-pointer">
                        <input
                          type="radio"
                          name="landOwnership"
                          checked={landOwnership === 'private'}
                          onChange={() => setLandOwnership('private')}
                          className="accent-[#1F3864]"
                        />
                        <span>私有土地（依序命使用人 → 管理人 → 所有人限期改善）</span>
                      </label>
                      <label className="flex items-center gap-1.5 text-xs font-bold text-[#4A3E39] cursor-pointer">
                        <input
                          type="radio"
                          name="landOwnership"
                          checked={landOwnership === 'public'}
                          onChange={() => setLandOwnership('public')}
                          className="accent-[#1F3864]"
                        />
                        <span>公有土地（管理人得擬定改善計畫報核備；有公安立即危害不得緩辦）</span>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 速查試算結果呈現 */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <span className="text-xs font-black text-amber-400 flex items-center gap-2">
                  <FileCheck className="w-4 h-4" />
                  <span>第一線處分審核結果建議</span>
                </span>
                <span className="text-[11px] text-slate-400">系統依本手冊準則即時計算</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 罰鍰結果 */}
                <div className="p-4 bg-white/10 rounded-xl border border-white/10 space-y-1.5">
                  <span className="text-[11px] text-slate-300 font-bold">法定行政罰鍰階層</span>
                  {isPerpetratorFound ? (
                    <div className="text-xl font-black text-amber-300">
                      {selectedViolationType === 1
                        ? '100 萬 ~ 500 萬元'
                        : selectedViolationType === 2
                        ? '30 萬 ~ 150 萬元'
                        : selectedViolationType === 3
                        ? '30 萬 ~ 150 萬元'
                        : '6 萬 ~ 30 萬元'}
                    </div>
                  ) : (
                    <div className="text-sm font-bold text-slate-400">
                      不科處罰鍰（先命限期改善）
                    </div>
                  )}
                  <p className="text-[11px] text-slate-300">
                    {isPerpetratorFound
                      ? selectedViolationType === 1
                        ? '依第 38 條第 1 項裁處（重大違規）'
                        : selectedViolationType === 2
                        ? '依第 38 條第 2 項第 1 款裁處'
                        : selectedViolationType === 3
                        ? '依第 38 條第 2 項第 2 款裁處'
                        : '依第 38 條第 3 項裁處（輕微違規）'
                      : '無法發現行為人時，無法適用行政罰法科處罰鍰'}
                  </p>
                </div>

                {/* 管制處分對象 */}
                <div className="p-4 bg-white/10 rounded-xl border border-white/10 space-y-1.5">
                  <span className="text-[11px] text-slate-300 font-bold">管制性處分命改善對象</span>
                  <div className="text-sm font-black text-emerald-300">
                    {isPerpetratorFound
                      ? '行為人（施工人/承租人/縱容人）'
                      : landOwnership === 'private'
                      ? '依序：使用人 → 管理人 → 所有人'
                      : '公有土地管理機關（得擬改善計畫）'}
                  </div>
                  <p className="text-[11px] text-slate-300">
                    {isPerpetratorFound
                      ? '第 4 項：命限期變更使用、停止使用或拆除恢復原狀'
                      : landOwnership === 'private'
                      ? '第 6 項：法定嚴格順序，切勿越級跳過使用人逕罰地主'
                      : '第 7 項：得送改善計畫核備，但危害公共安全應立即排除'}
                  </p>
                </div>

                {/* 後續強制執行手段 */}
                <div className="p-4 bg-white/10 rounded-xl border border-white/10 space-y-1.5">
                  <span className="text-[11px] text-slate-300 font-bold">屆期不遵從之後續強制手段</span>
                  <div className="text-sm font-black text-rose-300">
                    按次處罰 • 怠金 • 斷水電 • 強拆
                  </div>
                  <p className="text-[11px] text-slate-300">
                    依第 5 項按次處罰；並依行政執行法第27/28/32條書面告誡後強制執行
                  </p>
                </div>
              </div>

              {/* 實務檢核清單 */}
              <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs space-y-2">
                <span className="font-bold text-amber-200">承辦人發函前合憲合法性 Checklist：</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span>已自行職權調查，非僅憑他機關通報資料</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span>已給予行政程序法第 102 條陳述意見機會</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span>符合比例原則，先命限期改善再採斷水斷電拆除</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span>執行前已完成書面告誡（明確期限與費用估算）</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
