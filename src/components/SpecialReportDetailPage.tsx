import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Search,
  FileText,
  Clock,
  ChevronRight,
  ChevronLeft,
  Tag,
  Sparkles,
  Copy,
  Check,
  FolderOpen,
  BookOpen,
  AlertCircle,
  ExternalLink,
  Building2,
  Calendar,
  Layers,
  ShieldAlert,
  Scale,
  FileSpreadsheet,
  Download,
  CheckCircle2,
  Bookmark
} from 'lucide-react';

import { SportsVenuesReport } from './SportsVenuesReport';
import { ConstructionSoilReport } from './ConstructionSoilReport';
import { PowerMachineryParkingReport } from './PowerMachineryParkingReport';
import { HotelsAndBnbReport } from './HotelsAndBnbReport';
import { SpatialPlanningConsentReport } from './SpatialPlanningConsentReport';
import { IllegalCasesReport } from './IllegalCasesReport';
import { CeramicLandReport } from './CeramicLandReport';
import { EnforcementAndCreditorCertReport } from './EnforcementAndCreditorCertReport';
import { SpatialPlanningViolationsReport } from './SpatialPlanningViolationsReport';

interface SpecialReportDetailPageProps {
  onBack: () => void;
}

// 11 個專題報告主題資料結構
export interface SpecialReportTopic {
  id: string;
  num: number;
  title: string;
  category: string;
  keywords: string[];
  date?: string;
  summary?: string;
  hasFullContent: boolean;
}

export const SPECIAL_REPORT_TOPICS: SpecialReportTopic[] = [
  {
    id: 'funeral-facilities',
    num: 1,
    title: '殯葬設施',
    category: '目的事業管制',
    date: '115 年 2 月 10 日',
    keywords: [
      '殯葬設施',
      '非都市土地容許使用',
      '變更編定',
      '更正編定',
      '公墓',
      '殯儀館',
      '火化場',
      '骨灰存放設施',
      '寵物生命紀念設施',
      '特定目的事業用地',
      '國土計畫管制',
      '鄰避設施'
    ],
    summary: '殯葬設施涉非都市土地容許使用、變更及更正編定完整研究報告（含產業趨勢、相關規定、容許使用、變更編定、更正編定、國土計畫管制、新北產業統計與違規查處清冊、鄰避解決之道及未來展望）。',
    hasFullContent: true
  },
  {
    id: 'sports-venues',
    num: 2,
    title: '運動場館',
    category: '目的事業管制',
    keywords: [
      '運動場館',
      '高爾夫球場',
      '高爾夫球練習場',
      '容許使用',
      '用地變更',
      '興辦事業計畫',
      '特定目的事業用地',
      '特定專用區',
      '遊憩用地',
      '國土計畫使用管制'
    ],
    summary:
      '運動場館、高爾夫球場及高爾夫球練習場涉容許使用及用地變更完整研究報告（含場地定義、三種場地差異比較表、容許使用規定表、用地變更編定程序、免受10公頃限制及國土計畫管制情形表）。',
    hasFullContent: true
  },
  {
    id: 'construction-soil',
    num: 3,
    title: '營建剩餘土石方',
    category: '土地利用與環境',
    keywords: [
      '營建剩餘土石方',
      '餘土',
      '營建混合物',
      '土資場',
      '收容處理場所',
      '目的事業處理場所',
      '採取土石',
      '礦業用地',
      '特定目的事業用地',
      '國土計畫使用管制',
      '新北市營建剩餘土石方管理自治條例'
    ],
    summary:
      '營建剩餘土石方涉容許使用及變更編定完整研究報告（含前言、名詞定義、8大目的事業處理場所、剩餘土石方與廢棄物差異表、區位與地點限制、申請流程三階段、容許使用表、變更編定程序、國土計畫管制情形表、自治條例結論與新北核准案例）。',
    hasFullContent: true
  },
  {
    id: 'power-machinery-parking',
    num: 4,
    title: '動力機具停放場',
    category: '交通與儲運',
    keywords: [
      '動力機具',
      '動力機械',
      '重機械',
      '停放場所',
      '輪式輪胎',
      '履帶式機具',
      '交通用地',
      '其他交通設施',
      '興辦事業計畫',
      '新北市交通局主政',
      '國土計畫使用管制'
    ],
    summary:
      '動力機具停放場所涉容許及用地變更疑義案例完整研究報告（含歷程與歷次跨部會會議、道路交通安全規則第83條認定、交通部與業者差異分析、交通用地與建築用地容許使用、變更編定疑義、新北市府指定主政、國土計畫管制研析與54頁公文研商附錄全索引）。',
    hasFullContent: true
  },
  {
    id: 'hotels-and-bnb',
    num: 5,
    title: '旅館及民宿',
    category: '觀光遊憩',
    keywords: [
      '旅館',
      '民宿',
      '觀光旅館',
      '一般旅館',
      '住宅兼營民宿',
      '農舍兼營民宿',
      '休閒農場',
      '遊憩用地',
      '特定目的事業用地',
      '國土計畫使用管制',
      '觀光旅遊局'
    ],
    summary:
      '旅館及民宿相關涉及容許及用地變更完整研究報告（含名詞定義、新北市旅館與民宿統計現況、民宿與旅館非都市土地容許使用表及附帶條件、兩大函釋解析、各級目的主管機關表、觀光旅館與一般旅館用地變更審查程序、各縣市規模門檻參考表、休閒農場農業用地住宿設施變更規定、國土計畫管制情形表與審查程序圖）。',
    hasFullContent: true
  },
  {
    id: 'spatial-planning-consent',
    num: 6,
    title: '國土計畫應經申請同意',
    category: '國土計畫新制',
    date: '115.3.17',
    keywords: [
      '國土計畫法',
      '應經申請同意',
      '土地使用管制規則',
      '容許使用',
      '使用許可',
      '二元並行制',
      '平行審查',
      '國土管理署查詢系統',
      '許可用地（應）',
      '隔離綠帶1.5m',
      '綠地10%',
      '必要性服務設施30%',
      '過渡條款第20條第34條'
    ],
    summary:
      '國土計畫應經申請同意作業方式完整研究報告（含制度緣起與立法精神、土地使用管制四大架構、容許使用情形表節錄、金瓜石特專與海底電纜案例、簡政二元並行與平行審查機制、審查規定架構圖與 30/90 日時限、申請書必要與相關文件函釋範例、使用計畫書結構、土地使用強度建蔽容積率表、1.5m 隔離綠帶配置規範、綠地 10% 與必要性服務設施 30%、第 20/34 條 6 個月過渡容積率維持與寵物生命紀念設施案例、核准後微小/重大變更與許可前提消失連動廢止機制、通盤檢討動態修正）。',
    hasFullContent: true
  },
  {
    id: 'illegal-cases',
    num: 7,
    title: '違規案件',
    category: '違規查處實務',
    keywords: [
      '區域計畫法第21條',
      '非都市土地違規',
      '裁罰基準表',
      '限期恢復原狀',
      '行政程序法第42條第6款',
      '建築法第77條第91條',
      '森林法第6條第56條之1',
      '裁處權時效',
      '農舍違規擴建',
      '垂直增建水平擴建',
      '先裁罰後輔導',
      '查處標準作業流程圖'
    ],
    summary:
      '非都市土地違規使用案件處理流程及違規案件經驗分享完整報告（作者卓素玉，含管制法令依據、權責劃分行業/行為/物之管理、案件處理七大階段、新北市違規面積與罰鍰金額裁罰基準表、行政執行、限期改善措置、114 年列管 1,498 件與解除列管 37 件分析；三大實務案例研析：案例 1 丁建使照用途不符建築法 vs 區域計畫法與法規適用表、案例 2 林業用地違規樣態與持續狀態裁處權時效及 112 年專法優先原則與法規適用表、案例 3 農舍違規擴建十分之九農業經營範圍與垂直增建/水平擴建分工先罰後輔導；附件 1 現場勘查前/勘查及處分/結案三階段標準作業流程圖 SOP 全覽）。',
    hasFullContent: true
  },
  {
    id: 'ceramic-land',
    num: 8,
    title: '窯業用地',
    category: '特殊用地管制',
    date: '115.3.3',
    keywords: [
      '窯業用地',
      '非都市土地管制規則第34條',
      '丁種建築用地',
      '甲種建築用地第57條',
      '包圍夾雜第58條',
      '山坡地未達10公頃',
      '第49條之1專案小組',
      '更正編定',
      '台內地字第1100261492號函',
      '不得互為更正',
      '國土計畫附表一礦業4-5',
      '新北市審查作業要點'
    ],
    summary:
      '非都市土地窯業用地涉容許使用、變更及更正編定完整研究報告（含 114 年底新北市 62 筆 15.75 公頃統計表、免經申請與需經目的許可容許使用項目、變更編定應備文件與山坡地 10 公頃限制評估技師簽證；三大變更類型：丁建第 34 條最常見路徑、工廠登記證註銷空照圖佐證、產創 5 公頃與一般 10 公頃分區變更、甲建第 57 條歷史路徑與拍定人繼受、特定目的事業用地第 28 條；作業流程非山坡地回饋金 vs 山坡地審議小組分工、6 個月免重複會審；更正編定 70 年 2 月 15 日時間點判定、主要與輔助文件、內政部 110.5.3 函釋窯業與丁建不得互為更正；國土計畫附表一礦業 4-5 窯業使用及其設施各分區管制；附件一新北審查要點全文 8 條；附件二內政部 110.5.3 函釋全文抄本）。',
    hasFullContent: true
  },
  {
    id: 'enforcement-and-creditor-cert',
    num: 9,
    title: '強制執行及債權憑證',
    category: '行政執行',
    date: '內部作業參考手冊',
    keywords: [
      '新北市地政局內部作業手冊',
      '行政執行法第7條10年時效',
      '行政執行法第15條遺產執行',
      '非都市土地違規裁罰移送',
      '繳納期限屆滿次日起6個月內移送',
      '五大移送必備附件',
      '行政執行署5大分署轄區',
      '支票與保管金專戶入帳',
      '會計科目登打規範',
      '債權憑證代保管專戶',
      '歲入保留數註銷審計審定',
      '每年2月8月財稅查調',
      '申請解除債權憑證財務責任簡明表',
      '善良管理人注意義務',
      '新北罰鍰與債憑管理要點全文'
    ],
    summary:
      '新北市政府地政局《移送強制執行及債權憑證處理作業手冊》（內部作業參考手冊，共 61 頁全文完整收錄）。涵蓋壹、法令依據（區域計畫法第21條、行政執行法第7條第1項10年時效、第15條遺產執行、新北市罰鍰與債權憑證管理要點、會計事務註銷規定）；貳、罰鍰未繳案件後續列管作業流程圖（自處分確認起10年內，9大作業階段縱向管制作業全圖）；參、作業程序說明（作業項目、步驟、轄區承辦人員與專責人員分工及法定辦理時限總表）；實務操作與完整公文函稿：一、罰鍰管理作業（X槽列管表、罰鍰系統、分期繳納函稿、分期付款明細表）；二、稽催作業（催繳函稿、文到7日內繳納）；三、調查財稅（查財產函稿、義務人歿查繼承人戶籍、查拋棄繼承函稿）；四、移送作業（移送公文函稿、移送書、5大分署管轄一覽表、函詢核發債權憑證函稿）；五、執行有成果（支票扣押入帳6大階段SOP、保管金專戶93014602700116轉入便簽、公庫備查簿、繳款書會計科目）；六、債權憑證之核發管理（第1次存入與再存入簽辦單、保管品收據、註銷保留數函發審計處及復知、九大應備文件、每月核對清冊）；七、再執行作業（每年2月查稅捐、8月查國稅、再移送執行）；八、帳務註銷作業（全數繳清取回憑證簽呈與歸檔簽辦單 / 債權屆滿10年法定執行期解除財務責任簽稿併陳簽呈、函報審計部新北市審計處函稿、復知主計處與財政局、申請解除債權憑證財務責任簡明表、系統註銷登記）；肆、法令依據附件全文（新北市政府所屬各機關學校行政罰鍰案件及債權憑證管理要點111.11.16修正全文13點、各機關註銷應收款項會計規定第2點第12款規範）。',
    hasFullContent: true
  },
  {
    id: 'spatial-planning-violations',
    num: 10,
    title: '國土計畫違規查處',
    category: '國土計畫新制',
    date: '115.03',
    keywords: [
      '國土計畫法第38條',
      '功能分區管制',
      '使用許可第24條',
      '行政罰100萬至500萬',
      '行為人認定',
      '縱容承租人傾倒廢棄物',
      '小規模農棚違規6萬至30萬',
      '使用許可逸脫',
      '管制性不利益處分',
      '使用人管理人所有人順位',
      '行政執行法第27條',
      '怠金與代履行',
      '斷水斷電強拆',
      '職權調查主義',
      '有利不利一併注意',
      '行政程序法第102條',
      '比例原則',
      '跨機關聯合稽查',
      '六大執法建議'
    ],
    summary:
      '《國土計畫違規查處作業方式 — 國土計畫法第 38 條執行原則》（115.03 版本，共 12 頁全文無保留、無自行摘要完整收錄）。涵蓋：一、報告緣起與目的（土地管制邏輯重大改變、降低處分撤銷風險）；二、第 38 條制度定位（連結第 23 條分區管制與第 24 條使用許可，建構「行政罰＋管制性不利益處分＋行政執行」三合一查處機制）；三、行政罰之違規態樣與裁處原則（四種態樣：未符分區原則達規模100萬~500萬、符合分區應許可未許可30萬~150萬、已許可未依計畫使用30萬~150萬、輕微違規6萬~30萬；行為人認定涵蓋積極使用、放任縱容、明知出租及法人責任；行政罰法第7/9/15條與第102條程序保障；三大案例：5公頃農地出租傾倒廢棄物案、簡易鐵皮農具棚案、農業設施改作餐飲零售逸脫許可案）；四、管制性不利益處分之適用（找得到行為人命限期改善變更/停用/拆除/歇業/廢止登記；找不到行為人私地依序命使用人→管理人→所有人，公地擬定改善計畫）；五、行政執行與間接強制措施（怠金按次處罰、停止供水供電、封閉強拆、代履行，書面告誡程序要件，行政執行法第27/28/32條全文）；六、行政調查與程序注意事項（職權調查主義、有利不利一併注意、行政程序法第39條與第102條陳述意見機會、書面紀錄訪視勘驗）；七、裁量基準與風險控管原則（審酌危害程度、侵害範圍國土類型、不法所得與資力；比例原則、必要性、最小侵害原則）；八、結論與建議（程序瑕疵/裁量不一致/跨機關協調三大風險；聯合稽查、教育訓練案例庫、制度檢討與六大具體執法建議）；附件一：國土計畫法第 38 條第 1 至第 7 項完整法定條文抄本與逐項實務精解；內建實務裁量與處分流程速查工具。',
    hasFullContent: true
  },
  {
    id: 'appeal-and-litigation-analysis',
    num: 11,
    title: '違規訴願訴訟案分析',
    category: '行政救濟分析',
    keywords: ['行政處分', '訴願答辯', '行政訴訟', '原告之訴駁回', '信賴保護原則', '比例原則', '明確性原則', '判決見解'],
    summary: '非都市土地違規裁罰案件於內政部訴願審議委員會與行政法院歷年勝敗訴關鍵、撤銷處分樣態分析與答辯防禦指南。',
    hasFullContent: false
  }
];

