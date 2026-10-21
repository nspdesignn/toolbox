import React, { useState } from 'react';
import {
  ArrowLeft,
  Clock,
  ArrowDown,
  Paperclip,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Scale,
  FileText,
  Search,
  Check,
  Copy,
  ExternalLink,
  ShieldAlert,
  Gavel,
  BookOpen,
  Send,
  Building,
  UserCheck,
  Sliders
} from 'lucide-react';
import { AdministrativeSelfCheckTool } from './AdministrativeSelfCheckTool';

interface AdministrativeAppealDetailPageProps {
  onBack: () => void;
}

// 流程步驟型別定義
interface ProcessStepDetail {
  stepNumber: number;
  name: string;
  isOptional?: boolean;
  item: string;
  notes: string[];
  attachments: {
    name: string;
    isAvailable: boolean;
    linkToTab?: 'drafts' | 'laws';
    targetDraftId?: string;
  }[];
}

// 一、訴願案件流程（依照附件《訴願訴訟.pdf》第 1、2 頁）
const APPEAL_PROCESS_STEPS: ProcessStepDetail[] = [
  {
    stepNumber: 1,
    name: '訴願人送訴願書',
    item: '訴願人送訴願書',
    notes: [
      '收到訴願書後起算 20 日內(含假日)，檢具「訴願書正本」、答辯書、證據至內政部。',
      '若訴願書未具訴願理由，可直接先將「訴願書正本」送至內政部，不用先答辯。',
      '若公文系統限辦日期不對要修改。',
      '填 X 槽行政救濟列管表。'
    ],
    attachments: [
      { name: '無附件', isAvailable: false }
    ]
  },
  {
    stepNumber: 2,
    name: '寫答辯書',
    item: '寫答辯書',
    notes: [
      '可參考 X 槽案例。',
      '附件標籤可以先用一般可撕下的。',
      '寫完可以先給主管看過，再給法專看，法專修正好後再陳核。'
    ],
    attachments: [
      { name: '無附件', isAvailable: false }
    ]
  },
  {
    stepNumber: 3,
    name: '陳核',
    item: '陳核',
    notes: [
      '府二層，要會辦秘書室。',
      '陳核應備卷宗：公文＋訴願書正本＋訴願答辯書＋證據附件。'
    ],
    attachments: [
      { name: '公文參考 (檢送內政部訴願答辯書)', isAvailable: true, linkToTab: 'drafts', targetDraftId: 'draft-appeal-reply' }
    ]
  },
  {
    stepNumber: 4,
    name: '發文',
    item: '發文',
    notes: [
      '證據給內政部，其他受文者給訴願答辯書就好。',
      '證據要貼標籤。',
      '訴願答辯書要去秘書室找秋香拿章，蓋府騎縫章。',
      '填 X 槽行政救濟列管表。'
    ],
    attachments: [
      { name: '無附件', isAvailable: false }
    ]
  },
  {
    stepNumber: 5,
    name: '補正(非必要)',
    isOptional: true,
    item: '補正(非必要)',
    notes: [
      '看內政部訴願審議委員會有沒有發文請我們補充答辯。'
    ],
    attachments: [
      { name: '公文參考 (訴願補充答辯)', isAvailable: true, linkToTab: 'drafts', targetDraftId: 'draft-supplement-appeal' }
    ]
  },
  {
    stepNumber: 6,
    name: '內政部訴願決定',
    item: '內政部訴願決定',
    notes: [
      '依訴願決定續辦，寫簽辦單存查。',
      '把訴願答辯書 word 檔、訴願決定放在 X 槽。',
      '填 X 槽行政救濟列管表。'
    ],
    attachments: [
      { name: '公文參考 (訴願決定&訴訟決定簽辦單)', isAvailable: true, linkToTab: 'drafts', targetDraftId: 'draft-signoff' }
    ]
  }
];

