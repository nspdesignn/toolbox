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
  Factory,
  Flame,
  AlertTriangle,
  FolderOpen
} from 'lucide-react';

interface CeramicLandReportProps {
  onCopy?: (text: string, label: string) => void;
}

export const CeramicLandReport: React.FC<CeramicLandReportProps> = ({ onCopy }) => {
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
              <Flame className="w-3.5 h-3.5" />
              <span>土地編定變更 · 專題報告主題 8</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#1F3864] tracking-tight">
              非都市土地窯業用地涉容許使用、變更及更正編定
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#7D7065] mt-1.5">
              <span className="flex items-center gap-1 font-semibold text-[#1F3864]">
                <Calendar className="w-3.5 h-3.5 text-[#8C5A4B]" />
                <span>日期：115.3.3</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <FileCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>依《窯業用地.pdf》全文 15 頁 100% 忠實完整收錄（含附件一審查要點及附件二內政部函全文）</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/assets/aistudio/_____1d89adec.pdf"
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
              href="#ceramic-sec-1"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                一
              </span>
              <span>目的與新北市窯業用地統計表</span>
            </a>
            <a
              href="#ceramic-sec-2"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                二
              </span>
              <span>窯業用地容許使用項目</span>
            </a>
            <a
              href="#ceramic-sec-3"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                三
              </span>
              <span>變更編定應備文件與山坡地限制</span>
            </a>
            <a
              href="#ceramic-sec-4"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                四
              </span>
              <span>窯業用地的變更類型（丁建/甲建/特目）</span>
            </a>
            <a
              href="#ceramic-sec-5"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                五
              </span>
              <span>變更編定作業流程（SOP 圖解）</span>
            </a>
            <a
              href="#ceramic-sec-6"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                六
              </span>
              <span>窯業用地更正編定（時間點與新函釋）</span>
            </a>
            <a
              href="#ceramic-sec-7"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[10px]">
                七
              </span>
              <span>國土計畫土地使用管制情形</span>
            </a>
            <a
              href="#ceramic-sec-att1"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-emerald-600/10 flex items-center justify-center font-bold text-[10px] text-emerald-800">
                附一
              </span>
              <span>新北市審查作業要點全文（8條）</span>
            </a>
            <a
              href="#ceramic-sec-att2"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white transition-colors flex items-center gap-1.5 text-[#1F3864] font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-blue-600/10 flex items-center justify-center font-bold text-[10px] text-blue-800">
                附二
              </span>
              <span>內政部 110.5.3 函釋全文抄本</span>
            </a>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 一、目的與 114 年底新北市窯業用地統計表 */}
      {/* ===================================================================== */}
      <section id="ceramic-sec-1" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              一
            </span>
            <span>目的與新北市窯業用地統計表</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-1',
                `非都市土地窯業用地涉容許使用、變更及更正編定 (115.3.3)
一、目的
隨著產業結構的變遷與土地利用需求的多樣化，原有的窯業用地常有轉型活化之必要，截至 114 年底，新北市轄內的窯業用地共計 62 筆，面積共計 15.750102 公頃。因此，本文整理相關法規及審查作業流程，使處理非都市土地「窯業用地」的變更編定申請案審查作業流程能符合現行法規要求。
本文內容將依序涵蓋窯業用地的法規基礎與使用限制、轉型的主要路徑分析、標準化的申請作業流程，並針對最常見的變更類型說明，及補充其他重要法規與特殊情況，以期建構完整的知識體系。
114 年底新北市窯業用地統計表：
總計：62 筆，面積 15.750102 公頃（一般農業區 1 筆 0.075834 公頃，山坡地保育區 61 筆 15.674268 公頃）
三芝區：3 筆，面積 0.858236 公頃（全屬山坡地保育區）
鶯歌區：41 筆，面積 10.251342 公頃（全屬山坡地保育區）
三峽區：18 筆，面積 4.640524 公頃（一般農業區 1 筆 0.075834 公頃，山坡地保育區 17 筆 4.56469 公頃）`,
                '目的與統計表'
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
            隨著產業結構的變遷與土地利用需求的多樣化，原有的窯業用地常有轉型活化之必要，
            <strong className="text-[#1F3864]">截至 114 年底，新北市轄內的窯業用地共計 62 筆，面積共計 15.750102 公頃</strong>。
            因此，本文整理相關法規及審查作業流程，使處理非都市土地「窯業用地」的變更編定申請案審查作業流程能符合現行法規要求。
          </p>
          <p>
            本文內容將依序涵蓋窯業用地的法規基礎與使用限制、轉型的主要路徑分析、標準化的申請作業流程，並針對最常見的變更類型說明，及補充其他重要法規與特殊情況，以期建構完整的知識體系。
          </p>

          {/* 114 年底新北市窯業用地統計表 */}
          <div className="space-y-1.5 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#8C5A4B]">● 114 年底新北市窯業用地統計表</span>
              <span className="text-[11px] text-[#7D7065]">統計至 114 年底</span>
            </div>
            <div className="overflow-x-auto rounded-lg border border-[#DDD5C7] bg-white">
              <table className="w-full text-xs text-center border-collapse">
                <thead className="bg-[#1F3864] text-white">
                  <tr>
                    <th rowSpan={2} className="p-2 border border-[#DDD5C7]">新北市窯業用地</th>
                    <th colSpan={2} className="p-2 border border-[#DDD5C7]">總計</th>
                    <th colSpan={2} className="p-2 border border-[#DDD5C7]">一般農業區</th>
                    <th colSpan={2} className="p-2 border border-[#DDD5C7]">山坡地保育區</th>
                  </tr>
                  <tr>
                    <th className="p-1.5 border border-[#DDD5C7]">筆數</th>
                    <th className="p-1.5 border border-[#DDD5C7]">面積（公頃）</th>
                    <th className="p-1.5 border border-[#DDD5C7]">筆數</th>
                    <th className="p-1.5 border border-[#DDD5C7]">面積（公頃）</th>
                    <th className="p-1.5 border border-[#DDD5C7]">筆數</th>
                    <th className="p-1.5 border border-[#DDD5C7]">面積（公頃）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DDD5C7] text-[#4A3E39]">
                  <tr className="bg-amber-50/60 font-bold text-[#1F3864]">
                    <td className="p-2 border border-[#DDD5C7]">總計</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono">62</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono text-emerald-800">15.750102</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono">1</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono">0.075834</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono">61</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono text-emerald-800">15.674268</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#DDD5C7] font-semibold">三芝區</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono">3</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono">0.858236</td>
                    <td className="p-2 border border-[#DDD5C7] text-gray-400">-</td>
                    <td className="p-2 border border-[#DDD5C7] text-gray-400">-</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono">3</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono">0.858236</td>
                  </tr>
                  <tr className="bg-[#FAF7F2]">
                    <td className="p-2 border border-[#DDD5C7] font-semibold">鶯歌區</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono text-blue-900 font-bold">41</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono text-blue-900 font-bold">10.251342</td>
                    <td className="p-2 border border-[#DDD5C7] text-gray-400">-</td>
                    <td className="p-2 border border-[#DDD5C7] text-gray-400">-</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono font-bold text-blue-900">41</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono font-bold text-blue-900">10.251342</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#DDD5C7] font-semibold">三峽區</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono">18</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono">4.640524</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono">1</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono">0.075834</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono">17</td>
                    <td className="p-2 border border-[#DDD5C7] font-mono">4.56469</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-[#7D7065] pt-1">
              註：鶯歌區佔全市窯業用地筆數 66% 及面積 65%，全數座落於山坡地保育區。
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 二、窯業用地容許使用項目 */}
      {/* ===================================================================== */}
      <section id="ceramic-sec-2" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              二
            </span>
            <span>窯業用地容許使用項目</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-2',
                `二、窯業用地容許使用項目
根據《非都市土地使用管制規則》及其附表一之規定，窯業用地在不辦理變更編定的前提下，其容許使用項目可區分為「免經申請」與「需經申請」兩大類：
【免經申請即可使用之項目】：
⚫ 窯業使用及其設施
⚫ 農業使用（同農牧用地）
⚫ 水產養殖設施（同農牧用地）
⚫ 水庫、河川、湖泊淤泥資源再生利用臨時處理設施（同農牧用地）
⚫ 臨時堆置收納營建剩餘土石方（同礦業用地）
【需經目的事業主管機關許可之項目】：
⚫ 再生能源相關設施（例如：風力發電、太陽光電發電設施點狀使用，面積不得超過 660 平方公尺；再生能源輸送管線設施限於線狀使用）`,
                '容許使用項目'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-2' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
          根據《非都市土地使用管制規則》及其附表一之規定，窯業用地在不辦理變更編定的前提下，其容許使用項目可區分為「免經申請」與「需經申請」兩大類：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          {/* 免經申請 */}
          <div className="p-4 rounded-xl bg-white border border-emerald-200 space-y-3 shadow-2xs">
            <div className="p-2 rounded-lg bg-emerald-700 text-white font-bold text-center">
              免經申請即可使用之項目
            </div>
            <ul className="space-y-2 text-[#4A3E39]">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>窯業使用及其設施</strong>
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>農業使用</strong>（同農牧用地）
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>水產養殖設施</strong>（同農牧用地）
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>水庫、河川、湖泊淤泥資源再生利用臨時處理設施</strong>（同農牧用地）
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>臨時堆置收納營建剩餘土石方</strong>（同礦業用地）
                </span>
              </li>
            </ul>
          </div>

          {/* 需經目的主管許可 */}
          <div className="p-4 rounded-xl bg-white border border-blue-200 space-y-3 shadow-2xs">
            <div className="p-2 rounded-lg bg-blue-700 text-white font-bold text-center">
              需經目的事業主管機關許可之項目
            </div>
            <div className="space-y-2 text-[#4A3E39]">
              <div className="flex items-start gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong>再生能源相關設施</strong>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                    例如：風力發電、太陽光電發電設施<strong>點狀使用，面積不得超過 660 平方公尺</strong>；再生能源輸送管線設施限於<strong>線狀使用</strong>。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 三、窯業用地變更編定應備文件 */}
      {/* ===================================================================== */}
      <section id="ceramic-sec-3" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              三
            </span>
            <span>窯業用地變更編定應備文件與山坡地限制</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-3',
                `三、窯業用地變更編定應備文件
(一)、根據《非都市土地使用管制規則》第 28 條規定，申請變更編定時應檢附以下主要文件：
1. 非都市土地變更編定申請書
2. 興辦事業計畫核准文件
3. 申請變更編定同意書（非土地所有權人申請時檢附）
4. 土地使用計畫配置圖及位置圖
5. 土地登記謄本、地籍圖謄本等
(二)、其他有關文件：
1. 應先徵得變更前直轄市或縣（市）目的事業主管機關同意。
2. 除申請變更編定為農牧、林業、國土保安或生態保護用地案件外，應依非都市土地變更編定執行要點第 3 點第 3 項規定，就該要點附錄一之二所列查詢項目逐一向各該主管機關（單位）查詢，並將查詢結果附於變更編定書件內，向該管直轄市或縣（市）主管機關申請辦理。
3. 山坡地範圍內各使用分區土地申請變更編定，屬依水土保持法相關規定應擬具水土保持計畫者，應檢附水土保持機關核發之水土保持完工證明書(或符合非都市土地使用管制規則第 48 條但書規定)。
4. 申請變更編定標的位於山坡地範圍，申請興辦事業計畫面積未達 10 公頃者，應檢附山坡地開發面積免受 10 公頃限制文件。且屬應依管制規則第 49 條之 1 規定提送專案小組審查之變更編定案件，其應檢附之文件，至少應包括不得規劃作建築使用之評估或說明資料及相關專業技師簽證文件。`,
                '變更編定應備文件'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-3' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
          {/* (一) 第 28 條主要文件 */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2">
            <h4 className="font-bold text-[#1F3864] text-sm sm:text-base">
              (一) 依管制規則第 28 條規定檢附主要文件
            </h4>
            <ol className="list-decimal list-inside space-y-1 pl-1">
              <li>非都市土地變更編定申請書</li>
              <li>興辦事業計畫核准文件</li>
              <li>申請變更編定同意書（非土地所有權人申請時檢附）</li>
              <li>土地使用計畫配置圖及位置圖</li>
              <li>土地登記謄本、地籍圖謄本等</li>
            </ol>
          </div>

          {/* (二) 其他有關文件 */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2">
            <h4 className="font-bold text-[#1F3864] text-sm sm:text-base">
              (二) 其他有關文件與山坡地審查
            </h4>
            <ol className="list-decimal list-inside space-y-1.5 pl-1">
              <li>
                <strong>徵得變更前機關同意：</strong>應先徵得變更前直轄市或縣（市）目的事業主管機關同意。
              </li>
              <li>
                <strong>附錄一之二查核：</strong>除申請變更編定為農牧、林業、國土保安或生態保護用地案件外，應依非都市土地變更編定執行要點第 3 點第 3 項規定，就該要點附錄一之二所列查詢項目逐一向各該主管機關（單位）查詢，並將查詢結果附於變更編定書件內。
              </li>
              <li>
                <strong>水土保持完工證明：</strong>山坡地範圍內各使用分區土地申請變更編定，屬依水保法應擬具水土保持計畫者，應檢附水土保持機關核發之水土保持完工證明書（或符合非都市土地使用管制規則第 48 條但書規定）。
              </li>
              <li className="text-amber-900 bg-amber-50/60 p-2.5 rounded border border-amber-200">
                <strong>山坡地未達 10 公頃限制與技師簽證（第 49 條之 1）：</strong>
                申請變更編定標的位於山坡地範圍，申請興辦事業計畫面積未達 10 公頃者，應檢附山坡地開發面積免受 10 公頃限制文件。且屬應依管制規則第 49 條之 1 規定提送專案小組審查之變更編定案件，其應檢附之文件，
                <strong>至少應包括不得規劃作建築使用之評估或說明資料及相關專業技師簽證文件</strong>。
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 四、窯業用地的變更類型 */}
      {/* ===================================================================== */}
      <section id="ceramic-sec-4" className="space-y-5 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              四
            </span>
            <span>窯業用地的變更類型（法規依據與三大路徑）</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-4',
                `四、窯業用地的變更類型
(一)、法規依據：
⚫《非都市土地使用管制規則》第 34 條：一般農業區、山坡地保育區及特定專用區內取土部分以外之窯業用地，經領有工廠登記證者，經工業主管機關審查認定得供工業使用者，得申請變更編定為丁種建築用地。
⚫《非都市土地使用管制規則》第 57 條：處理 83 年 12 月 31 日前申請變更為甲建之尚未終結案件。
⚫《非都市土地使用管制規則》第 58 條：包圍或夾雜之土地，面積小於 1 公頃且不超過興辦事業總面積 1/10 者得併同提出。
⚫ 新北市審查作業要點第 2 條名詞定義：包圍（全部相接無缺口）、夾雜（凹入型缺口小於30公尺、狹長型平均寬度小於15公尺）、低污染投資事業、附加產值高（每公頃每年產值二億元以上）。
(二)、變更類型案件說明：
1. 丁種建築用地（第 34 條，最常見路徑；工廠登記證被註銷或廠房已拆除者，得檢具營運當時空照圖等佐證審查；產創園區達 5 公頃分區變更，一般工業使用達 10 公頃辦理分區變更）。
2. 甲種建築用地（第 57 條歷史路徑，限依其計畫使用加註；拍賣拍定人直接繼受）。
3. 特定目的事業用地（第 28 條社福、廢棄物、生技等需興辦核准）。`,
                '變更類型'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-4' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        {/* (一) 法規依據與新北要點第 2 條名詞定義 */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-4">
          <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-2">
            <span className="text-[#8C5A4B]">（一）</span>
            <span>法規依據與新北市要點名詞定義（包圍與夾雜精確量測）</span>
          </h4>

          <div className="space-y-2 text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
            <p>
              <strong>⚫ 管制規則第 34 條：</strong>「一般農業區、山坡地保育區及特定專用區內取土部分以外之窯業用地，經領有工廠登記證者，經工業主管機關審查認定得供工業使用者，得申請變更編定為丁種建築用地。」
            </p>
            <p>
              <strong>⚫ 管制規則第 57 條：</strong>處理特定農業區或一般農業區內取土以外窯業用地於民國 83 年 12 月 31 日前申請變更為甲建之舊案。
            </p>
            <p>
              <strong>⚫ 管制規則第 58 條：</strong>申請人依第 34 條或前條辦理變更編定時，興辦計畫範圍內有為變更前之窯業用地或丁種建築用地所<strong>包圍或夾雜之土地，面積合計小於 1 公頃，且不超過總面積十分之一者</strong>，得併同提出申請。
            </p>
          </div>

          {/* 新北審查作業要點第 2 條名詞定義判斷表 */}
          <div className="space-y-1.5 pt-2">
            <span className="text-xs font-bold text-[#8C5A4B]">
              ● 新北市審查作業要點第 2 條名詞定義與精確量測判斷表
            </span>
            <div className="overflow-x-auto rounded-lg border border-[#DDD5C7] bg-white">
              <table className="w-full text-xs border-collapse">
                <thead className="bg-[#1F3864] text-white text-center">
                  <tr>
                    <th className="p-2 border border-[#DDD5C7] w-24">名詞</th>
                    <th className="p-2 border border-[#DDD5C7] text-left w-1/3">法定定義</th>
                    <th className="p-2 border border-[#DDD5C7] text-left">實務審查精確判斷標準</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DDD5C7] text-[#4A3E39]">
                  <tr>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-center text-[#1F3864]">包圍</td>
                    <td className="p-2 border border-[#DDD5C7]">指申請土地周邊全部為丁種建築用地所包圍者。</td>
                    <td className="p-2 border border-[#DDD5C7] text-slate-700">
                      <strong>嚴格定義：</strong>要求申請地塊的四周邊界必須完全與既有的丁種建築用地相接，
                      <strong className="text-rose-800">不得有任何缺口或與其他地目相鄰</strong>。
                    </td>
                  </tr>
                  <tr className="bg-[#FAF7F2]">
                    <td className="p-2 border border-[#DDD5C7] font-bold text-center text-[#1F3864]">夾雜</td>
                    <td className="p-2 border border-[#DDD5C7]">
                      指申請土地凹入丁種建築用地且其缺口寬度未超過三十公尺者，或對邊為丁種建築用地所夾之狹長且平均寬度未超過十五公尺之全部土地者。
                    </td>
                    <td className="p-2 border border-[#DDD5C7] text-slate-700 space-y-1">
                      <div>審查時需依地籍圖精確量測兩種情況：</div>
                      <div>
                        <strong>1. 凹入型：</strong>土地三面被丁種建築用地環繞形成凹口，其
                        <strong className="text-blue-900">開口寬度不得超過 30 公尺</strong>。
                      </div>
                      <div>
                        <strong>2. 狹長型：</strong>土地被兩側丁建夾在中間，其
                        <strong className="text-blue-900">平均寬度不得超過 15 公尺</strong>。
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-center text-[#1F3864]">原編定公告丁建</td>
                    <td className="p-2 border border-[#DDD5C7]">指申請土地於公告非都市土地使用編定時，編定為丁種建築用地者。</td>
                    <td className="p-2 border border-[#DDD5C7] text-slate-700">以 70 年公告實施當時登記簿編定為準。</td>
                  </tr>
                  <tr className="bg-[#FAF7F2]">
                    <td className="p-2 border border-[#DDD5C7] font-bold text-center text-[#1F3864]">低污染投資事業</td>
                    <td className="p-2 border border-[#DDD5C7]">
                      指符合經濟部「興辦工業人利用毗連非都市土地擴展計畫之低污染事業認定方式」者。
                    </td>
                    <td className="p-2 border border-[#DDD5C7] text-slate-700">
                      指興辦事業非屬附表（1~51 項）所列事業類別，或其他經本府專案認定者。
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-center text-[#1F3864]">附加產值高投資事業</td>
                    <td className="p-2 border border-[#DDD5C7]">
                      指興辦之事業未來每年產值每公頃在二億元以上（按面積比例計算）。
                    </td>
                    <td className="p-2 border border-[#DDD5C7] text-slate-700 font-mono">
                      每公頃產值 ≥ 2 億元 / 年。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-white border border-[#DDD5C7] text-xs text-slate-700 space-y-1">
            <p>
              <strong>第 4 條規定檢具書件：</strong>變更編定申請書、工廠登記證影本、原設廠用地（取土以外）謄本/清冊/地籍圖、土地所有權人同意書或公有土地會勘紀錄、興辦事業計畫書件（含產品與製程、鄰近農田灌排與農路影響）、交通運輸計畫書圖（現況、服務水準、車種車次時間、動線停車出入口安全）、變更前後廠地位置圖（≥1/5000）與配置圖（≥1/1200）。
            </p>
          </div>
        </div>

        {/* (二) 三大變更類型深度剖析表 */}
        <div className="space-y-4">
          <span className="text-xs font-bold text-[#1F3864] block">
            ● 變更類型案件深度剖析（丁種建築用地、甲種建築用地、特定目的事業用地）
          </span>

          <div className="grid grid-cols-1 gap-4">
            {/* 1. 丁種建築用地 */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] space-y-3 shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#DDD5C7] pb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#1F3864] text-white font-bold text-xs">
                    類型 1
                  </span>
                  <h5 className="font-bold text-[#1F3864] text-base">
                    丁種建築用地（依管制規則第 34 條，最常見路徑）
                  </h5>
                </div>
                <span className="text-xs text-[#8C5A4B] font-semibold">持有工廠登記證之窯業用地首選</span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                <p>
                  <strong>1. 包圍夾雜併同申請：</strong>若申請範圍內有變更前之窯業用地或丁種建築用地所包圍或夾雜之土地，面積合計小於 1 公頃者，且不超過興辦事業計畫範圍總面積十分之一者，得併同提出申請（第 58 條）。
                </p>
                <p>
                  <strong>2. 興辦計畫核准前置：</strong>申請人仍須依規定擬具興辦事業計畫，並報經工業主管機關核准後，方可辦理變更（內政部 94 年 10 月 5 日內授中辦地字第 094052864 號函）。
                </p>
                <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200">
                  <strong className="text-amber-950 block mb-0.5">
                    3. 工廠登記證已註銷或廠房已拆除之處理機制（關鍵函釋）：
                  </strong>
                  <p className="text-slate-700">
                    若申請地的工廠登記證已被註銷，或廠房已拆除，導致無法依現況或文件認定當時的工業使用面積時，
                    <strong className="text-[#1F3864]">
                      申請人仍可透過提供營運當時的航空照片等客觀佐證資料，證明當時實際供工業使用的面積範圍
                    </strong>
                    ，工業主管機關可據此進行審查認定，以利續辦變更程序。（內政部 101 年 8 月 28 日內授中辦地字第 1016038340 號函、經濟部工業局 91 年 5 月 9 日工第地字第 0910350712-0 號函）。
                  </p>
                </div>
                <p>
                  <strong>4. 分區變更門檻規模：</strong>若屬依產業創新條例申請核定之產業園區，
                  <strong className="text-blue-900 font-semibold">面積達 5 公頃應辦理使用分區變更</strong>；惟非屬前開條例核定之工業使用，
                  <strong className="text-blue-900 font-semibold">分區變更規模則為 10 公頃以上</strong>（內政部營建署 109 年 6 月 1 營署綜字第 1090038592 號函）。
                </p>
              </div>
            </div>

            {/* 2. 甲種建築用地 */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] space-y-3 shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#DDD5C7] pb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#8C5A4B] text-white font-bold text-xs">
                    類型 2
                  </span>
                  <h5 className="font-bold text-[#1F3864] text-base">
                    甲種建築用地（依管制規則第 57 條，歷史性路徑）
                  </h5>
                </div>
                <span className="text-xs text-rose-800 font-semibold">非當前新案常規途徑，限歷史未結舊案</span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                <p>
                  此為一條歷史性的變更路徑，主要用於處理於<strong>民國 83 年 12 月 31 日前已受理但程序尚未終結的舊案</strong>。需特別強調，這並非當前新申請案的常規途徑，僅適用於符合特定歷史條件的個案。
                </p>
                <div className="space-y-1.5 pl-2 border-l-2 border-[#8C5A4B]/30">
                  <p>
                    <strong>1. 註記管制：</strong>為落實後續的土地使用管制，其土地登記簿標示部的其他登記事項欄必須加註
                    <strong className="text-red-700">「限依其計畫使用」</strong>之字樣（內政部 89 年 9 月 25 日台（89）內中地字第 8980297 號函）。
                  </p>
                  <p>
                    <strong>2. 法院拍賣拍定人權利繼受：</strong>若土地在變更程序中經法院拍賣，拍定人（新的土地所有權人）
                    <strong>即可直接繼受原申請人已獲准的相關權利，無需再徵得原申請人的同意</strong>，便可續辦後續的變更程序（內政部 96 年 9 月 6 日內授中辦地字第 09607271941 號函）。
                  </p>
                </div>
              </div>
            </div>

            {/* 3. 特定目的事業用地 */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] space-y-3 shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#DDD5C7] pb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-emerald-700 text-white font-bold text-xs">
                    類型 3
                  </span>
                  <h5 className="font-bold text-[#1F3864] text-base">
                    特定目的事業用地（依管制規則第 28 條及興辦計畫）
                  </h5>
                </div>
                <span className="text-xs text-emerald-800 font-semibold">轉型社會福利、生技、廢棄物處理</span>
              </div>

              <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                此路徑適用於土地需改作特定設施之需求，例如社會福利設施、廢棄物處理設施、生物技術產業設施等。此類變更的核心前提是
                <strong className="text-[#1F3864]">申請人必須先擬具「興辦事業計畫」，並獲得該設施之目的事業主管機關審查核准</strong>，方可提出變更申請。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 五、窯業用地變更編定申請之作業流程 */}
      {/* ===================================================================== */}
      <section id="ceramic-sec-5" className="space-y-5 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              五
            </span>
            <span>窯業用地變更編定申請之作業流程（原件第 6 ~ 7 頁完整重現）</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-5',
                `五、窯業用地變更編定申請之作業流程
步驟 01：興辦事業計畫核准（目的事業主管機關核准計畫）
步驟 02：提交地政局申請（依非都管制規則第 28 條備妥文件申請變更編定）
步驟 03：地政局審查（跨單位會審、實地會勘現況有無先行違規）
審查核准發函通知：
【非山坡地範圍】：發函要求繳清回饋金 ➔ 辦理地籍分割 ➔ 函請地政所辦理異動登記。
【山坡地範圍】：依第 49-1 條提編定審議小組審查 ➔ 通知會議列席說明 ➔ 審核通過辦理地籍分割 ➔ 函請地政所辦理異動登記。
（四）6 個月內免重複會審機制：目的事業核准後 6 個月內就相同項目免重複會審，加速流程。經區委會審議通過者得免填審查表逕辦異動。`,
                '變更編定流程'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-5' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        {/* 視覺化四步驟卡片流程 */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#DDD5C7] shadow-sm space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
            <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 space-y-1">
              <span className="px-2 py-0.5 rounded bg-blue-700 text-white font-bold text-[10px]">
                步驟 01
              </span>
              <div className="font-bold text-[#1F3864] text-sm">興辦事業計畫核准</div>
              <p className="text-[11px] text-slate-600">目的事業主管機關核准計畫</p>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 space-y-1">
              <span className="px-2 py-0.5 rounded bg-blue-700 text-white font-bold text-[10px]">
                步驟 02
              </span>
              <div className="font-bold text-[#1F3864] text-sm">提交地政局申請</div>
              <p className="text-[11px] text-slate-600">依第 28 條規定備妥書件申請變更</p>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 space-y-1">
              <span className="px-2 py-0.5 rounded bg-blue-700 text-white font-bold text-[10px]">
                步驟 03
              </span>
              <div className="font-bold text-[#1F3864] text-sm">地政局審查</div>
              <p className="text-[11px] text-slate-600">跨單位會審 ＆ 實地會勘有無違規</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#1F3864] text-white text-center font-bold text-xs sm:text-sm">
            審查核准：發函通知申請人
          </div>

          {/* 非山坡地 vs 山坡地分流 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 非山坡地範圍 */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2 text-xs sm:text-sm">
              <div className="font-bold text-amber-950 flex items-center gap-1.5 border-b border-amber-200 pb-1">
                <span className="w-5 h-5 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs">
                  A
                </span>
                <span>【非山坡地範圍】</span>
              </div>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-800 pt-1">
                <li>發函要求申請人繳清所有應繳的回饋金。</li>
                <li>倘有涉及土地分割，應先洽地政事務所辦理地籍分割。</li>
                <li>完成上開事項後，由地政局函請地政事務所辦理使用地異動登記。</li>
              </ol>
            </div>

            {/* 山坡地範圍 */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2 text-xs sm:text-sm">
              <div className="font-bold text-emerald-950 flex items-center gap-1.5 border-b border-emerald-200 pb-1">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs">
                  B
                </span>
                <span>【山坡地範圍】（鶯歌等 61 筆適用）</span>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-slate-800 pt-1">
                <li>依管制規則第 49 條之 1 規定，提交本市非都市土地使用編定審議小組審查。</li>
                <li>發函通知編定審議小組會議時間，申請人或相關專業技師與會說明。</li>
                <li>編定審議小組審核通過後，倘涉及土地分割，洽地政事務所辦理分割。</li>
                <li>由地政局函請地政事務所辦理使用地異動登記。</li>
              </ol>
            </div>
          </div>
        </div>

        {/* 條列實務要點 */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-3 text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
          <p>
            <strong>(一)、擬具興辦事業計畫：</strong>申請人依開發目標擬定「興辦事業計畫」（含土地使用規劃、設施配置、營運模式），報請變更後用途之目的事業主管機關審查。
          </p>
          <p>
            <strong>(二)、徵詢變更前機關同意：</strong>審查興辦事業計畫時，必須依《非都市土地變更編定執行要點》第 3 點規定，
            <strong className="text-[#1F3864]">徵詢「變更前」土地使用的主管機關（經發局）</strong>
            及相關機關（地政、農業、工務、水利、環保、消防）同意，並將「新北市審查表」與山坡地分工表一併納入會審。
          </p>
          <p>
            <strong>(三)、提交地政局申請：</strong>取得興辦核准後，備妥第 28 條文件向地政局申請。目的機關副知地政局時可先行提供各單位歷次審查意見。
          </p>
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-300">
            <strong className="text-emerald-900 block mb-0.5">
              (四)、六個月內免重複會審之加速流程機制：
            </strong>
            <p className="text-emerald-950">
              地政局受理後，若目的事業主管機關在
              <strong>核准興辦事業計畫後的六個月內，就相同項目，於地政局變更編定案件審查時免再重複會審相同項目</strong>
              ，以加速行政流程。倘為經區域計畫委員會審議通過之案件，得免填審查表逕行辦理異動。
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 六、窯業用地更正編定 */}
      {/* ===================================================================== */}
      <section id="ceramic-sec-6" className="space-y-5 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              六
            </span>
            <span>窯業用地更正編定（70 年公告基準與最新廢止函釋）</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-6',
                `六、窯業用地更正編定
更正編定核心宗旨在於修正民國 70 年代區域計畫公告編定時，因地籍調查錯誤、漏列或資料不齊所導致的行政處分瑕疵。必須確認「編定公告前」之實體使用狀態進行審認。
(一)、時間點判定：客觀證據證明窯業使用事實早於本市 70 年 2 月 15 日編定公告日。若事實發生於該日之後，性質即屬「變更編定」而非「更正編定」。
(二)、應備文件：
主要文件：工業用地證明書（獎投條例註明磚瓦製造）、早期工廠登記證、稅籍證明（須載明工業用或窯業用，僅寫廠房不足）。
輔助文件：航照圖、地形圖、水電用途證明；具結書與鄰里長證明嚴禁單獨採認。
(三)、更正編定作業流程：初步審查 ➔ 資料調閱與跨機關查核 ➔ 現場勘查確認有無窯體殘跡 ➔ 核定與登載。
◆ 注意事項及關鍵函釋：
1. 內政部 110 年 5 月 3 日台內地字第 1100261492 號函：窯業用地與丁種建築用地之土地使用型態不同，除於 70 年公告編定有錯誤外，不得互為更正。（正式宣布廢止 72 年 139726 號及 74 年 330083 號函釋）。
2. 內政部已停止適用 89 年 11 月 7 日函釋有關山坡地保育區窯業用地更正編定丁建以設廠面積為準之規定（101 年 5 月 22 日函）。
3. 編定前之「私設工廠」法律上不認定為合法使用，不得辦理更正編定。`,
                '更正編定'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-6' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
          更正編定核心宗旨在於修正民國 70 年代區域計畫公告編定時，因地籍調查錯誤、漏列或資料不齊所導致的行政處分瑕疵。為維護地籍資料之準確性與土地所有權人之合法權益，必須確認
          <strong className="text-[#1F3864]">「編定公告前」之實體使用狀態</strong>進行審認。
        </p>

        {/* (一) 時間點判定 */}
        <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-1.5 text-xs sm:text-sm">
          <strong className="text-[#1F3864] block">(一) 時間點判定：70 年 2 月 15 日分水嶺</strong>
          <p className="text-[#4A3E39] leading-relaxed">
            申請人必須提出客觀證據，證明窯業使用事實早於本市{' '}
            <strong className="text-red-700 font-mono">70 年 2 月 15 日</strong>
            非都市土地編定公告日。若相關證明文件顯示其事實發生於上述日期之後，其性質即屬
            <strong className="text-[#8C5A4B]">「變更編定」而非「更正編定」</strong>。
          </p>
        </div>

        {/* (二) 應備文件清單 */}
        <div className="space-y-1.5">
          <span className="text-xs font-bold text-[#8C5A4B]">● (二) 更正編定應備文件與證明力對照表</span>
          <div className="overflow-x-auto rounded-lg border border-[#DDD5C7] bg-white">
            <table className="w-full text-xs border-collapse">
              <thead className="bg-[#1F3864] text-white">
                <tr>
                  <th className="p-2 border border-[#DDD5C7] w-24">文件層級</th>
                  <th className="p-2 border border-[#DDD5C7] w-48 text-left">文件名稱</th>
                  <th className="p-2 border border-[#DDD5C7] text-left">審查說明與採認標準</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C7] text-[#4A3E39]">
                <tr>
                  <td className="p-2 border border-[#DDD5C7] font-bold text-center text-blue-900 bg-blue-50/50">
                    主要文件
                  </td>
                  <td className="p-2 border border-[#DDD5C7] font-medium">
                    工業用地證明書、工廠登記證明或工業主管機關認定文件
                  </td>
                  <td className="p-2 border border-[#DDD5C7]">
                    依原《獎勵投資條例》領有之「工業用地證明書」（註明供磚瓦製造使用）或早期「工廠登記證」，或出具工業主管機關認定文件。
                  </td>
                </tr>
                <tr className="bg-[#FAF7F2]">
                  <td className="p-2 border border-[#DDD5C7] font-bold text-center text-blue-900 bg-blue-50/50">
                    主要文件
                  </td>
                  <td className="p-2 border border-[#DDD5C7] font-medium">稅籍證明</td>
                  <td className="p-2 border border-[#DDD5C7]">
                    <strong className="text-rose-800">須為載明「工業用」或「窯業用」之房屋稅或營業稅證明</strong>。若稅籍僅記載「廠房」而未具體標註用途，不可視為單一足夠證據。
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#DDD5C7] font-bold text-center text-slate-700 bg-slate-50">
                    輔助文件
                  </td>
                  <td className="p-2 border border-[#DDD5C7] font-medium">
                    航照圖、地形圖、水電用途證明
                  </td>
                  <td className="p-2 border border-[#DDD5C7]">
                    用以證明建物存在之「客觀事實」，但須配合工業主管機關認定、工廠登記或稅籍資料方能確認「用途」。
                  </td>
                </tr>
                <tr className="bg-[#FAF7F2]">
                  <td className="p-2 border border-[#DDD5C7] font-bold text-center text-slate-700 bg-slate-50">
                    輔助文件
                  </td>
                  <td className="p-2 border border-[#DDD5C7] font-medium">具結書與鄰里長證明</td>
                  <td className="p-2 border border-[#DDD5C7] text-rose-800 font-semibold">
                    嚴禁單獨作為核准依據，僅具參考價值。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* (三) 更正編定作業流程 */}
        <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2 text-xs sm:text-sm">
          <strong className="text-[#1F3864] block">(三) 更正編定申請之作業流程（四階段）：</strong>
          <ol className="list-decimal list-inside space-y-1 text-[#4A3E39]">
            <li>
              <strong>初步審查：</strong>核對申請書、最新土地登記謄本、身分證明文件，並調閱原始土地登記簿（查核是否曾具「建」地目背景）。
            </li>
            <li>
              <strong>資料調閱與跨機關查核：</strong>向工業主管機關、稅務機關查核申請文件之合法性，並查閱本市 70 年編定公告前後之航照影像。
            </li>
            <li>
              <strong>現場勘查：</strong>會同地政事務所、經發局、工務局等單位，現場確認地界、有無窯體殘跡或生產設施及其坐落範圍。
            </li>
            <li>
              <strong>核定與登載程序：</strong>經審核無誤後，核准更正編定並囑託地政事務所於土地登記簿辦理更正異動登記。
            </li>
          </ol>
        </div>

        {/* 關鍵函釋：110年5月3日函 */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50/80 to-amber-50/80 border border-rose-300 space-y-2.5 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 font-bold text-rose-950 text-sm sm:text-base">
            <AlertTriangle className="w-5 h-5 text-rose-700" />
            <span>重要函釋與法規限制（防踩雷指引）</span>
          </div>
          <div className="space-y-2 text-slate-800">
            <div className="p-3 rounded-lg bg-white border border-rose-200">
              <strong className="text-rose-900 block mb-1">
                1. 窯業用地與丁種建築用地不得互為更正（內政部 110.5.3 函釋，詳附件二）：
              </strong>
              <p className="leading-relaxed">
                依據內政部 110 年 5 月 3 日台內地字第 1100261492 號函，正式宣布
                <strong className="text-rose-800">廢止 72 年 139726 號及 74 年 330083 號函釋</strong>。
                窯業用地與丁種建築用地之土地使用型態不同，
                <strong className="underline decoration-rose-600">除於 70 年公告編定有錯誤外，不得互為更正</strong>！
              </p>
            </div>
            <p>
              <strong>2. 山坡地設廠面積函釋停止適用：</strong>內政部已停止適用 89 年 11 月 7 日台內中地字第 8921756 號函有關「山坡地保育區窯業用地更正編定為丁種建築用地，其更正範圍以編定公告前申請工廠設立許可並辦竣工廠登記之設廠面積為準」之函釋（內政部 101 年 5 月 22 日內授中辦地字第 1016650844 號函）。
            </p>
            <p>
              <strong>3. 私設工廠不得更正：</strong>若編定前之使用屬應辦理登記而未辦理之「私設工廠」，法律上不認定其為合法使用，不得辦理更正編定。
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 七、國土計畫土地使用管制情形-窯業相關 */}
      {/* ===================================================================== */}
      <section id="ceramic-sec-7" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#1F3864] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center text-sm font-bold">
              七
            </span>
            <span>國土計畫土地使用管制情形-窯業相關</span>
          </h3>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'sec-7',
                `七、國土計畫土地使用管制情形-窯業相關
依據國土計畫法第 22 條第 1 項、第 23 條第 2 項及「國土計畫土地使用管制規則」（113 年 11 月法規會審竣版草案）第 3 條、第 4 條規定：
附表一 國土保育地區、農業發展地區、城鄉發展地區容許使用情形表（節錄）：
群組 4 礦業，項次 4-5 窯業使用及其設施：
使用細目包括：自用窯業原料取土、窯業原料或成品堆置場、窯業製造、廠房、單身員工宿舍及其必要設施。
各分區容許情形：
國1 ❶、國2 ❶、農1 ❶、農2 ❶、農3 ❶、農4非原 ❶、農4原 ❶、城2-1 ❶、城3 ╳。
備註 ❶：限於依第三條第一項規定註記之窯業用地。
結論：除在城 3 禁止使用外，均得免經申請同意使用，惟僅限於國土計畫使用管制規則第 3 條第 1 項規定註記之窯業用地。`,
                '國土計畫管制情形'
              )
            }
            className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-semibold text-[#8C5A4B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedKey === 'sec-7' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>複製此段</span>
          </button>
        </div>

        <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-3 text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
          <p>
            依據國土計畫法第 22 條第 1 項規定製作國土功能分區圖，及第 23 條第 2 項授權訂定「國土計畫土地使用管制規則」（113 年 11 月法規會審竣版草案）。依管制規則第 3 條第 1 項（按原使用地類別註記及管制內容使用）及第 4 條附表一容許使用情形表，涉及窯業設施規定整理如下表：
          </p>

          {/* 附表一容許使用情形表（節錄） */}
          <div className="space-y-1.5 pt-1">
            <span className="text-xs font-bold text-[#8C5A4B]">
              ● 附表一 國土保育地區、農業發展地區、城鄉發展地區容許使用情形表（節錄）
            </span>
            <div className="overflow-x-auto rounded-lg border border-[#DDD5C7] bg-white">
              <table className="w-full text-xs text-center border-collapse">
                <thead className="bg-[#1F3864] text-white">
                  <tr>
                    <th rowSpan={2} className="p-2 border border-[#DDD5C7]">群組編號</th>
                    <th rowSpan={2} className="p-2 border border-[#DDD5C7]">群組</th>
                    <th rowSpan={2} className="p-2 border border-[#DDD5C7]">項次</th>
                    <th rowSpan={2} className="p-2 border border-[#DDD5C7]">使用項目</th>
                    <th rowSpan={2} className="p-2 border border-[#DDD5C7]">使用細目</th>
                    <th colSpan={2} className="p-1 border border-[#DDD5C7]">國土保育地區</th>
                    <th colSpan={5} className="p-1 border border-[#DDD5C7]">農業發展地區</th>
                    <th colSpan={2} className="p-1 border border-[#DDD5C7]">城鄉發展地區</th>
                    <th rowSpan={2} className="p-2 border border-[#DDD5C7] text-left">備註</th>
                  </tr>
                  <tr>
                    <th className="p-1 border border-[#DDD5C7]">國 1</th>
                    <th className="p-1 border border-[#DDD5C7]">國 2</th>
                    <th className="p-1 border border-[#DDD5C7]">農 1</th>
                    <th className="p-1 border border-[#DDD5C7]">農 2</th>
                    <th className="p-1 border border-[#DDD5C7]">農 3</th>
                    <th className="p-1 border border-[#DDD5C7]">農 4 非原</th>
                    <th className="p-1 border border-[#DDD5C7]">農 4 原</th>
                    <th className="p-1 border border-[#DDD5C7]">城 2-1</th>
                    <th className="p-1 border border-[#DDD5C7]">城 3</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DDD5C7] text-[#4A3E39]">
                  <tr>
                    <td rowSpan={5} className="p-2 border border-[#DDD5C7] font-bold">4</td>
                    <td rowSpan={5} className="p-2 border border-[#DDD5C7] font-bold">礦業</td>
                    <td rowSpan={5} className="p-2 border border-[#DDD5C7] font-bold">4-5</td>
                    <td rowSpan={5} className="p-2 border border-[#DDD5C7] font-bold text-[#1F3864]">
                      窯業使用及其設施
                    </td>
                    <td className="p-2 border border-[#DDD5C7] text-left">自用窯業原料取土</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-rose-800">╳</td>
                    <td rowSpan={5} className="p-2 border border-[#DDD5C7] text-left text-xs">
                      <strong className="text-[#8C5A4B]">❶：</strong>限於依第三條第一項規定註記之窯業用地。
                    </td>
                  </tr>
                  <tr className="bg-[#FAF7F2]">
                    <td className="p-2 border border-[#DDD5C7] text-left">窯業原料或成品堆置場</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-rose-800">╳</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#DDD5C7] text-left">窯業製造</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-rose-800">╳</td>
                  </tr>
                  <tr className="bg-[#FAF7F2]">
                    <td className="p-2 border border-[#DDD5C7] text-left">廠房</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-rose-800">╳</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#DDD5C7] text-left">單身員工宿舍及其必要設施</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold">❶</td>
                    <td className="p-2 border border-[#DDD5C7] font-bold text-rose-800">╳</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-[#7D7065] pt-1">
              註：❶ 代表符合備註條件（限於註記之窯業用地）得免經申請同意使用；未符合者禁止使用。╳ 代表禁止使用。
            </p>
          </div>

          <p className="pt-1">
            依容許使用情形表所載，窯業使用及其設施之使用細目
            <strong className="text-rose-800">除在城 3 禁止使用外，均得免經申請同意使用</strong>，惟僅限於國土計畫使用管制規則第三條第一項規定註記之窯業用地。另其餘原窯業用地容許使用項目是否得於國土功能分區各分區分類使用，請詳參附表一其他群組使用項目。
          </p>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 八、結論 與 九、參考資料 */}
      {/* ===================================================================== */}
      <section className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          {/* 八、結論 */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-2 shadow-2xs">
            <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>八、結論</span>
            </h4>
            <p className="text-[#4A3E39] leading-relaxed">
              總結而言，本文彙整了核心法規、關鍵函釋與標準流程，期望能成為同仁在執行非都市土地窯業用地變更編定、容許使用與更正編定業務時的得力助手。
            </p>
          </div>

          {/* 九、參考資料 */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] space-y-1.5 shadow-2xs">
            <h4 className="font-bold text-[#1F3864] text-base flex items-center gap-1.5">
              <FolderOpen className="w-4 h-4 text-[#8C5A4B]" />
              <span>九、參考資料與實務案號</span>
            </h4>
            <ul className="space-y-1 text-slate-700 text-xs">
              <li>
                <strong>(一) 鶯歌實例：</strong>鶯歌區大湖段大竹圍小段 58-2、58-3、58-6、58-8 地號申請變更為丁建（文號：1081389215）。
              </li>
              <li>
                <strong>(二) 三芝實例：</strong>三芝區後厝段番子崙小段 26 地號申請變更為丁建（文號：1090773742）。
              </li>
              <li>(三) 內政部解釋函令-非都市土地使用管制規則第 34、35、57 條。</li>
              <li>(四) 非都市土地使用管制規則。</li>
              <li>(五) 非都市土地變更編定執行要點。</li>
              <li>(六) 新北市政府審查作業要點（詳附件一）。</li>
              <li>(七) 內政部 110 年 5 月 3 日台內地字第 1100261492 號函（詳附件二）。</li>
              <li>(八) 國土計畫土地使用管制規則（113 年 11 月法規會審竣版草案）。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 附件一：新北市審查作業要點全文 */}
      {/* ===================================================================== */}
      <section id="ceramic-sec-att1" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-emerald-700 pb-2">
          <h3 className="text-lg sm:text-xl font-black text-emerald-950 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-700" />
            <span>附件一：新北市政府受理非都市土地使用管制規則第三十二條、第三十三條及第三十四條申請變更編定丁種建築用地審查作業要點</span>
          </h3>
          <span className="text-xs text-[#7D7065]">民國 110 年 02 月 17 日修正</span>
        </div>

        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#DDD5C7] shadow-sm space-y-4 text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
          <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-200">
            <strong>一、</strong>新北市政府（以下簡稱本府）為審查依非都市土地使用管制規則（以下簡稱本規則）第三十二條、第三十三條及第三十四條申請變更編定為丁種建築用地，訂定本要點。
          </div>

          <div className="p-3 rounded-lg bg-white border border-[#DDD5C7] space-y-1.5">
            <strong>二、</strong>本要點所稱本規則之名詞，其定義如下：
            <div className="pl-4 space-y-1 text-slate-700">
              <p>（一）<strong>包圍：</strong>指申請土地周邊全部為丁種建築用地所包圍者。</p>
              <p>（二）<strong>夾雜：</strong>指申請土地凹入丁種建築用地且其缺口寬度未超過三十公尺者，或對邊為丁種建築用地所夾之狹長且平均寬度未超過十五公尺之全部土地者。</p>
              <p>（三）<strong>原編定公告丁種建築用地：</strong>指申請土地於實施非都市土地使用編定時，編定為丁種建築用地者。</p>
              <p>（四）<strong>低污染投資事業：</strong>指興辦之事業符合經濟部訂定「興辦工業人利用毗連非都市土地擴展計畫之低污染事業認定方式」者（興辦之事業非屬附表（一–五十一項）所列之事業類別或其他經本府專案認定者）。</p>
              <p>（五）<strong>附加產值高之投資事業：</strong>指興辦之事業未來每年產值每公頃在二億元以上（按面積比例計算）。</p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-200">
            <strong>三、</strong>第三十二條所稱申請合併包圍或夾雜之土地面積不得大於原核准登記丁種建築用地面積。
          </div>

          <div className="p-3 rounded-lg bg-white border border-[#DDD5C7] space-y-1.5">
            <strong>四、</strong>依本規則第三十二條、第三十三條及第三十四條規定向本府申請變更編定為丁種建築用地，應檢具下列書件：
            <div className="pl-4 space-y-1 text-slate-700">
              <p>（一）非都市土地變更編定申請書。</p>
              <p>（二）工廠登記證影本（依本規則第三十二條、第三十四條規定申請者）或地政單位核發為原編定公告丁種建築用地之證明文件（依本規則第三十三條規定申請者）。</p>
              <p>（三）原設廠用地及申請包圍或夾雜土地登記謄本、土地清冊及地籍圖（依本規則第三十二條、第三十三條規定申請者）或原設廠用地（屬取土部分以外）之土地登記謄本、土地清冊及地籍圖（依本規則第三十四條規定申請者）。</p>
              <p>（四）申請變更編定之土地屬私有者，應檢具土地所有權人變更編定同意書；其屬公有土地者，應檢具本府會同各該公有土地管理機關勘查紀錄。</p>
              <p>（五）興辦事業計畫書件：詳述原設廠用地位置、面積、使用分區、編定類別及申請變更編定土地原因、位置、面積、使用分區、編定類別、使用現況、申請變更編定後產品名稱與產品製造流程、用地變更後對鄰近農業生產環境、鄰近農田灌溉排水及農路系統之影響說明。</p>
              <p>（六）交通運輸計畫書圖（須包含基地及周邊道路現況說明、營運之車種、車次及時間、交通動線規劃、停車空間規劃、道路服務水準分析、基地出入口交通管制及相關安全措施）。</p>
              <p>（七）變更前後廠地及鄰近地區位置圖（比例尺不小於五千分之一）。</p>
              <p>（八）變更前後建築配置平面圖（比例尺不小於一千二百分之一）。</p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-200">
            <strong>五、</strong>前點所應檢附之書件，除第一款之書件應檢具五份外，其餘各款之書件應檢具九份。
          </div>

          <div className="p-3 rounded-lg bg-white border border-[#DDD5C7] space-y-1.5">
            <strong>六、</strong>申請書件應由本府各相關主管機關（地政局、農業局、環境保護局、工務局、水利局、交通局、經濟發展局等）審查，並會同實地勘查。必要時，並得召開聯合審查會議審查。
            <div className="pl-4 space-y-1 text-slate-700">
              <p>前項申請書件有欠缺者，本府應通知申請人限期改正，逾期不補正或無法補正者，應將申請書件發函退還申請人。</p>
              <p>申請變更編定之土地其原始地形或地物已擅自變更者，應依內政部規定之「各目的事業主管機關於受理審查興辦事業計畫或各縣（市）政府受理審查非都市土地變更編定案件，其申請基地之原始地形或地物已擅自變更者之審查處理原則」，查復是否有應予保護、禁止或限制建築地區，作為審核准駁之依據。</p>
              <p>申請基地位於山坡地，依本規則第四十九條之一第二項，由專案小組審查興辦事業計畫範圍內土地是否有不得規劃作建築使用之情形。</p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-200">
            <strong>七、</strong>本府應將計畫核定結果函復申請人及副知地政主管機關，並請申請人向地政主管機關申請變更編定。
          </div>

          <div className="p-3 rounded-lg bg-white border border-[#DDD5C7]">
            <strong>八、</strong>申請人因興辦事業計畫利用非都市土地變更編定為丁種建築用地，應依照核定計畫完成使用，始得再依規定申請增加變更編定為丁種建築用地，辦理工廠變更登記。如未依照核定計畫完成使用者，本府將依本規則第五十四條規定辦理。
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 附件二：內政部 110 年 5 月 3 日台內地字第 1100261492 號函抄本 */}
      {/* ===================================================================== */}
      <section id="ceramic-sec-att2" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b-2 border-blue-800 pb-2">
          <h3 className="text-lg sm:text-xl font-black text-blue-950 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blue-800" />
            <span>附件二：內政部 110 年 5 月 3 日台內地字第 1100261492 號函抄本</span>
          </h3>
          <span className="text-xs text-[#7D7065] font-mono">台內地字第 1100261492 號</span>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-blue-200 shadow-sm space-y-4 text-xs sm:text-sm font-sans text-slate-800 leading-relaxed">
          {/* 公文公文頭 */}
          <div className="border-b border-[#DDD5C7] pb-3 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-gray-500">【抄本】</span>
              <div className="text-[11px] text-gray-500 font-mono">
                <div>檔號：</div>
                <div>保存年限：</div>
              </div>
            </div>
            <div className="text-center font-black text-base sm:text-lg text-[#1F3864] tracking-wider py-1">
              內政部 函
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-600 font-mono">
              <div>地址：408205 臺中市南屯區黎明路 2 段 503 號</div>
              <div>聯絡人：柯人豪</div>
              <div>電話：04-22502112</div>
              <div>傳真：04-22502374</div>
              <div className="sm:col-span-2">電子信箱：J0044@land.moi.gov.tw</div>
            </div>
          </div>

          <div className="space-y-2 text-xs sm:text-sm">
            <div>
              <strong>受文者：</strong>地政司（編定管制科）
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              <div><strong>發文日期：</strong>中華民國 110 年 5 月 3 日</div>
              <div><strong>發文字號：</strong>台內地字第 1100261492 號</div>
              <div><strong>速別：</strong>普通件</div>
              <div><strong>密等及解密條件或保密期限：</strong></div>
              <div><strong>附件：</strong></div>
            </div>

            <div className="p-3 rounded-lg bg-white border border-blue-200">
              <strong className="text-blue-900 block mb-1">主旨：</strong>
              <p className="text-slate-800 leading-relaxed font-semibold">
                本部 72 年 2 月 21 日 72 台內地字第 139726 號函，有關「非都市土地使用編定時，丁種建築用地及窯業用地編定釋疑」，及 74 年 7 月 17 日 74 台內地字第 330083 號函，有關「窯業用地無法繼續經營時原有合法磚瓦工廠不得更正編定為丁種建築用地」等 2 則，
                <strong className="text-red-700 underline">自即日起停止適用</strong>，請查照。
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <strong className="text-blue-900 block">說明：</strong>
              <div className="space-y-2 pl-2">
                <p>
                  <strong>一、</strong>依據桃園市政府 110 年 3 月 25 日府地用字第 1100072083 號函辦理。
                </p>
                <p>
                  <strong>二、</strong>依區域計畫法施行細則第 13 條第 1 項規定，窯業用地係供磚瓦製造及其設施使用者；丁種建築用地係供工廠及有關工業設施建築使用者，二者之土地使用型態未盡相同，故分別規定其使用地類別，以便管制。查本部雖曾為便利工業主管機關依原獎勵投資條例規定管制，以旨揭 2 號函釋，依法領有工業用地證明書而作磚瓦製造使用之土地編定為丁種建築用地者，可予維持，惟其並非指已依規定編定為窯業用地者係為編定錯誤，自不得接引辦理更正編定為丁種建築用地。又查本部前已以 101 年 5 月 22 日內授中辦地字第 1016650844 號函，重申非都市土地窯業用地除有編定錯誤之情形始得辦理更正編定為丁種建築用地，並為統一規定，停止適用 89 年 11 月 7 日台內中地字第 8921756 號函有關「山坡地保育區窯業用地更正編定為丁種建築用地，其更正範圍以編定公告前申請工廠設立許可並辦竣工廠登記之設廠面積為準」之函釋。爰為避免實務執行產生困擾，本部旨揭 72 年 2 月 21 日及 74 年 7 月 17 日 2 號函釋，自即日起停止適用。
                </p>
              </div>
            </div>

            <div className="border-t border-[#DDD5C7] pt-2 text-xs text-slate-600 space-y-1">
              <p>
                <strong>正本：</strong>各直轄市政府地政局（臺北市政府地政局除外）、各縣（市）政府（連江縣政府、金門縣政府、嘉義市政府除外）
              </p>
              <p>
                <strong>副本：</strong>桃園市政府
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
