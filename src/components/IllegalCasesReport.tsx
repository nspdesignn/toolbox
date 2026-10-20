import React, { useState } from 'react';
import {
  FileText,
  Copy,
  Table,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Building2,
  TreePine,
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
  Compass,
  FileSpreadsheet,
  Workflow,
  AlertTriangle,
  User,
  Hammer,
  BadgeAlert,
  Home,
  CheckSquare
} from 'lucide-react';

interface IllegalCasesReportProps {
  onCopy?: (text: string, label: string) => void;
}

export const IllegalCasesReport: React.FC<IllegalCasesReportProps> = ({ onCopy }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

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
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#8C5A4B] text-white text-xs font-bold mb-2">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>違規查處實務 · 專題報告主題 7</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#1F3864] tracking-tight">
              非都市土地違規使用案件處理流程及違規案件經驗分享
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#7D7065] mt-1.5">
              <span className="flex items-center gap-1 font-semibold text-[#1F3864]">
                <User className="w-3.5 h-3.5 text-[#8C5A4B]" />
                <span>作者：卓素玉</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <FileCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>依《違規案件.pdf》全文 16 頁 100% 忠實完整收錄（含附件 1 作業流程圖）</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/assets/aistudio/_____a644dcbe.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-[#1F3864] hover:bg-[#152747] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>開新視窗瀏覽原始 PDF</span>
            </a>
          </div>
        </div>

        {/* 快速導覽目錄 */}
        <div className="bg-white/80 p-3.5 rounded-xl border border-[#DDD5C7]">
          <div className="text-xs font-bold text-[#8C5A4B] mb-2 flex items-center gap-1.5">
            <FileSpreadsheet className="w-4 h-4" />
            <span>章節目錄快速導覽</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
            <a
              href="#illegal-sec-1"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                一
              </span>
              <span>前言與管制背景</span>
            </a>
            <a
              href="#illegal-sec-2"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                二
              </span>
              <span>非都市土地使用管制法令依據</span>
            </a>
            <a
              href="#illegal-sec-3"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                三
              </span>
              <span>案件處理流程與裁罰基準</span>
            </a>
            <a
              href="#illegal-sec-4-1"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#8C5A4B]/10 flex items-center justify-center font-bold text-[10px] text-[#8C5A4B]">
                4-1
              </span>
              <span>案例 1：建築物使照不符爭議</span>
            </a>
            <a
              href="#illegal-sec-4-2"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#8C5A4B]/10 flex items-center justify-center font-bold text-[10px] text-[#8C5A4B]">
                4-2
              </span>
              <span>案例 2：林業用地裁處權時效</span>
            </a>
            <a
              href="#illegal-sec-4-3"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#8C5A4B]/10 flex items-center justify-center font-bold text-[10px] text-[#8C5A4B]">
                4-3
              </span>
              <span>案例 3：農舍違規擴建分工</span>
            </a>
            <a
              href="#illegal-sec-5"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                五
              </span>
              <span>綜合心得與制度建議</span>
            </a>
            <a
              href="#illegal-sec-att1"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium col-span-1 sm:col-span-2"
            >
              <span className="w-5 h-5 rounded-full bg-emerald-600/10 flex items-center justify-center font-bold text-[10px] text-emerald-800">
                附
              </span>
              <span>附件 1：查處標準作業流程圖（SOP 全解）</span>
            </a>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 一、前言 */}
      {/* ===================================================================== */}
      <section id="illegal-sec-1" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              一
            </span>
            <span>前言</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-1',
                `一、前言
非都市土地係指都市土地以外之土地，依區域計畫制度實施土地使用管制。為維護土地合理利用及環境資源永續發展，政府透過《區域計畫法》及《非都市土地使用管制規則》等相關法令，對各使用分區及使用地類別訂定容許使用項目與管理規範。
本市自民國 70 年 2 月 15 日公告實施非都市土地使用管制以來，即持續辦理違規查報與取締工作，以維護土地使用秩序。惟近年隨著產業型態轉變及休閒活動興起，部分土地所有權人或使用人未依規定申請，即逕自變更土地使用方式，導致非都市土地違規使用樣態日益多元。
由於此類案件常同時涉及土地使用管制、建築管理及各目的事業主管機關之業務權責，案件處理過程需跨機關協調，程序相對複雜。爰整理本市辦理非都市土地違規使用案件之處理流程及實務案例，說明案件查處作業程序、法規適用原則及跨機關分工模式，作為業務經驗分享及後續制度精進之參考。`,
                '前言'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-1' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-3 text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
          <p>
            非都市土地係指都市土地以外之土地，依區域計畫制度實施土地使用管制。為維護土地合理利用及環境資源永續發展，政府透過《區域計畫法》及《非都市土地使用管制規則》等相關法令，對各使用分區及使用地類別訂定容許使用項目與管理規範。
          </p>
          <p>
            本市自<strong className="text-[#1F3864]">民國 70 年 2 月 15 日</strong>
            公告實施非都市土地使用管制以來，即持續辦理違規查報與取締工作，以維護土地使用秩序。惟近年隨著產業型態轉變及休閒活動興起，部分土地所有權人或使用人未依規定申請，即逕自變更土地使用方式，導致非都市土地違規使用樣態日益多元。
          </p>
          <p>
            由於此類案件常同時涉及土地使用管制、建築管理及各目的事業主管機關之業務權責，案件處理過程需跨機關協調，程序相對複雜。爰整理本市辦理非都市土地違規使用案件之處理流程及實務案例，說明案件查處作業程序、法規適用原則及跨機關分工模式，作為業務經驗分享及後續制度精進之參考。
          </p>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 二、非都市土地使用管制法令依據 */}
      {/* ===================================================================== */}
      <section id="illegal-sec-2" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              二
            </span>
            <span>非都市土地使用管制法令依據</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-2',
                `二、非都市土地使用管制法令依據
非都市土地使用管制主要依據下列法規辦理：
（一）區域計畫法：為非都市土地使用管制之主要法源。依該法第 21 條規定，土地應依其使用分區及使用地類別使用；違反使用管制規定者，主管機關得依第 22 條裁處罰鍰並命限期恢復原狀或停止使用。
（二）非都市土地使用管制規則：內政部依區域計畫法訂定，明定各使用地類別容許使用項目、申請程序及使用限制。
（三）行政程序法與行政罰法：案件處理過程涉及陳述意見、裁罰程序及行政救濟等事項，應依相關規定辦理。
（四）各目的事業主管機關法規：部分土地使用行為同時涉及農業、觀光、工業或廢棄物處理等產業管理事項，須由各該主管機關依其主管法規認定。
（五）新北市政府違規案件權責劃分規定：依本府「各機關處理一行為違反數行政法規定案件權責劃分及作業程序」，違規案件涉及多法規時，適用順序為：行業管理 → 行為管理 → 物之管理並由順序在先之主管機關主政辦理。`,
                '法令依據'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-2' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-1.5 shadow-2xs">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
              <span className="text-[#8C5A4B]">（一）</span>
              <span>區域計畫法</span>
            </h4>
            <p className="text-[#4A3E39] leading-relaxed">
              為非都市土地使用管制之主要法源。依該法第 21 條規定，土地應依其使用分區及使用地類別使用；違反使用管制規定者，主管機關得依第 22 條裁處罰鍰並命限期恢復原狀或停止使用。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-1.5 shadow-2xs">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
              <span className="text-[#8C5A4B]">（二）</span>
              <span>非都市土地使用管制規則</span>
            </h4>
            <p className="text-[#4A3E39] leading-relaxed">
              內政部依區域計畫法訂定，明定各使用地類別容許使用項目、申請程序及使用限制。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-1.5 shadow-2xs">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
              <span className="text-[#8C5A4B]">（三）</span>
              <span>行政程序法與行政罰法</span>
            </h4>
            <p className="text-[#4A3E39] leading-relaxed">
              案件處理過程涉及陳述意見、裁罰程序及行政救濟等事項，應依相關規定辦理。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-1.5 shadow-2xs">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
              <span className="text-[#8C5A4B]">（四）</span>
              <span>各目的事業主管機關法規</span>
            </h4>
            <p className="text-[#4A3E39] leading-relaxed">
              部分土地使用行為同時涉及農業、觀光、工業或廢棄物處理等產業管理事項，須由各該主管機關依其主管法規認定。
            </p>
          </div>

          <div className="md:col-span-2 p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
              <span className="text-[#8C5A4B]">（五）</span>
              <span>新北市政府違規案件權責劃分規定</span>
            </h4>
            <p className="text-[#4A3E39] leading-relaxed">
              依本府「各機關處理一行為違反數行政法規定案件權責劃分及作業程序」，違規案件涉及多法規時，適用順序為：
            </p>
            <div className="p-3 rounded-lg bg-white border border-amber-300 font-bold text-center text-[#1F3864] flex items-center justify-center gap-2 text-xs sm:text-sm">
              <span className="px-3 py-1 rounded bg-blue-100 text-blue-900">行業管理</span>
              <ArrowRight className="w-4 h-4 text-amber-700" />
              <span className="px-3 py-1 rounded bg-amber-100 text-amber-900">行為管理</span>
              <ArrowRight className="w-4 h-4 text-amber-700" />
              <span className="px-3 py-1 rounded bg-emerald-100 text-emerald-900">物之管理</span>
            </div>
            <p className="text-xs text-amber-800 text-center font-medium">
              並由順序在先之主管機關主政辦理。
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 三、非都市土地違規使用案件處理流程 */}
      {/* ===================================================================== */}
      <section id="illegal-sec-3" className="space-y-5 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              三
            </span>
            <span>非都市土地違規使用案件處理流程（流程圖詳附件 1）</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-3',
                `三、非都市土地違規使用案件處理流程
本市辦理非都市土地違規使用案件之處理程序，係依「受理案件、現場查報、違規認定、裁罰處分、行政執行、限期改善及後續列管」等階段辦理：
（一）案件受理：確認違規發生時間、適用法規與主政機關。
（二）現場查報：函請區公所協助查報，必要時由地政局召集使用地主管、目的事業主管、地政事務所指界、區公所共同會勘並製作紀錄簽名確認。
（三）違規認定：認定違規者，依行政程序法通知行為人（文到7日內）陳述意見；若會勘已簽名確認事實，依行政罰法第42條第6款得逕行裁處。
（四）裁罰處分：依區域計畫法第21條裁處新臺幣6萬至30萬元罰鍰並命限期（文到30日內）停止使用或恢復原狀。處罰行為人為原則，查無行為人處罰應負責人。處分送達次日起30日內得提訴願。
新北市裁罰基準表：2,000平方公尺以下6萬、2001-3000九萬、3001-4000十二萬、4001-5000十五萬、5001-6000十八萬、6001-7000二十一萬、7001-8000二十四萬、8001-9000二十七萬、9001以上三十萬。
（五）行政執行：文到30日繳納，未繳先行催繳（文到7日內），仍未繳移送行政執行署強制執行。
（六）限期改善：命文到1個月內恢復，未改善者：建物移送拆除大隊、移請認定優先拆除、移請輔導合法、移送地檢署偵辦。
（七）結案列管：每3個月定期複勘，按月彙整報部。截至114年12月底新北市列管未解列1,498件；114年度解除列管37件（恢復合法使用12件佔32%、申請合法化25件佔68%）。`,
                '案件處理流程'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-3' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
          本市辦理非都市土地違規使用案件之處理程序，係依
          <strong className="text-[#1F3864]">「受理案件、現場查報、違規認定、裁罰處分、行政執行、限期改善及後續列管」</strong>
          等階段辦理，各階段均須依相關法規及權責分工機制執行，以確保違規案件得依法查處並落實後續追蹤管理。
        </p>

        {/* （一）案件受理 */}
        <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2">
          <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
            <span className="text-[#8C5A4B]">（一）</span>
            <span>案件受理</span>
          </h4>
          <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-[#4A3E39]">
            <li>
              違規案件來源主要包括民眾檢舉、其他機關移送或主管機關主動查報。主管機關受理案件後，首先須確認違規行為發生時間及適用法規，以判斷應適用之裁罰規定。
            </li>
            <li>
              同時須確認案件主政機關，如案件涉及其他行業管理事項，則須依權責分工原則移請相關主管機關辦理。
            </li>
          </ol>
        </div>

        {/* （二）現場查報 */}
        <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2">
          <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
            <span className="text-[#8C5A4B]">（二）</span>
            <span>現場查報</span>
          </h4>
          <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-[#4A3E39]">
            <li>
              確認由地政局主政後，得函請轄區區公所協助辦理查報作業，填具違規使用案件查報表，並檢附現場照片等相關資料。
            </li>
            <li>
              必要時，得由地政局召集相關單位辦理現場會勘，與會單位通常包括：
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 pl-4">
                <span className="flex items-center gap-1 text-slate-700">✓ 使用地主管機關（如農牧用地由農業局等）</span>
                <span className="flex items-center gap-1 text-slate-700">✓ 目的事業主管機關（如資源回收由環保局、寺廟由民政局等）</span>
                <span className="flex items-center gap-1 text-slate-700">✓ 地政事務所（協助土地指界）</span>
                <span className="flex items-center gap-1 text-slate-700">✓ 轄區區公所</span>
              </div>
            </li>
            <li>
              會勘時應詳實記錄土地地號、違規事實、行為人資料及各機關意見，並製作會勘紀錄。另於會勘時確認行為人身分，並請其於現場會勘紀錄簽名確認。
            </li>
          </ol>
        </div>

        {/* （三）違規認定 */}
        <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2">
          <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
            <span className="text-[#8C5A4B]">（三）</span>
            <span>違規認定</span>
          </h4>
          <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-[#4A3E39]">
            <li>經現場會勘後，應判斷土地使用行為是否違反非都市土地使用管制規定。</li>
            <li>
              如認定涉及違規，應依行政程序法規定通知行為人(文到 7 日內)陳述意見或提出合法證明文件；
              <strong className="text-emerald-900 block pl-4 pt-0.5">
                如當事人於會勘紀錄已簽名確認違規事實，得依行政罰法第 42 條第 6 款「裁處所根據之事實，客觀上明白足以確認」據以逕行裁處，免再通知陳述意見。
              </strong>
            </li>
            <li>若陳述意見無理由或逾期未提出說明，即可進入裁罰程序。</li>
          </ol>
        </div>

        {/* （四）裁罰處分與裁罰基準表 */}
        <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-3">
          <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
            <span className="text-[#8C5A4B]">（四）</span>
            <span>裁罰處分及新北市裁罰基準</span>
          </h4>
          <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-[#4A3E39]">
            <li>經認定違反土地使用管制規定者，主管機關得依區域計畫法規定裁處罰鍰，並命其限期(文到 30 日內)停止使用或恢復原使用目的。</li>
            <li>
              <strong>處罰行為人為原則</strong>。但查無行為人者，主管機關得以土地所有權人、地上物所有人、承租人、使用人或管理人等應負責之人為處罰對象。
            </li>
            <li>
              依《區域計畫法》第 21 條規定，違反土地使用管制規定者，處新臺幣 6 萬元以上 30 萬元以下罰鍰，並得命其停止使用或限期恢復原狀。違規面積在 2,000 平方公尺以下者處 6 萬元，其後依級距遞增，最高 30 萬元。
            </li>
          </ol>

          {/* 新北市違反非都市土地使用管制裁罰基準表 */}
          <div className="space-y-1.5 pt-2">
            <span className="text-xs font-bold text-[#8C5A4B]">
              ● 新北市違反非都市土地使用管制裁罰基準
            </span>
            <div className="overflow-x-auto rounded-lg border border-[#DDD5C7]">
              <table className="w-full text-xs text-center border-collapse">
                <thead className="bg-[#1F3864] text-white">
                  <tr>
                    <th className="p-2 border border-[#DDD5C7]">違規面積（平方公尺）</th>
                    <th className="p-2 border border-[#DDD5C7]">罰鍰金額（新臺幣：萬元）</th>
                    <th className="p-2 border border-[#DDD5C7] text-left">備註說明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DDD5C7] text-[#4A3E39]">
                  <tr>
                    <td className="p-2 border border-[#DDD5C7]">二千以下</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-blue-900">六</td>
                    <td className="p-2 border border-[#DDD5C7] text-left text-gray-500">基本法定起裁額</td>
                  </tr>
                  <tr className="bg-[#FAF7F2]">
                    <td className="p-2 border border-[#DDD5C7]">二千零一至三千</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-blue-900">九</td>
                    <td className="p-2 border border-[#DDD5C7] text-left text-gray-500">每增一千平方公尺加三萬</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#DDD5C7]">三千零一至四千</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-blue-900">十二</td>
                    <td className="p-2 border border-[#DDD5C7] text-left text-gray-500"></td>
                  </tr>
                  <tr className="bg-[#FAF7F2]">
                    <td className="p-2 border border-[#DDD5C7]">四千零一至五千</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-blue-900">十五</td>
                    <td className="p-2 border border-[#DDD5C7] text-left text-gray-500"></td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#DDD5C7]">五千零一至六千</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-blue-900">十八</td>
                    <td className="p-2 border border-[#DDD5C7] text-left text-gray-500"></td>
                  </tr>
                  <tr className="bg-[#FAF7F2]">
                    <td className="p-2 border border-[#DDD5C7]">六千零一至七千</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-blue-900">二十一</td>
                    <td className="p-2 border border-[#DDD5C7] text-left text-gray-500"></td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#DDD5C7]">七千零一至八千</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-blue-900">二十四</td>
                    <td className="p-2 border border-[#DDD5C7] text-left text-gray-500"></td>
                  </tr>
                  <tr className="bg-[#FAF7F2]">
                    <td className="p-2 border border-[#DDD5C7]">八千零一至九千</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-blue-900">二十七</td>
                    <td className="p-2 border border-[#DDD5C7] text-left text-gray-500"></td>
                  </tr>
                  <tr className="bg-amber-50/50">
                    <td className="p-2 border border-[#DDD5C7] font-bold text-[#1F3864]">九千零一以上</td>
                    <td className="p-2 border border-[#DDD5C7] font-black text-rose-800 text-sm">三十</td>
                    <td className="p-2 border border-[#DDD5C7] text-left text-rose-800 font-semibold">法定最高裁處額</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-[#7D7065] pt-1">
            4. 處分書送達後，受處分人如不服處分內容，得依法提起(次日起 30 日內)訴願。
          </p>
        </div>

        {/* （五）行政執行 */}
        <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2">
          <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
            <span className="text-[#8C5A4B]">（五）</span>
            <span>行政執行</span>
          </h4>
          <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-[#4A3E39]">
            <li>
              受處分人應於期限內(文到 30 日)繳納罰鍰。若未於期限內繳納，主管機關將先行催繳(文到 7 日內繳納)，並可依規定查詢其財產資料。
            </li>
            <li>如經催繳仍未繳納者，得移送法務部行政執行署強制執行。</li>
          </ol>
        </div>

        {/* （六）限期改善 */}
        <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2">
          <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
            <span className="text-[#8C5A4B]">（六）</span>
            <span>限期改善</span>
          </h4>
          <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-[#4A3E39]">
            <li>
              除裁罰外，主管機關亦會命違規行為人於期限內(文到 1 個月內)恢復原使用目的，例如拆除建物、停止營業或清除鋪面等。
            </li>
            <li>
              期限屆滿後，由區公所辦理複勘並回報主管機關。若違規情形仍未改善，則可能採取以下措施：
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 pl-4 text-xs sm:text-sm">
                <span className="flex items-center gap-1 text-slate-700">✓ 建物移送違章建築拆除大隊</span>
                <span className="flex items-center gap-1 text-slate-700">✓ 移請使用地主管機關(如農業局)依所訂優先拆除標準認定現況有無優先拆除必要</span>
                <span className="flex items-center gap-1 text-slate-700">✓ 移請目的事業主管機關(如民政局、環保局等)輔導合法列管並認定現況有無優先拆除必要</span>
                <span className="flex items-center gap-1 text-rose-800 font-semibold">✓ 移送地檢署偵辦</span>
              </div>
            </li>
          </ol>
        </div>

        {/* （七）結案列管與統計分析 */}
        <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-3">
          <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
            <span className="text-[#8C5A4B]">（七）</span>
            <span>結案列管與統計分析</span>
          </h4>
          <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-[#4A3E39]">
            <li>案件處理完成後，應彙整相關案件資料並辦理結案作業。</li>
            <li>請各區公所就列管案件每 3 個月定期辦理複勘，如發現新增違規情形，應即報送本府續行辦理。</li>
            <li>按月彙整製作違規案件統計報表，並報送中央主管機關備查。</li>
            <li>
              截至 114 年 12 月底，經內政部列管尚未解列之非都市土地違規使用案件，新北市計有 <strong>1,498 件</strong>。另 114 年度經辦理解除列管案件，其中恢復合法使用 12 件、申請合法化 25 件，合計 <strong>37 件</strong>完成解除列管。
            </li>
          </ol>

          <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
            <span className="text-xs font-bold text-[#1F3864]">● 114 年度解除列管案件分析</span>
            <div className="overflow-x-auto rounded-lg border border-[#DDD5C7] bg-white">
              <table className="w-full text-xs text-center border-collapse">
                <thead className="bg-[#1F3864] text-white">
                  <tr>
                    <th className="p-2 border border-[#DDD5C7]">類型</th>
                    <th className="p-2 border border-[#DDD5C7]">件數</th>
                    <th className="p-2 border border-[#DDD5C7]">比例</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DDD5C7] text-[#4A3E39]">
                  <tr>
                    <td className="p-2 border border-[#DDD5C7] font-semibold">恢復合法使用</td>
                    <td className="p-2 border border-[#DDD5C7]">12 件</td>
                    <td className="p-2 border border-[#DDD5C7]">約 32%</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#DDD5C7] font-semibold text-emerald-800">申請合法化</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-emerald-800">25 件</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-emerald-800">約 68%</td>
                  </tr>
                  <tr className="bg-amber-50 font-bold">
                    <td className="p-2 border border-[#DDD5C7]">合計</td>
                    <td className="p-2 border border-[#DDD5C7]">37 件</td>
                    <td className="p-2 border border-[#DDD5C7]">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#4A3E39] leading-relaxed pt-1">
              由上開統計資料觀察，解除列管案件以<strong>申請合法化方式為主要改善途徑</strong>，顯示透過輔導當事人補辦相關許可或調整使用方式，使土地回復合法使用狀態，為目前違規案件改善之重要處理模式之一。
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 四、案件處理經驗分享 */}
      {/* ===================================================================== */}
      <section className="space-y-6 scroll-mt-20">
        <div className="border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              四
            </span>
            <span>案件處理經驗分享（三大核心實務案例研析）</span>
          </h3>
        </div>

        {/* 案例總覽對照表 */}
        <div className="overflow-x-auto rounded-lg border border-[#DDD5C7] bg-white">
          <table className="w-full text-xs sm:text-sm border-collapse">
            <thead className="bg-[#1F3864] text-white text-center">
              <tr>
                <th className="p-2.5 border border-[#DDD5C7] w-1/3">案例類別</th>
                <th className="p-2.5 border border-[#DDD5C7]">核心議題與法規競合</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DDD5C7] text-[#4A3E39]">
              <tr className="hover:bg-amber-50/30">
                <td className="p-2.5 border border-[#DDD5C7] font-bold text-[#1F3864]">建築使用</td>
                <td className="p-2.5 border border-[#DDD5C7] font-semibold text-blue-900">建築法 vs 區域計畫法</td>
              </tr>
              <tr className="hover:bg-amber-50/30">
                <td className="p-2.5 border border-[#DDD5C7] font-bold text-[#1F3864]">林業用地</td>
                <td className="p-2.5 border border-[#DDD5C7] font-semibold text-emerald-900">森林法 vs 區域計畫法（裁處權時效）</td>
              </tr>
              <tr className="hover:bg-amber-50/30">
                <td className="p-2.5 border border-[#DDD5C7] font-bold text-[#1F3864]">農舍管理</td>
                <td className="p-2.5 border border-[#DDD5C7] font-semibold text-amber-900">農業法規整合（垂直增建 vs 水平擴建）</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* 案列 1：建築物使用與使用執照不符 */}
        {/* ------------------------------------------------------------------- */}
        <div id="illegal-sec-4-1" className="p-4 sm:p-5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-4 shadow-sm scroll-mt-20">
          <div className="flex items-center justify-between border-b border-[#DDD5C7] pb-2">
            <h4 className="font-bold text-[#1F3864] text-base sm:text-lg flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#8C5A4B]" />
              <span>案列 1：建築物使用與使用執照不符，涉及建築法與區域計畫法適用之案例</span>
            </h4>
            <button
              type="button"
              onClick={() =>
                handleCopy(
                  'case-1',
                  `案列 1-建築物使用與使用執照不符，涉及建築法與區域計畫法適用之案例
（一）案件背景：實務上非都市土地丁建原核准用途為廠房、辦公室或宿舍，現況擅自作為住宅使用，同時涉及建築管理與土地管制。過去工務局依內政部 94 年 5 月 18 日台內營字第 0940083304 號函釋移地政局依區域計畫法辦理。法制局認為有過度限縮建築法適用之疑慮，函請中央釋示。
（二）爭點分析：建築物實際使用與核准用途不符時，應優先適用《建築法》或《區域計畫法》辦理。
（三）中央主管機關函釋見解：國土署 115 年 2 月 11 日函復，建築物違規使用與土地使用分區管制違反係屬不同構成要件。建築法第 77 條第 1 項「合法使用」指構造設備與現況相符，未涉及分區管制構成要件。依行政罰法第 25 條一行為違反數法應分別裁處。建築法第 91 條得限期改善、連續處罰，必要時停止供水供電、封閉或拆除。
（四）本府處理原則：適用順序為行業管理 → 行為管理 → 物之管理。建築物未依使照使用屬「行為管理」，優先由工務局依建築法第 77 條第 1 項及第 91 條裁處並限期改善；未涉建築法違規或仍涉土地分區不符者，再移地政局依區域計畫法續辦。
（五）結論：確立建築物違規使用與土地分區管制違反屬不同構成要件，依法規適用順序強化管理效能。`,
                  '案例1：使照不符爭議'
                )
              }
              className="px-2 py-0.5 rounded bg-white hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
            >
              {copiedKey === 'case-1' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>複製此案例</span>
            </button>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
            <div className="space-y-1">
              <strong className="text-[#1F3864]">（一）案件背景：</strong>
              <p>
                1. 實務上常見非都市土地上之建築物雖領有合法使用執照，惟實際使用情形與核准用途不符，例如位於丁種建築用地之建築物，原核准用途為廠房、辦公室或宿舍，惟現況未經申請變更即作為住宅使用，致同時涉及建築管理及土地使用管制問題。
              </p>
              <p>
                2. 過去本府工務局就此類案件，係依內政部 94 年 5 月 18 日台內營字第 0940083304 號函釋意旨(建築法規定之意旨，係指建築物變更原核定之使用類組，其變更後之使用類組為依法允許設置使用者，如有未依建築法第 73 條第 2 項規定要件、程序辦理變更使用執照，始違反該條之規定)，以無法依建築法第 73 條第 2 項辦理變更使照，認為該類案件主要涉及土地使用管制事項，故移由地政主管機關依《區域計畫法》辦理。
              </p>
              <p>
                3. 惟本府法制局於案件會辦時表示，上開函釋恐有過度限縮建築法適用範圍之疑慮，並可能與建築法維護建築物使用安全及建築管理之立法目的不符。為釐清相關法規適用疑義，本府爰函請中央主管機關釋示。
              </p>
            </div>

            <div className="space-y-1">
              <strong className="text-[#1F3864]">（二）爭點分析：</strong>
              <p>本案主要爭點在於：</p>
              <ol className="list-decimal list-inside space-y-0.5 pl-2">
                <li>建築物實際使用與核准用途不符時，應優先適用《建築法》或《區域計畫法》辦理。</li>
                <li>若僅依土地使用分區管制規定處理，可能忽略建築管理制度對建築物安全及合法使用之管理目的；反之，若僅依建築法辦理，亦可能未能處理土地使用分區不符之問題。因此，有必要釐清兩項法規之構成要件及適用範圍。</li>
              </ol>
            </div>

            <div className="p-3.5 rounded-lg bg-blue-50/70 border border-blue-200 space-y-1.5">
              <strong className="text-blue-900 block">（三）中央主管機關函釋見解：</strong>
              <ol className="list-decimal list-inside space-y-1 text-blue-950">
                <li>
                  內政部國土管理署於 <strong>115 年 2 月 11 日函復</strong>表示，相關疑義內政部前已於 100 年 9 月 26 日函釋說明，並指出
                  <strong>建築物違規使用與土地使用分區管制違反係屬不同構成要件</strong>。
                </li>
                <li>
                  依內政部 97 年 2 月 25 日召開研商會議結論，《建築法》第 77 條第 1 項所稱「合法使用」，係指建築物之構造及設備應與其現況用途相符，並未涉及土地使用分區管制之構成要件。
                </li>
                <li>
                  因此，建築物未依核准用途使用，屬違反建築管理規定，土地使用不符合使用分區管制規定，則屬土地管理事項，兩者性質不同，得分別依相關法規辦理。
                </li>
                <li>
                  另依《行政罰法》第 25 條規定，一行為違反數個行政法規時，除法律另有規定外，應分別依各該法律規定裁處。
                </li>
                <li>
                  此外，《建築法》第 91 條第 1 項第 2 款規定，建築物未依第 77 條第 1 項維護合法使用者，主管機關得裁處罰鍰並限期改善；屆期未改善且繼續使用者，得連續處罰並命停止使用，必要時並得採取
                  <strong>停止供水供電、封閉或拆除</strong>等措施。
                </li>
              </ol>
            </div>

            <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200 space-y-1.5">
              <strong className="text-emerald-900 block">（四）本府處理原則：</strong>
              <p className="text-emerald-950">
                1. 綜合中央函釋及相關法規意旨，未來辦理此類案件時，將依違規案件同時違反不同性質管理法規之處理原則辦理。
              </p>
              <p className="text-emerald-950">
                2. 依本府違規案件權責劃分原則，其適用順序如下：<strong>行業管理 → 行為管理 → 物之管理</strong>，並由順序在先之主管機關主政。建築物未依使用執照核准內容使用，涉及建築物使用管理及公共安全事項，屬「行為管理」範疇，
                <strong className="underline decoration-emerald-600">應優先於土地使用管制等「物之管理」法規適用</strong>。
              </p>
              <div className="space-y-1 pl-2 text-emerald-950">
                <p>3. 因此，後續案件處理原則如下：</p>
                <p>✓ <strong>由建築主管機關（工務局）</strong>依《建築法》第 77 條第 1 項及第 91 條第 1 項第 2 款規定裁處並限期改善。</p>
                <p>✓ 如經認定未涉及建築法違規情形，或案件仍涉及土地使用分區不符者，再移由地政主管機關依《區域計畫法》規定辦理。</p>
                <p>✓ 透過釐清建築管理與土地使用管制之權責分工，可避免案件處理過程中法規適用爭議，並使違規案件得依其性質由適當主管機關優先處理，以提升行政效率。</p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-white border border-[#DDD5C7]">
              <strong className="text-[#1F3864]">（五）結論：</strong>
              <p className="mt-0.5 text-[#4A3E39]">
                本案經向中央主管機關釐清法規適用疑義後，已確立建築物違規使用與土地使用分區管制違反屬不同構成要件之處理原則。未來辦理類此案件時，將依權責分工及法規適用順序，先由建築主管機關依建築法辦理，再視個案情形續依區域計畫法處理，以強化本市非都市土地違規案件整體管理效能。
              </p>
            </div>

            {/* 建築法法規適用整理表 */}
            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-bold text-[#8C5A4B]">● 建築法法規適用整理表</span>
              <div className="overflow-x-auto rounded-lg border border-[#DDD5C7] bg-white">
                <table className="w-full text-xs border-collapse">
                  <thead className="bg-[#1F3864] text-white">
                    <tr>
                      <th className="p-2 border border-[#DDD5C7] text-left">條文</th>
                      <th className="p-2 border border-[#DDD5C7] text-left">條文重點</th>
                      <th className="p-2 border border-[#DDD5C7] text-left">適用情形</th>
                      <th className="p-2 border border-[#DDD5C7] text-left">處理方式</th>
                      <th className="p-2 border border-[#DDD5C7] text-left">罰則依據</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DDD5C7] text-[#4A3E39]">
                    <tr>
                      <td className="p-2 border border-[#DDD5C7] font-bold">第 73 條第 2 項</td>
                      <td className="p-2 border border-[#DDD5C7]">建築物應依核准使用，不得擅自變更</td>
                      <td className="p-2 border border-[#DDD5C7]">建築物實際使用與使照用途不符</td>
                      <td className="p-2 border border-[#DDD5C7]">應申請變更使用執照</td>
                      <td className="p-2 border border-[#DDD5C7] font-semibold text-rose-800">違反者依第 91 條處罰</td>
                    </tr>
                    <tr className="bg-[#FAF7F2]">
                      <td className="p-2 border border-[#DDD5C7] font-bold">第 77 條第 1 項</td>
                      <td className="p-2 border border-[#DDD5C7]">建築物變更使用時，應申請變更使用執照</td>
                      <td className="p-2 border border-[#DDD5C7]">使用用途變更涉及安全設備或分區管制</td>
                      <td className="p-2 border border-[#DDD5C7]">申請變更使用執照審查</td>
                      <td className="p-2 border border-[#DDD5C7] font-semibold text-rose-800">未申請即使用，依第 91 條處罰</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-[#DDD5C7] font-bold">第 91 條第 1 項第 1 款</td>
                      <td className="p-2 border border-[#DDD5C7]">違反第 73 條規定</td>
                      <td className="p-2 border border-[#DDD5C7]">未依使照用途使用</td>
                      <td className="p-2 border border-[#DDD5C7]">限期改善或停止使用</td>
                      <td className="p-2 border border-[#DDD5C7] font-bold text-rose-800">處 6 萬至 30 萬元罰鍰</td>
                    </tr>
                    <tr className="bg-[#FAF7F2]">
                      <td className="p-2 border border-[#DDD5C7] font-bold">第 91 條第 1 項第 2 款</td>
                      <td className="p-2 border border-[#DDD5C7]">違反第 77 條規定</td>
                      <td className="p-2 border border-[#DDD5C7]">未申請變更使照即變更用途</td>
                      <td className="p-2 border border-[#DDD5C7]">限期補辦或停止使用</td>
                      <td className="p-2 border border-[#DDD5C7] font-bold text-rose-800">處 6 萬至 30 萬元罰鍰</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* 案列 2：林業用地違規樣態、裁處權時效及主政機關認定案例 */}
        {/* ------------------------------------------------------------------- */}
        <div id="illegal-sec-4-2" className="p-4 sm:p-5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-4 shadow-sm scroll-mt-20">
          <div className="flex items-center justify-between border-b border-[#DDD5C7] pb-2">
            <h4 className="font-bold text-[#1F3864] text-base sm:text-lg flex items-center gap-2">
              <TreePine className="w-5 h-5 text-emerald-800" />
              <span>案列 2：林業用地違規樣態、裁處權時效及主政機關認定案例</span>
            </h4>
            <button
              type="button"
              onClick={() =>
                handleCopy(
                  'case-2',
                  `案列 2-林業用地違規樣態、裁處權時效及主政機關認定案例
（一）案件背景：林業用地設置貨櫃屋、鐵皮屋、棚架及水泥鋪面，農業局認定違反《森林法》第 6 條第 2 項，依第 56 條之 1 得處 6 萬至 30 萬元罰鍰。
（二）爭點分析：1. 農業局認違規逾 3 年裁處權消滅，擬移地政局依區域計畫法續處。2. 森林法與區域計畫法法律適用與主政機關認定爭議。
（三）中央主管機關函釋見解：農委會 110 年 11 月 5 日函復：若屬「未經核准之建造行為」，自建造行為終了起算；若屬「林業用途以外之使用」，其裁處權時效應自使用狀態終了時起算。狀態持續存在尚未終結，不生 3 年時效消滅問題。
（四）森林法與區域計畫法之適用關係：兩者無特別法與普通法優先適用關係。依行政罰法第 31 條處理在先機關管轄或法定罰鍰額最高者管轄；兩者罰鍰皆為 6 至 30 萬元。
（五）本府處理原則（112 年新制）：112 年 2 月 16 日聯合取締小組會議決議：專法優先原則、權責劃分原則（林業屬行業管理，優先於屬物之管理之區域計畫法）、由優先受理機關主政。若同一建物同時涉及林業與農牧用地違規，為避免一案二罰，由地政局依區域計畫法統一辦理。
（六）結論：違規狀態持續存在裁處權時效未消滅；確立各機關權責，提升國土保安執行效能。`,
                  '案例2：林業用地時效與競合'
                )
              }
              className="px-2 py-0.5 rounded bg-white hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
            >
              {copiedKey === 'case-2' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>複製此案例</span>
            </button>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
            <div className="space-y-1">
              <strong className="text-[#1F3864]">（一）案件背景：</strong>
              <p>
                本案係林業用地經查獲設置貨櫃屋、鐵皮屋、棚架及水泥鋪面等設施，經本府農業局認定未作林業使用，已違反《森林法》第 6 條第 2 項規定：「經編為林業用地之土地，不得供其他用途之使用」。依《森林法》第 56 條之 1 規定，違反第 6 條第 2 項者，得處新臺幣 6 萬元以上 30 萬元以下罰鍰。
              </p>
            </div>

            <div className="space-y-1">
              <strong className="text-[#1F3864]">（二）爭點分析：</strong>
              <ol className="list-decimal list-inside space-y-1 pl-2">
                <li>
                  <strong>裁處權時效疑義：</strong>農業主管機關原認為違規狀態已逾 3 年，依《行政罰法》第 27 條規定裁處權已消滅，故無法依《森林法》裁罰，並擬移請地政機關依《區域計畫法》續處。
                </li>
                <li>
                  <strong>法律適用及主政機關認定：</strong>林業用地違規行為同時涉及《森林法》及《區域計畫法》，行政實務上對於應優先適用何法規及由何機關主政裁處，產生不同見解。
                </li>
              </ol>
            </div>

            <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200 space-y-1.5">
              <strong className="text-emerald-900 block">（三）中央主管機關函釋見解：</strong>
              <p className="text-emerald-950">
                1. 裁處權時效之認定，行政院農業委員會（現農業部）於 <strong>110 年 11 月 5 日函復</strong>表示：
              </p>
              <div className="pl-4 space-y-1 text-emerald-950 font-medium">
                <p>✓ 若屬「未經申請核准之建造行為」，其裁處權時效應自建造行為終了時起算。</p>
                <p>✓ 若屬「林業用途以外之使用」，其裁處權時效則應自林業用途以外之使用狀態終了時起算。</p>
              </div>
              <p className="text-emerald-950 font-bold pt-1">
                2. 因此，如違規使用狀態仍持續存在且尚未終結，即不生裁處權因 3 年期間經過而消滅之問題。
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-blue-50/70 border border-blue-200 space-y-1.5">
              <strong className="text-blue-900 block">（四）森林法與區域計畫法之適用關係：</strong>
              <ol className="list-decimal list-inside space-y-1 text-blue-950">
                <li>另查森林法第 6 條第 2 項規定，林業用地不得供其他用途使用；違反者依同法第 56 條之 1 規定得處新臺幣 6 萬元以上 30 萬元以下罰鍰。</li>
                <li>
                  依行政院農業委員會 104 年 1 月 19 日農林務字第 1031667199 號函及內政部 98 年 12 月 21 日台內營字第 0980218072 號函釋示，區域計畫法與森林法、水土保持法或山坡地保育利用條例等法規之間，
                  <strong>原則上並無特別法與普通法優先適用之關係</strong>，對於違反土地使用規定之行為，森林法與區域計畫法皆可能作為裁處依據。
                </li>
                <li>
                  此外，依《行政罰法》第 31 條第 1 項及第 2 項規定：
                  <div className="pl-4 space-y-0.5 pt-1 text-xs sm:text-sm">
                    <p>✓ 一行為違反同一行政法上義務而數機關均有管轄權者，由處理在先之機關管轄；若無法分別處理先後，則由各該機關協議定之，或由其共同上級機關指定之。</p>
                    <p>✓ 若一行為違反數個行政法上義務而應處罰鍰，數機關均有管轄權者，應由法定罰鍰額最高之主管機關管轄；法定罰鍰額相同者，則依處理先後或機關協議決定管轄機關。</p>
                  </div>
                </li>
                <li>
                  由於森林法與區域計畫法之法定罰鍰範圍皆為新臺幣 6 萬元至 30 萬元，裁罰級距相同，且無特別法與普通法優先適用之問題，因此實務上須依行政罰法相關規定判斷主政機關。
                </li>
              </ol>
            </div>

            <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200 space-y-1.5">
              <strong className="text-amber-950 block">（五）本府處理原則（112 年新制）：</strong>
              <p className="text-amber-900">
                1. 為釐清權責分工並提升行政效率，本府於 <strong>112 年 2 月 16 日召開「非都市土地使用管制聯合取締小組會議」</strong>，決議相關處理原則如下：
              </p>
              <div className="pl-4 space-y-1 text-amber-950 text-xs sm:text-sm">
                <p>
                  ✓ <strong>專法優先原則：</strong>針對林業用地違規使用案件，考量其屬林業管理範疇，原則由農業局依《森林法》規定優先辦理違規裁處及後續追蹤處理事宜。
                </p>
                <p>
                  ✓ <strong>權責劃分原則：</strong>林業用地違規案件屬「行業管理」性質，其管理目的及管制內容較為專業，原則上應優先於屬「物之管理」性質之《區域計畫法》適用。
                </p>
              </div>
              <p className="text-amber-900 pt-1">
                2. 如案件涉及多項法規適用情形，仍應依《行政罰法》第 31 條規定，由優先受理案件之機關主政辦理，並得邀集相關主管機關共同確認現況使用樣態，以釐清違規事實。實務上原則由農業局優先依《森林法》規定辦理違規裁處及後續追蹤處理事宜。
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white border border-[#DDD5C7] space-y-1">
              <strong className="text-[#1F3864]">（六）結論：</strong>
              <div className="space-y-1 pl-2 text-xs sm:text-sm text-[#4A3E39]">
                <p>1. 透過本案處理經驗及中央函釋釐清，確立以下重要原則：</p>
                <p>✓ 違規使用狀態如仍持續存在，裁處權時效即尚未消滅。</p>
                <p>✓ 林業用地違規案件原則應由林業主管機關依《森林法》優先辦理裁處。</p>
                <p>✓ 如涉及多法規適用情形，得依《行政罰法》第 31 條規定，由優先受理之機關主政處理。</p>
                <p className="text-[#8C5A4B] font-bold">
                  ✓ 倘同一行為同時涉及林業用地、農牧用地等多種非都市土地使用違規情形（如同一棟建物同時涉及農業及林業使用違規），為避免發生一案二罰情形，原則由地政局依《區域計畫法》統一辦理裁處。
                </p>
                <p className="pt-1">
                  2. 綜上，透過前開處理原則之建立，可避免案件於不同機關間反覆移送，並有助於釐清各機關權責分工，進而提升非都市土地違規案件之處理效率，並強化林業用地管理及國土保安之執行效能。
                </p>
              </div>
            </div>

            {/* 森林法法規適用整理表 */}
            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-bold text-[#8C5A4B]">● 森林法法規適用整理表</span>
              <div className="overflow-x-auto rounded-lg border border-[#DDD5C7] bg-white">
                <table className="w-full text-xs border-collapse">
                  <thead className="bg-[#1F3864] text-white">
                    <tr>
                      <th className="p-2 border border-[#DDD5C7] text-left">項目</th>
                      <th className="p-2 border border-[#DDD5C7] text-left">條文內容</th>
                      <th className="p-2 border border-[#DDD5C7] text-left">適用情形</th>
                      <th className="p-2 border border-[#DDD5C7] text-left">處理方式</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DDD5C7] text-[#4A3E39]">
                    <tr>
                      <td className="p-2 border border-[#DDD5C7] font-bold">行為規範</td>
                      <td className="p-2 border border-[#DDD5C7]">第 6 條第 2 項</td>
                      <td className="p-2 border border-[#DDD5C7]">森林地未經主管機關核准，不得變更使用或為其他開發利用</td>
                      <td className="p-2 border border-[#DDD5C7] font-semibold text-rose-800">屬禁止規定</td>
                    </tr>
                    <tr className="bg-[#FAF7F2]">
                      <td className="p-2 border border-[#DDD5C7] font-bold">罰則規定</td>
                      <td className="p-2 border border-[#DDD5C7]">第 56-1 條</td>
                      <td className="p-2 border border-[#DDD5C7]">違反第 6 條規定使用森林地</td>
                      <td className="p-2 border border-[#DDD5C7] font-bold text-rose-800">處罰鍰並命恢復原狀</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* 案列 3：農舍違規擴建、裁處與輔導合法化之權責分工案例 */}
        {/* ------------------------------------------------------------------- */}
        <div id="illegal-sec-4-3" className="p-4 sm:p-5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-4 shadow-sm scroll-mt-20">
          <div className="flex items-center justify-between border-b border-[#DDD5C7] pb-2">
            <h4 className="font-bold text-[#1F3864] text-base sm:text-lg flex items-center gap-2">
              <Home className="w-5 h-5 text-amber-800" />
              <span>案列 3：農舍違規擴建、裁處與輔導合法化之權責分工案例</span>
            </h4>
            <button
              type="button"
              onClick={() =>
                handleCopy(
                  'case-3',
                  `案列 3-農舍違規擴建、裁處與輔導合法化之權責分工案例
(一) 案件背景：合法農舍周邊農業經營範圍十分之九內擅自增建水泥構造物、鐵皮棚架及水泥鋪面，未作農業使用，屬農舍違規擴建及農地違規。實務常需農業、建管、地政共同稽查處理。
(二) 核心法源：104 年 10 月 23 日研商農舍辦法第 15 條會議結論：宜由農業主管機關主政整合，建管地政配合；建管發使照應造冊並建檔列管；廢止資格許可屬最後手段。
(三) 中央主管機關稽查原則（農業部 111 年會議）：
1. 跨機關合作機制
2. 農舍使用以「自用」及「與農業經營不可分離」為原則。
3. 設施面積較許可增加即屬違規。
4. 依農舍辦法第 15 條第 2 項通知主管機關依法辦理並限期改正；無僅限期改正不裁罰之裁量空間，應於裁處時併命改善或恢復原狀。
5. 垂直違規增建依建築法；水平擴建或農地未作農業使用依土地使用管制規定裁處。
6. 重大違規得停止供水供電或廢止許可；涉民宿商業宗教通知目的事業主管機關。
(四) 本府處理原則與實務經驗：配合農業局認定十分之九違規樣態，地政局依區域計畫法裁處命改善；地政局裁罰後移請農業局納入輔導合法化列管；農業主管機關主政整合。
(五) 結論：「先裁罰、後輔導」管理模式防杜假借農舍名義違規擴建，確保國土資源合理利用。`,
                  '案例3：農舍擴建與輔導合法'
                )
              }
              className="px-2 py-0.5 rounded bg-white hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
            >
              {copiedKey === 'case-3' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>複製此案例</span>
            </button>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
            <div className="space-y-1">
              <strong className="text-[#1F3864]">(一) 案件背景：</strong>
              <p>
                本案為領有合法農舍使用執照之建築物，經查報發現該農舍周邊農業經營範圍
                <strong className="text-[#8C5A4B]">十分之九內</strong>
                ，擅自增建水泥構造物、鐵皮棚架及水泥鋪面等設施，並經認定未作農業使用，屬農舍違規擴建及農業用地違規使用情形。
              </p>
              <p>
                由於農舍管理涉及農業經營事實認定、建築管理及土地使用管制等不同法規領域，實務上常需由農業、建管及地政等機關共同辦理稽查及後續處理。
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7] space-y-1.5">
              <strong className="text-[#1F3864] block">(二) 核心法源：</strong>
              <p className="text-[#7D7065] text-xs">
                依 104 年 10 月 23 日研商「農業用地興建農舍辦法」第 15 條執行原則會議結論，農舍管理制度確立以下原則：
              </p>
              <ol className="list-decimal list-inside space-y-1 text-slate-800">
                <li>
                  <strong>主政機關認定：</strong>農舍管理與農業經營及農業使用之認定密不可分，宜由農業主管機關主政整合辦理，建管、地政及都市計畫單位配合。
                </li>
                <li>
                  <strong>造冊列管機制：</strong>建管單位於核發農舍使用執照時，應通知農業主管機關造冊列管，並於農舍興建資格管理系統建檔。
                </li>
                <li>
                  <strong>廢止許可原則：</strong>廢止農民興建農舍資格許可屬最後手段，須以違規情節重大者為前提。
                </li>
              </ol>
            </div>

            <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200 space-y-2">
              <strong className="text-amber-950 block">(三) 中央主管機關稽查原則：</strong>
              <p className="text-amber-900 text-xs">
                依農業部 111 年農舍業務督導暨交流會議決議及相關函釋，農舍稽查業務執行原則如下：
              </p>
              <div className="space-y-1.5 text-xs sm:text-sm text-amber-950 pl-2">
                <p><strong>1. 跨機關合作機制：</strong>地方政府應由農業、建管、都計、地政組成稽查小組，並加強橫向協調與違規案件列管追蹤。</p>
                <p><strong>2. 農舍使用與農業經營原則：</strong>以<strong>「自用」</strong>及<strong>「與農業經營不可分離」</strong>為原則。若農舍未自用或農地未積極作農業使用，均屬違規使用。</p>
                <p><strong>3. 違規樣態認定：</strong>農舍及其附屬設施面積如較許可內容增加，例如增設水泥鋪面、棚架或其他設施，即屬違規使用。</p>
                <p>
                  <strong>4. 違規案件裁處原則：</strong>依農舍辦法第 15 條第 2 項規定，經稽查發現未依規定使用者，應通知主管機關依法辦理並限期改正。依函釋見解，
                  <strong className="text-rose-800 underline">並無僅限期改正而不裁罰之裁量空間</strong>，應於裁處時併同命其改善或恢復原狀。
                </p>
                <div className="p-2.5 rounded bg-white border border-amber-300 font-bold space-y-1 text-slate-800">
                  <p>5. 違規使用型態之處理原則：</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1 font-normal">
                    <div className="p-2 rounded bg-blue-50 border border-blue-200 text-blue-900">
                      <span className="font-bold block">● 農舍「垂直」違規增建者</span>
                      依<strong>《建築法》</strong>規定處理（建管拆除大隊）。
                    </div>
                    <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-900">
                      <span className="font-bold block">● 農舍「水平」擴建或農地未作農業使用者</span>
                      依<strong>土地使用管制相關規定（區域計畫法）</strong>裁處。
                    </div>
                  </div>
                </div>
                <p>
                  <strong>6. 強化違規導正措施：</strong>對於重大違規案件或經裁罰仍未改善者，地方政府得採取
                  <strong>停止供水、供電或廢止農舍興建許可</strong>等措施。涉及民宿、商業或宗教等用途，亦應通知各該目的主管機關。
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200 space-y-1.5">
              <strong className="text-emerald-900 block">(四) 本府處理原則與實務經驗：</strong>
              <ol className="list-decimal list-inside space-y-1 text-emerald-950">
                <li>
                  <strong>配合農業主管機關認定辦理裁處：</strong>本府地政局依農業局認定農業經營範圍十分之九之違規樣態，例如水平擴建或農地未作農業經營等情形，據以依區域計畫法辦理裁處並命限期改善。
                </li>
                <li>
                  <strong>裁罰後移請輔導合法化：</strong>依本府非都市土地使用管制聯合取締小組會議決議，地政局完成裁罰後，應移請農業局納入輔導合法化列管，以協助恢復農舍及農業用地合法使用。
                </li>
                <li>
                  <strong>權責分工原則：</strong>農舍違規之認定涉及農業經營事實，宜由農業主管機關主政整合辦理，建管及地政單位配合執行相關行政處分及土地使用管理措施。
                </li>
              </ol>
            </div>

            <div className="p-3 rounded-lg bg-white border border-[#DDD5C7]">
              <strong className="text-[#1F3864]">(五) 結論：</strong>
              <p className="mt-0.5 text-[#4A3E39]">
                透過農業主管機關專業認定農業經營事實，地政機關據以辦理行政裁罰，並於裁罰後移由農業機關列管輔導。此種
                <strong className="text-[#1F3864]">「先裁罰、後輔導」</strong>
                之管理模式，有助於防杜假借農舍名義進行違規擴建或非農業使用之情形，並確保農業用地及國土資源之合理利用。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 五、綜合心得與制度建議 */}
      {/* ===================================================================== */}
      <section id="illegal-sec-5" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              五
            </span>
            <span>綜合心得與制度建議</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-5',
                `五、綜合心得與制度建議
綜合前述案例分析可知，非都市土地違規使用案件多涉及土地使用管制、建築管理及各目的事業主管機關之權責分工，案件性質複雜，且常因法規適用或裁處權限認定不同，而產生機關間移送或處理延宕情形。
首先，在法規適用方面，應依行政罰法「一行為違反數行政法規」之處理原則，區分各法規之構成要件與管理目的，並依本府違規案件權責劃分機制，由性質較為優先之主管機關主政處理，以避免法規適用爭議。例如建築物違規使用應由建築主管機關優先依《建築法》處理；林業用地違規則由林業主管機關依《森林法》裁處，以落實專業管理及專法優先原則。
其次，在行政執行面，應持續強化跨機關合作與資訊共享機制，例如透過非都市土地使用管制聯合取締小組會議、定期案件檢討及聯合會勘制度，使各機關得即時掌握違規樣態與處理原則，避免案件於機關間反覆移送，提升整體行政效率。
此外，對於涉及農舍管理或農地利用之案件，除依法裁罰外，亦可透過輔導合法化及後續列管機制，引導土地回復合法使用狀態，以兼顧土地管理與農業發展需求。
未來仍應持續蒐整違規案件處理實務經驗，並適時檢討相關作業程序與法規適用原則，透過制度化管理及跨機關合作機制，逐步精進非都市土地使用管制制度，以確保國土資源合理利用並維護土地使用秩序。`,
                '綜合心得與制度建議'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-5' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2 shadow-2xs">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
              <Scale className="w-4 h-4 text-[#8C5A4B]" />
              <span>1、法規適用原則：專法優先與權責劃分</span>
            </h4>
            <p className="text-[#4A3E39] leading-relaxed">
              應依行政罰法「一行為違反數行政法規」之處理原則，區分各法規之構成要件與管理目的，並依本府違規案件權責劃分機制，由性質較為優先之主管機關主政處理，以避免法規適用爭議。例如建築物違規使用應由建築主管機關優先依《建築法》處理；林業用地違規則由林業主管機關依《森林法》裁處，以落實專業管理及專法優先原則。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2 shadow-2xs">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
              <Workflow className="w-4 h-4 text-[#8C5A4B]" />
              <span>2、行政執行機制：跨機關合作與聯合取締</span>
            </h4>
            <p className="text-[#4A3E39] leading-relaxed">
              應持續強化跨機關合作與資訊共享機制，例如透過非都市土地使用管制聯合取締小組會議、定期案件檢討及聯合會勘制度，使各機關得即時掌握違規樣態與處理原則，避免案件於機關間反覆移送，提升整體行政效率。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2 shadow-2xs">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
              <TreePine className="w-4 h-4 text-emerald-700" />
              <span>3、輔導合法化與列管機制</span>
            </h4>
            <p className="text-[#4A3E39] leading-relaxed">
              對於涉及農舍管理或農地利用之案件，除依法裁罰外，亦可透過輔導合法化及後續列管機制，引導土地回復合法使用狀態，以兼顧土地管理與農業發展需求。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2 shadow-2xs">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm sm:text-base">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>4、制度精進與國土保安</span>
            </h4>
            <p className="text-[#4A3E39] leading-relaxed">
              未來仍應持續蒐整違規案件處理實務經驗，並適時檢討相關作業程序與法規適用原則，透過制度化管理及跨機關合作機制，逐步精進非都市土地使用管制制度，以確保國土資源合理利用並維護土地使用秩序。
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 附件 1：新北市政府辦理非都市土地違反使用管制查處標準作業流程圖 */}
      {/* ===================================================================== */}
      <section id="illegal-sec-att1" className="space-y-5 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-emerald-700 pb-2">
          <h3 className="text-lg sm:text-xl font-black text-emerald-900 flex items-center gap-2">
            <Workflow className="w-6 h-6 text-emerald-700" />
            <span>附件 1：新北市政府辦理非都市土地違反使用管制查處標準作業流程圖</span>
          </h3>
          <span className="text-xs text-[#7D7065] font-mono">（(府)地地管02-流程圖）</span>
        </div>

        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#DDD5C7] shadow-sm space-y-6">
          <div className="text-xs text-[#7D7065] flex items-center justify-between border-b border-[#DDD5C7] pb-2">
            <span className="font-bold text-[#1F3864]">作業階段 / 作業流程 / 權責機關 對照架構</span>
            <span className="text-[11px]">原件第 16 頁標準作業流程全覽</span>
          </div>

          {/* 階段 1：現場勘查前作業階段 */}
          <div className="rounded-xl border border-blue-200 bg-blue-50/40 p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-blue-200 pb-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-blue-700 text-white font-bold text-xs">
                  階段一
                </span>
                <span className="font-bold text-blue-950 text-sm sm:text-base">現場勘查前作業階段</span>
              </div>
              <span className="text-xs text-blue-800 font-semibold">權責：地政局、公所、目的事業主管機關</span>
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="p-2.5 rounded-lg bg-white border border-blue-200 flex items-center justify-between">
                <div>
                  <strong className="text-blue-900">1. 受理違規案件</strong>
                  <span className="text-slate-600 ml-2">（民眾檢舉、機關移送、主動查報）</span>
                </div>
                <span className="text-xs font-mono text-blue-700 font-semibold">本府地政局</span>
              </div>

              <div className="flex justify-center text-blue-300">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-blue-200 flex items-center justify-between">
                <div>
                  <strong className="text-blue-900">2. 法律條文適用時間點確認</strong>
                </div>
                <span className="text-xs font-mono text-blue-700 font-semibold">本府地政局</span>
              </div>

              <div className="flex justify-center text-blue-300">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-blue-200 flex items-center justify-between">
                <div>
                  <strong className="text-blue-900">3. 確認主政機關</strong>
                  <span className="text-slate-600 ml-2">（行業管理 ➔ 行為管理 ➔ 物之管理）</span>
                </div>
                <span className="text-xs font-mono text-blue-700 font-semibold">本府地政局</span>
              </div>

              <div className="flex justify-center text-blue-300">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              {/* 4. 是否為地政局 分流 */}
              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
                <div className="font-bold text-amber-950 text-center mb-2">4. 是否為地政局主政？</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded bg-white border border-amber-300 space-y-1">
                    <span className="font-bold text-rose-800">【否】</span>
                    <div className="text-slate-700 font-medium">5.2 移由權責機關辦理</div>
                    <div className="text-[11px] text-slate-500">（移請行業/行為目的主管機關主政）</div>
                  </div>
                  <div className="p-2.5 rounded bg-white border border-emerald-300 space-y-1">
                    <span className="font-bold text-emerald-800">【是】</span>
                    <div className="text-slate-700 font-medium">5.1 請公所查報 ➔ 6. 訂期會勘</div>
                    <div className="text-[11px] text-slate-500">（地政局召集各目的機關、地政所指界、公所）</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 階段 2：勘查及行政處分階段 */}
          <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-amber-200 pb-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#8C5A4B] text-white font-bold text-xs">
                  階段二
                </span>
                <span className="font-bold text-amber-950 text-sm sm:text-base">勘查及行政處分階段</span>
              </div>
              <span className="text-xs text-amber-800 font-semibold">權責：地政局、公所、拆除大隊、執行署</span>
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="p-2.5 rounded-lg bg-white border border-amber-200 flex items-center justify-between">
                <div>
                  <strong className="text-amber-950">7. 現場會勘</strong>
                  <span className="text-slate-600 ml-2">（各機關會同現場確認並簽名）</span>
                </div>
                <span className="text-xs font-mono text-amber-800 font-semibold">地政局 / 相關機關</span>
              </div>

              <div className="flex justify-center text-amber-300">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              {/* 8. 是否違反管制 */}
              <div className="p-3 rounded-lg bg-white border border-amber-200 space-y-2">
                <div className="font-bold text-[#1F3864] text-center">8. 是否違反管制？</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded bg-slate-50 border border-slate-200 text-center">
                    <span className="font-bold text-slate-700">【否】➔ 結案</span>
                  </div>
                  <div className="p-2 rounded bg-rose-50 border border-rose-200 text-center">
                    <span className="font-bold text-rose-800">【是】➔ 發陳述意見書（文到 7 日）</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center text-amber-300">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              {/* 9. 陳述無理由或逾期未復 */}
              <div className="p-3 rounded-lg bg-white border border-amber-200 space-y-2">
                <div className="font-bold text-[#1F3864] text-center">9. 陳述意見審查（或符合行政罰法第42條第6款）</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded bg-slate-50 border border-slate-200 text-center">
                    <span className="font-bold text-slate-700">陳述有理由 ➔ 結案</span>
                  </div>
                  <div className="p-2 rounded bg-rose-50 border border-rose-200 text-center">
                    <span className="font-bold text-rose-800">無理由或逾期 ➔ 10. 開立處分書</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center text-amber-300">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              {/* 雙軌裁處：罰鍰 vs 限期恢復 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {/* 罰鍰軌 */}
                <div className="p-3 rounded-xl bg-white border border-blue-200 space-y-2">
                  <div className="font-bold text-blue-900 border-b border-blue-200 pb-1">
                    11.1 限期繳納罰鍰（文到 30 日）
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div className="p-1.5 rounded bg-blue-50">11.1.1 是否繳納？</div>
                    <div className="pl-2 space-y-1">
                      <p>✓ <strong>已繳納：</strong>結案</p>
                      <p>✓ <strong>未繳納：</strong></p>
                      <div className="pl-2 space-y-0.5 text-[11px] text-blue-950">
                        <p>11.1.2.1 催繳（文到 7 日）</p>
                        <p>11.1.2.2 查受處分人財產</p>
                        <p>11.1.3 移送法務部行政執行署強制執行</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 恢復原狀軌 */}
                <div className="p-3 rounded-xl bg-white border border-rose-200 space-y-2">
                  <div className="font-bold text-rose-900 border-b border-rose-200 pb-1">
                    11.2 限期恢復原使用目的（文到 1 個月）
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div className="p-1.5 rounded bg-rose-50">11.2.1 公所複勘：是否恢復？</div>
                    <div className="pl-2 space-y-1">
                      <p>✓ <strong>已恢復：</strong>結案</p>
                      <p>✓ <strong>未恢復（採取強制作為）：</strong></p>
                      <div className="pl-2 space-y-0.5 text-[11px] text-rose-950">
                        <p>11.2.2.1 建物移送違章建築拆除大隊</p>
                        <p>11.2.2.2 移送地檢署偵辦</p>
                        <p>11.2.2.3 移目的事業主管機關輔導列管/認定優先拆除</p>
                        <p>11.2.3 知會相關機關</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 階段 3：結案階段 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 space-y-2">
            <div className="flex items-center justify-between border-b border-emerald-200 pb-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-700 text-white font-bold text-xs">
                  階段三
                </span>
                <span className="font-bold text-emerald-950 text-sm sm:text-base">結案階段</span>
              </div>
              <span className="text-xs text-emerald-800 font-semibold">權責：地政局、公所、相關機關</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
              <div className="font-bold text-emerald-950">
                12. 結案並按月、季報內政部備查
              </div>
              <div className="text-xs text-emerald-800">
                定期列管追蹤（每 3 個月定期複勘，防範死灰復燃）
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
