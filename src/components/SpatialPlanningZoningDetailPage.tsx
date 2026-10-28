import React, { useState } from 'react';
import {
  ArrowLeft,
  Layers,
  Map,
  Compass,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Search,
  ExternalLink,
  FileText,
  TreePine,
  Wheat,
  Building2,
  Waves,
  Scale,
  Copy,
  Check,
  SlidersHorizontal,
  BookmarkCheck
} from 'lucide-react';

interface SpatialPlanningZoningDetailPageProps {
  onBack: () => void;
}

// 四大分區資料
interface ZoningCategoryItem {
  code: string;
  name: string;
  target: string;
  criteria: string;
  principle: string;
  allowedSummary: string;
  colorBadge: string;
}

interface MajorZoningGroup {
  id: string;
  name: string;
  icon: React.ElementType;
  badgeColor: string;
  description: string;
  items: ZoningCategoryItem[];
}

const MAJOR_ZONINGS: MajorZoningGroup[] = [
  {
    id: 'conservation',
    name: '國土保育地區',
    icon: TreePine,
    badgeColor: 'bg-emerald-700 text-white',
    description: '以保育自然生態、天然資源、水資源、維護生物多樣性、防避天然災害及保護文化資產為目標。',
    items: [
      {
        code: '國保一',
        name: '國土保育地區第 1 類',
        target: '具最嚴格保護價值之核心生態與水源地',
        criteria: '第一級環境敏感地區（如飲用水水源水質保護區、自然保留區、野生動物保護區、國家公園核心保護區等）。',
        principle: '嚴格限制開發建築，以自然保育為唯一主要原則，維護國土安全。',
        allowedSummary: '禁止高強度開發，僅容許原生保育維護、必要之學術研究與安全防護設施。',
        colorBadge: 'bg-emerald-800 text-white'
      },
      {
        code: '國保二',
        name: '國土保育地區第 2 類',
        target: '具重要環境敏感性或緩衝功能之地區',
        criteria: '第二級環境敏感地區（如山坡地保育區、水庫集水區、特定水土保持區等）。',
        principle: '依環境承載力進行低強度、相容性之使用管制，避免水土流失與環境破壞。',
        allowedSummary: '容許林業、符合水保規定之農牧使用、低衝擊公共公用設施及低密度生態遊憩設施。',
        colorBadge: 'bg-emerald-700 text-white'
      },
      {
        code: '國保三',
        name: '國土保育地區第 3 類',
        target: '國家公園範圍內非屬國保一、二類之一般管制土地',
        criteria: '國家公園法劃定之一般管制區、遊憩區等。',
        principle: '配合國家公園計畫實施分區使用管制與經營管理。',
        allowedSummary: '依國家公園計畫管制規定辦理容許使用及審查。',
        colorBadge: 'bg-teal-700 text-white'
      },
      {
        code: '國保四',
        name: '國土保育地區第 4 類',
        target: '原住民族土地中具保育價值且包含既有聚落生活空間者',
        criteria: '原住民族土地範圍內之生態或水源敏感區，兼具部落生活需要。',
        principle: '保障原住民族傳統文化、生活習俗及傳統採集權益，兼顧水土資源保育。',
        allowedSummary: '容許傳統部落居住生活、傳統祭儀、林下經濟及永續農林使用。',
        colorBadge: 'bg-teal-800 text-white'
      }
    ]
  },
  {
    id: 'agriculture',
    name: '農業發展地區',
    icon: Wheat,
    badgeColor: 'bg-amber-700 text-white',
    description: '以確保國家糧食安全、維護農業生產環境、促進農村永續經營與多元產業加值為目標。',
    items: [
      {
        code: '農發一',
        name: '農業發展地區第 1 類',
        target: '優良農地與中央重要農業生產專區',
        criteria: '具優良農業生產環境、大面積且投資完整農田水利設施之農地（如現行特定農業區之大面積農牧用地）。',
        principle: '專供優質農業生產使用，防堵非農用途侵蝕，嚴格維護糧食安全基盤。',
        allowedSummary: '嚴格專供農作、蓄殖、農業產銷直接必要設施，嚴格管制非農使用。',
        colorBadge: 'bg-amber-800 text-white'
      },
      {
        code: '農發二',
        name: '農業發展地區第 2 類',
        target: '良好農地與一般性農業經營環境',
        criteria: '良好農業生產環境、具農產業加值潛力或配合地方農產業發展之地區（如一般農業區農牧用地）。',
        principle: '以多元農糧生產與農業科技經營為主，支持農業創新及產銷加值。',
        allowedSummary: '容許農業生產、農產加工貯藏設施、農業綠能（複合型）及農產運銷設施。',
        colorBadge: 'bg-amber-700 text-white'
      },
      {
        code: '農發三',
        name: '農業發展地區第 3 類',
        target: '山坡地與丘陵地農林業經營環境',
        criteria: '位於山坡地保育區、森林區之農牧使用地或特色高經濟林果栽培區。',
        principle: '兼顧坡地水土保持、防災避險與在地坡地農業、特色茶果林下經濟經營。',
        allowedSummary: '容許友善水保農耕、林下經濟、防災蓄水設施與相容性農用設施。',
        colorBadge: 'bg-yellow-700 text-white'
      },
      {
        code: '農發四',
        name: '農業發展地區第 4 類',
        target: '農村聚落與既有鄉村生活空間',
        criteria: '現行非都市土地鄉村區、夾雜於農業發展地區之既有建地聚落。',
        principle: '維護農村社區生活機能與生活改善，提供鄉村居住、公共服務與地方微型商業。',
        allowedSummary: '容許住宅自用建築、鄉村公共設施、社區微型商業及農村觀光文化服務。',
        colorBadge: 'bg-orange-700 text-white'
      },
      {
        code: '農發五',
        name: '農業發展地區第 5 類',
        target: '都市計畫內之農業區與保護區',
        criteria: '都市計畫範圍內劃定為農業區或保護區之土地。',
        principle: '銜接都市計畫土地使用分區管制自治條例進行管制。',
        allowedSummary: '依各該都市計畫土地使用分區管制規定辦理。',
        colorBadge: 'bg-stone-700 text-white'
      }
    ]
  },
  {
    id: 'urban',
    name: '城鄉發展地區',
    icon: Building2,
    badgeColor: 'bg-indigo-700 text-white',
    description: '以引導都市與鄉村有序發展、促進土地集約有效利用、完善公共設施與產業動能為目標。',
    items: [
      {
        code: '城鄉一',
        name: '城鄉發展地區第 1 類',
        target: '都市計畫地區與高度都市化發展環境',
        criteria: '都市計畫範圍內之可建築用地及公共設施用地。',
        principle: '依都市計畫法實施高強度集約規劃與都市更新維護。',
        allowedSummary: '依都市計畫法、土地使用分區管制自治條例辦理各項住宅、商業、工業使用。',
        colorBadge: 'bg-indigo-800 text-white'
      },
      {
        code: '城鄉二-1',
        name: '城鄉發展地區第 2-1 類',
        target: '未來預計納入都市計畫或擴大之都市化儲備地區',
        criteria: '直轄市、縣（市）國土計畫指認之未來 5 至 10 年城鄉儲備擴展發展空間。',
        principle: '於都市計畫或市地重劃、區段徵收整體開發前，避免零星搶建或不當開發。',
        allowedSummary: '未開發前維持現況容許使用；整體開發計畫核定後依都市計畫推動。',
        colorBadge: 'bg-indigo-700 text-white'
      },
      {
        code: '城鄉二-2',
        name: '城鄉發展地區第 2-2 類',
        target: '非都市土地大型特定目的或工業園區等重大聚落',
        criteria: '已依法核准開發之科學園區、產業園區、特定工廠專區或非都市大型事業用地。',
        principle: '促進產業升級、健全園區管理及公用管線基礎設施配套。',
        allowedSummary: '依核定之開發許可或興辦事業計畫內容辦理各項產業與公用設施使用。',
        colorBadge: 'bg-blue-700 text-white'
      },
      {
        code: '城鄉二-3',
        name: '城鄉發展地區第 2-3 類',
        target: '非屬都市計畫且具一定發展規模之鄉村集村市街聚落',
        criteria: '人口規模較大、發展成熟且具備自給自足生活機能之非都市成熟聚落。',
        principle: '提供完整生活圈機能，避免零散蔓延擴張。',
        allowedSummary: '容許住宅、日常服務、文教社福與社區公共設施使用。',
        colorBadge: 'bg-sky-700 text-white'
      },
      {
        code: '城鄉三',
        name: '城鄉發展地區第 3 類',
        target: '原住民族土地中之生活聚落發展地區',
        criteria: '原住民族土地範圍內既有原民聚落與傳統生活部落範圍。',
        principle: '尊重原住民族自主發展、文化保存與居住聚落生活改善需求。',
        allowedSummary: '容許部落住宅自建、公共設施、傳統文化集會場所與部落小型生計經營。',
        colorBadge: 'bg-violet-700 text-white'
      }
    ]
  },
  {
    id: 'marine',
    name: '海洋資源地區',
    icon: Waves,
    badgeColor: 'bg-blue-800 text-white',
    description: '以維護海洋權益、保障海洋生態環境、促進海洋資源永續利用與海域多元發展為目標。',
    items: [
      {
        code: '海資一-1',
        name: '海洋資源地區第 1-1 類',
        target: '海洋保護區核心區與最高敏感度海域',
        criteria: '依法劃定之水產動植物繁殖保育區、重要濕地核心區等重要海域。',
        principle: '嚴格禁止破壞性使用，維護海洋生物多樣性與水質生態環境。',
        allowedSummary: '限原生保育與必要研究，禁止污染性及干擾性海域使用。',
        colorBadge: 'bg-blue-900 text-white'
      },
      {
        code: '海資一-2',
        name: '海洋資源地區第 1-2 類',
        target: '重大公共安全與關鍵國防基礎海域',
        criteria: '重要航道、海纜登陸區、國防防禦管制海域等。',
        principle: '確保國家安全、航行安全與關鍵基礎設施暢通。',
        allowedSummary: '限指定之公共安全防護、航行通行及海底管線維護。',
        colorBadge: 'bg-blue-800 text-white'
      },
      {
        code: '海資二',
        name: '海洋資源地區第 2 類',
        target: '多功能利用海域（漁業、遊憩、海運等）',
        criteria: '沿近海傳統漁業捕撈區、海上觀光遊憩區、海水浴場等。',
        principle: '推動相容性多元複合利用，兼顧漁業生計與海洋休閒。',
        allowedSummary: '容許漁業設施、水上遊憩、海上交通航行及觀光遊憩活動。',
        colorBadge: 'bg-cyan-800 text-white'
      },
      {
        code: '海資三',
        name: '海洋資源地區第 3 類',
        target: '專案核准開發海域（離岸風電、港灣擴建等）',
        criteria: '經目的事業主管機關審定之海域開發專案（如綠能風場、海港等）。',
        principle: '依專案使用許可及環境影響評估落實監控與管養。',
        allowedSummary: '依核定之海域使用許可計畫進行施工與營運。',
        colorBadge: 'bg-teal-900 text-white'
      }
    ]
  }
];

