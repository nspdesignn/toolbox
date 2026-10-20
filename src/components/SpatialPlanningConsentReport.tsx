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
  Workflow
} from 'lucide-react';

interface SpatialPlanningConsentReportProps {
  onCopy?: (text: string, label: string) => void;
}

export const SpatialPlanningConsentReport: React.FC<SpatialPlanningConsentReportProps> = ({ onCopy }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, text: string, title: string) => {
    if (onCopy) {
      onCopy(text, title);
    } else {
      navigator.clipboard.writeText(text);
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-8 text-[#2D2623] leading-relaxed text-sm sm:text-base">
      {/* 報告首頁資訊 Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1F3864]/5 via-[#FAF7F2] to-[#8C5A4B]/10 border border-[#DDD5C7] shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DDD5C7] pb-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1F3864] text-white text-xs font-bold mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>國土計畫新制 · 專題報告主題 6</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#1F3864] tracking-tight">
              國土計畫應經申請同意作業方式
            </h2>
            <p className="text-xs sm:text-sm text-[#7D7065] mt-1 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#8C5A4B]" />
              <span>日期：115.3.17（依《應經申請同意.pdf》全文 15 頁 100% 忠實完整收錄）</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/assets/aistudio/_______993b8a97.pdf"
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
              href="#consent-sec-1"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                一
              </span>
              <span>制度緣起與核心精神</span>
            </a>
            <a
              href="#consent-sec-2"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                二
              </span>
              <span>制度核心重點：簡政與數位化</span>
            </a>
            <a
              href="#consent-sec-3"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                三
              </span>
              <span>審查規定架構說明與流程圖</span>
            </a>
            <a
              href="#consent-sec-4"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                四
              </span>
              <span>申請實務與應備書件（含管制強度）</span>
            </a>
            <a
              href="#consent-sec-5"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                五
              </span>
              <span>核准後管理機制（變更/廢止）</span>
            </a>
            <a
              href="#consent-sec-6"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                六
              </span>
              <span>結論與未來展望</span>
            </a>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 一、制度緣起與核心精神 */}
      {/* ===================================================================== */}
      <section id="consent-sec-1" className="space-y-5 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              一
            </span>
            <span>制度緣起與核心精神</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-1',
                `一、制度緣起與核心精神
（一）國土計畫法之立法精神
「國土計畫法」的推動代表臺灣土地管理從「個案變更」轉向「計畫引導」。過去非都市土地透過零星的變更編定來滿足開發需求，導致破碎化利用，新制則建立在「國土功能分區」之上，所有新的利用必須符合該分區的指導原則。
（二）土地使用管制的架構
依據「國土計畫土地使用管制規則」（草案），土地使用程序依性質與規模劃分為四類：
1、免經申請同意（實心圓 ●，圈內有數字❶❷則為備註條件）：對環境影響極微，屬基礎或既有之容許使用。
2、應經申請同意（空心圓 ○，圈內有數字①②則為備註條件）：性質較為單純但需經主管機關確認管制事項之項目。
3、使用許可（實心圓 ●＋一定規模或性質特殊、空心圓 ○＋一定規模或性質特殊）：大規模開發或性質特殊案件。
4、禁止使用（X、實心圓 ❶❷不符合備註條件、空心圓 ①②不符合備註條件）：與該國土功能分區分類性質不相符，除准修繕外，不得增建或改建。
（三）應經申請同意之定義
應經申請同意係指申請人於從事國土計畫法規定之土地使用行為前，雖該行為屬於該分區「容許使用」之範疇，但因其具有一定的空間影響力，仍需報請直轄市、縣（市）國土計畫主管機關，針對其土地使用管制事項進行審查並取得同意之程序。`,
                '制度緣起與核心精神'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-1' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        {/* （一）國土計畫法之立法精神 */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-2">
          <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
            <span className="text-[#8C5A4B]">（一）</span>
            <span>國土計畫法之立法精神</span>
          </h4>
          <p className="text-[#4A3E39] text-xs sm:text-sm leading-relaxed">
            「國土計畫法」的推動代表臺灣土地管理從<strong className="text-[#1F3864]">「個案變更」</strong>轉向
            <strong className="text-[#8C5A4B]">「計畫引導」</strong>
            。過去非都市土地透過零星的變更編定來滿足開發需求，導致破碎化利用，新制則建立在
            <strong className="text-[#1F3864]">「國土功能分區」</strong>
            之上，所有新的利用必須符合該分區的指導原則。
          </p>
        </div>

        {/* （二）土地使用管制的架構 */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-3">
          <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
            <span className="text-[#8C5A4B]">（二）</span>
            <span>土地使用管制的架構</span>
          </h4>
          <p className="text-[#4A3E39] text-xs sm:text-sm">
            依據「國土計畫土地使用管制規則」（草案），土地使用程序依性質與規模劃分為四類：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200">
              <div className="font-bold text-emerald-900 flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
                  1
                </span>
                <span>免經申請同意（實心圓 ●，圈內有數字 ❶❷ 則為備註條件）</span>
              </div>
              <p className="text-emerald-800 leading-relaxed pl-7">
                對環境影響極微，屬基礎或既有之容許使用。
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-blue-50/70 border border-blue-200">
              <div className="font-bold text-blue-900 flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                  2
                </span>
                <span>應經申請同意（空心圓 ○，圈內有數字 ①② 則為備註條件）</span>
              </div>
              <p className="text-blue-800 leading-relaxed pl-7">
                性質較為單純但需經主管機關確認管制事項之項目。
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200">
              <div className="font-bold text-amber-900 flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs">
                  3
                </span>
                <span>使用許可（實心圓 ●＋一定規模或性質特殊、空心圓 ○＋一定規模或性質特殊）</span>
              </div>
              <p className="text-amber-800 leading-relaxed pl-7">大規模開發或性質特殊案件。</p>
            </div>

            <div className="p-3.5 rounded-lg bg-rose-50/70 border border-rose-200">
              <div className="font-bold text-rose-900 flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs">
                  4
                </span>
                <span>禁止使用（X、實心圓 ❶❷ 不符合備註條件、空心圓 ①② 不符合備註條件）</span>
              </div>
              <p className="text-rose-800 leading-relaxed pl-7">
                與該國土功能分區分類性質不相符，除准修繕外，不得增建或改建。
              </p>
            </div>
          </div>
        </div>

        {/* （三）應經申請同意之定義 */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-2">
          <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
            <span className="text-[#8C5A4B]">（三）</span>
            <span>應經申請同意之定義</span>
          </h4>
          <p className="text-[#4A3E39] text-xs sm:text-sm leading-relaxed pl-2 border-l-2 border-[#8C5A4B]">
            應經申請同意係指申請人於從事國土計畫法規定之土地使用行為前，雖該行為屬於該分區「容許使用」之範疇，但因其具有一定的空間影響力，仍需報請直轄市、縣（市）國土計畫主管機關，針對其土地使用管制事項進行審查並取得同意之程序。
          </p>
        </div>

        {/* （四）應經申請同意之規模認定準則 */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-4">
          <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
            <span className="text-[#8C5A4B]">（四）</span>
            <span>應經申請同意之規模認定準則</span>
          </h4>
          <div className="space-y-3 text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
            <p>
              <strong>1、</strong>本制度主要適用於「一定規模或性質特殊」之空心圓（○）容許使用項目。若開發規模超過特定面積（詳「一定規模以上或性質特殊土地申請使用許可認定標準」），則必須上升為「使用許可」。因此，「應經申請同意」是介於小規模日常使用與大型開發案之間的關鍵管理機制。
            </p>
            <p>
              <strong>2、</strong>另外參照「國土計畫土地使用管制規則」（草案）第 10 條規定，符合產業創新條例第 65
              條規定需設置污染防治設備者，得於毗連之農業發展地區第 2 類、第 3 類或城鄉發展地區第 2 類之 1 土地申請使用。
            </p>
            <div>
              <p className="font-bold text-[#1F3864] mb-2">3、適用項目舉例</p>

              {/* 附表一節錄 */}
              <div className="mb-4 space-y-2">
                <span className="text-xs font-bold text-[#8C5A4B]">
                  ● 管制規則（草案）附表一 國土保育地區、農業發展地區、城鄉發展地區容許使用情形表（節錄）
                </span>
                <div className="overflow-x-auto rounded-lg border border-[#DDD5C7] bg-white">
                  <table className="w-full text-xs text-center border-collapse">
                    <thead className="bg-[#1F3864] text-white">
                      <tr>
                        <th className="p-2 border border-[#DDD5C7]">使用項目</th>
                        <th className="p-2 border border-[#DDD5C7]">國 1</th>
                        <th className="p-2 border border-[#DDD5C7]">國 2</th>
                        <th className="p-2 border border-[#DDD5C7]">農 1</th>
                        <th className="p-2 border border-[#DDD5C7]">農 2</th>
                        <th className="p-2 border border-[#DDD5C7]">農 3</th>
                        <th className="p-2 border border-[#DDD5C7]">農 4</th>
                        <th className="p-2 border border-[#DDD5C7]">城 2-1</th>
                        <th className="p-2 border border-[#DDD5C7] text-left">備註</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-amber-50/40">
                        <td className="p-2 font-bold text-[#1F3864] border border-[#DDD5C7]">住宅</td>
                        <td className="p-2 border border-[#DDD5C7]">❶②</td>
                        <td className="p-2 border border-[#DDD5C7]">❶②</td>
                        <td className="p-2 border border-[#DDD5C7]">❶②</td>
                        <td className="p-2 border border-[#DDD5C7]">❶②</td>
                        <td className="p-2 border border-[#DDD5C7]">❶②</td>
                        <td className="p-2 border border-[#DDD5C7]">❶○</td>
                        <td className="p-2 border border-[#DDD5C7]">❶○</td>
                        <td className="p-2 border border-[#DDD5C7] text-left">
                          <div>❶：限於原甲建、乙建、丙建</div>
                          <div>②：限於原丁建</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 附表二節錄 */}
              <div className="mb-4 space-y-2">
                <span className="text-xs font-bold text-[#8C5A4B]">
                  ● 管制規則（草案）附表二 海洋資源地區容許使用情形表（節錄）
                </span>
                <div className="overflow-x-auto rounded-lg border border-[#DDD5C7] bg-white">
                  <table className="w-full text-xs text-center border-collapse">
                    <thead className="bg-[#1F3864] text-white">
                      <tr>
                        <th className="p-2 border border-[#DDD5C7]">使用項目</th>
                        <th className="p-2 border border-[#DDD5C7]">海 1-1</th>
                        <th className="p-2 border border-[#DDD5C7]">海 1-2</th>
                        <th className="p-2 border border-[#DDD5C7]">海 2</th>
                        <th className="p-2 border border-[#DDD5C7]">海 3</th>
                        <th className="p-2 border border-[#DDD5C7] text-left">備註</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-amber-50/40">
                        <td className="p-2 font-bold text-[#1F3864] border border-[#DDD5C7]">海底電纜、管道及相關設施</td>
                        <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">○</td>
                        <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">○</td>
                        <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">○</td>
                        <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">○</td>
                        <td className="p-2 border border-[#DDD5C7] text-left text-gray-400">（無特殊備註限制）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 解說細項 */}
              <div className="space-y-2.5 p-3.5 rounded-lg bg-white border border-[#DDD5C7]">
                <p>
                  <strong>（1）</strong>以附表一為例，如果是原依區域計畫法編定之甲、乙、丙建，在以上分區做住宅都是
                  <strong className="text-emerald-700">免經申請</strong>（僅限未達一定規模）；如果是原依區域計畫法編定之丁建，在國 1、2 及農 1、2、3 做住宅都是
                  <strong className="text-blue-700">應經申請</strong>（僅限未達一定規模）；如果不是原依區域計畫法編定之甲、乙、丙、丁建，在農 4、城 2-1 做住宅都是
                  <strong className="text-blue-700">應經申請</strong>（僅限未達一定規模），其他分區都是
                  <strong className="text-rose-700">禁止做住宅使用</strong>（如果是來不及辦更正編定的既有合法建物則可修繕）。
                </p>
                <p>
                  <strong>（2）</strong>如金瓜石地區的特專特目用地，聚落範圍未來將劃設為城 2-1，城 2-1 做住宅使用為空心圓（○），故得應經申請同意做住宅使用，惟面積倘達 5 公頃以上，應申請使用許可。
                </p>
                <p className="text-amber-900 bg-amber-50/60 p-2.5 rounded border border-amber-200">
                  <strong>（3）特別注意：</strong>農業發展地區第 4 類、城鄉發展地區第 2 類之 1 土地，如非屬原鄉村區或特定專用區土地，位屬山坡地範圍者依農業發展地區第 3 類規定使用，其餘土地依農業發展地區第 2 類規定使用。
                </p>
                <p>
                  <strong>（4）</strong>以附表二為例，鋪設海底電纜無論何種海洋資源地區都是應經申請。
                </p>
                <p>
                  <strong>（5）</strong>如中華電信擬於本市海域鋪設海底電纜，海 1-1、海 1-2、海 2 及海 3 做海底電纜都是空心圓（○），故得應經申請同意做海底電纜使用，又海底電纜無論面積多少皆免申請使用許可。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 國土計畫土地使用管制架構流程圖（對應簡報第 3 頁圖表） */}
        <div className="p-4 sm:p-6 rounded-xl bg-white border border-[#DDD5C7] shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-[#DDD5C7] pb-2">
            <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
              <Workflow className="w-5 h-5 text-[#8C5A4B]" />
              <span>國土計畫土地使用管制架構流程圖（原件第 3 頁圖解）</span>
            </h4>
            <span className="text-xs text-[#7D7065]">同一國土功能分區分類下之土地使用</span>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7]">
            {/* 頂層 */}
            <div className="text-center mb-6">
              <div className="inline-block px-5 py-2 rounded-xl bg-[#1F3864] text-white font-bold text-xs sm:text-sm shadow-sm">
                國土計畫土地使用管制
                <div className="text-[11px] font-normal text-blue-100">同一國土功能分區分類下之土地使用</div>
              </div>
            </div>

            {/* 分流兩大支線 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 左側：大型/特殊案件 -> 申請使用許可 */}
              <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-3">
                <div className="text-center">
                  <div className="inline-flex flex-wrap items-center justify-center gap-1.5 mb-2">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 text-[11px] font-bold">
                      重大公共設施或公用事業計畫
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 text-[11px] font-bold">
                      性質特殊
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 text-[11px] font-bold">
                      一定規模以上
                    </span>
                  </div>
                  <div className="flex justify-center my-1 text-slate-400">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                  <div className="p-2 rounded-lg bg-blue-600 text-white font-bold text-xs">
                    申請使用許可（使用許可審議）
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-center space-y-1">
                    <span className="font-bold text-emerald-800">核准使用</span>
                    <div className="text-[10px] text-emerald-700 leading-tight">
                      公共設施用地完成分割、移轉登記，繳交國土保育費及影響費
                    </div>
                    <div className="font-bold text-emerald-900 pt-1">依經許可之使用計畫使用</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-center flex flex-col justify-center">
                    <span className="font-bold text-rose-800">不核准使用</span>
                    <div className="font-bold text-rose-900 mt-2">駁回</div>
                  </div>
                </div>
              </div>

              {/* 右側：一般規模 -> 應經申請同意 / 免經申請同意 */}
              <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-3">
                <div className="text-center">
                  <div className="inline-block px-3 py-1 rounded bg-slate-100 text-slate-800 text-[11px] font-bold mb-2">
                    一定規模以下 且 性質不特殊
                  </div>
                  <div className="flex justify-center my-1 text-slate-400">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {/* 應經申請同意使用 */}
                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 space-y-2">
                    <div className="p-1 rounded bg-blue-700 text-white font-bold text-center text-xs">
                      應經申請同意使用
                    </div>
                    <div className="space-y-1 pt-1">
                      <div className="p-1.5 rounded bg-emerald-100/80 text-emerald-900 text-center font-bold">
                        同意使用 ➔ 使用
                      </div>
                      <div className="p-1.5 rounded bg-rose-100/80 text-rose-900 text-center font-bold">
                        不同意使用 ➔ 駁回
                      </div>
                    </div>
                  </div>

                  {/* 免經申請同意使用 */}
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
                    <div className="p-1 rounded bg-emerald-700 text-white font-bold text-center text-xs">
                      免經申請同意使用
                    </div>
                    <div className="p-2 rounded bg-emerald-100/80 text-emerald-900 text-center font-bold my-auto">
                      ➔ 直接使用
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 二、制度設計之核心重點：簡政、效能與數位化 */}
      {/* ===================================================================== */}
      <section id="consent-sec-2" className="space-y-5 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              二
            </span>
            <span>制度設計之核心重點：簡政、效能與數位化</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-2',
                `二、制度設計之核心重點：簡政、效能與數位化
（一）權責分工的革新：二元並行制
在區域計畫法制度中，變更編定審查常與興辦事業計畫審查糾纏不清，新制實施明確的職權分立：
1、目的事業主管機關：專注於「事業本身」。例如申請農業設施，由農業局審查該設施是否符合農業經營之必要性與合理性。
2、國土計畫主管機關：專注於「土地管制」。審查該設施是否符合分區、其建蔽率容積率是否超標、是否有設置必要的隔離帶等。
（二）行政程序的平行化與效率化
為避免行政流程冗長，引進「平行審查」機制：
1、平行審查機制：
（1）申請人無須先拿到興辦事業核准函才能申請應經同意。在申請過程中，興辦事業計畫、應經申請、水土保持、環境影響評估可同時啟動。
（2）應經同意准駁前，僅需取得興辦事業計畫之目的事業主管機關之支持意見文件。
（3）無須完成繳納回饋金、取得水土保持完工證明書等事項即得變更使用地。
2、書件簡併：申請書件標準化，排除非必要的價值判斷，轉向「客觀事實確認」。
（三）制度與資訊系統的結合
所有「應經申請同意」的案件，從申請、審查到最後的核准，均需登載於「國土管理署應經申請同意審查作業及書件查詢系統」，確保行政過程公開透明，民眾亦可隨時查閱相關計畫書件。
1、線上化作業：全面透過電子化系統受理，應經申請同意案件將可：（1）縮短公文往返時間。（2）自動勾稽環境敏感區資料。（3）提供即時進度查詢，讓申請人隨時掌握案件審到哪裡。
2、歷史案件追蹤：系統將完整保留所有歷史核准案件的圖資，當未來進行國土計畫五年通盤檢討時，這些數據將成為政策調整的參考。`,
                '制度設計之核心重點'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-2' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        {/* （一）權責分工的革新：二元並行制 */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-3">
          <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
            <span className="text-[#8C5A4B]">（一）</span>
            <span>權責分工的革新：二元並行制</span>
          </h4>
          <p className="text-[#4A3E39] text-xs sm:text-sm leading-relaxed">
            在區域計畫法制度中，變更編定審查常與興辦事業計畫審查糾纏不清，新制實施明確的職權分立：
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7]">
              <div className="font-bold text-[#8C5A4B] mb-1">1、目的事業主管機關：專注於「事業本身」</div>
              <p className="text-[#4A3E39] leading-relaxed">
                例如申請農業設施，由農業局審查該設施是否符合農業經營之必要性與合理性。
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7]">
              <div className="font-bold text-[#1F3864] mb-1">2、國土計畫主管機關：專注於「土地管制」</div>
              <p className="text-[#4A3E39] leading-relaxed">
                審查該設施是否符合分區、其建蔽率容積率是否超標、是否有設置必要的隔離帶等。
              </p>
            </div>
          </div>
        </div>

        {/* （二）行政程序的平行化與效率化 */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-3">
          <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
            <span className="text-[#8C5A4B]">（二）</span>
            <span>行政程序的平行化與效率化</span>
          </h4>
          <p className="text-[#4A3E39] text-xs sm:text-sm">為避免行政流程冗長，引進「平行審查」機制：</p>
          <div className="space-y-2 text-xs sm:text-sm text-[#4A3E39]">
            <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7] space-y-2">
              <div className="font-bold text-[#1F3864]">1、平行審查機制：</div>
              <div className="space-y-1.5 pl-2 border-l-2 border-[#1F3864]/20">
                <p>
                  <strong>（1）</strong>申請人無須先拿到興辦事業核准函才能申請應經同意。在申請過程中，
                  <strong>興辦事業計畫、應經申請、水土保持、環境影響評估可同時啟動</strong>。
                </p>
                <p>
                  <strong>（2）</strong>應經同意准駁前，僅需取得興辦事業計畫之目的事業主管機關之
                  <strong>支持意見文件</strong>。
                </p>
                <p>
                  <strong>（3）無須完成繳納回饋金、取得水土保持完工證明書等事項</strong>即得變更使用地。
                </p>
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7]">
              <div className="font-bold text-[#1F3864] mb-1">2、書件簡併：</div>
              <p className="leading-relaxed">
                申請書件標準化，排除非必要的價值判斷，轉向<strong>「客觀事實確認」</strong>。
              </p>
            </div>
          </div>
        </div>

        {/* （三）制度與資訊系統的結合 */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-3">
          <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
            <span className="text-[#8C5A4B]">（三）</span>
            <span>制度與資訊系統的結合</span>
          </h4>
          <p className="text-[#4A3E39] text-xs sm:text-sm leading-relaxed">
            所有「應經申請同意」的案件，從申請、審查到最後的核准，均需登載於
            <strong className="text-[#1F3864]">「國土管理署應經申請同意審查作業及書件查詢系統」</strong>
            ，確保行政過程公開透明，民眾亦可隨時查閱相關計畫書件。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7] space-y-1">
              <div className="font-bold text-[#1F3864]">1、線上化作業</div>
              <p className="text-gray-600 text-xs">全面透過電子化系統受理，應經申請同意案件將可：</p>
              <ul className="list-disc list-inside space-y-0.5 text-[#4A3E39] pt-1">
                <li>縮短公文往返時間。</li>
                <li>自動勾稽環境敏感區資料。</li>
                <li>提供即時進度查詢，讓申請人隨時掌握案件審到哪裡。</li>
              </ul>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7] space-y-1">
              <div className="font-bold text-[#1F3864]">2、歷史案件追蹤</div>
              <p className="text-[#4A3E39] leading-relaxed">
                系統將完整保留所有歷史核准案件的圖資，當未來進行國土計畫五年通盤檢討時，這些數據將成為政策調整的參考。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 三、應經申請同意審查規定架構說明 */}
      {/* ===================================================================== */}
      <section id="consent-sec-3" className="space-y-5 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              三
            </span>
            <span>應經申請同意審查規定架構說明</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-3',
                `三、應經申請同意審查規定架構說明
（一）申請階段
申請人依國土計畫土地使用管制規則規定檢具申請書及使用計畫書
（二）審查階段
1、直轄市、縣（市）主管機關－審查
（1）跨越二直轄市、縣（市）申請使用所占面積較大者，會同其他縣（市）審查。
（2）必要時得組成專案小組實地會勘或審查。
2、徵詢意見
（1）目的事業主管機關
（2）有關機關（環境保護、水利、水土保持、農林業機關）
3、法定時限
為落實行政效能，新制訂有嚴格的時間限制：
（1）一般案件：應於 30 日內審查完竣。
（2）複雜案件（跨縣市或專案審議）：應於 90 日內審查完竣。（註：上述時限皆不含申請人補正文件之天數。）
4、補正機制：
（1）文件不全者，主管機關應一次通知限期補正。
（2）申請人應於 30 日內補正，得申請展延並以 2 次為限。屆期未補正或補正不完全者，應予駁回。
（三）核准階段
1、直轄市、縣（市）主管機關核發同意
2、同意後應辦事項
（1）通知申請人、副知有關機關
（2）直轄市、縣（市）主管機關按同意之申請書及使用計畫書，將使用地變更結果及註記資訊等資料，登載於應經申請同意查詢作業及書件查詢系統。
（3）當申請案獲得同意後，主管機關將進行「使用地」之登錄或變更，在系統上會加註為「許可用地（應）」，以此區別於免經申請同意的既有編定。`,
                '審查規定架構說明'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-3' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        {/* 簡報第 6 頁完整流程結構圖 */}
        <div className="p-4 sm:p-6 rounded-xl bg-white border border-[#DDD5C7] shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-[#DDD5C7] pb-2">
            <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
              <Workflow className="w-5 h-5 text-[#8C5A4B]" />
              <span>審查作業流程圖（原件第 6 頁完整重現）</span>
            </h4>
            <span className="text-xs text-[#7D7065]">申請 ➔ 審查 ➔ 同意後應辦事項</span>
          </div>

          <div className="p-4 sm:p-6 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-6">
            {/* 階段 1：申請階段 */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full md:w-32 shrink-0 text-center md:text-right font-bold text-[#8C5A4B] text-sm">
                【申請階段】
              </div>
              <div className="flex-1 w-full p-4 rounded-xl bg-blue-700 text-white shadow-sm text-center">
                <div className="font-black text-sm sm:text-base">申請人</div>
                <div className="text-xs text-blue-100 mt-1">
                  依國土計畫土地使用管制規則規定檢具<strong>申請書</strong>及<strong>使用計畫書</strong>
                </div>
              </div>
            </div>

            <div className="flex justify-center text-slate-400">
              <ArrowRight className="w-5 h-5 rotate-90" />
            </div>

            {/* 階段 2：審查階段 */}
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="w-full md:w-32 shrink-0 text-center md:text-right font-bold text-[#8C5A4B] text-sm pt-2">
                【審查階段】
              </div>
              <div className="flex-1 w-full space-y-3">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
                  {/* 左：補正機制 */}
                  <div className="lg:col-span-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs space-y-2">
                    <div className="font-bold text-amber-900 border-b border-amber-200 pb-1">補正機制</div>
                    <p className="text-amber-800 leading-relaxed">
                      需補正者，通知申請人於 <strong>30 日內補正</strong>，得申請展期，並以 <strong>2 次為限</strong>。
                    </p>
                    <div className="p-2 rounded bg-rose-100/80 border border-rose-300 text-rose-900 font-bold text-center">
                      屆期未補正或補正不完全者，應予駁回
                    </div>
                  </div>

                  {/* 中：直轄市、縣（市）主管機關 審查 */}
                  <div className="lg:col-span-5 p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs space-y-2">
                    <div className="font-bold text-[#1F3864] border-b border-blue-200 pb-1 text-center sm:text-left">
                      直轄市、縣（市）主管機關 審查
                    </div>
                    <ol className="list-decimal list-inside space-y-1 text-[#4A3E39]">
                      <li>
                        <strong>跨越二直轄市、縣（市）：</strong>由申請使用所占面積較大者會同其他縣（市）審查。
                      </li>
                      <li>
                        <strong>專案小組：</strong>必要時得組成專案小組實地會勘或審查。
                      </li>
                      <li>
                        <strong>審查時限：</strong>受理申請後，於 <strong>30 日內</strong>審查完竣（會同其他縣市或組成專案小組者，於 <strong>90 日內</strong>審查完竣）。
                      </li>
                    </ol>
                  </div>

                  {/* 右：徵詢意見 */}
                  <div className="lg:col-span-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-2">
                    <div className="font-bold text-emerald-900 border-b border-emerald-200 pb-1">徵詢意見</div>
                    <div className="space-y-1.5 text-emerald-800">
                      <div className="p-1.5 rounded bg-white border border-emerald-200 font-medium">
                        目的事業主管機關
                      </div>
                      <div className="p-1.5 rounded bg-white border border-emerald-200 font-medium">
                        有關機關（環境保護、水利、水土保持）
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center text-slate-400">
              <ArrowRight className="w-5 h-5 rotate-90" />
            </div>

            {/* 階段 3：同意後應辦事項 */}
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="w-full md:w-32 shrink-0 text-center md:text-right font-bold text-[#8C5A4B] text-sm pt-2">
                【同意後應辦事項】
              </div>
              <div className="flex-1 w-full space-y-3">
                <div className="p-3 rounded-xl bg-[#1F3864] text-white text-center font-bold text-sm">
                  直轄市、縣（市）主管機關：核發同意
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-center">
                  <div className="p-3 rounded-lg bg-white border border-[#DDD5C7] space-y-1">
                    <span className="font-bold text-[#8C5A4B]">通知</span>
                    <div className="p-1.5 rounded bg-blue-50 text-[#1F3864] font-bold">申請人</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-[#DDD5C7] space-y-1">
                    <span className="font-bold text-[#8C5A4B]">系統登載</span>
                    <div className="p-1.5 rounded bg-[#FAF7F2] text-[#4A3E39] text-[11px] leading-tight">
                      將使用地及註記資訊等資料登載於中央主管機關建置之應經申請同意相關作業系統
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-[#DDD5C7] space-y-1">
                    <span className="font-bold text-[#8C5A4B]">副知</span>
                    <div className="p-1.5 rounded bg-emerald-50 text-emerald-800 font-bold">有關機關</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 文字條列詳述（原件第 7 頁） */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-4">
          <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
            <span className="text-[#8C5A4B]">（一）至（三）</span>
            <span>各階段法規依據與要點逐條詳述</span>
          </h4>

          <div className="space-y-4 text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
            <div className="space-y-1">
              <strong className="text-[#1F3864]">（一）申請階段：</strong>
              <p>申請人依國土計畫土地使用管制規則規定檢具申請書及使用計畫書。</p>
            </div>

            <div className="space-y-2">
              <strong className="text-[#1F3864]">（二）審查階段：</strong>
              <div className="pl-3 space-y-2 border-l-2 border-[#1F3864]/20">
                <p>
                  <strong>1、直轄市、縣（市）主管機關－審查：</strong>
                  <br />
                  （1）跨越二直轄市、縣（市）申請使用所占面積較大者，會同其他縣（市）審查。
                  <br />
                  （2）必要時得組成專案小組實地會勘或審查。
                </p>
                <p>
                  <strong>2、徵詢意見：</strong>
                  <br />
                  （1）目的事業主管機關。
                  <br />
                  （2）有關機關（環境保護、水利、水土保持、農林業機關）。
                </p>
                <p>
                  <strong>3、法定時限：</strong>為落實行政效能，新制訂有嚴格的時間限制：
                  <br />
                  （1）<strong>一般案件：</strong>應於 <strong>30 日內</strong>審查完竣。
                  <br />
                  （2）<strong>複雜案件（跨縣市或專案審議）：</strong>應於 <strong>90 日內</strong>審查完竣。（註：上述時限皆不含申請人補正文件之天數。）
                </p>
                <p>
                  <strong>4、補正機制：</strong>
                  <br />
                  （1）文件不全者，主管機關應一次通知限期補正。
                  <br />
                  （2）申請人應於 <strong>30 日內補正</strong>，得申請展延並以 <strong>2 次為限</strong>。
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <strong className="text-[#1F3864]">（三）核准階段：</strong>
              <div className="pl-3 space-y-2 border-l-2 border-[#1F3864]/20">
                <p>
                  <strong>1、直轄市、縣（市）主管機關核發同意。</strong>
                </p>
                <p>
                  <strong>2、同意後應辦事項：</strong>
                  <br />
                  （1）通知申請人、副知有關機關。
                  <br />
                  （2）直轄市、縣（市）主管機關按同意之申請書及使用計畫書，將使用地變更結果及註記資訊等資料，登載於應經申請同意查詢作業及書件查詢系統。
                  <br />
                  （3）當申請案獲得同意後，主管機關將進行「使用地」之登錄或變更，在系統上會加註為
                  <strong className="text-[#8C5A4B]">「許可用地（應）」</strong>，以此區別於免經申請同意的既有編定。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 四、申請實務與應備書件 */}
      {/* ===================================================================== */}
      <section id="consent-sec-4" className="space-y-5 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              四
            </span>
            <span>申請實務與應備書件</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-4',
                `四、申請實務與應備書件
（一）申請準備階段：申請人需備齊以下書件：
1、申請書：
【必要文件】：
（1）申請範圍。
（2）申請人（公司）清冊（附證明文件）。
（3）土地及建築物權利證明文件。
（4）1 年內環境敏感地區查詢結果文件。
（5）使用項目目的事業主管機關原則同意或支持文件。
【其他相關文件】：
（1）位於環敏區之環敏區主管機關認定未違反其主管法規之禁止或限制規定意見文件。
（2）涉及水庫集水區範圍（供家用或公共給水）者相關影響分析及因應措施之主管機關同意文件。
（3）特定工業設施使用者，檢附特定工廠登記核准文件。
（4）位於城 2-3 應檢附其劃設目的主管機關認定未妨礙其劃設目的之意見表示文件。
（5）屬原基法 21 條土地檢附完成諮商之證明文件。
2、使用計畫書：詳述開發目的、配置圖、建蔽率與容積率計算。（含基本說明、使用規劃、土地使用管制事項三大構面）。
3、海洋資源地區申請案件應說明內容（立體使用特性、主管機關意見、航行安全、使用期限等）。
（二）土地使用管制事項審查方式：
1、使用項目：符合管制規則附表 1 容許使用。
2、土地使用強度（建蔽率/容積率）：國保一（10%/30%）、國保二（20%/60%）、農一（30%/90%）、農二（50%/120%）、農三（40%/120%或原丙建100%）、農四/城2-1平地（60%/120%）、山坡地（40%/120%）。
3、通行機能：臨接得指定建築線之道路。
4、隔離綠帶（設施）：附表 5，至少 1.5 公尺寬。
5、綠地：附表 6，應留設 10% 綠地。
6、必要性服務設施：附表 7，應留設 30% 必要性服務設施（含綠地）。
7、環境敏感地區管制。
8、過渡條款（第20條、第34條）：分區圖公告後 6 個月內申請得維持原核准強度（如寵物生命紀念設施原核定 180% 容積率）。`,
                '申請實務與應備書件'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-4' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        {/* 1、申請書：必要文件 vs 其他相關文件對照表 */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-4">
          <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
            <span className="text-[#8C5A4B]">1、</span>
            <span>申請書應備文件清單與函文範例（原件第 8 頁）</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 必要文件 */}
            <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-3">
              <div className="p-2 rounded-lg bg-[#1F3864] text-white font-bold text-xs sm:text-sm text-center">
                必要文件
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#4A3E39]">
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-[#8C5A4B]">（1）</span>
                  <span>申請範圍。</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-[#8C5A4B]">（2）</span>
                  <span>申請人（公司）清冊（附證明文件）。</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-[#8C5A4B]">（3）</span>
                  <span>土地及建築物權利證明文件。</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-[#8C5A4B]">（4）</span>
                  <span>1 年內環境敏感地區查詢結果文件。</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-[#8C5A4B]">（5）</span>
                  <span>使用項目目的事業主管機原則同意或支持文件。</span>
                </li>
              </ul>

              {/* 函釋範例 */}
              <div className="space-y-2 pt-2 border-t border-[#DDD5C7] text-xs">
                <div className="p-2.5 rounded-lg bg-blue-50/70 border border-blue-200">
                  <strong className="text-blue-900 block mb-1">【例：觀光旅館推薦函】</strong>
                  <p className="text-blue-800 leading-relaxed font-mono">
                    貴公司申請於○○○○○○○非都市土地，面積○○公頃，辦理○○○○興辦事業計畫乙案，同意推薦，請查照。
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-blue-50/70 border border-blue-200">
                  <strong className="text-blue-900 block mb-1">【例：產業園區原則同意】</strong>
                  <p className="text-blue-800 leading-relaxed font-mono">
                    有關本府申請設置○○○○○○一案，原則同意可行性規劃報告與支持其設置原則性與方向性，詳如說明，請查照。
                  </p>
                </div>
              </div>
            </div>

            {/* 其他相關文件 */}
            <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-3">
              <div className="p-2 rounded-lg bg-[#8C5A4B] text-white font-bold text-xs sm:text-sm text-center">
                其他相關文件
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#4A3E39]">
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-[#8C5A4B]">（1）</span>
                  <span>
                    位於環敏區之環敏區主管機關認定未違反其主管法規之禁止或限制規定意見文件。
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-[#8C5A4B]">（2）</span>
                  <span>
                    涉及水庫集水區範圍（供家用或公共給水）者相關影響分析及因應措施之主管機關同意文件。
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-[#8C5A4B]">（3）</span>
                  <span>特定工業設施使用者，檢附特定工廠登記核准文件。</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-[#8C5A4B]">（4）</span>
                  <span>
                    位於城 2-3 應檢附其劃設目的主管機關認定未妨礙其劃設目的之意見表示文件。
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-[#8C5A4B]">（5）</span>
                  <span>屬原基法 21 條土地檢附完成諮商之證明文件。</span>
                </li>
              </ul>

              {/* 函釋範例 */}
              <div className="space-y-2 pt-2 border-t border-[#DDD5C7] text-xs">
                <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200">
                  <strong className="text-amber-900 block mb-1">【例：自來水水質水量保護區】</strong>
                  <p className="text-amber-800 leading-relaxed font-mono">
                    經查經濟部水利署水庫集水區暨自來水水質水量保護區查詢系統,旨揭 15 筆地號土地,其均位於高屏溪自來水水質水量保護區範圍內,請依自來水法第 11 條規定辦理,以維水源水質安全。
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200">
                  <strong className="text-amber-900 block mb-1">【例：某一部落】</strong>
                  <p className="text-amber-800 leading-relaxed font-mono">
                    檢送本部落「○○○○○○部落會議」會議記錄乙份，請參閱。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2、使用計畫書結構（基本說明 / 使用規劃 / 土地使用管制事項） */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-4">
          <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
            <span className="text-[#8C5A4B]">2、</span>
            <span>使用計畫書：詳述開發目的、配置圖、建蔽率與容積率計算（原件第 9 頁）</span>
          </h4>

          <div className="overflow-x-auto rounded-lg border border-[#DDD5C7] bg-white">
            <table className="w-full text-xs sm:text-sm border-collapse">
              <thead className="bg-[#1F3864] text-white">
                <tr>
                  <th className="p-3 border border-[#DDD5C7] text-left w-1/4">基本說明</th>
                  <th className="p-3 border border-[#DDD5C7] text-left w-1/3">使用規劃</th>
                  <th className="p-3 border border-[#DDD5C7] text-left">土地使用管制事項</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C7] text-[#4A3E39]">
                <tr className="align-top">
                  <td className="p-3 border border-[#DDD5C7] space-y-1.5">
                    <div>（1）計畫目的及法令依據。</div>
                    <div>（2）現況分析-計畫區位範圍、土地使用現況。</div>
                  </td>
                  <td className="p-3 border border-[#DDD5C7] space-y-1.5">
                    <div>（1）使用規劃。</div>
                    <div>（2）基地中有非申請範圍之地區，如何維持該等地區原有通行機能。</div>
                    <div>
                      （3）申請兩項以上之使用細目者應說明各使用細目間之關係若為複合性使用，應說明複合的方式。
                    </div>
                  </td>
                  <td className="p-3 border border-[#DDD5C7] space-y-1.5">
                    <div>（1）使用項目（細目）。</div>
                    <div>（2）使用項目（細目）強度。</div>
                    <div>（3）通行機能。</div>
                    <div>（4）隔離綠帶（設施）之設置。</div>
                    <div>（5）綠地之設置。</div>
                    <div>（6）必要性服務設施之設置。</div>
                    <div>（7）環境敏感地區之土地使用指導事項。</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 海洋資源地區申請案件使用計畫書應說明內容 */}
          <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-200 text-xs sm:text-sm text-cyan-900 space-y-2">
            <div className="font-bold flex items-center gap-1.5 text-cyan-950">
              <Compass className="w-4 h-4 text-cyan-700" />
              <span>海洋資源地區申請案件使用計畫書應說明內容</span>
            </div>
            <p className="leading-relaxed">
              海洋資源地區申請案件應考量立體使用之特性，確認申請案件與其他已核准獲同意案件是否有衝突情形，故應審查內容重點摘要如下：
            </p>
            <ol className="list-decimal list-inside space-y-1 text-cyan-800">
              <li>取得既有使用或設施目的事業主管機關原則同意文件者，並說明規劃因應措施。</li>
              <li>取得申請範圍涉及環境敏感地區目的事業主管機關之同意文件或書面意見，並說明相關因應措施。</li>
              <li>
                取得航政或漁業主管機關之同意文件或書面意見，並說明對船舶航行安全及公共通行之影響因應措施。
              </li>
              <li>訂有使用期間者，應說明使用期間屆滿之處理方式。</li>
            </ol>
          </div>
        </div>

        {/* （二）土地使用管制事項審查方式（原件第 10 ~ 12 頁） */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-5">
          <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
            <span className="text-[#8C5A4B]">（二）</span>
            <span>土地使用管制事項審查方式（第 10 ~ 12 頁）</span>
          </h4>

          {/* 1、使用項目 */}
          <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7]">
            <span className="font-bold text-[#1F3864]">1、使用項目：</span>
            <span className="text-[#4A3E39] text-xs sm:text-sm ml-1">
              符合本規則附表 1 容許使用情形。
            </span>
          </div>

          {/* 2、土地使用強度（建蔽率/容積率）表格 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#1F3864] text-xs sm:text-sm">
                2、土地使用強度：申請案件土地使用強度應符合本規則附表 3 規定
              </span>
              <span className="text-[11px] text-[#7D7065]">管制規則附表 3</span>
            </div>
            <div className="overflow-x-auto rounded-lg border border-[#DDD5C7] bg-white">
              <table className="w-full text-xs sm:text-sm border-collapse text-center">
                <thead className="bg-[#1F3864] text-white">
                  <tr>
                    <th className="p-2.5 border border-[#DDD5C7] text-left">國土功能分區分類</th>
                    <th className="p-2.5 border border-[#DDD5C7] w-28">建蔽率</th>
                    <th className="p-2.5 border border-[#DDD5C7] text-left">容積率及備註說明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DDD5C7] text-[#4A3E39]">
                  <tr>
                    <td className="p-2.5 border border-[#DDD5C7] text-left font-bold">國土保育地區第 1 類</td>
                    <td className="p-2.5 border border-[#DDD5C7] font-semibold text-blue-900">10%</td>
                    <td className="p-2.5 border border-[#DDD5C7] text-left font-semibold text-blue-900">30%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 border border-[#DDD5C7] text-left font-bold">國土保育地區第 2 類</td>
                    <td className="p-2.5 border border-[#DDD5C7] font-semibold text-blue-900">20%</td>
                    <td className="p-2.5 border border-[#DDD5C7] text-left font-semibold text-blue-900">60%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 border border-[#DDD5C7] text-left font-bold">農業發展地區第 1 類</td>
                    <td className="p-2.5 border border-[#DDD5C7] font-semibold text-emerald-900">30%</td>
                    <td className="p-2.5 border border-[#DDD5C7] text-left font-semibold text-emerald-900">90%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 border border-[#DDD5C7] text-left font-bold">農業發展地區第 2 類</td>
                    <td className="p-2.5 border border-[#DDD5C7] font-semibold text-emerald-900">50%</td>
                    <td className="p-2.5 border border-[#DDD5C7] text-left font-semibold text-emerald-900">120%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 border border-[#DDD5C7] text-left font-bold">農業發展地區第 3 類</td>
                    <td className="p-2.5 border border-[#DDD5C7] font-semibold text-emerald-900">40%</td>
                    <td className="p-2.5 border border-[#DDD5C7] text-left">
                      <strong className="text-emerald-900">120% 或 100%</strong>
                      <span className="text-xs text-gray-600 block">
                        （如屬原丙種建築用地，適用依非都管制規則調降的 100% 容積率，如設置國防設施，原丙建容積率僅有 100%。）
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2.5 border border-[#DDD5C7] text-left font-bold">
                      農業發展地區第 4 類、城鄉發展地區第 2 類之 1（平地）
                    </td>
                    <td className="p-2.5 border border-[#DDD5C7] font-semibold text-amber-900">60%</td>
                    <td className="p-2.5 border border-[#DDD5C7] text-left font-semibold text-amber-900">120%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 border border-[#DDD5C7] text-left font-bold">
                      農業發展地區第 4 類、城鄉發展地區第 2 類之 1（山坡地）
                    </td>
                    <td className="p-2.5 border border-[#DDD5C7] font-semibold text-amber-900">40%</td>
                    <td className="p-2.5 border border-[#DDD5C7] text-left font-semibold text-amber-900">120%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3、通行機能 */}
          <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7] space-y-1">
            <span className="font-bold text-[#1F3864]">3、通行機能：</span>
            <p className="text-[#4A3E39] text-xs sm:text-sm leading-relaxed">
              為確保申請案件選址臨接既有道路，避免零星發展等情形，具土地使用強度需求或非屬依建築法規定免臨接道路者，應由建設（工務）單位審查是否臨接得指定建築線之道路。至道路之認定則回歸建築法規規定辦理。
            </p>
          </div>

          {/* 4、隔離綠帶或設施（含第 11 頁示意圖） */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-4">
            <div className="space-y-1.5">
              <span className="font-bold text-[#1F3864]">4、隔離綠帶或設施：</span>
              <p className="text-[#4A3E39] text-xs sm:text-sm leading-relaxed">
                <strong>（1）</strong>本規則附表 5 規定，考量應經申請同意案件屬一定規模以下且於各該功能分區分類下影響程度較低之使用情形，隔離綠帶（設施）主要為保留適當開放空間作為緩衝，參考現行農業主管機關同意農業用地變更使用審查作業要點，
                <strong className="text-[#8C5A4B]">至少應規劃 1.5 公尺寬隔離綠帶（設施）</strong>。
              </p>
              <div className="text-xs sm:text-sm text-[#4A3E39] pl-3 space-y-1 border-l-2 border-emerald-500">
                <p>
                  <strong>（2）設置項目：</strong>
                </p>
                <p>
                  <strong>A.</strong> 以具有隔離效果之道路、平面停車場、水道、公園、綠地、滯洪池、蓄水池、廣場、開放球場等開發性設施為限。
                </p>
                <p>
                  <strong>B.</strong> 屬於線狀設施或開放性設施者，免設置隔離綠帶或設施。
                </p>
              </div>
            </div>

            {/* 原件第 11 頁 1.5m 隔離綠帶圖解展示 */}
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-3">
              <div className="flex items-center justify-between border-b border-[#DDD5C7] pb-2">
                <span className="text-xs font-bold text-[#1F3864] flex items-center gap-1.5">
                  <TreePine className="w-4 h-4 text-emerald-700" />
                  <span>1.5m 隔離綠帶規劃配置規範圖解（原件第 11 頁圖形重現）</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-700 text-white font-bold text-xs">
                  1.5m 隔離綠帶
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                {/* 基地內部使用項目 */}
                <div className="md:col-span-6 p-4 rounded-xl bg-white border-2 border-dashed border-emerald-600 text-center relative space-y-2">
                  <div className="absolute top-1 left-2 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                    1.5M 隔離綠帶（環繞基地外緣）
                  </div>
                  <div className="py-6 px-4 bg-emerald-50/50 rounded-lg border border-emerald-200">
                    <span className="font-black text-[#1F3864] text-sm block">使用項目設施範圍</span>
                    <span className="text-[11px] text-[#7D7065] mt-1 block">
                      周圍留設 1.5 公尺緩衝綠帶，或以滯洪池、平面停車場等隔離設施替代
                    </span>
                  </div>
                </div>

                {/* 道路區隔 */}
                <div className="md:col-span-2 text-center py-2 px-3 bg-slate-200 rounded-lg border border-slate-300 font-bold text-xs text-slate-700">
                  道路（線狀設施）
                </div>

                {/* 開放性設施：免設隔離綠帶 */}
                <div className="md:col-span-4 p-3 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2 text-xs">
                  <div className="font-bold text-blue-900 border-b border-blue-200 pb-1">
                    開放性設施（免設隔離綠帶）
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-center">
                    <span className="p-1 rounded bg-blue-100 text-blue-900 font-medium text-[11px]">公園</span>
                    <span className="p-1 rounded bg-blue-100 text-blue-900 font-medium text-[11px]">滯洪池</span>
                    <span className="p-1 rounded bg-blue-100 text-blue-900 font-medium text-[11px]">停車場</span>
                  </div>
                  <p className="text-[11px] text-blue-800 leading-tight">
                    屬於線狀設施（如道路）或開放性設施者，本身即具緩衝功能，免重複留設隔離綠帶。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5、綠地（10%） */}
          <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7] space-y-1.5">
            <span className="font-bold text-[#1F3864]">5、綠地（附表 6，留設 10% 綠地）：</span>
            <p className="text-[#4A3E39] text-xs sm:text-sm leading-relaxed">
              <strong>（1）</strong>本規則附表 6 規定，針對具規模之住商、觀光等使用項目及於各國土功能分區及其分類均有外部影響或鄰避性之使用項目
              <strong className="text-emerald-700">規定應留設 10％ 綠地</strong>
              。以平衡開發地區周遭之生態環境、維持基地自然淨化空氣、涵養水源，同時兼具管控計畫合理開發密度之功能，必要時亦得作為緊急（或臨時）防災避難空間，
              <strong>法定空地作綠地者，得計入綠地面積計算</strong>。
            </p>
            <p className="text-[#4A3E39] text-xs sm:text-sm leading-relaxed">
              <strong>（2）</strong>設置之隔離綠帶或設施為綠地者，得計入綠地面積計算。
            </p>
          </div>

          {/* 6、必要性服務設施（30%） */}
          <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7] space-y-1.5">
            <span className="font-bold text-[#1F3864]">
              6、必要性服務設施（附表 7，留設 30% 必要性服務設施含綠地）：
            </span>
            <p className="text-[#4A3E39] text-xs sm:text-sm leading-relaxed">
              <strong>（1）</strong>本規則附表 7 規定，針對具規模之住商、觀光等使用項目具活動密度高、定點停留時間長或具備住宿功能等特性，不論是否於既有可建築用地申請使用，其引入人口將產生交通量及地區公共設施負擔等外部衝擊，因其活動所衍生之公共設施負擔應於內部劃設提供，
              <strong className="text-amber-800">故規定應留設 30％ 必要性服務設施（含綠地）</strong>
              。應設置必要性服務設施之使用項目可查閱本規則草案附件 1 應設置必要性服務設施之應經申請同意使用項目檢核表。
            </p>
            <p className="text-[#4A3E39] text-xs sm:text-sm leading-relaxed">
              <strong>（2）設置項目：</strong>
              得包含綠地、公園、道路、廣場、滯洪池、水土保持設施、污水處理設施、自來水設施、電力設施、電信設施、公用設備、停車場等設施。
            </p>
          </div>

          {/* 7、環境敏感地區管制 */}
          <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7] space-y-1">
            <span className="font-bold text-[#1F3864]">7、環境敏感地區土地使用管制：</span>
            <p className="text-[#4A3E39] text-xs sm:text-sm leading-relaxed">
              依全國國土計畫第九章土地使用指導事項、第五節土地行政作業指導原則，申請同意使用，應先辦理環境敏感地區查詢，故申請範圍涉及環境敏感地區範圍者，應符合全國國土計畫之環境敏感地區土地使用指導事項。
            </p>
          </div>

          {/* 8 與 9：過渡條款（第 20、34 條）與寵物生命紀念設施案例 */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50/80 to-orange-50/60 border border-amber-300 space-y-3">
            <div className="font-bold text-[#1F3864] text-sm sm:text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>
                8、9、既有核准興辦計畫過渡條款與寵物生命紀念設施案例實務（第 20 條、第 34 條）
              </span>
            </div>
            <div className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed space-y-2">
              <p>
                <strong>8、</strong>依「國土計畫土地使用管制規則」（草案）第 20 條、第 34 條規定，
                <strong className="text-[#1F3864]">
                  已取得興辦事業計畫核准尚未完成使用地變更編定之案件
                </strong>
                ，如興辦事業計畫符合容許使用者，應於
                <strong className="text-red-700">國土功能分區圖公告後 6 個月內提出應經同意申請</strong>
                ，經直轄市、縣（市）主管機關審查同意後，得按原核准計畫所載之使用強度、配置（包括隔離綠帶或設施等規劃留設規定）辦理。
              </p>
              <div className="p-3 rounded-lg bg-white border border-amber-200">
                <strong className="text-amber-900 block mb-1">9、實務案例試算：寵物生命紀念設施</strong>
                <p className="text-slate-700">
                  如原在一般農業區農牧用地申請做<strong>寵物生命紀念設施</strong>興辦事業計畫，原計畫核定之容積率為{' '}
                  <strong className="text-blue-700 font-mono">180%</strong>（特定目的事業用地），國土功能分區圖是劃設為
                  <strong className="text-emerald-800">農業發展地區第 2 類</strong>。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs">
                  <div className="p-2 rounded bg-emerald-50 border border-emerald-300 text-emerald-900">
                    <span className="font-bold block">✓ 6 個月內申請：</span>
                    同意後能維持原核定 <strong>180% 容積率</strong>，且原配置不用變更！
                  </div>
                  <div className="p-2 rounded bg-rose-50 border border-rose-300 text-rose-900">
                    <span className="font-bold block">✗ 超過 6 個月後申請：</span>
                    容積率必須依照農二標準降低為 <strong>120%</strong>（縮水 60%）！
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 五、核准後管理機制 */}
      {/* ===================================================================== */}
      <section id="consent-sec-5" className="space-y-5 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              五
            </span>
            <span>核准後管理機制</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-5',
                `五、核准後管理機制
為了確保土地使用確實依照核定計畫執行，並維持國土資訊的即時性，本制度建立了一套動態的管理與監督機制：
（一）計畫變更之程序：
土地使用並非一成不變，核准後若需調整，依其變更幅度採取不同程序：
1、微小變更（對照表備查制）：地籍測量、分割或坐標測量誤差或誤植，致增、減使用計畫面積、範圍者，申請人可以報請備查方式辦理，簡化行政作業。
2、重大變更（重新申請制）：若涉及增、減使用計畫面積、範圍，變更土地使用管制事項，則視為新案，需重新提出「應經申請同意」之程序進行審核。
（二）撤銷與廢止機制：
「應經申請同意」並非永久性權力，主管機關擁有行政監督權，於下列情事發生時將廢止原同意：
1、申請人自願廢止：申請人因經營策略調整，主動向主管機關申請廢止原同意案。
2、違規使用之處置：若土地使用未依核定之計畫書內容執行（例如擅自擴大建築體或變更用途），經主管機關限期改善而屆期未改善者，原同意將予廢止。
3、許可前提消失（連動機制）：當開發行為之法定前提條件發生變動時，國土端的「申請同意」將連動失效並廢止：
（1）興辦事業計畫：經目的事業主管機關不同意使用、廢止或失其效力。
（2）環境影響評估：審查結論認定不應開發、廢止或失其效力。
（3）水利與水保審查：出流管制計畫書、水土保持計畫經水利或水土保持主管機關不同意、廢止或失其效力。
（三）系統註記與地籍管理
核准後的案件將進入長期監控體系：
1、地籍加註：核准後，主管機關會進行「使用地」之登錄或變更，並在系統中加註為「許可用地（應）」，以此與免經申請的既有土地區別，方便未來查核。
2、數位化追蹤：所有核准案件均登載於「國土管理署應經申請同意審查作業及書件查詢系統」，確保土地利用現況與資訊系統一致。`,
                '核准後管理機制'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-5' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
          為了確保土地使用確實依照核定計畫執行，並維持國土資訊的即時性，本制度建立了一套動態的管理與監督機制：
        </p>

        {/* （一）計畫變更之程序 */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-3">
          <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
            <span className="text-[#8C5A4B]">（一）</span>
            <span>計畫變更之程序</span>
          </h4>
          <p className="text-[#4A3E39] text-xs sm:text-sm">
            土地使用並非一成不變，核准後若需調整，依其變更幅度採取不同程序：
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7] space-y-1">
              <div className="font-bold text-emerald-800">1、微小變更（對照表備查制）</div>
              <p className="text-[#4A3E39] leading-relaxed">
                地籍測量、分割或坐標測量誤差或誤植，致增、減使用計畫面積、範圍者，申請人可以
                <strong>報請備查方式辦理</strong>，簡化行政作業。
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7] space-y-1">
              <div className="font-bold text-rose-800">2、重大變更（重新申請制）</div>
              <p className="text-[#4A3E39] leading-relaxed">
                若涉及增、減使用計畫面積、範圍，變更土地使用管制事項，則<strong>視為新案</strong>
                ，需重新提出「應經申請同意」之程序進行審核。
              </p>
            </div>
          </div>
        </div>

        {/* （二）撤銷與廢止機制 */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-3">
          <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
            <span className="text-[#8C5A4B]">（二）</span>
            <span>撤銷與廢止機制</span>
          </h4>
          <p className="text-[#4A3E39] text-xs sm:text-sm leading-relaxed">
            「應經申請同意」並非永久性權力，主管機關擁有行政監督權，於下列情事發生時將廢止原同意：
          </p>

          <div className="space-y-2.5 text-xs sm:text-sm text-[#4A3E39]">
            <div className="p-3 rounded-lg bg-white border border-[#DDD5C7]">
              <strong>1、申請人自願廢止：</strong>申請人因經營策略調整，主動向主管機關申請廢止原同意案。
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#DDD5C7]">
              <strong>2、違規使用之處置：</strong>
              若土地使用未依核定之計畫書內容執行（例如擅自擴大建築體或變更用途），經主管機關限期改善而屆期未改善者，原同意將予廢止。
            </div>

            {/* 3、許可前提消失（連動機制） */}
            <div className="p-3.5 rounded-lg bg-rose-50/70 border border-rose-200 space-y-2">
              <div className="font-bold text-rose-900">3、許可前提消失（連動機制）</div>
              <p className="text-rose-800 text-xs">
                當開發行為之法定前提條件發生變動時，國土端的「申請同意」將連動失效並廢止：
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                <div className="p-2 rounded bg-white border border-rose-200">
                  <span className="font-bold text-rose-900 block mb-0.5">（1）興辦事業計畫</span>
                  <span className="text-slate-600">經目的事業主管機關不同意使用、廢止或失其效力。</span>
                </div>
                <div className="p-2 rounded bg-white border border-rose-200">
                  <span className="font-bold text-rose-900 block mb-0.5">（2）環境影響評估</span>
                  <span className="text-slate-600">審查結論認定不應開發、廢止或失其效力。</span>
                </div>
                <div className="p-2 rounded bg-white border border-rose-200">
                  <span className="font-bold text-rose-900 block mb-0.5">（3）水利與水保審查</span>
                  <span className="text-slate-600">出流管制計畫書、水土保持計畫經主管機關不同意、廢止或失其效力。</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* （三）系統註記與地籍管理 */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-3">
          <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
            <span className="text-[#8C5A4B]">（三）</span>
            <span>系統註記與地籍管理</span>
          </h4>
          <p className="text-[#4A3E39] text-xs sm:text-sm">核准後的案件將進入長期監控體系：</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7] space-y-1">
              <div className="font-bold text-[#1F3864]">1、地籍加註</div>
              <p className="text-[#4A3E39] leading-relaxed">
                核准後，主管機關會進行「使用地」之登錄或變更，並在系統中加註為
                <strong className="text-[#8C5A4B]">「許可用地（應）」</strong>
                ，以此與免經申請的既有土地區別，方便未來查核。
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#DDD5C7] space-y-1">
              <div className="font-bold text-[#1F3864]">2、數位化追蹤</div>
              <p className="text-[#4A3E39] leading-relaxed">
                所有核准案件均登載於<strong>「國土管理署應經申請同意審查作業及書件查詢系統」</strong>
                ，確保土地利用現況與資訊系統一致。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 六、結論與未來展望 */}
      {/* ===================================================================== */}
      <section id="consent-sec-6" className="space-y-5 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              六
            </span>
            <span>結論與未來展望</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-6',
                `六、結論與未來展望
（一）建立公平透明的土地轉型機制
「應經申請同意」制度的核心在於將土地管理從過去的「個案變更」轉型為「計畫引導」。透過標準化的審查機制與書件規範，排除了過去人為關說或行政裁量過大的弊端，確保所有申請案都在一致的基準下競爭，建立更公平的產業發展環境。
（二）行政效能的全面升級：簡政與數位化
新制不僅釐清了目的事業與土地管制的職權分立，更透過以下手段大幅縮短開發時效：
1、平行審查機制：打破線性流程，讓興辦事業、應經同意與環評、水保可同步啟動，大幅減少行政空轉。
2、法定審理時限：明確規定一般案件 30 日、複雜案件 90 日的審結期限，提供申請人高度的預測性。
3、數位化透明管理：藉由「國土管理署應經申請同意審查作業系統」，申請人可即時掌握進度，行政過程全面公開透明。
（三）守護環境永續與治理韌性
本制度在支持經濟發展的同時，透過設置隔離綠帶（至少 1.5 公尺）、綠地留設（10%）及必要性服務設施（30%）等機制，有效緩衝了開發行為對周遭環境的衝擊。這些規範不僅保障了農地品質，更確保了基地具備淨化空氣與涵養水源的功能。
（四）展望未來：動態修正與政策回饋
未來，所有核准案件的數據都將透過資訊系統完整保留。當國土計畫進行每五年的定期通盤檢討時，這些實務數據將成為政策調整的重要參考基準。這意味著土地管制不再是僵化的條文，而是能隨著社會需求與環境變化動態優化的活體機制。`,
                '結論與未來展望'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-6' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          {/* （一）建立公平透明的土地轉型機制 */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2 shadow-2xs">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-2 text-sm sm:text-base">
              <Scale className="w-4 h-4 text-[#8C5A4B]" />
              <span>（一）建立公平透明的土地轉型機制</span>
            </h4>
            <p className="text-[#4A3E39] leading-relaxed">
              「應經申請同意」制度的核心在於將土地管理從過去的「個案變更」轉型為
              <strong className="text-[#1F3864]">「計畫引導」</strong>
              。透過標準化的審查機制與書件規範，排除了過去人為關說或行政裁量過大的弊端，確保所有申請案都在一致的基準下競爭，建立更公平的產業發展環境。
            </p>
          </div>

          {/* （二）行政效能的全面升級：簡政與數位化 */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2 shadow-2xs">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-2 text-sm sm:text-base">
              <Workflow className="w-4 h-4 text-[#8C5A4B]" />
              <span>（二）行政效能的全面升級：簡政與數位化</span>
            </h4>
            <p className="text-[#4A3E39] leading-relaxed">
              新制不僅釐清了目的事業與土地管制的職權分立，更透過以下手段大幅縮短開發時效：
            </p>
            <ul className="space-y-1 text-[#4A3E39] pl-1">
              <li>
                <strong>1、平行審查機制：</strong>打破線性流程，讓興辦事業、應經同意與環評、水保可同步啟動，大幅減少行政空轉。
              </li>
              <li>
                <strong>2、法定審理時限：</strong>明確規定一般案件 30 日、複雜案件 90 日的審結期限，提供高度預測性。
              </li>
              <li>
                <strong>3、數位化透明管理：</strong>藉由國土管理署查詢系統，申請人即時掌握進度，行政過程全面透明。
              </li>
            </ul>
          </div>

          {/* （三）守護環境永續與治理韌性 */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2 shadow-2xs">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-2 text-sm sm:text-base">
              <TreePine className="w-4 h-4 text-emerald-700" />
              <span>（三）守護環境永續與治理韌性</span>
            </h4>
            <p className="text-[#4A3E39] leading-relaxed">
              本制度在支持經濟發展的同時，透過設置<strong>隔離綠帶（至少 1.5 公尺）</strong>、
              <strong>綠地留設（10%）</strong>及<strong>必要性服務設施（30%）</strong>
              等機制，有效緩衝了開發行為對周遭環境的衝擊。這些規範不僅保障了農地品質，更確保了基地具備淨化空氣與涵養水源的功能。
            </p>
          </div>

          {/* （四）展望未來：動態修正與政策回饋 */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2 shadow-2xs">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-2 text-sm sm:text-base">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>（四）展望未來：動態修正與政策回饋</span>
            </h4>
            <p className="text-[#4A3E39] leading-relaxed">
              未來，所有核准案件的數據都將透過資訊系統完整保留。當國土計畫進行
              <strong className="text-[#1F3864]">每五年的定期通盤檢討</strong>
              時，這些實務數據將成為政策調整的重要參考基準。這意味著土地管制不再是僵化的條文，而是能隨著社會需求與環境變化動態優化的活體機制。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
