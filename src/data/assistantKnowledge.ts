import { ModuleId } from '../types';

export interface ActionCard {
  title: string;
  moduleId: ModuleId;
  desc: string;
  badge?: string;
}

export interface MatchedKnowledgeResult {
  matchedModules: ActionCard[];
  directAnswer?: string;
  relatedTopics: string[];
  suggestedFollowUps: string[];
}

// NotebookLM 外部資源連結
export const NOTEBOOKLM_CONFIG = {
  url: 'https://notebook.google.com/notebook/846b3807-62d0-48eb-b188-72314967aa27',
  title: '非都市土地與國土計畫 NotebookLM 研讀筆記庫',
  desc: '由承辦人員研析彙整之非都市土地法令、更正編定判決、違規裁處及專題研析深度筆記庫。'
};

// 本地知識字典與快捷檢索索引
export const KNOWLEDGE_INDEX: Array<{
  keywords: string[];
  primaryModule: ModuleId;
  title: string;
  desc: string;
  badge?: string;
  summary: string;
  keySteps?: string[];
  legalBasis?: string;
}> = [
  {
    keywords: ['列管表', '繕打說明', '先填列管表', '管制表', '建檔', '編定案件列管表'],
    primaryModule: 'change-designation',
    title: '先填列管表（編定案件登載重點）',
    desc: '變更編定與更正編定收件後之第一步核心管制動作',
    badge: '承辦必填',
    summary:
      '受理變更編定或更正編定案件時，承辦同仁必須依《編定案件列管表繕打說明》登載列管表，完整登載系統列管案號、地段地號、申請目的及審查進度。',
    legalBasis: '編定案件列管表繕打說明、非都市土地使用管制規則',
    keySteps: [
      '收件後於公文系統取得案號，即時開啟列管表',
      '登載申請人代碼、地段地號及申請面積',
      '勾稽審查表與山坡地原則表',
      '陳核決行後定期更新會審與複查狀態'
    ]
  },
  {
    keywords: ['更正編定', '老屋', '合法建物', '舊稅籍', '水電證明', '70年', '編定公告前', '分割', '更正', '倒塌'],
    primaryModule: 'correction',
    title: '更正編定',
    desc: '公告編定前已作非編定用途之合法使用判定與更正',
    badge: '核心業務',
    summary:
      '以新北市公告編定基準日（民國70年2月15日）為準。申請人需提出編定公告日前已存在之合法建物證明文件（如自來水水費單、電費單、舊稅籍證明、戶籍謄本、歷史航照圖等）。建物倒塌滅失成空地或公告後增建鐵皮者，不得辦理更正編定。',
    legalBasis: '非都市土地使用管制規則第35條之1、製定非都市土地使用分區圖及編定各種使用地作業須知',
    keySteps: [
      '查對新北市公告編定基準日（民國70年2月15日）',
      '檢核公告日前合法房屋水電、稅籍或空拍底圖證明',
      '會同轄區地政事務所至現地測量建物合法投影範圍',
      '審核通過發文囑託地所辦理逕為分割與異動登記'
    ]
  },
  {
    keywords: ['變更編定', '變更', '特定目的事業', '興辦事業計畫', '丁種', '甲建', '土地變更', '假分割'],
    primaryModule: 'change-designation',
    title: '變更編定',
    desc: '配合興辦事業核准將土地變更為符合用途之編定類別',
    badge: '核心業務',
    summary:
      '土地所有權人因興辦各項事業（特定工廠、農產加工、社福、宗教、露營等）需要，取得目的事業主管機關核定之興辦事業計畫核准文件後，向地政局申請將非都市土地編定類別辦理變更登記。',
    legalBasis: '非都市土地使用管制規則第27條至第35條、非都市土地變更編定執行要點',
    keySteps: [
      '檢核目的事業主管機關興辦事業核准文件',
      '檢附地籍圖、謄本及審查表送地政局申請',
      '會審農業局、工務局、環保局、水利局等相關局處',
      '簽准發文囑託轄區地所辦理土地登記簿標示部異動登記'
    ]
  },
  {
    keywords: ['興辦事業', '興辦審查', '擴廠', '特定工廠', '事業計畫', '會辦'],
    primaryModule: 'enterprise-review',
    title: '興辦事業審查',
    desc: '目的事業計畫之跨機關會辦與地政實質審查導引',
    badge: '前置程序',
    summary:
      '各項事業申請變更編定前，必須先向新北市目的事業主管機關提送興辦事業計畫，地政局進行第一次（通案原則）及第二次（實質核准前）會審，查核地籍、面積、環敏查詢與道路管養。',
    legalBasis: '非都市土地變更編定執行要點第3點'
  },
  {
    keywords: ['違規使用', '裁處', '罰鍰', '陳述意見', '區域計畫法', '查報', '現勘', '21條', '22條', '倒廢棄物', '整地'],
    primaryModule: 'illegal-use',
    title: '違規使用查處',
    desc: '查報、現勘取證、行政程序法陳述意見與裁罰基準',
    badge: '執法重點',
    summary:
      '針對違反非都市土地編定管制之行為，依區域計畫法第 21 條裁處 6 萬至 30 萬元罰鍰並限期恢復原狀。最關鍵法定程序：作成限制或處分前，務必踐行行政程序法第 102 條通知相對人限期陳述意見，否則處分將在訴願程序中遭撤銷。',
    legalBasis: '區域計畫法第21、22條、新北市政府處理違反區域計畫法案件裁罰基準、行政程序法第102條',
    keySteps: [
      '受理區公所查報或民眾檢舉並建立列管案號',
      '各局處聯合現地稽查、拍照定位及丈量長寬高面積',
      '依行政程序法第102條發函通知限期陳述意見（關鍵防禦）',
      '無理由者依法開立裁處處分書並限期恢復原狀',
      '期滿現地複查，未改善者按次處罰或移送強制執行'
    ]
  },
  {
    keywords: ['國土功能分區', '國土計畫', '國保', '農發', '城鄉', '海資', '19項分類', '既有權利', '國土計畫法'],
    primaryModule: 'spatial-planning-zoning',
    title: '國土功能分區',
    desc: '四大分區、19項分類、使用管制規則與既有合法權利保障',
    badge: '國土新制',
    summary:
      '國土計畫法劃設四大分區（國土保育、農業發展、城鄉發展、海洋資源）及19項分類。依國土計畫土地使用管制規則第3條，國土功能分區實施後，既有合法權利100%受保障，原土地登記簿記載之使用地類別註記原則維持，合法建地建蔽容積率不縮減。',
    legalBasis: '國土計畫法第20條至第23條、國土計畫土地使用管制規則第3條'
  },
  {
    keywords: ['容許使用', '附表一', '免經許可', '許可條件', '農舍', '農業設施', '溫室'],
    primaryModule: 'permitted-use',
    title: '容許使用',
    desc: '非都市土地管制規則附表一分流判定與目的機關審查',
    badge: '相容使用',
    summary:
      '在維持現有編定類別前提下，依非都市土地管制規則附表一規定，從事相容性之使用。分為「免經許可」與「需經目的事業主管機關許可」兩大類別。',
    legalBasis: '非都市土地使用管制規則第6條及附表一'
  },
  {
    keywords: ['補註用地', '山坡地', '查定', '可利用限度', '林業用地', '農牧用地'],
    primaryModule: 'supplementary-note',
    title: '補註用地',
    desc: '依農業局山坡地查定清冊補註使用地類別作業SOP',
    badge: '清冊核處',
    summary:
      '依照《補註用地別.pdf》：依農業局檢送之山坡地可利用限度查定結果清冊，確認查定結果與航照相符後，發文囑託轄區地政事務所補註為農牧、林業或國土保安用地。',
    legalBasis: '製定非都市土地使用分區圖及編定各種使用地作業須知第9點'
  },
  {
    keywords: ['註銷編定', '廢止', '恢復原編定', '都市計畫範圍'],
    primaryModule: 'cancellation',
    title: '註銷編定',
    desc: '興辦事業廢止後註銷編定恢復原編定標準SOP',
    badge: '撤銷恢復',
    summary:
      '收受目的主管機關廢止或撤銷興辦公文後，【關鍵第一步】：務必先函請或簽會城鄉發展局查復是否屬都市計畫範圍！確認非都市土地方可囑託地所辦理註銷編定。',
    legalBasis: '非都市土地使用管制規則第37條'
  },
  {
    keywords: ['人陳案管', '陳情', '改分', '入案確認', '人民檢舉', '1999'],
    primaryModule: 'petition-management',
    title: '人陳案管',
    desc: '公文系統陳情案管簽收、改分、入案確認與發文SOP',
    badge: '公文規範',
    summary:
      '公文系統右上角【陳情案管】簽收。非主政業務務必速填改分表改分。決行後切勿直接發文，需至辦理區按【陳情案公文入案】確認結案後再發文！',
    legalBasis: '新北市政府各機關處理人民陳情案件作業要點'
  },
  {
    keywords: ['訴願', '訴訟', '答辯書', '20天', '行政訴訟', '委任狀', '行政救濟'],
    primaryModule: 'administrative-appeal',
    title: '訴願＆訴訟',
    desc: '20日辦理時效・訴願與行政訴訟全流程指引與公文函稿',
    badge: '法規時效',
    summary:
      '收受訴願書或訴訟起訴狀後起算 20 日內（含假日），務必檢具答辯書及證據卷宗至內政部或高等行政法院。答辯書撰寫完畢需經主管與法制專案同仁審閱，秘書室蓋府騎縫章。',
    legalBasis: '訴願法第14條、第58條、行政訴訟法第4條、第106條'
  },
  {
    keywords: ['專題報告', '殯葬', '窯業', '剩餘土石方', '運動場館', '停車場', '民宿', '漫畫', '影片', 'Podcast'],
    primaryModule: 'others',
    title: '專題報告庫',
    desc: '11 大專題研析・法規脈絡、實務案例、漫畫懶人包與解說影片',
    badge: '多媒體專題',
    summary:
      '完整收錄殯葬設施、窯業用地、營建剩餘土石方、運動場館、露天停車場、旅館民宿、國土同意使用、違規案件等 11 個深度專題報告，並附有高畫質漫畫懶人包與 YouTube 解說影片。',
    legalBasis: '新北市非都市土地實務專案研析報告'
  }
];

