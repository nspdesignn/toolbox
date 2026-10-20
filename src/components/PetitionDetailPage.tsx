import React, { useState } from 'react';
import {
  ArrowLeft,
  FileText,
  Copy,
  Check,
  Search,
  AlertTriangle,
  Send,
  Building2,
  FileCheck2,
  Lock,
  Layers,
  Inbox,
  CheckCircle2,
  PhoneCall,
  Mail,
  StickyNote
} from 'lucide-react';

interface PetitionDetailPageProps {
  onBack: () => void;
}

// 辦理流程步驟介面
interface WorkflowStep {
  step: number;
  name: string;
  items: string[];
  tips?: string[];
  alert?: string;
}

// 1. 電子收件 (主辦 & 協辦) 流程步驟
const ELECTRONIC_STEPS: WorkflowStep[] = [
  {
    step: 1,
    name: '收件',
    items: [
      '到公文系統右上角，有個陳情案管，按簽收。',
      '如果不是我們主政的業務，要趕快去公文系統寫改分表，改分出去。'
    ],
    alert: '非主政業務務必「趕快」填寫改分表改分，避免耽誤時效管制！'
  },
  {
    step: 2,
    name: '確認案情',
    items: [
      '確認是否為新案。',
      '新案：排會勘。',
      '舊案：回覆民眾辦理情形。'
    ],
    tips: ['新案依規定排定現場會勘；舊案則調出原列管記錄，彙整目前辦理進度回覆。']
  },
  {
    step: 3,
    name: '陳核',
    items: [
      '要注意主管有沒有簽收。'
    ],
    tips: ['隨時注意公文系統簽核流程，確保主管已及時簽收審閱。']
  },
  {
    step: 4,
    name: '回復',
    items: [
      '決行後回覆民眾。',
      '電子郵件回覆：直接在公文系統按回復。',
      '電話回覆：打電話回覆民眾，做電話紀錄單，把電話紀錄單當附件放在最下面有個【相關附件】的地方。'
    ],
    tips: ['電話回覆務必確實填寫電話紀錄單，並上傳至公文系統最下方的【相關附件】區備查。']
  },
  {
    step: 5,
    name: '辦結',
    items: [
      '結案。'
    ]
  }
];

// 2. 紙本收件 (主辦) 流程步驟
const PAPER_STEPS: WorkflowStep[] = [
  {
    step: 1,
    name: '收件',
    items: [
      '到公文系統右上角，有個陳情案管，按簽收。',
      '如果不是我們主政的業務，要趕快去公文系統寫改分表，改分出去。'
    ],
    alert: '非主政業務務必「趕快」填寫改分表改分，避免耽誤時效管制！'
  },
  {
    step: 2,
    name: '確認案情',
    items: [
      '確認是否為新案。',
      '新案：排會勘。',
      '舊案：回覆民眾辦理情形。'
    ],
    tips: ['新案排會勘查處；舊案則向民眾說明目前辦理情形。']
  },
  {
    step: 3,
    name: '陳核',
    items: [
      '到公文系統創文號，回覆民眾。',
      '貼便利貼提醒自己這件是人陳案管。'
    ],
    tips: ['📌 重要提醒：紙本案件記得貼便利貼提醒自己「這件是人陳案管」，防止發文程序遺漏！']
  },
  {
    step: 4,
    name: '回復',
    items: [
      '決行後回覆民眾。',
      '公文決行後稿轉函，先不要發文，到公文系統辦理區，勾選這案。',
      '按【陳情案公文入案】，確認案管系統是否已結案，之後再發文。'
    ],
    alert: '⚠️ 核心關鍵：公文決行後稿轉函「先不要發文」！務必先到辦理區勾選本案，按【陳情案公文入案】確認案管系統已結案後，才能發文！'
  },
  {
    step: 5,
    name: '發文',
    items: [
      '結案。'
    ]
  }
];

// 回復範本介面
interface ReplyDraft {
  id: string;
  category: 'general' | 'other';
  categoryLabel: string;
  name: string;
  scenario: string;
  content: string;
}

