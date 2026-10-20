import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Info,
  Scale,
  FileText,
  FileCheck2,
  Copy,
  Check,
  AlertTriangle,
  ExternalLink,
  ShieldAlert,
  Building2,
  Hammer,
  TreePine,
  CheckCircle2,
  Printer,
  Gavel,
  Send
} from 'lucide-react';
import { IllegalUseEnforcementTab } from './IllegalUseEnforcementTab';

interface IllegalUseDetailPageProps {
  onBack: () => void;
}

interface Stage {
  t: string;
  task: string;
  tips: string[];
  table?: boolean;
}

interface PathItem {
  id: 'A' | 'B' | 'C';
  label: string;
  desc: string;
  theme: {
    color: string;
    bg: string;
    borderColor: string;
    hoverBorder: string;
    dotBg: string;
    lineColor: string;
  };
  stages: Stage[];
}

// 違規面積裁罰級距 (區域計畫法第15條第1項、新北市政府裁罰標準)
const PENALTY_TIERS = [
  { area: '2,000 以下', fee: '6' },
  { area: '2,001～3,000', fee: '9' },
  { area: '3,001～4,000', fee: '12' },
  { area: '4,001～5,000', fee: '15' },
  { area: '5,001～6,000', fee: '18' },
  { area: '6,001～7,000', fee: '21' },
  { area: '7,001～8,000', fee: '24' },
  { area: '8,001～9,000', fee: '27' },
  { area: '9,001 以上', fee: '30' }
];

// 案件路徑資料 (依 違規使用.html)
const PATHS: Record<'A' | 'B' | 'C', PathItem> = {
  A: {
    id: 'A',
    label: '路徑Ａ｜新案・一般',
    desc: '首次查獲，未擬申請合法化',
    theme: {
      color: '#2E6DA8',
      bg: '#E8F1FA',
      borderColor: '#2E6DA8',
      hoverBorder: '#2E6DA8',
      dotBg: '#2E6DA8',
      lineColor: '#2E6DA8'
    },
    stages: [
      {
        t: '收件',
        task: '登錄案件來源（檢舉／交辦／通報／衛星比對），建立列管案號。',
        tips: []
      },
      {
        t: '現場勘查認定',
        task: '現場勘查確認使用現況是否違反編定用途。',
        tips: [
          '行為人如主張70年2月15日前即有現況使用（從來之使用），須提出老照片、航照圖等客觀證明，人證不採；查證屬實可免裁罰（規則第8條）'
        ]
      },
      {
        t: '限期陳述意見',
        task: '通知行為人於7日內陳述意見（原則7天）。',
        tips: [
          '如會勘現場已依法通知並於紀錄上完成陳述意見及簽名，視為已完成，免另行通知（內政部90年函）'
        ]
      },
      {
        t: '限期恢復改善',
        task: '僅於行為人陳述意見時主張要恢復原使用樣態，才進入本階段（原則30天，得依個案調整）；未主張則跳過，直接進複查。',
        tips: []
      },
      {
        t: '複查',
        task: '確認是否已恢復原狀。',
        tips: [
          '未恢復但行為人已提出照片、錄影等佐證確有恢復進度者，得依個案裁量展延，天數次數無統一上限'
        ]
      },
      {
        t: '裁罰處分',
        task: '依區域計畫法第21條裁罰，處分書內另訂限期恢復改善或申請合法使用之期限。罰鍰依違規面積計算：',
        tips: [],
        table: true
      },
      {
        t: '複查',
        task: '確認處分書所定期限屆滿後，是否已改善或已提出合法使用申請。',
        tips: []
      },
      {
        t: '未改善：移送或輔導',
        task: '移拆除大隊排拆，或移目的事業主管機關輔導。',
        tips: []
      },
      {
        t: '列管追蹤',
        task: '每3個月由公所拍照複查，確認有無新增或恢復。',
        tips: ['同一地號再發現新增違規，仍歸為舊案（路徑Ｃ），不重新起算陳述意見']
      }
    ]
  },
  B: {
    id: 'B',
    label: '路徑Ｂ｜新案・擬合法化',
    desc: '擬申請變更編定使基地合法',
    theme: {
      color: '#8347A8',
      bg: '#F3E9FA',
      borderColor: '#8347A8',
      hoverBorder: '#8347A8',
      dotBg: '#8347A8',
      lineColor: '#8347A8'
    },
    stages: [
      {
        t: '收件',
        task: '登錄案件，建立列管案號。',
        tips: []
      },
      {
        t: '現場勘查認定',
        task: '現場勘查確認使用現況是否違反編定用途。',
        tips: [
          '同樣可能適用規則第8條從來之使用免罰，惟行為人既擬申請合法化，通常已不主張此項'
        ]
      },
      {
        t: '限期陳述意見',
        task: '通知行為人於7日內陳述意見（同路徑Ａ）。',
        tips: ['會勘現場已完成陳述意見並簽名者，免另行通知']
      },
      {
        t: '裁罰處分',
        task: '依區域計畫法第21、22條裁罰；因目標為合法化而非復原，不進入限期恢復改善程序。罰鍰依違規面積計算：',
        tips: [],
        table: true
      },
      {
        t: '續辦變更編定',
        task: '裁罰完成後，申請人即可依相關規定辦理土地使用變更（依內政部94年7月1日函）。',
        tips: ['不須等待裁罰確定或訴願程序終結，完成懲處處分程序即可送件']
      }
    ]
  },
  C: {
    id: 'C',
    label: '路徑Ｃ｜舊案',
    desc: '已列管在案，複查發現新增或未恢復',
    theme: {
      color: '#C4711A',
      bg: '#FBEEDD',
      borderColor: '#C4711A',
      hoverBorder: '#C4711A',
      dotBg: '#C4711A',
      lineColor: '#C4711A'
    },
    stages: [
      {
        t: '收件',
        task: '列管複查或再查獲，比對原列管案號（依地號）。',
        tips: []
      },
      {
        t: '現場勘查認定',
        task: '認定是否新增違規或尚未恢復原狀。',
        tips: []
      },
      {
        t: '限期恢復改善',
        task: '不經陳述意見程序，逕行限期恢復改善。',
        tips: ['舊案已辦過陳述意見程序，此次列管複查性質不同，不再重複']
      },
      {
        t: '複查',
        task: '確認是否已恢復原狀。',
        tips: ['未恢復但有進度佐證者，得依個案裁量展延']
      },
      {
        t: '裁罰處分',
        task: '裁罰處分書內同時載明限期恢復改善或申請合法使用之期限。罰鍰依違規面積計算：',
        tips: [
          '同一違規如非首次查獲，依違規次數加倍裁罰（例如第1次裁罰6萬，同類違規再犯第2次加倍為12萬，以此類推）'
        ],
        table: true
      },
      {
        t: '複查',
        task: '確認處分書所定期限屆滿後，是否已改善或已提出合法使用申請。',
        tips: []
      },
      {
        t: '未改善：移送、輔導、斷水電',
        task: '移拆除大隊排拆、移目的事業主管機關輔導，並予斷水電。',
        tips: []
      },
      {
        t: '列管追蹤',
        task: '每3個月由公所拍照複查，確認有無新增或恢復。',
        tips: []
      }
    ]
  }
};

// 7 大公文範本 (依違規使用.pdf 第 7～13 頁完整收錄)
interface OfficialDraftItem {
  id: string;
  name: string;
  label: string;
  subType?: string;
  content: string;
  note?: string;
}