// 二、行政訴訟案件流程（依照附件《訴願訴訟.pdf》第 2、3 頁）
const LITIGATION_PROCESS_STEPS: ProcessStepDetail[] = [
  {
    stepNumber: 1,
    name: '法院檢送原告訴訟書狀',
    item: '法院檢送原告訴訟書狀',
    notes: [
      '收到訴訟書狀後起算 20 日內(含假日)，檢具答辯書、證據至法院。',
      '若公文系統限辦日期不對要修改。',
      '填 X 槽行政救濟列管表。'
    ],
    attachments: [
      { name: '無附件', isAvailable: false }
    ]
  },
  {
    stepNumber: 2,
    name: '寫答辯書',
    item: '寫答辯書',
    notes: [
      '可參考 X 槽案例。',
      '附件標籤可以先用一般可撕下的。',
      '寫完可以先給主管看過，再給法專看，法專修正好後再陳核。'
    ],
    attachments: [
      { name: '無附件', isAvailable: false }
    ]
  },
  {
    stepNumber: 3,
    name: '陳核',
    item: '陳核',
    notes: [
      '府二層，要會辦秘書室。',
      '陳核應備卷宗：公文＋法院來文＋訴狀＋行政訴訟答辯書＋證據附件。'
    ],
    attachments: [
      { name: '公文參考', isAvailable: true, linkToTab: 'drafts', targetDraftId: 'draft-signoff' }
    ]
  },
  {
    stepNumber: 4,
    name: '發文',
    item: '發文',
    notes: [
      '行政訴訟答辯書＋證據附件都要給法院和全部受文者。',
      '證據要貼標籤。',
      '行政訴訟答辯書要去秘書室找秋香拿章，蓋府騎縫章。'
    ],
    attachments: [
      { name: '無附件', isAvailable: false }
    ]
  },
  {
    stepNumber: 5,
    name: '補正(非必要)',
    isOptional: true,
    item: '補正(非必要)',
    notes: [
      '看法院有沒有發文請我們補充答辯。'
    ],
    attachments: [
      { name: '公文參考 (行政訴訟補充答辯)', isAvailable: true, linkToTab: 'drafts', targetDraftId: 'draft-supplement-court' }
    ]
  },
  {
    stepNumber: 6,
    name: '法院開庭通知',
    item: '法院開庭通知',
    notes: [
      '法院會檢送開庭通知書（準備程序、言詞辯論）。',
      '跟主管討論誰要出席，派公務車。'
    ],
    attachments: [
      { name: '無附件', isAvailable: false }
    ]
  },
  {
    stepNumber: 7,
    name: '檢送行政訴訟委任狀給法院',
    item: '檢送行政訴訟委任狀給法院',
    notes: [
      '行政訴訟委任狀一次 2 個人，如果後續要改人，要另外重新檢送委任狀給法院。'
    ],
    attachments: [
      { name: '公文參考 (檢送行政訴訟委任狀函稿)', isAvailable: true, linkToTab: 'drafts', targetDraftId: 'draft-court-authorization' }
    ]
  },
  {
    stepNumber: 8,
    name: '出庭',
    item: '出庭',
    notes: [
      '準備相關案卷。',
      '主管會發言，幫他找資料就好。',
      '看法官有沒有直接說下次開庭什麼時候，會有小黃單，沒有就等通知書。'
    ],
    attachments: [
      { name: '無附件', isAvailable: false }
    ]
  },
  {
    stepNumber: 9,
    name: '法院判決',
    item: '法院判決',
    notes: [
      '依判決續辦，簽辦單存查。',
      '把行政訴訟答辯書 word 檔、法院判決放在 X 槽。',
      '填 X 槽行政救濟列管表。'
    ],
    attachments: [
      { name: '公文參考 (訴願決定&訴訟決定簽辦單)', isAvailable: true, linkToTab: 'drafts', targetDraftId: 'draft-signoff' }
    ]
  }
];

// 三、常用相關法令及函釋（依照附件《訴願訴訟.pdf》第 3、4 頁）
interface CaseInterpretation {
  id: string;
  category: '違規' | '變更編定';
  content: string;
  docNumber: string;
}

