import React, { useState } from 'react';
import {
  ArrowLeft,
  FileText,
  Scale,
  Building,
  Clock,
  ArrowDown,
  Paperclip,
  AlertCircle,
  FolderGit2,
  Wrench,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Search,
  BookMarked,
  Check,
  Copy,
  Compass,
  Printer
} from 'lucide-react';
import { OfficialDocDraftsSection } from './OfficialDocDraftsSection';
import { ChangeDesignationWizard } from './ChangeDesignationWizard';

interface ChangeDesignationDetailPageProps {
  onBack: () => void;
}

// 7 項流程詳細資料型別
interface ProcessStepDetail {
  stepNumber: number;
  name: string;
  isOptional?: boolean;
  item: string;
  notes?: string[];
  subNotes?: {
    category: string;
    items: string[];
  }[];
  attachments: {
    name: string;
    isAvailable: boolean;
    linkToTab?: 'drafts' | 'laws';
    targetDraftId?: string;
  }[];
}

// 依照附件檔案(變更編定.pdf) page 1 & 2 之「一般變更編定案件」資料
const GENERAL_PROCESS_STEPS: ProcessStepDetail[] = [
  {
    stepNumber: 1,
    name: '申請人送件',
    item: '核對應備文件(管制規則第 28、30 條)',
    notes: [
      '變更編定申請書、土地登記謄本、興辦事業計畫核准文件、環敏查詢結果、變更前主管機關同意文件等',
      '山坡地範圍須擬具水保計畫者，要檢附水保完工證明(管制規則第 48 條)'
    ],
    attachments: [
      { name: '尚未提供', isAvailable: false }
    ]
  },
  {
    stepNumber: 2,
    name: '會辦各單位+會勘+繳規費',
    item: '會同相關主管機關現場會勘',
    notes: [
      '將興辦原審意見填至變更編定審查表(避免重複會審)',
      '跟地所喬時間會勘',
      '發文通知申請人會勘+繳費+會審各單位(同一個公文)',
      '會勘要確認現況有無違規，另外須提審查會者，申請範圍要錄影(審查會要用)',
      '若現況違規使用，給違規承辦開處分書'
    ],
    attachments: [
      { name: '收費表', isAvailable: false },
      { name: '變更編定審查表', isAvailable: false },
      { name: '公文參考', isAvailable: true, linkToTab: 'drafts', targetDraftId: 'draft-1' }
    ]
  },
  {
    stepNumber: 3,
    name: '補正(非必要)',
    isOptional: true,
    item: '確認各單位意見有無補正事項',
    notes: [
      '全部意見回來後，一起開補正 15 天',
      '追蹤各單位回審查意見(超過時間要催辦)'
    ],
    attachments: [
      { name: '公文參考', isAvailable: true, linkToTab: 'drafts', targetDraftId: 'draft-2' }
    ]
  },
  {
    stepNumber: 4,
    name: '簽核',
    item: '簽准或駁回',
    notes: [
      '核准(簽稿併陳)：彙整各單位意見、變更編定審查表、山坡地審查表、繳費證明(規費+罰鍰)、處分書、會勘紀錄等等',
      '駁回：依送達證書所載日期隔日起算，文到 15 日內未補正或補正未完全者，就駁回。'
    ],
    attachments: [
      { name: '公文參考', isAvailable: true, linkToTab: 'drafts', targetDraftId: 'draft-3' }
    ]
  },
  {
    stepNumber: 5,
    name: '提審查會(非必要)',
    isOptional: true,
    item: '山坡地案件要提案經審議小組審查',
    notes: [
      '申請人若切結現階段無涉建築行為，單純變交通用地做道路者不用提會',
      '製作提會資料(要跟申請人要興辦事業計畫電子檔)',
      '等開會通知發出去後，發文給申請人通知審查會時間，請申請人和相關技師到場'
    ],
    attachments: [
      { name: '公文參考', isAvailable: true, linkToTab: 'drafts', targetDraftId: 'draft-4' }
    ]
  },
  {
    stepNumber: 6,
    name: '核准',
    item: '核准或駁回',
    subNotes: [
      {
        category: '免提會案件：發核准文或駁回',
        items: [
          '如涉及農變回饋金，請申請人繳納完畢後檢附證明文件來續辦異動登記',
          '要登錄土參、寫土參申請書、做異動序號(發文附件-給地所)'
        ]
      },
      {
        category: '提會案件：等會議紀錄簽准發文後，發文通知申請人結果',
        items: [
          '如涉及土地分割，請申請人先洽地所辦理土地分割後，再檢附分割好資料來續辦異動登記',
          '要登錄土參、寫土參申請書、做異動序號(發文附件-給地所)'
        ]
      }
    ],
    attachments: [
      { name: '土參申請書', isAvailable: false },
      { name: '公文參考', isAvailable: true, linkToTab: 'drafts', targetDraftId: 'draft-5' }
    ]
  },
  {
    stepNumber: 7,
    name: '異動',
    item: '請地所異動',
    notes: [
      '無涉及土地分割案件，於核准文直接副本請地所異動登記+登錄土參檔',
      '涉及土地分割案件，申請人辦竣分割後，檢附文件來續辦理異動登記+登錄土參檔'
    ],
    attachments: [
      { name: '公文參考', isAvailable: true, linkToTab: 'drafts', targetDraftId: 'draft-6' }
    ]
  }
];

// 依照使用者需求與附件檔案之「一併變更編定」4 大流程資料
const CONCURRENT_PROCESS_STEPS: ProcessStepDetail[] = [
  {
    stepNumber: 1,
    name: '申請人送件',
    item: '核對應備文件(管制規則第28、30條、變更編定執行要點第10點)',
    notes: [
      '變更編定申請書、土地登記謄本、興辦事業計畫核准文件、取得土地證明文件、環敏查詢結果、變更前主管機關同意文件等',
      '撥用土地需確認撥用計畫書內是否有勾選「撥用一併變更編定」',
      '免檢附水保完工證明(管制規則第48條)'
    ],
    attachments: [
      { name: '取得土地證明文件', isAvailable: false },
      { name: '興辦事業計畫核准文件', isAvailable: false },
      { name: '尚未提供', isAvailable: false }
    ]
  },
  {
    stepNumber: 2,
    name: '補正',
    item: '確認有無補正事項',
    notes: [
      '通常不會會辦各單位',
      '請申請人補正不會壓15天'
    ],
    attachments: [
      { name: '尚未提供', isAvailable: false }
    ]
  },
  {
    stepNumber: 3,
    name: '簽核',
    item: '簽准一併變更編定',
    notes: [
      '核准函(不用府簽)'
    ],
    attachments: [
      { name: '核准函 (公文參考)', isAvailable: true, linkToTab: 'drafts', targetDraftId: 'draft-5' }
    ]
  },
  {
    stepNumber: 4,
    name: '異動',
    item: '請地所異動',
    notes: [
      '無涉及土地分割案件，於核准文直接副本請地所異動登記+登錄土參檔',
      '涉及土地分割案件，申請人辦竣分割後，檢附文件來續辦理異動登記+登錄土參檔'
    ],
    attachments: [
      { name: '異動函 (公文參考)', isAvailable: true, linkToTab: 'drafts', targetDraftId: 'draft-6' }
    ]
  }
];