// 核心保障原則
const CORE_PROTECTION_PRINCIPLES = [
  {
    title: '既有合法權利 100% 依法保障',
    icon: ShieldCheck,
    color: 'emerald',
    content:
      '依《國土計畫使用管制規則》第 3 條規定，於直轄市、縣（市）國土功能分區圖公告實施後，既有合法權益受法律完整保障。土地於依本法核准使用同意或使用許可前，按施行日前土地登記簿記載之使用地類別註記使用，原有權利不受損害。'
  },
  {
    title: '農牧用地耕作與農舍資格不變',
    icon: Wheat,
    color: 'amber',
    content:
      '無論劃設為農發一、農發二或農發三，原屬合法之農牧用地，原有從事農耕、申辦農業產銷設施（溫室、資材室、產銷冷藏）及符合規定興建自用農舍之法定權益均完整維持，並不會因劃入國土功能分區而變成不可耕作。'
  },
  {
    title: '合法建地之建蔽率與容積率原則維持',
    icon: Building2,
    color: 'indigo',
    content:
      '現行非都市土地既有合法甲種、乙種、丙種、丁種建築用地，國土計畫公告實施後仍屬合法建築用地。其原有可建築強度（建蔽率、容積率）及合法拆除重建、增建、改建之既有權益原則維持保障。'
  },
  {
    title: '免申請 vs 應經申請同意 分流明確',
    icon: SlidersHorizontal,
    color: 'stone',
    content:
      '依管制規則附表一將土地使用區分為「免經申請同意使用」、「應經申請同意使用」及「禁止使用」。一般相容性農作生活大多列為免申請項目，減少民眾送件行政負擔；重大或高強度設施則落實目的主管機關審查。'
  }
];

