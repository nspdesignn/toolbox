import React from 'react';
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
  Calendar,
  Truck,
  BookOpen
} from 'lucide-react';

interface ConstructionSoilReportProps {
  onCopy?: (text: string, label: string) => void;
}

export const ConstructionSoilReport: React.FC<ConstructionSoilReportProps> = ({ onCopy }) => {
  const handleCopyText = (text: string, label: string) => {
    if (onCopy) {
      onCopy(text, label);
    } else {
      navigator.clipboard?.writeText(text);
    }
  };

  return (
    <div className="space-y-8 text-[#2D2623] leading-relaxed text-sm sm:text-base">
      {/* 報告主標題與狀態說明 */}
      <div className="text-center py-5 bg-[#FAF7F2] border-2 border-[#DDD5C7] rounded-xl space-y-1.5 shadow-2xs">
        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-[#EAE2D7] text-[#1F3864]">
          <FileText className="w-3.5 h-3.5 text-[#8C5A4B]" />
          專題報告第 3 案・全文收錄無摘要
        </span>
        <h1 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864] pt-1">
          營建剩餘土石方涉容許使用及變更編定
        </h1>
        <p className="text-xs sm:text-sm text-[#7D7065] font-mono">
          115 年 4 月 2 日
        </p>
      </div>

      {/* 章節快速導覽錨點列 */}
      <div className="p-3 bg-white rounded-xl border border-[#DDD5C7] flex items-center gap-2 overflow-x-auto text-xs font-bold shadow-2xs">
        <span className="text-[#8C5A4B] shrink-0 font-bold">章節快速跳轉：</span>
        <a href="#soil-sec-1" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          一、前言
        </a>
        <a href="#soil-sec-2" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          二、名詞定義與差異
        </a>
        <a href="#soil-sec-3" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          三、土石方相關規定與容許使用
        </a>
        <a href="#soil-sec-4" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          四、變更編定法令與程序
        </a>
        <a href="#soil-sec-5" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          五、未來國土計畫管制情形
        </a>
        <a href="#soil-sec-6" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          六、結論
        </a>
        <a href="#soil-sec-7" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          七、參考資料與核准案例
        </a>
      </div>

      {/* ================================================================= */}
      {/* 一、前言 */}
      {/* ================================================================= */}
      <section id="soil-sec-1" className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              一
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              一、前言
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `一、前言\n近年來由於一般建築工程及交通經建等重大公共工程日益增加，其施工產出剩餘土石方數量相當龐大，營建工程剩餘土石方已不再是單純的廢棄物，而是具備高度經濟價值的流動資源，餘土的去化與資源再利用已成為「國土永續發展」的核心議題，並涉及國土規劃、環境保護與產業資源配置。本文就營建剩餘土石方涉及非都市土地容許使用與變更編定相關法令限制做說明。`,
                '一、前言'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製前言</span>
          </button>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs">
          <p className="text-[#333333] leading-relaxed text-sm sm:text-base">
            近年來由於一般建築工程及交通經建等重大公共工程日益增加，其施工產出剩餘土石方數量相當龐大，營建工程剩餘土石方已不再是單純的廢棄物，而是具備高度經濟價值的流動資源，餘土的去化與資源再利用已成為「<strong>國土永續發展</strong>」的核心議題，並涉及國土規劃、環境保護與產業資源配置。本文就營建剩餘土石方涉及非都市土地容許使用與變更編定相關法令限制做說明。
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 二、名詞定義 */}
      {/* ================================================================= */}
      <section id="soil-sec-2" className="space-y-5 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              二
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              二、名詞定義
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `二、名詞定義\n依《營建剩餘土石方處理方案》所指營建剩餘土石方之種類，包括建築工程、公共工程、其他民間工程及收容處理場所產生之剩餘泥、土、砂、石、磚、瓦、混凝土塊等，經暫屯、堆置可供回收、分類、加工、處理、再生利用者，屬有用之土壤砂石資源。所指收容處理場所，包括土石方資源堆置處理場、目的事業處理場所及其他經政府機關依法核准之場所。\n另依《新北市營建工程剩餘土石方處理及營建混合物資源處理場設置管理要點》用詞定義如下：\n(一)營建工程剩餘土石方（簡稱餘土）：指營建工程施工所產生之剩餘泥（含營建泥漿）、土、砂、石、磚、瓦、混凝土塊。\n(二)營建廢棄物：指營建工程施工所附帶產生之金屬屑、玻璃碎片、塑膠類、木屑、竹片、紙屑、瀝青等。\n(三)營建混合物（簡稱混合物）：指營建剩餘土石方與營建廢棄物在尚未分離處理前之物狀。（未分離前不得進入填埋場。若無法於工地分離，則須進入「混合物處理場」。）\n(四)土石方資源堆置處理場（簡稱土資場）：指經政府機關核准，提供餘土資源暫屯、堆置、填埋、轉運、回收、分類、加工、煆燒、再利用等處理功能及其機具設備之場所。\n(五)合法收容處理場所：指經政府機關核准之土資場、混合物處理場、依營建廢棄物共同清除處理機構管理辦法申請具處理營建廢棄物之機構或依其他相關法令經政府機關核准收受餘土者。\n(六)最終填埋：指土資場依核准可容納之容積填埋至取得處理完成證明文件。\n(七)目的事業處理場所：依《營建剩餘土石方處理方案》係指經直轄市、縣（市）政府或公共工程主辦（管）機關審查同意，可收容處理營建剩餘土石方為原料之既有磚瓦窯場、輕質骨材場、土石採取場、砂石堆置、儲運、土石碎解洗選場、預拌混凝土場、水泥廠及其他回收再利用處理場所。`,
                '二、名詞定義'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製名詞定義</span>
          </button>
        </div>

        {/* 方案與新北要點引言 */}
        <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] text-xs sm:text-sm text-[#4A3E39] space-y-2">
          <p>
            依<strong>《營建剩餘土石方處理方案》</strong>所指營建剩餘土石方之種類，包括建築工程、公共工程、其他民間工程及收容處理場所產生之剩餘泥、土、砂、石、磚、瓦、混凝土塊等，經暫屯、堆置可供回收、分類、加工、處理、再生利用者，屬有用之土壤砂石資源。所指收容處理場所，包括土石方資源堆置處理場、目的事業處理場所及其他經政府機關依法核准之場所。
          </p>
          <p>
            另依<strong>《新北市營建工程剩餘土石方處理及營建混合物資源處理場設置管理要點》</strong>用詞定義如下：
          </p>
        </div>

        {/* 定義條目（一）至（七） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* （一） */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">
                （一）
              </span>
              <h3 className="font-bold text-sm sm:text-base text-[#1F3864]">
                營建工程剩餘土石方（簡稱餘土）
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#333333] pl-2 border-l-2 border-[#1F3864]/30 leading-relaxed">
              指營建工程施工所產生之剩餘泥（含營建泥漿）、土、砂、石、磚、瓦、混凝土塊。
            </p>
          </div>

          {/* （二） */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#8C5A4B] text-white">
                （二）
              </span>
              <h3 className="font-bold text-sm sm:text-base text-[#8C5A4B]">
                營建廢棄物
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#333333] pl-2 border-l-2 border-[#8C5A4B]/30 leading-relaxed">
              指營建工程施工所附帶產生之金屬屑、玻璃碎片、塑膠類、木屑、竹片、紙屑、瀝青等。
            </p>
          </div>

          {/* （三） */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">
                （三）
              </span>
              <h3 className="font-bold text-sm sm:text-base text-[#1F3864]">
                營建混合物（簡稱混合物）
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#333333] pl-2 border-l-2 border-[#1F3864]/30 leading-relaxed">
              指營建剩餘土石方與營建廢棄物在尚未分離處理前之物狀。（<span className="text-rose-700 font-bold">未分離前不得進入填埋場。若無法於工地分離，則須進入「混合物處理場」。</span>）
            </p>
          </div>

          {/* （四） */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">
                （四）
              </span>
              <h3 className="font-bold text-sm sm:text-base text-[#1F3864]">
                土石方資源堆置處理場（簡稱土資場）
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#333333] pl-2 border-l-2 border-[#1F3864]/30 leading-relaxed">
              指經政府機關核准，提供餘土資源暫屯、堆置、填埋、轉運、回收、分類、加工、煆燒、再利用等處理功能及其機具設備之場所。
            </p>
          </div>

          {/* （五） */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">
                （五）
              </span>
              <h3 className="font-bold text-sm sm:text-base text-[#1F3864]">
                合法收容處理場所
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#333333] pl-2 border-l-2 border-[#1F3864]/30 leading-relaxed">
              指經政府機關核准之土資場、混合物處理場、依營建廢棄物共同清除處理機構管理辦法申請具處理營建廢棄物之機構或依其他相關法令經政府機關核准收受餘土者。
            </p>
          </div>

          {/* （六） */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">
                （六）
              </span>
              <h3 className="font-bold text-sm sm:text-base text-[#1F3864]">
                最終填埋
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#333333] pl-2 border-l-2 border-[#1F3864]/30 leading-relaxed">
              指土資場依核准可容納之容積填埋至取得處理完成證明文件。
            </p>
          </div>
        </div>

        {/* （七）目的事業處理場所（8 大類詳細說明） */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#1F3864] text-white">
              （七）
            </span>
            <h3 className="font-bold text-base text-[#1F3864]">
              目的事業處理場所
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
            依《營建剩餘土石方處理方案》係指經直轄市、縣（市）政府或公共工程主辦（管）機關審查同意，可收容處理營建剩餘土石方為原料之既有磚瓦窯場、輕質骨材場、土石採取場、砂石堆置、儲運、土石碎解洗選場、預拌混凝土場、水泥廠及其他回收再利用處理場所，另說明如下：
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm">
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <h4 className="font-bold text-[#1F3864]">1. 磚瓦窯場</h4>
              <p className="text-[#4A3E39]">以黏土或土石方為原料，經成型、乾燥及高溫焙燒，生產紅磚、瓦片或其他陶瓷產品的工廠。</p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <h4 className="font-bold text-[#1F3864]">2. 輕質骨材場</h4>
              <p className="text-[#4A3E39]">將土石方（如淤泥、頁岩等）加工，透過高溫膨脹技術生產質輕、高強度且具隔音隔熱特性的「輕質骨材」之場所。</p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <h4 className="font-bold text-[#1F3864]">3. 土石採取場</h4>
              <p className="text-[#4A3E39]">指土石採掘、儲存及附屬於場內搬運、碎解、洗、選作業之場所。</p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <h4 className="font-bold text-[#1F3864]">4. 砂石堆置場</h4>
              <p className="text-[#4A3E39]">專供砂石、土石等原料或產品進行靜態存放與暫屯的場所。</p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <h4 className="font-bold text-[#1F3864]">5. 砂石儲運場</h4>
              <p className="text-[#4A3E39]">具備砂石轉運、裝卸與運輸功能的場所。</p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <h4 className="font-bold text-[#1F3864]">6. 土石碎解洗選場</h4>
              <p className="text-[#4A3E39]">利用機械設備對土石進行物理加工（破碎、分篩、清洗）的作業場所。</p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <h4 className="font-bold text-[#1F3864]">7. 預拌混凝土場</h4>
              <p className="text-[#4A3E39]">將水泥、水、砂石（細骨材）及礫石（粗骨材）依比例拌合，生產並供應新鮮混凝土的工廠。</p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <h4 className="font-bold text-[#1F3864]">8. 水泥廠</h4>
              <p className="text-[#4A3E39]">以石灰石、黏土等為原料，經高溫煅燒生產水泥熟料，並研磨成水泥成品的大型工業場所。</p>
            </div>
          </div>
        </div>

        {/* （八）營建剩餘土石方與營建廢棄物之差異比較表 */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">
              （八）
            </span>
            <h3 className="font-bold text-base text-[#1F3864]">
              營建剩餘土石方與營建廢棄物之差異比較表
            </h3>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] shadow-2xs bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#1F3864] text-white">
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 whitespace-nowrap w-24">
                    比較項目
                  </th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[220px]">
                    營建剩餘土石方
                  </th>
                  <th className="py-2.5 px-3 font-bold min-w-[220px]">
                    營建廢棄物
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C7]">
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] whitespace-nowrap">
                    定義
                  </td>
                  <td className="py-3 px-3 text-[#333333] border-r border-[#DDD5C7]">
                    施工產出之剩餘泥、土、砂、石、磚、瓦、混凝土塊等。
                  </td>
                  <td className="py-3 px-3 text-[#333333]">
                    施工附帶產生之廢木材、廢塑膠、廢金屬、廢玻璃、廢瀝青等。
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] whitespace-nowrap">
                    性質認定
                  </td>
                  <td className="py-3 px-3 text-emerald-800 font-semibold border-r border-[#DDD5C7]">
                    屬有用資源。可加工後回填或銷售，具營收潛力。
                  </td>
                  <td className="py-3 px-3 text-rose-800 font-semibold">
                    屬一般事業廢棄物。須依廢棄物清理法規定處理。
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] whitespace-nowrap">
                    主要種類
                  </td>
                  <td className="py-3 px-3 text-[#333333] border-r border-[#DDD5C7]">
                    如岩塊、礫石、粉土、黏土、淤泥等。
                  </td>
                  <td className="py-3 px-3 text-[#333333]">
                    廢金屬、廢塑膠、廢木屑、玻璃屑、廢紙、一般垃圾等。
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] whitespace-nowrap">
                    主管機關
                  </td>
                  <td className="py-3 px-3 font-bold text-[#1F3864] border-r border-[#DDD5C7]">
                    內政部國土管理署
                  </td>
                  <td className="py-3 px-3 font-bold text-[#8C5A4B]">
                    環境部
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] whitespace-nowrap">
                    適用法規
                  </td>
                  <td className="py-3 px-3 font-semibold text-[#1F3864] border-r border-[#DDD5C7]">
                    營建剩餘土石方處理方案
                  </td>
                  <td className="py-3 px-3 font-semibold text-rose-800">
                    廢棄物清理法
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 三、營建剩餘土石方相關規定 */}
      {/* ================================================================= */}
      <section id="soil-sec-3" className="space-y-5 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              三
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              三、營建剩餘土石方相關規定
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `三、營建剩餘土石方相關規定\n有關營建剩餘土石方涉及設置土資場適用《營建剩餘土石方處理方案》、《新北市營建工程剩餘土石方處理及營建混合物資源處理場設置管理要點》；涉及設置碎解洗選場、砂石儲運場、砂石堆置場及碎解洗選場附設之預拌混凝土場或瀝青拌合場等適用《非都市土地申請變更編定為礦業用地興辦事業計畫審查作業要點》；涉及設置土石採取場適用《土石採取法》、《採取土石免申辦土石採取許可管理辦法》、《非都市土地農牧用地容許採取土石審查作業要點》。`,
                '三、相關法規體系'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製相關規定</span>
          </button>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2 text-xs sm:text-sm">
          <p className="text-[#333333] leading-relaxed">
            有關營建剩餘土石方涉及設置土資場適用<strong>《營建剩餘土石方處理方案》</strong>、<strong>《新北市營建工程剩餘土石方處理及營建混合物資源處理場設置管理要點》</strong>；涉及設置碎解洗選場、砂石儲運場、砂石堆置場及碎解洗選場附設之預拌混凝土場或瀝青拌合場等適用<strong>《非都市土地申請變更編定為礦業用地興辦事業計畫審查作業要點》</strong>；涉及設置土石採取場適用<strong>《土石採取法》</strong>、<strong>《採取土石免申辦土石採取許可管理辦法》</strong>、<strong>《非都市土地農牧用地容許採取土石審查作業要點》</strong>。
          </p>
        </div>

        {/* （一）區位限制 */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#1F3864] text-white">
              （一）
            </span>
            <h3 className="font-bold text-base text-[#1F3864]">
              區位限制（土資場之設置不得有下列情形）
            </h3>
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-[#333333]">
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong>（1）</strong> 地質結構不良、地層破碎、活動斷層或有滑動崩塌之虞之地區者（應檢附環境地質資料）。
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong>（2）</strong> 重要水庫集水區、河川行水區域內者。
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong>（3）</strong> 水源水質水量保護區自來水水源取水體水平距離一千公尺範圍內者，但場址位於取水體下游且無污染取水體之虞者不在此限。
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong>（4）</strong> 農業、交通、環保、軍事、水利及其他主管機關依法劃編應保護、管制或禁止設置者。
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong>（5）</strong> 土資場其外緣地界與鄉村區、住宅社區、營區、名勝古蹟、醫院、學校、文教設施之水平距離小於一百五十公尺者，但經有關主管機關勘查同意者，不在此限。
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong>（6）</strong> 場區出入口之道路及聯外主要道路寬度小於六公尺者。
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong>（7）</strong> 經本府斟酌交通、水利、環境、土地使用計畫等公益維護因素認定不宜設置者。
            </div>
          </div>
        </div>

        {/* （二）地點限制 */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#1F3864] text-white">
              （二）
            </span>
            <h3 className="font-bold text-base text-[#1F3864]">
              地點限制
            </h3>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm text-[#333333]">
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong className="text-[#1F3864]">1. 地形條件：</strong>
              土資場之設置地點應屬低窪地、谷地或海埔地。但有妥善處理計畫，經專案小組審查認為不影響安寧、衛生、安全者，不在此限。
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong className="text-[#1F3864]">2. 具最終填埋功能者規模門檻：</strong>
              其設置位於<strong>非山坡地不得小於一公頃且填埋容量不得小於一萬立方公尺</strong>；位於<strong>山坡地不得小於三公頃且填埋容量不得小於三萬立方公尺</strong>。但經本府或區公所核准營建工程業者自行設置之專用土資場與民間回填土地改良需收受餘土整地填高自行設置者，不在此限。
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong className="text-[#1F3864]">3. 不具最終填埋功能者處理量限制：</strong>
              其申請面積在<strong>二公頃以下者，日處理量應小於一千立方公尺</strong>；申請面積在<strong>二公頃以上者，日處理量不得大於二千立方公尺為原則</strong>，惟考量處理能力且對環境影響、交通衝擊等因素許可之情況下，經專案小組審查同意者，不在此限。
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong className="text-[#1F3864]">4. 用地完整性：</strong>
              土資場用地範圍內土地應連續，不得有中斷、裡地之情形，其用地應依照土地使用管制相關法令規定辦理。
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong className="text-[#1F3864]">5. 政府規劃與促參申設：</strong>
              本府主管建築機關或公共工程主辦機關自行規劃設置土方銀行或依促進民間參與公共建設法委託民間辦理者，其場所申設應依本章規定程序辦理。
            </div>
          </div>
        </div>

        {/* （三）申請流程 */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#1F3864] text-white">
              （三）
            </span>
            <div>
              <h3 className="font-bold text-base text-[#1F3864]">
                申請流程（主要分為三階段）
              </h3>
              <p className="text-xs text-[#7D7065]">
                可行性許可（初審） ➜ 設置許可（複審） ➜ 營運許可（啟用）
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            {/* 1. 可行性許可 */}
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-[#1F3864] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs flex items-center justify-center font-bold">1</span>
                  <span>可行性許可（初審）</span>
                </h4>
                <span className="text-xs bg-white px-2 py-0.5 rounded border border-[#DDD5C7] text-[#7D7065]">由工務局或區公所受理</span>
              </div>
              <p className="text-[#333333]">由新北市政府工務局或區公所受理，確認場址的基本適宜性。</p>
              <div className="space-y-1 pl-4 border-l-2 border-[#1F3864]/40 text-[#4A3E39]">
                <p><strong>（1）申請人：</strong>依商業登記法或公司法登記之行號或公司。</p>
                <p><strong>（2）各機關會審：</strong>受理機關成立專案小組，邀集相關機關進行初勘與審查。</p>
                <p><strong>（3）認可核發：</strong>經專案小組審查通過後，核發「設置土資場可行性認可」。</p>
              </div>
            </div>

            {/* 2. 設置許可 */}
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-[#1F3864] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs flex items-center justify-center font-bold">2</span>
                  <span>設置許可（複審）</span>
                </h4>
                <span className="text-xs bg-white px-2 py-0.5 rounded border border-[#DDD5C7] text-[#7D7065]">詳細計畫審查與興建準備</span>
              </div>
              <p className="text-[#333333]">取得可行性認可後，需進一步進行詳細計畫審查與場區興建準備。</p>
              <div className="space-y-1.5 pl-4 border-l-2 border-[#1F3864]/40 text-[#4A3E39]">
                <p><strong>（1）提報期限：</strong>申請人應於可行性認可後 <strong>6 個月內</strong>提報複審資料（不含環評、水保審查時間）。申請人為政府機關者，資料提報期限不受前項之限制。</p>
                <p><strong>（2）水保與用地編定：</strong>涉及山坡地者需完成水土保持計畫，若需變更土地編定（如變更為特定目的事業用地），則依相關法規辦理。</p>
                <p><strong>（3）各機關會審：</strong>經專案小組審查核可後，核發「土資場設置許可」。</p>
                <p><strong>（4）授權公所核發門檻：</strong>僅具有最終填埋處理功能，其設置位於非山坡地，面積未逾十公頃，堆置容量未逾十五萬立方公尺；或設置位於山坡地，堆置容量未逾五萬立方公尺者，授權各區公所依本要點相關規定審查核發設置許可，並通知本府工務局。</p>
                <p><strong>（5）再生利用功能申請：</strong>具最終填埋處理功能土資場用地內申請餘土資源再生利用功能者，應依第三十二點規定向本府申請核發處理完成證明文件後，始得核發設置許可。</p>
              </div>
            </div>

            {/* 3. 營運許可 */}
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-[#1F3864] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs flex items-center justify-center font-bold">3</span>
                  <span>營運許可（啟用）</span>
                </h4>
                <span className="text-xs bg-white px-2 py-0.5 rounded border border-[#DDD5C7] text-[#7D7065]">現場勘驗與核發許可證</span>
              </div>
              <p className="text-[#333333]">取得設置許可後，完成場內各項硬體設施並申請正式營運。</p>
              <div className="space-y-1.5 pl-4 border-l-2 border-[#1F3864]/40 text-[#4A3E39]">
                <p><strong>（1）提報期限：</strong>需於取得設置許可後 <strong>18 個月內</strong>提出營運許可申請。</p>
                <p><strong>（2）設施完工：</strong>設置辦公場所、周圍應設置綠帶或圍籬或圍牆等隔離設施、車輛清洗設施、遠端即時監控系統等設施。</p>
                <p><strong>（3）各機關會審：</strong>經專案小組勘驗核可後，核發營運許可證。</p>
              </div>
            </div>
          </div>
        </div>

        {/* （四）容許使用規定表 */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-bold text-base text-[#1F3864] flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">
                  （四）
                </span>
                <span>容許使用規定表</span>
              </h3>
              <p className="text-xs text-[#5B584E]">
                依非都市土地使用管制規則第 6 條附表一規定（土石採取、砂石儲運、土資場暫屯堆置最終填埋等）
              </p>
            </div>
            <span className="text-xs text-[#7D7065]">
              👉 支援左右滑動完整檢視細目與附帶條件
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] shadow-2xs bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#1F3864] text-white">
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 whitespace-nowrap w-24">
                    使用地類別
                  </th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[130px]">
                    容許使用項目
                  </th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[140px]">
                    免經申請許可使用細目
                  </th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[180px]">
                    需經目的事業主管機關、使用地主管機關及有關機關許可使用細目
                  </th>
                  <th className="py-2.5 px-3 font-bold min-w-[240px]">
                    附帶條件
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C7]">
                {/* 丁種建築用地 */}
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    丁種建築用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （四）臨時堆置收納營建剩餘土石方
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#1F3864]">
                    臨時堆置收納營建剩餘土石方
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 align-top text-xs text-rose-800 font-medium">
                    不得位於全國區域計畫規定之沿海自然保護區。
                  </td>
                </tr>

                {/* 農牧用地 */}
                <tr className="hover:bg-[#FAF7F2]">
                  <td rowSpan={2} className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    農牧用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （七）採取土石<br />
                    <span className="text-xs text-[#7D7065]">（特定農業區、一般農業區、森林區及特定專用區除外）</span>
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#1F3864]">
                    土石採取
                  </td>
                  <td className="py-3 px-3 align-top text-xs space-y-1">
                    <p className="text-rose-800 font-medium">一、不得位於全國區域計畫規定之沿海自然保護區。</p>
                    <p className="text-[#333333]">
                      二、採取當地土石（限於採掘、儲存及搬運，不包括設置碎解、洗、選作業場所），並應依非都市土地農牧用地容許採取土石審查作業要點規定辦理。但位於全國區域計畫規定之沿海一般保護區者，需經保護區主管機關許可。
                    </p>
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （十四）臨時堆置收納營建剩餘土石方
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#1F3864]">
                    臨時堆置收納營建剩餘土石方
                  </td>
                  <td className="py-3 px-3 align-top text-xs space-y-1">
                    <p className="text-rose-800 font-medium">一、不得位於全國區域計畫規定之沿海自然保護區。</p>
                    <p className="text-[#333333]">
                      二、僅限於本規則中華民國 102 年 9 月 21 日修正生效前已核准之既有合法磚窯廠毗鄰之土地。但位於全國區域計畫規定之沿海一般保護區者，需經保護區主管機關許可。
                    </p>
                  </td>
                </tr>

                {/* 林業用地 */}
                <tr className="hover:bg-[#FAF7F2]">
                  <td rowSpan={2} className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    林業用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （六）營建剩餘土石方資源之暫屯、堆置、最終填埋設施
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#1F3864]">
                    營建剩餘土石方資源之暫屯、堆置、最終填埋設施
                  </td>
                  <td className="py-3 px-3 align-top text-xs space-y-1">
                    <p className="text-rose-800 font-medium">一、不得位於全國區域計畫規定之沿海自然保護區。</p>
                    <p className="text-[#333333]">
                      二、限公共工程使用且經直轄市、縣（市）政府或公共工程主辦機關核准設置之填埋型、轉運型土石方收容處理場所，且不得有加工處理行為。但位於全國區域計畫規定之沿海一般保護區者，需經保護區主管機關許可。
                    </p>
                    <p className="text-[#1F3864] font-semibold">三、事業計畫使用面積不得超過 2 公頃。</p>
                    <p className="text-emerald-800 font-semibold">四、應於申請使用計畫書中提出復育造林計畫。</p>
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （七）採取土石
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top space-y-0.5 text-xs">
                    <p className="font-semibold text-[#1F3864]">1. 土石採取</p>
                    <p className="font-semibold text-[#1F3864]">2. 土石採取場</p>
                    <p className="font-semibold text-[#1F3864]">3. 土石採取廠房暨產品加工之設施</p>
                    <p className="font-semibold text-[#1F3864]">4. 水土保持設施</p>
                    <p className="font-semibold text-[#1F3864]">5. 其他在土石業上必要之工程設施及附屬設備</p>
                  </td>
                  <td className="py-3 px-3 align-top text-xs space-y-1">
                    <p className="text-rose-800 font-medium">一、本款各目不得位於全國區域計畫規定之沿海自然保護區。</p>
                    <p className="text-[#1F3864] font-semibold">二、本款各目事業計畫使用面積不得超過 2 公頃。</p>
                  </td>
                </tr>

                {/* 礦業用地 */}
                <tr className="hover:bg-[#FAF7F2]">
                  <td rowSpan={3} className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    礦業用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （二）採取土石
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top space-y-0.5 text-xs">
                    <p className="font-semibold text-[#1F3864]">1. 土石採取</p>
                    <p className="font-semibold text-[#1F3864]">2. 土石採取場</p>
                    <p className="font-semibold text-[#1F3864]">3. 土石採取廠房暨產品加工之設施</p>
                    <p className="font-semibold text-[#1F3864]">4. 水土保持設施</p>
                    <p className="font-semibold text-[#1F3864]">5. 砂石堆置、儲運、土石碎解洗選場及其一貫作業之預拌混凝土場、瀝青拌合場（包括純以外購砂石碎解洗選場設置及其儲運、堆置）</p>
                    <p className="font-semibold text-[#1F3864]">6. 其他在土石業上必要之工程設施及附屬設備</p>
                  </td>
                  <td className="py-3 px-3 align-top text-xs text-rose-800 font-medium">
                    本款各目不得位於全國區域計畫規定之沿海自然保護區。
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （六）臨時堆置收納營建剩餘土石方
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#1F3864]">
                    臨時堆置收納營建剩餘土石方
                  </td>
                  <td className="py-3 px-3 align-top text-xs space-y-1">
                    <p className="text-rose-800 font-medium">一、不得位於全國區域計畫規定之沿海自然保護區。</p>
                    <p className="text-[#333333]">二、位於全國區域計畫規定之沿海一般保護區者，需經保護區主管機關許可。</p>
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （九）砂土石碎解洗選加工設施
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top space-y-0.5 text-xs">
                    <p className="font-semibold text-[#1F3864]">1. 砂土石碎解洗選設施廠房或相關加工設施</p>
                    <p className="font-semibold text-[#1F3864]">2. 砂土石堆置、儲運場</p>
                    <p className="font-semibold text-[#1F3864]">3. 附屬之預拌混凝土廠、瀝青拌合廠及辦公廳、員工宿舍、倉庫</p>
                    <p className="font-semibold text-[#1F3864]">4. 附屬之加儲油（氣）設施</p>
                    <p className="font-semibold text-[#1F3864]">5. 環境保護及景觀維護設施</p>
                    <p className="font-semibold text-[#1F3864]">6. 其他必要之砂土石碎解洗選加工設施</p>
                  </td>
                  <td className="py-3 px-3 align-top text-xs space-y-1">
                    <p className="text-rose-800 font-medium">一、本款各目不得位於全國區域計畫規定之沿海自然保護區。</p>
                    <p className="text-[#333333]">二、位於全國區域計畫規定之沿海一般保護區者，需經保護區主管機關許可。</p>
                  </td>
                </tr>

                {/* 窯業用地 */}
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    窯業用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （五）臨時堆置收納營建剩餘土石方
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-medium text-[#4A3E39]">
                    同礦業用地
                  </td>
                  <td className="py-3 px-3 align-top text-xs text-[#4A3E39]">
                    同礦業用地
                  </td>
                </tr>

                {/* 水利用地 */}
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    水利用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （四）採取土石
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#1F3864]">
                    土石採取
                  </td>
                  <td className="py-3 px-3 align-top text-xs space-y-1">
                    <p className="text-[#333333]">一、限於經土石採取機關規劃公告整體砂石資源開發區有案者。</p>
                    <p className="text-rose-800 font-medium">二、不得位於全國區域計畫規定之沿海自然保護區。</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 主管機關權責認定與函釋備註 */}
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2 text-xs sm:text-sm">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1F3864]" />
              <span>目的事業主管機關認定權責：</span>
            </h4>
            <p className="text-[#333333] pl-5 leading-relaxed">
              依內政部頒「非都市土地容許使用執行要點」第 4 點附表一規定，許可使用細目「土石採取場、砂石堆置、儲運、土石碎解洗選場及其一貫作業之預拌混凝土場、瀝青拌合場」、「砂土石碎解洗選加工設施」，係由其目的事業主管機關（<strong>新北市政府經濟發展局</strong>）認定。另有關許可使用細目「營建剩餘土石方資源之暫屯、堆置、最終填埋設施」、「臨時堆置收納營建剩餘土石方」，係由其目的事業主管機關（<strong>新北市政府工務局</strong>）認定。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2 text-xs sm:text-sm">
            <h4 className="font-bold text-[#8C5A4B] flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-[#8C5A4B]" />
              <span>營建廢棄物容許與環保局權責：</span>
            </h4>
            <p className="text-[#333333] pl-5 leading-relaxed">
              至有關營建廢棄物如施工附帶產生之廢木材、廢塑膠、廢金屬、廢玻璃、廢瀝青等屬一般事業廢棄物，須依廢棄物清理法規定處理。依管制規則第 6 條第 3 項附表一規定，得於甲、乙、丙種建築用地及遊憩用地容許使用項目「公用事業設施」項下許可使用細目「一般廢棄物資源回收貯存設施」容許使用，惟依內政部頒「非都市土地容許使用執行要點」第 4 點附表一規定，許可使用細目之適用範圍，係由其目的事業主管機關（<strong>新北市政府環境保護局</strong>）認定。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2 text-xs sm:text-sm">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#1F3864]" />
              <span>丁種建築用地作磚瓦廠及原料堆置函釋（內政部 88 年 6 月 9 日台(88)內地字第 8889660 號函釋）：</span>
            </h4>
            <p className="text-[#333333] pl-5 leading-relaxed">
              另查丁種建築用地容許使用「工業設施」許可使用細目「附屬露天設施或堆置場所」，該設施係「附屬」性質，供廠房營運需求堆放原料、半成品或停放大型機械。依內政部 88 年 6 月 9 日台(88)內地字第 8889660 號函釋，丁種建築用地得容許作磚瓦廠使用，至有關丁種建築用地上作磚瓦廠使用，如其係以營建工程剩餘土作為磚瓦之原料，其得否於丁種建築用地上作磚瓦廠之附屬原料堆置使用，涉及許可使用細目認定範疇，係由其目的事業主管機關（<strong>新北市政府經濟發展局</strong>）認定。
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 四、變更編定 */}
      {/* ================================================================= */}
      <section id="soil-sec-4" className="space-y-5 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              四
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              四、變更編定
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `四、變更編定\n（一）法令規定：\n` +
                  `1. 《非都市土地使用管制規則》第 27 條：土地使用分區內各種使用地，除依第三章規定辦理使用分區及使用地變更者外，應在原使用分區範圍內申請變更編定。前項使用分區內各種使用地之變更編定原則，除本規則另有規定外，應依使用分區內各種使用地變更編定原則表如附表三辦理。\n` +
                  `2. 《非都市土地使用管制規則》第 47 條：非都市土地經核准提供政府設置廢棄物清除處理設施或營建剩餘土石方資源堆置處理場，其興辦事業計畫應包括再利用計畫，並應經各該目的事業主管機關會同有關機關審查核定。於使用完成後，得依其再利用計畫按區域計畫法相關規定申請變更編定為適當使用地。再利用計畫經修正，依前項規定之程序辦理。\n` +
                  `3. 《非都市土地變更編定執行要點》第 8 點：申請變更編定為特定目的事業用地，以各該使用區無其他適當使用地可變更編定者為限，且以政府機關或公營事業機構興辦者為主。但有下列情形之一，經直轄市或縣（市）目的事業主管機關依本規則第三十條規定徵得變更前目的事業主管機關及有關機關同意後核准其興辦事業計畫者，得申請變更編定為特定目的事業用地：……（十三）土資場相關設施。……前項各款興辦事業計畫，依規定需由中央目的事業主管機關核准者，應檢具其核准文件辦理變更編定。\n\n` +
                  `（二）用地變更程序：\n` +
                  `1. 倘經目的事業主管機關（新北市政府經濟發展局、新北市政府工務局）認定不符各該使用地容許使用項目，惟經認定符合「非都市土地變更編定執行要點」第 8 點（十三）規定屬土資場相關設施，應擬具興辦事業計畫，經徵得變更前目的事業主管機關及有關機關同意（完成環境敏感地區查詢無各該項目規定禁、限建及不得設置情事），於核准興辦事業後依非都市土地使用管制規則第 28 條規定檢附興辦事業計畫核准文件、土地使用計畫配置圖、位置圖等文件，申請變更編定為特定目的事業用地（依管制規則第 27 條附表三規定，除森林區外，其餘分區均允許申請變更編定為特定目的事業用地）。\n` +
                  `2. 申請變更編定用地倘屬山坡地範圍則須依管制規則第 52 之 1 條規定檢具免受山坡地開發面積不得少於 10 公頃限制文件。如屬既存山坡地砂石碎解洗選場可依「既存山坡地砂石碎解洗選場申請變更編定為礦業用地免受山坡地開發面積不得少於十公頃限制審查原則」向新北市政府工務局申請免受山坡地開發面積不得少於 10 公頃限制。`,
                '四、變更編定法令與程序'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製變更編定</span>
          </button>
        </div>

        {/* （一）法令規定 */}
        <div className="space-y-3">
          <h3 className="font-bold text-base text-[#1F3864] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1F3864]" />
            （一）法令規定
          </h3>

          <div className="space-y-3">
            {/* 1. 管制規則第 27 條 */}
            <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
              <span className="font-bold text-sm sm:text-base text-[#1F3864]">
                1. 《非都市土地使用管制規則》第 27 條
              </span>
              <blockquote className="text-[#333333] pl-3 border-l-2 border-[#1F3864] text-xs sm:text-sm leading-relaxed bg-[#FAF7F2]/40 p-2.5 rounded-r-lg">
                土地使用分區內各種使用地，除依第三章規定辦理使用分區及使用地變更者外，應在原使用分區範圍內申請變更編定。前項使用分區內各種使用地之變更編定原則，除本規則另有規定外，應依使用分區內各種使用地變更編定原則表如附表三辦理。
              </blockquote>
            </div>

            {/* 2. 管制規則第 47 條 */}
            <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
              <span className="font-bold text-sm sm:text-base text-[#1F3864]">
                2. 《非都市土地使用管制規則》第 47 條（再利用計畫與完成後變更編定）
              </span>
              <blockquote className="text-[#333333] pl-3 border-l-2 border-[#8C5A4B] text-xs sm:text-sm leading-relaxed bg-[#FAF7F2]/40 p-2.5 rounded-r-lg">
                非都市土地經核准提供政府設置廢棄物清除處理設施或營建剩餘土石方資源堆置處理場，其興辦事業計畫應包括再利用計畫，並應經各該目的事業主管機關會同有關機關審查核定。於使用完成後，得依其再利用計畫按區域計畫法相關規定申請變更編定為適當使用地。再利用計畫經修正，依前項規定之程序辦理。
              </blockquote>
            </div>

            {/* 3. 變更編定執行要點第 8 點 */}
            <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
              <span className="font-bold text-sm sm:text-base text-[#1F3864]">
                3. 《非都市土地變更編定執行要點》第 8 點（特定目的事業用地第十三款）
              </span>
              <blockquote className="text-[#333333] pl-3 border-l-2 border-[#1F3864] text-xs sm:text-sm leading-relaxed bg-[#FAF7F2]/40 p-2.5 rounded-r-lg">
                申請變更編定為特定目的事業用地，以各該使用區無其他適當使用地可變更編定者為限，且以政府機關或公營事業機構興辦者為主。但有下列情形之一，經直轄市或縣（市）目的事業主管機關依本規則第三十條規定徵得變更前目的事業主管機關及有關機關同意後核准其興辦事業計畫者，得申請變更編定為特定目的事業用地：……<strong className="text-[#1F3864]">（十三）土資場相關設施。</strong>……前項各款興辦事業計畫，依規定需由中央目的事業主管機關核准者，應檢具其核准文件辦理變更編定。
              </blockquote>
            </div>
          </div>
        </div>

        {/* （二）用地變更程序 */}
        <div className="space-y-3 pt-2">
          <h3 className="font-bold text-base text-[#1F3864] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1F3864]" />
            （二）用地變更程序
          </h3>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
              <div className="font-bold text-[#1F3864] flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded bg-[#1F3864] text-white text-xs font-bold">1</span>
                <span>興辦事業計畫審查與變更特定目的事業用地</span>
              </div>
              <p className="text-[#333333] pl-7 leading-relaxed">
                倘經目的事業主管機關（<strong>新北市政府經濟發展局、新北市政府工務局</strong>）認定不符各該使用地容許使用項目，惟經認定符合「非都市土地變更編定執行要點」第 8 點（十三）規定屬土資場相關設施，應擬具興辦事業計畫，經徵得變更前目的事業主管機關及有關機關同意（<strong>完成環境敏感地區查詢無各該項目規定禁、限建及不得設置情事</strong>），於核准興辦事業後依非都市土地使用管制規則第 28 條規定檢附興辦事業計畫核准文件、土地使用計畫配置圖、位置圖等文件，向新北市政府地政局申請變更編定為特定目的事業用地（依管制規則第 27 條附表三規定，<span className="text-rose-700 font-bold">除森林區外，其餘分區均允許申請變更編定為特定目的事業用地</span>）。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1.5">
              <div className="font-bold text-[#1F3864] flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded bg-[#8C5A4B] text-white text-xs font-bold">2</span>
                <span>山坡地範圍免受 10 公頃限制審查原則</span>
              </div>
              <p className="text-[#333333] pl-7 leading-relaxed">
                申請變更編定用地倘屬山坡地範圍則須依管制規則第 52 之 1 條規定檢具免受山坡地開發面積不得少於 10 公頃限制文件。如屬既存山坡地砂石碎解洗選場可依「<strong>既存山坡地砂石碎解洗選場申請變更編定為礦業用地免受山坡地開發面積不得少於十公頃限制審查原則</strong>」向<strong>新北市政府工務局</strong>申請免受山坡地開發面積不得少於 10 公頃限制。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 五、國土計畫土地使用管制情形 */}
      {/* ================================================================= */}
      <section id="soil-sec-5" className="space-y-5 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              五
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              五、國土計畫土地使用管制情形
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `五、國土計畫土地使用管制情形\n` +
                  `（一）依據國土計畫法第 22 條第 1 項規定：「直轄市、縣（市）國土計畫公告實施後，應由各該主管機關依各級國土計畫國土功能分區之劃設內容，製作國土功能分區圖及編定適當使用地，並實施管制。」及第二十三條第二項規定：「國土功能分區及其分類之使用地類別編定、變更、規模、可建築用地及其強度、應經申請同意使用項目、條件、程序、免經申請同意使用項目、禁止或限制使用及其他應遵行之土地使用管制事項之規則，由中央主管機關定之。……」爰按國土計畫法第二十一條國土功能分區及其分類之土地使用原則、全國國土計畫第九章土地使用指導事項之指導，訂定「國土計畫土地使用管制規則」（113 年 11 月法規會審竣版草案）。\n\n` +
                  `（二）依國土計畫使用管制規則第 3 條第 1 項：「各國土功能分區及其分類土地，於依本法核准使用同意、使用許可或由既有合法可建築用地變更為非可建築用地前，按本規則施行日前土地登記簿所載之使用地類別註記，並依本法第二十三條第二項至第四項所定管制規則規定之土地使用管制內容使用。」及第 4 條：「各國土功能分區及其分類土地，除本規則另有規定者外，其免經申請同意、應經申請同意、禁止或限制之使用項目及其細目依下列規定，並應符合各目的事業主管法令規定：一、國土保育地區、農業發展地區及城鄉發展地區各分類土地，依附表一規定。二、海洋資源地區各分類土地，依附表二規定。附表一及附表二容許使用項目及其細目之適用範圍，由中央主管機關會商中央目的事業主管機關認定。」，涉及土石採取及其設施、營建剩餘土石方處理設施規定整理。\n\n` +
                  `依前開使用容許表所載：\n` +
                  `1. 「土石採取及其設施」之使用細目「運輸設施」均需申請同意後方得使用；使用細目「採取土石」、「土石採取廠房暨產品加工之設施」、「砂石堆置、儲運、土石碎解洗選場及其一貫作業之預拌混凝土場、瀝青拌合場」、「其他在土石業上必要之工程設施及附屬設備」在農 1、農 2、農 4、城 2-1、城 3 禁止使用，在國 2、農 3 應經申請同意使用，在國 1 限於「由中央目的事業主管機關報經行政院核定之土石資源開發計畫（土石採取專區）」，並依行政院核定「砂石穩定供應推動方案」逐項檢討各供應措施均無法滿足需求，並「經中央目的事業主管機關會商相關機關審認具有區位不可替代性」，始得申請使用。\n` +
                  `2. 「砂土石碎解洗選加工設施」之使用細目「砂土石碎解洗選設施廠房或相關加工設施」、「砂土石堆置、儲運場」、「附屬之預拌混凝土廠、瀝青拌合廠及辦公廳、員工宿舍、倉庫」、「附屬之加儲油（氣）設施」、「環境保護及景觀維護設施」、「其他必要之砂土石碎解洗選加工設施」在國 1、農 1、農 2、農 4、城 2-1、城 3 禁止使用，於國 2、農 3 均需申請同意後方得使用。\n` +
                  `3. 「營建剩餘土石方處理設施」之使用細目如下：\n` +
                  `(1)「填埋型土石方資源堆置處理場」在國 1、農 1、農 4、城 2-1、城 3 禁止使用，在國 2、農 2、農 3 限於依「營建剩餘土石方處理方案」及地方自治法規有關收容處理場所設置地點規定辦理者。\n` +
                  `(2)「非填埋型土石方資源堆置處理場」在國 1、農 1、農 4、城 3 禁止使用，在國 2、農 3、城 2-1 限於依「營建剩餘土石方處理方案」及地方自治法規有關收容處理場所設置地點規定辦理者，在農 2 限於依「營建剩餘土石方處理方案」及地方自治法規有關收容處理場所設置地點規定辦理者，且應距離交流道路權範圍之邊界一公里內。\n` +
                  `(3)「其他經政府機關依法核准暫置營建剩餘土石方之場所」在國 1、農 1、農 4 禁止使用，在國 2、農 2、農 3、城 2-1、城 3 限於依「營建剩餘土石方處理方案」及地方自治法規有關收容處理場所設置地點規定辦理者，且僅供暫屯或堆置之轉運型場所。\n` +
                  `4. 另有關「工業設施」之使用細目「附屬露天設施或堆置場所」僅限於國土計畫使用管制規則依第三條第一項規定註記之丁種建築用地容許使用。`,
                '五、國土計畫管制情形'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製國土計畫</span>
          </button>
        </div>

        {/* （一）與（二）條文依據卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">（一）</span>
              <h3 className="font-bold text-sm sm:text-base text-[#1F3864]">國土計畫法依據</h3>
            </div>
            <div className="text-[#333333] pl-3 border-l-2 border-[#1F3864]/40 leading-relaxed space-y-1.5">
              <p>
                依據國土計畫法第 22 條第 1 項規定：「直轄市、縣（市）國土計畫公告實施後，應由各該主管機關依各級國土計畫國土功能分區之劃設內容，製作國土功能分區圖及編定適當使用地，並實施管制。」
              </p>
              <p>
                及第二十三條第二項規定：「國土功能分區及其分類之使用地類別編定、變更、規模、可建築用地及其強度、應經申請同意使用項目、條件、程序、免經申請同意使用項目、禁止或限制使用及其他應遵行之土地使用管制事項之規則，由中央主管機關定之。……」
              </p>
              <p className="text-[#7D7065]">
                爰按國土計畫法第二十一條國土功能分區及其分類之土地使用原則、全國國土計畫第九章土地使用指導事項之指導，訂定「國土計畫土地使用管制規則」（113 年 11 月法規會審竣版草案）。
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#8C5A4B] text-white">（二）</span>
              <h3 className="font-bold text-sm sm:text-base text-[#8C5A4B]">管制規則草案依據</h3>
            </div>
            <div className="text-[#333333] pl-3 border-l-2 border-[#8C5A4B]/40 leading-relaxed space-y-1.5">
              <p>
                依國土計畫使用管制規則第 3 條第 1 項：「各國土功能分區及其分類土地，於依本法核准使用同意、使用許可或由既有合法可建築用地變更為非可建築用地前，按本規則施行日前土地登記簿所載之使用地類別註記，並依本法第二十三條第二項至第四項所定管制規則規定之土地使用管制內容使用。」
              </p>
              <p>
                及第 4 條：「各國土功能分區及其分類土地，除本規則另有規定者外，其免經申請同意、應經申請同意、禁止或限制之使用項目及其細目依下列規定，並應符合各目的事業主管法令規定：一、國土保育地區、農業發展地區及城鄉發展地區各分類土地，依附表一規定。二、海洋資源地區各分類土地，依附表二規定。附表一及附表二容許使用項目及其細目之適用範圍，由中央主管機關會商中央目的事業主管機關認定。」，涉及土石採取及其設施、營建剩餘土石方處理設施規定整理如下表：
              </p>
            </div>
          </div>
        </div>

        {/* 國土保育、農發、城鄉容許使用情形表 */}
        <div className="space-y-3 pt-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-2">
              <Table className="w-4 h-4 text-[#8C5A4B]" />
              <span>附表一 國土保育地區、農業發展地區、城鄉發展地區容許使用情形表</span>
            </h3>
            <span className="text-xs text-[#7D7065]">
              👉 支援左右滑動檢視各分區代碼與詳細備註
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] shadow-2xs bg-white">
            <table className="w-full text-center border-collapse text-xs">
              <thead>
                <tr className="bg-[#1F3864] text-white">
                  <th className="py-2 px-1 font-bold border-r border-white/20 whitespace-nowrap w-8 text-center">編號</th>
                  <th className="py-2 px-2 font-bold border-r border-white/20 whitespace-nowrap w-12 text-left">群組</th>
                  <th className="py-2 px-2 font-bold border-r border-white/20 whitespace-nowrap w-16 text-left">項次</th>
                  <th className="py-2 px-2 font-bold border-r border-white/20 min-w-[110px] text-left">使用項目</th>
                  <th className="py-2 px-3 font-bold border-r border-white/20 min-w-[150px] text-left">使用細目</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20 min-w-[34px]">國1</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20 min-w-[34px]">國2</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20 min-w-[34px]">農1</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20 min-w-[34px]">農2</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20 min-w-[34px]">農3</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20 min-w-[42px]">農4<br /><span className="text-[10px] font-normal">(非原)</span></th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20 min-w-[42px]">農4<br /><span className="text-[10px] font-normal">(原)</span></th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20 min-w-[38px]">城2-1</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20 min-w-[34px]">城3</th>
                  <th className="py-2 px-3 font-bold text-left min-w-[220px]">備註</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C7]">
                {/* 4-2 土石採取及其設施 */}
                <tr className="hover:bg-[#FAF7F2]">
                  <td rowSpan={14} className="py-2 px-1 font-bold text-[#1F3864] bg-[#FAF7F2]/60 border-r border-[#DDD5C7]">4</td>
                  <td rowSpan={14} className="py-2 px-2 text-left font-bold text-[#1F3864] bg-[#FAF7F2]/60 border-r border-[#DDD5C7]">礦業</td>
                  <td rowSpan={5} className="py-2 px-2 text-left font-semibold text-[#333333] border-r border-[#DDD5C7] align-top">4-2</td>
                  <td rowSpan={5} className="py-2 px-2 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7] align-top">
                    土石採取及其設施
                  </td>
                  <td className="py-2 px-3 text-left font-medium text-[#333333] border-r border-[#DDD5C7]">採取土石</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td rowSpan={5} className="py-2 px-3 text-left text-[11px] leading-tight space-y-1 align-top bg-[#FAF7F2]/30">
                    <p className="font-semibold text-[#1F3864]">①: 限於「由中央目的事業主管機關報經行政院核定之土石資源開發計畫（土石採取專區）」</p>
                    <p className="text-[#4A3E39]">並依行政院核定「砂石穩定供應推動方案」逐項檢討各供應措施均無法滿足需求，並「經中央目的事業主管機關會商相關機關審認具有區位不可替代性」，始得申請使用。</p>
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2 px-3 text-left font-medium text-[#333333] border-r border-[#DDD5C7]">土石採取廠房暨產品加工之設施</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2 px-3 text-left font-medium text-[#333333] border-r border-[#DDD5C7]">砂石堆置、儲運、土石碎解洗選場及其一貫作業之預拌混凝土場、瀝青拌合場</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2 px-3 text-left font-medium text-[#333333] border-r border-[#DDD5C7]">運輸設施</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2 px-3 text-left font-medium text-[#333333] border-r border-[#DDD5C7]">其他在土石業上必要之工程設施及附屬設備</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                </tr>

                {/* 4-3 砂土石碎解洗選加工設施 */}
                <tr className="hover:bg-[#FAF7F2]">
                  <td rowSpan={6} className="py-2 px-2 text-left font-semibold text-[#333333] border-r border-[#DDD5C7] align-top">4-3</td>
                  <td rowSpan={6} className="py-2 px-2 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7] align-top">
                    砂土石碎解洗選加工設施
                  </td>
                  <td className="py-2 px-3 text-left font-medium text-[#333333] border-r border-[#DDD5C7]">砂土石碎解洗選設施廠房或相關加工設施</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td rowSpan={6} className="py-2 px-3 text-left text-[11px] text-[#7D7065] align-top bg-[#FAF7F2]/30">
                    —
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2 px-3 text-left font-medium text-[#333333] border-r border-[#DDD5C7]">砂土石堆置、儲運場</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2 px-3 text-left font-medium text-[#333333] border-r border-[#DDD5C7]">附屬之預拌混凝土廠、瀝青拌合廠及辦公廳、員工宿舍、倉庫</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2 px-3 text-left font-medium text-[#333333] border-r border-[#DDD5C7]">附屬之加儲油（氣）設施</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2 px-3 text-left font-medium text-[#333333] border-r border-[#DDD5C7]">環境保護及景觀維護設施</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2 px-3 text-left font-medium text-[#333333] border-r border-[#DDD5C7]">其他必要之砂土石碎解洗選加工設施</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                </tr>

                {/* 4-6 營建剩餘土石方處理設施 */}
                <tr className="hover:bg-[#FAF7F2]">
                  <td rowSpan={3} className="py-2 px-2 text-left font-semibold text-[#333333] border-r border-[#DDD5C7] align-top">4-6</td>
                  <td rowSpan={3} className="py-2 px-2 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7] align-top">
                    營建剩餘土石方處理設施
                  </td>
                  <td className="py-2 px-3 text-left font-medium text-[#333333] border-r border-[#DDD5C7]">填埋型土石方資源堆置處理場</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-3 text-left text-[11px] leading-tight text-[#4A3E39] align-top">
                    ①: 限於依「營建剩餘土石方處理方案」及地方自治法規有關收容處理場所設置地點規定辦理者。
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2 px-3 text-left font-medium text-[#333333] border-r border-[#DDD5C7]">非填埋型土石方資源堆置處理場</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#8C5A4B]">②</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-3 text-left text-[11px] leading-tight space-y-1 align-top">
                    <p>①: 限於依「營建剩餘土石方處理方案」及地方自治法規有關收容處理場所設置地點規定辦理者。</p>
                    <p className="font-semibold text-[#8C5A4B]">②: 限於依「營建剩餘土石方處理方案」及地方自治法規有關收容處理場所設置地點規定辦理者，且應距離交流道路權範圍之邊界一公里內。</p>
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2 px-3 text-left font-medium text-[#333333] border-r border-[#DDD5C7]">其他經政府機關依法核准暫置營建剩餘土石方之場所</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2 px-3 text-left text-[11px] leading-tight text-[#4A3E39] align-top">
                    ①: 限於依「營建剩餘土石方處理方案」及地方自治法規有關收容處理場所設置地點規定辦理者，且僅供暫屯或堆置之轉運型場所。
                  </td>
                </tr>

                {/* 5-3 工業設施 */}
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2 px-1 font-bold text-[#8C5A4B] bg-[#FAF7F2]/60 border-r border-[#DDD5C7]">5</td>
                  <td className="py-2 px-2 text-left font-bold text-[#8C5A4B] bg-[#FAF7F2]/60 border-r border-[#DDD5C7]">工業</td>
                  <td className="py-2 px-2 text-left font-semibold text-[#333333] border-r border-[#DDD5C7]">5-3</td>
                  <td className="py-2 px-2 text-left font-bold text-[#8C5A4B] border-r border-[#DDD5C7]">工業設施</td>
                  <td className="py-2 px-3 text-left font-medium text-[#333333] border-r border-[#DDD5C7]">附屬露天設施或堆置場所</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-black text-[#1F3864]">➊</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-black text-[#1F3864]">➊</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-black text-[#1F3864]">➊</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-black text-[#1F3864]">➊</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-black text-[#1F3864]">➊</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-black text-[#1F3864]">➊</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-black text-[#1F3864]">➊</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-black text-[#1F3864]">➊</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-black text-[#1F3864]">➊</td>
                  <td className="py-2 px-3 text-left text-[11px] leading-tight font-medium text-[#1F3864] align-top">
                    ➊: 限於依第三條第一項規定註記之丁種建築用地。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 符號定義說明 */}
          <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] text-xs space-y-1.5">
            <span className="font-bold text-[#1F3864]">符號註記說明：</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[#4A3E39]">
              <p>
                <strong className="text-[#1F3864]">一、「●」/ ➊</strong> 代表免經申請同意使用；➊ 代表符合備註欄位之條件者，得免經申請同意使用，未符合者禁止使用。
              </p>
              <p>
                <strong className="text-emerald-800">二、「○」/ ① / ②</strong> 代表應經申請同意使用；①、② 代表符合備註欄位之條件者，得應經申請同意使用，未符合者禁止使用。
              </p>
              <p>
                <strong className="text-rose-700">三、「╳」</strong> 代表禁止使用。
              </p>
            </div>
          </div>
        </div>

        {/* 依前開使用容許表所載（4 大點深入解說） */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <CheckCircle2 className="w-4 h-4 text-[#1F3864]" />
            <h3 className="font-bold text-sm sm:text-base text-[#1F3864]">
              依前開使用容許表所載：
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <span className="font-bold text-[#1F3864] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs flex items-center justify-center font-bold">1</span>
                <span>「土石採取及其設施」之使用細目管制</span>
              </span>
              <p className="text-[#333333] pl-6 leading-relaxed">
                「<strong>土石採取及其設施</strong>」之使用細目「<strong>運輸設施</strong>」均需申請同意後方得使用；使用細目「<strong>採取土石</strong>」、「<strong>土石採取廠房暨產品加工之設施</strong>」、「<strong>砂石堆置、儲運、土石碎解洗選場及其一貫作業之預拌混凝土場、瀝青拌合場</strong>」、「<strong>其他在土石業上必要之工程設施及附屬設備</strong>」在<strong>農 1、農 2、農 4、城 2-1、城 3 禁止使用</strong>，在<strong>國 2、農 3 應經申請同意使用</strong>，在<strong>國 1 限於「由中央目的事業主管機關報經行政院核定之土石資源開發計畫（土石採取專區）」</strong>，並依行政院核定「砂石穩定供應推動方案」逐項檢討各供應措施均無法滿足需求，並「經中央目的事業主管機關會商相關機關審認具有區位不可替代性」，始得申請使用。
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <span className="font-bold text-[#1F3864] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs flex items-center justify-center font-bold">2</span>
                <span>「砂土石碎解洗選加工設施」之使用細目管制</span>
              </span>
              <p className="text-[#333333] pl-6 leading-relaxed">
                「<strong>砂土石碎解洗選加工設施</strong>」之使用細目「<strong>砂土石碎解洗選設施廠房或相關加工設施</strong>」、「<strong>砂土石堆置、儲運場</strong>」、「<strong>附屬之預拌混凝土廠、瀝青拌合廠及辦公廳、員工宿舍、倉庫</strong>」、「<strong>附屬之加儲油（氣）設施</strong>」、「<strong>環境保護及景觀維護設施</strong>」、「<strong>其他必要之砂土石碎解洗選加工設施</strong>」在<strong>國 1、農 1、農 2、農 4、城 2-1、城 3 禁止使用</strong>，於<strong>國 2、農 3 均需申請同意後方得使用</strong>。
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
              <span className="font-bold text-[#8C5A4B] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#8C5A4B] text-white text-xs flex items-center justify-center font-bold">3</span>
                <span>「營建剩餘土石方處理設施」之使用細目管制</span>
              </span>
              <div className="pl-6 space-y-1.5 text-[#333333]">
                <p>
                  <strong>(1)「填埋型土石方資源堆置處理場」：</strong>在<strong>國 1、農 1、農 4、城 2-1、城 3 禁止使用</strong>，在<strong>國 2、農 2、農 3 限於依「營建剩餘土石方處理方案」及地方自治法規有關收容處理場所設置地點規定辦理者</strong>。
                </p>
                <p>
                  <strong>(2)「非填埋型土石方資源堆置處理場」：</strong>在<strong>國 1、農 1、農 4、城 3 禁止使用</strong>，在<strong>國 2、農 3、城 2-1 限於依「營建剩餘土石方處理方案」及地方自治法規有關收容處理場所設置地點規定辦理者</strong>，在<strong>農 2 限於依「營建剩餘土石方處理方案」及地方自治法規有關收容處理場所設置地點規定辦理者，且應距離交流道路權範圍之邊界一公里內</strong>。
                </p>
                <p>
                  <strong>(3)「其他經政府機關依法核准暫置營建剩餘土石方之場所」：</strong>在<strong>國 1、農 1、農 4 禁止使用</strong>，在<strong>國 2、農 2、農 3、城 2-1、城 3 限於依「營建剩餘土石方處理方案」及地方自治法規有關收容處理場所設置地點規定辦理者，且僅供暫屯或堆置之轉運型場所</strong>。
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <span className="font-bold text-[#1F3864] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs flex items-center justify-center font-bold">4</span>
                <span>「工業設施」附屬露天設施或堆置場所</span>
              </span>
              <p className="text-[#333333] pl-6 leading-relaxed">
                另有關「<strong>工業設施</strong>」之使用細目「<strong>附屬露天設施或堆置場所</strong>」僅限於國土計畫使用管制規則依第三條第一項規定註記之<strong>丁種建築用地容許使用</strong>。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 六、結論 */}
      {/* ================================================================= */}
      <section id="soil-sec-6" className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              六
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              六、結論
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `六、結論\n因現行規定無法全面涵蓋土資場的管理細節，部分違規案件也欠缺裁罰依據，難以達到嚇阻作用，新北市議會於 114 年 10 月 23 日三讀通過「新北市營建剩餘土石方管理自治條例」，明確規範土資場的設置規模、啟用營運相關程序，避免在施工過程造成環境污染或公共安全隱憂，並增定運送餘土車輛裝設即時追蹤系統（GPS）與罰則，完備土石方流向管理機制，自治條例於報請中央主管機關核定後公布施行，制定自治條例將可有效補強現行規範的不足。`,
                '六、結論'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製結論</span>
          </button>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <p className="text-[#333333] leading-relaxed text-sm sm:text-base">
            因現行規定無法全面涵蓋土資場的管理細節，部分違規案件也欠缺裁罰依據，難以達到嚇阻作用，<strong>新北市議會於 114 年 10 月 23 日三讀通過「新北市營建剩餘土石方管理自治條例」</strong>，明確規範土資場的設置規模、啟用營運相關程序，避免在施工過程造成環境污染或公共安全隱憂，並增定運送餘土車輛裝設即時追蹤系統（GPS）與罰則，完備土石方流向管理機制，自治條例於報請中央主管機關核定後公布施行，制定自治條例將可有效補強現行規範的不足。
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 七、參考資料 */}
      {/* ================================================================= */}
      <section id="soil-sec-7" className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              七
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              七、參考資料
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `七、參考資料\n(一)營建剩餘土石方處理方案。\n(二)新北市營建工程剩餘土石方處理及營建混合物資源處理場設置管理要點。\n(三)既存山坡地砂石碎解洗選場申請變更編定為礦業用地免受山坡地開發面積不得少於十公頃限制審查原則。\n(四)非都市土地申請變更編定為礦業用地興辦事業計畫審查作業要點。\n(五)土石採取法。\n(六)採取土石免申辦土石採取許可管理辦法。\n(七)非都市土地農牧用地容許採取土石審查作業要點。\n(八)國土計畫土地使用管制規則（113 年 11 月法規會審竣版草案）。\n(九)深坑區OO段OO小段 OO、OO-OO 地號等 2 筆土地，申請變更編定為特定目的事業用地作營建剩餘土石方資源堆置處理場使用（文號：0910549177）。\n(十)萬里區OO段OO小段 OO 地號等 18 筆土地，申請變更編定為特定專用區特定目的事業用地、國土保安用地作「萬里中幅子土石方收容場（最終填埋型）」開發使用（文號：1100881743）。\n(十一)萬里區OO段OO小段 OO-OO 地號等 12 筆土地，申請變更編定為特定專用區特定目的事業用地、國土保安用地作「萬里中幅子土石方收容場（最終填埋型）」開發使用（文號：1101218491）。\n(十二)萬里區OO段OO小段 OO-OO 地號等 8 筆土地，申請變更編定為礦業用地、交通用地作砂石儲運場使用（文號：1080776628）。`,
                '七、參考資料與核准案例'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製參考資料</span>
          </button>
        </div>

        <div className="space-y-3">
          {/* 法規與要點清單 */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2 text-xs sm:text-sm">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 pb-1 border-b border-[#ECE6DB]">
              <BookOpen className="w-4 h-4 text-[#8C5A4B]" />
              <span>相關中央與地方主管法令</span>
            </h4>
            <ul className="space-y-1.5 text-[#333333] pt-1">
              <li><strong>(一)</strong> 營建剩餘土石方處理方案。</li>
              <li><strong>(二)</strong> 新北市營建工程剩餘土石方處理及營建混合物資源處理場設置管理要點。</li>
              <li><strong>(三)</strong> 既存山坡地砂石碎解洗選場申請變更編定為礦業用地免受山坡地開發面積不得少於十公頃限制審查原則。</li>
              <li><strong>(四)</strong> 非都市土地申請變更編定為礦業用地興辦事業計畫審查作業要點。</li>
              <li><strong>(五)</strong> 土石採取法。</li>
              <li><strong>(六)</strong> 採取土石免申辦土石採取許可管理辦法。</li>
              <li><strong>(七)</strong> 非都市土地農牧用地容許採取土石審查作業要點。</li>
              <li><strong>(八)</strong> 國土計畫土地使用管制規則（113 年 11 月法規會審竣版草案）。</li>
            </ul>
          </div>

          {/* 新北市核准變更編定與開發許可案例清單 */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] shadow-2xs space-y-2.5 text-xs sm:text-sm">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5 pb-1 border-b border-[#DDD5C7]">
              <MapPin className="w-4 h-4 text-[#8C5A4B]" />
              <span>新北市已核准土資場與收容場用地變更實務案例</span>
            </h4>
            <div className="space-y-2 text-[#333333]">
              <div className="p-2.5 rounded-lg bg-white border border-[#DDD5C7]">
                <strong className="text-[#1F3864]">(九) 深坑區OO段OO小段 OO、OO-OO 地號等 2 筆土地：</strong>
                <p className="mt-0.5">申請變更編定為特定目的事業用地作營建剩餘土石方資源堆置處理場使用（<strong>文號：0910549177</strong>）。</p>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-[#DDD5C7]">
                <strong className="text-[#1F3864]">(十) 萬里區OO段OO小段 OO 地號等 18 筆土地：</strong>
                <p className="mt-0.5">申請變更編定為特定專用區特定目的事業用地、國土保安用地作「<strong>萬里中幅子土石方收容場（最終填埋型）</strong>」開發使用（<strong>文號：1100881743</strong>）。</p>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-[#DDD5C7]">
                <strong className="text-[#1F3864]">(十一) 萬里區OO段OO小段 OO-OO 地號等 12 筆土地：</strong>
                <p className="mt-0.5">申請變更編定為特定專用區特定目的事業用地、國土保安用地作「<strong>萬里中幅子土石方收容場（最終填埋型）</strong>」開發使用（<strong>文號：1101218491</strong>）。</p>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-[#DDD5C7]">
                <strong className="text-[#1F3864]">(十二) 萬里區OO段OO小段 OO-OO 地號等 8 筆土地：</strong>
                <p className="mt-0.5">申請變更編定為礦業用地、交通用地作<strong>砂石儲運場</strong>使用（<strong>文號：1080776628</strong>）。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
