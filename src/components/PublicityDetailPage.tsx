import React, { useState } from 'react';
import {
  ArrowLeft,
  Wrench,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  Bot,
  Sparkles,
  Send,
  Building2,
  Users,
  Lightbulb,
  ExternalLink,
  Video,
  Mic,
  Palette,
  FileCode2,
  BookmarkCheck,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';

interface PublicityDetailPageProps {
  onBack: () => void;
}

// 宣導工具庫項目
interface ToolItem {
  id: number;
  timing: string;
  tools: string[];
  prompts: string[];
  note: string;
}

const PUBLICITY_TOOLS: ToolItem[] = [
  {
    id: 1,
    timing: '想文案、沒宣導想法時',
    tools: ['GPT', 'Gemini', 'Claude'],
    prompts: [
      '幫我想 FB 貼文文案，主題是：國土功能分區劃進城鄉發展區就能愛怎麼蓋就怎麼蓋？最好要讓一般民眾有共鳴，風格不要嚴肅，可以有趣詼諧，另外我貼文圖片要用一個四格漫畫方式輔以呈現說明',
      '土地變異點偵測系統結合土地使用管制可以有甚麼創新的宣導方式，提供我 5 個真的很創新的方向或想法'
    ],
    note: '不要把涉及個資資料給 AI'
  },
  {
    id: 2,
    timing: '生成圖片、做海報、FB 貼文圖片',
    tools: ['GPT'],
    prompts: [
      '我要做一張宣導海報，尺寸為 A3 直式，主題為「農舍違規涉及非都市土地使用管制部分」，幫我想一個有趣詼諧的標題，參考附件檔案內容，產出一張圖文並茂，有趣又吸睛的宣導海報'
    ],
    note: '不要把涉及個資資料給 AI'
  },
  {
    id: 3,
    timing: '整理報告、文件、產公文、答辯書',
    tools: ['Claude'],
    prompts: [
      '我要把這份報告做成 ppt 簡報，要以豐富有趣的風格呈現，你有甚麼好建議',
      '幫我整理重點和答辯方向，綜整後擬出專業的行政訴訟答辯狀，細節涉及附件內容的部分我會再自行補充'
    ],
    note: '要用自己的帳號，不要把涉及個資資料給 AI'
  },
  {
    id: 4,
    timing: '整理報告、文件',
    tools: ['NotebookLM'],
    prompts: [
      '相關文件很多時，可丟進 NotebookLM，用產製報告功能，就會把相關文件整理成一份新的檔案'
    ],
    note: '不要把涉及個資資料給 AI'
  },
  {
    id: 5,
    timing: '生成影片',
    tools: ['Gemini'],
    prompts: [
      '影片尺寸直式 9:16、畫面風格、場景風貌逼真、有科技感。背景一開始的畫面(山坡地上有怪手正在開挖、旁邊放置鐵皮貨櫃的實景)，接著許多專業人士在現場共同巡查，之後裸露的土地慢慢恢復長出綠地，再變成樹林的畫面，畫面上寫上：一個變異點的發現，可能是一個改變的起點'
    ],
    note: '付費版，不要把涉及個資資料給 AI'
  },
  {
    id: 6,
    timing: '修改 AI 生成的圖片文字時',
    tools: ['PPT', 'Canva'],
    prompts: [
      '沒有提示詞。AI 生成圖片解析度有限，文字需要另外以編輯軟體重打，特別是 FB 貼文的圖片，秘書室有要求文字要自己打。'
    ],
    note: '生成圖片時可以請 AI 提供沒有文字的版本'
  },
  {
    id: 7,
    timing: '影片配音',
    tools: ['Voai'],
    prompts: [
      '直接選聲音，打台詞再下載即可。'
    ],
    note: '線上配音工具，操作直覺快速'
  },
  {
    id: 8,
    timing: '製作網站、app 工具',
    tools: ['Google AI Studio', 'Claude'],
    prompts: [
      '我想要做 1 個非都市土地使用管制結合露營場設置的網站，相關資訊可以參考附件，網站內容初步構想：含詳細申請手冊、用地查詢、環敏查詢、自我檢視、常見 QA、觀旅局動畫、企劃書範本、中央法規、主管機關聯絡方式等等，幫我建議並列出詳細的網站架構，並建議網站的設計、呈現方式、視覺風格(不要太生硬死板)'
    ],
    note: '需要先整理一份檔案給 AI 當附件，不要把涉及個資資料給 AI'
  }
];

// 已完成的宣導項目（12項）
interface CompletedItem {
  id: number;
  title: string;
  summary: string;
  cooperation: string;
  audience: string;
  progress: string;
  startDate: string;
  note: string;
}

const COMPLETED_ITEMS: CompletedItem[] = [
  {
    id: 1,
    title: 'podcast 擷取',
    summary: '擷取 5 集片段文字、音檔',
    cooperation: '地政局官網',
    audience: '所有人',
    progress: '100%',
    startDate: '-',
    note: '加進電子書內'
  },
  {
    id: 2,
    title: '處分書背面宣導',
    summary: '文字+Qrcode：1. 容許+表+Qrcode、2. 興辦、變更、3. 國土 120 年前上路、罰則提升',
    cooperation: '跟違規處分書一起發給受處分人',
    audience: '受處分人',
    progress: '100%',
    startDate: '114.12.02',
    note: '已簽准發放'
  },
  {
    id: 3,
    title: '小冊子(電子書)',
    summary: '把曾經宣導過的內容整合，A5 大小（如：podcast、處分書背面宣導、FB 貼文）',
    cooperation: '地政局官網',
    audience: '所有人',
    progress: '100%',
    startDate: '-',
    note: '持續推廣'
  },
  {
    id: 4,
    title: '科務報告',
    summary: '把大家的科務報告內容以 AI 等方式呈現，要白話文，每個主題一個',
    cooperation: '科內同仁',
    audience: '科內同仁',
    progress: '30%',
    startDate: '-',
    note: '-'
  },
  {
    id: 5,
    title: '拉紙筆',
    summary: '宣導非都市土地容許使用、區域計畫&國土計畫罰則比較',
    cooperation: '地所發放',
    audience: '拿到筆的人',
    progress: '100%',
    startDate: '114.11.03',
    note: '已請地所協助發放'
  },
  {
    id: 6,
    title: '變異點 114 年宣導',
    summary: '製作海報，宣導變異點案件來源、區域計畫跟國土計畫的罰則差異比較，A2 大小',
    cooperation: '地所、公所、戶政、稅捐張貼宣導',
    audience: '所有人',
    progress: '100%',
    startDate: '114.12.31',
    note: '已完成印製，並簽准發文給各單位'
  },
  {
    id: 7,
    title: '跨機關宣導-農舍',
    summary: '針對農舍違規結合土地容許使用',
    cooperation: '農會、公所、里辦公室、農業局、FB 等',
    audience: '所有人',
    progress: '100%',
    startDate: '115.06.17',
    note: 'A3 海報&A4 雙面(電子檔)；農會、公所、里辦公室、學校、農業局(紙本海報-90張約6000)；已完成印製，並簽准發文給各單位'
  },
  {
    id: 8,
    title: '跨機關宣導-露營區',
    summary: '針對露營場違規結合土地容許使用、申請方式等等',
    cooperation: '公所、觀旅局、FB 等',
    audience: '所有人',
    progress: '80%',
    startDate: '-',
    note: 'AI 網站已完成，海報初版已完成'
  },
  {
    id: 9,
    title: '共識營簡報',
    summary: '國土計畫相關',
    cooperation: '局內專案',
    audience: '參加共識營的人',
    progress: '100%',
    startDate: '115.03.20',
    note: '已完成'
  },
  {
    id: 10,
    title: '訴願訴訟案件參考',
    summary: '請科內同仁將訴願、訴訟決定文放置檔案公用區，以利日後案件需要時供大家參考',
    cooperation: '科內 X 槽',
    audience: '科內同仁',
    progress: '陸續放置',
    startDate: '114.12.25',
    note: '已完成建置'
  },
  {
    id: 11,
    title: '變異點 115 年宣導',
    summary: '變異點樣態、熱點分析，以海報或短影片等方式呈現',
    cooperation: '跨管道推播',
    audience: '所有人',
    progress: '80%',
    startDate: '-',
    note: '海報和影片皆已完成初版'
  },
  {
    id: 12,
    title: '科內業務工具',
    summary: '整理科內各項業務流程、注意事項等，用 AI 製作網站協助新人了解',
    cooperation: '網站輔助系統',
    audience: '所有人',
    progress: '70%',
    startDate: '-',
    note: '陸續新增內容'
  }
];

// 有想到的宣導內容（尚未執行，7 項創新構想）
interface IdeaItem {
  id: number;
  title: string;
  details: string[];
  cooperation: string;
  audience: string;
}

const INNOVATIVE_IDEAS: IdeaItem[] = [
  {
    id: 1,
    title: 'AI 互動模擬',
    details: [
      '執行方式：民眾輸入土地地號或拍照，AI 自動生成該地塊的「未來模擬圖」。',
      '創新點：如果你合法申請容許使用，AI 會秀出美化的農村景觀；如果你違規填土或蓋鐵皮工廠，AI 會模擬出「衛星變異點紅圈警告」、「土石流風險預警」以及「罰單降臨」的視覺衝擊。',
      '跨機關聯動：模擬結束後直接對接環保局的環保報案專線或公所的合法化諮詢窗口。'
    ],
    cooperation: '環保局、區公所',
    audience: '所有人'
  },
  {
    id: 2,
    title: '土地解謎實境秀',
    details: [
      '民眾需透過手機掃描農會外牆、公所佈告欄或特定農地旁的標示牌獲取線索。',
      '劇情設定：例如「消失的農地傳承」，玩家扮演土地調查員，需區分哪些地能蓋資材室、哪些是違規傾倒廢棄物。',
      '獎勵機制：破關者可獲得農會特產折扣券或動保處合作的寵物友善餐廳優惠，讓法規教育變成社區小旅行。'
    ],
    cooperation: '與公所及農會合作，在特定行政區（如某農業重鎮）設置多個「地景檢查點」',
    audience: '所有人'
  },
  {
    id: 3,
    title: '地政「迷因 (Meme) 實驗室」',
    details: [
      '與動保處合作，主題定為「如果我的寵物會買地」：',
      '創新點：製作一系列「崩潰農地主」或「地政人員日常」的短影音（Reels）。',
      '1. 邀請民眾創作「違規前的僥倖 vs. 罰單後的悔恨」對比圖。',
      '2. 傳播力：這種帶有幽默感甚至「自黑」的宣導方式，比嚴肅的公文宣導更具擴散力，能有效打入數位的圈子。'
    ],
    cooperation: '地政局社群、動保處',
    audience: '所有人'
  },
  {
    id: 4,
    title: '多機關聯合服務路跑',
    details: [
      '舉辦一場名為「守護國土路跑」的活動。',
      '跨機關角色：',
      '• 補給站：農會提供在地農產補給（宣傳在地農業）。',
      '• 賽道障礙：設置「法規障礙區」，參賽者需選出正確的土地使用選項才能通過。',
      '• 完賽禮：動保處提供的毛孩紀念品或環保局的再生手工皂。'
    ],
    cooperation: '與公所及農會、動保處、環保局合作',
    audience: '所有人'
  },
  {
    id: 5,
    title: '智慧候車亭「土地地圖演進展」',
    details: [
      '具體作法：在非都市土地的公車轉運站或候車亭，利用數位看板或透明投影屏，展示該地區從過去到未來的衛星影像與土地分區變遷。',
      '創新點：民眾等車時，透過掃描 QR Code 即可參與「土地大會考」互動遊戲，積分可直接兌換交通卡點數（由交通局提供點數、地政局提供法規教育），讓宣導與通勤獎勵連結。'
    ],
    cooperation: '與區公所 & 交通局合作宣導',
    audience: '所有人'
  },
  {
    id: 6,
    title: '「毛孩守護．淨土營隊」聯名行動',
    details: [
      '具體作法：與動保處合作辦理寵物健檢或認養活動，現場結合環保局的廢棄物清理宣導，帶入「非都市土地非法傾倒廢棄物」對棲地與寵物健康的危害。',
      '創新點：製作「土地與毛孩健康相關性」的短影音或手冊。例如：非法回填土砂可能含有重金屬，進而影響家中毛孩或家畜健康。將法律風險轉化為「守護家人（寵物）」的情感訴求。'
    ],
    cooperation: '與動保處 & 環境保護局合作宣導',
    audience: '跟寵物有關的人'
  },
  {
    id: 7,
    title: '短影音',
    details: [
      '想出不同故事情節劇本，用 AI 生成短影片，以淺顯易懂的方式將困難的法規觀念告知民眾：',
      '1. 違規前的僥倖 vs. 罰單後的悔恨',
      '2. 變異點課堂',
      '3. 政策情境劇'
    ],
    cooperation: '地政局社群',
    audience: '所有人'
  }
];

// 依 AI 工具種類給予鮮明且專業之標籤色彩樣式
const getToolBadgeStyle = (toolName: string) => {
  if (toolName.includes('GPT')) {
    return 'bg-emerald-50 text-emerald-900 border-emerald-300 ring-1 ring-emerald-200';
  }
  if (toolName.includes('Gemini')) {
    return 'bg-indigo-50 text-indigo-950 border-indigo-300 ring-1 ring-indigo-200';
  }
  if (toolName.includes('Claude')) {
    return 'bg-amber-50 text-amber-950 border-amber-300 ring-1 ring-amber-200';
  }
  if (toolName.includes('NotebookLM')) {
    return 'bg-blue-50 text-blue-950 border-blue-300 ring-1 ring-blue-200';
  }
  if (toolName.includes('Google AI Studio')) {
    return 'bg-cyan-50 text-cyan-950 border-cyan-300 ring-1 ring-cyan-200';
  }
  if (toolName.includes('Canva')) {
    return 'bg-teal-50 text-teal-900 border-teal-300 ring-1 ring-teal-200';
  }
  if (toolName.includes('PPT')) {
    return 'bg-rose-50 text-rose-900 border-rose-300 ring-1 ring-rose-200';
  }
  if (toolName.includes('Voai')) {
    return 'bg-purple-50 text-purple-950 border-purple-300 ring-1 ring-purple-200';
  }
  return 'bg-stone-50 text-stone-900 border-stone-300 ring-1 ring-stone-200';
};

export const PublicityDetailPage: React.FC<PublicityDetailPageProps> = ({ onBack }) => {
  // 3 個主要分頁：【宣導工具庫】、【相關簽稿】、【已完成的宣導】
  const [activeTab, setActiveTab] = useState<'tools' | 'drafts' | 'completed'>('tools');

  // 相關簽稿切換：簽呈 vs 函稿
  const [draftType, setDraftType] = useState<'memo' | 'official-letter'>('memo');

  // 已完成的宣導子分頁：已完成內容 vs 尚未執行創新想法
  const [completedSubTab, setCompletedSubTab] = useState<'executed' | 'ideas'>('executed');

  // 複製提示
  const [copiedTip, setCopiedTip] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedTip(`已複製「${label}」！`);
    setTimeout(() => setCopiedTip(null), 2500);
  };

  // 簽呈全文
  const memoRawText = `簽日期：中華民國OO年OO月OO日
單位：編定管制科
附件：如說明 O

主旨：為廣宣國土利用監測計畫偵測非都市土地違規暨區域計畫法及國土計畫法之罰鍰變革流程，擬製作宣導海報（含電子檔），協請相關機關及單位宣傳使用，請核示。

說明：
一、內政部自民國 91 年起推動「國土利用監測計畫」，並於 103 年整合相關資源，納入國土測繪中心辦理之「國土利用監測整合作業」，運用衛星遙測影像技術，得以迅速掌握地表變化情形，提供具廣域性與時效性之監測資料，作為土地利用監測與管理之重要工具。
二、為深化民眾對土地合法使用之認知，提升社會大眾對衛星變異點監測土地違規使用機制之了解，並因應本市國土計畫全面取代區域計畫後，相關違規使用之裁罰規定與罰鍰內容已有所調整，爰製作土地利用違規宣導海報 1 張（含電子檔）（附件 1），以淺顯易懂之圖文說明相關規定與後果，期能有效宣導法令、提升合法使用意識，並遏止土地違規開發行為。
三、旨案宣導海報將以下列方式推廣，期以達廣泛宣導之效：
(一)將宣導海報電子檔上架於本局所屬社群平台（包括臉書、Instagram 及 YouTube 頻道等），以提升民眾接觸率與宣導廣度。
(二)函請本市各地政事務所、區公所、戶政事務所及稅捐稽徵處分處等一線為民服務機關，於辦公廳舍張貼、運用輪播機播放宣導內容，並善用各機關所屬社群平台或其他既有宣傳管道協助推廣，以擴大政策宣導觸及層面。
(三)函請本市各地政事務所於辦理地政專車服務，或與其他機關聯合舉辦行動服務隊期間，於適當之服務地點協助張貼或利用電子播放方式宣導，並向現場民眾加強說明與推廣。
(四)為擴大宣導觸及層面並發揮異業宣傳效益，亦函請與本局辦理產學合作之相關學校（如國立政治大學、國立臺北大學等），及地政士、不動產經紀業、農會等與土地利用密切相關之單位與場所，協助張貼或利用電子播放方式宣導，藉由跨領域、跨場域之宣導方式，強化民眾對土地合法使用及相關規定之認知。

擬辦：奉核後，依說明三方式辦理後續推廣事宜。`;

  // 函稿全文
  const officialLetterRawText = `新北市政府 函
發文日期：
發文字號：
速別：普通件
密等及解密條件或保密期限：
附件：如說明 O

主旨：為廣宣國土利用監測計畫偵測非都市土地違規暨區域計畫法及國土計畫法之罰鍰變革流程一案，檢送土地利用違規宣導海報 1 張，請貴公所協助於實體（電子）公佈欄張貼並於網站上公告周知，請查照。

說明：
一、為深化民眾對土地合法使用之認知，提升社會大眾對衛星變異點監測土地違規使用機制之了解，並因應本市國土計畫全面取代區域計畫後，相關違規使用之裁罰規定與罰鍰內容已有所調整，爰製作土地利用違規宣導海報 1 張，請貴公所協助於實體（電子）公佈欄張貼海報（實體海報另郵寄寄出）、運用輪播機播放宣導內容，並善用貴單位所屬社群平台或其他既有宣傳管道協助推廣（電子海報詳附件 1），另為鼓勵宣導，日後將各宣導方式計入年度非都市土地使用管制業務考核政策配合項目。
二、副本抄送：
(一) 本市各稅捐稽徵處分處：請依上開說明一協助宣導並於網站上公告周知。
(二) 本市各戶政事務所：請協助轉知各區所、辦事處、工作站等，並依上開說明一協助宣導及於網站上公告周知。
(三)本市各地政事務所：請依上開說明一協助宣導並於網站上公告周知，另請於辦理地政專車服務，或與其他機關聯合舉辦行動服務隊期間，於適當之服務地點協助張貼或利用電子播放方式宣導，並向現場民眾加強說明。

正本：新北市各區公所
副本：新北市政府稅捐稽徵處、新北市各稅捐分處、新北市各戶政事務所、新北市各地政事務所(均含附件)

本案依分層負責規定授權業務主管決行
會辦單位：
第三層決行`;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* 複製成功提示 Toast */}
      {copiedTip && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1F3864] text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-sm font-semibold animate-fade-in border border-[#DDD5C7]/30">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{copiedTip}</span>
        </div>
      )}

      {/* 頂部標題區 */}
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
                宣導
              </h1>
              <p className="text-sm sm:text-base text-[#5B584E] mt-0.5">
                法令宣導與常見QA文宣・宣導工具庫、相關簽稿與歷年宣導成果
              </p>
            </div>
          </div>
        </div>

        {/* ⚠️ 依使用者要求置頂之核心防護警示備註 */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#FFFBEB] border-2 border-[#FDE68A] flex items-start gap-2.5 shadow-2xs">
          <AlertTriangle className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#92400E] leading-relaxed font-bold">
            【安全使用守則】：使用 AI 工具切勿涉及民眾個資，AI 生成各種資料皆須查證正確性再發布！
          </div>
        </div>

        {/* 3 個功能分頁標籤按鈕 */}
        <div className="flex items-center gap-2 pt-2 border-t border-[#ECE6DB] overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('tools')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'tools'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>宣導工具庫</span>
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
            <span>相關簽稿</span>
          </button>

          <button
            onClick={() => setActiveTab('completed')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'completed'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <BookmarkCheck className="w-4 h-4" />
            <span>已完成的宣導</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 分頁 1：宣導工具庫（依照《宣導.pdf》一、宣導工具庫） */}
      {/* ========================================================================= */}
      {activeTab === 'tools' && (
        <div className="space-y-6">
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#ECE6DB]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] flex items-center justify-center text-[#8C5A4B]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                    宣導工具庫（AI 賦能宣導時機、提示詞與操作秘訣）
                  </h2>
                  <p className="text-xs sm:text-sm text-[#7D7065]">
                    彙整 8 大宣導時機推薦之生成式 AI 工具、現成提示詞範例與資安防呆要點
                  </p>
                </div>
              </div>

              <div className="text-xs text-rose-700 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200 font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>切勿將未去識別化之真實個資輸入 AI</span>
              </div>
            </div>

            {/* 工具庫列表 */}
            <div className="space-y-5 pt-1">
              {PUBLICITY_TOOLS.map((item) => (
                <div
                  key={item.id}
                  className="p-5 sm:p-6 rounded-2xl border-2 border-[#DDD5C7] bg-[#FAF7F2] hover:border-[#8C5A4B]/60 transition-all shadow-2xs"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                    {/* 左側：時機、建議 AI 工具（放大呈現）與注意事項 */}
                    <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between space-y-4 pr-0 md:pr-4 md:border-r border-[#ECE6DB]">
                      <div className="space-y-3">
                        {/* 適用時機標籤與說明 */}
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-xs font-bold flex items-center justify-center shrink-0">
                              #{item.id}
                            </span>
                            <span className="text-xs font-bold text-[#7D7065] bg-[#ECE6DB] px-2.5 py-0.5 rounded-md">
                              適用時機
                            </span>
                          </div>
                          <h3 className="font-bold text-base sm:text-lg text-[#1F3864] leading-snug">
                            {item.timing}
                          </h3>
                        </div>

                        {/* 建議的 AI 工具（放大呈現） */}
                        <div className="space-y-2 pt-2">
                          <div className="text-xs font-bold text-[#8C5A4B] flex items-center gap-1.5">
                            <Bot className="w-4 h-4 text-[#8C5A4B]" />
                            <span>建議 AI 工具：</span>
                          </div>
                          <div className="flex flex-wrap gap-2.5">
                            {item.tools.map((t) => (
                              <div
                                key={t}
                                className={`inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl text-base sm:text-lg font-black border-2 shadow-xs transition-transform hover:scale-105 ${getToolBadgeStyle(t)}`}
                              >
                                <Sparkles className="w-4 h-4 shrink-0 opacity-80" />
                                <span>{t}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* 注意事項 */}
                      <div className="mt-auto pt-3 border-t border-[#ECE6DB]/80">
                        <div className="flex items-start gap-2 text-xs text-rose-800 bg-rose-50/90 p-3 rounded-xl border border-rose-200 font-medium">
                          <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                          <div className="leading-relaxed">
                            <strong className="font-bold">注意事項：</strong>
                            <span>{item.note}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 右側：提示詞範例（可直接複製套用） */}
                    <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between space-y-3 pl-0 md:pl-2">
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-[#7D7065] flex items-center gap-1.5 mb-2.5">
                          <FileCode2 className="w-4 h-4 text-[#8C5A4B]" />
                          <span>提示詞範例（可直接複製套用）：</span>
                        </div>

                        <div className="space-y-3">
                          {item.prompts.map((p, pIdx) => (
                            <div
                              key={pIdx}
                              className="p-4 bg-white rounded-xl border-2 border-[#DDD5C7] hover:border-[#8C5A4B]/60 transition-colors shadow-2xs relative group"
                            >
                              {item.prompts.length > 1 && (
                                <div className="mb-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[#FAF7F2] text-[#8C5A4B] border border-[#DDD5C7]">
                                  範例 {pIdx + 1}
                                </div>
                              )}
                              <div className="pr-20 font-mono text-xs sm:text-sm text-[#2D2623] leading-relaxed select-all whitespace-pre-wrap">
                                {p}
                              </div>
                              <button
                                type="button"
                                onClick={() => handleCopy(p, `提示詞範例 ${item.id}${item.prompts.length > 1 ? `-${pIdx + 1}` : ''}`)}
                                className="absolute top-3.5 right-3.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-bold text-[#8C5A4B] transition-all cursor-pointer flex items-center gap-1.5 shrink-0 shadow-2xs"
                                title="複製此提示詞"
                              >
                                <Copy className="w-3.5 h-3.5" />
                                <span>複製</span>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 分頁 2：相關簽稿（依照《宣導.pdf》二、相關簽稿） */}
      {/* ========================================================================= */}
      {activeTab === 'drafts' && (
        <div className="space-y-6">
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ECE6DB]">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                  相關簽稿
                </h2>
                <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                  國土利用監測計畫海報製作、公文會辦、跨機關宣傳之簽呈與函稿標準範本
                </p>
              </div>

              {/* 切換與一鍵複製按鈕 */}
              <div className="flex items-center gap-2 flex-wrap">
                <div className="inline-flex rounded-xl bg-[#FAF7F2] p-1 border border-[#DDD5C7]">
                  <button
                    type="button"
                    onClick={() => setDraftType('memo')}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      draftType === 'memo'
                        ? 'bg-[#8C5A4B] text-white shadow-xs'
                        : 'text-[#4A3E39] hover:bg-white/60'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>1. 宣導海報實施簽呈</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDraftType('official-letter')}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      draftType === 'official-letter'
                        ? 'bg-[#8C5A4B] text-white shadow-xs'
                        : 'text-[#4A3E39] hover:bg-white/60'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>2. 新北市政府函稿</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(draftType === 'memo' ? memoRawText : officialLetterRawText, draftType === 'memo' ? '宣導簽呈全文' : '新北市政府函稿全文')}
                  className="px-3.5 py-1.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#8C5A4B] hover:bg-[#734437] transition-all cursor-pointer flex items-center gap-1.5 shadow-xs shrink-0"
                >
                  <Copy className="w-4 h-4" />
                  <span>一鍵複製全文範本</span>
                </button>
              </div>
            </div>

            {/* 提示訊息：實際回文內容仍須由承辦人依個案判斷撰寫 */}
            <div className="bg-[#FFFBEB] border-2 border-[#FDE68A] text-[#92400E] px-4 py-3 rounded-xl flex items-center gap-2.5 text-xs sm:text-sm font-bold">
              <AlertTriangle className="w-4 h-4 text-[#B45309] shrink-0" />
              <span>【實際簽稿內容仍須由承辦人依個案判斷撰寫】</span>
            </div>

            {/* 公文全文檢視區塊 */}
            {draftType === 'memo' ? (
              <div className="border-2 border-[#DDD5C7] rounded-xl overflow-hidden bg-white shadow-xs">
                {/* 簽呈表頭 */}
                <div className="p-4 sm:p-5 bg-[#FAF7F2] border-b border-[#DDD5C7] space-y-1 text-xs sm:text-sm font-sans">
                  <div className="flex justify-between items-center text-[#7D7065] flex-wrap gap-2">
                    <div><strong>簽日期：</strong>中華民國OO年OO月OO日</div>
                    <div><strong>單位：</strong>編定管制科</div>
                    <div><strong>附件：</strong>如說明 O</div>
                  </div>
                </div>

                {/* 簽呈內文 */}
                <div className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm text-[#2D2623] leading-relaxed font-sans">
                  <div className="space-y-1">
                    <span className="font-bold text-[#1F3864] text-sm sm:text-base">主旨：</span>
                    <p className="pl-4">
                      為廣宣國土利用監測計畫偵測非都市土地違規暨區域計畫法及國土計畫法之罰鍰變革流程，擬製作宣導海報（含電子檔），協請相關機關及單位宣傳使用，請核示。
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-bold text-[#1F3864] text-sm sm:text-base">說明：</span>
                    <div className="pl-4 space-y-2">
                      <p>
                        一、內政部自民國 91 年起推動「國土利用監測計畫」，並於 103 年整合相關資源，納入國土測繪中心辦理之「國土利用監測整合作業」，運用衛星遙測影像技術，得以迅速掌握地表變化情形，提供具廣域性與時效性之監測資料，作為土地利用監測與管理之重要工具。
                      </p>
                      <p>
                        二、為深化民眾對土地合法使用之認知，提升社會大眾對衛星變異點監測土地違規使用機制之了解，並因應本市國土計畫全面取代區域計畫後，相關違規使用之裁罰規定與罰鍰內容已有所調整，爰製作土地利用違規宣導海報 1 張（含電子檔）（附件 1），以淺顯易懂之圖文說明相關規定與後果，期能有效宣導法令、提升合法使用意識，並遏止土地違規開發行為。
                      </p>
                      <p>
                        三、旨案宣導海報將以下列方式推廣，期以達廣泛宣導之效：
                      </p>
                      <div className="pl-4 space-y-1.5 text-[#4A3E39]">
                        <p>
                          (一) 將宣導海報電子檔上架於本局所屬社群平台（包括臉書、Instagram 及 YouTube 頻道等），以提升民眾接觸率與宣導廣度。
                        </p>
                        <p>
                          (二) 函請本市各地政事務所、區公所、戶政事務所及稅捐稽徵處分處等一線為民服務機關，於辦公廳舍張貼、運用輪播機播放宣導內容，並善用各機關所屬社群平台或其他既有宣傳管道協助推廣，以擴大政策宣導觸及層面。
                        </p>
                        <p>
                          (三) 函請本市各地政事務所於辦理地政專車服務，或與其他機關聯合舉辦行動服務隊期間，於適當之服務地點協助張貼或利用電子播放方式宣導，並向現場民眾加強說明與推廣。
                        </p>
                        <p>
                          (四) 為擴大宣導觸及層面並發揮異業宣傳效益，亦函請與本局辦理產學合作之相關學校（如國立政治大學、國立臺北大學等），及地政士、不動產經紀業、農會等與土地利用密切相關之單位與場所，協助張貼或利用電子播放方式宣導，藉由跨領域、跨場域之宣導方式，強化民眾對土地合法使用及相關規定之認知。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-[#ECE6DB]">
                    <span className="font-bold text-[#1F3864] text-sm sm:text-base">擬辦：</span>
                    <p className="pl-4 font-semibold text-[#8C5A4B]">
                      奉核後，依說明三方式辦理後續推廣事宜。
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="border-2 border-[#DDD5C7] rounded-xl overflow-hidden bg-white shadow-xs">
                {/* 函稿表頭 */}
                <div className="p-4 sm:p-5 bg-[#FAF7F2] border-b border-[#DDD5C7] text-center space-y-1 font-sans">
                  <h3 className="text-xl font-serif-tc font-bold text-[#1F3864]">
                    新北市政府 函
                  </h3>
                  <div className="text-xs text-[#7D7065] flex items-center justify-center gap-4 flex-wrap pt-1">
                    <span>發文日期：</span>
                    <span>發文字號：</span>
                    <span>速別：普通件</span>
                    <span>密等及解密條件或保密期限：</span>
                    <span>附件：如說明 O</span>
                  </div>
                </div>

                {/* 函稿內文 */}
                <div className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm text-[#2D2623] leading-relaxed font-sans">
                  <div className="space-y-1">
                    <span className="font-bold text-[#1F3864] text-sm sm:text-base">主旨：</span>
                    <p className="pl-4">
                      為廣宣國土利用監測計畫偵測非都市土地違規暨區域計畫法及國土計畫法之罰鍰變革流程一案，檢送土地利用違規宣導海報 1 張，請貴公所協助於實體（電子）公佈欄張貼並於網站上公告周知，請查照。
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-bold text-[#1F3864] text-sm sm:text-base">說明：</span>
                    <div className="pl-4 space-y-2">
                      <p>
                        一、為深化民眾對土地合法使用之認知，提升社會大眾對衛星變異點監測土地違規使用機制之了解，並因應本市國土計畫全面取代區域計畫後，相關違規使用之裁罰規定與罰鍰內容已有所調整，爰製作土地利用違規宣導海報 1 張，請貴公所協助於實體（電子）公佈欄張貼海報（實體海報另郵寄寄出）、運用輪播機播放宣導內容，並善用貴單位所屬社群平台或其他既有宣傳管道協助推廣（電子海報詳附件 1），另為鼓勵宣導，日後將各宣導方式計入年度非都市土地使用管制業務考核政策配合項目。
                      </p>
                      <p>
                        二、副本抄送：
                      </p>
                      <div className="pl-4 space-y-1 text-[#4A3E39]">
                        <p>
                          (一) 本市各稅捐稽徵處分處：請依上開說明一協助宣導並於網站上公告周知。
                        </p>
                        <p>
                          (二) 本市各戶政事務所：請協助轉知各區所、辦事處、工作站等，並依上開說明一協助宣導及於網站上公告周知。
                        </p>
                        <p>
                          (三) 本市各地政事務所：請依上開說明一協助宣導並於網站上公告周知，另請於辦理地政專車服務，或與其他機關聯合舉辦行動服務隊期間，於適當之服務地點協助張貼或利用電子播放方式宣導，並向現場民眾加強說明。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 正副本與決行 */}
                  <div className="pt-3 border-t border-[#ECE6DB] space-y-1.5 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-[#1F3864]">正本：</span>
                      <span>新北市各區公所</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#1F3864]">副本：</span>
                      <span>新北市政府稅捐稽徵處、新北市各稅捐分處、新北市各戶政事務所、新北市各地政事務所(均含附件)</span>
                    </div>
                    <div className="pt-2 text-[#7D7065] text-xs">
                      本案依分層負責規定授權業務主管決行 ｜ 會辦單位： ｜ 第三層決行
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 分頁 3：已完成的宣導（依照《宣導.pdf》三、已完成的宣導） */}
      {/* ========================================================================= */}
      {activeTab === 'completed' && (
        <div className="space-y-6">
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ECE6DB]">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                  已完成的宣導與創新點子庫
                </h2>
                <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                  歷年多元宣導執行成果清單（12 項）與未來待提議創新宣導點子庫（7 項）
                </p>
              </div>

              {/* 子分頁切換 */}
              <div className="inline-flex rounded-xl bg-[#FAF7F2] p-1 border border-[#DDD5C7]">
                <button
                  type="button"
                  onClick={() => setCompletedSubTab('executed')}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    completedSubTab === 'executed'
                      ? 'bg-[#1F3864] text-white shadow-xs'
                      : 'text-[#4A3E39] hover:bg-white/60'
                  }`}
                >
                  <BookmarkCheck className="w-3.5 h-3.5" />
                  <span>1. 已完成的宣導內容 (12項)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCompletedSubTab('ideas')}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    completedSubTab === 'ideas'
                      ? 'bg-[#1F3864] text-white shadow-xs'
                      : 'text-[#4A3E39] hover:bg-white/60'
                  }`}
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>2. 創新宣導點子庫 (7項)</span>
                </button>
              </div>
            </div>

            {/* 子分頁 1：已完成的宣導內容 (12 項) */}
            {completedSubTab === 'executed' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-bold text-base text-[#1F3864] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>已完成的宣導內容清冊（共 12 項執行專案）</span>
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#7D7065] bg-[#FAF7F2] px-3 py-1.5 rounded-lg border border-[#DDD5C7] self-start sm:self-auto shadow-2xs">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>欄位已加寬展開・可左右滑動完整檢視</span>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-2xl border-2 border-[#DDD5C7] bg-white shadow-2xs">
                  <table className="min-w-[1360px] w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#1F3864] text-white">
                        <th className="py-3.5 px-3 text-center w-16 min-w-[64px] shrink-0 font-bold">編號</th>
                        <th className="py-3.5 px-4 w-44 min-w-[180px] font-bold">項目</th>
                        <th className="py-3.5 px-4 min-w-[300px] font-bold">內容大綱</th>
                        <th className="py-3.5 px-4 w-56 min-w-[220px] font-bold">公開處、合作單位</th>
                        <th className="py-3.5 px-4 w-36 min-w-[140px] font-bold">受眾</th>
                        <th className="py-3.5 px-4 w-28 min-w-[110px] text-center font-bold">進度</th>
                        <th className="py-3.5 px-4 w-32 min-w-[120px] text-center font-bold">開始時間</th>
                        <th className="py-3.5 px-4 min-w-[360px] font-bold">備註</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DDD5C7] bg-white">
                      {COMPLETED_ITEMS.map((item) => (
                        <tr key={item.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                          <td className="py-4 px-3 text-center font-bold text-[#8C5A4B] bg-[#FAF7F2]">
                            {item.id}
                          </td>
                          <td className="py-4 px-4 font-bold text-[#1F3864] text-sm align-top leading-snug">
                            {item.title}
                          </td>
                          <td className="py-4 px-4 text-[#332B27] leading-relaxed align-top">
                            {item.summary}
                          </td>
                          <td className="py-4 px-4 text-xs sm:text-sm text-[#5A4B43] leading-relaxed align-top">
                            {item.cooperation}
                          </td>
                          <td className="py-4 px-4 align-top">
                            <span className="inline-block px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#DDD5C7] text-xs font-semibold text-[#4A3E39] whitespace-nowrap">
                              {item.audience}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-center align-top whitespace-nowrap">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                                item.progress === '100%'
                                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                  : 'bg-amber-100 text-amber-800 border border-amber-300'
                              }`}
                            >
                              {item.progress}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-center text-xs font-mono text-[#7D7065] align-top whitespace-nowrap">
                            {item.startDate}
                          </td>
                          <td className="py-4 px-4 text-xs sm:text-sm text-[#5A4B43] leading-relaxed align-top">
                            {item.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 子分頁 2：有想到的宣導內容 (尚未執行，7 項創新構想) */}
            {completedSubTab === 'ideas' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-[#1F3864] flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span>有想到的宣導內容（尚未執行之跨機關與數位創新提案庫）</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {INNOVATIVE_IDEAS.map((idea) => (
                    <div
                      key={idea.id}
                      className="p-4 sm:p-5 rounded-xl border-2 border-[#DDD5C7] bg-[#FAF7F2] space-y-3 shadow-2xs hover:border-[#8C5A4B]/60 transition-colors flex flex-col justify-between"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2 border-b border-[#ECE6DB] pb-2">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-md bg-[#8C5A4B] text-white text-xs font-bold flex items-center justify-center shrink-0">
                              {idea.id}
                            </span>
                            <h4 className="font-bold text-sm sm:text-base text-[#1F3864]">
                              {idea.title}
                            </h4>
                          </div>
                          <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                            待提議提案
                          </span>
                        </div>

                        {/* 內容大綱 */}
                        <div className="space-y-1.5 text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                          {idea.details.map((d, dIdx) => (
                            <p key={dIdx} className="pl-1">
                              {d}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* 合作單位與受眾 */}
                      <div className="pt-2 border-t border-[#ECE6DB] flex items-center justify-between text-xs text-[#7D7065] flex-wrap gap-2">
                        <div className="flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5 text-[#8C5A4B]" />
                          <span>合作單位：<strong>{idea.cooperation}</strong></span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-[#8C5A4B]" />
                          <span>受眾：<strong>{idea.audience}</strong></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