const COMMON_CASE_INTERPRETATIONS: CaseInterpretation[] = [
  {
    id: 'case-1',
    category: '違規',
    content: '應負限期改善之義務人，包括因自身行為（包含作為及不作為）之行為責任人',
    docNumber: '最高行政法院 107 年度裁字第 2060 號裁定'
  },
  {
    id: 'case-2',
    category: '違規',
    content: '拍定人取得法院拍賣前已違反區域計畫法管制使用之土地後，對拍定人作成要求採取相關合法使用或不影響公共安全之必要措施（含限期變更使用、恢復原狀）之行政處分，並無不妥',
    docNumber: '內政部 93 年 6 月 10 日台內營字第 0930084541 號函'
  },
  {
    id: 'case-3',
    category: '違規',
    content: '土地所有權人、地上物所有人、使用人或管理人等本即應負有土地使用管理責任',
    docNumber: '內政部 92 年 11 月 25 日台內營字第 0920090059 號函'
  },
  {
    id: 'case-4',
    category: '違規',
    content: '行為人之行為是否該當法規之構成要件而違反行政法上義務，係屬事實認定，如行為人違反行政法上義務之事實成立，主管機關即應據以裁罰之',
    docNumber: '法務部 90 年 6 月 29 日法律字第 018722 號函'
  },
  {
    id: 'case-5',
    category: '違規',
    content: '違反土地管制使用之土地所有人、使用人，不予遵從限期改善者，得按次處罰',
    docNumber: '高雄高等行政法院 107 年度訴字第 387 號行政判決'
  },
  {
    id: 'case-6',
    category: '違規',
    content: '違規行為人如於限期內並未著手為改善之計畫或實際為有效之改善行為，即屬不遵從改善命令，得按次處罰',
    docNumber: '最高行政法院 111 年度上字第 868 號判決'
  },
  {
    id: 'case-7',
    category: '違規',
    content: '按次處罰之構成要件則為不遵從主管機關限期變更使用、停止使用或拆除地上物恢復原狀之命令',
    docNumber: '法務部 98 年 11 月 17 日法律字第 0980040244 號函釋'
  },
  {
    id: 'case-8',
    category: '變更編定',
    content: '非都市土地變更編定案件，其申請基地之原始地形或地物已擅自變更者，仍應會同有關機關依區域計畫法第 21 條、第 22 條及有關法律規定懲處',
    docNumber: '內政部 94 年 7 月 1 日內授中辦地字第 0940725134 號函'
  }
];

// 四、公文函稿參考資料結構（依照附件《訴願訴訟.pdf》第 5、6、7 頁）
interface AppealOfficialDraft {
  id: string;
  title: string;
  docType: 'official-letter' | 'sign-off-memo';
  recipient?: string;
  subject?: string;
  descriptions?: string[];
  mainTarget?: string;
  subTarget?: string;
  decider?: string;
  consultUnit?: string;
  sealNote?: string;
  memoPoints?: string[];
  fullRawText: string;
}