// 依照 人陳案管.pdf 收錄全部 13 款回復範本
const REPLY_DRAFTS: ReplyDraft[] = [
  {
    id: 'd1',
    category: 'general',
    categoryLabel: '一般回覆範本',
    name: '移案-行業行為物移拆大主政',
    scenario: '民眾陳情內容係針對違章建築',
    content: `感謝您來信對市政問題提出之建議與寶貴的意見，有關您所陳OOOOOO(檢舉內容主旨)一案，本局就業務職掌向您說明如下：一、依據「新北市政府各機關處理一行為違反數行政法規定案件權責劃分及作業程序」規定，違規案件同時違反數不同性質之管理法規，其順序依（一）行業（二）行為（三）物之管理法規定，並由順序在先管理法規之權責機關為主政機關，本案現況涉違章建築（行為管理法規），應優先於物之管理法規，由本府違章建築拆除大隊主政辦理。二、非常感謝您對於本案之關心，希望我們的答覆能讓您滿意。感謝您的來信，敬祝您身體健康，萬事如意！`
  },
  {
    id: 'd2',
    category: 'general',
    categoryLabel: '一般回覆範本',
    name: '農業局排勘、若認定違規則續辦',
    scenario: '尚未確定是否違規',
    content: `感謝您來信對市政問題提出之建議與寶貴的意見，有關您陳情OOOOOO(檢舉內容主旨)一案，本局就業務職掌向您說明如下：一、本案業經本府農業局排定現地會勘，如經該局認定有違規使用情形將依相關法令規定辦理。二、非常感謝您對於本案之關心，希望我們的答覆能讓您滿意。感謝您的來信，敬祝您身體健康，萬事如意！`
  },
  {
    id: 'd3',
    category: 'general',
    categoryLabel: '一般回覆範本',
    name: '辦理中-已確認違規但尚未裁處',
    scenario: '經查已確認違規，刻正辦理裁處中',
    content: `感謝您來信對市政問題提出之建議與寶貴的意見，有關您所陳情OOOOOO(檢舉內容主旨)一案，本府就業務職掌向您說明如下：一、經查案址坐落本市 OO 區 OO 段 OO 地號土地，係屬 OO 區 OO 用地，經本府相關單位現場勘查，現況具 OOOO 等，經本府 OO 局認定非作 OO 使用，涉違規使用部分刻正依區域計畫法及相關法令規定辦理中。二、非常感謝您對於本案之關心，希望我們的答覆能讓您滿意，若您仍有核准使用事宜，請逕洽詢本府 OO 局 OO 科承辦人員：OOO，聯絡電話：(02)29603456 分機 OOO。感謝您的來信，敬祝您身體健康，萬事如意！`
  },
  {
    id: 'd4',
    category: 'general',
    categoryLabel: '一般回覆範本',
    name: '已裁處-違規裁處在案並移拆大、目的或使用地主管機關',
    scenario: '已依法裁罰並移請拆大或主管機關卓處',
    content: `感謝您來信對市政問題提出之建議與寶貴的意見，有關您所陳情OOOOOO(檢舉內容主旨)一案，本局就業務職掌向您說明如下：一、經查案址坐落本市 OO 區 OO 段 OO 地號土地，係屬 OO 區 OO 用地，現況業經本府 OO 局認定非作 OO 使用，涉違反非都市土地使用管制規定，本局業依區域計畫法規定裁罰在案並移請本府 OO 局及違章建築拆除大隊本權責卓處。二、非常感謝您對於本案之關心，希望我們的答覆能讓您滿意。感謝您的來信，敬祝您身體健康，萬事如意！`
  },
  {
    id: 'd5',
    category: 'general',
    categoryLabel: '一般回覆範本',
    name: '已裁處-違規裁處在案並移拆大',
    scenario: '民眾屢次陳情違章建物',
    content: `感謝您來信對市政問題提出之建議與寶貴的意見，有關您所陳情OOOOOO(檢舉內容主旨)一案，本局就業務職掌向您說明如下：一、經查案址坐落本市 OO 區 OO 段 OO 地號土地，係屬 OO 區 OO 用地，案經本府相關單位現場勘查，現況業經本府 OO 局認定非屬 OO 使用，涉違反非都市土地使用管制規定，本局業依區域計畫法規定裁罰在案。至案址涉及違章建築部分，係屬本府違章建築拆除大隊權責，將由該大隊依相關規定辦理。二、非常感謝您對於本案之關心，希望我們的答覆能讓您滿意。感謝您的來信，敬祝您身體健康，萬事如意！`
  },
  {
    id: 'd6',
    category: 'general',
    categoryLabel: '一般回覆範本',
    name: '尚未現勘，倘確定違規則處分',
    scenario: '排定邀集相關單位現場勘查中',
    content: `感謝您來信對市政問題提出建議與寶貴意見，有關您陳情 OOOOOO(檢舉內容主旨)一案，就業務職掌事項說明如下：經查案址坐落本市 OO 區 OO 段 OO 地號土地，該土地之使用分區及使用地類別係屬 OO 區 OO 用地，有關案址涉嫌 OOOO 一節，現經本府 OO 局邀集相關單位現場勘查，倘經會勘確認現況有違反非都市土地使用管制之情事，將逕依區域計畫法等相關規定辦理。`
  },
  {
    id: 'd7',
    category: 'general',
    categoryLabel: '一般回覆範本',
    name: '現況有未經核准計畫使用之情形已裁處',
    scenario: '查現況有未經核准計畫使用，已依法裁處',
    content: `感謝您來信對市政問題提出之建議與寶貴的意見，有關您陳情 OOOOOO(檢舉內容主旨)一案，本府地政局就業務職掌向您說明如下：一、經查案址坐落於本市 OO 區 OO 段 OO 地號土地，係屬 OO 區 OO 用地，案經本府相關單位現場勘查，查現況有未經核准計畫使用之情形，已違反非都市土地使用管制，本局業依區域計畫法裁處並移請本府違章建築拆除大隊本權責卓處。二、非常感謝您對於本案之關心，希望我們的答覆能讓您滿意。感謝您的來信，敬祝您身體健康，萬事如意！`
  },
  {
    id: 'd8',
    category: 'general',
    categoryLabel: '一般回覆範本',
    name: '已裁處、拆除事宜請洽拆大',
    scenario: '建物部分合法部分違建且內部未依計畫使用',
    content: `感謝您關心 OOOOOO(檢舉內容主旨)案件，有關您所詢違章建築認定及處理情形，本府就業務職掌向您說明如下：一、經查案址坐落 OO 區 OO 段 OO 地號土地，屬 OO 區 OO 用地。現場 OOO 尚未經核准計畫使用，涉及違反非都市土地使用管制規定部分，本府已依區域計畫法規定裁處，另土地使用違規之裁處與違章建築之查報、拆除，分屬不同法令及處理程序，現場建物是否屬違章建築、應否查報及拆除，係屬違章建築主管機關權責，應依建築法等相關規定辦理，已移請本府違章建築拆除大隊依權責辦理。二、非常感謝您對於本案之關心，希望我們的答覆能讓您滿意，若您仍有違章建築使用一事，請逕洽詢本府違章建築拆除大隊 OOO 科 OOO 聯絡電話：(02)22075911 分機 OOO，敬祝身體健康，萬事如意。`
  },
  {
    id: 'd9',
    category: 'general',
    categoryLabel: '一般回覆範本',
    name: '無違規、違章建築由拆大主政',
    scenario: '現勘查無非都違規，涉及違建由拆大辦理',
    content: `感謝您關心 OOOOOO(檢舉內容主旨)一案，本局就業務職掌向您說明如下：一、經查案址係坐落本市 OO 區 OO 段 OO 地號土地，經本市 OO 區公所 OO 年 OO 月 OO 日現場勘查，現況已無違反非都市土地使用管制，另涉及違章建築疑義，請依主管機關本府違章建築拆除大隊意見辦理。二、非常感謝您對於本案之關心，希望我們的答覆能讓您滿意。感謝您的來信，敬祝您身體健康，萬事如意！`
  },
  {
    id: 'd10',
    category: 'general',
    categoryLabel: '一般回覆範本',
    name: '民眾陳情：丙建、具建築行為',
    scenario: '丙種建築用地容許作住宅使用，無違規情事',
    content: `感謝您來信對市政問題提出之建議與寶貴的意見，有關所陳 OOOOOO(檢舉內容主旨)一案，就業務職掌向您說明如下：一、經查案址坐落於本市 OO 區 OO 段 OO 地號，係屬 OO 區丙種建築用地，依非都市土地使用管制規則第 6 條第 3 項附表一規定，丙種建築用地之容許使用項目有「住宅」，尚無違反非都市土地使用管制。二、非常感謝您對於本案之關心，希望我們的答覆能讓您滿意。`
  },
  {
    id: 'd11',
    category: 'general',
    categoryLabel: '一般回覆範本',
    name: '民眾陳情涉及多機關(我們主政)',
    scenario: '陳情涉及非都用地、消防安全、室內裝修與行業認定',
    content: `親愛市民您好，感謝您來信對市政問題提出之建議與寶貴的意見，有關您所陳 OOOOOO(檢舉內容主旨)一案，本府各機關就業務職掌向您說明如下：一、本府地政局查本案案址坐落於本市 OO 區 OO 段 OO 地號土地，係屬 OO 區丙種建築用地，依非都市土地使用管制規則第 6 條第 3 項附表一規定，丙種建築用地之容許使用項目有「住宅」。二、次查本府消防局第五救災救護大隊業於 OO 年 OO 月 OO 日派員前往檢查，現場 OOOO，經檢查皆合格堪用，另宣導場所人員注意防火用電安全，以維護公共安全。三、針對建築物安全事務一事，經本府工務局查復，依本府「各單位處理一行為違反數行政法規定案件權責劃分及作業程序」第 2 點、第 3 點規定，違規案件同時違反數不同性質之管理法規時，其順序為「行業管理、行為管理、物之管理」，並由順序在先管理法規之權責單位為主政單位。本案涉及現況行業認定，應由目的事業主管機關主政辦理。四、非常感謝您對於本案之關心，希望我們的答覆能讓您滿意，若您仍有 OOOOO 事宜，請逕洽詢本府勞工局 OO 科承辦人員：OOO 聯絡電話：(02)29603456 分機 OOO；有關消防安全疑慮，請逕洽詢本府消防局 OO 大隊承辦人員：OOO 聯絡電話：(02)86713380 分機 OOO；建築用途及核准使用一事，請逕洽詢本府工務局 OO 科承辦人員：OOO 聯絡電話：(02)29603456 分機 OOO。感謝您的來信，敬祝您身體健康，萬事如意！`
  },
  {
    id: 'd12',
    category: 'other',
    categoryLabel: '他機關業務',
    name: '民眾陳情：逕洽本府工務局',
    scenario: '因現況建物是否符合建物管理相關法令及是否合法申請室內裝修許可一事，請依工務局意見辦理',
    content: `感謝您來信對市政問題提出建議與寶貴意見，有關您陳情本市 OOOOOO(檢舉內容主旨)一案，因現況建物是否符合建物管理相關法令及是否合法申請室內裝修許可一事，請依本府建築主管機關(新北市政府工務局)意見辦理，非常感謝您對於本案之關心，希望我們的答覆能讓您滿意，敬祝您身體健康、萬事如意！`
  },
  {
    id: 'd13',
    category: 'other',
    categoryLabel: '他機關業務',
    name: '民眾陳情：環保用地具違建廠房並做工廠',
    scenario: '涉違章工廠使用，優先由經濟發展局主政辦理',
    content: `感謝您來信對市政問題提出建議與寶貴意見，有關您陳情 OOOOOO(檢舉內容主旨)一案，本局就業務職掌事項說明如下：一、依據「新北市政府各機關處理一行為違反數行政法規定案件權責劃分及作業程序」規定，違規案件同時違反數不同性質之管理法規，其順序依（一）行業（二）行為（三）物之管理法規定，並由順序在先管理法規之權責機關為主政機關，本案現況涉違章工廠使用（行為管理法規），應優先於物之管理法規，由本府經濟發展局主政辦理。二、非常感謝您對於本案之關心，希望我們的答覆能讓您滿意。感謝您的來信，敬祝您身體健康，萬事如意！`
  }
];