const OFFICIAL_DRAFTS_DATA: OfficialDraftItem[] = [
  {
    id: 'meeting',
    name: '會勘',
    label: '1. 會勘',
    content: `受文者：
發文日期：
發文字號：
速別：
密等及解密條件或保密期限：
附件： 

主旨：有關本市OO區OO段OO地號（OO區OO用地）非作OO使用一案，本局訂於OO年OO月OO日下午OO時OO分在OOO集合勘查，請配合至現場確認現況，請查照。

說明：
一、依(填案源依據)辦理。
二、副本抄送：
(一)本府OO局：屆時請派員與勘協助確認現況。
(二)本市OO地政事務所：屆時請派員協助現場指界。

正本：OO君
副本：新北市政府OO局、新北市OO地政事務所

本案依分層負責規定授權業務主管決行
第二層決行`
  },
  {
    id: 'statement',
    name: '陳述意見(7日函)',
    label: '2. 陳述意見(7日函)',
    content: `受文者：
發文日期：
發文字號：新北府地管字第OOO號
速別：
密等及解密條件或保密期限：
附件：如說明三
主旨：有關本市OO區OO段OO地號（OO區OO用地）土地違規使用一案，請查照。
說明：
一、依(依據：認定違規公文、會勘紀錄等)辦理。
二、旨揭土地前經本府相關單位於OO年OO月OO日現場會勘，現況設置OOOOO，經本府OO局認定非作OO使用，已違反非都市土地使用管制，本案經民眾指認臺端為行為人，爰請於文到7日內依行政程序法第102條規定陳述意見並檢附合法證明文件（如70年2月15日前之空照圖、合法房屋證明、建物登記證明、主管機關核發之許可使用文件、其他容許使用證明文件等），逾期逕依區域計畫法規定辦理。
三、隨文檢送現場照片1份供參。
四、依行政程序法第102條規定：「行政機關作成限制或剝奪人民自由或權利之行政處分前，除已依第39條規定，通知處分相對人陳述意見，或決定舉行聽證者外，應給予該處分相對人陳述意見之機會，但法規另有規定者，從其規定。」。
五、區域計畫法第21條規定：「違反第15條第1項之管制使用土地者，由該管直轄市、縣（市）政府處新臺幣6萬以上30萬元以下罰鍰，並得限期令其變更使用、停止使用或拆除其地上物恢復原狀而不遵從者，得按次處罰，並停止供水、供電、封閉、強制拆除或採取其他恢復原狀之措施，其費用由土地或地上物所有人、使用人或管理人負擔。前二項罰鍰，經限期繳納逾期不繳納者，移送法院強制執行。」。

正本：OOO
副本：

本案依分層負責規定授權業務主管決行
會辦單位：
第三層決行`
  },
  {
    id: 'improve',
    name: '限期改善',
    label: '3. 限期改善',
    content: `受文者：
發文日期：
發文字號：
速別：
密等及解密條件或保密期限：
附件：
主旨：有關本市 OO 區 OO 段 OO 地號（OO 區 OO 用地）土地違規使用一案，請查照。
說明：
一、依(依據：會勘紀錄、陳述意見等)辦理。
二、旨揭土地現況設置 OOOOO ，經本府 OO 局認定非作 OO 使用，已違反非都市土地使用管制，案經臺端 OO 年 OO 月 OO 日陳述表示要向本府 OO 局申請土地使用合法化，考量臺端有合法意願，爰請於文到 30 日內恢復原農業使用目的或向本府農業局申請合法容許使用，逾期未恢復亦未申請合法使用者，逕依區域計畫法規定續處。
三、副本抄送本府 OO 局：檢送陳述意見 1 份，請貴局本用地主管機關權責協助輔導民眾恢復原 OO 使用目的或申請合法容許使用，以符土地使用管制。

正本：OO
副本：本府 OO 局(含附件)

本案依分層負責規定授權業務主管決行
會辦單位：
第三層決行`
  },
  {
    id: 'penalty',
    name: '處分書',
    label: '4. 處分書',
    content: `受文者：
發文日期：
發文字號：
速別：
密等及解密條件或保密期限：
附件：如主旨、說明二
主旨：檢送「新北市政府裁處違反區域計畫法案件處分書」1 份（如附件），請查照。
說明：
一、依(依據：認定文、會勘紀錄、陳述意見等)辦理。
二、隨函檢附繳費單 1 份，請於處分書期限內繳納罰鍰，逾期不繳納者即移送法務部行政執行署強制執行（加計執行等費用）。
三、依區域計畫法第 21 條規定，違反管制使用土地者，處新臺幣 6 萬元以上 30 萬元以下罰鍰，並得限期令其變更使用、停止使用或拆除其地上物恢復原狀，且應恢復至無違反原土地使用分區劃定及用地編定之使用目的及功能。又依同法第 22 條規定違反前條規定不依限辦理者，除依行政執行法辦理外並得處 6 個月以下有期徒刑或拘役。
四、查本市 OO 區 OO 段 OO 地號土地（OO 區 OO 用地）現況具 OOOO 等，經本府 OO 局認定非作 OO 使用，已違反非都市土地使用管制。經本府會勘時確認臺端為行為人，現場陳述意見並於會勘紀錄簽名無訛，故本案核處罰鍰新臺幣 6 萬元整，請即停止非法使用，並於文到 30 日內依法恢復原農業使用目的，不依規定改正者，則依區域計畫法另為處分。
五、依訴願法第 1 條第 1 項前段規定：「人民對於中央或地方機關之行政處分，認為違法或不當，致損害其權利或利益者，得依本法提起訴願。」同法第 14 條及 58 條規定，訴願之提起，應自行政處分達到或公告期滿之次日起 30 日內為之，訴願人應繕具訴願書經由原行政處分機關向訴願管轄機關提起訴願。如臺端不服本行政處分，請依訴願法之規定辦理。

正本：OO
副本：新北市政府違章建築拆除大隊、新北市政府農業局、新北市政府地政局(均含處分書)

本案依分層負責規定授權業務主管決行
會辦單位：
第二層決行


處分書O份請用印`
  },
  {
    id: 'photo',
    name: '請公所拍照',
    label: '5. 請公所拍照',
    content: `受文者：
發文日期：
發文字號：
速別：普通件
密等及解密條件或保密期限：
附件：如主旨
主旨：有關本市 OO 區 OO 段 OO 地號土地（OO 區 OO 用地）現況非作 OO 使用一案，前經本局限期恢復原 OO 用目的在案，因已屆處理期限，爰請貴所協助拍照存證（載明日期），檢附現場照片 1 份供參，請查照。
說明：依本府 OO 年 OO 月 OO 日新北府地管字第 OOO 號函續辦。

正本：新北市 OO 區公所
副本：

本案依分層負責規定授權業務主管決行
會辦單位：
第三層決行`
  },
  {
    id: 'referral',
    name: '移拆除大隊&主管機關輔導',
    label: '6. 移拆除大隊&目的事業(或使用地)主管機關輔導【雙稿】',
    content: `以稿代簽-稿 1

受文者：
發文日期：
發文字號：新北地管字第 OOO 號
速別：
密等及解密條件或保密期限：
附件：
主旨：有關本市 OO 區 OO 段 OO 地號土地（OO 區 OO 用地）違反區域計畫法一案，請查照。
說明：
一、依本市 OO 區公所 OO 年 OO 月 OO 日新北 OO 字第 OOO 號函辦理。
二、旨揭土地現況經本府 OO 局認定非作 OO 使用，已違反非都市土地使用管制，本局業裁罰在案，因屆期未恢復原使用地使用目的，移請貴大隊本權責卓處。
三、檢送裁處書及現場照片供參。

正本：新北市政府違章建築拆除大隊
副本：新北市政府 OO 局

本案依分層負責規定授權業務主管決行
會辦單位：
第二層決行

--------------------------------------------------

以稿代簽-稿 2

受文者：
發文日期：
發文字號：新北地管字第 OOO 號
速別：
密等及解密條件或保密期限：
附件：
主旨：有關本市 OO 區 OO 段 OO 地號土地（OO 區 OO 用地）非都市土地違章建築應否優先拆除一案，請查照。
說明：
一、依新北市政府 107 年 1 月 24 日「新北市非都市土地使用管制聯合取締小組 107 年度第 1 次會議紀錄」決議事項暨依本市 OO 區公所 OO 年 OO 月 OO 日新北 OO 字第 OOO 號函辦理。
二、旨揭土地現況經本府 OO 局認定非作 OO 使用，已違反非都市土地使用管制，本局業依區域計畫法裁罰在案，爰請貴局依所訂優先拆除標準認定現況有無優先拆除必要，並請將認定結果通知違章建築拆除大隊同時副知本局。

正本：新北市政府 OO 局
副本：

本案依分層負責規定授權業務主管決行
會辦單位：
第二層決行`
  },
  {
    id: 'recovered',
    name: '現況已恢復',
    label: '7. 現況已恢復',
    content: `受文者：
發文日期：
發文字號：新北府地管字第 OOO 號
速別：普通件
密等及解密條件或保密期限：
附件：
主旨：有關本市 OO 區 OO 段 OO 地號土地（OO 區 OO 用地）涉土地使用管制一案，請查照。
說明：
一、依(依據：認定文、案源、陳述意見等)辦理。
二、旨揭土地具 OOO ，經本府 OO 局認定非作 OO 使用，已違反非都市土地使用管制，嗣經臺端來函表示現況已恢復，並經本府 OO 局認定現況尚無違反相關規定，爰請臺端繼續加強管理維護，該地號日後有新增違規情事，將依區域計畫法規定辦理。
三、副本抄送本市 OO 區公所：請貴所就近加強巡查，現地如有新違規情事，請依法查報本府處理。

正本：OO 君
副本：新北市 OO 區公所、新北市政府 OO 局

本案依分層負責規定授權業務主管決行
會辦單位：
第三層決行`
  }
];