// 智慧匹配函數
export function matchLocalKnowledge(query: string): MatchedKnowledgeResult {
  const clean = query.trim().toLowerCase();
  if (!clean) {
    return {
      matchedModules: [],
      relatedTopics: [],
      suggestedFollowUps: ['更正編定要哪些證明文件？', '變更編定為什麼要先填列管表？', '國土功能分區會影響既有建地嗎？']
    };
  }

  // 評分匹配
  const scored = KNOWLEDGE_INDEX.map((item) => {
    let score = 0;
    for (const kw of item.keywords) {
      if (clean.includes(kw.toLowerCase())) {
        score += 3;
      }
    }
    if (clean.includes(item.title.toLowerCase())) score += 5;
    if (clean.includes(item.desc.toLowerCase())) score += 2;
    return { item, score };
  })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  const matchedModules: ActionCard[] = [];
  const addedIds = new Set<string>();

  for (const match of scored.slice(0, 3)) {
    if (!addedIds.has(match.item.primaryModule)) {
      addedIds.add(match.item.primaryModule);
      matchedModules.push({
        title: match.item.title,
        moduleId: match.item.primaryModule,
        desc: match.item.desc,
        badge: match.item.badge
      });
    }
  }

  // 若特別包含特定專案關鍵字，加入專題報告
  if (
    clean.includes('殯葬') ||
    clean.includes('寵物') ||
    clean.includes('窯業') ||
    clean.includes('土石') ||
    clean.includes('漫畫') ||
    clean.includes('影片')
  ) {
    if (!addedIds.has('others')) {
      matchedModules.push({
        title: '專題報告（含漫畫與影音）',
        moduleId: 'others',
        desc: '包含寵物殯葬設施與窯業用地之報告全文、漫畫懶人包與解說影片',
        badge: '多媒體專題'
      });
    }
  }

  // 若特別提到列管表
  if (clean.includes('列管表')) {
    if (!addedIds.has('change-designation')) {
      matchedModules.unshift({
        title: '變更編定（先填列管表）',
        moduleId: 'change-designation',
        desc: '標題旁點擊「先填列管表」可直接查看完整繕打教學',
        badge: '教學指引'
      });
    }
  }

  const directAnswer = scored.length > 0 ? scored[0].item.summary : undefined;

  const relatedTopics = scored.slice(0, 3).map((s) => s.item.title);

  const suggestedFollowUps = [
    '查看該業務審查 SOP 步驟',
    '查閱相關法規條文與判決',
    '開啟 NotebookLM 專題筆記庫'
  ];

  return {
    matchedModules,
    directAnswer,
    relatedTopics,
    suggestedFollowUps
  };
}