const APPEAL_OFFICIAL_DRAFTS: AppealOfficialDraft[] = [
  {
    id: 'draft-appeal-reply',
    title: '1. 檢送內政部訴願答辯書',
    docType: 'official-letter',
    recipient: '',
    subject: '有關OOO因更正編定案件，不服本府OO年OO月OO日新北府地管字第OOO號行政處分向本府提起訴願一案，檢送本府訴願答辯書及相關附件各1份，請查照。',
    descriptions: [
      '依訴願法第58條第3項規定及(訴願人)OO年OO月OO日訴願書（本府收文日OO年OO月OO日）辦理。'
    ],
    mainTarget: '內政部',
    subTarget: '(訴願人)、新北市政府地政局(均含訴願答辯書)',
    decider: '第二層決行',
    consultUnit: '秘書室',
    sealNote: '訴願答辯書O份請用印',
    fullRawText: `受文者：
發文日期：
發文字號：
速別：普通件
密等及解密條件或保密期限：
附件：如主旨
主旨：有關OOO因更正編定案件，不服本府OO年OO月OO日新北府地管字第OOO號行政處分向本府提起訴願一案，檢送本府訴願答辯書及相關附件各1份，請查照。
說明：依訴願法第58條第3項規定及(訴願人)OO年OO月OO日訴願書（本府收文日OO年OO月OO日）辦理。

正本：內政部
副本：(訴願人)、新北市政府地政局(均含訴願答辯書)

本案依分層負責規定授權業務主管決行
會辦單位：秘書室
第二層決行

訴願答辯書O份請用印`
  },
  {
    id: 'draft-signoff',
    title: '2. 訴願決定 & 訴訟決定簽辦單',
    docType: 'sign-off-memo',
    memoPoints: [
      '一、有關OOO因非都市土地更正編定案件提起訴願案，本案內政部決定訴願駁回。',
      '二、影送容瑋彙整。',
      '三、加會秘書室知悉。',
      '四、文陳閱後存查。'
    ],
    fullRawText: `【訴願決定 & 訴訟決定簽辦單】

簽 於 
主旨：
說明：
擬辦：
一、有關OOO因非都市土地更正編定案件提起訴願案，本案內政部決定訴願駁回。
二、影送容瑋彙整。
三、加會秘書室知悉。
四、文陳閱後存查。

【蓋職章】`
  },
  {
    id: 'draft-supplement-appeal',
    title: '3-1. 補充答辯（內政部訴願）',
    docType: 'official-letter',
    recipient: '',
    subject: '有關OOO君因OOOOOO案件，不服本府OO年OO月OO日新北府地管字第OO號函提起訴願一案（貴部訴願案號：OOOOO），復請查照。',
    descriptions: [
      '一、復貴部OO年OO月OO日台內法字第OOOOO號函。',
      '二、有關訴願人OOOOO所陳一節，本府補充答辯如下：',
      '(一)',
      '(二)'
    ],
    mainTarget: '內政部',
    subTarget: 'OO君',
    decider: '第三層決行',
    consultUnit: '秘書室',
    fullRawText: `受文者：
發文日期：
發文字號：
速別：普通件
密等及解密條件或保密期限：
附件：
主旨：有關OOO君因OOOOOO案件，不服本府OO年OO月OO日新北府地管字第OO號函提起訴願一案（貴部訴願案號：OOOOO），復請查照。
說明：
一、復貴部OO年OO月OO日台內法字第OOOOO號函。
二、有關訴願人OOOOO所陳一節，本府補充答辯如下：
(一)
(二)

正本：內政部
副本：OO君

本案依分層負責規定授權業務主管決行
會辦單位：秘書室
第三層決行`
  },
  {
    id: 'draft-supplement-court',
    title: '3-2. 補充答辯（行政法院訴訟補充答辯）',
    docType: 'official-letter',
    recipient: '',
    subject: '有關貴院審理OO年度O字第OO號行政訴訟（原告：OOO）一案，請查照。',
    descriptions: [
      '一、依貴院OO年OO月OO日言詞辯論法官庭諭事項辦理。',
      '二、有關被告OOOOO一事，..........'
    ],
    mainTarget: 'OO高等行政法院',
    subTarget: 'OO君(含附件)',
    decider: '第三層決行',
    consultUnit: '秘書室',
    fullRawText: `受文者：
發文日期：
發文字號：
速別：普通件
密等及解密條件或保密期限：
附件：如說明O
主旨：有關貴院審理OO年度O字第OO號行政訴訟（原告：OOO）一案，請查照。
說明：
一、依貴院OO年OO月OO日言詞辯論法官庭諭事項辦理。
二、有關被告OOOOO一事，..........

正本：OO高等行政法院
副本：OO君(含附件)

本案依分層負責規定授權業務主管決行
會辦單位：秘書室
第三層決行`
  },
  {
    id: 'draft-court-authorization',
    title: '4. 檢送行政訴訟委任狀給法院',
    docType: 'official-letter',
    recipient: '',
    subject: '有關貴院審理OO年度O字第OO號行政訴訟（原告：OOO）一案，檢送行政訴訟委任狀1份，請查照。',
    descriptions: [
      '依貴院OOO年OO月OO日OOO股OO字第OOO號函送通知書辦理。'
    ],
    mainTarget: 'OO高等行政法院',
    subTarget: '新北市政府地政局(含委任狀1份)',
    decider: '第二層決行',
    consultUnit: '秘書室',
    sealNote: '行政訴訟委任狀一次2個人，如後續改人需重新檢送',
    fullRawText: `受文者：
發文日期：
發文字號：
速別：普通件
密等及解密條件或保密期限：
附件：如主旨
主旨：有關貴院審理OO年度O字第OO號行政訴訟（原告：OOO）一案，檢送行政訴訟委任狀1份，請查照。
說明：依貴院OOO年OO月OO日OOO股OO字第OOO號函送通知書辦理。

正本：OO高等行政法院
副本：新北市政府地政局(含委任狀1份)

本案依分層負責規定授權業務主管決行
會辦單位：秘書室
第二層決行

行政訴訟委任狀一次2個人，如後續改人需重新檢送`
  }
];