// 常用函釋資料結構
interface LegalInterpretation {
  id: string;
  itemNumber: number; // 項次 1 ~ 14
  statute: string; // 涉及法規
  content: string; // 內容摘要
  officialDoc: string; // 函釋文號
  year?: string;
  sourceDoc?: string; // 預留 PDF / 圖片檔案路徑或名稱
}

// 附件檔案 (變更編定.pdf 第 12 頁) 完整收錄之常見函釋清單
const COMMON_INTERPRETATIONS: LegalInterpretation[] = [
  {
    id: 'int-1',
    itemNumber: 1,
    statute: '管制規則第 28 條',
    content: '現有巷道得視為變更交通用地之興辦事業計畫',
    officialDoc: '內政部 90 年 8 月 15 日台內中地字第 9012237 號函'
  },
  {
    id: 'int-2',
    itemNumber: 2,
    statute: '管制規則第 28 條',
    content: '已興建農舍之農業用地變更編定',
    officialDoc: '內政部 112 年 6 月 29 日台內地字第 1120263528 號函'
  },
  {
    id: 'int-3',
    itemNumber: 3,
    statute: '管制規則第 30 條',
    content: '暫准放租水田、旱地辦理變更案件，免踐行森林法第 6 條第 2 項規定程序',
    officialDoc: '農業部 114 年 4 月 7 日農授林業字第 1140706873 號函'
  },
  {
    id: 'int-4',
    itemNumber: 4,
    statute: '管制規則第 30 條之 1、2、3',
    content: '申辦變更編定仍應依受理當時之相關規定辦理',
    officialDoc: '內政部 115 年 4 月 27 日內授國計字第 1150804194 號函'
  },
  {
    id: 'int-5',
    itemNumber: 5,
    statute: '管制規則第 32、33 條',
    content: '「夾雜」及「包圍」之認定，應由工業主管機關本於權責依法認定。',
    officialDoc: '內政部 95 年 12 月 22 日內授中辦地字第 0950055443 號函'
  },
  {
    id: 'int-6',
    itemNumber: 6,
    statute: '管制規則第 35-1 條',
    content: '凹入鄉村區「整體認定」範圍界線之認定方式',
    officialDoc: '內政部 94 年 9 月 12 日內授中辦地字第 0940726072 號函'
  },
  {
    id: 'int-7',
    itemNumber: 7,
    statute: '管制規則第 35 條',
    content: '「……經編定或變更編定為交通用地、水利用地……」所稱「經編定」之解釋',
    officialDoc: '內政部 97 年 2 月 4 日內授中辦地字第 0970722395 號令'
  },
  {
    id: 'int-8',
    itemNumber: 8,
    statute: '管制規則第 37 條',
    content: '適用疑義',
    officialDoc: '內政部國土管理署 114 年 12 月 5 日國署計字第 1141236321 號函'
  },
  {
    id: 'int-9',
    itemNumber: 9,
    statute: '管制規則第 52-1 條',
    content: '自來水公司設施免受 10 公頃限制',
    officialDoc: '內政部 92 年 10 月 24 日內授中辦地字第 0920017742 號函'
  },
  {
    id: 'int-10',
    itemNumber: 10,
    statute: '執行要點第 3 點',
    content: '非屬建築法第 7 條所稱之雜項工作物者，免查環敏',
    officialDoc: '內政部 94 年 4 月 29 日內授中辦地字第 0940724185 號函'
  },
  {
    id: 'int-11',
    itemNumber: 11,
    statute: '執行要點第 3 點',
    content: '公用地役關係現有巷道得免查環敏',
    officialDoc: '內政部 112 年 8 月 28 日台內地字第 1120264050 號函'
  },
  {
    id: 'int-12',
    itemNumber: 12,
    statute: '執行要點第 6 點',
    content: '無涉開發建築行為免會辦工務局',
    officialDoc: '內政部 100 年 4 月 22 日內授中辦地字第 1000042719 號函'
  },
  {
    id: 'int-13',
    itemNumber: 13,
    statute: '執行要點第 10 點',
    content: '管理機關之變更，性質與撥用相近，得按簡化作業程序辦理變更編定',
    officialDoc: '內政部 102 年 10 月 3 日內授中辦地字第 1026039158 號函'
  },
  {
    id: 'int-14',
    itemNumber: 14,
    statute: '執行要點第 10 點',
    content: '撥用計畫書漏列一併變更編定',
    officialDoc: '內政部 96 年 1 月 2 日內授中辦地字第 0950055810 號函'
  }
];