// 承辦審查 SOP 5 步驟
const AUDIT_STEPS = [
  {
    step: '步驟 01',
    title: '地籍圖資與功能分區查詢',
    office: '地政局 / 轄區地政所',
    action: '輸入土地地段與地號，連線「國土功能分區圖查詢系統」，確認該筆土地劃定之國土功能分區及分類（如農發一、國保二等）。',
    tip: '若一筆土地跨越兩種以上功能分區分類，應依各自坐落範圍面積分別認定管制。'
  },
  {
    step: '步驟 02',
    title: '核對土地登記謄本現況',
    office: '地政局地用科',
    action: '調閱土地第一類登記謄本標示部，確認土地使用分區及使用地類別（如一般農業區農牧用地），核對是否為既有合法編定。',
    tip: '既有合法權利依登記簿所載使用地類別註記保障。'
  },
  {
    step: '步驟 03',
    title: '比對管制規則附表一容許細目',
    office: '業務主政機關 / 地政局',
    action: '查閱《國土計畫土地使用管制規則》附表一，釐清民眾擬申請之使用項目屬於：①免經申請同意、②應經申請同意、或③禁止使用。',
    tip: '若屬「應經申請同意」，應由該項目中央目的事業主管機關訂定之許可要點受理審核。'
  },
  {
    step: '步驟 04',
    title: '環境敏感區與災害潛勢套疊審查',
    office: '城鄉局 / 環保局 / 水利局',
    action: '透過環境敏感地區單一窗口進行查詢，確認是否涉及第一級或第二級環境敏感區、順向坡、土石流潛勢溪流或斷層帶。',
    tip: '國保一或涉及第一級環境敏感地區者，法定限制條件最嚴格。'
  },
  {
    step: '步驟 05',
    title: '作成行政處分或續辦核准使用',
    office: '新北市政府目的局處 / 地政局',
    action: '符合容許使用者由目的事業主管機關核發許可文件並副知地所列管；涉及使用許可或整體開發者依法提報國土審議會審議。',
    tip: '全程落實行政程序法陳述意見與資訊公開要求。'
  }
];

