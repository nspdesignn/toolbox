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
  BookOpen,
  Sliders,
  Search,
  Gavel,
  Zap,
  Users,
  Eye,
  AlertTriangle,
  FileCheck,
  Compass,
  Calendar,
  Layers,
  Check,
  FolderOpen,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

interface AppealAndLitigationAnalysisReportProps {
  onCopy?: (text: string, label: string) => void;
}

export const AppealAndLitigationAnalysisReport: React.FC<AppealAndLitigationAnalysisReportProps> = ({
  onCopy
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [copiedTip, setCopiedTip] = useState<string | null>(null);

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
    { id: 'all', label: '全文瀏覽（13頁完整收錄）', icon: BookOpen },
    { id: 'origin-and-workflow', label: '一、計畫緣起與二、作業流程（20日黃金期）', icon: Clock },
    { id: 'case-types-statistics', label: '三、案件類型分析（更正4件／變更3件／違規29件）', icon: FileSpreadsheet },
    { id: 'sanxia-case-study', label: '三峽十三添指標性連續處分案（OOO案剖析）', icon: ShieldAlert },
    { id: 'common-disputes', label: '四、三大案件常見疑義與風險觀察', icon: AlertTriangle },
    { id: 'improvements-and-conclusion', label: '五、後續精進方向與六、結語', icon: CheckCircle2 }
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
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1F3864] via-[#2D456E] to-[#12223D] text-white p-6 sm:p-8 shadow-md">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-amber-200">
              <Scale className="w-3.5 h-3.5 text-amber-300" />
              <span>新北市政府地政局編定管制科 • 115 年 03 月 16 日研究報告</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-snug">
              近 3 年違規訴願訴訟案分析
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              依據原始檔案《違規訴願訴訟案分析.pdf》（共 13 頁全文無保留、無自行摘要）完整收錄。全面盤點 112 年至 115 年間民眾對非都市土地更正編定（4件）、變更編定（3件）及違反區域計畫法裁罰（29件）之訴願與行政訴訟案件，深入解析「20日答辯黃金期」、三峽十三添OOO重大連續處分案勝敗關鍵、狀態責任與前端風險管理。
            </p>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
            <a
              href="/assets/aistudio/__________ba3db041.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 shadow-md hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              <span>查看原始 PDF (13頁)</span>
            </a>
            <span className="text-[11px] text-slate-300">
              研究員：鐘紫瑜 • 編定管制科
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

      {/* 核心內容展示區 */}
      <div className="space-y-10">
        {/* ======================= 一、計畫緣起與二、作業流程 ======================= */}
        {(activeTab === 'all' || activeTab === 'origin-and-workflow') && (
          <section className="bg-white rounded-2xl border border-[#DDD5C7] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EEE8DE] gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#1F3864] text-white flex items-center justify-center font-bold text-sm">
                  壹
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#1F3864]">
                    一、計畫緣起 與 二、作業流程
                  </h2>
                  <p className="text-xs text-[#6E5D53]">
                    PDF 第 1 ~ 3 頁完整內容 • 訴願與訴訟法定作業時程、「20 日黃金期限」與三大核心檢核點
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleLocalCopy(
                    `一、計畫緣起\n近 3 年（112 年至今）間，民眾針對非都市土地使用更正編定、變更編定及違反區域計畫法裁罰處分提起之訴願與行政訴訟案件，呈現逐年增加且爭議型態趨於複雜之趨勢。相關爭議核心多聚焦於既存使用事實之認定（如堆置土石之目的）、既有房屋從來之使用判斷標準（如編定前建物是否存在）及舉證責任歸屬等高度專業議題，行政機關在處分時之品質及程序完備性面臨更嚴格的司法審查。實務執行發現，民眾對於土地編定制度及機關法令解釋常存有顯著落差，尤以對「既有建物」之歷史證明、「農地農用」之狀態責任及「更正編定要件」之認知與行政機關不一，衍生大量救濟爭議。此類案件進入救濟程序後，不僅耗費龐大行政人力，若因個案判斷標準不一，亦將影響行政處分之穩定性及民眾對政府執行公信力的信賴。\n現行訴願決定及行政法院判決中，已逐步累積關於歷年航照圖判定、官方文書（如稅籍、水電）證據力排序及按次處分合法性之寶貴實務見解。惟相關經驗過去多分散於個案，缺乏系統化整理，致使行政實務經驗難以回饋至前端稽查與輔導作業。\n基於上述背景，本次針對近 3 年訴願及行政訴訟案件進行整體性盤點與分析，藉由整理案件類型、爭點結構、作業流程及法令適用疑義，系統性整理民眾提起訴願及行政訴訟之主要案件類型與常見爭點，掌握高爭議案件特性，歸納訴願機關及行政法院之實務見解，彙整訴願決定及判決理由中對土地使用編定、更正編定及裁罰案件之法律見解，促進法令解釋與行政實務之一致性，作為強化行政決策品質及精進內部作業之基礎。\n\n二、作業流程\n接獲民眾不服原行政處分所提起之訴願後，係依《訴願法》及相關行政作業規定，循序完成收件、審查、答辯及後續執行等作業。整體流程可區分為前置審查、實體答辯、訴願決定配合處理三大階段。於接獲訴願書後，由收文單位完成收件與登錄作業，並進行形式要件初步檢核，包括是否於法定期間內提起、是否具備基本訴願要件及是否屬本機關原處分案件。\n(一)訴願案件處理階段：當民眾不服地政局裁罰或否准處分，向地政局遞交訴願書時，流程如下：\n1. 收件與形式審查（3-7 日）：檢查訴願書是否簽名、有無超過 30 日訴願期間（自處分送達次日起算）。\n2. 重新審查處分（20 日內）：\n○ 自我撤銷：地政局認為訴願有理由，可自行撤銷或變更原處分，並通知訴願人及訴願管轄機關（如內政部或市政府訴願會）。\n○ 維持原處分：若地政局認為原處分無誤，必須製作「訴願答辯書」。\n3. 送交答辯（20 日內）：\n○ 地政局必須將訴願書連同「答辯書」及「全案卷證」，函送至訴願管轄機關。\n○ 注意：若地政局逾 20 日未送答辯，訴願機關可逕行決定。\n(二)訴願審議階段：由上級機關（訴願委員會）進行審理：\n1. 審議期間（3 個月 + 2 個月）：訴願決定應自收到訴願書之次日起 3 個月內作成；必要時得延長一次，最長不得逾 2 個月（須通知訴願人）。\n2. 決定送達（15 日內）：訴願決定書應於決定後 15 日內送達訴願人及地政局。\n(三)行政訴訟階段：若訴願被駁回，民眾向行政法院提起訴訟：\n1. 接獲法院起訴狀：法院會將起訴狀繕本送達地政局。\n2. 提出答辯狀（20 日內）：地政局（被告）應於收到起訴狀後 20 日內，提出「行政訴訟答辯狀」及相關證據卷宗。\n3. 出庭應訊：地政局委派法制人員或承辦人擔任行政訴訟代理人出庭。\n4. 判決結果處置：\n○ 勝訴：維持原處分。\n○ 敗訴（撤銷處分）：地政局須依判決意旨，於法定期間內（通常為判決確定後）重新作成處分或執行退還罰鍰。\n(四)實務作業主要檢核點：\n1. 「20 日」黃金期限：收到訴願書或法院起訴狀後，務必在 20 日內將「答辯書狀」連同「完整卷宗（含現場照片、查報紀錄、會勘紀錄、雙方函文等）」送出，避免程序延誤。\n2. 證據保全：針對非都市土地違規案件（如違規鋪設水泥、建鐵皮屋），在答辯中清楚交代「行為時點的航照圖比對」與「未經合法申請的證據」通常是維持處分的致勝關鍵。\n3. 陳述意見：確認原裁罰處分前，是否已確實依《行政程序法》給予當事人陳述意見的機會（寄發陳述意見通知函），這是法院審查程序瑕疵最常看的重點。`,
                    '一、計畫緣起與二、作業流程全文'
                  )
                }
                className="px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:bg-[#FAF7F2] text-xs font-bold text-[#1F3864] flex items-center gap-1.5 self-start cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>複製本節全文</span>
              </button>
            </div>

            {/* 一、計畫緣起 */}
            <div className="space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8C5A4B]"></span>
                一、計畫緣起
              </h3>
              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                近 3 年（112 年至今）間，民眾針對非都市土地使用更正編定、變更編定及違反區域計畫法裁罰處分提起之訴願與行政訴訟案件，呈現逐年增加且爭議型態趨於複雜之趨勢。相關爭議核心多聚焦於既存使用事實之認定（如堆置土石之目的）、既有房屋從來之使用判斷標準（如編定前建物是否存在）及舉證責任歸屬等高度專業議題，行政機關在處分時之品質及程序完備性面臨更嚴格的司法審查。
              </p>
              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                實務執行發現，民眾對於土地編定制度及機關法令解釋常存有顯著落差，尤以對「既有建物」之歷史證明、「農地農用」之狀態責任及「更正編定要件」之認知與行政機關不一，衍生大量救濟爭議。此類案件進入救濟程序後，不僅耗費龐大行政人力，若因個案判斷標準不一，亦將影響行政處分之穩定性及民眾對政府執行公信力的信賴。
              </p>
              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                現行訴願決定及行政法院判決中，已逐步累積關於歷年航照圖判定、官方文書（如稅籍、水電）證據力排序及按次處分合法性之寶貴實務見解。惟相關經驗過去多分散於個案，缺乏系統化整理，致使行政實務經驗難以回饋至前端稽查與輔導作業。
              </p>
              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                基於上述背景，本次針對近 3 年訴願及行政訴訟案件進行整體性盤點與分析，藉由整理案件類型、爭點結構、作業流程及法令適用疑義，系統性整理民眾提起訴願及行政訴訟之主要案件類型與常見爭點，掌握高爭議案件特性，歸納訴願機關及行政法院之實務見解，彙整訴願決定及判決理由中對土地使用編定、更正編定及裁罰案件之法律見解，促進法令解釋與行政實務之一致性，作為強化行政決策品質及精進內部作業之基礎。
              </p>
            </div>

            {/* 二、作業流程 */}
            <div className="space-y-4 pt-4 border-t border-[#EEE8DE]">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8C5A4B]"></span>
                二、作業流程（訴願與行政訴訟各階段規範）
              </h3>
              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                接獲民眾不服原行政處分所提起之訴願後，係依《訴願法》及相關行政作業規定，循序完成收件、審查、答辯及後續執行等作業。整體流程可區分為<strong>前置審查、實體答辯、訴願決定配合處理</strong>三大階段。於接獲訴願書後，由收文單位完成收件與登錄作業，並進行形式要件初步檢核，包括是否於法定期間內提起、是否具備基本訴願要件及是否屬本機關原處分案件。
              </p>

              {/* 三大階段流程卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 階段一 */}
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-3">
                  <div className="font-bold text-xs sm:text-sm text-[#1F3864] flex items-center gap-1.5">
                    <span className="w-6 h-6 rounded-full bg-[#1F3864] text-white flex items-center justify-center text-xs">
                      1
                    </span>
                    <span>(一) 訴願案件處理階段（地政局）</span>
                  </div>
                  <div className="space-y-2 text-xs text-blue-950">
                    <div className="p-2.5 bg-white rounded-lg border border-blue-100 shadow-2xs">
                      <strong>1. 收件與形式審查（3-7 日）：</strong>
                      <p className="text-slate-600 mt-0.5">
                        檢查訴願書是否簽名、有無超過 30 日訴願期間（自處分送達次日起算）。
                      </p>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-blue-100 shadow-2xs">
                      <strong>2. 重新審查處分（20 日內）：</strong>
                      <p className="text-slate-600 mt-0.5">
                        • 自我撤銷：地政局認訴願有理，自行撤銷或變更原處分，通知訴願人及訴願管轄機關。<br />
                        • 維持原處分：若認原處分無誤，必須製作「訴願答辯書」。
                      </p>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-blue-100 shadow-2xs">
                      <strong>3. 送交答辯（20 日內）：</strong>
                      <p className="text-slate-600 mt-0.5">
                        地政局必須將訴願書連同「答辯書」及「全案卷證」，函送至訴願管轄機關。<br />
                        ⚠️ 注意：若地政局逾 20 日未送答辯，訴願機關可逕行決定。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 階段二 */}
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-3">
                  <div className="font-bold text-xs sm:text-sm text-amber-950 flex items-center gap-1.5">
                    <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs">
                      2
                    </span>
                    <span>(二) 訴願審議階段（訴願委員會）</span>
                  </div>
                  <div className="space-y-2 text-xs text-amber-950">
                    <div className="p-2.5 bg-white rounded-lg border border-amber-100 shadow-2xs">
                      <strong>1. 審議期間（3 個月 + 2 個月）：</strong>
                      <p className="text-slate-600 mt-0.5">
                        • 訴願決定應自收到訴願書之次日起 <strong>3 個月內</strong>作成。<br />
                        • 必要時得延長一次，最長不得逾 <strong>2 個月</strong>（須通知訴願人）。
                      </p>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-amber-100 shadow-2xs">
                      <strong>2. 決定送達（15 日內）：</strong>
                      <p className="text-slate-600 mt-0.5">
                        訴願決定書應於決定後 <strong>15 日內</strong>送達訴願人及地政局。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 階段三 */}
                <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-3">
                  <div className="font-bold text-xs sm:text-sm text-purple-950 flex items-center gap-1.5">
                    <span className="w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center text-xs">
                      3
                    </span>
                    <span>(三) 行政訴訟階段（行政法院）</span>
                  </div>
                  <div className="space-y-2 text-xs text-purple-950">
                    <div className="p-2.5 bg-white rounded-lg border border-purple-100 shadow-2xs">
                      <strong>1. 接獲法院起訴狀：</strong>
                      <p className="text-slate-600 mt-0.5">法院會將起訴狀繕本送達地政局。</p>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-purple-100 shadow-2xs">
                      <strong>2. 提出答辯狀（20 日內）：</strong>
                      <p className="text-slate-600 mt-0.5">
                        地政局（被告）應於收到起訴狀後 <strong>20 日內</strong>，提出「行政訴訟答辯狀」及相關證據卷宗。
                      </p>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-purple-100 shadow-2xs">
                      <strong>3. 出庭應訊：</strong>
                      <p className="text-slate-600 mt-0.5">委派法制人員或承辦人擔任行政訴訟代理人出庭。</p>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-purple-100 shadow-2xs">
                      <strong>4. 判決結果處置：</strong>
                      <p className="text-slate-600 mt-0.5">
                        • 勝訴：維持原處分。<br />
                        • 敗訴（撤銷處分）：依判決意旨於法定期間內重新處分或退還罰鍰。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* (四) 實務作業主要檢核點 */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-red-50 via-amber-50 to-orange-50 border border-red-200 space-y-3">
                <div className="font-bold text-xs sm:text-sm text-red-950 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-700" />
                  <span>(四) 實務作業三大核心檢核點（執法勝訴關鍵）</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-lg border border-red-200 shadow-2xs space-y-1">
                    <div className="text-xs font-black text-red-700">1.「20 日」黃金期限</div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      收到訴願書或法院起訴狀後，務必在 <strong>20 日內</strong>將「答辯書狀」連同「完整卷宗（含現場照片、查報紀錄、會勘紀錄、雙方函文等）」送出，避免程序延誤。
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-amber-200 shadow-2xs space-y-1">
                    <div className="text-xs font-black text-amber-800">2. 證據保全</div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      針對非都市土地違規案件（如違規鋪設水泥、建鐵皮屋），在答辯中清楚交代<strong>「行為時點的航照圖比對」</strong>與<strong>「未經合法申請的證據」</strong>通常是維持處分的致勝關鍵。
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-blue-200 shadow-2xs space-y-1">
                    <div className="text-xs font-black text-blue-800">3. 陳述意見</div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      確認原裁罰處分前，是否已確實依《行政程序法》給予當事人陳述意見的機會（寄發陳述意見通知函），這是法院審查程序瑕疵最常看的重點。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ======================= 三、案件類型分析 ======================= */}
        {(activeTab === 'all' || activeTab === 'case-types-statistics') && (
          <section className="bg-white rounded-2xl border border-[#DDD5C7] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EEE8DE] gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#8C5A4B] text-white flex items-center justify-center font-bold text-sm">
                  貳
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#1F3864]">
                    三、案件類型分析（統計總表、更正編定與變更編定詳解）
                  </h2>
                  <p className="text-xs text-[#6E5D53]">
                    PDF 第 3 ~ 5 頁完整內容 • 112~115 年 36 件救濟案量化統計、成福/橋子頭/新土庫段更正案、樹林/汐止/雙溪變更案
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleLocalCopy(
                    `三、案件類型分析\n依民眾不服之行政處分性質，將近 3 年(112 年至今)案件歸納為三大核心類型，包括：\n一、更正編定案件：民眾主張土地編定結果與編定公告前之合法使用現況不符（如應編定為建築用地卻編為水利用地或農牧用地），要求依「從來之使用」事實進行更正。\n二、變更編定否准案件：民眾主動申請改變土地編定用途（如申請變更為殯葬用地或畸零狹小土地變更案），因不符技術指標或程序要件遭駁回而提起救濟。\n三、違反土地使用管制案件：涉及在農牧或林業用地上擅自舖設水泥、堆置土石或興建違建物，民眾不服《區域計畫法》第 21 條之罰鍰與限改處分而提起救濟。\n\n【近 3 年案件統計總表】\n年度 | 更正編定 | 變更編定 | 違反區域計畫法\n112 年 | 1 件 | 0 件 | 10 件\n113 年 | 1 件 | 2 件 | 5 件\n114 年 | 2 件 | 1 件 | 11 件\n115 年至今 | 0 件 | 0 件 | 3 件\n小計 | 4 件 | 3 件 | 29 件\n\n(一)更正編定訴願/訴訟案件分析(共計 4 件)\n針對 112 年至 115 年間，民眾不服本府對三峽區成福小段、鶯歌區橋子頭一段及深坑區新土庫段等土地更正編定處分所提起之救濟案（計訴願 3 件、行政訴訟 1 件）進行盤點。旨在透過量化與質性分析，整理案件共通性、主要爭議與處理模式，作為未來辦理之實務參考。\n1. 關鍵時間點一致：所有案件之爭點核心皆環繞在民國 70 年 2 月 15 日（新北市非都市土地編定公告日）之前，土地是否已具備合法建築使用之事實。\n2. 變更目標類同：申請人多請求將原編定之農牧用地或水利用地，更正編定為丁種或乙種建築用地，以落實所謂「從來之使用」事實。\n3. 法規適用集中：主要依據《製定非都市土地使用分區圖及編定各種使用地作業須知》第 9 點及第 23 點。\n民眾依「航照圖影跡」及「門牌初編紀錄」，主張編定公告前已有建物外觀。另外民眾常主張建物係因配合重大建設（如北二高）拆遷重建，或屬農村老舊建物，認為政府當時編定程序有誤或漏列。針對建物滅失之權利爭議，對於實地勘查時已不存在之建物，民眾仍主張應依歷史照片准予更正。\n地政機關嚴格執行「編定前已為合法房屋之證明文件」（如稅籍、水電證明）與「實地勘查確有建物存在」兩大審查基準，利用歷年航照圖套疊技術，判定建物興建的精確年份。如鶯歌案中，航照顯示建物於 82 年才完工，成功推翻訴願人 70 年前已存在之主張。另針對證據完備性要求，若民眾無法提供官方核發之合法證明文件，僅憑航照影子或私契，機關一律予以駁回。\n透過對近 3 年四件更正編定案件之系統分析，民眾常誤認有老屋即可更正，未來應加強宣導民國 70 年前之「官方合法證明」為必要條件。依據目前的「科學航照對比 + 官方文書查調」模式已獲訴願委員會及行政法院高度認同，應持續維持此一嚴謹審查立場，以確保編定制度之一致性與法安定性。\n\n(二)變更編定訴願案件分析(共計 3 件)\n三件變更編定訴願案件，均係民眾就非都市土地使用變更編定申請，經原處分機關審認未符合相關法令規定而予以駁回後，提起訴願之案件。案件分別位於樹林區、汐止區及雙溪區，地理位置、申請目的及土地現況雖各有不同，惟其爭議本質及救濟結果呈現高度一致性，顯示變更編定案件於實務上具有明顯之結構性爭議特徵，具整體分析之必要。\n1. 案件共通性分析：綜合三件訴願案件內容可知，其主要爭議核心均集中於申請土地是否符合「非都市土地使用管制規則」所定得辦理變更編定之法定要件。民眾於案件中多非爭執行政程序是否違法，而係主張其土地現況、周邊環境或實際使用狀態，已符合變更編定之合理性或必要性。然而，訴願機關於審查時，均回歸法令所定之構成要件，包括土地面積、形狀、平均寬度、道路及水溝包圍關係，以及是否屬於得變更編定之特定情形，並未採取彈性或個案化的審查標準。此外，三案中民眾提出之證據型態高度相似，多包括長期使用事實、周邊已有建築或聚落形成、歷史背景或個人生活需求等理由，惟訴願機關一致認為，該等主張多屬事實描述或主觀合理性陳述，尚不足以取代法令明文所要求之客觀要件，因而未予採納。\n2. 主要爭議行為與民眾訴求之類型化：就爭議行為觀察，三件案件中，民眾普遍主張其土地已因周邊開發、道路形成或建築聚集，而具備合理使用條件，認為應得以變更編定為建築或其他使用地。於樹林區及雙溪區案件中，民眾尤以土地狹長、零星或被既有設施包圍為由，主張符合變更編定之情形，惟經實際審查後，仍被認定未符合法規所定之面積或道路寬度等客觀條件。另於汐止區案件中，民眾則係基於特定使用目的（如殯葬設施）之需求，申請變更編定，惟因未依法檢附完整事業計畫書及相關專業技師簽證文件，且未符合相關土地使用管制規定，訴願機關認為其申請要件顯有欠缺，難以准許。整體而言，三案之民眾訴求多著重於實際需求與使用合理性，然行政及救濟機關則一致強調，變更編定係屬高度法定性之行政行為，仍須嚴格符合明文要件，難以僅以個案特殊性作為准駁依據。\n3. 訴願決定結果與審查立場分析：三件變更編定案件之訴願結果，均為駁回訴願並維持原處分，顯示原處分機關對變更編定要件之認定，獲得訴願機關全面支持。從訴願決定理由觀察，救濟機關之審查立場高度一致，均認為申請人負有提出符合要件之舉證責任，行政機關僅須依法就所提資料進行審查，並具體說明不符要件之理由，即已符合正當行政程序要求。訴願機關並未因民眾主張之生活需求、歷史背景或地方發展因素，而放寬變更編定之法定門檻，顯示實務上對變更編定案件之審查，仍以維持制度一致性及法令安定性為優先考量。\n4. 其他相關資料之整體觀察：由本次三件案件可進一步觀察到，變更編定案件於實務上高度仰賴書面資料與量化條件之判斷，申請文件是否齊備，往往即成為准駁之關鍵因素。補正資料未完整，或無法具體對應法定要件，為實務上最常見之駁回原因之一。另涉及殯葬設施或其他特殊用途之案件，行政機關及救濟機關於審查時，明顯採取較高密度之審查標準，以避免土地使用對周邊環境及公共利益產生不利影響。\n5. 小結：綜合上述分析可知，三件變更編定訴願案件之爭議結構高度一致，救濟結果亦趨於穩定。行政機關若能於案件初審及補正階段，即明確向申請人說明法定要件及證明不足之具體原因，將有助於降低後續提起訴願之可能性，並有效維持行政處分之穩定性與一致性。`,
                    '三、案件類型分析全文'
                  )
                }
                className="px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:bg-[#FAF7F2] text-xs font-bold text-[#1F3864] flex items-center gap-1.5 self-start cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>複製本節全文</span>
              </button>
            </div>

            {/* 案件歸納敘述 */}
            <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
              依民眾不服之行政處分性質，將近 3 年(112 年至今)案件歸納為三大核心類型，包括：
              <br /><strong>一、更正編定案件：</strong>民眾主張土地編定結果與編定公告前之合法使用現況不符（如應編定為建築用地卻編為水利用地或農牧用地），要求依「從來之使用」事實進行更正。
              <br /><strong>二、變更編定否准案件：</strong>民眾主動申請改變土地編定用途（如申請變更為殯葬用地或畸零狹小土地變更案），因不符技術指標或程序要件遭駁回而提起救濟。
              <br /><strong>三、違反土地使用管制案件：</strong>涉及在農牧或林業用地上擅自舖設水泥、堆置土石或興建違建物，民眾不服《區域計畫法》第 21 條之罰鍰與限改處分而提起救濟。
            </p>

            {/* 手冊統計總表 */}
            <div className="overflow-x-auto rounded-xl border border-[#DDD5C7]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1F3864] text-white">
                    <th className="p-3 font-bold border-r border-[#2A4B82]">年度</th>
                    <th className="p-3 font-bold border-r border-[#2A4B82] text-center">更正編定</th>
                    <th className="p-3 font-bold border-r border-[#2A4B82] text-center">變更編定</th>
                    <th className="p-3 font-bold border-r border-[#2A4B82] text-center">違反區域計畫法</th>
                    <th className="p-3 font-bold text-center">年度合計</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DDD5C7] bg-white text-center">
                  <tr className="hover:bg-[#FAF7F2]/60">
                    <td className="p-3 font-bold text-[#1F3864] border-r border-[#EEE8DE]">112 年</td>
                    <td className="p-3 border-r border-[#EEE8DE]">1 件</td>
                    <td className="p-3 border-r border-[#EEE8DE]">0 件</td>
                    <td className="p-3 font-bold text-rose-700 border-r border-[#EEE8DE]">10 件</td>
                    <td className="p-3 font-bold text-[#4A3E39]">11 件</td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]/60">
                    <td className="p-3 font-bold text-[#1F3864] border-r border-[#EEE8DE]">113 年</td>
                    <td className="p-3 border-r border-[#EEE8DE]">1 件</td>
                    <td className="p-3 border-r border-[#EEE8DE]">2 件</td>
                    <td className="p-3 font-bold text-rose-700 border-r border-[#EEE8DE]">5 件</td>
                    <td className="p-3 font-bold text-[#4A3E39]">8 件</td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]/60">
                    <td className="p-3 font-bold text-[#1F3864] border-r border-[#EEE8DE]">114 年</td>
                    <td className="p-3 border-r border-[#EEE8DE]">2 件</td>
                    <td className="p-3 border-r border-[#EEE8DE]">1 件</td>
                    <td className="p-3 font-bold text-rose-700 border-r border-[#EEE8DE]">11 件</td>
                    <td className="p-3 font-bold text-[#4A3E39]">14 件</td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]/60">
                    <td className="p-3 font-bold text-[#1F3864] border-r border-[#EEE8DE]">115 年至今</td>
                    <td className="p-3 border-r border-[#EEE8DE]">0 件</td>
                    <td className="p-3 border-r border-[#EEE8DE]">0 件</td>
                    <td className="p-3 font-bold text-rose-700 border-r border-[#EEE8DE]">3 件</td>
                    <td className="p-3 font-bold text-[#4A3E39]">3 件</td>
                  </tr>
                  <tr className="bg-[#FAF7F2] font-black">
                    <td className="p-3 text-[#1F3864] border-r border-[#DDD5C7]">小計（共36件）</td>
                    <td className="p-3 text-indigo-700 border-r border-[#DDD5C7]">4 件</td>
                    <td className="p-3 text-amber-700 border-r border-[#DDD5C7]">3 件</td>
                    <td className="p-3 text-red-700 border-r border-[#DDD5C7]">29 件</td>
                    <td className="p-3 text-[#1F3864]">36 件</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* (一)更正編定訴願/訴訟案件分析(共計 4 件) */}
            <div className="space-y-4 pt-4 border-t border-[#EEE8DE]">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864]">
                (一) 更正編定訴願/訴訟案件分析（共計 4 件）
              </h3>
              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                針對 112 年至 115 年間，民眾不服本府對<strong>三峽區成福小段、鶯歌區橋子頭一段及深坑區新土庫段</strong>等土地更正編定處分所提起之救濟案（計訴願 3 件、行政訴訟 1 件）進行盤點。旨在透過量化與質性分析，整理案件共通性、主要爭議與處理模式，作為未來辦理之實務參考。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
                  <div className="font-bold text-xs sm:text-sm text-[#1F3864]">1. 關鍵時間點一致</div>
                  <p className="text-xs text-[#5D4E46] leading-relaxed">
                    所有案件之爭點核心皆環繞在<strong>民國 70 年 2 月 15 日（新北市非都市土地編定公告日）</strong>之前，土地是否已具備合法建築使用之事實。
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
                  <div className="font-bold text-xs sm:text-sm text-[#1F3864]">2. 變更目標類同</div>
                  <p className="text-xs text-[#5D4E46] leading-relaxed">
                    申請人多請求將原編定之農牧用地或水利用地，更正編定為<strong>丁種或乙種建築用地</strong>，以落實所謂「從來之使用」事實。
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
                  <div className="font-bold text-xs sm:text-sm text-[#1F3864]">3. 法規適用集中</div>
                  <p className="text-xs text-[#5D4E46] leading-relaxed">
                    主要依據《製定非都市土地使用分區圖及編定各種使用地作業須知》第 9 點及第 23 點。
                  </p>
                </div>
              </div>

              {/* 民眾主張 vs 地政機關嚴格審查 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                <p>
                  <strong>民眾常見主張：</strong>依「航照圖影跡」及「門牌初編紀錄」，主張編定公告前已有建物外觀。另外民眾常主張建物係因配合重大建設（如北二高）拆遷重建，或屬農村老舊建物，認為政府當時編定程序有誤或漏列。針對建物滅失之權利爭議，對於實地勘查時已不存在之建物，民眾仍主張應依歷史照片准予更正。
                </p>
                <p>
                  <strong>地政機關審查基準：</strong>地政機關嚴格執行<strong>「編定前已為合法房屋之證明文件」（如稅籍、水電證明）</strong>與<strong>「實地勘查確有建物存在」</strong>兩大審查基準，利用歷年航照圖套疊技術，判定建物興建的精確年份。如鶯歌案中，航照顯示建物於 82 年才完工，成功推翻訴願人 70 年前已存在之主張。另針對證據完備性要求，若民眾無法提供官方核發之合法證明文件，僅憑航照影子或私契，機關一律予以駁回。
                </p>
                <div className="p-3 bg-blue-50/80 rounded-lg border border-blue-200 text-xs text-blue-950 font-medium">
                  💡 <strong>結論指引：</strong>透過對近 3 年四件更正編定案件之系統分析，民眾常誤認有老屋即可更正，未來應加強宣導民國 70 年前之「官方合法證明」為必要條件。依據目前的「科學航照對比 + 官方文書查調」模式已獲訴願委員會及行政法院高度認同，應持續維持此一嚴謹審查立場，以確保編定制度之一致性與法安定性。
                </div>
              </div>
            </div>

            {/* (二)變更編定訴願案件分析(共計 3 件) */}
            <div className="space-y-4 pt-4 border-t border-[#EEE8DE]">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864]">
                (二) 變更編定訴願案件分析（共計 3 件：樹林、汐止、雙溪）
              </h3>
              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                三件變更編定訴願案件，均係民眾就非都市土地使用變更編定申請，經原處分機關審認未符合相關法令規定而予以駁回後，提起訴願之案件。案件分別位於樹林區、汐止區及雙溪區，地理位置、申請目的及土地現況雖各有不同，惟其爭議本質及救濟結果呈現高度一致性，顯示變更編定案件於實務上具有明顯之結構性爭議特徵，具整體分析之必要。
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-white rounded-xl border border-[#DDD5C7] shadow-2xs space-y-1.5 text-xs sm:text-sm">
                  <strong className="text-[#1F3864]">1. 案件共通性分析：</strong>
                  <p className="text-[#4A3E39] leading-relaxed">
                    其主要爭議核心均集中於申請土地是否符合「非都市土地使用管制規則」所定得辦理變更編定之法定要件。民眾於案件中多非爭執行政程序是否違法，而係主張其土地現況、周邊環境或實際使用狀態，已符合變更編定之合理性或必要性。然而，訴願機關於審查時，均回歸法令所定之構成要件，包括土地面積、形狀、平均寬度、道路及水溝包圍關係，以及是否屬於得變更編定之特定情形，並未採取彈性或個案化的審查標準。
                  </p>
                  <p className="text-[#4A3E39] leading-relaxed">
                    此外，三案中民眾提出之證據型態高度相似，多包括長期使用事實、周邊已有建築或聚落形成、歷史背景或個人生活需求等理由，惟訴願機關一致認為，該等主張多屬事實描述或主觀合理性陳述，尚不足以取代法令明文所要求之客觀要件，因而未予採納。
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-[#DDD5C7] shadow-2xs space-y-1.5 text-xs sm:text-sm">
                  <strong className="text-[#1F3864]">2. 主要爭議行為與民眾訴求之類型化：</strong>
                  <p className="text-[#4A3E39] leading-relaxed">
                    就爭議行為觀察，三件案件中，民眾普遍主張其土地已因周邊開發、道路形成或建築聚集，而具備合理使用條件，認為應得以變更編定為建築或其他使用地。
                    <br />• <strong>樹林區及雙溪區案件：</strong>民眾尤以土地狹長、零星或被既有設施包圍為由，主張符合變更編定之情形，惟經實際審查後，仍被認定未符合法規所定之面積或道路寬度等客觀條件。
                    <br />• <strong>汐止區案件：</strong>民眾則係基於特定使用目的（如殯葬設施）之需求申請變更，惟因未依法檢附完整事業計畫書及相關專業技師簽證文件，且未符合相關土地使用管制規定，訴願機關認其申請要件顯有欠缺，難以准許。
                    <br />整體而言，民眾訴求多著重於實際需求與使用合理性，然行政及救濟機關一致強調變更編定係高度法定性行政行為，仍須嚴格符合明文要件。
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-[#DDD5C7] shadow-2xs space-y-1.5 text-xs sm:text-sm">
                  <strong className="text-[#1F3864]">3. 訴願決定結果與審查立場分析：</strong>
                  <p className="text-[#4A3E39] leading-relaxed">
                    三件變更編定案件之訴願結果，<strong>均為駁回訴願並維持原處分</strong>，顯示原處分機關對變更編定要件之認定獲得訴願機關全面支持。救濟機關審查立場高度一致，均認為申請人負有提出符合要件之舉證責任，行政機關僅須依法就所提資料審查並具體說明不符理由，即符正當行政程序。訴願機關未因生活需求、歷史背景或地方發展因素放寬法定門檻，仍以維持制度一致性及法令安定性為優先考量。
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-[#DDD5C7] shadow-2xs space-y-1.5 text-xs sm:text-sm">
                  <strong className="text-[#1F3864]">4. 其他相關資料之整體觀察 與 5. 小結：</strong>
                  <p className="text-[#4A3E39] leading-relaxed">
                    變更編定高度仰賴書面資料與量化條件之判斷，申請文件是否齊備為准駁關鍵。補正資料不完整或無法對應法定要件為最常見駁回原因。涉及殯葬等特殊用途更採高密度審查標準。
                    <br />行政機關若能於案件初審及補正階段，即明確向申請人說明法定要件及證明不足之具體原因，將有助於降低後續提起訴願之可能性，維持行政處分之穩定性。
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ======================= 參、三峽十三添連續處分案專案剖析 ======================= */}
        {(activeTab === 'all' || activeTab === 'sanxia-case-study') && (
          <section className="bg-white rounded-2xl border border-[#DDD5C7] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EEE8DE] gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-red-700 text-white flex items-center justify-center font-bold text-sm">
                  參
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#1F3864]">
                    (三) 違反土地管制裁處分析 — 三峽十三添重大連續處分案（OOO案）
                  </h2>
                  <p className="text-xs text-[#6E5D53]">
                    PDF 第 5 ~ 8 頁完整內容 • 112~114 年 29 件違規案剖析、第3及第4次處分撤銷教訓與第5至第8次全勝策略
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleLocalCopy(
                    `(三)違反土地使用管制裁處之訴願/訴訟案件分析(共計 29 件)\n1. 112 年違規訴願案件特性及地區分析(11 案件)：多為首次或早期查獲之違規行為，多集中於堆置土石、營建剩餘物、鋪設水泥鋪面等，民眾常主張整地、農地改良或暫時性行為，以比例原則為主要訴求。地區集中於三芝（流浪犬收容設施、露營場）、瑞芳（貨櫃集散站）、三峽（大規模堆置土石方、鐵皮工廠）。\n\n2. 113 年違規訴願案件特性及地區分析(5 案)：呈現明顯轉折，爭議核心轉向「是否構成連續違規」及「是否已實質完成改善」。按次處罰案件中，民眾常主張已部分改善、已復耕或認為重複裁罰，提出一行為不二罰抗辯。\n針對新北市三峽區十三添一段的土地違規案件，這是一系列極具指標性的連續處分案，主要涉及OOO、陳永霖及永莉農產有限公司等違規行為人，未經許可擅自堆置大量土石（含碎磚塊、混凝土塊）、鋪設柏油鋪面、鋪設水泥鋪面及興建鐵皮建物。經查該處堆置之土石，部分來自營建工地產出的營建剩餘土石方，且未依核定流向證明文件載運至合法場所。\n以OOO案為例，本府展現了強力的執法連續性，針對同一違法狀態未改善進行多次裁罰：\n• 第 1 次處分：111 年 1 月 17 日，罰鍰 27 萬元。\n• 第 2 次處分：111 年 3 月 28 日，罰鍰 27 萬元。\n• 第 3 次處分：112 年 5 月 2 日，處分撤銷。\n• 第 4 次處分：112 年 6 月 21 日，處分撤銷。\n• 第 5 次處分：113 年 1 月 23 日，因現場仍未恢復原狀，再次罰鍰 27 萬元。\n• 第 6 次處分：113 年 3 月 15 日，因複查仍具水泥鋪面與土石，再處 27 萬元。\n• 後續處分：至 113 年 8 月間，該地仍因未依限改善，持續面臨相同金額之罰鍰。\n\n【有關第 3 次、第 4 次處分予以撤銷之主要理由】：\n(1) 行政機關未盡「舉證責任」：在第 3 次連續處罰時，僅憑農業局 112 年 3 月 27 日之函文（指稱現場仍未改善）作為認定依據，但該函文內容對於「處分當時」違規事實是否確實持續存在，並無詳盡的具體證據（如該次處分時點之現場照片或會勘筆錄）。行政機關作成行政處分時，應依職權調查證據，且處分之事實認定必須依憑證據，不得以「推測」或「擬制」之方式認定事實。\n(2) 連續處分須具備「獨立的事實認定」：內政部認為，對於「按次處罰」之處分，行政機關每一次處分都必須提出獨立且明確的證據，證明違規人於該次限期改善屆滿後，確實仍未履行改善義務。本案原處分機關雖然在訴願期間補充答辯，但仍未能提出「處分當下」足以證明現場土石持續堆置的具體數據或影跡證據，導致該次處分的事實認定存有欠詳與不明確之處。\n(3) 法理基準：證據主義優於現況推論。內政部強調，雖然土地現況可能確實存在違規（如堆置土石、鋪設柏油），但行政機關在法律上負有舉證責任。若在處分書發布的時點，缺乏與該時點對應的證據鏈，處分即具有瑕疵，應予撤銷，發回原處分機關另為適法之處理。\n(4) 總結：OOO案第 3、4 次裁罰被撤銷，主因在於新北市政府執行連續處罰（按次處罰）時，「舉證不夠即時且不具體」。行政機關在後續的第 5 次至第 8 次處分中（後來均獲維持），更加強化了「每次裁罰必先辦理現場會勘」的取證程序。\n(5) 本局後續因應方式：針對OOO案，本局汲取第 3、4 次處分因證據未及時產出而被撤銷的教訓，全面精進執法策略。現行做法採取「每次處罰、獨立取證」原則，確保每次處分前必先辦理現場會勘並製作影像紀錄，以建立完整證據鏈。同時，透過「行政裁罰與刑事移送」雙管齊下，並強化土地所有權人的「狀態責任」法律論述。此外，結合歷年航照圖與現況照片的科學比對，有效推翻當事人已復耕之主張。此系統性應對策略已顯著提升處分穩定性，自第 5 次處分起，均獲內政部及法院判決維持。\n\n違規人針對高額連續處分，主張堆置土石是為了「農地改良」或「整地」，並非違法棄置廢棄物，且主張目前已種植作物達 100%覆蓋，抗辯違規物（如水泥鋪面、建物）是 30 年前或前人所遺留，且政府多年未罰，突然開罰違反信賴保護。另外主張案件已移送地檢署偵辦，在刑事偵查結果出來前，行政機關不應重複裁罰，且按次處罰違反一事不二罰原則，並主張已申請「臨時使用」或「興辦事業計畫」，認為在申請期間應暫緩處罰。\n內政部訴願委員會及臺北高等行政法院在 113 年至 114 年間產出多份判決，均駁回違規人之訴求：\n• 法院強調任何土地改良行為必須「事先」向農業機關申請，事後補正不影響違規認定。\n• 土地所有權人或管理人對土地負有「維持合法使用」之責任，不論行為是否為前人所為，只要現況違法且未恢復，即應受罰。\n• 認定「未依限期改善」屬於違法狀態之持續，行政機關按次處罰是為了切斷違法行為之單一性，符合行政目的，不違反一事不二罰原則，按次處分具有合法性。\n• 針對大面積（超過 9,001 平方公尺）之違規，最高可單次裁罰 30 萬元且得連續處罰，若反覆違規且情節嚴重，地政局會移送法辦，如陳鍾銘即被判處有期徒刑二月。\n• 針對土地所有權人管理義務，地主應主動排除承租人或前人留下的違規狀態，否則將面臨持續性的巨額行政與刑事風險。\n\n3. 114 年違規訴願案件特性及地區分析(11 案件)：涵蓋國營企業（臺鐵雙溪鐵道橋墩鐵軌）、工程公司（榮工工程淡水臨時宿舍與物料場）及休閒產業（三一馬術莊園）。在 114 年所有行政救濟案件結果均為「訴願駁回」或「訴願不受理」。民眾常以「前人所留」或「繼承而來」抗辯，實務確認土地所有權人負有維持合法使用狀態之義務，均應受罰並限期改善。`,
                    '三峽十三添案與違規案件剖析全文'
                  )
                }
                className="px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:bg-[#FAF7F2] text-xs font-bold text-[#1F3864] flex items-center gap-1.5 self-start cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>複製本節全文</span>
              </button>
            </div>

            {/* 三峽十三添段OOO案時間序清單 */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2.5 py-1 rounded bg-red-700 text-white">
                    指標案：新北市三峽區十三添一段連續處分時間序（OOO案）
                  </span>
                  <span className="text-xs text-red-800 font-bold">涉及營建剩餘土石方堆置、柏油水泥鋪面、鐵皮建物</span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="p-2.5 bg-white rounded-lg border border-red-100 flex items-center justify-between">
                    <div><strong>第 1 次處分：</strong>111 年 1 月 17 日</div>
                    <span className="font-black text-rose-700">罰鍰 27 萬元</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-red-100 flex items-center justify-between">
                    <div><strong>第 2 次處分：</strong>111 年 3 月 28 日</div>
                    <span className="font-black text-rose-700">罰鍰 27 萬元</span>
                  </div>
                  <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-300 flex items-center justify-between">
                    <div><strong>第 3 次處分：</strong>112 年 5 月 2 日</div>
                    <span className="font-black text-amber-700">⚠️ 處分撤銷（因時點證據不足）</span>
                  </div>
                  <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-300 flex items-center justify-between">
                    <div><strong>第 4 次處分：</strong>112 年 6 月 21 日</div>
                    <span className="font-black text-amber-700">⚠️ 處分撤銷（因時點證據不足）</span>
                  </div>
                  <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-300 flex items-center justify-between">
                    <div><strong>第 5 次處分：</strong>113 年 1 月 23 日（現場仍未恢復原狀）</div>
                    <span className="font-black text-emerald-800">罰鍰 27 萬元（獲維持）</span>
                  </div>
                  <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-300 flex items-center justify-between">
                    <div><strong>第 6 次處分：</strong>113 年 3 月 15 日（複查仍具水泥鋪面與土石）</div>
                    <span className="font-black text-emerald-800">罰鍰 27 萬元（獲維持）</span>
                  </div>
                  <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-300 flex items-center justify-between">
                    <div><strong>後續處分：</strong>至 113 年 8 月間未依限改善</div>
                    <span className="font-black text-emerald-800">持續面臨相同金額罰鍰（均獲維持）</span>
                  </div>
                </div>
              </div>

              {/* 第3、4次處分遭撤銷之3大關鍵理由 */}
              <div className="space-y-3">
                <div className="font-black text-sm text-[#1F3864]">
                  第 3 次、第 4 次處分予以撤銷的主要理由（訴願決定書深入剖析）：
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3.5 bg-white rounded-xl border border-red-200 shadow-2xs space-y-1">
                    <strong className="text-xs sm:text-sm text-red-700">(1) 行政機關未盡「舉證責任」</strong>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      僅憑農業局 112.3.27 函文（指稱現場仍未改善）為依據，但該函對「處分當時」是否確實持續存在無詳盡具體證據（如現場照片或會勘筆錄）。事實認定必須依憑證據，<strong>不得以「推測」或「擬制」方式認定</strong>。
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-red-200 shadow-2xs space-y-1">
                    <strong className="text-xs sm:text-sm text-red-700">(2) 連續處分須具備「獨立的事實認定」</strong>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      按次處罰之每一次處分，都必須提出<strong>獨立且明確的證據</strong>，證明限期改善屆滿後確實仍未履行。事後補充答辯仍未能提出處分當下具體數據或影跡證據，存有欠詳與不明確。
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-red-200 shadow-2xs space-y-1">
                    <strong className="text-xs sm:text-sm text-red-700">(3) 證據主義優於現況推論</strong>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      雖然現況確實可能存在違規，但行政機關在法律上負舉證責任。若在處分書發布時點缺乏對應的證據鏈，處分即具有瑕疵，應予撤銷發回。
                    </p>
                  </div>
                </div>
              </div>

              {/* 本局後續因應策略：五大革新 */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-300 space-y-2">
                <div className="font-bold text-xs sm:text-sm text-emerald-950 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>(5) 本局後續因應精進方式（執法全勝之五大支柱）</span>
                </div>
                <ul className="text-xs sm:text-sm text-emerald-900 space-y-1.5 pl-4 list-disc">
                  <li><strong>每次處罰、獨立取證：</strong>每次裁罰前必先辦理現場會勘並製作影像紀錄，建立無懈可擊的完整證據鏈。</li>
                  <li><strong>行政裁罰與刑事移送雙管齊下：</strong>移送地檢署偵辦，陳鍾銘即被判處有期徒刑二月。</li>
                  <li><strong>強化「狀態責任」論述：</strong>土地所有權人或管理人負有「維持合法使用」之責任，不論違規是否為前人或承租人所為，均應受罰並限期改善。</li>
                  <li><strong>歷年航照與現況照片科學比對：</strong>精準推翻違規人「已復耕100%」之虛偽抗辯。</li>
                  <li><strong>按次處罰符合目的：</strong>按次處罰係切斷違法行為之單一性，不違反一事不二罰原則，自第5次處分起均獲內政部及法院判決維持。</li>
                </ul>
              </div>

              {/* 114年案件擴大觀察（台鐵、榮工、馬術莊園） */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-800">
                <strong className="text-[#1F3864]">3. 114 年違規訴願案件特性（違規者結構擴大）：</strong>
                <p>
                  114 年違規者涵蓋國營企業（<strong>臺鐵公司在雙溪擅建橋墩與鐵軌</strong>）、大型工程公司（<strong>榮工工程在淡水設臨時宿舍物料場</strong>）以及休閒產業（<strong>三一馬術莊園</strong>）。在 114 年所有行政救濟中，<strong>結果均為「訴願駁回」或「訴願不受理」</strong>。司法全面支持機關立場：不論違規物是否為「前人所留」或「繼承而來」，土地所有人負有排除違規之狀態責任。
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ======================= 四、常見疑義與實務風險觀察 ======================= */}
        {(activeTab === 'all' || activeTab === 'common-disputes') && (
          <section className="bg-white rounded-2xl border border-[#DDD5C7] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EEE8DE] gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-700 text-white flex items-center justify-center font-bold text-sm">
                  肆
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#1F3864]">
                    四、常見疑義與實務風險觀察（三大類型案件深層對照）
                  </h2>
                  <p className="text-xs text-[#6E5D53]">
                    PDF 第 10 ~ 12 頁完整內容 • 民眾常見疑義、實務見解重點、實務風險觀察對照清單
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleLocalCopy(
                    `四、常見疑義\n綜合近 3 年更正編定、變更編定及違反區域計畫法之訴願與行政訴訟案件，可發現民眾爭議重點，已由單一事實認定，逐步轉為對法令構成要件、制度功能及行政裁量界線之質疑。以下即依案件類型，整理民眾常見疑義與實務風險觀察。\n\n(一)更正編定案件之常見疑義與風險觀察\n1.「合法建物」與「既存使用事實」之認定\nA.民眾常見疑義：認為土地上曾存在建物、門牌、戶籍或水電使用紀錄，即屬合法建物或既存使用事實，得作為更正編定之依據。\nB.實務見解重點：\n⚫ 更正編定須證明於「編定公告前或公告期間」，即已存在符合當時法令之合法建築使用事實\n⚫ 門牌、戶籍、水電資料多屬輔助證據，不得單獨證明合法性\nC.實務風險觀察：\n⚫ 民眾易將「存在過建物」誤解為「合法建物」\n⚫ 若補正通知未明確說明「須證明之時間點＋合法性」，易被質疑程序不明確\n⚫ 部分准、部分駁回案件，若理由未清楚切割，易衍生裁量不一爭議\n2.「編定錯誤」與「政策調整」之混淆\nA.民眾常見疑義：主張原土地使用編定即有錯誤，或因地方發展、通盤檢討或公共工程背景，應予更正編定。\nB.實務見解重點：\n⚫ 更正編定係針對「原編定事實錯誤」所為之修正\n⚫ 非作為政策調整或規劃變更之工具\nC.實務風險觀察：\n⚫ 民眾常混淆「更正編定」、「變更編定」與「通盤檢討」\n⚫ 若行政機關未清楚區分制度功能，易被誤認行政僵化或裁量不當\n\n(二)變更編定案件之法令疑義、法規依據與風險觀察\n(1)「合理使用」與「法定要件」之界線\nA.民眾常見疑義：認為土地狹小、零星、被道路或建築包圍，實務上已無法農業使用，應屬合理變更編定對象。\nB.實務見解重點：\n⚫ 變更編定須符合面積、形狀、道路條件、包圍關係等客觀要件\n⚫ 不採民眾主觀「合理性」判斷\nC.實務風險觀察：\n⚫ 民眾對「合理」與「合法」界線認知落差大\n⚫ 若補正階段未具體指出「不符哪一法定要件」，易反覆提起救濟\n(2)特定用途（如殯葬、建築）之程序與要件誤解\nA.民眾常見疑義：認為只要有實際需求或地方共識，即可申請變更編定。\nB.實務見解重點：\n⚫ 特定用途須依法檢附完整事業計畫、專業技師簽證\n⚫ 使用需求本身不等於法定要件成立\nC.實務風險觀察：\n⚫ 特定用途案件審查密度高、民眾期待值亦高\n⚫ 若事前未清楚說明程序門檻，爭訟風險顯著\n\n(三)違規案件之法令疑義與風險觀察\n1.「農地改良」與「違規使用」之界線\nA.民眾常見疑義：主張堆置土石、鋪設鋪面屬農地改良、整地或排水必要行為。\nB.實務見解重點：\n⚫ 若行為已實質排除農業使用可能性，即屬違規\n⚫ 不以行為人主觀目的作為判斷基準\nC.實務風險觀察：\n⚫ 農地改良之「必要性與限度」缺乏明確量化標準\n⚫ 易成為長期違規案件之主要抗辯理由\n2.「改善完成」之認定標準\nA.民眾常見疑義：認為已部分移除鋪面、回填或種植作物，即屬完成改善。\nB.實務見解重點：\n⚫ 改善須達「實質回復原核定使用狀態」\n⚫ 非形式改善即可免責\nC.實務風險觀察：\n⚫ 若改善通知未具體載明完成標準，易產生重複爭訟\n⚫ 改善是否完成，已成 112–114 年違規案件最核心爭點\n3.一行為不二罰與行政、刑事責任之混淆\nA.民眾常見疑義：主張已涉刑責或已遭一次裁罰，不得再裁罰。\nB.實務見解重點：\n⚫ 行政裁罰與刑事處罰性質不同\n⚫ 不違反一行為不二罰原則\nC.實務風險觀察：\n⚫ 若處分理由未清楚說明裁罰性質與法源，易被誤解為重複處罰`,
                    '四、常見疑義與實務風險觀察全文'
                  )
                }
                className="px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:bg-[#FAF7F2] text-xs font-bold text-[#1F3864] flex items-center gap-1.5 self-start cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>複製本節全文</span>
              </button>
            </div>

            <div className="space-y-6">
              {/* (一)更正編定案件 */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-3">
                <h3 className="font-bold text-xs sm:text-sm text-[#1F3864] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1F3864]"></span>
                  (一) 更正編定案件之常見疑義與風險觀察
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1.5">
                    <strong className="text-[#1F3864]">1.「合法建物」與「既存使用事實」之認定</strong>
                    <div className="text-rose-900 bg-rose-50 p-2 rounded">
                      <strong>A. 民眾常見疑義：</strong>認為土地上曾存在建物、門牌、戶籍或水電紀錄，即屬合法建物或既存使用事實。
                    </div>
                    <div className="text-emerald-950 bg-emerald-50 p-2 rounded space-y-0.5">
                      <strong>B. 實務見解重點：</strong>
                      <p>• 須證明於「編定公告前或公告期間」，即已存在符合當時法令之合法建築使用事實。</p>
                      <p>• 門牌、戶籍、水電資料多屬輔助證據，不得單獨證明合法性。</p>
                    </div>
                    <div className="text-slate-700 bg-slate-50 p-2 rounded space-y-0.5">
                      <strong>C. 實務風險觀察：</strong>易將「存在過建物」誤解為「合法建物」；補正通知若未載明時間點+合法性易生瑕疵。
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1.5">
                    <strong className="text-[#1F3864]">2.「編定錯誤」與「政策調整」之混淆</strong>
                    <div className="text-rose-900 bg-rose-50 p-2 rounded">
                      <strong>A. 民眾常見疑義：</strong>主張原編定即有錯誤，或因地方發展、通盤檢討或公共工程背景，應予更正編定。
                    </div>
                    <div className="text-emerald-950 bg-emerald-50 p-2 rounded space-y-0.5">
                      <strong>B. 實務見解重點：</strong>
                      <p>• 更正編定係針對「原編定事實錯誤」所為之修正。</p>
                      <p>• 非作為政策調整或規劃變更之工具。</p>
                    </div>
                    <div className="text-slate-700 bg-slate-50 p-2 rounded space-y-0.5">
                      <strong>C. 實務風險觀察：</strong>常混淆更正編定、變更編定與通盤檢討；未區分易被誤認行政僵化或裁量不當。
                    </div>
                  </div>
                </div>
              </div>

              {/* (二)變更編定案件 */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-3">
                <h3 className="font-bold text-xs sm:text-sm text-[#1F3864] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8C5A4B]"></span>
                  (二) 變更編定案件之法令疑義、法規依據與風險觀察
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1.5">
                    <strong className="text-[#1F3864]">(1)「合理使用」與「法定要件」之界線</strong>
                    <div className="text-rose-900 bg-rose-50 p-2 rounded">
                      <strong>A. 民眾常見疑義：</strong>認為土地狹小、零星、被包圍已無法農用，應屬合理變更編定對象。
                    </div>
                    <div className="text-emerald-950 bg-emerald-50 p-2 rounded space-y-0.5">
                      <strong>B. 實務見解重點：</strong>
                      <p>• 須符合面積、形狀、道路條件、包圍關係等客觀法定要件。</p>
                      <p>• 不採民眾主觀「合理性」判斷。</p>
                    </div>
                    <div className="text-slate-700 bg-slate-50 p-2 rounded space-y-0.5">
                      <strong>C. 實務風險觀察：</strong>「合理」與「合法」認知落差大；補正未指出不符哪項法定要件易反覆爭訟。
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1.5">
                    <strong className="text-[#1F3864]">(2) 特定用途（如殯葬、建築）之程序與要件誤解</strong>
                    <div className="text-rose-900 bg-rose-50 p-2 rounded">
                      <strong>A. 民眾常見疑義：</strong>認為只要有實際需求或地方共識，即可申請變更編定。
                    </div>
                    <div className="text-emerald-950 bg-emerald-50 p-2 rounded space-y-0.5">
                      <strong>B. 實務見解重點：</strong>
                      <p>• 須檢附完整事業計畫與專業技師簽證。</p>
                      <p>• 使用需求本身不等於法定要件成立。</p>
                    </div>
                    <div className="text-slate-700 bg-slate-50 p-2 rounded space-y-0.5">
                      <strong>C. 實務風險觀察：</strong>特殊用途審查密度與期待值均高；事前未說清程序門檻爭訟風險顯著。
                    </div>
                  </div>
                </div>
              </div>

              {/* (三)違規案件 */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-3">
                <h3 className="font-bold text-xs sm:text-sm text-[#1F3864] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-700"></span>
                  (三) 違規案件之法令疑義與風險觀察（核心3大爭點）
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1.5">
                    <strong className="text-[#1F3864]">1.「農地改良」與「違規使用」之界線</strong>
                    <div className="text-rose-900 bg-rose-50 p-2 rounded">
                      <strong>A. 民眾常見疑義：</strong>堆置土石、鋪設鋪面屬農地改良或整地必要行為。
                    </div>
                    <div className="text-emerald-950 bg-emerald-50 p-2 rounded space-y-0.5">
                      <strong>B. 實務見解重點：</strong>
                      <p>• 若行為已實質排除農用可能性即屬違規。</p>
                      <p>• 不以行為人主觀目的為判斷基準。</p>
                    </div>
                    <div className="text-slate-700 bg-slate-50 p-2 rounded space-y-0.5">
                      <strong>C. 實務風險觀察：</strong>農地改良必要性與限度欠缺量化標準，易成長期抗辯藉口。
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1.5">
                    <strong className="text-[#1F3864]">2.「改善完成」之認定標準（最核心）</strong>
                    <div className="text-rose-900 bg-rose-50 p-2 rounded">
                      <strong>A. 民眾常見疑義：</strong>認為部分移除鋪面或種植作物即完成改善。
                    </div>
                    <div className="text-emerald-950 bg-emerald-50 p-2 rounded space-y-0.5">
                      <strong>B. 實務見解重點：</strong>
                      <p>• 須達「實質回復原核定使用狀態」。</p>
                      <p>• 非形式改善即可免責。</p>
                    </div>
                    <div className="text-slate-700 bg-slate-50 p-2 rounded space-y-0.5">
                      <strong>C. 實務風險觀察：</strong>改善通知未載明標準易生爭訟，已成 112~114 最核心爭點。
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1.5">
                    <strong className="text-[#1F3864]">3. 一行為不二罰與行政、刑事責任之混淆</strong>
                    <div className="text-rose-900 bg-rose-50 p-2 rounded">
                      <strong>A. 民眾常見疑義：</strong>已涉刑責或遭一次裁罰，不得再重複裁罰。
                    </div>
                    <div className="text-emerald-950 bg-emerald-50 p-2 rounded space-y-0.5">
                      <strong>B. 實務見解重點：</strong>
                      <p>• 行政裁罰與刑事處罰性質不同。</p>
                      <p>• 不違反一行為不二罰原則。</p>
                    </div>
                    <div className="text-slate-700 bg-slate-50 p-2 rounded space-y-0.5">
                      <strong>C. 實務風險觀察：</strong>處分理由未說清性質法源易被誤解為重複處罰。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ======================= 五、後續精進方向與六、結語 ======================= */}
        {(activeTab === 'all' || activeTab === 'improvements-and-conclusion') && (
          <section className="bg-white rounded-2xl border border-[#DDD5C7] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EEE8DE] gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
                  伍
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#1F3864]">
                    五、後續精進方向 與 六、結語
                  </h2>
                  <p className="text-xs text-[#6E5D53]">
                    PDF 第 12 ~ 13 頁完整內容 • 四大精進方向、被動應訴轉前端風險治理
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleLocalCopy(
                    `五、後續精進方向\n基於本報告對 112 至 115 年間更正編定、變更編定及違反區域計畫法訴願與行政訴訟案件之綜合分析結果，為降低重複爭訟風險、提升行政效率並強化土地使用管制制度之可預測性，建議後續可朝以下方向逐步精進：\n（一）強化前端諮詢與補正說明之「法定要件導向」：針對更正編定及變更編定案件，建議於受理諮詢及補正階段，即以「法定要件對照說明」方式，清楚向申請人說明須證明之構成要件、關鍵時間點及可採信之證據類型，避免民眾僅憑居住事實、合理期待或政策想像提出申請，降低因認知落差而衍生之訴願與訴訟。\n（二）制度化「改善完成」之判斷基準與說明方式：針對違規案件，建議逐步建立並內部共用「改善完成判斷原則」，於裁罰處分及改善通知中，具體載明改善應達之狀態（如鋪面全面移除、回復可耕作狀態等），並明確說明「部分改善不等於完成改善」之理由，以降低改善認定成為爭訟核心之風險。\n（三）彙整高爭議法令疑義，形成內部標準說理素材：針對民眾反覆提出之法令疑義（如合法建物認定、農地改良界線、一行為不二罰等），建議以本報告整理成果為基礎，形成內部「常見爭議說理參考庫」，供承辦人於處分理由、訴願答辯及行政訴訟應對時使用，以維持說理一致性並降低個案風險。\n（四）針對重複違規及爭訟熱點，採取分級管理策略：對於同一地號或特定區域反覆發生違規並進入訴願或訴訟程序之案件，建議列為高風險案件，透過跨機關合作、提前說明改善標準及加強追蹤管理等方式，降低案件進入長期爭訟循環之可能性。\n\n六、結語\n綜合更正編定、變更編定及違規案件之法令疑義觀察，實務風險主要集中於法定要件與民眾直觀認知落差過大、改善完成及合法性判斷標準未完全制度化、行政說明未能即時回應民眾對法令功能之誤解。依據近 3 年案件顯示，爭議核心已由個案事實，轉為對法令構成要件與制度功能之挑戰，逐步形塑為具高度重複性與結構性的制度性問題。行政機關在訴願與司法實務中雖具高度支持度，惟若能將上述法令疑義系統化整理並回饋至前端審查、補正說明及裁罰理由中，將有助於降低爭訟風險、提升行政處分穩定性與公信力。爭訟反覆發生之關鍵，並非行政處分本身違法，而多源於法定要件界線不易理解、改善完成認定欠缺具體指引，以及制度功能未能有效對外說明。部分民眾遂將訴願及訴訟程序作為延後改善或爭取彈性處理之手段，增加行政執法與救濟應對之成本。\n整體而言，民眾所提訴願及訴訟主張，無論係圍繞於合法建物認定、土地合理使用期待、改善完成標準或比例原則等，均顯示其對非都市土地使用管制制度之法定要件與制度功能，仍存在顯著認知落差。惟從訴願決定及司法判決結果觀察，行政機關於事實認定、法令適用及裁量行使上，已逐步形成一致且穩定之審查立場，並獲救濟機關及法院多數支持。\n因此，未來若能將本報告所整理之常見疑義與實務風險，例如於申請諮詢、補正通知、處分理由及改善指引中，明確揭示法定要件、證明責任與改善完成標準，將有助於降低民眾期待落差，並有效減少重複爭訟情形。總結而言，本次分析顯示，透過持續性的案件整理與橫向比較，不僅可強化行政處分之穩定性與一致性，亦有助於機關由「被動因應爭訟」轉為「前端風險管理與制度精進」，對提升非都市土地使用管制之整體效能與行政公信力，具有實質助益。\n\n115 年 03 月 16 日\n新北市政府地政局編定管制科-鐘紫瑜`,
                    '五、後續精進方向與六、結語全文'
                  )
                }
                className="px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:bg-[#FAF7F2] text-xs font-bold text-[#1F3864] flex items-center gap-1.5 self-start cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>複製本節全文</span>
              </button>
            </div>

            {/* 四大精進方向 */}
            <div className="space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                五、後續精進方向（四大具體作為）
              </h3>
              <p className="text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                基於本報告對 112 至 115 年間更正編定、變更編定及違反區域計畫法訴願與行政訴訟案件之綜合分析結果，為降低重複爭訟風險、提升行政效率並強化土地使用管制制度之可預測性，建議後續可朝以下方向逐步精進：
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1.5">
                  <div className="font-bold text-xs sm:text-sm text-[#1F3864] flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white flex items-center justify-center text-[11px]">1</span>
                    <span>（一）強化前端諮詢與補正說明之「法定要件導向」</span>
                  </div>
                  <p className="text-xs text-blue-950 leading-relaxed">
                    針對更正編定及變更編定案件，建議於受理諮詢及補正階段，即以「法定要件對照說明」方式，清楚向申請人說明須證明之構成要件、關鍵時間點及可採信之證據類型，避免民眾僅憑居住事實、合理期待或政策想像提出申請，降低因認知落差而衍生之訴願與訴訟。
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
                  <div className="font-bold text-xs sm:text-sm text-emerald-950 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[11px]">2</span>
                    <span>（二）制度化「改善完成」之判斷基準與說明方式</span>
                  </div>
                  <p className="text-xs text-emerald-950 leading-relaxed">
                    針對違規案件，建議逐步建立並內部共用「改善完成判斷原則」，於裁罰處分及改善通知中，具體載明改善應達之狀態（如鋪面全面移除、回復可耕作狀態等），並明確說明「部分改善不等於完成改善」之理由，以降低改善認定成為爭訟核心之風險。
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-1.5">
                  <div className="font-bold text-xs sm:text-sm text-purple-950 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-purple-700 text-white flex items-center justify-center text-[11px]">3</span>
                    <span>（三）彙整高爭議法令疑義，形成內部標準說理素材</span>
                  </div>
                  <p className="text-xs text-purple-950 leading-relaxed">
                    針對民眾反覆提出之法令疑義（如合法建物認定、農地改良界線、一行為不二罰等），建議以本報告整理成果為基礎，形成內部「常見爭議說理參考庫」，供承辦人於處分理由、訴願答辯及行政訴訟應對時使用，以維持說理一致性並降低個案風險。
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5">
                  <div className="font-bold text-xs sm:text-sm text-amber-950 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-700 text-white flex items-center justify-center text-[11px]">4</span>
                    <span>（四）針對重複違規及爭訟熱點，採取分級管理策略</span>
                  </div>
                  <p className="text-xs text-amber-950 leading-relaxed">
                    對於同一地號或特定區域反覆發生違規並進入訴願或訴訟程序之案件，建議列為高風險案件，透過跨機關合作、提前說明改善標準及加強追蹤管理等方式，降低案件進入長期爭訟循環之可能性。
                  </p>
                </div>
              </div>
            </div>

            {/* 六、結語 */}
            <div className="space-y-4 pt-4 border-t border-[#EEE8DE]">
              <h3 className="text-sm sm:text-base font-bold text-[#1F3864] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                六、結語（被動因應轉為前端風險管理與制度精進）
              </h3>

              <div className="p-5 rounded-xl bg-gradient-to-br from-[#FAF7F2] to-[#F4EEE6] border border-[#DDD5C7] space-y-3 text-xs sm:text-sm text-[#3A2F2A] leading-relaxed">
                <p>
                  綜合更正編定、變更編定及違規案件之法令疑義觀察，實務風險主要集中於法定要件與民眾直觀認知落差過大、改善完成及合法性判斷標準未完全制度化、行政說明未能即時回應民眾對法令功能之誤解。依據近 3 年案件顯示，爭議核心已由個案事實，轉為對法令構成要件與制度功能之挑戰，逐步形塑為具高度重複性與結構性的制度性問題。
                </p>
                <p>
                  行政機關在訴願與司法實務中雖具高度支持度，惟若能將上述法令疑義系統化整理並回饋至前端審查、補正說明及裁罰理由中，將有助於降低爭訟風險、提升行政處分穩定性與公信力。爭訟反覆發生之關鍵，並非行政處分本身違法，而多源於法定要件界線不易理解、改善完成認定欠缺具體指引，以及制度功能未能有效對外說明。部分民眾遂將訴願及訴訟程序作為延後改善或爭取彈性處理之手段，增加行政執法與救濟應對之成本。
                </p>
                <p>
                  整體而言，民眾所提訴願及訴訟主張，無論係圍繞於合法建物認定、土地合理使用期待、改善完成標準或比例原則等，均顯示其對非都市土地使用管制制度之法定要件與制度功能，仍存在顯著認知落差。惟從訴願決定及司法判決結果觀察，行政機關於事實認定、法令適用及裁量行使上，已逐步形成一致且穩定之審查立場，並獲救濟機關及法院多數支持。
                </p>
                <p className="font-bold text-[#1F3864]">
                  因此，未來若能將本報告所整理之常見疑義與實務風險，例如於申請諮詢、補正通知、處分理由及改善指引中，明確揭示法定要件、證明責任與改善完成標準，將有助於降低民眾期待落差，並有效減少重複爭訟情形。總結而言，本次分析顯示，透過持續性的案件整理與橫向比較，不僅可強化行政處分之穩定性與一致性，亦有助於機關由「被動因應爭訟」轉為「前端風險管理與制度精進」，對提升非都市土地使用管制之整體效能與行政公信力，具有實質助益。
                </p>

                <div className="pt-3 border-t border-[#DDD5C7] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6E5D53]">
                  <span>報告日期：115 年 03 月 16 日</span>
                  <span className="font-bold text-[#1F3864]">撰寫單位：新北市政府地政局編定管制科-鐘紫瑜</span>
                </div>
              </div>
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