export const SpecialReportDetailPage: React.FC<SpecialReportDetailPageProps> = ({ onBack }) => {
  // 當前選取之主題 ID（預設為第 1 個：殯葬設施）
  const [selectedTopicId, setSelectedTopicId] = useState<string>('funeral-facilities');

  // 關鍵字搜尋字串
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 複製提示
  const [copiedTip, setCopiedTip] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedTip(`已複製「${label}」！`);
    setTimeout(() => setCopiedTip(null), 2500);
  };

  // 根據搜尋關鍵字過濾主題
  const filteredTopics = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return SPECIAL_REPORT_TOPICS;

    return SPECIAL_REPORT_TOPICS.filter((t) => {
      const inTitle = t.title.toLowerCase().includes(q);
      const inCategory = t.category.toLowerCase().includes(q);
      const inSummary = t.summary?.toLowerCase().includes(q) || false;
      const inKeywords = t.keywords.some((k) => k.toLowerCase().includes(q));
      return inTitle || inCategory || inSummary || inKeywords;
    });
  }, [searchQuery]);

  // 目前選取的主題資料
  const currentTopic = useMemo(() => {
    return (
      SPECIAL_REPORT_TOPICS.find((t) => t.id === selectedTopicId) ||
      filteredTopics[0] ||
      SPECIAL_REPORT_TOPICS[0]
    );
  }, [selectedTopicId, filteredTopics]);

  // 前後篇導覽
  const currentIndex = SPECIAL_REPORT_TOPICS.findIndex((t) => t.id === currentTopic.id);
  const prevTopic = currentIndex > 0 ? SPECIAL_REPORT_TOPICS[currentIndex - 1] : null;
  const nextTopic = currentIndex < SPECIAL_REPORT_TOPICS.length - 1 ? SPECIAL_REPORT_TOPICS[currentIndex + 1] : null;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 animate-fade-in">
      {/* 複製成功提示 Toast */}
      {copiedTip && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1F3864] text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-sm font-semibold animate-fade-in border border-[#DDD5C7]/30">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{copiedTip}</span>
        </div>
      )}

      {/* 頂部導航與標題區 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
                專題報告
              </h1>
              <p className="text-sm sm:text-base text-[#5B584E] mt-0.5">
                非都市土地 11 大核心專題研究報告・法令研析與實務指引資料庫
              </p>
            </div>
          </div>
        </div>

        {/* 搜尋框 */}
        <div className="pt-2 border-t border-[#ECE6DB]">
          <div className="relative">
            <Search className="w-5 h-5 text-[#8C5A4B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜尋 11 大專題報告主題、關鍵字（例如：殯葬設施、土石方、國土計畫、民宿、強制執行…）"
              className="w-full pl-11 pr-24 py-2.5 sm:py-3 bg-[#FAF7F2] border-2 border-[#DDD5C7] rounded-xl text-sm sm:text-base text-[#2D2623] placeholder-[#8A8179] focus:outline-hidden focus:border-[#1F3864] focus:bg-white transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs font-bold text-[#7D7065] hover:text-[#1F3864] bg-white border border-[#DDD5C7] rounded-md transition-colors cursor-pointer"
              >
                清除
              </button>
            )}
          </div>

          {searchQuery && (
            <div className="flex items-center justify-between text-xs text-[#7D7065] mt-2 px-1">
              <span>
                搜尋「<strong className="text-[#1F3864]">{searchQuery}</strong>」：符合{' '}
                <strong className="text-[#8C5A4B]">{filteredTopics.length}</strong> 個專題主題
              </span>
              {filteredTopics.length === 0 && (
                <span className="text-rose-600">查無相符主題，請嘗試其他關鍵字</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 主內容區塊：【左側一列是 11 個主題】，【右側顯示報告內容】 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ========================================================================= */}
        {/* 左側：專題報告主題清單（11 個主題一列） */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3 sticky top-4">
            <div className="flex items-center justify-between pb-2.5 border-b border-[#ECE6DB]">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#8C5A4B]" />
                <h3 className="font-bold text-base text-[#1F3864]">
                  專題報告主題
                </h3>
              </div>
              <span className="text-xs font-bold text-[#7D7065] bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#DDD5C7]">
                共 {SPECIAL_REPORT_TOPICS.length} 項
              </span>
            </div>

            {/* 主題按鈕列表 */}
            <div className="space-y-1.5 max-h-[calc(100vh-220px)] overflow-y-auto pr-0.5">
              {filteredTopics.map((item) => {
                const isActive = item.id === currentTopic.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedTopicId(item.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-center justify-between gap-2.5 border-2 ${
                      isActive
                        ? 'bg-[#1F3864] text-white border-[#1F3864] shadow-xs'
                        : 'bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#2D2623] border-[#DDD5C7]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`w-6 h-6 rounded-md text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                          isActive
                            ? 'bg-white text-[#1F3864]'
                            : 'bg-white text-[#8C5A4B] border border-[#DDD5C7]'
                        }`}
                      >
                        {item.num.toString().padStart(2, '0')}
                      </span>
                      <div className="min-w-0">
                        <div
                          className={`font-bold text-sm truncate flex items-center gap-1.5 ${
                            isActive ? 'text-white' : 'text-[#1F3864]'
                          }`}
                        >
                          <span>{item.title}</span>
                          {item.hasFullContent && (
                            <span className={`text-[10px] px-1.5 py-0.2 rounded font-normal ${isActive ? 'bg-emerald-500/30 text-emerald-200' : 'bg-emerald-100 text-emerald-800'}`}>
                              完整收錄
                            </span>
                          )}
                        </div>
                        <div
                          className={`text-[11px] truncate mt-0.5 ${
                            isActive ? 'text-[#DDD5C7]' : 'text-[#7D7065]'
                          }`}
                        >
                          {item.category}
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive ? 'text-white translate-x-0.5' : 'text-[#A39891]'
                      }`}
                    />
                  </button>
                );
              })}

              {filteredTopics.length === 0 && (
                <div className="p-6 text-center text-xs text-[#7D7065] bg-[#FAF7F2] rounded-xl border border-dashed border-[#DDD5C7]">
                  無相符的專題主題
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 右側：報告詳細內容展示區塊 */}
        {/* ========================================================================= */}
        <div className="lg:col-span-8 space-y-5">
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
            {/* 主題頂部標題列 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#ECE6DB]">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-lg bg-[#1F3864] text-white text-xs font-mono font-bold tracking-wider">
                    專題 {currentTopic.num.toString().padStart(2, '0')}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FAF7F2] text-[#8C5A4B] border border-[#DDD5C7]">
                    {currentTopic.category}
                  </span>
                  {currentTopic.date && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs text-[#7D7065] bg-[#FAF7F2] border border-[#DDD5C7] flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-[#8C5A4B]" />
                      <span>{currentTopic.date}</span>
                    </span>
                  )}
                </div>
                <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                  {currentTopic.title}
                </h2>
              </div>

              {/* 操作按鈕組 */}
              <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
                {currentTopic.id === 'funeral-facilities' && (
                  <a
                    href="/assets/aistudio/_____63fe3052.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#1F3864] hover:bg-[#152747] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                    title="開啟原始 PDF 檔案"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>查看原始 PDF</span>
                  </a>
                )}
                {currentTopic.id === 'sports-venues' && (
                  <a
                    href="/assets/aistudio/_____e11e9ab0.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#1F3864] hover:bg-[#152747] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                    title="開啟原始 PDF 檔案"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>查看原始 PDF</span>
                  </a>
                )}
                {currentTopic.id === 'construction-soil' && (
                  <a
                    href="/assets/aistudio/________c36100fe.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#1F3864] hover:bg-[#152747] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                    title="開啟原始 PDF 檔案"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>查看原始 PDF</span>
                  </a>
                )}
                {currentTopic.id === 'power-machinery-parking' && (
                  <a
                    href="/assets/aistudio/________be93a9c2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#1F3864] hover:bg-[#152747] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                    title="開啟原始 PDF 檔案"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>查看原始 PDF</span>
                  </a>
                )}
                {currentTopic.id === 'hotels-and-bnb' && (
                  <a
                    href="/assets/aistudio/______b22454a1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#1F3864] hover:bg-[#152747] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                    title="開啟原始 PDF 檔案"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>查看原始 PDF</span>
                  </a>
                )}
                {currentTopic.id === 'spatial-planning-consent' && (
                  <a
                    href="/assets/aistudio/_______993b8a97.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#1F3864] hover:bg-[#152747] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                    title="開啟原始 PDF 檔案"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>查看原始 PDF</span>
                  </a>
                )}
                {currentTopic.id === 'illegal-cases' && (
                  <a
                    href="/assets/aistudio/_____a644dcbe.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#1F3864] hover:bg-[#152747] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                    title="開啟原始 PDF 檔案"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>查看原始 PDF</span>
                  </a>
                )}
                {currentTopic.id === 'ceramic-land' && (
                  <a
                    href="/assets/aistudio/_____1d89adec.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#1F3864] hover:bg-[#152747] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                    title="開啟原始 PDF 檔案"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>查看原始 PDF</span>
                  </a>
                )}
                {currentTopic.id === 'enforcement-and-creditor-cert' && (
                  <a
                    href="/assets/aistudio/__________98b9a2d7.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#1F3864] hover:bg-[#152747] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                    title="開啟原始 PDF 檔案"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>查看原始 PDF (61頁)</span>
                  </a>
                )}
                {currentTopic.id === 'spatial-planning-violations' && (
                  <a
                    href="/assets/aistudio/_________a6775eab.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#1F3864] hover:bg-[#152747] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                    title="開啟原始 PDF 檔案"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>查看原始 PDF (12頁)</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => handleCopy(currentTopic.title, `專題名稱：${currentTopic.title}`)}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-bold text-[#8C5A4B] transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
                  title="複製專題主題名稱"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>複製主題</span>
                </button>
              </div>
            </div>

            {/* ================================================================= */}
            {/* 主題 1：殯葬設施完整內容呈現（依《殯葬設施.pdf》全文無保留完整排版） */}
            {/* ================================================================= */}
            {currentTopic.id === 'funeral-facilities' ? (
              <div className="space-y-8 text-[#2D2623] leading-relaxed text-sm sm:text-base">
                {/* 報告主標題與日期 */}
                <div className="text-center py-4 bg-[#FAF7F2] border border-[#DDD5C7] rounded-xl space-y-1">
                  <h1 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                    殯葬設施涉非都市土地容許使用、變更及更正編定
                  </h1>
                  <p className="text-xs sm:text-sm text-[#7D7065] font-mono">
                    115 年 2 月 10 日
                  </p>
                </div>

                {/* 章節快速導覽錨點列 */}
                <div className="p-3 bg-white rounded-xl border border-[#DDD5C7] flex items-center gap-2 overflow-x-auto text-xs font-bold">
                  <span className="text-[#8C5A4B] shrink-0 font-bold">快速跳轉：</span>
                  <a href="#funeral-sec-1" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0">一、產業趨勢</a>
                  <a href="#funeral-sec-2" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0">二、相關規定</a>
                  <a href="#funeral-sec-3" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0">三、容許使用</a>
                  <a href="#funeral-sec-4" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0">四、變更編定</a>
                  <a href="#funeral-sec-5" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0">五、更正編定</a>
                  <a href="#funeral-sec-6" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0">六、國土計畫管制</a>
                  <a href="#funeral-sec-7" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0">七、新北現況與違規</a>
                  <a href="#funeral-sec-8" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0">八、鄰避設施解決</a>
                  <a href="#funeral-sec-9" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0">九、未來展望</a>
                </div>

                {/* 一、殯葬產業趨勢 */}
                <section id="funeral-sec-1" className="space-y-4 pt-2">
                  <div className="flex items-center gap-2 border-b-2 border-[#1F3864] pb-2">
                    <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
                      一
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                      一、殯葬產業趨勢
                    </h3>
                  </div>

                  <div className="space-y-3 pl-1 sm:pl-3">
                    <h4 className="font-bold text-[#1F3864] text-base">
                      （一）高齡化社會需求
                    </h4>
                    <p className="leading-relaxed">
                      本國由「高齡社會」（14%）轉變為「超高齡社會」（20%）僅歷時約 7 至 8 年，速度遠快於日本、美國及歐洲國家，高齡化現象將帶來死亡率的上升。
                    </p>

                    {/* 數據圖表重點摘要卡片 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-1.5 text-xs">
                        <span className="font-bold text-[#1F3864]">📊 65歲以上人口占總人口比率趨勢（中推估值）</span>
                        <div className="space-y-1 text-[#5A4B43]">
                          <div>• 82 年：7.1%（邁入高齡化 ageing）</div>
                          <div>• 107 年：14.5%（轉入高齡 aged）</div>
                          <div>• 115 年：20.5%（正式邁入超高齡 super-aged）</div>
                          <div>• 150 年：預估 38.8%（其中 85 歲以上高達 9.1%）</div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-1.5 text-xs">
                        <span className="font-bold text-[#8C5A4B]">📈 死亡數與65歲以上人口數推估</span>
                        <div className="space-y-1 text-[#5A4B43]">
                          <div>• 70 年：死亡數約 8.7 萬人</div>
                          <div>• 107 年：死亡數約 16.9 萬人</div>
                          <div>• 150 年：死亡數預估攀升至 33.7 萬人，高齡人口破 900 萬人</div>
                          <div>• 衍生殯葬禮儀、墓地骨灰存放設施大量硬體剛性需求</div>
                        </div>
                      </div>
                    </div>

                    <h4 className="font-bold text-[#1F3864] text-base pt-3">
                      （二）寵物殯葬興起
                    </h4>
                    <p className="leading-relaxed">
                      現今社會觀念中，寵物不再只是「看門」或「捕鼠」的工具，而是具備人格權之家人。飼主希望寵物走後亦可享有尊嚴，故就「遺體美容」、「靈堂告別式」、「撿骨儀式」需求激增，且專業殯葬設施提供悲傷輔導，協助飼主透過莊重的儀式獲得心理慰藉，情感連結係需求成長的最強動力。
                    </p>
                  </div>
                </section>

                {/* 二、殯葬設施相關規定 */}
                <section id="funeral-sec-2" className="space-y-4 pt-4">
                  <div className="flex items-center gap-2 border-b-2 border-[#1F3864] pb-2">
                    <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
                      二
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                      二、殯葬設施相關規定
                    </h3>
                  </div>

                  <p className="leading-relaxed pl-1 sm:pl-3">
                    非都市土地之使用及管制涉殯葬設施須符合區域計畫法及非都市土地使用管制規則（下稱管制規則）等規定，其中人類殯葬設施適用「殯葬管理條例」及「新北市政府辦理殯葬設施興辦事業計畫審查要點」，另寵物殯葬設施則適用「非都市土地申請變更為寵物生命紀念設施使用興辦事業計畫審查作業要點」，謹就兩者相關規定分述如下：
                  </p>

                  <div className="space-y-5 pl-1 sm:pl-3">
                    {/* (一) 設施定義 */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-base text-[#1F3864] bg-[#FAF7F2] p-2.5 rounded-lg border-l-4 border-[#1F3864]">
                        (一) 設施定義：
                      </h4>
                      
                      <div className="space-y-2 pl-2">
                        <h5 className="font-bold text-[#1F3864]">1. 人類：</h5>
                        <ul className="space-y-1.5 pl-4 list-none text-xs sm:text-sm text-[#332B27]">
                          <li><strong>(1) 公墓：</strong>指供公眾營葬屍體、埋藏骨灰或供樹葬之設施。</li>
                          <li><strong>(2) 殯儀館：</strong>指醫院以外，供屍體處理及舉行殮、殯、奠、祭儀式之設施。</li>
                          <li><strong>(3) 禮廳及靈堂：</strong>指殯儀館外單獨設置或附屬於殯儀館，供舉行奠、祭儀式之設施。</li>
                          <li><strong>(4) 火化場：</strong>指供火化屍體或骨骸之場所。</li>
                          <li><strong>(5) 骨灰（骸）存放設施：</strong>指供存放骨灰（骸）之納骨堂（塔）、納骨牆或其他形式之存放設施。</li>
                        </ul>

                        <h5 className="font-bold text-[#8C5A4B] pt-2">2. 寵物：</h5>
                        <p className="pl-4 text-xs sm:text-sm text-[#332B27]">
                          寵物生命紀念設施應設置寵物屍體存放及處理設施，並得設置寵物屍體清理設施、寵物骨灰存放設施、寵物骨灰樹葬、灑葬區或其他寵物生命紀念必要設施。
                        </p>
                      </div>
                    </div>

                    {/* (二) 區位限制 */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-base text-[#1F3864] bg-[#FAF7F2] p-2.5 rounded-lg border-l-4 border-[#1F3864]">
                        (二) 區位限制：
                      </h4>

                      <div className="space-y-3 pl-2">
                        <h5 className="font-bold text-[#1F3864]">1. 人類：</h5>
                        <div className="space-y-2 pl-4 text-xs sm:text-sm text-[#332B27]">
                          <p>
                            設置、擴充公墓，應選擇不影響水土保持、不破壞環境保護、不妨礙軍事設施及公共衛生之適當地點為之；其與下列第一款地點距離不得少於一千公尺，與第二款、第三款及第六款地點距離不得少於五百公尺，與其他各款地點應因地制宜，保持適當距離。但其他法律或自治條例另有規定者，從其規定：
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-3 bg-[#FAF7F2] rounded-lg border border-[#DDD5C7] text-xs">
                            <div><strong>一、</strong>公共飲水井或飲用水之水源地（距離不得少於 1,000 公尺）。</div>
                            <div><strong>二、</strong>學校、醫院、幼兒園（距離不得少於 500 公尺）。</div>
                            <div><strong>三、</strong>戶口繁盛地區（距離不得少於 500 公尺）。</div>
                            <div><strong>四、</strong>河川（保持適當距離）。</div>
                            <div><strong>五、</strong>工廠、礦場（保持適當距離）。</div>
                            <div><strong>六、</strong>貯藏或製造爆炸物或其他易燃氣體、油料場所（不得少於 500 公尺）。</div>
                          </div>
                          <p className="text-xs text-[#7D7065]">
                            ※ 前項公墓專供樹葬者，得縮短其與第一款至第五款地點之距離。
                          </p>
                          <p>
                            設置、擴充殯儀館、火化場或骨灰（骸）存放設施，應與前條第一項第二款規定之地點（學校、醫院、幼兒園）距離不得少於三百公尺，與第六款規定之地點（易燃爆炸物場所）距離不得少於五百公尺，與第三款戶口繁盛地區應保持適當距離。但其他法律或自治條例另有規定者，從其規定。
                          </p>
                          <p>
                            單獨設置、擴充禮廳及靈堂，應與前條第一項第二款規定之地點距離不得少於二百公尺。但其他法律或自治條例另有規定者，從其規定。
                          </p>
                        </div>

                        <h5 className="font-bold text-[#8C5A4B] pt-2">2. 寵物：</h5>
                        <div className="pl-4 text-xs sm:text-sm text-[#332B27] space-y-1.5">
                          <p>
                            設置地點不得位於<strong>特定農業區、森林區及鄉村區</strong>，並應與學校、醫院、幼兒園保持適當距離。
                          </p>
                          <p>
                            設置地點距離下列場所不得少於五百公尺，但其他法律或自治條例另有規定者，從其規定：
                            (一) 儲存或製造炸藥、棉花藥、雷汞或其他相類之爆裂物及其主要原料之場所。
                          </p>
                          <p>
                            規劃地點距離飲用水水源水質保護區內之飲用水或自來水取水口均不得少於一千公尺。
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* (三) 面積限制 */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-base text-[#1F3864] bg-[#FAF7F2] p-2.5 rounded-lg border-l-4 border-[#1F3864]">
                        (三) 面積限制：
                      </h4>

                      <div className="space-y-2 pl-2">
                        <h5 className="font-bold text-[#1F3864]">1. 人類：</h5>
                        <p className="pl-4 text-xs sm:text-sm text-[#332B27]">
                          私立公墓之設置或擴充，由直轄市、縣（市）主管機關視其設施內容及性質，定其最小面積。但<strong>山坡地設置私立公墓，其面積不得小於五公頃</strong>。
                        </p>

                        <h5 className="font-bold text-[#8C5A4B] pt-2">2. 寵物：</h5>
                        <div className="pl-4 text-xs sm:text-sm text-[#332B27] space-y-1.5">
                          <p>
                            土地面積不得少於零點二公頃；位於山坡地範圍內者，不得少於十公頃。
                          </p>
                          <p>
                            但有下列情形之一者，得認定符合本規則第五十二條之一第三款所定公共設施，免受土地面積不得少於十公頃之限制：
                          </p>
                          <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#DDD5C7] space-y-1 text-xs">
                            <div><strong>1. 政府興辦。</strong></div>
                            <div>
                              <strong>2. 民間興辦：</strong>除第三項另有規定外，依本要點提出申請設置包含有寵物屍體存放及處理設施、寵物骨灰存放設施、寵物骨灰樹葬、灑葬區等寵物生命紀念設施者，並經直轄市、縣（市）政府認定具公益性。
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 三、容許使用 */}
                <section id="funeral-sec-3" className="space-y-4 pt-4">
                  <div className="flex items-center gap-2 border-b-2 border-[#1F3864] pb-2">
                    <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
                      三
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                      三、容許使用
                    </h3>
                  </div>

                  <div className="space-y-3.5 pl-1 sm:pl-3 text-xs sm:text-sm text-[#332B27]">
                    <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2">
                      <h4 className="font-bold text-[#1F3864] text-sm sm:text-base">
                        人類殯葬設施容許使用
                      </h4>
                      <p className="leading-relaxed">
                        人類殯葬設施依管制規則第 6 條第 3 項附表一規定，殯葬用地容許使用項目含殯葬設施，其許可使用細目包含：
                        <strong> 1.公墓、2.殯儀館、3.火化場、4.骨灰（骸）存放、5.禮廳及靈堂</strong>
                        （皆免經申請許可使用，附帶條件：本款各目位於全國區域計畫規定之沿海自然保護區者，需經目的事業主管機關、使用地主管機關及有關機關許可。），惟依內政部頒「非都市土地容許使用執行要點」第 4 點附表一規定，許可使用細目之適用範圍，係由其目的事業主管機關（<strong>新北市政府殯葬管理處</strong>）認定。
                      </p>
                    </div>

                    <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2">
                      <h4 className="font-bold text-[#8C5A4B] text-sm sm:text-base">
                        寵物殯葬設施容許使用
                      </h4>
                      <p className="leading-relaxed">
                        寵物殯葬設施依管制規則第 6 條第 3 項附表一規定，殯葬用地容許使用項目寵物骨灰灑葬區，其許可使用細目包含<strong>寵物骨灰灑葬區</strong>（屬需經目的事業主管機關、使用地主管機關及有關機關許可使用細目，附帶條件：本款各目位於全國區域計畫規定之沿海自然保護區者，需經目的事業主管機關、使用地主管機關及有關機關許可，附帶條件：應符合下列各款規定：
                      </p>
                      <div className="pl-4 space-y-1 text-xs">
                        <div>(一) 應與殯葬設施有明顯區隔。</div>
                        <div>(二) 經直轄市、縣（市）殯葬主管機關確認已無殯葬設施規劃設置及使用需求。</div>
                        <div>(三) 使用面積不得超過二千五百平方公尺。</div>
                      </div>
                      <p className="text-xs text-[#7D7065] pt-1">
                        惟依內政部頒「非都市土地容許使用執行要點」第 4 點附表一規定，許可使用細目之適用範圍，係由其目的事業主管機關（<strong>新北市政府動物保護防疫處</strong>）認定。
                      </p>
                    </div>

                    {/* 相關重要函釋與爭點 */}
                    <div className="space-y-3 pt-2">
                      <h4 className="font-bold text-[#1F3864] text-base">
                        重要相關函釋與衍生型態研析
                      </h4>

                      <div className="p-3.5 bg-white rounded-xl border border-[#DDD5C7] space-y-1">
                        <span className="font-bold text-[#1F3864]">📌 營業及辦公處所：</span>
                        <p className="text-[#4A3E39]">
                          另殯葬服務業之「營業及辦公處所」，依<strong>內政部 93 年 5 月 17 日台內民字第 0930005065 號函</strong>所示，亦得於甲、乙、丙種建築用地容許使用項目之「日用品零售及服務設施」項下「營業辦公處所」容許使用。
                        </p>
                      </div>

                      <div className="p-3.5 bg-white rounded-xl border border-[#DDD5C7] space-y-1">
                        <span className="font-bold text-[#1F3864]">📌 專供追思祭拜慰問之場所：</span>
                        <p className="text-[#4A3E39]">
                          至專供追思祭拜慰問之場所，因無涉停放遺體、棺柩、骨灰（骸），且未對外辦理告別式等活動，該等設施非屬殯葬設施，前曾經<strong>內政部 106 年 2 月 7 日</strong>研商因應殯葬管理條例第 24 條修正相關管理配套措施會議紀錄決議，初步研議前開設施於「甲、乙、丙種建築用地」類別中「日用品零售及服務設施」之供各行業使用之「營業及辦公處所」容許使用，<strong>惟尚未定案</strong>。
                        </p>
                      </div>

                      <div className="p-3.5 bg-white rounded-xl border border-[#DDD5C7] space-y-1">
                        <span className="font-bold text-[#1F3864]">📌 「生基位」定位函釋：</span>
                        <p className="text-[#4A3E39]">
                          而有關「生基位」及「牌樓」部分，依<strong>內政部 112 年 9 月 23 日台內宗字第 1120045837 號函釋</strong>略以，民間造生基位之習俗係為求改運及消災解厄，實務上多以存放活人之毛髮、指甲或衣物為主，而非骨灰或骨骸，尚與喪葬事宜無涉，<strong>其設施自非屬殯葬設施</strong>，故經營該等設施之業者及相關買賣行為，<strong>非屬殯葬管理條例規範之事項</strong>。
                        </p>
                      </div>

                      <div className="p-3.5 bg-white rounded-xl border border-[#DDD5C7] space-y-1">
                        <span className="font-bold text-[#1F3864]">📌 「牌位樓」定位函釋：</span>
                        <p className="text-[#4A3E39]">
                          次依<strong>內政部 113 年 9 月 19 日台內宗字第 1130137931 號函釋</strong>略以，牌位樓如於殯葬設施設置、擴充、增建或改建時納入併同設置，屬該殯葬設施之一部，須依殯葬管理條例規定辦理；倘該牌位樓係為<strong>單獨申請設置，因非屬殯葬設施及其應有設施，而無殯葬管理條例規定之適用</strong>。
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 四、變更編定 */}
                <section id="funeral-sec-4" className="space-y-4 pt-4">
                  <div className="flex items-center gap-2 border-b-2 border-[#1F3864] pb-2">
                    <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
                      四
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                      四、變更編定
                    </h3>
                  </div>

                  <div className="space-y-3.5 pl-1 sm:pl-3 text-xs sm:text-sm text-[#332B27]">
                    <p className="leading-relaxed">
                      依管制規則第 27 條規定，使用分區內各種使用地變更編定原則，除該規則另有規定外，應依使用分區內各種使用地變更編定原則表附表三辦理，是倘有變更編定需求並符合前開變更原則者，得依管制規則第 28、30 條規定洽目的事業主管機關（<strong>新北市政府殯葬管理處、新北市政府動物保護防疫處</strong>）申請興辦事業，俟取得興辦事業核准文件後，向地政機關申請變更編定為下列使用地類別：
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
                        <span className="font-bold text-[#1F3864] text-sm">(一) 人類：</span>
                        <p className="mt-1 text-[#4A3E39]">變更為<strong>「殯葬用地」</strong>。</p>
                      </div>

                      <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
                        <span className="font-bold text-[#8C5A4B] text-sm">(二) 寵物：</span>
                        <p className="mt-1 text-[#4A3E39]">
                          變更為<strong>「特定目的事業用地」</strong>。依非都市土地變更編定執行要點（以下簡稱執行要點）第 8 點規定，寵物生命紀念設施得申請變更編定為特定目的事業用地。
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-xl border-2 border-[#DDD5C7] space-y-2.5">
                      <span className="font-bold text-[#1F3864] text-sm sm:text-base">
                        山坡地面積少於 10 公頃殯葬設施事業計畫審議規範（內政部 99.3.26 函）
                      </span>
                      <p className="text-xs text-[#5A4B43] leading-relaxed">
                        另依<strong>內政部 99 年 3 月 26 日台內民字第 0990038491 號函意旨</strong>，有關內政部修正「非都市土地使用管制規則」第 52 條之 1 第 3 款規定興闢公共設施土地位屬山坡地範圍者，其面積少於 10 公頃之殯葬設施事業計畫之審議規範，核處原則如下：
                      </p>
                      <div className="space-y-2 pt-1 text-xs sm:text-sm">
                        <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#DDD5C7]">
                          <strong className="text-[#1F3864]">(一) 殯儀館、火化場、禮廳及靈堂：</strong>
                          <span className="text-[#332B27]">
                            申請設置殯儀館、火化場、禮廳及靈堂，如經查明無管制規則第 49 條之 1 規定之山坡地範圍內土地不得規劃作建築使用之情形者，得申請核准免適用面積不得少於 10 公頃之限制。
                          </span>
                        </div>
                        <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#DDD5C7]">
                          <strong className="text-[#8C5A4B]">(二) 新設公墓及骨灰(骸)存放設施：</strong>
                          <span className="text-[#332B27]">
                            新設公墓及骨灰(骸)存放設施原則上不准免適用面積不得少於 10 公頃之限制，如有地區性供給不足，且無管制規則第 49 條之 1 規定之山坡地範圍內土地不得規劃作建築使用之情形者，得個案考量並嚴格審核。
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 五、更正編定 */}
                <section id="funeral-sec-5" className="space-y-4 pt-4">
                  <div className="flex items-center gap-2 border-b-2 border-[#1F3864] pb-2">
                    <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
                      五
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                      五、更正編定
                    </h3>
                  </div>

                  <div className="space-y-3.5 pl-1 sm:pl-3 text-xs sm:text-sm text-[#332B27]">
                    <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2 leading-relaxed">
                      <p>
                        按公墓暫行條例（25 年 10 月 30 日制定，72 年 12 月 9 日廢止）第 3 條、第 4 條規定：「團體或一姓宗族或個人，呈經市縣政府之許可，得設置公墓。」、「設置公墓，應將左列各款呈報省政府核准，轉咨內政部備案……。」、次按製定非都市土地使用分區圖及編定各種使用地作業須知第 23 點規定：「經編定使用之土地，如土地所有權人檢具確於公告編定前或公告編定期間已變更使用之合法證明文件，依照第 9 點第 2 款編定原則表及說明辦理更正編定。」
                      </p>
                      <p>
                        又按「……涉及更正編定為墳墓用地部分…依臺灣北部區域計畫第一次通盤檢討，對於喪葬設施，應朝區域性整體規劃為原則，是未來墳墓用地，應避免零星設置。…按依非都市土地使用管制規則第八條規定，土地使用編定後，…該墳墓使用之土地，雖未編定為墳墓用地，依上規定仍得繼續為從來之使用。惟如將該地更正編定為墳墓用地，則不啻承認其用地之合法性，原使用人不僅得以長期使用，亦可轉讓他人為喪葬設施之使用，將破壞土地使用管制之精神，…綜上，涉及更正編定為墳墓用地部分，<strong>除持有貴縣非都市土地編定公告前之合法證明文件(核准埋葬之事業計畫文件)外，不得更正為墳墓用地。</strong>」
                      </p>
                      <p>
                        「依作業須知第九點（二）規定，特定農業區內之墳墓設施需為經依法核准使用者，方得依其現況編定為墳墓用地，否則即應依該使用分區之主要用地別─「農牧用地」編定之。…有關前開合法供埋葬之證明文件，依 72 年 11 月 11 日制定公布之墳墓設置管理條例第 6 條業規定，設置公墓，應備具相關文件報請直轄市、縣（市）主管機關核准；同條例第 30 條規定，本條例施行前，私人或團體已設立之公墓，應於本條例施行後 1 年內依本條例之規定補行申請。……」，分別為<strong>內政部 90 年 1 月 11 日台（90）內中地字第 9001245 號函釋</strong>及<strong>內政部 99 年 6 月 14 日內授中辦地字第 0990724700 號函釋</strong>意旨所明文。
                      </p>
                      <div className="p-3 bg-white rounded-lg border border-amber-300 text-[#92400E] font-semibold text-xs sm:text-sm">
                        故辦理更正編定為殯葬用地，須持有非都市土地編定公告前之合法證明文件，即<strong>須持有經省政府核准或縣（市）主管機關核准之設置公墓證明文件</strong>，始得據以辦理更正編定事宜，惟其不以「墳墓設置管理條例」頒行後新設立之墳墓為限。
                      </div>
                    </div>

                    <div className="p-3.5 bg-white rounded-xl border border-[#DDD5C7] space-y-1">
                      <span className="font-bold text-[#1F3864]">📌 法定空地反推不適用函釋：</span>
                      <p className="text-[#4A3E39]">
                        另內政部 74 年 5 月 24 日台（74）內營字第 311272 號函釋，<strong>墳墓不屬於建築法第 4 條所稱之建築物，故墳墓無以建物實際面積反推其應留設之法定空地之適用</strong>。
                      </p>
                    </div>
                  </div>
                </section>

                {/* 六、國土計畫土地使用管制情形 */}
                <section id="funeral-sec-6" className="space-y-4 pt-4">
                  <div className="flex items-center gap-2 border-b-2 border-[#1F3864] pb-2">
                    <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
                      六
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                      六、國土計畫土地使用管制情形
                    </h3>
                  </div>

                  <div className="space-y-3.5 pl-1 sm:pl-3 text-xs sm:text-sm text-[#332B27]">
                    <p className="leading-relaxed">
                      依據國土計畫法第 22 條第 1 項規定：「直轄市、縣（市）國土計畫公告實施後，應由各該主管機關依各級國土計畫國土功能分區之劃設內容，製作國土功能分區圖及編定適當使用地，並實施管制。」及第二十三條第二項規定：「國土功能分區及其分類之使用地類別編定、變更、規模、可建築用地及其強度、應經申請同意使用項目、條件、程序、免經申請同意使用項目、禁止或限制使用及其他應遵行之土地使用管制事項之規則，由中央主管機關定之。……」爰按國土計畫法第二十一條國土功能分區及其分類之土地使用原則、全國國土計畫第九章土地使用指導事項之指導，訂定「國土計畫土地使用管制規則」（113 年 11 月法規會審竣版草案）。
                    </p>
                    <p className="leading-relaxed">
                      依國土計畫使用管制規則第 3 條第 1 項：「各國土功能分區及其分類土地，於依本法核准使用同意、使用許可或由既有合法可建築用地變更為非可建築用地前，按本規則施行日前土地登記簿所載之使用地類別註記，並依本法第二十三條第二項至第四項所定管制規則規定之土地使用管制內容使用。」及第 4 條：「各國土功能分區及其分類土地，除本規則另有規定者外，其免經申請同意、應經申請同意、禁止或限制之使用項目及其細目依下列規定，並應符合各目的事業主管法令規定：一、國土保育地區、農業發展地區及城鄉發展地區各分類土地，依附表一規定。二、海洋資源地區各分類土地，依附表二規定。附表一及附表二容許使用項目及其細目之適用範圍，由中央主管機關會商中央目的事業主管機關認定。」，涉及殯葬設施規定整理如下表：
                    </p>

                    {/* 國土計畫管制附表一對照表 */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-[#1F3864] flex items-center justify-between">
                        <span>附表一 國土保育地區、農業發展地區、城鄉發展地區容許使用情形表（殯葬設施部分）</span>
                      </div>
                      <div className="overflow-x-auto rounded-xl border-2 border-[#DDD5C7] bg-white">
                        <table className="min-w-[760px] w-full text-center text-xs border-collapse">
                          <thead>
                            <tr className="bg-[#1F3864] text-white">
                              <th className="p-2 border border-[#DDD5C7] w-12">群組編號</th>
                              <th className="p-2 border border-[#DDD5C7] w-14">群組</th>
                              <th className="p-2 border border-[#DDD5C7] w-12">項次</th>
                              <th className="p-2 border border-[#DDD5C7] w-24">使用項目</th>
                              <th className="p-2 border border-[#DDD5C7] w-28">使用細目</th>
                              <th className="p-2 border border-[#DDD5C7] w-8">國1</th>
                              <th className="p-2 border border-[#DDD5C7] w-8">國2</th>
                              <th className="p-2 border border-[#DDD5C7] w-8">農1</th>
                              <th className="p-2 border border-[#DDD5C7] w-8">農2</th>
                              <th className="p-2 border border-[#DDD5C7] w-8">農3</th>
                              <th className="p-2 border border-[#DDD5C7] w-10">農4(非原)</th>
                              <th className="p-2 border border-[#DDD5C7] w-10">農4(原)</th>
                              <th className="p-2 border border-[#DDD5C7] w-10">城2-1</th>
                              <th className="p-2 border border-[#DDD5C7] w-8">城3</th>
                              <th className="p-2 border border-[#DDD5C7] text-left">備註</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#DDD5C7] text-[#2D2623]">
                            <tr>
                              <td rowSpan={2} className="p-2 border border-[#DDD5C7] bg-[#FAF7F2] font-mono">1</td>
                              <td rowSpan={2} className="p-2 border border-[#DDD5C7] bg-[#FAF7F2]">農業</td>
                              <td rowSpan={2} className="p-2 border border-[#DDD5C7] bg-[#FAF7F2] font-mono">1-14</td>
                              <td rowSpan={2} className="p-2 border border-[#DDD5C7] font-semibold">寵物生命紀念設施</td>
                              <td className="p-2 border border-[#DDD5C7] text-left">寵物骨灰灑葬區</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-emerald-700">○</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-emerald-700">○</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-emerald-700">○</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-emerald-700">○</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-emerald-700">○</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-emerald-700">○</td>
                              <td className="p-2 border border-[#DDD5C7] text-left text-[11px] text-[#5A4B43]">
                                Φ：限於依第三條第一項規定註記之殯葬用地，且使用面積限零點二五公頃以下。
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 border border-[#DDD5C7] text-left">寵物生命紀念設施</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-emerald-700">○</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-emerald-700">○</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-emerald-700">○</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-emerald-700">○</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-emerald-700">○</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-emerald-700">○</td>
                              <td className="p-2 border border-[#DDD5C7] text-left text-[11px] text-[#5A4B43]">-</td>
                            </tr>
                            <tr>
                              <td rowSpan={5} className="p-2 border border-[#DDD5C7] bg-[#FAF7F2] font-mono">7</td>
                              <td rowSpan={5} className="p-2 border border-[#DDD5C7] bg-[#FAF7F2]">一般性公共設施</td>
                              <td rowSpan={5} className="p-2 border border-[#DDD5C7] bg-[#FAF7F2] font-mono">7-11</td>
                              <td rowSpan={5} className="p-2 border border-[#DDD5C7] font-semibold">殯葬設施</td>
                              <td className="p-2 border border-[#DDD5C7] text-left">公墓</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td rowSpan={5} className="p-2 border border-[#DDD5C7] text-left text-[11px] text-[#5A4B43]">
                                Φ：限於依第三條第一項規定註記之殯葬用地。
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 border border-[#DDD5C7] text-left">殯儀館</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                            </tr>
                            <tr>
                              <td className="p-2 border border-[#DDD5C7] text-left">火化場</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                            </tr>
                            <tr>
                              <td className="p-2 border border-[#DDD5C7] text-left">骨灰（骸）存放設施</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                            </tr>
                            <tr>
                              <td className="p-2 border border-[#DDD5C7] text-left">禮廳及靈堂</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                              <td className="p-2 border border-[#DDD5C7] text-rose-600 font-bold">✕</td>
                              <td className="p-2 border border-[#DDD5C7] font-bold text-blue-700">Φ</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="text-[11px] text-[#7D7065] space-y-0.5">
                        <div>「○」代表應經申請同意使用。</div>
                        <div>「Φ」代表符合備註欄位之條件者，得應經申請同意使用，未符合者禁止使用。</div>
                        <div>「✕」代表禁止使用。</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2 text-xs sm:text-sm">
                      <p>
                        依容許使用情形表所載，寵物生命紀念設施之使用細目「寵物骨灰灑葬區」除國 1、農 1 禁止使用外，餘均需經申請同意後方得使用（國 2 限於依第三條第一項規定註記之殯葬用地，且使用面積限零點二五公頃以下。），「寵物生命紀念設施」則除於國 1、國 2、農 1 禁止使用外，餘均需經申請同意後方得使用。
                      </p>
                      <p>
                        另殯葬設施部分，其使用細目「公墓」全數皆需經申請同意後方得使用（限於依第三條第一項規定註記之殯葬用地。），至「殯儀館」、「火化場」、「骨灰(骸)存放設施」、「禮廳及靈堂」除國 1、農 1、農 4（非原）及城 2-1 禁止使用外，餘皆需經申請同意後方得使用（限於依第三條第一項規定註記之殯葬用地。）。
                      </p>
                    </div>
                  </div>
                </section>

                {/* 七、新北市殯葬產業現況 */}
                <section id="funeral-sec-7" className="space-y-4 pt-4">
                  <div className="flex items-center gap-2 border-b-2 border-[#1F3864] pb-2">
                    <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
                      七
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                      七、新北市殯葬產業現況
                    </h3>
                  </div>

                  <div className="space-y-4 pl-1 sm:pl-3 text-xs sm:text-sm text-[#332B27]">
                    <div>
                      <h4 className="font-bold text-[#1F3864] text-base">
                        (一) 殯葬產業統計（人類）
                      </h4>
                      <p className="mt-1">
                        依新北市統計資訊網提供 113 年新北市殯葬服務業概況如下：
                      </p>
                      <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] mt-2 text-xs">
                        <div>• 殯葬設施經營業：許可家數 35 家（員工數：男 575 人、女 682 人）</div>
                        <div>• 殯葬禮儀服務業：許可家數 559 家（員工數：男 1,918 人、女 945 人）</div>
                        <div>• 跨區備查家數：936 家（員工數 2,718 人）</div>
                        <div>• 兼營合法生前契約業者：6 家（本年簽訂契約 361 件、累計簽訂契約 9,766 件）</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#8C5A4B] text-base">
                        (二) 殯葬設施（寵物）
                      </h4>
                      <p className="mt-1">
                        依新北市政府動物保護防疫處 114 年 11 月 18 日新北動防寵字第 1143372346 號函所載，現有遭民眾檢舉寵物殯葬既有業者名冊：
                      </p>

                      {/* 動保處公文摘要框 */}
                      <div className="p-3.5 bg-white rounded-xl border border-[#DDD5C7] my-2 text-xs space-y-1">
                        <div className="font-bold text-[#1F3864]">新北市政府動物保護防疫處 函（114.11.18 新北動防寵字第 1143372346 號）</div>
                        <div>主旨：檢附民眾檢舉本市寵物殯葬既有業者名冊一份，請貴局/科依權責配合辦理，並提供相關裁罰資料，請查照見復。</div>
                        <div>說明要點：農業部112年7月11日令頒「非都市土地申請變更為寵物生命紀念設施使用興辦事業計畫審查作業要點」；目前尚無中央業管法規直接規範納管，本市地方自治條例草案刻正提請市政會議審議中，違規樣態宜由各局處依權責配合辦理。</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#1F3864] text-base">
                        (三) 殯葬設施違規辦理情形
                      </h4>
                      <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2 leading-relaxed">
                        <p>
                          查新北市政府自 110 年至 114 年間受理轄區因違規設置殯葬設施案件計有 8 件，依「新北市政府各機關處理一行為違反數行政法規定案件權責劃分及作業程序」分工原則規定，違規案件同時違反數不同性質之管理法規，其順序依<strong>（一）行業（二）行為（三）物</strong>之管理法規定，並由順序在先管理法規之權責機關為主政機關，爰土地現況倘涉殯葬設施違規（行為或行業法規），應優先於物之管理法規，爰前開違規案均依前開原則移請<strong>新北市政府殯葬管理處主政辦理</strong>。
                        </p>
                        <p>
                          另前開遭民眾檢舉之寵物殯葬既有業者，新北市依區域計畫法相關規定辦理情形如下：
                        </p>
                      </div>

                      {/* 19 家遭民眾檢舉寵物殯葬業清冊表格 */}
                      <div className="mt-3 space-y-1.5">
                        <span className="font-bold text-xs text-[#1F3864]">
                          新北市非都市土地遭民眾檢舉寵物殯葬業查處情形一覽表
                        </span>
                        <div className="overflow-x-auto rounded-xl border-2 border-[#DDD5C7] bg-white">
                          <table className="min-w-[760px] w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-[#1F3864] text-white">
                                <th className="p-2.5 w-36">業者名稱</th>
                                <th className="p-2.5 w-48">地址</th>
                                <th className="p-2.5 w-16 text-center">現況</th>
                                <th className="p-2.5 w-16 text-center">非都</th>
                                <th className="p-2.5 w-16 text-center">性質</th>
                                <th className="p-2.5">地政局辦理情形</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#DDD5C7] text-[#2D2623]">
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">欣隆寵物生活有限公司</td>
                                <td className="p-2.5">新北市淡水區忠寮里破子崙10號</td>
                                <td className="p-2.5 text-center">既有業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">文化</td>
                                <td className="p-2.5 text-rose-700 font-semibold">112年3月13日依區域計畫法裁罰在案</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">萬里福田寵物城堡有限公司</td>
                                <td className="p-2.5">新北市萬里區大坪1之1號</td>
                                <td className="p-2.5 text-center">既有業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">文化</td>
                                <td className="p-2.5 text-rose-700 font-semibold">111年5月25日依區域計畫法裁罰在案 (文號 1110551001)</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">慈愛寵物樂園</td>
                                <td className="p-2.5">新北市三峽區介壽路三段172巷30號</td>
                                <td className="p-2.5 text-center">既有業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">文化</td>
                                <td className="p-2.5 text-rose-700 font-semibold">113年7月29日依區域計畫法裁罰在案</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">翡翠森林寵物生命紀念館</td>
                                <td className="p-2.5">新北市萬里區中萬里加投段荖寮湖小段10-1、10-3地號</td>
                                <td className="p-2.5 text-center">既有業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">文化</td>
                                <td className="p-2.5 text-rose-700 font-semibold">111年3月25日依區域計畫法裁罰在案 (文號 1110554222)</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">愛物園寵物紀念館</td>
                                <td className="p-2.5">新北市淡水區南勢埔46號之2</td>
                                <td className="p-2.5 text-center">既有業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">文化</td>
                                <td className="p-2.5 text-rose-700 font-semibold">108年11月11日依區域計畫法裁罰在案</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">賀茸花園</td>
                                <td className="p-2.5">新北市汐止區八連路二段329巷130號之一(汐止區八連段頂小段9-21地號)</td>
                                <td className="p-2.5 text-center">既有業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">文化</td>
                                <td className="p-2.5 leading-relaxed">
                                  1. 經查無裁罰紀錄，續查續辦。<br />
                                  2. 已請公所114年12月5日現場勘查。<br />
                                  3. 經查該地號現況農業局查證無違規非耕作使用；另211地號現況為花草苗木，判定尚無違反管制規定。
                                </td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">陽明山寵物天堂企業有限公司</td>
                                <td className="p-2.5">新北市三芝區興華里車埕16之6號</td>
                                <td className="p-2.5 text-center">既有業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">文化</td>
                                <td className="p-2.5 text-[#5A4B43]">經查無裁罰紀錄，續查續辦</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">淡水寵物天愛寶業社</td>
                                <td className="p-2.5">新北市三芝區橫山里南勢崗2之7號</td>
                                <td className="p-2.5 text-center">既有業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">文化</td>
                                <td className="p-2.5 text-[#5A4B43]">經查無裁罰紀錄，續查續辦</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">國寶寵物</td>
                                <td className="p-2.5">新北市三芝區北新莊店子里9之2號</td>
                                <td className="p-2.5 text-center">既有業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">殯葬</td>
                                <td className="p-2.5 text-[#5A4B43]">經查無裁罰紀錄，續查續辦</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">林東翰</td>
                                <td className="p-2.5">淡水區水源段865-1地號</td>
                                <td className="p-2.5 text-center">既有業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">文化</td>
                                <td className="p-2.5 text-rose-700 font-semibold">已開立處分書裁罰在案</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">張國全</td>
                                <td className="p-2.5">金山區西勢段336-1地號</td>
                                <td className="p-2.5 text-center">新興業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">文化</td>
                                <td className="p-2.5 text-[#5A4B43]">經現場勘查無違規情形</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">蕭松和</td>
                                <td className="p-2.5">三芝區芝蘭段278-1地號</td>
                                <td className="p-2.5 text-center">新興業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">文化</td>
                                <td className="p-2.5 text-[#5A4B43]">經查無裁罰紀錄，續查續辦</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">蘇明德</td>
                                <td className="p-2.5">瑞芳區九份段347地號</td>
                                <td className="p-2.5 text-center">新興業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">-</td>
                                <td className="p-2.5 text-[#5A4B43]">經查無裁罰紀錄，續查續辦</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">幸福天使企業社</td>
                                <td className="p-2.5">淡水區蕃薯寮107、108地號</td>
                                <td className="p-2.5 text-center">新興業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">文化</td>
                                <td className="p-2.5 text-[#5A4B43]">經現場勘查無違規情形</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">劉致璘</td>
                                <td className="p-2.5">石碇區新興坑段八分寮小段0017-0001等地號</td>
                                <td className="p-2.5 text-center">新興業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">-</td>
                                <td className="p-2.5 text-rose-700 font-semibold">113年5月21日依區域計畫法裁罰在案 (文號 1131529003)</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">陳俊蒼</td>
                                <td className="p-2.5">瑞芳區鮑魚坑段粗坑口小段183等4筆地號</td>
                                <td className="p-2.5 text-center">新興業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">-</td>
                                <td className="p-2.5 text-rose-700 font-semibold">107年5月21日依區域計畫法裁罰在案</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">頂邑開發股份有限公司</td>
                                <td className="p-2.5">瑞芳區吉安段418、423-1地號</td>
                                <td className="p-2.5 text-center">新興業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">-</td>
                                <td className="p-2.5 text-[#5A4B43]">經查無裁罰紀錄，續查續辦</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">珍愛彩虹村</td>
                                <td className="p-2.5">瑞芳區粗坑口段粗坑口小段125-9、330-2地號</td>
                                <td className="p-2.5 text-center">新興業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">-</td>
                                <td className="p-2.5 text-[#5A4B43]">經查無裁罰紀錄，續查續辦</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">德年國際股份有限公司</td>
                                <td className="p-2.5">貢寮區長洋段314-1、314-8地號</td>
                                <td className="p-2.5 text-center">新興業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">-</td>
                                <td className="p-2.5 text-[#5A4B43]">經現場勘查無違規情形</td>
                              </tr>
                              <tr className="hover:bg-[#FAF7F2]">
                                <td className="p-2.5 font-bold text-[#1F3864]">大德資產管理(琥珀森林)</td>
                                <td className="p-2.5">汐止區北港段烘內小段118等5筆地號</td>
                                <td className="p-2.5 text-center">新興業者</td>
                                <td className="p-2.5 text-center font-bold">●</td>
                                <td className="p-2.5 text-center">-</td>
                                <td className="p-2.5 leading-relaxed">
                                  1. 經查無裁罰紀錄，續查續辦。<br />
                                  2. 已請公所114年11月28日現場勘查。<br />
                                  3. 現況為水林，無違規。
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 八、鄰避設施解決之道 */}
                <section id="funeral-sec-8" className="space-y-4 pt-4">
                  <div className="flex items-center gap-2 border-b-2 border-[#1F3864] pb-2">
                    <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
                      八
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                      八、鄰避設施解決之道
                    </h3>
                  </div>

                  <div className="space-y-3.5 pl-1 sm:pl-3 text-xs sm:text-sm text-[#332B27]">
                    <p className="leading-relaxed">
                      殯葬設施係屬鄰避設施，其鄰避情結的概念最早是由選址問題而來，過去監獄、焚化爐、核能發電廠等設施面臨選址難題，只要公布位置就引起當地居民的抗議。故民眾反對鄰避設施的主要因素得分為下列幾點：
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                      <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-1.5">
                        <h4 className="font-bold text-[#1F3864] text-sm">
                          （一）心理因素
                        </h4>
                        <p className="text-[#4A3E39] leading-relaxed">
                          民眾對於鄰避設施可能帶來的財產及健康安全危害，感到擔憂及畏懼。
                        </p>
                      </div>

                      <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-1.5">
                        <h4 className="font-bold text-[#1F3864] text-sm">
                          （二）公平性問題
                        </h4>
                        <p className="text-[#4A3E39] leading-relaxed">
                          多數民眾得理解鄰避設施的必要性，對於公共利益有極大效益，但對於為何該鄰避設施設置於當地民眾之居住地附近，而非其他地區，感到質疑與不能接受。
                        </p>
                      </div>

                      <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-1.5">
                        <h4 className="font-bold text-[#1F3864] text-sm">
                          （三）房地產價值問題
                        </h4>
                        <p className="text-[#4A3E39] leading-relaxed">
                          鄰避設施可能因為帶來汙染或危害等問題，影響當地房地產價值，造成貶值之負面效益。
                        </p>
                      </div>

                      <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-1.5">
                        <h4 className="font-bold text-[#1F3864] text-sm">
                          （四）民眾對政府信任度低
                        </h4>
                        <p className="text-[#4A3E39] leading-relaxed">
                          不確定因素導致公眾信任產生阻礙，地方治理期望將政府與民眾關係營造成為將民眾定義為「公民」的角色，當地方政府嘗試增加民眾影響力量，或許可促使地方但是當民眾難以預期特定公共事務的明確處理或發展路徑，或是不了解公共事務內涵及相關議題知識等不確定因素干擾下，信任關係仍難以形成。如政府對環保工作的長期漠視與輕忽，增強了民眾反對鄰避設施的設置。
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-white rounded-xl border-l-4 border-[#1F3864] text-[#1F3864] font-semibold text-xs sm:text-sm">
                      綜上，殯葬設施選擇區位前，應與當地民眾充分溝通協商，並協議對應之補償方案，俾利順利推動。
                    </div>
                  </div>
                </section>

                {/* 九、殯葬設施未來展望 */}
                <section id="funeral-sec-9" className="space-y-4 pt-4">
                  <div className="flex items-center gap-2 border-b-2 border-[#1F3864] pb-2">
                    <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
                      九
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                      九、殯葬設施未來展望
                    </h3>
                  </div>

                  <div className="space-y-3.5 pl-1 sm:pl-3 text-xs sm:text-sm text-[#332B27]">
                    <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-1.5">
                      <h4 className="font-bold text-[#1F3864] text-sm">
                        （一）賦予抗爭與反抗爭之間更多自主協商空間
                      </h4>
                      <p className="leading-relaxed">
                        未來應在管理法制上賦予殯葬設施開發業者與社區居民更多自主協商空間，藉由反覆溝通談判，降低彼此訊息不對等，以利強化社區民眾的理性判斷，避免開發業者投機取巧傾向，則抗爭與反抗爭之個別決策者，得於最少政府全力介入下作自我選擇，以提高整體社會之經濟效率。
                      </p>
                    </div>

                    <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-1.5">
                      <h4 className="font-bold text-[#1F3864] text-sm">
                        （二）重視周邊地理環境與屏障要件
                      </h4>
                      <p className="leading-relaxed">
                        於選擇殯葬用地區位時，除考量地點距離外，更應注意周邊地理環境是否具備得阻隔污染之自然屏障、連外道路避開社區及市街化程度要低等要件。惟前開特殊考量難以鉅細靡遺於法令中載明，爰開發業者於選擇區位時，應善盡業者責任，以確保殯葬設施興建符眾望。
                      </p>
                    </div>

                    <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-1.5">
                      <h4 className="font-bold text-[#1F3864] text-sm">
                        （三）嚴守法定界線與落實興辦事業審查
                      </h4>
                      <p className="leading-relaxed">
                        目前新北市尚有部分殯葬設施違規使用情形，涉土地使用管制、公共利益及民眾觀感等多重層面，故相關業者應嚴守容許使用及變更編定之法定界線，並透過完整興辦事業審查機制，以確保土地使用合理性及行政正當性，降低爭議發生。
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            ) : currentTopic.id === 'sports-venues' ? (
              /* 主題 2：運動場館完整內容呈現（依《運動場館.pdf》全文無保留完整排版） */
              <SportsVenuesReport onCopy={handleCopy} />
            ) : currentTopic.id === 'construction-soil' ? (
              /* 主題 3：營建剩餘土石方完整內容呈現（依《營建剩餘土石方.pdf》全文無保留完整排版） */
              <ConstructionSoilReport onCopy={handleCopy} />
            ) : currentTopic.id === 'power-machinery-parking' ? (
              /* 主題 4：動力機具停放場完整內容呈現（依《動力機具停放場.pdf》全文無保留完整排版） */
              <PowerMachineryParkingReport onCopy={handleCopy} />
            ) : currentTopic.id === 'hotels-and-bnb' ? (
              /* 主題 5：旅館及民宿完整內容呈現（依《旅館及民宿.pdf》全文無保留完整排版） */
              <HotelsAndBnbReport onCopy={handleCopy} />
            ) : currentTopic.id === 'spatial-planning-consent' ? (
              /* 主題 6：國土計畫應經申請同意完整內容呈現（依《應經申請同意.pdf》全文無保留完整排版） */
              <SpatialPlanningConsentReport onCopy={handleCopy} />
            ) : currentTopic.id === 'illegal-cases' ? (
              /* 主題 7：違規案件完整內容呈現（依《違規案件.pdf》全文無保留完整排版） */
              <IllegalCasesReport onCopy={handleCopy} />
            ) : currentTopic.id === 'ceramic-land' ? (
              /* 主題 8：窯業用地完整內容呈現（依《窯業用地.pdf》全文無保留完整排版） */
              <CeramicLandReport onCopy={handleCopy} />
            ) : currentTopic.id === 'enforcement-and-creditor-cert' ? (
              /* 主題 9：強制執行及債權憑證完整內容呈現（依《強制執行及債權憑證.pdf》全文無保留完整排版） */
              <EnforcementAndCreditorCertReport onCopy={handleCopy} />
            ) : currentTopic.id === 'spatial-planning-violations' ? (
              /* 主題 10：國土計畫違規查處完整內容呈現（依《國土計畫違規查處.pdf》全文無保留完整排版） */
              <SpatialPlanningViolationsReport onCopy={handleCopy} />
            ) : (
              /* 其他 7 個主題的待提供狀態卡片 */
              <div className="space-y-5">
                {currentTopic.summary && (
                  <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                    <strong className="text-[#1F3864] font-bold">主題研析概述：</strong>
                    {currentTopic.summary}
                  </div>
                )}

                <div className="p-8 sm:p-10 rounded-xl border-2 border-dashed border-[#DDD5C7] bg-[#FAF7F2]/60 text-center space-y-3">
                  <div className="inline-flex p-3 rounded-2xl bg-white border border-[#DDD5C7] text-[#8C5A4B] shadow-2xs">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#1F3864]">
                      【{currentTopic.title}】專題內容待匯入
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7D7065] max-w-md mx-auto leading-relaxed">
                      本主題架構已定位完畢。後續提供《{currentTopic.title}》之詳細報告內容、法規重點或案例說明後，將立即為您精確排版並完整收錄於此！
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EAE2D7] text-[#4A3E39]">
                      <Sparkles className="w-3.5 h-3.5 text-[#8C5A4B]" />
                      <span>待承辦同仁提供報告資料</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#ECE6DB]">
                  <div className="text-xs font-bold text-[#7D7065] flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#8C5A4B]" />
                    <span>相關法規與業務檢索詞：</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentTopic.keywords.map((kw, kwIdx) => (
                      <span
                        key={kwIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white border border-[#DDD5C7] text-[#4A3E39] shadow-2xs hover:border-[#8C5A4B]/60 transition-colors"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 前後主題切換導覽按鈕 */}
            <div className="pt-4 border-t border-[#ECE6DB] flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
              {prevTopic ? (
                <button
                  type="button"
                  onClick={() => setSelectedTopicId(prevTopic.id)}
                  className="flex items-center gap-1 text-[#4A3E39] hover:text-[#1F3864] bg-[#FAF7F2] hover:bg-[#EAE2D7] px-3 py-1.5 rounded-lg border border-[#DDD5C7] transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>上一篇：{prevTopic.title}</span>
                </button>
              ) : (
                <div />
              )}

              {nextTopic && (
                <button
                  type="button"
                  onClick={() => setSelectedTopicId(nextTopic.id)}
                  className="flex items-center gap-1 text-[#4A3E39] hover:text-[#1F3864] bg-[#FAF7F2] hover:bg-[#EAE2D7] px-3 py-1.5 rounded-lg border border-[#DDD5C7] transition-all cursor-pointer ml-auto"
                >
                  <span>下一篇：{nextTopic.title}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