// 常見 QA
const FAQ_LIST = [
  {
    q: '國土功能分區公告實施後，原本買賣或繼承的農地還能自由移轉過戶嗎？',
    a: '可以！國土計畫法主要是規範土地的「使用方式（土地使用管制）」，完全不限制土地所有權的買賣移轉、過戶、繼承、贈與或設定抵押權等民法財產權益。'
  },
  {
    q: '原本編定為「甲種建築用地」或「丙種建築用地」，劃為國土保育或農業發展地區後還能蓋房子嗎？',
    a: '可以！依據國土計畫使用管制規則第 3 條既有權益保障規定，原本登記為建築用地的土地，其合法可建築權利原則維持不變，原有建蔽率與容積率及拆除重建權利均受保障。'
  },
  {
    q: '國土計畫實施後，土地登記謄本上的「使用分區」和「使用地類別」會怎麼顯示？',
    a: '國土功能分區實施後，土地登記簿標示部將新增「國土功能分區及其分類」（例如：國土保育地區第1類）。而在既有權利保障原則下，原非都市土地之使用地類別註記亦會妥善保留或換軌註記，確保權利透明完整。'
  },
  {
    q: '在國土功能分區公告前已經送件的變更編定或興辦事業計畫，之後該怎麼辦？',
    a: '依過渡銜接條款規定，於國土功能分區圖公告實施日前已受理且程序完備之案件，原則上依照原區域計畫法相關規定繼續審查辦理完竣；或依申請人意願選擇銜接新制審查。'
  },
  {
    q: '被劃設在「國保一」或「農發一」的土地，如果被違規使用，罰鍰額度會變重嗎？',
    a: '是的！國土計畫法為遏阻重大破壞國土情事，對重大違規行為依情節訂有比以往區域計畫法更嚴格的罰則（罰鍰最高達新臺幣 100 萬至 500 萬元，致人於死或成災者甚至負刑事責任），承辦同仁稽查時務必詳實取證。'
  }
];

