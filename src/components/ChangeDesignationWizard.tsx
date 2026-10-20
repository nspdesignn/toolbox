import React, { useState, useRef } from 'react';
import {
  Compass,
  RotateCcw,
  Printer,
  Copy,
  Check,
  Building,
  CheckCircle2,
  FileCheck2,
  AlertCircle,
  HelpCircle,
  Mountain,
  Coins,
  Scissors,
  ArrowRight,
  ShieldCheck,
  FileText
} from 'lucide-react';

export interface ChangeDesignationWizardProps {}

interface FlowNodeData {
  stepBadge: string;
  badgeStyle?: string;
  title: string;
  titleStyle?: string;
  desc: string;
  nodeType?: 'start' | 'normal' | 'branch' | 'split' | 'end';
}

// 8項山坡地提審查會檢核免提條件
interface ExemptionOption {
  id: number;
  label: string;
  sub?: string;
  isNone?: boolean;
}

const EXEMPTION_OPTIONS: ExemptionOption[] = [
  {
    id: 1,
    label: '符合第 35 條、第 35 條之 1 第 1 項第 1、2、4 或 5 款規定之零星或狹小土地'
  },
  {
    id: 2,
    label: '依第 40 條規定已檢附需地機關核發之拆除通知書'
  },
  {
    id: 3,
    label: '鄉村區土地變更編定為乙種建築用地'
  },
  {
    id: 4,
    label: '變更編定為農牧、林業、國土保安或生態保護用地'
  },
  {
    id: 5,
    label: '案件已經區域計畫委員會審議通過'
  },
  {
    id: 6,
    label: '符合規則第 48 條第 1 項第 2 款或第 3 款情形之一',
    sub: '（建築用地間相互變更；或徵收/撥用/協議價購一併辦理）'
  },
  {
    id: 7,
    label: '單純將現有道路變更編定為交通用地，作道路使用'
  },
  {
    id: 8,
    label: '以上皆無，均未符合',
    sub: '（均未符合上述1~7項免提條件，依規定須提送審查會）',
    isNone: true
  }
];