export const ChangeDesignationDetailPage: React.FC<ChangeDesignationDetailPageProps> = ({ onBack }) => {
  // 畫面 6 個按鈕主題導航
  const [activeTab, setActiveTab] = useState<'general' | 'concurrent' | 'laws' | 'drafts' | 'tool' | 'payment-steps'>('general');
  const [copiedPaymentDesc, setCopiedPaymentDesc] = useState<boolean>(false);

  // 「常用相關法令及函釋」上方 3 個子切換按鈕：
  // 1. 非都市土地使用管制規則 2. 非都市土地變更編定執行要點 3. 常見函釋
  const [activeLawSubTab, setActiveLawSubTab] = useState<'rules' | 'guidelines' | 'interpretations'>('rules');

  // 函釋搜尋/過濾關鍵字
  const [interpretationSearch, setInterpretationSearch] = useState<string>('');

  // 複製成功提示
  const [copiedNotice, setCopiedNotice] = useState<string | null>(null);

  // 一般變更編定案件：目前選取的流程步驟 (1~7)
  const [selectedStepNumber, setSelectedStepNumber] = useState<number>(1);

  // 一併變更編定案件：目前選取的流程步驟 (1~4)
  const [selectedConcurrentStepNumber, setSelectedConcurrentStepNumber] = useState<number>(1);

  // 公文範本目前選取 ID (draft-1 ~ draft-6)
  const [selectedDraftId, setSelectedDraftId] = useState<string>('draft-1');

  // 目前選取的流程步驟資料
  const currentStep = GENERAL_PROCESS_STEPS.find((s) => s.stepNumber === selectedStepNumber) || GENERAL_PROCESS_STEPS[0];
  const currentConcurrentStep = CONCURRENT_PROCESS_STEPS.find((s) => s.stepNumber === selectedConcurrentStepNumber) || CONCURRENT_PROCESS_STEPS[0];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-5">
      {/* 頂部標題與回上一頁 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ECE6DB]">
          <div className="flex items-center gap-3.5">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm sm:text-base font-semibold text-[#4A3E39] bg-[#F5EFE7] hover:bg-[#EAE2D7] border border-[#DDD5C7] rounded-xl transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>返回業務選單</span>
            </button>
            <div className="h-6 w-px bg-[#DDD5C7]" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif-tc font-semibold text-[#2D2623]">
                變更編定
              </h1>
              <p className="text-sm sm:text-base text-[#665A54] mt-0.5">
                新北市非都市土地變更編定作業指引
              </p>
            </div>
          </div>
        </div>

        {/* 畫面上 5 個主要按鈕 */}
        <div className="flex flex-wrap items-center gap-2.5 pt-4 text-sm sm:text-base">
          <button
            onClick={() => setActiveTab('general')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'general'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>一般變更編定案件</span>
          </button>

          <button
            onClick={() => setActiveTab('concurrent')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'concurrent'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>一併變更編定</span>
          </button>

          <button
            onClick={() => setActiveTab('laws')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'laws'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>常用相關法令及函釋</span>
          </button>

          <button
            onClick={() => setActiveTab('drafts')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'drafts'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>公文函稿參考</span>
          </button>

          <button
            onClick={() => setActiveTab('payment-steps')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'payment-steps'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>繳款書列印步驟</span>
          </button>

          <button
            onClick={() => setActiveTab('tool')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'tool'
                ? 'bg-[#5A4B43] text-white shadow-xs ring-2 ring-[#8C5A4B]/40'
                : 'bg-[#EFE7DC] text-[#5A4B43] hover:bg-[#E5DCD0] border border-[#DDD5C7]'
            }`}
          >
            <Compass className="w-4 h-4 text-amber-500" />
            <span>變更編定判斷精靈</span>
          </button>
        </div>
      </div>

      {/* 1. 一般變更編定案件 */}
      {activeTab === 'general' && (
        <div className="space-y-4">
          {/* 辦理時效橫幅 (依照 PDF page 1: 1.辦理時效：60 天) */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8C5A4B]/10 border border-[#8C5A4B]/30 flex items-center justify-center text-[#8C5A4B]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                    一般變更編定案件
                  </h2>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-[#8C5A4B] text-white shadow-xs">
                    <Clock className="w-3.5 h-3.5" />
                    辦理時效：60 天
                  </span>
                </div>
                <p className="text-sm text-[#665A54] mt-0.5">
                  依管制規則第 28、30 條辦理，請點選左側流程按鈕檢視各步驟之項目、注意事項及附件
                </p>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-[#735A4F] bg-[#FAF7F2] px-3 py-1.5 rounded-lg border border-[#DDD5C7] self-start sm:self-auto">
              共 7 項流程步驟
            </div>
          </div>

          {/* 直式流程 + 右側資訊卡片 (直式流程呈現，流程之間有箭頭，點開按鈕在右邊跳出資訊) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
            {/* 左側：7 項流程直式按鈕與箭頭 (佔 4 欄或 5 欄) */}
            <div className="md:col-span-5 lg:col-span-4 bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-4 shadow-xs space-y-2">
              <div className="flex items-center justify-between border-b border-[#ECE6DB] pb-3 mb-2">
                <span className="text-sm font-semibold text-[#4A3E39]">辦理流程步驟</span>
                <span className="text-xs text-[#735A4F]">點選檢視右側內容</span>
              </div>

              <div className="space-y-1.5">
                {GENERAL_PROCESS_STEPS.map((step, index) => {
                  const isSelected = selectedStepNumber === step.stepNumber;
                  const hasNext = index < GENERAL_PROCESS_STEPS.length - 1;

                  return (
                    <React.Fragment key={step.stepNumber}>
                      {/* 流程步驟按鈕 */}
                      <button
                        type="button"
                        onClick={() => setSelectedStepNumber(step.stepNumber)}
                        className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                          isSelected
                            ? 'bg-[#8C5A4B] text-white border-[#8C5A4B] shadow-sm'
                            : 'bg-[#FAF7F2] text-[#2D2623] border-[#DDD5C7] hover:bg-[#F2ECE3] hover:border-[#8C5A4B]/50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                              isSelected
                                ? 'bg-white text-[#8C5A4B]'
                                : 'bg-[#EAE2D7] text-[#5A4B43]'
                            }`}
                          >
                            {step.stepNumber}
                          </span>
                          <span className="font-semibold text-sm sm:text-base truncate">
                            {step.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0 ml-2">
                          {step.isOptional && (
                            <span
                              className={`text-[11px] px-1.5 py-0.5 rounded ${
                                isSelected
                                  ? 'bg-white/20 text-white'
                                  : 'bg-[#EAE2D7] text-[#735A4F]'
                              }`}
                            >
                              非必要
                            </span>
                          )}
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              isSelected
                                ? 'text-white translate-x-0.5'
                                : 'text-[#AAA095] group-hover:text-[#8C5A4B]'
                            }`}
                          />
                        </div>
                      </button>

                      {/* 流程之間的直式箭頭 */}
                      {hasNext && (
                        <div className="flex justify-center py-0.5">
                          <ArrowDown className="w-3.5 h-3.5 text-[#AAA095]" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* 右側：選取流程之詳細資訊卡片 (項目、注意事項、附件) */}
            <div className="md:col-span-7 lg:col-span-8 bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-5 sm:p-6 shadow-xs space-y-5">
              {/* 卡片標題區 */}
              <div className="border-b border-[#ECE6DB] pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#8C5A4B] text-white flex items-center justify-center text-sm font-bold">
                    {currentStep.stepNumber}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                    {currentStep.name}
                  </h3>
                  {currentStep.isOptional && (
                    <span className="px-2 py-0.5 text-xs font-semibold rounded bg-[#F5EFE7] text-[#8C5A4B] border border-[#DDD5C7]">
                      非必要程序
                    </span>
                  )}
                </div>
              </div>

              {/* 1. 項目 */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#8C5A4B]">
                  <CheckCircle className="w-4 h-4" />
                  <span>項目</span>
                </div>
                <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] text-base font-semibold text-[#2D2623]">
                  {currentStep.item}
                </div>
              </div>

              {/* 2. 注意事項 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#8C5A4B]">
                  <AlertCircle className="w-4 h-4" />
                  <span>注意事項</span>
                </div>

                {/* 單純條列注意事項 */}
                {currentStep.notes && currentStep.notes.length > 0 && (
                  <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2.5">
                    {currentStep.notes.map((note, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#3E342F] leading-relaxed">
                        <span className="font-bold text-[#8C5A4B] shrink-0 mt-0.5">
                          {idx + 1}.
                        </span>
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 分類式注意事項 (如 Step 6 免提會案件 vs. 提會案件) */}
                {currentStep.subNotes && currentStep.subNotes.length > 0 && (
                  <div className="space-y-3">
                    {currentStep.subNotes.map((sub, sIdx) => (
                      <div key={sIdx} className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2">
                        <div className="font-semibold text-base text-[#8C5A4B] border-b border-[#E5DDD0] pb-1.5">
                          {sub.category}
                        </div>
                        <div className="space-y-2 pt-1">
                          {sub.items.map((item, iIdx) => (
                            <div key={iIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#3E342F] leading-relaxed">
                              <span className="font-bold text-[#8C5A4B] shrink-0 mt-0.5">
                                {iIdx + 1}.
                              </span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. 附件 */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#8C5A4B]">
                  <Paperclip className="w-4 h-4" />
                  <span>附件</span>
                </div>
                <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] flex flex-wrap items-center gap-2.5">
                  {currentStep.attachments.map((att, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2">
                      {att.linkToTab ? (
                        <button
                          type="button"
                          onClick={() => {
                            setActiveTab(att.linkToTab!);
                            if (att.targetDraftId) {
                              setSelectedDraftId(att.targetDraftId);
                            }
                          }}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FFFFFF] hover:bg-[#F5EFE7] text-[#8C5A4B] text-sm sm:text-base font-bold rounded-lg border-2 border-[#8C5A4B]/40 hover:border-[#8C5A4B] transition-colors cursor-pointer shadow-2xs"
                        >
                          <FileText className="w-4 h-4 text-[#8C5A4B]" />
                          <span>{att.name}</span>
                          <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-[#8C5A4B]" />
                        </button>
                      ) : (
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border ${
                            att.isAvailable
                              ? 'bg-white text-[#2D2623] border-[#DDD5C7]'
                              : 'bg-[#F2ECE3] text-[#735A4F] border-[#DDD5C7]'
                          }`}
                        >
                          <Paperclip className="w-3.5 h-3.5 text-[#AAA095]" />
                          <span>{att.name}</span>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. 一併變更編定 */}
      {activeTab === 'concurrent' && (
        <div className="space-y-4">
          {/* 辦理時效橫幅 (辦理時效：一般公文 7 天，通常不會掛人民申請案) */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8C5A4B]/10 border border-[#8C5A4B]/30 flex items-center justify-center text-[#8C5A4B]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h2 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                    一併變更編定
                  </h2>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-[#8C5A4B] text-white shadow-xs">
                    <Clock className="w-3.5 h-3.5" />
                    辦理時效：一般公文 7 天
                  </span>
                  <span className="text-xs text-[#735A4F] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#DDD5C7]">
                    (通常不會掛人民申請案)
                  </span>
                </div>
                <p className="text-sm text-[#665A54] mt-0.5">
                  依「非都市土地變更編定執行要點」第 10 點規定，需用土地人申請徵收、協議價購或撥用土地時，於計畫書內敘明請求「一併准予變更編定」
                </p>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-[#735A4F] bg-[#FAF7F2] px-3 py-1.5 rounded-lg border border-[#DDD5C7] self-start sm:self-auto shrink-0">
              共 4 項流程步驟
            </div>
          </div>

          {/* 直式流程 + 右側資訊卡片 (4項流程直式呈現，流程之間有箭頭，點開按鈕在右邊跳出資訊) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
            {/* 左側：4 項流程直式按鈕與箭頭 */}
            <div className="md:col-span-5 lg:col-span-4 bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-4 shadow-xs space-y-2">
              <div className="flex items-center justify-between border-b border-[#ECE6DB] pb-3 mb-2">
                <span className="text-sm font-semibold text-[#4A3E39]">辦理流程步驟</span>
                <span className="text-xs text-[#735A4F]">點選檢視右側內容</span>
              </div>

              <div className="space-y-1.5">
                {CONCURRENT_PROCESS_STEPS.map((step, index) => {
                  const isSelected = selectedConcurrentStepNumber === step.stepNumber;
                  const hasNext = index < CONCURRENT_PROCESS_STEPS.length - 1;

                  return (
                    <React.Fragment key={step.stepNumber}>
                      {/* 流程步驟按鈕 */}
                      <button
                        type="button"
                        onClick={() => setSelectedConcurrentStepNumber(step.stepNumber)}
                        className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                          isSelected
                            ? 'bg-[#8C5A4B] text-white border-[#8C5A4B] shadow-sm'
                            : 'bg-[#FAF7F2] text-[#2D2623] border-[#DDD5C7] hover:bg-[#F2ECE3] hover:border-[#8C5A4B]/50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                              isSelected
                                ? 'bg-white text-[#8C5A4B]'
                                : 'bg-[#EAE2D7] text-[#5A4B43]'
                            }`}
                          >
                            {step.stepNumber}
                          </span>
                          <span className="font-semibold text-sm sm:text-base truncate">
                            {step.name}
                          </span>
                        </div>

                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isSelected
                              ? 'text-white translate-x-0.5'
                              : 'text-[#AAA095] group-hover:text-[#8C5A4B]'
                          }`}
                        />
                      </button>

                      {/* 流程之間的直式箭頭 */}
                      {hasNext && (
                        <div className="flex justify-center py-0.5">
                          <ArrowDown className="w-3.5 h-3.5 text-[#AAA095]" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* 右側：選取流程之詳細資訊卡片 (項目、注意事項、取得土地證明文件、附件) */}
            <div className="md:col-span-7 lg:col-span-8 bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-5 sm:p-6 shadow-xs space-y-5">
              {/* 卡片標題區 */}
              <div className="border-b border-[#ECE6DB] pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#8C5A4B] text-white flex items-center justify-center text-sm font-bold">
                    {currentConcurrentStep.stepNumber}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                    {currentConcurrentStep.name}
                  </h3>
                </div>
              </div>

              {/* 1. 項目 */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#8C5A4B]">
                  <CheckCircle className="w-4 h-4" />
                  <span>項目</span>
                </div>
                <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] text-base font-semibold text-[#2D2623]">
                  {currentConcurrentStep.item}
                </div>
              </div>

              {/* 2. 注意事項 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#8C5A4B]">
                  <AlertCircle className="w-4 h-4" />
                  <span>注意事項</span>
                </div>

                {currentConcurrentStep.notes && currentConcurrentStep.notes.length > 0 && (
                  <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2.5">
                    {currentConcurrentStep.notes.map((note, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#3E342F] leading-relaxed">
                        <span className="font-bold text-[#8C5A4B] shrink-0 mt-0.5">
                          {idx + 1}.
                        </span>
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. 在「申請人送件」資訊裡面補充【取得土地證明文件】，並附上圖片內容 */}
              {currentConcurrentStep.stepNumber === 1 && (
                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#8C5A4B]">
                    <BookOpen className="w-4 h-4" />
                    <span>【取得土地證明文件】法令依據與說明</span>
                  </div>

                  <div className="bg-[#FAF7F2] rounded-xl border-2 border-[#DDD5C7] p-4 sm:p-5 space-y-4">
                    {/* 頂部法令依據大標題（依圖片設計呈現） */}
                    <div className="text-center pb-3 border-b border-[#E5DDD0]">
                      <h4 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1E3A8A]">
                        法令依據
                      </h4>
                      <p className="text-base sm:text-lg font-bold text-[#1E3A8A] mt-1">
                        非都市土地變更編定執行要點第11點規定：
                      </p>
                    </div>

                    {/* (1) 條文內容 */}
                    <div className="p-4 bg-white rounded-xl border border-[#DDD5C7] space-y-2">
                      <div className="flex items-start gap-2 text-sm sm:text-base text-[#1F2937] leading-relaxed">
                        <span className="font-bold text-[#1E3A8A] shrink-0 mt-0.5">•</span>
                        <div>
                          依土徵條例第 3 條規定得徵收之土地，以協議價購或其他方式取得者；或
                          <span className="font-bold text-[#DC2626]">國營公用事業</span>
                          主管機關許可興辦之事業，以
                          <span className="font-bold text-[#DC2626]">一般價購、專案讓售或其他方式取得公有土地者</span>
                          ，應檢附奉准興辦事業計畫及已達成協議價購、一般價購、專案讓售或其他取得土地之文件，
                          <span className="font-bold text-[#DC2626]">比照前項規定</span>
                          ，逕向直轄市或縣（市）政府申請變更編定（第 2 項）。
                        </div>
                      </div>
                    </div>

                    {/* (2) 「其他方式取得者」 */}
                    <div className="p-3.5 bg-white rounded-xl border border-[#DDD5C7] space-y-1.5">
                      <div className="flex items-start gap-2 text-sm sm:text-base text-[#15803D] font-medium leading-relaxed">
                        <span className="font-bold shrink-0 mt-0.5">—</span>
                        <div>
                          <span className="font-bold">「其他方式取得者」</span>
                          ：租用、設定地上權、捐贈、聯合開發、無償 提供使用等。（土地徵收作業手冊第 2 章－柒一二）
                        </div>
                      </div>
                    </div>

                    {/* (3) 依法得徵收之土地認定 */}
                    <div className="p-3.5 bg-white rounded-xl border border-[#DDD5C7] space-y-1.5">
                      <div className="flex items-start gap-2 text-sm sm:text-base text-[#374151] leading-relaxed">
                        <span className="font-bold text-[#6B7280] shrink-0 mt-0.5">—</span>
                        <div>
                          土地徵收條例第 3 條所列各款事業所需之土地，或其他法律規定得予徵收之土地，均為「依法得徵收之土地」，如認定有疑義時，應由需用土地人及直轄市、縣（市）地政主管機關協助認定之。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. 附件 */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#8C5A4B]">
                  <Paperclip className="w-4 h-4" />
                  <span>附件</span>
                </div>
                <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] flex flex-wrap items-center gap-2.5">
                  {currentConcurrentStep.attachments.map((att, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2">
                      {att.linkToTab ? (
                        <button
                          type="button"
                          onClick={() => {
                            setActiveTab(att.linkToTab!);
                            if (att.targetDraftId) {
                              setSelectedDraftId(att.targetDraftId);
                            }
                          }}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FFFFFF] hover:bg-[#F5EFE7] text-[#8C5A4B] text-sm sm:text-base font-bold rounded-lg border-2 border-[#8C5A4B]/40 hover:border-[#8C5A4B] transition-colors cursor-pointer shadow-2xs"
                        >
                          <FileText className="w-4 h-4 text-[#8C5A4B]" />
                          <span>{att.name}</span>
                          <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-[#8C5A4B]" />
                        </button>
                      ) : (
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border ${
                            att.isAvailable
                              ? 'bg-white text-[#2D2623] border-[#DDD5C7]'
                              : 'bg-[#F2ECE3] text-[#735A4F] border-[#DDD5C7]'
                          }`}
                        >
                          <Paperclip className="w-3.5 h-3.5 text-[#AAA095]" />
                          <span>{att.name}</span>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. 常用相關法令及函釋 */}
      {activeTab === 'laws' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-5 sm:p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ECE6DB] pb-4">
            <div className="flex items-center gap-2.5">
              <Scale className="w-5 h-5 text-[#8C5A4B]" />
              <div>
                <h2 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                  常用相關法令及函釋
                </h2>
                <p className="text-xs sm:text-sm text-[#735A4F] mt-0.5">
                  收錄管制規則、執行要點重點條文及實務關鍵函釋
                </p>
              </div>
            </div>
          </div>

          {/* 上方 3 個分類切換按鈕 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button
              type="button"
              onClick={() => setActiveLawSubTab('rules')}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                activeLawSubTab === 'rules'
                  ? 'bg-[#8C5A4B] text-white border-[#8C5A4B] shadow-sm'
                  : 'bg-[#FAF7F2] text-[#2D2623] border-[#DDD5C7] hover:bg-[#F2ECE3]'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <BookOpen className={`w-5 h-5 shrink-0 ${activeLawSubTab === 'rules' ? 'text-white' : 'text-[#8C5A4B]'}`} />
                <div className="min-w-0">
                  <div className="font-semibold text-sm sm:text-base truncate">
                    非都市土地使用管制規則
                  </div>
                  <div className={`text-xs truncate ${activeLawSubTab === 'rules' ? 'text-white/80' : 'text-[#735A4F]'}`}>
                    收錄第 28、30、35、48、49-1、52-1 條
                  </div>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeLawSubTab === 'rules' ? 'rotate-90 sm:rotate-0' : ''}`} />
            </button>

            <button
              type="button"
              onClick={() => setActiveLawSubTab('guidelines')}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                activeLawSubTab === 'guidelines'
                  ? 'bg-[#8C5A4B] text-white border-[#8C5A4B] shadow-sm'
                  : 'bg-[#FAF7F2] text-[#2D2623] border-[#DDD5C7] hover:bg-[#F2ECE3]'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <BookMarked className={`w-5 h-5 shrink-0 ${activeLawSubTab === 'guidelines' ? 'text-white' : 'text-[#8C5A4B]'}`} />
                <div className="min-w-0">
                  <div className="font-semibold text-sm sm:text-base truncate">
                    非都市土地變更編定執行要點
                  </div>
                  <div className={`text-xs truncate ${activeLawSubTab === 'guidelines' ? 'text-white/80' : 'text-[#735A4F]'}`}>
                    收錄第 3、4、8、9、10 點
                  </div>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeLawSubTab === 'guidelines' ? 'rotate-90 sm:rotate-0' : ''}`} />
            </button>

            <button
              type="button"
              onClick={() => setActiveLawSubTab('interpretations')}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                activeLawSubTab === 'interpretations'
                  ? 'bg-[#8C5A4B] text-white border-[#8C5A4B] shadow-sm'
                  : 'bg-[#FAF7F2] text-[#2D2623] border-[#DDD5C7] hover:bg-[#F2ECE3]'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Scale className={`w-5 h-5 shrink-0 ${activeLawSubTab === 'interpretations' ? 'text-white' : 'text-[#8C5A4B]'}`} />
                <div className="min-w-0">
                  <div className="font-semibold text-sm sm:text-base truncate">
                    常見函釋
                  </div>
                  <div className={`text-xs truncate ${activeLawSubTab === 'interpretations' ? 'text-white/80' : 'text-[#735A4F]'}`}>
                    內政部、農業部歷年實務解釋
                  </div>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeLawSubTab === 'interpretations' ? 'rotate-90 sm:rotate-0' : ''}`} />
            </button>
          </div>

          {/* 下方對應切換內容 */}
          {/* 子分類 1: 非都市土地使用管制規則 */}
          {activeLawSubTab === 'rules' && (
            <div className="p-5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-4 animate-in fade-in duration-150">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5DDD0] pb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#8C5A4B]" />
                  <span className="font-semibold text-lg text-[#2D2623]">
                    非都市土地使用管制規則
                  </span>
                  <span className="text-xs bg-white text-[#735A4F] px-2 py-0.5 rounded-md border border-[#DDD5C7]">
                    重點法條摘述
                  </span>
                </div>
                <a
                  href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0060013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8C5A4B] hover:text-[#704639] bg-white px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:border-[#8C5A4B] transition-colors"
                >
                  <span>全國法規資料庫完整條文</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 bg-white rounded-xl border border-[#DDD5C7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-[#8C5A4B]">第 28 條</span>
                    <span className="text-xs bg-[#FAF7F2] text-[#735A4F] px-2 py-0.5 rounded border border-[#E5DDD0]">送件審查</span>
                  </div>
                  <div className="font-semibold text-sm sm:text-base text-[#2D2623]">
                    申請變更編定應檢附文件
                  </div>
                  <p className="text-xs sm:text-sm text-[#665A54] leading-relaxed">
                    明定申請變更編定應檢具申請書、土地登記謄本、興辦事業計畫核准文件、取得土地證明文件、第一級環境敏感地區查詢結果等法定書件。
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#DDD5C7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-[#8C5A4B]">第 30 條</span>
                    <span className="text-xs bg-[#FAF7F2] text-[#735A4F] px-2 py-0.5 rounded border border-[#E5DDD0]">機關同意</span>
                  </div>
                  <div className="font-semibold text-sm sm:text-base text-[#2D2623]">
                    應取得變更前目的事業主管機關及有關機關同意
                  </div>
                  <p className="text-xs sm:text-sm text-[#B45309] font-medium leading-relaxed bg-[#FEF3C7]/40 p-2 rounded-lg border border-[#FDE68A]">
                    ※ 重點備註：林業用地變更須徵得中央（農業部）同意；並於核准後函請地政事務所辦理土參檔加註。
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#DDD5C7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-[#8C5A4B]">第 35 條</span>
                    <span className="text-xs bg-[#FAF7F2] text-[#735A4F] px-2 py-0.5 rounded border border-[#E5DDD0]">零星狹小</span>
                  </div>
                  <div className="font-semibold text-sm sm:text-base text-[#2D2623]">
                    毗鄰甲建、乙建、丙建、住宅用之零星或狹小土地變更編定
                  </div>
                  <p className="text-xs sm:text-sm text-[#665A54] leading-relaxed">
                    甲種、乙種、丙種建築用地或住宅使用特定目的事業用地相鄰之零星或狹小土地變更編定基準及認定規定。
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#DDD5C7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-[#8C5A4B]">第 35-1 條</span>
                    <span className="text-xs bg-[#FAF7F2] text-[#735A4F] px-2 py-0.5 rounded border border-[#E5DDD0]">鄉村區毗鄰</span>
                  </div>
                  <div className="font-semibold text-sm sm:text-base text-[#2D2623]">
                    毗鄰鄉村區之零星或狹小土地變更編定
                  </div>
                  <p className="text-xs sm:text-sm text-[#665A54] leading-relaxed">
                    毗鄰鄉村區之零星狹小土地，得依本條規定申請變更編定為乙種建築用地之要件及認定。
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#DDD5C7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-[#8C5A4B]">第 48 條</span>
                    <span className="text-xs bg-[#DC2626]/10 text-[#DC2626] px-2 py-0.5 rounded border border-[#DC2626]/30 font-medium">水保重要</span>
                  </div>
                  <div className="font-semibold text-sm sm:text-base text-[#2D2623]">
                    山坡地範圍申請變更編定應檢附水保完工證明書
                  </div>
                  <p className="text-xs sm:text-sm text-[#665A54] leading-relaxed">
                    山坡地範圍內非都市土地申請變更編定，應擬具水土保持計畫者，須於取得水土保持完工證明書後始得續辦。
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#DDD5C7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-[#8C5A4B]">第 49 條之 1</span>
                    <span className="text-xs bg-[#FAF7F2] text-[#735A4F] px-2 py-0.5 rounded border border-[#E5DDD0]">專案審查會</span>
                  </div>
                  <div className="font-semibold text-sm sm:text-base text-[#2D2623]">
                    山坡地變更編定案件應組專案小組審查
                  </div>
                  <p className="text-xs sm:text-sm text-[#665A54] leading-relaxed">
                    直轄市或縣（市）政府受理山坡地變更編定案件，除符合免提會情形外，應邀集相關機關組專案小組現場勘查並審查。
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#DDD5C7] space-y-1.5 md:col-span-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-[#8C5A4B]">第 52 條之 1</span>
                    <span className="text-xs bg-[#FAF7F2] text-[#735A4F] px-2 py-0.5 rounded border border-[#E5DDD0]">面積規模門檻</span>
                  </div>
                  <div className="font-semibold text-sm sm:text-base text-[#2D2623]">
                    山坡地興辦事業計畫面積原則不得少於 10 公頃
                  </div>
                  <p className="text-xs sm:text-sm text-[#665A54] leading-relaxed">
                    山坡地範圍內申請變更編定為特定目的事業用地或其他使用地，其興辦事業計畫土地面積原則不得少於 10 公頃（法定免受限制情形除外）。
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 子分類 2: 非都市土地變更編定執行要點 */}
          {activeLawSubTab === 'guidelines' && (
            <div className="p-5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-4 animate-in fade-in duration-150">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5DDD0] pb-3">
                <div className="flex items-center gap-2">
                  <BookMarked className="w-5 h-5 text-[#8C5A4B]" />
                  <span className="font-semibold text-lg text-[#2D2623]">
                    非都市土地變更編定執行要點
                  </span>
                  <span className="text-xs bg-white text-[#735A4F] px-2 py-0.5 rounded-md border border-[#DDD5C7]">
                    重點點次摘述
                  </span>
                </div>
                <a
                  href="https://glrs.moi.gov.tw/LawContent.aspx?id=FL003207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8C5A4B] hover:text-[#704639] bg-white px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:border-[#8C5A4B] transition-colors"
                >
                  <span>內政部主管法規系統完整條文</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 bg-white rounded-xl border border-[#DDD5C7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-[#8C5A4B]">第 3 點</span>
                    <span className="text-xs bg-[#FAF7F2] text-[#735A4F] px-2 py-0.5 rounded border border-[#E5DDD0]">附錄一之二查核</span>
                  </div>
                  <div className="font-semibold text-sm sm:text-base text-[#2D2623]">
                    興辦事業計畫查核項目落實
                  </div>
                  <p className="text-xs sm:text-sm text-[#665A54] leading-relaxed">
                    目的事業主管機關應於核准文件內敘明已完成附錄一之二所列查詢項目之查核，尚無各該項目法令規定之禁、限建及不得設置或興辦情事。
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#DDD5C7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-[#8C5A4B]">第 4 點</span>
                    <span className="text-xs bg-[#FAF7F2] text-[#735A4F] px-2 py-0.5 rounded border border-[#E5DDD0]">免附計畫案件</span>
                  </div>
                  <div className="font-semibold text-sm sm:text-base text-[#2D2623]">
                    免檢附興辦事業計畫案件之環敏查核
                  </div>
                  <p className="text-xs sm:text-sm text-[#665A54] leading-relaxed">
                    免檢附興辦事業計畫核准文件之變更編定案件，仍應依規定查詢有無涉及第一級環境敏感地區。
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#DDD5C7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-[#8C5A4B]">第 8 點</span>
                    <span className="text-xs bg-[#FAF7F2] text-[#735A4F] px-2 py-0.5 rounded border border-[#E5DDD0]">特目用地</span>
                  </div>
                  <div className="font-semibold text-sm sm:text-base text-[#2D2623]">
                    申請變更編定為特定目的事業用地項目
                  </div>
                  <p className="text-xs sm:text-sm text-[#665A54] leading-relaxed">
                    表列各項重大建設、公共事業或特定目的事業設施得申請變更編定為特定目的事業用地之具體項目與規範。
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#DDD5C7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-[#8C5A4B]">第 9 點</span>
                    <span className="text-xs bg-[#FAF7F2] text-[#735A4F] px-2 py-0.5 rounded border border-[#E5DDD0]">土參註記</span>
                  </div>
                  <div className="font-semibold text-sm sm:text-base text-[#2D2623]">
                    登錄於土地參考資訊檔（土參檔）
                  </div>
                  <p className="text-xs sm:text-sm text-[#665A54] leading-relaxed">
                    變更編定核准後，直轄市、縣（市）政府應囑託地政事務所於土地參考資訊檔（代碼 D8）加註核准文號、限制事業使用用途及應行注意事項。
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border-2 border-[#8C5A4B]/40 space-y-1.5 md:col-span-2 bg-[#FAF7F2]">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-[#8C5A4B]">第 10 點（核心現行法規）</span>
                    <span className="text-xs bg-[#8C5A4B] text-white px-2 py-0.5 rounded font-semibold">一併變更編定</span>
                  </div>
                  <div className="font-semibold text-sm sm:text-base text-[#2D2623]">
                    一併准予變更編定與土地取得證明文件規範
                  </div>
                  <div className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed space-y-1 mt-1">
                    <p>
                      • 需用土地人申請徵收、協議價購或撥用土地時，於計畫書內敘明請求一併准予變更編定。
                    </p>
                    <p>
                      • 第 2 項：依土徵條例第 3 條規定得徵收之土地，以協議價購或其他方式（租用、設定地上權、捐贈、聯合開發、無償提供等）取得者；或國營公用事業取得公有土地者，得檢附奉准興辦計畫及取得土地文件逕向直轄市、縣（市）政府申請一併變更編定。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 子分類 3: 常見函釋 */}
          {activeLawSubTab === 'interpretations' && (
            <div className="p-4 sm:p-6 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-4 animate-in fade-in duration-150">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5DDD0] pb-3">
                <div className="flex items-center gap-2.5">
                  <Scale className="w-6 h-6 text-[#8C5A4B]" />
                  <span className="font-bold text-xl sm:text-2xl text-[#2D2623]">
                    常見實務函釋彙編
                  </span>
                </div>

                {/* 搜尋過濾框 */}
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#8C5A4B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={interpretationSearch}
                    onChange={(e) => setInterpretationSearch(e.target.value)}
                    placeholder="搜尋法規、內容或文號..."
                    className="w-full pl-10 pr-3.5 py-2 text-sm sm:text-base bg-white border border-[#DDD5C7] rounded-lg focus:outline-none focus:border-[#8C5A4B] placeholder-[#AAA095]"
                  />
                </div>
              </div>

              {/* 複製成功提示氣泡 */}
              {copiedNotice && (
                <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-lg text-sm sm:text-base font-semibold flex items-center gap-2.5 animate-in fade-in duration-150">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{copiedNotice}</span>
                </div>
              )}

              {/* 函釋清單卡片 */}
              <div className="space-y-3.5">
                {COMMON_INTERPRETATIONS.filter((item) => {
                  if (!interpretationSearch.trim()) return true;
                  const q = interpretationSearch.toLowerCase();
                  return (
                    item.statute.toLowerCase().includes(q) ||
                    item.content.toLowerCase().includes(q) ||
                    item.officialDoc.toLowerCase().includes(q) ||
                    item.itemNumber.toString().includes(q)
                  );
                }).map((item) => (
                  <div
                    key={item.id}
                    className="p-4 sm:p-5 bg-white rounded-xl border border-[#DDD5C7] hover:border-[#8C5A4B]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 shadow-2xs"
                  >
                    <div className="space-y-2 flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm sm:text-base font-bold px-3 py-1 rounded-md bg-[#8C5A4B] text-white">
                          項次 {item.itemNumber}
                        </span>
                        <span className="text-sm sm:text-base font-semibold bg-[#8C5A4B]/10 text-[#8C5A4B] px-3 py-1 rounded-md border border-[#8C5A4B]/20">
                          {item.statute}
                        </span>
                      </div>

                      <div className="font-semibold text-base sm:text-lg text-[#2D2623] leading-relaxed">
                        {item.content}
                      </div>

                      <div className="flex items-center gap-2 text-sm sm:text-base text-[#5A4B43] flex-wrap">
                        <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#8C5A4B] shrink-0" />
                        <span className="font-mono font-medium">{item.officialDoc}</span>
                      </div>
                    </div>

                    {/* 操作按鈕：只留下複製文號，字體按鈕明顯加大 */}
                    <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard?.writeText(item.officialDoc);
                          setCopiedNotice(`已複製項次 ${item.itemNumber} 文號：${item.officialDoc}`);
                          setTimeout(() => setCopiedNotice(null), 2500);
                        }}
                        className="px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base font-bold text-[#5A4B43] hover:text-[#2D2623] bg-[#FAF7F2] hover:bg-[#F2ECE3] border-2 border-[#DDD5C7] hover:border-[#8C5A4B] rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-xs active:scale-95"
                        title="複製文號"
                      >
                        <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-[#8C5A4B] shrink-0" />
                        <span className="tracking-wide">複製文號</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* 找不到結果之提示 */}
              {COMMON_INTERPRETATIONS.filter((item) => {
                if (!interpretationSearch.trim()) return true;
                const q = interpretationSearch.toLowerCase();
                return (
                  item.statute.toLowerCase().includes(q) ||
                  item.content.toLowerCase().includes(q) ||
                  item.officialDoc.toLowerCase().includes(q) ||
                  item.itemNumber.toString().includes(q)
                );
              }).length === 0 && (
                <div className="p-8 text-center text-sm text-[#735A4F] bg-white rounded-xl border border-dashed border-[#DDD5C7]">
                  查無符合「{interpretationSearch}」的函釋資料，請嘗試其他關鍵字。
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 4. 公文函稿參考 */}
      {activeTab === 'drafts' && (
        <OfficialDocDraftsSection
          selectedDraftId={selectedDraftId}
          onSelectDraftId={setSelectedDraftId}
        />
      )}

      {/* 5. 變更編定判斷精靈 */}
      {activeTab === 'tool' && (
        <ChangeDesignationWizard />
      )}

      {/* 6. 繳款書列印步驟 */}
      {activeTab === 'payment-steps' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
          <div className="border-b border-[#ECE6DB] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#2D2623] flex items-center gap-2.5">
                <Printer className="w-6 h-6 text-[#8C5A4B]" />
                <span>變更編定繳款書列印步驟</span>
              </h2>
              <p className="text-sm text-[#7D7065] mt-1">
                臺灣銀行公庫服務網公務預算收入繳款書製單、填表與核章發文作業指引
              </p>
            </div>
            <a
              href="https://ept.bot.com.tw/EPTBP/login/Login.action?city=027"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#8C5A4B] hover:bg-[#734437] transition-all shadow-xs cursor-pointer self-start sm:self-auto shrink-0"
            >
              <span>前往台灣銀行公庫服務網</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* 系統路徑與操作流程提示 */}
          <div className="p-4 sm:p-5 bg-[#FAF7F2] border-2 border-[#E4DCC8] rounded-xl space-y-3">
            <div className="text-xs sm:text-sm font-bold text-[#8C5A4B] flex items-center gap-1.5">
              <span>系統操作路徑</span>
            </div>
            <div className="flex items-center flex-wrap gap-2 text-sm sm:text-base font-semibold text-[#1F3864]">
              <span className="px-3 py-1 bg-white rounded-lg border border-[#DDD5C7]">台灣銀行公庫服務網</span>
              <span className="text-[#8C5A4B]">➔</span>
              <span className="px-3 py-1 bg-white rounded-lg border border-[#DDD5C7]">表單製作</span>
              <span className="text-[#8C5A4B]">➔</span>
              <span className="px-3 py-1 bg-white rounded-lg border border-[#DDD5C7]">公務預算收入繳款書</span>
              <span className="text-[#8C5A4B]">➔</span>
              <span className="px-3 py-1 bg-[#8C5A4B] text-white rounded-lg">新表單</span>
            </div>
          </div>

          {/* 欄位填寫說明清單 (依 PDF 逐項對齊) */}
          <div className="space-y-4">
            <div className="font-bold text-base sm:text-lg text-[#2D2623] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8C5A4B]" />
              <span>新表單必填欄位指引</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="p-4 bg-white rounded-xl border-2 border-[#E4DCC8] space-y-1">
                <div className="text-xs font-bold text-[#7D7065]">收入機關代號及名稱</div>
                <div className="text-base font-bold text-[#1F3864]">選【地政局編定管制科】</div>
              </div>

              <div className="p-4 bg-white rounded-xl border-2 border-[#E4DCC8] space-y-1">
                <div className="text-xs font-bold text-[#7D7065]">預算科目代號及名稱</div>
                <div className="text-base font-bold text-[#1F3864]">自己打【審查費】</div>
              </div>

              <div className="p-4 bg-white rounded-xl border-2 border-[#E4DCC8] space-y-1">
                <div className="text-xs font-bold text-[#7D7065]">繳款人或繳款機關</div>
                <div className="text-base font-bold text-[#1F3864]">填申請人（如：王大明）</div>
              </div>

              <div className="p-4 bg-white rounded-xl border-2 border-[#E4DCC8] space-y-1">
                <div className="text-xs font-bold text-[#7D7065]">金額（依案件類型收費，非固定13,000元）</div>
                <div className="text-base font-bold text-[#8C5A4B]">
                  依案件類型收費（13,000 / 10,000 / 5,000 / 3,000 元或免繳，詳見下方圖表）
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border-2 border-[#E4DCC8] space-y-1 md:col-span-2">
                <div className="text-xs font-bold text-[#7D7065]">公文文號</div>
                <div className="text-base font-bold text-[#1F3864]">排勘文號</div>
              </div>

              <div className="p-4 bg-white rounded-xl border-2 border-[#E4DCC8] space-y-2 md:col-span-2">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-[#7D7065]">說明事項（文號 ＋ 案由）</div>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard?.writeText('1120626636，林正道申請本市雙溪區平林段內平林小段 303、303-1、304-3 地號等 3 筆土地，面積 0.2934 公頃，擬由一般農業區農牧用地變更編定為同區特定目的事業用地、交通用地一案。');
                      setCopiedPaymentDesc(true);
                      setTimeout(() => setCopiedPaymentDesc(false), 2000);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C5A4B] hover:underline cursor-pointer"
                  >
                    {copiedPaymentDesc ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>已複製範例</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>複製範例案由</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#DDD5C7] text-xs sm:text-sm text-[#3E342F] font-mono leading-relaxed select-text">
                  1120626636，林正道申請本市雙溪區平林段內平林小段 303、303-1、304-3 地號等 3 筆土地，面積 0.2934 公頃，擬由一般農業區農牧用地變更編定為同區特定目的事業用地、交通用地一案。
                </div>
              </div>
            </div>

            {/* 變更編定審查費收費標準圖檔直接貼上 */}
            <div className="border-2 border-[#8C5A4B]/40 rounded-xl overflow-hidden bg-white shadow-sm">
              <div className="bg-[#8C5A4B] text-white px-3.5 py-2 text-xs sm:text-sm font-bold flex items-center justify-between">
                <span>【變更編定審查費收費標準】依案件類型收費（非固定13,000元）</span>
                <a
                  href="/change_fee_standards_image.svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs bg-amber-400 text-stone-900 hover:bg-amber-300 px-2 py-0.5 rounded font-bold transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>檢視圖檔</span>
                </a>
              </div>
              <div className="p-3 sm:p-5 bg-[#FAF7F2] flex justify-center">
                <div className="max-w-2xl w-full bg-white p-2 rounded-xl border border-[#DDD5C7] shadow-xs">
                  <img
                    src="/change_fee_standards_image.svg"
                    alt="非都市土地變更編定審查費收費標準（依案件類型收費）"
                    className="w-full h-auto block rounded select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 作業步驟流程軸 */}
          <div className="p-5 bg-[#FAF7F2] border-2 border-[#E4DCC8] rounded-xl space-y-4">
            <div className="font-bold text-base sm:text-lg text-[#2D2623] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8C5A4B]" />
              <span>製單與核章發文完整作業程序</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1">
                <span className="font-bold text-[#8C5A4B] font-mono text-sm">步驟 1</span>
                <div className="font-bold text-[#1F3864]">新增細項</div>
                <p className="text-[#665A54] text-xs">依前開資料輸入各欄位後點選新增細項</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1">
                <span className="font-bold text-[#8C5A4B] font-mono text-sm">步驟 2</span>
                <div className="font-bold text-[#1F3864]">暫存</div>
                <p className="text-[#665A54] text-xs">資料儲存於公庫系統中暫存備查</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1">
                <span className="font-bold text-[#8C5A4B] font-mono text-sm">步驟 3</span>
                <div className="font-bold text-[#1F3864]">公文決行後</div>
                <p className="text-[#665A54] text-xs">排勘公文完成核決後，接續產製繳款書</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1">
                <span className="font-bold text-[#8C5A4B] font-mono text-sm">步驟 4</span>
                <div className="font-bold text-[#1F3864]">存檔後預覽 ➔ 製單</div>
                <p className="text-[#665A54] text-xs">進入系統確認資料正確無誤後產製單據</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1">
                <span className="font-bold text-[#8C5A4B] font-mono text-sm">步驟 5</span>
                <div className="font-bold text-[#1F3864]">列印（單面列印）</div>
                <p className="text-[#665A54] text-xs">⚠️ 務必採用單面列印繳款單據</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1">
                <span className="font-bold text-[#8C5A4B] font-mono text-sm">步驟 6</span>
                <div className="font-bold text-[#1F3864]">自己蓋章（出納/製單人）</div>
                <p className="text-[#665A54] text-xs">由承辦人在單據上蓋 3 個位置職章</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1 sm:col-span-2 lg:col-span-2">
                <span className="font-bold text-[#8C5A4B] font-mono text-sm">步驟 7</span>
                <div className="font-bold text-[#1F3864]">給股長蓋章（主管）</div>
                <p className="text-[#665A54] text-xs">送主管（股長）於單據上蓋 3 個位置主管章</p>
              </div>

              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-300 space-y-1">
                <span className="font-bold text-emerald-800 font-mono text-sm">步驟 8</span>
                <div className="font-bold text-emerald-900">發文完成</div>
                <p className="text-emerald-700 text-xs">繳款書隨排勘公文併同封發送達申請人</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