export const PetitionDetailPage: React.FC<PetitionDetailPageProps> = ({ onBack }) => {
  // 主功能分頁：一、辦理流程 / 二、回復範本
  const [activeMainTab, setActiveMainTab] = useState<'workflow' | 'reply-drafts'>('workflow');

  // 辦理流程模式：電子收件 / 紙本收件
  const [workflowMode, setWorkflowMode] = useState<'electronic' | 'paper'>('electronic');

  // 回復範本分類篩選
  const [filterCategory, setFilterCategory] = useState<'all' | 'general' | 'other'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDraftId, setSelectedDraftId] = useState<string>('d1');
  const [copiedDraftSuccess, setCopiedDraftSuccess] = useState<boolean>(false);

  const handleCopyText = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedDraftSuccess(true);
    setTimeout(() => setCopiedDraftSuccess(false), 2000);
  };

  // 篩選範本清單
  const filteredDrafts = REPLY_DRAFTS.filter((d) => {
    const matchCategory = filterCategory === 'all' || d.category === filterCategory;
    const matchSearch =
      searchQuery.trim() === '' ||
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.scenario.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const currentDraft = REPLY_DRAFTS.find((d) => d.id === selectedDraftId) || filteredDrafts[0] || REPLY_DRAFTS[0];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* 頂部標題區 */}
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
              <h1 className="text-2xl sm:text-3xl font-serif-tc font-semibold text-[#1F3864]">
                人陳案管
              </h1>
            </div>
          </div>
        </div>

        {/* 2 大功能分頁按鈕 */}
        <div className="flex flex-wrap items-center gap-2.5 pt-4 text-sm sm:text-base">
          <button
            onClick={() => setActiveMainTab('workflow')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeMainTab === 'workflow'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>辦理流程</span>
          </button>

          <button
            onClick={() => setActiveMainTab('reply-drafts')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeMainTab === 'reply-drafts'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>回復範本</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 模組一：辦理流程 */}
      {/* ========================================================================= */}
      {activeMainTab === 'workflow' && (
        <div className="space-y-6">
          {/* 收件類型切換按鈕 (1. 電子收件 / 2. 紙本收件) */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#ECE6DB]">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                  辦理流程
                </h2>
                <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                  請選擇收件方式以檢視對應之 5 階段公文簽核、回覆與結案操作程序
                </p>
              </div>

              {/* 切換按鈕 */}
              <div className="flex items-center gap-2 p-1.5 bg-[#FAF7F2] border-2 border-[#DDD5C7] rounded-xl self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setWorkflowMode('electronic')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    workflowMode === 'electronic'
                      ? 'bg-[#1F3864] text-white shadow-xs'
                      : 'text-[#4A3E39] hover:bg-[#EAE2D7]'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>電子收件 (主辦 & 協辦)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setWorkflowMode('paper')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    workflowMode === 'paper'
                      ? 'bg-[#1F3864] text-white shadow-xs'
                      : 'text-[#4A3E39] hover:bg-[#EAE2D7]'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>紙本收件 (主辦)</span>
                </button>
              </div>
            </div>

            {/* 核心注意事項提醒 */}
            {workflowMode === 'electronic' ? (
              <div className="p-4 bg-[#EEF6FC] rounded-xl border border-[#2E6DA8]/30 text-xs sm:text-sm text-[#1F3864] leading-relaxed flex items-start gap-2.5">
                <Mail className="w-5 h-5 text-[#2E6DA8] shrink-0 mt-0.5" />
                <div>
                  <strong>電子收件特點提醒</strong>：
                  決行後回覆民眾分為<strong>「電子郵件回覆」</strong>（直接在公文系統按回復）與<strong>「電話回覆」</strong>（致電民眾並做電話紀錄單，務必將電話紀錄單當作附件掛在最底下的【相關附件】區）。
                </div>
              </div>
            ) : (
              <div className="p-4 bg-[#FFF5EA] rounded-xl border border-[#F0D8A8] text-xs sm:text-sm text-[#8C5A4B] leading-relaxed flex items-start gap-2.5">
                <StickyNote className="w-5 h-5 text-[#8C5A4B] shrink-0 mt-0.5" />
                <div>
                  <strong>紙本收件關鍵心法</strong>：
                  陳核時<strong>貼便利貼提醒自己這件是人陳案管</strong>！決行後稿轉函<strong>「先不要發文」</strong>，務必先到公文系統辦理區勾選該案，點選<strong>【陳情案公文入案】</strong>確認案管系統已結案後，才能真正發文！
                </div>
              </div>
            )}
          </div>

          {/* 流程表格與卡片展示 (依 PDF 原始表格 1:1 呈現) */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#ECE6DB]">
              <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1F3864]" />
                <span>
                  {workflowMode === 'electronic'
                    ? '電子收件 (主辦 & 協辦) 詳細作業表格'
                    : '紙本收件 (主辦) 詳細作業表格'}
                </span>
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#FAF7F2] text-[#5B584E] border border-[#DDD5C7]">
                共 5 個階段步驟
              </span>
            </div>

            {/* 完整流程對照表格 */}
            <div className="overflow-x-auto rounded-xl border-2 border-[#1F3864] shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#1F3864] text-white">
                    <th className="py-3 px-4 font-bold border-r border-[#314E80] w-20 text-center">次序</th>
                    <th className="py-3 px-5 font-bold border-r border-[#314E80] w-36 sm:w-44 whitespace-nowrap">流程階段</th>
                    <th className="py-3 px-5 font-bold">項目與具體操作指引</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ECE6DB] text-[#2A2822]">
                  {(workflowMode === 'electronic' ? ELECTRONIC_STEPS : PAPER_STEPS).map((s, idx) => (
                    <tr
                      key={s.step}
                      className={`hover:bg-[#FAF7F2] ${idx % 2 === 1 ? 'bg-[#FAF7F2]/50' : 'bg-white'}`}
                    >
                      <td className="py-4 px-4 text-center font-bold text-[#1F3864] border-r border-[#ECE6DB] font-mono text-base align-top">
                        {s.step}
                      </td>
                      <td className="py-4 px-5 font-bold text-[#1F3864] border-r border-[#ECE6DB] text-sm sm:text-base align-top">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#8C5A4B]" />
                          <span>{s.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-5 space-y-2 align-top leading-relaxed">
                        <div className="space-y-1.5 text-sm sm:text-base text-[#2A2822]">
                          {s.items.map((item, iIdx) => (
                            <div key={iIdx} className="flex items-start gap-2">
                              <span className="font-bold text-[#1F3864] shrink-0">{iIdx + 1}.</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* 特殊警示標籤 */}
                        {s.alert && (
                          <div className="mt-2 p-2.5 rounded-lg bg-rose-50 border border-rose-300 text-rose-900 font-bold text-xs sm:text-sm flex items-center gap-1.5">
                            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                            <span>{s.alert}</span>
                          </div>
                        )}

                        {/* 實務小撇步 */}
                        {s.tips && s.tips.length > 0 && (
                          <div className="mt-1.5 text-xs text-[#7D7065] space-y-1">
                            {s.tips.map((tip, tIdx) => (
                              <div key={tIdx} className="flex items-center gap-1 text-[#8C5A4B] font-medium">
                                <span>💡</span>
                                <span>{tip}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 流程總結重點小卡 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-2">
                <div className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6DA8]" />
                  <span>收件與分辦關鍵</span>
                </div>
                <p className="text-xs sm:text-sm text-[#5B584E] leading-relaxed">
                  公文系統右上角點選<strong>【陳情案管】</strong>進行簽收。如經檢視非屬地政局編定管制權責，切勿擱置，務必立刻至公文系統填寫改分表改分出去。
                </p>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border-2 border-[#E4DCC8] space-y-2">
                <div className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8C5A4B]" />
                  <span>紙本稿轉函入案關鍵</span>
                </div>
                <p className="text-xs sm:text-sm text-[#5B584E] leading-relaxed">
                  紙本收件於公文決行稿轉函後，<strong>萬勿直接發文</strong>！務必先於辦理區勾選該案，點擊<strong>【陳情案公文入案】</strong>確認案管系統已顯示結案，之後方得進行發文。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 模組二：回復範本 */}
      {/* ========================================================================= */}
      {activeMainTab === 'reply-drafts' && (
        <div className="space-y-6">
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-5">
            <div className="border-b border-[#ECE6DB] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864] flex items-center gap-2.5">
                  <FileText className="w-6 h-6 text-[#1F3864]" />
                  <span>回復範本</span>
                </h2>
              </div>
            </div>

            {/* 篩選與搜尋工具列 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              {/* 分類按鈕 */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setFilterCategory('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    filterCategory === 'all'
                      ? 'bg-[#1F3864] text-white shadow-2xs'
                      : 'bg-[#FAF7F2] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
                  }`}
                >
                  全部範本
                </button>

                <button
                  type="button"
                  onClick={() => setFilterCategory('general')}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    filterCategory === 'general'
                      ? 'bg-[#1F3864] text-white shadow-2xs'
                      : 'bg-[#FAF7F2] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
                  }`}
                >
                  一般回覆
                </button>

                <button
                  type="button"
                  onClick={() => setFilterCategory('other')}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    filterCategory === 'other'
                      ? 'bg-[#8C5A4B] text-white shadow-2xs'
                      : 'bg-[#FAF7F2] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
                  }`}
                >
                  【他機關業務】
                </button>
              </div>

              {/* 關鍵字搜尋框 */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-[#7D7065] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="搜尋範本情境或關鍵字..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-1.5 bg-[#FAF7F2] border border-[#DDD5C7] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#1F3864] transition-colors"
                />
              </div>
            </div>

            {/* 雙欄介面：左欄範本清單，右欄範本全文與一鍵複製 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-2 items-start">
              {/* 左欄：範本選單清單 */}
              <div className="md:col-span-5 bg-[#FAF7F2] border border-[#DDD5C7] rounded-xl p-3 space-y-2 max-h-[640px] overflow-y-auto">
                <div className="text-xs font-bold text-[#7D7065] px-2 py-1">
                  點選範本檢視全文（符合條件 {filteredDrafts.length} 筆）：
                </div>
                {filteredDrafts.map((d, idx) => {
                  const isSelected = d.id === currentDraft.id;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setSelectedDraftId(d.id)}
                      className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#1F3864] text-white border-[#1F3864] shadow-xs'
                          : 'bg-white hover:bg-[#F5EFE7] border-[#DDD5C7] text-[#2A2822]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span
                          className={`text-xs px-2 py-0.5 rounded font-bold ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : d.category === 'other'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-stone-100 text-stone-700'
                          }`}
                        >
                          {d.categoryLabel}
                        </span>
                        <span
                          className={`text-xs font-mono ${isSelected ? 'text-white/80' : 'text-[#7D7065]'}`}
                        >
                          #{idx + 1}
                        </span>
                      </div>
                      <div className="font-bold text-xs sm:text-sm leading-snug line-clamp-1">
                        {d.name}
                      </div>
                      <div
                        className={`text-xs mt-1 leading-tight line-clamp-2 ${
                          isSelected ? 'text-white/80' : 'text-[#7D7065]'
                        }`}
                      >
                        情境：{d.scenario}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* 右欄：範本內容展示與複製 */}
              <div className="md:col-span-7 bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl p-5 sm:p-6 space-y-4 shadow-2xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#ECE6DB]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                          currentDraft.category === 'other'
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'bg-blue-100 text-blue-900 border border-blue-300'
                        }`}
                      >
                        {currentDraft.categoryLabel}
                      </span>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-[#1F3864]">
                      ◼ {currentDraft.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8C5A4B] mt-0.5">
                      適用情境：{currentDraft.scenario}
                    </p>
                  </div>

                  {/* 複製按鈕 */}
                  <button
                    type="button"
                    onClick={() => handleCopyText(currentDraft.content)}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-[#1F3864] bg-[#FAF7F2] hover:bg-[#EAE2D7] border-2 border-[#1F3864]/40 hover:border-[#1F3864] rounded-lg transition-all cursor-pointer shadow-2xs self-start sm:self-auto shrink-0"
                  >
                    {copiedDraftSuccess ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>已複製全文</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#1F3864]" />
                        <span>複製回復全文</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 範本文字區塊 */}
                <div className="p-4 sm:p-5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] text-xs sm:text-sm text-[#2A2822] font-mono leading-relaxed whitespace-pre-wrap select-text">
                  {currentDraft.content}
                </div>

                {/* 貼心承辦人提醒 */}
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 leading-relaxed space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <span>📌 承辦填寫指引：</span>
                  </div>
                  <div>
                    文中標記 <code>OOOOOO</code> 為檢舉內容主旨，<code>OO 區 OO 段 OO 地號</code> 為違規座落地點，<code>OO 局</code> 與承辦人電話等欄位請依個案實際分案機關與事證替換填入。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