export const ChangeDesignationWizard: React.FC<ChangeDesignationWizardProps> = () => {
  // 1. 案件辦理途徑: 'general' (一般變更編定) | 'concurrent' (公地撥用一併變更)
  const [caseType, setCaseType] = useState<'general' | 'concurrent'>('general');

  // 2. 山坡地判斷: 'no' (非山坡地/平地) | 'yes' (位於山坡地範圍)
  const [isHillside, setIsHillside] = useState<'no' | 'yes'>('no');

  // 2-1. 8項勾選清單 (用於判定山坡地是否提審查會：勾選1~7任一項 => 免提；勾選8或均未勾 => 提審查會)
  const [checkedExemptions, setCheckedExemptions] = useState<number[]>([]);

  // 3. 農業回饋金 (僅非山坡地時檢核；山坡地案件不涉及農業回饋金檢核): 'required' (須繳納) | 'exempt' (免繳納)
  const [agriFee, setAgriFee] = useState<'required' | 'exempt'>('required');

  // 4. 地籍分割 (一般案件與公地撥用皆須檢核): 'no' (全筆變更免分割) | 'yes' (部分土地變更須辦分割)
  const [split, setSplit] = useState<'no' | 'yes'>('no');

  const [copied, setCopied] = useState<boolean>(false);
  const topRef = useRef<HTMLDivElement>(null);

  // 判定是否提審查會：
  // 第 1～7 項只要勾選任一項＝免提審查會；全部未勾選、或勾選第 8 項「以上皆無」＝提審查會
  const hasExemptionSelected = checkedExemptions.some(id => id >= 1 && id <= 7);
  const isHillsideReviewRequired = isHillside === 'yes' && !hasExemptionSelected;

  // 處理 8 項勾選項目的勾選與互斥切換
  const handleToggleExemption = (id: number) => {
    if (id === 8) {
      // 勾選第 8 項：與 1~7 項互斥，若已勾則取消，若未勾則只保留 8
      if (checkedExemptions.includes(8)) {
        setCheckedExemptions([]);
      } else {
        setCheckedExemptions([8]);
      }
    } else {
      // 勾選 1~7 項：自動取消第 8 項
      if (checkedExemptions.includes(id)) {
        setCheckedExemptions(checkedExemptions.filter(item => item !== id));
      } else {
        const withoutEight = checkedExemptions.filter(item => item !== 8);
        setCheckedExemptions([...withoutEight, id]);
      }
    }
  };

  const handleReset = () => {
    setCaseType('general');
    setIsHillside('no');
    setCheckedExemptions([]);
    setAgriFee('required');
    setSplit('no');
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 產製流程圖節點清單
  const generateFlowNodes = (): FlowNodeData[] => {
    // 途徑二：公地撥用一併變更編定（亦面臨要不要分割這關）
    if (caseType === 'concurrent') {
      const concurrentNodes: FlowNodeData[] = [
        {
          nodeType: 'start',
          stepBadge: '步驟 1',
          title: '申請人送件（需用土地人送件）',
          desc: '需用土地人檢附撥用公地申請書及中央核准撥用證明文件（確認撥用計畫書已勾選「撥用一併變更編定」，依管制規則第48條免水保完工證明）。'
        },
        {
          nodeType: 'normal',
          stepBadge: '步驟 2',
          badgeStyle: 'bg-stone-100 text-stone-700 border-stone-300',
          title: '補正 (非必要)',
          desc: '核對撥用及一併變更編定應備文件，如有缺漏通知需用土地人補齊（依要點第10點原則免會辦相關單位）。'
        },
        {
          nodeType: 'normal',
          stepBadge: '步驟 3',
          title: '書面審查與簽核',
          desc: '依非都市土地變更編定執行要點第10點審查（免現場勘查、免繳審查規費、免提審查會），審查符合管制規則規定後簽報層決核定。'
        }
      ];

      // 步驟 4: 核發變更編定核定函（含地籍分割銜接判斷）
      let concApprovalDesc = '奉核後發函核復需用土地人，核定一併變更編定結果。';
      if (split === 'yes') {
        concApprovalDesc += '【地籍分割】涉及部分公地撥用變更，請需用土地人洽轄區地政事務所辦竣地籍逕為分割後，再檢附分割成果資料續辦異動。';
      } else {
        concApprovalDesc += '【全筆變更】無涉土地分割，核定函同步副知地政事務所辦理後續登載。';
      }

      concurrentNodes.push({
        nodeType: 'branch',
        stepBadge: '步驟 4',
        badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300',
        title: '核發變更編定核定函' + (split === 'yes' ? '（須銜接地籍分割）' : '（全筆免分割）'),
        titleStyle: 'text-blue-900',
        desc: concApprovalDesc
      });

      // 步驟 5: 囑託地所辦理異動登記
      concurrentNodes.push({
        nodeType: 'end',
        stepBadge: '步驟 5',
        title: '囑託地政事務所辦理異動登記',
        desc: split === 'yes'
          ? '涉及公地分割：需用機關辦竣地籍逕為分割測量後，函請轄區地所完成土地登記簿標示部使用地類別異動登記，並登錄土參檔。'
          : '全筆免分割：核定函直接副本請轄區地政事務所完成土地登記簿使用地類別異動登記，並登錄土參檔。'
      });

      return concurrentNodes;
    }

    // 途徑一：一般變更編定案件
    const nodes: FlowNodeData[] = [];

    // 步驟 1: 送件
    nodes.push({
      nodeType: 'start',
      stepBadge: '步驟 1',
      title: '申請人送件（核對應備文件）',
      desc: isHillside === 'yes'
        ? '受理變更編定申請書及興辦事業計畫核准函。山坡地範圍須擬具水保計畫者，應檢附水保完工證明（管制規則第28、30、48條）。'
        : '受理變更編定申請書、興辦事業計畫核准函、土地登記謄本、環敏查詢結果等應備文件（管制規則第28、30條）。'
    });

    // 步驟 2: 會辦 + 會勘 + 繳規費（已移除「每筆400元」）
    nodes.push({
      nodeType: 'normal',
      stepBadge: '步驟 2',
      title: '會辦各單位 + 會勘 + 繳規費',
      desc: isHillside === 'yes'
        ? '檢送審查表會辦工務、農業、水利、環保等局處，並依「非都市山坡地範圍內土地變更編定審查原則」會審；會辦農業局審認是否涉及山坡地開發利用回饋金；訂期實地會勘指界，開立規費繳款書通知申請人繳納。'
        : '檢送審查表會辦工務、農業、水利、環保等相關局處；訂期聯合實地會勘指界，並開立規費繳款書通知申請人繳納。'
    });

    // 步驟 3: 補正(非必要)
    nodes.push({
      nodeType: 'normal',
      stepBadge: '步驟 3',
      badgeStyle: 'bg-amber-100 text-amber-800 border-amber-300',
      title: '補正 (非必要)',
      desc: '彙整各會辦機關意見及現場會勘結論，如有審查意見或缺件，發文通知申請人限期辦理補正。'
    });

    // 步驟 4: 簽核
    if (isHillside === 'yes' && isHillsideReviewRequired) {
      nodes.push({
        nodeType: 'normal',
        stepBadge: '步驟 4',
        badgeStyle: 'bg-purple-100 text-purple-800 border-purple-300',
        title: '簽核（簽報提審查會）',
        desc: '經檢核未符合1~7項免提審查會條件，彙整各單位審查意見與山坡地審查原則分工表，簽擬召開「新北市非都市土地使用審議小組審查會」，簽准後製作提會資料。'
      });
    } else {
      nodes.push({
        nodeType: 'normal',
        stepBadge: '步驟 4',
        title: '簽核（簽擬核准）',
        desc: isHillside === 'yes'
          ? '本案符合免提審查會規定（已勾選符合免提審查會項目），彙整各機關審查合格意見，簽奉府層決核定。'
          : '平地案件免提山坡地審查會，彙整各單位審查同意意見及會勘結果，簽報層決核定變更編定。'
      });
    }

    // 步驟 5: 提審查會(非必要)
    if (isHillside === 'yes') {
      if (isHillsideReviewRequired) {
        nodes.push({
          nodeType: 'branch',
          stepBadge: '步驟 5',
          badgeStyle: 'bg-amber-100 text-amber-800 border-amber-300',
          title: '提審查會（新北市非都市土地使用審議小組）',
          titleStyle: 'text-amber-900',
          desc: '發開會通知單，召開非都市土地使用審議小組審查會；通知申請人及專業技師列席說明坡度分析及建築配置，會後製作會議紀錄簽准發文。'
        });
      } else {
        nodes.push({
          nodeType: 'normal',
          stepBadge: '步驟 5',
          badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          title: '免提審查會（符合免提專審條件）',
          titleStyle: 'text-emerald-900',
          desc: '本案經檢核符合免提審議小組審查規定，免提審查會，逕依一般簽核程序簽奉核定。'
        });
      }
    } else {
      nodes.push({
        nodeType: 'normal',
        stepBadge: '步驟 5',
        badgeStyle: 'bg-stone-100 text-stone-700 border-stone-300',
        title: '免提審查會（非山坡地案件）',
        desc: '本案土地位於平地（非山坡地範圍），依法免提非都市土地使用審議小組審查。'
      });
    }

    // 步驟 6: 核准
    let approvalDesc = '審核符合管制規則規定，核發變更編定核准函。';
    if (isHillside === 'yes') {
      approvalDesc += '【山坡地回饋金】可能涉及山坡地開發利用回饋金，依農業局審查結果為主，如有涉及應依規定繳納並檢送相關證明。';
    } else if (agriFee === 'required') {
      approvalDesc += '【農業回饋金】由農業主管機關核算回饋金並發單，核准後申請人須檢送繳款證明，地政局始得續辦地所登記函請程序。';
    } else {
      approvalDesc += '【農業回饋金】依法免繳納農業回饋金。';
    }

    if (split === 'yes') {
      approvalDesc += '【地籍分割】涉及部分土地變更，請申請人先洽轄區地政事務所辦竣地籍逕為分割後，再檢附分割資料續辦異動。';
    } else {
      approvalDesc += '【地籍分割】全筆土地變更，無涉地籍分割。';
    }

    nodes.push({
      nodeType: 'branch',
      stepBadge: '步驟 6',
      badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300',
      title: '核准（發核准函與繳款/分割銜接）',
      titleStyle: 'text-blue-900',
      desc: approvalDesc
    });

    // 步驟 7: 異動
    let transDesc = '';
    if (isHillside === 'no' && agriFee === 'required') {
      if (split === 'yes') {
        transDesc = '須繳農變回饋金案件（涉及土地分割）：核准後申請人須檢送農業回饋金繳款證明，並辦竣地籍逕為分割測量後，始得函請轄區地政事務所辦理土地使用地類別異動登記及登錄土參檔。';
      } else {
        transDesc = '須繳農變回饋金案件（全筆免分割）：核准後申請人須檢送農業回饋金繳款證明，地政局確認繳竣後，始得函請轄區地政事務所辦理土地使用地類別異動登記及登錄土參檔。';
      }
    } else if (isHillside === 'yes') {
      if (split === 'yes') {
        transDesc = '部分土地辦理分割案件：核准後申請人須辦竣地籍逕為分割測量後，始得函請轄區地所辦理土地使用地類別異動登記及登錄土參檔。';
      } else {
        transDesc = '全筆免分割案件：核准後副本函請轄區地政事務所辦理土地使用地類別異動登記及登錄土參檔。';
      }
    } else {
      if (split === 'yes') {
        transDesc = '免繳農業回饋金案件（涉及土地分割）：申請人辦竣土地逕為分割並檢送成果後，函請轄區地所辦理土地使用地類別異動登記及登錄土參檔。';
      } else {
        transDesc = '免繳農業回饋金案件（全筆免分割）：核准函直接副本請轄區地政事務所辦理土地使用地類別異動登記，並登錄土參檔。';
      }
    }

    nodes.push({
      nodeType: 'end',
      stepBadge: '步驟 7',
      title: '異動（函請地政事務所登記）',
      desc: transDesc
    });

    return nodes;
  };

  const flowNodes = generateFlowNodes();

  const handleCopyText = () => {
    const title = caseType === 'concurrent' ? '公地撥用一併變更編定流程圖' : '一般變更編定作業流程圖';
    let text = `【${title}】\n`;
    flowNodes.forEach((node, idx) => {
      text += `${idx + 1}. [${node.stepBadge}] ${node.title}：${node.desc}\n`;
    });
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 強化列印支援：直接使用 window.print()，並增加隱藏非流程圖元素、以及在新獨立視窗印製之健全防護
  const handlePrint = () => {
    try {
      // 建立乾淨的獨立列印視窗以克服任何 iframe 巢狀隔離
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        const title = caseType === 'concurrent' ? '公地撥用一併變更編定流程圖' : '一般變更編定作業流程圖';
        let nodesHtml = '';
        flowNodes.forEach((node, idx) => {
          nodesHtml += `
            <div style="border: 1.5px solid #DDD5C7; border-radius: 10px; padding: 14px 18px; margin-bottom: 12px; background: #FFFDF9; page-break-inside: avoid;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-weight: bold; background: #8C5A4B; color: #fff; padding: 3px 10px; border-radius: 6px; font-size: 13px;">${node.stepBadge}</span>
                <span style="font-size: 12px; color: #888; font-family: monospace;">STEP ${String(idx + 1).padStart(2, '0')}</span>
              </div>
              <div style="font-size: 16px; font-weight: bold; color: #4A3E39; margin-bottom: 6px;">${node.title}</div>
              <div style="font-size: 14px; color: #444; line-height: 1.6;">${node.desc}</div>
            </div>
          `;
          if (idx < flowNodes.length - 1) {
            nodesHtml += `
              <div style="text-align: center; color: #8C5A4B; font-size: 18px; line-height: 1; margin: -4px 0 8px 0;">▼</div>
            `;
          }
        });

        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>${title}</title>
              <style>
                body {
                  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang TC", "Microsoft JhengHei", sans-serif;
                  padding: 24px;
                  color: #333;
                  max-width: 800px;
                  margin: 0 auto;
                }
                h1 {
                  font-size: 22px;
                  color: #4A3E39;
                  border-bottom: 2px solid #8C5A4B;
                  padding-bottom: 8px;
                  margin-bottom: 16px;
                }
                .meta {
                  font-size: 13px;
                  color: #666;
                  margin-bottom: 20px;
                }
              </style>
            </head>
            <body>
              <h1>${title}</h1>
              <div class="meta">
                產製時間：${new Date().toLocaleDateString('zh-TW')} | 條件：${
                  caseType === 'concurrent'
                    ? `公地撥用一併變更編定 (${split === 'yes' ? '須辦地籍分割' : '全筆免分割'})`
                    : `${isHillside === 'yes' ? '山坡地範圍' : '非山坡地'}、${isHillside === 'yes' ? (isHillsideReviewRequired ? '須提審查會' : '免提審查會') : (agriFee === 'required' ? '須繳農業回饋金' : '免繳農業回饋金')}、${split === 'yes' ? '須辦地籍分割' : '全筆免分割'}`
                }
              </div>
              <div>${nodesHtml}</div>
              <script>
                window.onload = function() {
                  window.print();
                };
              <\/script>
            </body>
          </html>
        `);
        printWindow.document.close();
      } else {
        // 若瀏覽器彈跳視窗被攔截，則降級調用本地 window.print()
        window.print();
      }
    } catch (e) {
      window.print();
    }
  };

  return (
    <div ref={topRef} className="space-y-6 max-w-4xl mx-auto">
      {/* 頂部標題與大型重設按鈕 */}
      <div className="bg-white border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-[#8C5A4B] text-white flex items-center justify-center shrink-0 shadow-xs">
            <Compass className="w-7 h-7 text-amber-200" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-tc text-[#4A3E39]">
              變更編定判斷精靈
            </h2>
            <p className="text-sm text-[#7D7065] mt-0.5">
              點選案件條件，快速自動產製客製化作業流程圖
            </p>
          </div>
        </div>

        {/* 大尺寸醒目的重設條件按鈕 */}
        <button
          onClick={handleReset}
          className="flex items-center justify-center gap-2.5 px-6 py-3 text-base font-bold text-[#8C5A4B] bg-[#FAF7F4] hover:bg-[#F2ECE4] border-2 border-[#8C5A4B] rounded-xl transition-all cursor-pointer shadow-xs active:scale-95"
        >
          <RotateCcw className="w-5 h-5 text-[#8C5A4B]" />
          <span>重設條件</span>
        </button>
      </div>

      {/* 題目 1: 案件辦理途徑 */}
      <div className="bg-white border-2 border-[#DDD5C7] rounded-xl p-5 shadow-xs">
        <h3 className="text-base sm:text-lg font-bold text-[#4A3E39] mb-3 flex items-center gap-2">
          <Building className="w-5 h-5 text-[#8C5A4B]" />
          <span>1. 案件辦理途徑</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <button
            type="button"
            onClick={() => setCaseType('general')}
            className={`p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between cursor-pointer ${
              caseType === 'general'
                ? 'border-[#8C5A4B] bg-white ring-2 ring-[#8C5A4B]/20 shadow-xs'
                : 'border-[#E6DFD5] bg-[#FAF7F4] hover:bg-[#F2ECE4]'
            }`}
          >
            <div className="flex items-center justify-between font-bold text-[#4A3E39] text-base">
              <span>一般變更編定案件</span>
              {caseType === 'general' && <Check className="w-5 h-5 text-[#8C5A4B]" />}
            </div>
            <span className="text-xs sm:text-sm text-[#7D7065] mt-1.5">
              依非都市土地使用管制規則第28條申辦（須會辦、實地會勘、開繳規費）
            </span>
          </button>

          <button
            type="button"
            onClick={() => setCaseType('concurrent')}
            className={`p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between cursor-pointer ${
              caseType === 'concurrent'
                ? 'border-[#8C5A4B] bg-white ring-2 ring-[#8C5A4B]/20 shadow-xs'
                : 'border-[#E6DFD5] bg-[#FAF7F4] hover:bg-[#F2ECE4]'
            }`}
          >
            <div className="flex items-center justify-between font-bold text-[#4A3E39] text-base">
              <span>公地撥用一併變更編定</span>
              {caseType === 'concurrent' && <Check className="w-5 h-5 text-[#8C5A4B]" />}
            </div>
            <span className="text-xs sm:text-sm text-[#7D7065] mt-1.5">
              依變更編定執行要點第10點申辦（政府機關撥用公地，免會勘、免規費、免提專審）
            </span>
          </button>
        </div>
      </div>

      {caseType === 'general' && (
        <div className="space-y-5">
          {/* 題目 2: 是否位於山坡地範圍？ */}
          <div className="bg-white border-2 border-[#DDD5C7] rounded-xl p-5 shadow-xs">
            <h3 className="text-base sm:text-lg font-bold text-[#4A3E39] mb-3 flex items-center gap-2">
              <Mountain className="w-5 h-5 text-[#8C5A4B]" />
              <span>2. 是否位於山坡地範圍？</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <button
                type="button"
                onClick={() => setIsHillside('no')}
                className={`p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between cursor-pointer ${
                  isHillside === 'no'
                    ? 'border-[#8C5A4B] bg-white ring-2 ring-[#8C5A4B]/20 shadow-xs'
                    : 'border-[#E6DFD5] bg-[#FAF7F4] hover:bg-[#F2ECE4]'
                }`}
              >
                <div className="flex items-center justify-between font-bold text-[#4A3E39] text-base">
                  <span>否（非山坡地 / 平地）</span>
                  {isHillside === 'no' && <Check className="w-5 h-5 text-[#8C5A4B]" />}
                </div>
                <span className="text-xs sm:text-sm text-[#7D7065] mt-1.5">
                  平地案件，依法免提山坡地審查會，續檢核農業回饋金
                </span>
              </button>

              <button
                type="button"
                onClick={() => setIsHillside('yes')}
                className={`p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between cursor-pointer ${
                  isHillside === 'yes'
                    ? 'border-[#8C5A4B] bg-white ring-2 ring-[#8C5A4B]/20 shadow-xs'
                    : 'border-[#E6DFD5] bg-[#FAF7F4] hover:bg-[#F2ECE4]'
                }`}
              >
                <div className="flex items-center justify-between font-bold text-[#4A3E39] text-base">
                  <span>是（位於山坡地範圍）</span>
                  {isHillside === 'yes' && <Check className="w-5 h-5 text-[#8C5A4B]" />}
                </div>
                <span className="text-xs sm:text-sm text-[#7D7065] mt-1.5">
                  位於山坡地範圍，可能涉及山坡地開發利用回饋金（依農業局審查結果為主），續檢核是否提審議小組審查會
                </span>
              </button>
            </div>

            {/* 山坡地範圍：8項是否提審查會之勾選檢核 */}
            {isHillside === 'yes' && (
              <div className="mt-5 pt-4 border-t border-[#ECE6DB] bg-[#FAF7F4] p-4 sm:p-5 rounded-xl border border-[#DDD5C7]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">
                      山坡地審查檢核
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-[#4A3E39]">
                      是否涉及建築行為（提審議小組審查會檢核）？
                    </h4>
                  </div>
                  {/* 動態判斷狀態提示 */}
                  <div className="shrink-0">
                    {isHillsideReviewRequired ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                        判定：提審查會
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                        判定：免提審查會
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-[#7D7065] mb-3.5 leading-relaxed bg-white/70 p-2.5 rounded-lg border border-[#EBE3D7]">
                  <strong className="text-[#8C5A4B]">審查邏輯：</strong>
                  第 1～7 項只要勾選任一項＝<strong>免提審查會</strong>；全部未勾選、或勾選第 8 項「以上皆無」＝<strong>提審查會</strong>。
                </p>

                <div className="space-y-2">
                  {EXEMPTION_OPTIONS.map((opt) => {
                    const isChecked = checkedExemptions.includes(opt.id);
                    return (
                      <label
                        key={opt.id}
                        onClick={() => handleToggleExemption(opt.id)}
                        className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                          isChecked
                            ? opt.isNone
                              ? 'bg-amber-50/80 border-amber-500 text-amber-950'
                              : 'bg-emerald-50/80 border-emerald-600 text-emerald-950'
                            : 'bg-white border-[#E6DFD5] hover:bg-[#F5EFE9] text-[#4A3E39]'
                        }`}
                      >
                        <div className="pt-0.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}} // 由 label 點擊處理
                            className="w-4 h-4 rounded text-[#8C5A4B] focus:ring-[#8C5A4B] cursor-pointer"
                          />
                        </div>
                        <div className="flex-1 text-xs sm:text-sm">
                          <div className="font-semibold leading-relaxed">
                            {opt.id}. {opt.label}
                          </div>
                          {opt.sub && (
                            <div className={`text-xs mt-0.5 ${isChecked ? 'opacity-90' : 'text-[#7D7065]'}`}>
                              {opt.sub}
                            </div>
                          )}
                        </div>
                        {isChecked && (
                          <div className="shrink-0 pt-0.5">
                            {opt.isNone ? (
                              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900">
                                須提審查會
                              </span>
                            ) : (
                              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">
                                免提審查會
                              </span>
                            )}
                          </div>
                        )}
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 題目 3: 農業回饋金繳納檢核 */}
          <div className="bg-white border-2 border-[#DDD5C7] rounded-xl p-5 shadow-xs">
            <h3 className="text-base sm:text-lg font-bold text-[#4A3E39] mb-3 flex items-center gap-2">
              <Coins className="w-5 h-5 text-[#8C5A4B]" />
              <span>3. 農業回饋金繳納檢核</span>
            </h3>

            {isHillside === 'yes' ? (
              /* 山坡地範圍：可能涉及山坡地開發利用回饋金，依農業局審查結果為主 */
              <div className="p-4 rounded-xl bg-[#FAF7F4] border-2 border-amber-300 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm sm:text-base font-bold text-[#4A3E39]">
                    山坡地範圍案件：可能涉及山坡地開發利用回饋金，依農業局審查結果為主
                  </div>
                  <div className="text-xs sm:text-sm text-[#7D7065] mt-1 leading-relaxed">
                    本案位於山坡地範圍，可能涉及「山坡地開發利用回饋金」，由農業局依山坡地保育利用條例相關規定審查認定並核算。
                  </div>
                </div>
              </div>
            ) : (
              /* 平地案件：須繳納農業回饋金者，核准後亦須檢送繳款證明始得函請地所辦理登記 */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <button
                  type="button"
                  onClick={() => setAgriFee('required')}
                  className={`p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between cursor-pointer ${
                    agriFee === 'required'
                      ? 'border-[#8C5A4B] bg-white ring-2 ring-[#8C5A4B]/20 shadow-xs'
                      : 'border-[#E6DFD5] bg-[#FAF7F4] hover:bg-[#F2ECE4]'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-[#4A3E39] text-base">
                    <span>須繳納農業回饋金</span>
                    {agriFee === 'required' && <Check className="w-5 h-5 text-[#8C5A4B]" />}
                  </div>
                  <span className="text-xs sm:text-sm text-[#7D7065] mt-1.5">
                    核准後須檢送繳款證明，後續才能函請轄區地所辦理土地使用地類別異動登記及登錄土參檔
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setAgriFee('exempt')}
                  className={`p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between cursor-pointer ${
                    agriFee === 'exempt'
                      ? 'border-[#8C5A4B] bg-white ring-2 ring-[#8C5A4B]/20 shadow-xs'
                      : 'border-[#E6DFD5] bg-[#FAF7F4] hover:bg-[#F2ECE4]'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-[#4A3E39] text-base">
                    <span>免繳農業回饋金</span>
                    {agriFee === 'exempt' && <Check className="w-5 h-5 text-[#8C5A4B]" />}
                  </div>
                  <span className="text-xs sm:text-sm text-[#7D7065] mt-1.5">
                    非屬農牧/林業用地變更，或依農業發展條例相關規定免繳
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 題目 4: 土地變更範圍與地籍分割（無論一般案件或公地撥用皆須檢核要不要分割） */}
      <div className="bg-white border-2 border-[#DDD5C7] rounded-xl p-5 shadow-xs">
        <h3 className="text-base sm:text-lg font-bold text-[#4A3E39] mb-3 flex items-center gap-2">
          <Scissors className="w-5 h-5 text-[#8C5A4B]" />
          <span>{caseType === 'concurrent' ? '2. 公地撥用範圍與地籍分割' : '4. 土地變更範圍與地籍分割'}</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#7D7065] mb-3">
          {caseType === 'concurrent'
            ? '公地撥用一併變更編定案件，依撥用計畫範圍判定是否須辦理地籍逕為分割：'
            : '一般變更編定案件，依申請變更範圍判定核准後是否須先行辦理地籍分割：'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <button
            type="button"
            onClick={() => setSplit('no')}
            className={`p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between cursor-pointer ${
              split === 'no'
                ? 'border-[#8C5A4B] bg-white ring-2 ring-[#8C5A4B]/20 shadow-xs'
                : 'border-[#E6DFD5] bg-[#FAF7F4] hover:bg-[#F2ECE4]'
            }`}
          >
            <div className="flex items-center justify-between font-bold text-[#4A3E39] text-base">
              <span>全筆土地變更（免分割）</span>
              {split === 'no' && <Check className="w-5 h-5 text-[#8C5A4B]" />}
            </div>
            <span className="text-xs sm:text-sm text-[#7D7065] mt-1.5">
              整筆地號全數變更編定，無須向轄區地政事務所辦理土地分割
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSplit('yes')}
            className={`p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between cursor-pointer ${
              split === 'yes'
                ? 'border-[#8C5A4B] bg-white ring-2 ring-[#8C5A4B]/20 shadow-xs'
                : 'border-[#E6DFD5] bg-[#FAF7F4] hover:bg-[#F2ECE4]'
            }`}
          >
            <div className="flex items-center justify-between font-bold text-[#4A3E39] text-base">
              <span>部分土地變更（須辦分割）</span>
              {split === 'yes' && <Check className="w-5 h-5 text-[#8C5A4B]" />}
            </div>
            <span className="text-xs sm:text-sm text-blue-700 font-medium mt-1.5">
              涉及部分土地變更，核准後須先洽地所辦竣逕為分割測量再行異動登記
            </span>
          </button>
        </div>
      </div>

      {/* 產製作業流程圖（底圖與外框與上方條件區有明顯區隔，膠囊標籤已全部移除） */}
      <div id="flowchart-printable-area" className="bg-[#FAF6F0] border-2 border-[#A06C5D] rounded-2xl p-5 sm:p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[#E3D9CC]">
          <CheckCircle2 className="w-6 h-6 text-[#8C5A4B]" />
          <h3 className="text-lg sm:text-xl font-bold text-[#4A3E39]">
            {caseType === 'concurrent'
              ? '公地撥用一併變更編定流程圖'
              : '一般變更編定作業流程圖'}
          </h3>
        </div>

        {/* 流程圖節點樹（文字放大，排版更舒展清晰） */}
        <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0">
          {flowNodes.map((node, index) => (
            <React.Fragment key={index}>
              <div
                className={`w-full p-4 sm:p-5 rounded-xl border-2 transition-all shadow-xs ${
                  node.nodeType === 'start' || node.nodeType === 'end'
                    ? 'bg-[#F7EFEA] border-[#8C5A4B]'
                    : node.nodeType === 'branch'
                    ? 'bg-[#FFFDF9] border-amber-400'
                    : 'bg-white border-[#DDD5C7]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span
                      className={`text-xs sm:text-sm font-bold px-3 py-1 rounded-md border ${
                        node.badgeStyle || 'bg-[#FAF7F4] text-[#7D7065] border-[#DDD5C7]'
                      }`}
                    >
                      {node.stepBadge}
                    </span>
                    <span className="text-xs text-[#A89C90] font-mono font-bold">
                      STEP {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* 標題字體加大 */}
                  <div
                    className={`text-base sm:text-lg font-bold ${
                      node.titleStyle || 'text-[#4A3E39]'
                    }`}
                  >
                    {node.title}
                  </div>

                  {/* 步驟說明小字放大至 text-sm sm:text-base，行距更舒適 */}
                  <div className="text-sm sm:text-[15px] text-[#4A3E39]/90 mt-2 leading-relaxed">
                    {node.desc}
                  </div>
                </div>
              </div>

              {/* 節點間箭頭 */}
              {index < flowNodes.length - 1 && (
                <div className="h-9 flex items-center justify-center text-[#8C5A4B] py-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 複製與列印工具列 */}
        <div className="mt-8 pt-4 border-t border-[#ECE6DB] flex items-center justify-end gap-3">
          <button
            onClick={handleCopyText}
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#4A3E39] bg-[#FAF7F4] border border-[#DDD5C7] hover:bg-[#F2ECE4] rounded-xl transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>已複製流程文字！</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>複製流程文字</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            title="開啟預覽列印或儲存為 PDF"
            className="flex items-center gap-2 px-5 py-2.5 text-sm sm:text-base font-bold text-white bg-[#8C5A4B] hover:bg-[#72483B] rounded-xl shadow-xs transition-colors cursor-pointer active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>列印流程圖</span>
          </button>
        </div>
      </div>

      {/* 最下方的巨大「判斷下一件」按鈕 */}
      <div className="pt-2 pb-6 flex justify-center">
        <button
          onClick={handleReset}
          className="w-full sm:w-auto min-w-[300px] flex items-center justify-center gap-3 px-8 py-4 bg-[#8C5A4B] hover:bg-[#734437] text-white font-bold text-lg rounded-2xl shadow-md hover:shadow-lg transition-all transform active:scale-98 cursor-pointer"
        >
          <RotateCcw className="w-6 h-6 text-amber-200" />
          <span>判斷下一件</span>
          <ArrowRight className="w-6 h-6 opacity-80" />
        </button>
      </div>
    </div>
  );
};