export const AdministrativeAppealDetailPage: React.FC<AdministrativeAppealDetailPageProps> = ({ onBack }) => {
  // 5 個主要分頁
  const [activeTab, setActiveTab] = useState<'appeal' | 'litigation' | 'laws' | 'drafts' | 'checker'>('appeal');

  // 訴願案件流程：目前選取步驟 (1~6)
  const [selectedAppealStepNumber, setSelectedAppealStepNumber] = useState<number>(1);

  // 行政訴訟流程：目前選取步驟 (1~9)
  const [selectedLitigationStepNumber, setSelectedLitigationStepNumber] = useState<number>(1);

  // 公文範本選取 ID
  const [selectedDraftId, setSelectedDraftId] = useState<string>('draft-appeal-reply');

  // 函釋搜尋字串與分類篩選
  const [interpretationSearch, setInterpretationSearch] = useState<string>('');
  const [selectedInterpretationCategory, setSelectedInterpretationCategory] = useState<'all' | '違規' | '變更編定'>('all');

  // 複製成功提示
  const [copiedNotice, setCopiedNotice] = useState<string | null>(null);

  // 當前選取之訴願步驟資料
  const currentAppealStep = APPEAL_PROCESS_STEPS.find((s) => s.stepNumber === selectedAppealStepNumber) || APPEAL_PROCESS_STEPS[0];

  // 當前選取之行政訴訟步驟資料
  const currentLitigationStep = LITIGATION_PROCESS_STEPS.find((s) => s.stepNumber === selectedLitigationStepNumber) || LITIGATION_PROCESS_STEPS[0];

  // 當前選取之公文範本
  const currentDraft = APPEAL_OFFICIAL_DRAFTS.find((d) => d.id === selectedDraftId) || APPEAL_OFFICIAL_DRAFTS[0];

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedNotice(`已複製「${label}」至剪貼簿！`);
    setTimeout(() => setCopiedNotice(null), 2500);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-5">
      {/* 頂部標題與返回按鈕 */}
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
              <h1 className="text-2xl sm:text-3xl font-serif-tc font-semibold text-[#2D2623]">
                訴願＆訴訟
              </h1>
              <p className="text-sm sm:text-base text-[#665A54] mt-0.5">
                新北市非都市土地行政救濟、答辯書撰寫、陳核發文與出庭實務指引
              </p>
            </div>
          </div>
        </div>

        {/* 4 個主要按鈕 */}
        <div className="flex flex-wrap items-center gap-2.5 pt-4 text-sm sm:text-base">
          <button
            onClick={() => setActiveTab('appeal')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'appeal'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>訴願案件流程</span>
          </button>

          <button
            onClick={() => setActiveTab('litigation')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'litigation'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Gavel className="w-4 h-4" />
            <span>行政訴訟案件流程</span>
          </button>

          <button
            onClick={() => setActiveTab('laws')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'laws'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
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
            onClick={() => setActiveTab('checker')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'checker'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>自檢工具</span>
          </button>
        </div>
      </div>

      {/* 複製提示浮條 */}
      {copiedNotice && (
        <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-xl text-sm sm:text-base font-semibold flex items-center gap-2.5 shadow-sm animate-in fade-in duration-150">
          <Check className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{copiedNotice}</span>
        </div>
      )}

      {/* 1. 訴願案件流程 (左右版面：左邊是流程，右邊是注意事項等相關資訊) */}
      {activeTab === 'appeal' && (
        <div className="space-y-4">
          {/* 辦理時效橫幅 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8C5A4B]/10 border border-[#8C5A4B]/30 flex items-center justify-center text-[#8C5A4B]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                    訴願案件流程
                  </h2>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-[#8C5A4B] text-white shadow-xs">
                    <Clock className="w-3.5 h-3.5" />
                    辦理時效：20 天
                  </span>
                </div>
                <p className="text-sm text-[#665A54] mt-0.5">
                  收到訴願書後起算 20 日內檢卷答辯，點選左側流程按鈕檢視各步驟之項目、注意事項及附件
                </p>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-[#735A4F] bg-[#FAF7F2] px-3 py-1.5 rounded-lg border border-[#DDD5C7] self-start sm:self-auto">
              共 6 項流程步驟
            </div>
          </div>

          {/* 直式流程 + 右側資訊卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
            {/* 左側：6 項流程直式按鈕與箭頭 */}
            <div className="md:col-span-5 lg:col-span-4 bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-4 shadow-xs space-y-2">
              <div className="flex items-center justify-between border-b border-[#ECE6DB] pb-3 mb-2">
                <span className="text-sm font-semibold text-[#4A3E39]">辦理流程步驟</span>
                <span className="text-xs text-[#735A4F]">點選檢視右側內容</span>
              </div>

              <div className="space-y-1.5">
                {APPEAL_PROCESS_STEPS.map((step, index) => {
                  const isSelected = selectedAppealStepNumber === step.stepNumber;
                  const hasNext = index < APPEAL_PROCESS_STEPS.length - 1;

                  return (
                    <React.Fragment key={step.stepNumber}>
                      <button
                        type="button"
                        onClick={() => setSelectedAppealStepNumber(step.stepNumber)}
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
                    {currentAppealStep.stepNumber}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                    {currentAppealStep.name}
                  </h3>
                  {currentAppealStep.isOptional && (
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
                  {currentAppealStep.item}
                </div>
              </div>

              {/* 2. 注意事項 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#8C5A4B]">
                  <AlertCircle className="w-4 h-4" />
                  <span>注意事項</span>
                </div>

                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2.5">
                  {currentAppealStep.notes.map((note, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#3E342F] leading-relaxed">
                      <span className="font-bold text-[#8C5A4B] shrink-0 mt-0.5">
                        {idx + 1}.
                      </span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. 附件 */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#8C5A4B]">
                  <Paperclip className="w-4 h-4" />
                  <span>附件</span>
                </div>
                <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] flex flex-wrap items-center gap-2.5">
                  {currentAppealStep.attachments.map((att, aIdx) => (
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
                          className="px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-[#8C5A4B] text-white hover:bg-[#734437] transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                        >
                          <FileText className="w-4 h-4" />
                          <span>{att.name}</span>
                        </button>
                      ) : (
                        <span className="text-sm text-[#7D7065] px-3 py-1 bg-white rounded-lg border border-[#E5DDD0]">
                          {att.name}
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

      {/* 2. 行政訴訟案件流程 (左右版面：左邊是流程，右邊是注意事項等相關資訊) */}
      {activeTab === 'litigation' && (
        <div className="space-y-4">
          {/* 辦理時效橫幅 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8C5A4B]/10 border border-[#8C5A4B]/30 flex items-center justify-center text-[#8C5A4B]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                    行政訴訟案件流程
                  </h2>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-[#8C5A4B] text-white shadow-xs">
                    <Clock className="w-3.5 h-3.5" />
                    辦理時效：20 天
                  </span>
                </div>
                <p className="text-sm text-[#665A54] mt-0.5">
                  收到法院訴訟書狀後起算 20 日內檢具答辯書至法院，點選左側流程按鈕檢視各步驟之項目、注意事項及附件
                </p>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-[#735A4F] bg-[#FAF7F2] px-3 py-1.5 rounded-lg border border-[#DDD5C7] self-start sm:self-auto">
              共 9 項流程步驟
            </div>
          </div>

          {/* 直式流程 + 右側資訊卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
            {/* 左側：9 項流程直式按鈕與箭頭 */}
            <div className="md:col-span-5 lg:col-span-4 bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-4 shadow-xs space-y-2">
              <div className="flex items-center justify-between border-b border-[#ECE6DB] pb-3 mb-2">
                <span className="text-sm font-semibold text-[#4A3E39]">辦理流程步驟</span>
                <span className="text-xs text-[#735A4F]">點選檢視右側內容</span>
              </div>

              <div className="space-y-1.5">
                {LITIGATION_PROCESS_STEPS.map((step, index) => {
                  const isSelected = selectedLitigationStepNumber === step.stepNumber;
                  const hasNext = index < LITIGATION_PROCESS_STEPS.length - 1;

                  return (
                    <React.Fragment key={step.stepNumber}>
                      <button
                        type="button"
                        onClick={() => setSelectedLitigationStepNumber(step.stepNumber)}
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
                    {currentLitigationStep.stepNumber}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                    {currentLitigationStep.name}
                  </h3>
                  {currentLitigationStep.isOptional && (
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
                  {currentLitigationStep.item}
                </div>
              </div>

              {/* 2. 注意事項 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#8C5A4B]">
                  <AlertCircle className="w-4 h-4" />
                  <span>注意事項</span>
                </div>

                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2.5">
                  {currentLitigationStep.notes.map((note, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#3E342F] leading-relaxed">
                      <span className="font-bold text-[#8C5A4B] shrink-0 mt-0.5">
                        {idx + 1}.
                      </span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. 附件 */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#8C5A4B]">
                  <Paperclip className="w-4 h-4" />
                  <span>附件</span>
                </div>
                <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] flex flex-wrap items-center gap-2.5">
                  {currentLitigationStep.attachments.map((att, aIdx) => (
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
                          className="px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-[#8C5A4B] text-white hover:bg-[#734437] transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                        >
                          <FileText className="w-4 h-4" />
                          <span>{att.name}</span>
                        </button>
                      ) : (
                        <span className="text-sm text-[#7D7065] px-3 py-1 bg-white rounded-lg border border-[#E5DDD0]">
                          {att.name}
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
        <div className="space-y-6">
          {/* 上半部：訴願法與行政訴訟法重要條文 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
            <div className="border-b border-[#ECE6DB] pb-3.5 flex items-center gap-2.5">
              <Scale className="w-6 h-6 text-[#8C5A4B]" />
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#2D2623]">
                行政救濟核心法令條文
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1. 訴願法 */}
              <div className="p-4 sm:p-5 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-3">
                <div className="flex items-center justify-between border-b border-[#E5DDD0] pb-2">
                  <span className="font-bold text-lg text-[#1F3864]">1. 訴願法</span>
                  <span className="text-xs bg-[#1F3864] text-white px-2.5 py-0.5 rounded-md font-semibold">
                    提起與答辯規範
                  </span>
                </div>
                <div className="space-y-3 text-sm sm:text-base text-[#3E342F] leading-relaxed">
                  <div className="bg-white p-3.5 rounded-lg border border-[#DDD5C7] space-y-1">
                    <span className="font-bold text-[#8C5A4B]">第 14 條</span>
                    <p className="mt-0.5">
                      「訴願之提起，應自行政處分達到或公告期滿之次日起 30 日內。」
                    </p>
                  </div>
                  <div className="bg-white p-3.5 rounded-lg border border-[#DDD5C7] space-y-1">
                    <span className="font-bold text-[#8C5A4B]">第 58 條</span>
                    <p className="mt-0.5">
                      「訴願人應繕具訴願書經由原行政處分機關向訴願管轄機關提起訴願，原行政處分機關檢卷答辯時，應將前項答辯書抄送訴願人。」
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. 行政訴訟法 */}
              <div className="p-4 sm:p-5 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-3">
                <div className="flex items-center justify-between border-b border-[#E5DDD0] pb-2">
                  <span className="font-bold text-lg text-[#1F3864]">2. 行政訴訟法</span>
                  <span className="text-xs bg-[#1F3864] text-white px-2.5 py-0.5 rounded-md font-semibold">
                    起訴撤銷訴訟與時效
                  </span>
                </div>
                <div className="space-y-3 text-sm sm:text-base text-[#3E342F] leading-relaxed">
                  <div className="bg-white p-3.5 rounded-lg border border-[#DDD5C7] space-y-1">
                    <span className="font-bold text-[#8C5A4B]">第 4 條</span>
                    <p className="mt-0.5">
                      「不服訴願決定者，得向行政法院提起撤銷訴訟。」
                    </p>
                  </div>
                  <div className="bg-white p-3.5 rounded-lg border border-[#DDD5C7] space-y-1">
                    <span className="font-bold text-[#8C5A4B]">第 106 條</span>
                    <p className="mt-0.5">
                      「行政訴訟應該於訴願決定送達後 2 個月之不變期間內提出。」
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 下半部：常見函釋清單與搜尋 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ECE6DB] pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#2D2623] flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#8C5A4B]" />
                  <span>3. 常見實務函釋及判決</span>
                </h3>
                <p className="text-sm text-[#7D7065] mt-0.5">
                  收錄違反區域計畫法管制、限期改善責任、拍定人義務及按次處罰之關鍵裁判與函釋
                </p>
              </div>

              {/* 分類過濾與搜尋框 */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="flex items-center gap-1 bg-[#FAF7F2] p-1 rounded-lg border border-[#DDD5C7] text-xs font-semibold">
                  <button
                    onClick={() => setSelectedInterpretationCategory('all')}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      selectedInterpretationCategory === 'all'
                        ? 'bg-[#8C5A4B] text-white shadow-2xs'
                        : 'text-[#4A3E39] hover:bg-[#EAE2D7]'
                    }`}
                  >
                    全部 ({COMMON_CASE_INTERPRETATIONS.length})
                  </button>
                  <button
                    onClick={() => setSelectedInterpretationCategory('違規')}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      selectedInterpretationCategory === '違規'
                        ? 'bg-[#8C5A4B] text-white shadow-2xs'
                        : 'text-[#4A3E39] hover:bg-[#EAE2D7]'
                    }`}
                  >
                    違規案件 ({COMMON_CASE_INTERPRETATIONS.filter(c => c.category === '違規').length})
                  </button>
                  <button
                    onClick={() => setSelectedInterpretationCategory('變更編定')}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      selectedInterpretationCategory === '變更編定'
                        ? 'bg-[#8C5A4B] text-white shadow-2xs'
                        : 'text-[#4A3E39] hover:bg-[#EAE2D7]'
                    }`}
                  >
                    變更編定 ({COMMON_CASE_INTERPRETATIONS.filter(c => c.category === '變更編定').length})
                  </button>
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-[#8C5A4B] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={interpretationSearch}
                    onChange={(e) => setInterpretationSearch(e.target.value)}
                    placeholder="搜尋裁判、函釋或內容..."
                    className="w-full pl-9 pr-3 py-1.5 text-sm bg-white border border-[#DDD5C7] rounded-lg focus:outline-none focus:border-[#8C5A4B]"
                  />
                </div>
              </div>
            </div>

            {/* 函釋卡片清單 */}
            <div className="space-y-3">
              {COMMON_CASE_INTERPRETATIONS.filter((item) => {
                const matchCategory = selectedInterpretationCategory === 'all' || item.category === selectedInterpretationCategory;
                if (!matchCategory) return false;
                if (!interpretationSearch.trim()) return true;
                const q = interpretationSearch.toLowerCase();
                return (
                  item.category.toLowerCase().includes(q) ||
                  item.content.toLowerCase().includes(q) ||
                  item.docNumber.toLowerCase().includes(q)
                );
              }).map((item, idx) => (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] hover:border-[#8C5A4B]/50 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                >
                  <div className="space-y-2 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#8C5A4B] text-white">
                        #{idx + 1}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-md border ${
                        item.category === '違規'
                          ? 'bg-[#FEF2F2] text-[#991B1B] border-[#FECACA]'
                          : 'bg-[#EFF6FF] text-[#1E40AF] border-[#BFDBFE]'
                      }`}>
                        涉及案件：{item.category}
                      </span>
                    </div>

                    <div className="font-semibold text-base sm:text-lg text-[#2D2623] leading-relaxed">
                      {item.content}
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#735A4F] pt-1">
                      <FileText className="w-4 h-4 text-[#8C5A4B] shrink-0" />
                      <span className="font-mono font-medium">{item.docNumber}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyText(item.docNumber, item.docNumber)}
                    className="self-start sm:self-center px-4 py-2 text-xs sm:text-sm font-semibold text-[#4A3E39] bg-white hover:bg-[#F2ECE3] border border-[#DDD5C7] hover:border-[#8C5A4B] rounded-lg transition-all cursor-pointer flex items-center gap-1.5 shrink-0 shadow-2xs"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#8C5A4B]" />
                    <span>複製文號</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. 公文函稿參考 */}
      {activeTab === 'drafts' && (
        <div className="space-y-5">
          {/* 橫向切換按鈕 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-4 sm:p-5 shadow-xs">
            <div className="text-xs font-bold text-[#8C5A4B] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>公文函稿與簽呈選擇</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
              {APPEAL_OFFICIAL_DRAFTS.map((draft) => (
                <button
                  key={draft.id}
                  onClick={() => setSelectedDraftId(draft.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer text-xs sm:text-sm font-semibold flex flex-col justify-between ${
                    selectedDraftId === draft.id
                      ? 'bg-[#8C5A4B] text-white border-[#8C5A4B] shadow-2xs'
                      : 'bg-[#FAF7F2] text-[#4A3E39] border-[#DDD5C7] hover:bg-[#F2ECE3]'
                  }`}
                >
                  <span className="truncate">{draft.title}</span>
                  <span className={`text-[11px] mt-1.5 font-normal ${selectedDraftId === draft.id ? 'text-white/80' : 'text-[#7D7065]'}`}>
                    {draft.docType === 'official-letter' ? '標準公文函稿' : '簽辦單'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 公文詳細內容卡片 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ECE6DB] pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                  {currentDraft.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                  {currentDraft.docType === 'official-letter'
                    ? '標準公文格式（可直接複製帶入個案地號與文號）'
                    : '內部陳核簽辦單（依訴願/訴訟結果續辦存查）'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleCopyText(currentDraft.fullRawText, currentDraft.title)}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#8C5A4B] hover:bg-[#734437] transition-all cursor-pointer flex items-center gap-2 shadow-xs shrink-0 self-start sm:self-auto"
              >
                <Copy className="w-4 h-4" />
                <span>一鍵複製全文範本</span>
              </button>
            </div>

            {/* 提示訊息：實際回文內容仍須由承辦人依個案判斷撰寫 */}
            <div className="bg-[#FFFBEB] border-2 border-[#FDE68A] text-[#92400E] px-4 py-3 rounded-xl flex items-center gap-2.5 text-sm sm:text-base font-bold shadow-2xs">
              <span className="text-[#D97706] shrink-0 text-base">★</span>
              <span>【實際回文內容仍須由承辦人依個案判斷撰寫】</span>
            </div>

            {/* 公文全文範例區（僅保留公文全文範例） */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-1">
                <span className="text-sm sm:text-base font-bold text-[#1F3864] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#8C5A4B]" />
                  公文全文範例
                </span>
                <span className="text-xs text-[#7D7065]">
                  點擊右上角按鈕可一鍵複製全文至公文系統
                </span>
              </div>
              <pre className="p-5 sm:p-6 bg-[#FAF7F2] text-[#2D2623] border-2 border-[#DDD5C7] rounded-xl font-mono text-sm sm:text-base leading-relaxed overflow-x-auto whitespace-pre-wrap select-all shadow-inner">
                {currentDraft.fullRawText}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* 5. 實務救濟答辯與處分自檢工具 */}
      {activeTab === 'checker' && (
        <AdministrativeSelfCheckTool onCopy={handleCopyText} />
      )}
    </div>
  );
};