export const IllegalUseDetailPage: React.FC<IllegalUseDetailPageProps> = ({ onBack }) => {
  // 5 個主要功能分頁
  const [activeTab, setActiveTab] = useState<'navigator' | 'laws' | 'drafts' | 'penalty-doc' | 'enforcement'>('navigator');

  // 一行為不二罰轄權篩選小工具狀態
  const [showRuleCheck, setShowRuleCheck] = useState<boolean>(true);
  const [selectedViolationType, setSelectedViolationType] = useState<'industry' | 'behavior' | 'property' | null>(null);
  const [showDivisionTable, setShowDivisionTable] = useState<boolean>(false);

  // 階段導覽器狀態
  const [selectedPathKey, setSelectedPathKey] = useState<'A' | 'B' | 'C' | null>(null);
  const [stageIdx, setStageIdx] = useState<number>(0);

  // 公文範本子分頁 (7 個範本)
  const [activeDraftId, setActiveDraftId] = useState<string>('meeting');
  const [copiedDraftSuccess, setCopiedDraftSuccess] = useState<boolean>(false);

  const handleSelectPath = (k: 'A' | 'B' | 'C') => {
    setSelectedPathKey(k);
    setStageIdx(0);
  };

  const handleCopyText = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedDraftSuccess(true);
    setTimeout(() => setCopiedDraftSuccess(false), 2000);
  };

  const currentPath = selectedPathKey ? PATHS[selectedPathKey] : null;
  const currentStage = currentPath ? currentPath.stages[stageIdx] : null;
  const currentDraft = OFFICIAL_DRAFTS_DATA.find((d) => d.id === activeDraftId) || OFFICIAL_DRAFTS_DATA[0];

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
                違規使用
              </h1>
              <p className="text-sm sm:text-base text-[#5B584E] mt-0.5">
                新北市非都市土地違規查報、現勘裁罰、階段導覽與法令依據
              </p>
            </div>
          </div>
        </div>

        {/* 5 個主要功能分頁按鈕 */}
        <div className="flex flex-wrap items-center gap-2.5 pt-4 text-sm sm:text-base">
          <button
            onClick={() => setActiveTab('navigator')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'navigator'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            <span>違規使用案件階段導覽器</span>
          </button>

          <button
            onClick={() => setActiveTab('laws')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'laws'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>相關法令</span>
          </button>

          <button
            onClick={() => setActiveTab('drafts')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'drafts'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>公文範本</span>
          </button>

          <button
            onClick={() => setActiveTab('penalty-doc')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'penalty-doc'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>處分書怎麼開</span>
          </button>

          <button
            onClick={() => setActiveTab('enforcement')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'enforcement'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>移行政執行署</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 分頁 1：違規使用案件階段導覽器 */}
      {/* ========================================================================= */}
      {activeTab === 'navigator' && (
        <div className="space-y-6">
          {/* 轄權篩選（受理後第一步：先判斷主政機關） */}
          <div className="bg-[#FFFFFF] border-2 border-[#1F3864]/30 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#ECE6DB]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-[#1F3864] text-white rounded-lg">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                    新案受理第一步：先判斷主政機關
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowRuleCheck(!showRuleCheck)}
                className="text-xs sm:text-sm text-[#1F3864] font-bold hover:underline cursor-pointer self-start sm:self-auto"
              >
                {showRuleCheck ? '收合篩選小工具' : '展開篩選小工具'}
              </button>
            </div>

            {showRuleCheck && (
              <div className="space-y-4">
                <div className="text-xs sm:text-sm text-[#5B584E] leading-relaxed">
                  點選本案違規行為性質，立即檢核依「一行為不二罰原則」是否應移由順序在先機關主政：
                </div>

                {/* 3 個優先順序選項 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedViolationType('industry')}
                    className={`text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      selectedViolationType === 'industry'
                        ? 'border-[#C4711A] bg-[#FBEEDD] shadow-xs'
                        : 'border-[#E4DCC8] bg-[#FAF7F2] hover:border-[#C4711A]/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#C4711A] text-white">
                        優先順序（一）
                      </span>
                      <Building2 className="w-4 h-4 text-[#C4711A]" />
                    </div>
                    <div className="font-bold text-base text-[#1F3864]">
                      行業管理法規（最優先）
                    </div>
                    <p className="text-xs text-[#5B584E] mt-1.5 leading-snug">
                      違規工業使用、違反公司法／商業登記法、違規休閒農場、違規補習班、幼兒園、安親班等
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedViolationType('behavior')}
                    className={`text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      selectedViolationType === 'behavior'
                        ? 'border-[#8347A8] bg-[#F3E9FA] shadow-xs'
                        : 'border-[#E4DCC8] bg-[#FAF7F2] hover:border-[#8347A8]/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#8347A8] text-white">
                        優先順序（二）
                      </span>
                      <Hammer className="w-4 h-4 text-[#8347A8]" />
                    </div>
                    <div className="font-bold text-base text-[#1F3864]">
                      行為管理法規（次優先）
                    </div>
                    <p className="text-xs text-[#5B584E] mt-1.5 leading-snug">
                      違章建築、建物違規使用、山坡地違反水土保持法、河川公地違規使用、環境污染等
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedViolationType('property')}
                    className={`text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      selectedViolationType === 'property'
                        ? 'border-[#2E6DA8] bg-[#E8F1FA] shadow-xs'
                        : 'border-[#E4DCC8] bg-[#FAF7F2] hover:border-[#2E6DA8]/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#2E6DA8] text-white">
                        優先順序（三）
                      </span>
                      <TreePine className="w-4 h-4 text-[#2E6DA8]" />
                    </div>
                    <div className="font-bold text-base text-[#1F3864]">
                      物之管理法規
                    </div>
                    <p className="text-xs text-[#5B584E] mt-1.5 leading-snug">
                      行業、行為管理無法確定主政機關，且純粹違反非都市土地使用分區管制規定之案件
                    </p>
                  </button>
                </div>

                {/* 檢核判定結果反饋（僅保留標題、字體加大） */}
                {selectedViolationType === 'industry' && (
                  <div className="p-4 rounded-xl bg-[#FFF6EE] border-2 border-[#C4711A] flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#C4711A] shrink-0" />
                    <div className="font-bold text-base sm:text-lg text-[#C4711A]">
                      檢核結論：移由行業管理主政機關優先辦理
                    </div>
                  </div>
                )}

                {selectedViolationType === 'behavior' && (
                  <div className="p-4 rounded-xl bg-[#FBF2FF] border-2 border-[#8347A8] flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#8347A8] shrink-0" />
                    <div className="font-bold text-base sm:text-lg text-[#8347A8]">
                      檢核結論：移由行為管理主政機關優先辦理
                    </div>
                  </div>
                )}

                {selectedViolationType === 'property' && (
                  <div className="p-4 rounded-xl bg-[#EEF6FC] border-2 border-[#2E6DA8] flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2E6DA8] shrink-0" />
                    <div className="font-bold text-base sm:text-lg text-[#2E6DA8]">
                      檢核結論：由本機關（地政局）主政，依區域計畫法辦理
                    </div>
                  </div>
                )}

                {/* 分工原則表（收合展開，預設收合） */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setShowDivisionTable(!showDivisionTable)}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#DDD5C7] bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-2xs"
                  >
                    <span>分工原則表</span>
                    {showDivisionTable ? (
                      <ChevronUp className="w-4 h-4 text-[#1F3864]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#1F3864]" />
                    )}
                  </button>

                  {showDivisionTable && (
                    <div className="mt-3 overflow-x-auto rounded-xl border-2 border-[#1F3864] shadow-xs bg-white">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-[#1F3864] text-white">
                            <th className="py-2.5 px-3.5 sm:px-4 font-bold border-r border-[#314E80] w-[22%] whitespace-nowrap">
                              優先順序
                            </th>
                            <th className="py-2.5 px-3.5 sm:px-4 font-bold border-r border-[#314E80] w-[48%]">
                              違規態樣舉例（節錄，詳見分工原則表）
                            </th>
                            <th className="py-2.5 px-3.5 sm:px-4 font-bold w-[30%]">
                              主政機關
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#ECE6DB] text-[#2A2822]">
                          <tr className="hover:bg-[#FAF7F2]">
                            <td className="py-3 px-3.5 sm:px-4 font-bold text-[#1F3864] border-r border-[#ECE6DB] align-top">
                              （一）行業管理法規
                            </td>
                            <td className="py-3 px-3.5 sm:px-4 border-r border-[#ECE6DB] leading-relaxed align-top">
                              違規工業使用、違反公司法／商業登記法、違規休閒農場、違規補習班幼稚園、違規安親班等
                            </td>
                            <td className="py-3 px-3.5 sm:px-4 text-[#5B584E] leading-relaxed align-top">
                              經濟發展局、農業局、教育局、社會局等（依態樣）
                            </td>
                          </tr>
                          <tr className="hover:bg-[#FAF7F2] bg-[#FAF7F2]/40">
                            <td className="py-3 px-3.5 sm:px-4 font-bold text-[#1F3864] border-r border-[#ECE6DB] align-top">
                              （二）行為管理法規
                            </td>
                            <td className="py-3 px-3.5 sm:px-4 border-r border-[#ECE6DB] leading-relaxed align-top">
                              違章建築、建物違規使用、山坡地違反水土保持法、河川公地違法使用、環境污染等
                            </td>
                            <td className="py-3 px-3.5 sm:px-4 text-[#5B584E] leading-relaxed align-top">
                              工務局、農業局、水利局、環保局等（依態樣）
                            </td>
                          </tr>
                          <tr className="hover:bg-[#FAF7F2]">
                            <td className="py-3 px-3.5 sm:px-4 font-bold text-[#1F3864] border-r border-[#ECE6DB] align-top">
                              （三）物之管理法規
                            </td>
                            <td className="py-3 px-3.5 sm:px-4 border-r border-[#ECE6DB] leading-relaxed align-top">
                              依行業、行為管理無法確定主政機關，且違反非都市／都市土地使用分區管制規定之案件
                            </td>
                            <td className="py-3 px-3.5 sm:px-4 text-[#5B584E] leading-relaxed align-top">
                              非都市土地：地政局；都市土地：城鄉發展局
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 案件路徑導覽本體卡片 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#ECE6DB]">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                  違規使用案件階段導覽器
                </h2>
                <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                  業務輔助工具｜個人判斷用，先選路徑，再點選案件目前所在階段
                </p>
              </div>
              <span className="text-xs text-[#8C5A4B] font-semibold bg-[#FAF7F2] px-3 py-1 rounded-md border border-[#DDD5C7] self-start sm:self-auto">
                新舊案以「地號」為準
              </span>
            </div>

            {/* 新舊案認定提醒 */}
            <div className="text-xs sm:text-sm text-[#5B584E] bg-[#FAF7F2] p-3 rounded-xl border border-[#E4DCC8] leading-relaxed">
              💡 <strong>新舊案認定基準</strong>：以違規地號（土地）判斷，而非以單一違規行為判斷。同一地號如先前已列管在案，即便每 3 個月複查時發現的是新增違規態樣，仍歸為<strong>路徑Ｃ（舊案）</strong>，不重新起算陳述意見等新案程序；只有從未列管過的地號，才會走路徑Ａ或路徑Ｂ（新案）。
            </div>

            {/* 案件路徑選擇按鈕群 (路徑A / 路徑B / 路徑C) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {(['A', 'B', 'C'] as const).map((k) => {
                const p = PATHS[k];
                const isSelected = selectedPathKey === k;
                return (
                  <button
                    key={k}
                    type="button"
                    onClick={() => handleSelectPath(k)}
                    style={{
                      borderLeftColor: p.theme.color,
                      backgroundColor: isSelected ? p.theme.bg : '#FFFFFF',
                      borderColor: isSelected ? p.theme.borderColor : '#E4DCC8'
                    }}
                    className={`text-left p-4 sm:p-5 rounded-xl border-2 transition-all cursor-pointer shadow-2xs hover:shadow-xs hover:-translate-y-0.5 border-l-6 ${
                      isSelected ? 'ring-2 ring-offset-1' : ''
                    }`}
                  >
                    <div className="font-bold text-base sm:text-lg text-[#1F3864] mb-1">
                      {p.label}
                    </div>
                    <div className="text-xs sm:text-sm text-[#5B584E] leading-relaxed">
                      {p.desc}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 尚未選擇路徑時的提示 */}
          {!selectedPathKey && (
            <div className="text-center py-16 bg-[#FFFFFF] border-2 border-dashed border-[#DDD5C7] rounded-2xl p-6 shadow-2xs space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#DDD5C7] text-[#8C5A4B] mb-2">
                <Info className="w-6 h-6" />
              </div>
              <p className="text-base sm:text-lg font-bold text-[#5B584E]">
                請先選擇上方案件路徑
              </p>
              <p className="text-xs sm:text-sm text-[#7D7065]">
                依案件為「新案・一般」、「新案・擬合法化」或「舊案」點選對應路徑以啟動階段導覽
              </p>
            </div>
          )}

          {/* 已選擇路徑：雙欄階段導覽區 */}
          {selectedPathKey && currentPath && currentStage && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* 左欄：階段垂直時間軸 (Timeline) */}
              <div className="md:col-span-5 lg:col-span-4 bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-4 sm:p-5 shadow-xs">
                <div className="pb-3 mb-2 border-b border-[#ECE6DB] flex items-center justify-between">
                  <span className="text-sm font-bold text-[#1F3864]">
                    案件階段流程
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#5B584E] border border-[#DDD5C7]">
                    共 {currentPath.stages.length} 個階段
                  </span>
                </div>

                <div className="flex flex-col">
                  {currentPath.stages.map((s, idx) => {
                    const isActive = idx === stageIdx;
                    const isDone = idx < stageIdx;
                    const isLast = idx === currentPath.stages.length - 1;

                    return (
                      <div
                        key={idx}
                        onClick={() => setStageIdx(idx)}
                        className="flex gap-3 cursor-pointer group py-1"
                      >
                        {/* 節點圓圈與連接線 */}
                        <div className="flex flex-col items-center shrink-0">
                          <div
                            style={{
                              borderColor: isActive ? currentPath.theme.color : isDone ? currentPath.theme.color : '#E4DCC8',
                              backgroundColor: isActive ? currentPath.theme.color : isDone ? currentPath.theme.bg : '#FFFFFF',
                              color: isActive ? '#FFFFFF' : isDone ? currentPath.theme.color : '#5B584E'
                            }}
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 sm:border-3 flex items-center justify-center text-xs sm:text-sm font-bold transition-all shadow-2xs group-hover:scale-105"
                          >
                            {idx + 1}
                          </div>
                          {!isLast && (
                            <div
                              style={{
                                backgroundColor: isDone || isActive ? currentPath.theme.color : '#E4DCC8'
                              }}
                              className="w-0.5 sm:w-1 flex-1 min-h-[22px] my-1 rounded-full transition-colors"
                            />
                          )}
                        </div>

                        {/* 階段名稱 */}
                        <div className="pt-1 pb-4 flex-1">
                          <div
                            style={{
                              color: isActive ? currentPath.theme.color : '#5B584E'
                            }}
                            className={`text-sm sm:text-base transition-colors leading-tight ${
                              isActive ? 'font-bold' : 'font-medium group-hover:text-[#1F3864]'
                            }`}
                          >
                            {s.t}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 右欄：階段詳細內容卡片 */}
              <div
                style={{
                  borderLeftColor: currentPath.theme.color
                }}
                className="md:col-span-7 lg:col-span-8 bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-2xl p-6 sm:p-7 shadow-xs border-l-8 space-y-5"
              >
                {/* 標題與階段指示標籤 */}
                <div className="border-b border-[#ECE6DB] pb-4">
                  <div className="text-xs sm:text-sm font-bold text-[#7D7065] tracking-wide mb-1">
                    {currentPath.label}　第 {stageIdx + 1}／{currentPath.stages.length} 階段
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                    {currentStage.t}
                  </h2>
                </div>

                {/* 該階段主要任務／重點說明 */}
                <div className="text-base sm:text-lg text-[#2A2822] leading-relaxed">
                  {currentStage.task}
                </div>

                {/* 階段提示 (Tips) */}
                {currentStage.tips && currentStage.tips.length > 0 && (
                  <div className="space-y-2.5 pt-1">
                    {currentStage.tips.map((tip, tIdx) => (
                      <div
                        key={tIdx}
                        className="p-4 bg-[#FBF7EE] border border-dashed border-[#E4DCC8] rounded-xl text-sm sm:text-base text-[#5B584E] leading-relaxed space-y-1"
                      >
                        <div className="font-bold text-[#1F3864] flex items-center gap-1.5">
                          <Info className="w-4 h-4 shrink-0 text-[#1F3864]" />
                          <span>實務處理重點</span>
                        </div>
                        <div>{tip}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 罰鍰標準表格（若該階段有裁罰處分 table） */}
                {currentStage.table && (
                  <div className="pt-2 space-y-2">
                    <div className="font-bold text-sm sm:text-base text-[#1F3864]">
                      罰鍰金額依違規面積對照表：
                    </div>
                    <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] shadow-2xs">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-[#1F3864] text-white">
                            <th className="py-2.5 px-3.5 sm:px-4 font-bold border-b border-[#1F3864]">
                              違規面積（平方公尺）
                            </th>
                            <th className="py-2.5 px-3.5 sm:px-4 font-bold border-b border-[#1F3864]">
                              罰鍰金額（新臺幣：萬元）
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#ECE6DB] bg-white">
                          {PENALTY_TIERS.map((tier, idx) => (
                            <tr
                              key={idx}
                              className={idx % 2 === 1 ? 'bg-[#FAF7F2]' : 'bg-white hover:bg-[#F5EFE7]'}
                            >
                              <td className="py-2.5 px-3.5 sm:px-4 text-[#2A2822] font-medium">
                                {tier.area}
                              </td>
                              <td className="py-2.5 px-3.5 sm:px-4 font-bold text-[#8C5A4B] font-mono">
                                {tier.fee} 萬元
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 前後步驟導覽按鈕 */}
                <div className="pt-4 border-t border-[#ECE6DB] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStageIdx((prev) => Math.max(0, prev - 1))}
                    disabled={stageIdx === 0}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#DDD5C7] bg-[#FAF7F2] text-[#4A3E39] font-bold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#EAE2D7] transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>上一階段</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStageIdx((prev) => Math.min(currentPath.stages.length - 1, prev + 1))}
                    disabled={stageIdx === currentPath.stages.length - 1}
                    style={{
                      backgroundColor: stageIdx === currentPath.stages.length - 1 ? undefined : currentPath.theme.color
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-white font-bold text-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-gray-400 hover:opacity-90 transition-all cursor-pointer shadow-2xs"
                  >
                    <span>下一階段</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 頁尾法令說明備註 */}
          <div className="text-center text-xs sm:text-sm text-[#7D7065] py-2">
            依區域計畫法、非都市土地使用管制規則、相關函釋整理，如有修法請自行更新內容。
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 分頁 2：相關法令 (依附件《違規使用.pdf》第五章規定順序彙整) */}
      {/* ========================================================================= */}
      {activeTab === 'laws' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
          <div className="border-b border-[#ECE6DB] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864] flex items-center gap-2.5">
                <Scale className="w-6 h-6 text-[#1F3864]" />
                <span>相關法令及函釋</span>
              </h2>
            </div>
          </div>

          <div className="space-y-5">
            {/* 1. 區域計畫法 */}
            <div className="p-5 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-3 shadow-2xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#EADFCB]">
                <h3 className="font-bold text-base sm:text-lg text-[#1F3864] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1F3864]" />
                  <span>1. 區域計畫法</span>
                </h3>
                <a
                  href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0070030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1F3864] bg-white px-2.5 py-1 rounded-md border border-[#DDD5C7] hover:underline"
                >
                  <span>法規條文</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <ul className="space-y-2 text-sm sm:text-base text-[#2A2822] pl-2 leading-relaxed">
                <li>• <strong>第 15 條</strong>（其管制規則，由中央主管機關定之）。</li>
                <li>• <strong>第 21 條</strong>（違反管制使用土地者，處 6-30 萬元罰鍰，並得限期令其變更使用、停止使用或拆除其地上物恢復原狀）。</li>
                <li>• <strong>第 22 條</strong>（得處六個月以下有期徒刑或拘役）。</li>
              </ul>
            </div>

            {/* 2. 非都市土地使用管制規則 */}
            <div className="p-5 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-3 shadow-2xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#EADFCB]">
                <h3 className="font-bold text-base sm:text-lg text-[#1F3864] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1F3864]" />
                  <span>2. 非都市土地使用管制規則</span>
                </h3>
                <a
                  href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0060013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1F3864] bg-white px-2.5 py-1 rounded-md border border-[#DDD5C7] hover:underline"
                >
                  <span>法規條文</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <ul className="space-y-2 text-sm sm:text-base text-[#2A2822] pl-2 leading-relaxed">
                <li>• <strong>第 5 條</strong>（違反使用管制案件應成立聯合取締小組定期查處）。</li>
                <li>• <strong>第 8 條</strong>（從來之使用）。</li>
              </ul>
            </div>

            {/* 3. 行政程序法 */}
            <div className="p-5 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-3 shadow-2xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#EADFCB]">
                <h3 className="font-bold text-base sm:text-lg text-[#1F3864] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1F3864]" />
                  <span>3. 行政程序法</span>
                </h3>
                <a
                  href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=A0030055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1F3864] bg-white px-2.5 py-1 rounded-md border border-[#DDD5C7] hover:underline"
                >
                  <span>法規條文</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <ul className="space-y-2 text-sm sm:text-base text-[#2A2822] pl-2 leading-relaxed">
                <li>• <strong>第 102 條</strong>（應給予該處分相對人陳述意見之機會）。</li>
                <li>• <strong>第 39 條</strong>（行政機關得以書面通知相關之人陳述意見）。</li>
              </ul>
            </div>

            {/* 4. 新北市政府違規面積裁罰標準 */}
            <div className="p-5 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-3 shadow-2xs">
              <div className="pb-2 border-b border-[#EADFCB]">
                <h3 className="font-bold text-base sm:text-lg text-[#1F3864] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1F3864]" />
                  <span>4. 新北市政府違規面積裁罰標準</span>
                </h3>
              </div>
              <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] shadow-2xs bg-white">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#1F3864] text-white">
                      <th className="py-2.5 px-3.5 sm:px-4 font-bold border-b border-[#1F3864]">
                        違規面積（平方公尺）
                      </th>
                      <th className="py-2.5 px-3.5 sm:px-4 font-bold border-b border-[#1F3864]">
                        罰鍰金額（新臺幣：萬元）
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ECE6DB]">
                    {PENALTY_TIERS.map((tier, idx) => (
                      <tr key={idx} className={idx % 2 === 1 ? 'bg-[#FAF7F2]' : 'bg-white hover:bg-[#F5EFE7]'}>
                        <td className="py-2.5 px-3.5 sm:px-4 text-[#2A2822] font-medium">{tier.area}</td>
                        <td className="py-2.5 px-3.5 sm:px-4 font-bold text-[#8C5A4B] font-mono">{tier.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. 常見函釋 */}
            <div className="p-5 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-3 shadow-2xs">
              <div className="pb-2 border-b border-[#EADFCB]">
                <h3 className="font-bold text-base sm:text-lg text-[#1F3864] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1F3864]" />
                  <span>5. 常見函釋</span>
                </h3>
              </div>
              <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] shadow-2xs bg-white">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#1F3864] text-white">
                      <th className="py-2.5 px-3 font-bold border-r border-[#314E80] w-16 text-center">編號</th>
                      <th className="py-2.5 px-4 font-bold border-r border-[#314E80]">內容</th>
                      <th className="py-2.5 px-4 font-bold">函釋</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ECE6DB] text-[#2A2822]">
                    <tr className="hover:bg-[#FAF7F2]">
                      <td className="py-3 px-3 text-center font-bold text-[#1F3864] border-r border-[#ECE6DB] font-mono">1</td>
                      <td className="py-3 px-4 border-r border-[#ECE6DB] font-medium leading-relaxed">
                        陳述意見程序：會勘現場陳述意見視為已完成
                      </td>
                      <td className="py-3 px-4 font-mono text-xs sm:text-sm text-[#8C5A4B]">
                        內政部 90 年 5 月 15 日台（90）內營字第 9083626 號函
                      </td>
                    </tr>
                    <tr className="hover:bg-[#FAF7F2] bg-[#FAF7F2]/40">
                      <td className="py-3 px-3 text-center font-bold text-[#1F3864] border-r border-[#ECE6DB] font-mono">2</td>
                      <td className="py-3 px-4 border-r border-[#ECE6DB] font-medium leading-relaxed">
                        申請變更編定先行違規者，合法化前應先完成懲處
                      </td>
                      <td className="py-3 px-4 font-mono text-xs sm:text-sm text-[#8C5A4B]">
                        內政部 94 年 7 月 1 日內授中辦地字第 0940725134 號函
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 分頁 3：公文範本 (依違規使用.pdf 內容與承辦人提供之範本) */}
      {/* ========================================================================= */}
      {activeTab === 'drafts' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
          <div className="border-b border-[#ECE6DB] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center flex-wrap gap-2.5">
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864] flex items-center gap-2.5">
                <FileText className="w-6 h-6 text-[#1F3864]" />
                <span>公文範本</span>
              </h2>
              <span className="text-xs sm:text-sm font-normal text-[#8C5A4B] bg-[#FFF5EA] px-3 py-1 rounded-md border border-[#F0D8A8]">
                實際回文內容仍須由承辦人依個案判斷撰寫
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#7D7065]">
              收錄【會勘】、【陳述意見(7日函)】、【限期改善】、【處分書】、【請公所拍照】、【移拆除大隊&主管機關輔導】、【現況已恢復】等 7 款範本
            </p>
          </div>

          {/* 7 個公文分頁按鈕 */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F5EFE7] border-2 border-[#DDD5C7] rounded-xl shadow-2xs">
            {OFFICIAL_DRAFTS_DATA.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setActiveDraftId(d.id)}
                className={`px-3.5 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap ${
                  activeDraftId === d.id
                    ? 'bg-[#1F3864] text-white shadow-xs'
                    : 'text-[#4A3E39] hover:bg-[#EAE2D7]'
                }`}
              >
                【{d.name}】
              </button>
            ))}
          </div>

          {/* 當前公文範本卡片 */}
          <div className="p-5 bg-[#FAF7F2] rounded-2xl border-2 border-[#E4DCC8] space-y-3.5 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#EADFCB]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1F3864] shrink-0" />
                <h3 className="font-bold text-base sm:text-lg text-[#1F3864]">
                  {currentDraft.label}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => currentDraft.content && handleCopyText(currentDraft.content)}
                disabled={!currentDraft.content}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-[#1F3864] bg-white hover:bg-[#F2ECE4] border-2 border-[#1F3864]/40 hover:border-[#1F3864] rounded-lg transition-all cursor-pointer shadow-2xs self-start sm:self-auto disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {copiedDraftSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>已複製公文全文</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#1F3864]" />
                    <span>{currentDraft.content ? '複製公文全文' : '暫無範本文字'}</span>
                  </>
                )}
              </button>
            </div>

            {currentDraft.content ? (
              <div className="text-xs sm:text-sm text-[#2A2822] bg-white p-4 sm:p-5 rounded-xl border border-[#DDD5C7] font-mono leading-relaxed whitespace-pre-wrap select-text">
                {currentDraft.content}
              </div>
            ) : (
              <div className="bg-white p-8 sm:p-12 rounded-xl border-2 border-dashed border-[#DDD5C7] text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#DDD5C7] text-[#8C5A4B] mx-auto">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="font-bold text-base sm:text-lg text-[#1F3864]">
                  【{currentDraft.name}】公文範本待提供
                </div>
                <p className="text-xs sm:text-sm text-[#7D7065] max-w-md mx-auto leading-relaxed">
                  本公文範本內容已依指示先行清空。承辦人後續提供範本文字後，將立即更新填入並啟用一鍵複製功能。
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 分頁 4：處分書怎麼開 (按照附件檔案 違規使用.pdf 內容順序 + 圖解圖片) */}
      {/* ========================================================================= */}
      {activeTab === 'penalty-doc' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-8">
          <div className="border-b border-[#ECE6DB] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864] flex items-center gap-2.5">
                <ShieldAlert className="w-6 h-6 text-[#1F3864]" />
                <span>處分書怎麼開</span>
              </h2>
            </div>
          </div>

          {/* 準備文件 */}
          <div className="p-5 sm:p-6 bg-[#FAF7F2] border-2 border-[#E4DCC8] rounded-2xl space-y-3.5 shadow-2xs">
            <div className="font-bold text-base sm:text-lg text-[#1F3864] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1F3864]" />
              <span>準備文件：</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs sm:text-sm">
              {[
                '處分書',
                '受處分人戶籍資料',
                '違規樣態',
                '違規面積',
                '土地謄本',
                '會勘紀錄',
                '現場照片',
                '繳費單（公文決行再做）'
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 bg-white border border-[#DDD5C7] rounded-xl font-semibold text-[#4A3E39] shadow-2xs flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#8C5A4B] shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 1. 填處分書 */}
          <div className="p-5 sm:p-7 bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-2xl space-y-5 shadow-xs">
            <h3 className="font-bold text-lg sm:text-xl text-[#1F3864] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1F3864]" />
              <span>1. 填處分書：</span>
            </h3>

            <div className="space-y-2.5 text-sm sm:text-base text-[#2A2822] pl-2 leading-relaxed">
              <p><strong>(1)</strong> 公文陳核時，發文日期不用填幾日，填年月即可。簽核完畢後再填發文當日日期，之後再印出來，送秘書處用印。</p>
              <p><strong>(2)</strong> 違規樣態有地上物(如建物、貨櫃、棚架等違章建物)，副本才要給拆除大隊。</p>
              <p><strong>(3)</strong> 副本要給相關局處。</p>
              <p><strong>(4)</strong> 受處分人個資依照受處分人戶籍資料填寫。</p>
              <p><strong>(5)</strong> 違規面積用愛連網框選估算，如有使用面積測量案件，則依測量結果面積計算。</p>
              <p><strong>(6)</strong> 指定改正事項及期限要依公文上寫的，通常為 30 日。變更編定案件則無指定改正事項。</p>
            </div>

            {/* 圖片一：新北市政府裁處違反區域計畫法案件處分書直接圖檔展示 */}
            <div className="mt-4 border-2 border-[#1F3864]/50 rounded-xl overflow-hidden bg-white shadow-sm">
              <div className="bg-[#1F3864] text-white px-4 py-2 text-xs sm:text-sm font-bold flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-300" />
                  <span>【圖片一】新北市政府裁處違反區域計畫法案件處分書填寫重點圖</span>
                </span>
                <a
                  href="/penalty_doc_image.svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs bg-amber-400 text-stone-900 hover:bg-amber-300 px-2 py-0.5 rounded font-bold transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>檢視圖檔</span>
                </a>
              </div>

              {/* 直接貼上處分書範本圖片（適中尺寸，無多餘文字卡） */}
              <div className="p-3 sm:p-5 bg-[#F4EFE6] flex justify-center">
                <div className="w-full max-w-xl bg-white p-2 rounded-xl border border-[#DDD5C7] shadow-xs">
                  <img
                    src="/penalty_doc_image.svg"
                    alt="新北市政府裁處違反區域計畫法案件處分書公文填寫圖"
                    className="w-full h-auto block rounded select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. 罰鍰系統填繳費單 */}
          <div className="p-5 sm:p-7 bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-2xl space-y-6 shadow-xs">
            <h3 className="font-bold text-lg sm:text-xl text-[#1F3864] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1F3864]" />
              <span>2. 罰鍰系統填繳費單(等公文決行後再做)：</span>
            </h3>

            {/* (1) 系統路徑 */}
            <div className="space-y-3">
              <div className="font-bold text-sm sm:text-base text-[#1F3864]">
                (1) 系統路徑：
              </div>
              <div className="flex flex-wrap items-center gap-2 font-semibold text-xs sm:text-sm text-[#1F3864]">
                <span className="px-3 py-1.5 bg-white rounded-lg border border-[#DDD5C7] shadow-2xs">公務雲</span>
                <span>➔</span>
                <span className="px-3 py-1.5 bg-white rounded-lg border border-[#DDD5C7] shadow-2xs">常用應用程式</span>
                <span>➔</span>
                <span className="px-3 py-1.5 bg-white rounded-lg border border-[#DDD5C7] shadow-2xs">罰鍰系統</span>
                <span>➔</span>
                <span className="px-3 py-1.5 bg-white rounded-lg border border-[#DDD5C7] shadow-2xs">左上角點【罰鍰管理作業】</span>
                <span>➔</span>
                <span className="px-3 py-1.5 bg-[#1F3864] text-white rounded-lg shadow-2xs">【處分書資料維護】</span>
              </div>

              {/* 圖片二：系統入口路徑圖檔直接貼上 */}
              <div className="border-2 border-[#1F3864]/40 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="bg-[#1F3864] text-white px-3.5 py-2 text-xs sm:text-sm font-bold flex items-center justify-between">
                  <span>【圖片二】新北市政府公務雲 ➔ 罰鍰系統 ➔ 處分書資料維護路徑圖</span>
                  <a
                    href="/penalty_system_path_image.svg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs bg-amber-400 text-stone-900 hover:bg-amber-300 px-2 py-0.5 rounded font-bold transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>檢視圖檔</span>
                  </a>
                </div>
                <div className="p-3 sm:p-5 bg-[#F4EFE6] flex justify-center">
                  <div className="max-w-xl w-full bg-white p-2 rounded-xl border border-[#DDD5C7] shadow-xs">
                    <img
                      src="/penalty_system_path_image.svg"
                      alt="新北市政府公務雲罰鍰系統處分書資料維護路徑圖"
                      className="w-full h-auto block rounded select-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* (2) 新增處分書資料 */}
            <div className="space-y-3">
              <div className="font-bold text-sm sm:text-base text-[#1F3864]">
                (2) 新增處分書資料：
              </div>
              <p className="text-sm sm:text-base text-[#2A2822] leading-relaxed pl-2">
                先按<strong>「新增」</strong> ➔ 填寫【承辦人電話】、【發文日期】、【發文字號】、【違反法條(點科目旁邊...的按鈕)】、【處分金額】。如果受處分人要申請分期，是否同意分期要打勾。
              </p>

              {/* 圖片三：處分書資料維護（新增處分書資料）系統截圖直接貼上 */}
              <div className="border-2 border-[#1F3864]/40 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="bg-[#1F3864] text-white px-3.5 py-2 text-xs sm:text-sm font-bold flex items-center justify-between">
                  <span>【圖片三】罰鍰系統 ➔ 處分書資料維護（新增資料）填寫重點截圖</span>
                  <a
                    href="/penalty_step3_image.svg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs bg-amber-400 text-stone-900 hover:bg-amber-300 px-2 py-0.5 rounded font-bold transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>檢視圖檔</span>
                  </a>
                </div>
                <div className="p-3 sm:p-5 bg-[#F4EFE6] flex justify-center">
                  <div className="max-w-4xl w-full bg-white p-2 rounded-xl border border-[#DDD5C7] shadow-xs">
                    <img
                      src="/penalty_step3_image.svg"
                      alt="罰鍰系統處分書資料維護新增資料欄位填寫重點截圖"
                      className="w-full h-auto block rounded select-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* (3) 填寫受處分人及法定代理人資料 */}
            <div className="space-y-3">
              <div className="font-bold text-sm sm:text-base text-[#1F3864]">
                (3) 填寫受處分人及法定代理人資料：
              </div>
              <p className="text-sm sm:text-base text-[#2A2822] leading-relaxed pl-2">
                往下滑繼續填寫受處分人資料【類別(個人或公司法人)】、【姓名】、【身分證字號(統一編號)】、【性別】、【出生年月日】。如果受處分人是公司法人，往下繼續填寫法定代理人資料【姓名】、【身分證字號(統一編號)】、【性別】、【出生年月日】 ➔ 填完後按<strong>「確定」</strong>。
              </p>

              {/* 圖片四：受處分人及法定代理人填寫介面截圖直接貼上 */}
              <div className="border-2 border-[#1F3864]/40 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="bg-[#1F3864] text-white px-3.5 py-2 text-xs sm:text-sm font-bold flex items-center justify-between">
                  <span>【圖片四】受處分人與法人法定代理人資料填寫重點截圖</span>
                  <a
                    href="/penalty_step4_image.svg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs bg-amber-400 text-stone-900 hover:bg-amber-300 px-2 py-0.5 rounded font-bold transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>檢視圖檔</span>
                  </a>
                </div>
                <div className="p-3 sm:p-5 bg-[#F4EFE6] flex justify-center">
                  <div className="max-w-4xl w-full bg-white p-2 rounded-xl border border-[#DDD5C7] shadow-xs">
                    <img
                      src="/penalty_step4_image.svg"
                      alt="罰鍰系統受處分人與法人法定代理人資料填寫重點截圖"
                      className="w-full h-auto block rounded select-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* (4) 繳款資料維護與選擇繳費單（核心關鍵） */}
            <div className="space-y-3">
              <div className="font-bold text-sm sm:text-base text-[#1F3864]">
                (4) 繳款資料維護與選擇繳費單（核心關鍵）：
              </div>
              <p className="text-sm sm:text-base text-[#2A2822] leading-relaxed pl-2">
                左上角點【繳款資料維護】 ➔ 按<strong>「新增」</strong>，會自動帶入剛剛填寫的資料 ➔ 繳款方式選<strong>【繳費單】(很重要!!!!)</strong> ➔ 如果受處分人有申請分期，下面有個期別要選第 01、02、…… ➔ 然後按<strong>「確定」</strong>。
              </p>

              {/* 圖片五：繳款資料維護選【繳費單】系統截圖直接貼上 */}
              <div className="border-2 border-[#1F3864]/40 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="bg-[#1F3864] text-white px-3.5 py-2 text-xs sm:text-sm font-bold flex items-center justify-between">
                  <span>【圖片五】繳款資料維護（核心關鍵：繳款方式選【繳費單】）重點截圖</span>
                  <a
                    href="/penalty_step5_image.svg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs bg-amber-400 text-stone-900 hover:bg-amber-300 px-2 py-0.5 rounded font-bold transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>檢視圖檔</span>
                  </a>
                </div>
                <div className="p-3 sm:p-5 bg-[#F4EFE6] flex justify-center">
                  <div className="max-w-4xl w-full bg-white p-2 rounded-xl border border-[#DDD5C7] shadow-xs">
                    <img
                      src="/penalty_step5_image.svg"
                      alt="罰鍰系統繳款資料維護選繳費單與分期期別設定重點截圖"
                      className="w-full h-auto block rounded select-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* (5) 列印繳費單 */}
            <div className="space-y-3">
              <div className="font-bold text-sm sm:text-base text-[#1F3864]">
                (5) 列印繳費單：
              </div>
              <p className="text-sm sm:text-base text-[#2A2822] leading-relaxed pl-2">
                確定後下方會跳出一行剛剛輸入案件，<strong>先點黃黃的這行，再按列印繳費單</strong> ➔ 完成！！
              </p>

              {/* 圖片六：選取黃色案件列並列印繳費單系統截圖直接貼上 */}
              <div className="border-2 border-[#1F3864]/40 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="bg-[#1F3864] text-white px-3.5 py-2 text-xs sm:text-sm font-bold flex items-center justify-between">
                  <span>【圖片六】點選黃色案件列並按列印繳費單重點截圖</span>
                  <a
                    href="/penalty_step6_image.svg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs bg-amber-400 text-stone-900 hover:bg-amber-300 px-2 py-0.5 rounded font-bold transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>檢視圖檔</span>
                  </a>
                </div>
                <div className="p-3 sm:p-5 bg-[#F4EFE6] flex justify-center">
                  <div className="max-w-4xl w-full bg-white p-2 rounded-xl border border-[#DDD5C7] shadow-xs">
                    <img
                      src="/penalty_step6_image.svg"
                      alt="罰鍰系統點選黃色案件列並按列印繳費單重點截圖"
                      className="w-full h-auto block rounded select-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 分頁 5：移行政執行署（依附件《移行政執行署.pdf》建置） */}
      {/* ========================================================================= */}
      {activeTab === 'enforcement' && (
        <IllegalUseEnforcementTab />
      )}
    </div>
  );
};