export const SpatialPlanningZoningDetailPage: React.FC<SpatialPlanningZoningDetailPageProps> = ({
  onBack
}) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('conservation');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const activeGroup = MAJOR_ZONINGS.find((g) => g.id === selectedGroup) || MAJOR_ZONINGS[0];

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // 篩選 FAQ
  const filteredFaqs = FAQ_LIST.filter(
    (item) =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 pb-12 animate-fade-in">
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
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-serif-tc font-semibold text-[#2D2623]">
                  國土功能分區
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#1F3864] text-white">
                  國土計畫體系
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#665A54] mt-1">
                《國土計畫法》四大分區・19項分類劃設標準・土地使用管制規則與既有合法權利保障
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://nsp.tcd.gov.tw/ngis/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-[#1F3864] hover:bg-[#152544] text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <ExternalLink className="w-4 h-4" />
              <span>國土功能分區圖查詢系統</span>
            </a>
          </div>
        </div>

        {/* 快速錨點跳轉列 */}
        <div className="pt-3 flex flex-wrap gap-2 text-xs font-semibold text-[#5B584E]">
          <span className="text-[#8C5A4B] font-bold py-1">章節導覽：</span>
          <a
            href="#sec-zonings"
            className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] transition-colors"
          >
            四大分區與19項分類
          </a>
          <a
            href="#sec-protection"
            className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] transition-colors"
          >
            既有權利保障核心原則
          </a>
          <a
            href="#sec-sop"
            className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] transition-colors"
          >
            承辦作業審查 SOP
          </a>
          <a
            href="#sec-faq"
            className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] transition-colors"
          >
            常見實務問答 (FAQ)
          </a>
          <a
            href="#sec-tools"
            className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] transition-colors"
          >
            官方圖資與實用工具
          </a>
        </div>
      </div>

      {/* 區塊一：四大國土功能分區與 19 項分類全覽 */}
      <section id="sec-zonings" className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#ECE6DB] gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#8C5A4B]" />
              <span>四大功能分區與 19 項分類架構全覽</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#7D7065] mt-1">
              依《國土計畫法》第 20 條及直轄市、縣（市）國土計畫劃定，引導土地相容合理使用
            </p>
          </div>
          <span className="text-xs font-semibold text-[#1F3864] bg-[#F5EFE7] px-3 py-1 rounded-lg border border-[#DDD5C7]">
            全國統一四大架構
          </span>
        </div>

        {/* 分區群組切換按鈕 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {MAJOR_ZONINGS.map((group) => {
            const Icon = group.icon;
            const isSelected = selectedGroup === group.id;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setSelectedGroup(group.id)}
                className={`p-3.5 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer text-center ${
                  isSelected
                    ? 'border-[#1F3864] bg-[#1F3864] text-white shadow-xs'
                    : 'border-[#DDD5C7] bg-[#FAF7F2] text-[#4A3E39] hover:bg-[#EAE2D7]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-amber-300' : 'text-[#8C5A4B]'}`} />
                <span className="font-bold text-sm sm:text-base">{group.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#EAE2D7] text-[#5A4B43]'
                  }`}
                >
                  {group.items.length} 種分類
                </span>
              </button>
            );
          })}
        </div>

        {/* 當前選定群組之詳情展示 */}
        <div className="bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] p-4 sm:p-5 space-y-4">
          <div className="flex items-start justify-between gap-3 border-b border-[#DDD5C7] pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold ${activeGroup.badgeColor}`}>
                  {activeGroup.name}
                </span>
                <span className="text-xs text-[#7D7065]">劃設核心目標</span>
              </div>
              <p className="text-sm font-medium text-[#2D2623] mt-1.5 leading-relaxed">
                {activeGroup.description}
              </p>
            </div>
          </div>

          {/* 各分類卡片清單 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
            {activeGroup.items.map((item) => (
              <div
                key={item.code}
                className="bg-white rounded-xl border border-[#DDD5C7] p-4 space-y-2.5 hover:shadow-xs transition-shadow"
              >
                <div className="flex items-center justify-between gap-2 border-b border-[#F0EAE1] pb-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${item.colorBadge}`}>
                      {item.code}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#1F3864]">
                      {item.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleCopy(item.code, `${item.name}（${item.code}）：${item.criteria}。土地使用原則：${item.principle}`)}
                    className="p-1 rounded text-[#9E948C] hover:text-[#1F3864] hover:bg-[#F5EFE7] transition-colors"
                    title="複製分類說明"
                  >
                    {copiedKey === item.code ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="text-xs space-y-1.5">
                  <div>
                    <span className="font-bold text-[#8C5A4B]">【劃設對象】：</span>
                    <span className="text-[#4A3E39]">{item.target}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#8C5A4B]">【劃定基準】：</span>
                    <span className="text-[#5A4B43]">{item.criteria}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#1F3864]">【土地使用原則】：</span>
                    <span className="text-[#2D2623] leading-relaxed">{item.principle}</span>
                  </div>
                  <div className="pt-1 border-t border-dashed border-[#DDD5C7] text-stone-600">
                    <span className="font-semibold text-emerald-800">【容許使用重點】：</span>
                    <span>{item.allowedSummary}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 區塊二：既有合法權利保障核心原則 */}
      <section id="sec-protection" className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="border-b border-[#ECE6DB] pb-3">
          <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
            <span>既有合法權益保障核心原則</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#7D7065] mt-1">
            國土計畫法以尊重歷史權益為最高準則，原非都市土地合法權益不因分區劃定而受損
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CORE_PROTECTION_PRINCIPLES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7] space-y-2 hover:border-[#8C5A4B] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white border border-[#DDD5C7] text-[#1F3864]">
                    <Icon className="w-4 h-4 text-[#8C5A4B]" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-[#1F3864]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* 法令核心條文對照卡片 */}
        <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1.5">
          <div className="font-bold flex items-center gap-1.5">
            <Scale className="w-4 h-4 text-amber-800" />
            <span>法源重點：《國土計畫土地使用管制規則》（法規會審竣草案）第 3 條</span>
          </div>
          <p className="leading-relaxed font-mono text-xs text-amber-950">
            「各國土功能分區及其分類土地，於依本法核准使用同意、使用許可或由既有合法可建築用地變更為非可建築用地前，按本規則施行日前土地登記簿所載之使用地類別註記，並依本法第二十三條第二項至第四項所定管制規則規定之土地使用管制內容使用。」
          </p>
        </div>
      </section>

      {/* 區塊三：承辦作業審查流程 SOP */}
      <section id="sec-sop" className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="border-b border-[#ECE6DB] pb-3">
          <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864] flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#8C5A4B]" />
            <span>國土功能分區承辦審查作業 SOP</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#7D7065] mt-1">
            承辦同仁受理土地使用、會勘或查詢案件之 5 大標準審查環節
          </p>
        </div>

        <div className="space-y-3">
          {AUDIT_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] p-4 rounded-xl border border-[#DDD5C7] flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-[#F5EFE7] transition-colors"
            >
              <div className="flex items-start gap-3 min-w-0">
                <span className="px-2.5 py-1 rounded-lg bg-[#1F3864] text-white font-mono font-bold text-xs shrink-0">
                  {step.step}
                </span>
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-sm sm:text-base text-[#1F3864]">
                      {step.title}
                    </h3>
                    <span className="text-[11px] text-[#7D7065] bg-white px-2 py-0.5 rounded border border-[#DDD5C7]">
                      {step.office}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                    {step.action}
                  </p>
                </div>
              </div>
              <div className="md:w-64 shrink-0 text-xs bg-white/80 p-2.5 rounded-lg border border-[#DDD5C7] text-stone-700">
                <span className="font-bold text-[#8C5A4B] block mb-0.5">💡 審查重點：</span>
                <span>{step.tip}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 區塊四：常見實務問答 (FAQ) */}
      <section id="sec-faq" className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#ECE6DB] gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#8C5A4B]" />
              <span>常見實務問題與民眾疑惑 (FAQ)</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#7D7065] mt-1">
              地政局與各區公所第一線櫃台最常接獲之詢問解析
            </p>
          </div>
          {/* FAQ 關鍵字搜尋 */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#A39891] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜尋問答關鍵字…"
              className="w-full pl-9 pr-3 py-1.5 bg-[#FAF7F2] border border-[#DDD5C7] rounded-lg text-xs text-[#2D2623] placeholder-[#A39891] focus:outline-hidden focus:border-[#8C5A4B]"
            />
          </div>
        </div>

        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] p-4 space-y-2"
            >
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-[#8C5A4B] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  Q
                </span>
                <h3 className="font-bold text-sm sm:text-base text-[#1F3864]">
                  {faq.q}
                </h3>
              </div>
              <div className="flex items-start gap-2 pl-7">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  A
                </span>
                <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center bg-[#FAF7F2] rounded-xl text-xs sm:text-sm text-[#7D7065]">
              查無相符之問答內容，請清除關鍵字搜尋。
            </div>
          )}
        </div>
      </section>

      {/* 區塊五：官方圖資與實用工具 */}
      <section id="sec-tools" className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="border-b border-[#ECE6DB] pb-3">
          <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864] flex items-center gap-2">
            <Map className="w-5 h-5 text-[#8C5A4B]" />
            <span>官方圖資與實用線上查詢系統</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#7D7065] mt-1">
            承辦同仁實質審查、會辦及民眾電話諮詢必備工具
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <a
            href="https://nsp.tcd.gov.tw/ngis/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#1F3864] text-white">
                  內政部官方
                </span>
                <ExternalLink className="w-4 h-4 text-[#8C5A4B] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#1F3864] group-hover:text-[#8C5A4B] transition-colors">
                國土功能分區圖查詢系統
              </h3>
              <p className="text-xs text-[#7D7065] leading-relaxed">
                全臺直轄市、縣（市）國土功能分區圖草案公開圖資，支援地號定位與分區比對。
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#8C5A4B] mt-3 block">
              立即前往查詢 ➔
            </span>
          </a>

          <a
            href="https://www.planning.ntpc.gov.tw/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#8C5A4B] text-white">
                  新北市政府
                </span>
                <ExternalLink className="w-4 h-4 text-[#8C5A4B] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#1F3864] group-hover:text-[#8C5A4B] transition-colors">
                新北市國土計畫資訊專區
              </h3>
              <p className="text-xs text-[#7D7065] leading-relaxed">
                新北市國土計畫審議會議紀錄、公聽會簡報、人民陳情意見綜理表及分區劃設最新成果。
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#8C5A4B] mt-3 block">
              立即前往查詢 ➔
            </span>
          </a>

          <a
            href="https://landsub.moi.gov.tw/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-800 text-white">
                  地政服務
                </span>
                <ExternalLink className="w-4 h-4 text-[#8C5A4B] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#1F3864] group-hover:text-[#8C5A4B] transition-colors">
                非都市土地使用管制法規專區
              </h3>
              <p className="text-xs text-[#7D7065] leading-relaxed">
                現行區域計畫法、非都市土地管制規則與國土計畫土地使用管制規則條文草案對照。
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#8C5A4B] mt-3 block">
              立即前往查詢 ➔
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};
