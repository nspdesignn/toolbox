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
  Scissors,
  ArrowRight,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Home,
  Clock
} from 'lucide-react';

export interface CorrectionWizardProps {}

interface FlowNodeData {
  stepBadge: string;
  badgeStyle?: string;
  title: string;
  titleStyle?: string;
  desc: string;
  nodeType?: 'start' | 'normal' | 'branch' | 'split' | 'end';
}

export const CorrectionWizard: React.FC<CorrectionWizardProps> = () => {
  // 1. 申請更正編定之使用地類別: 'building' (建築用地，如甲/丙種建築用地) | 'other' (其他使用地，如農牧/林業/國土保安/交通等)
  const [targetLandType, setTargetLandType] = useState<'building' | 'other'>('building');

  // 2. 證明文件時間要件（以新北市民國70年2月15日公告編定基準日為準）:
  // 'before' (早於公告編定日) | 'after' (晚於公告編定日) | 'household_only' (僅有戶籍謄本設籍)
  const [docTime, setDocTime] = useState<'before' | 'after' | 'household_only'>('before');

  // 3. 現場建物實體存續現況:
  // 'intact' (原老屋完整存續) | 'expanded' (原老屋仍在但有擴建/改建) | 'collapsed' (老屋已全部倒塌滅失為空地)
  const [buildingStatus, setBuildingStatus] = useState<'intact' | 'expanded' | 'collapsed'>('intact');

  // 4. 土地更正範圍與地籍分割:
  // 'no' (全筆土地更正，免分割) | 'yes' (部分土地更正，須辦逕為分割)
  const [split, setSplit] = useState<'no' | 'yes'>('no');

  const [copied, setCopied] = useState<boolean>(false);
  const topRef = useRef<HTMLDivElement>(null);

  // 判定是否符合實質更正編定要件
  const isIneligibleTime = docTime === 'after';
  const isHouseholdOnly = docTime === 'household_only';
  const isBuildingCollapsed = targetLandType === 'building' && buildingStatus === 'collapsed';
  const isEligible = !isIneligibleTime && !isBuildingCollapsed && !isHouseholdOnly;

  const handleReset = () => {
    setTargetLandType('building');
    setDocTime('before');
    setBuildingStatus('intact');
    setSplit('no');
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 產製流程圖節點清單
  const generateFlowNodes = (): FlowNodeData[] => {
    // 情況 A：證明文件晚於公告編定日或老屋已滅失（不合更正要件，駁回程序）
    if (isIneligibleTime || isBuildingCollapsed) {
      const rejectNodes: FlowNodeData[] = [
        {
          nodeType: 'start',
          stepBadge: '步驟 1',
          title: '申請人送件（收件初審）',
          desc: '受理更正編定申請書、土地登記謄本、地籍圖謄本及申請人檢附之證明文件。'
        },
        {
          nodeType: 'normal',
          stepBadge: '步驟 2',
          badgeStyle: 'bg-amber-100 text-amber-800 border-amber-300',
          title: '書面及現況事證查核',
          desc: isIneligibleTime
            ? '經查核申請人提出之建物證明文件（如水電裝表日、房屋稅籍起課年份），其日期均晚於該管直轄市、縣市非都市土地公告編定生效日（新北市為民國70年2月15日），未符合公告前合法存在之實質時效要件。'
            : '會同轄區地政事務所實地勘查，現場原公告前之合法建物已全數倒塌滅失或拆除夷平為空地，已無任何實體建築物存在跡象。'
        },
        {
          nodeType: 'branch',
          stepBadge: '步驟 3',
          badgeStyle: 'bg-red-100 text-red-800 border-red-300',
          title: '判定不符更正要件',
          titleStyle: 'text-red-900',
          desc: isIneligibleTime
            ? '依非都市土地使用管制規則第35條之1規定，更正編定以編定公告前已符合製定非都市土地使用分區圖及編定各種使用地作業須知規定者為限。本案證明文件晚於公告日，依法不符要件。'
            : '依內政部78年台內地字第730811號函釋：「更正編定為建築用地，建物已滅失無存者，無更正編定之適用。」本案建物已倒塌滅失，不符法定要件。'
        },
        {
          nodeType: 'normal',
          stepBadge: '步驟 4',
          title: '簽核（簽擬不予准許）',
          desc: '彙整審查查核事證及相關法令函釋依據，簽報府層決核定不予准許更正編定。'
        },
        {
          nodeType: 'end',
          stepBadge: '步驟 5',
          badgeStyle: 'bg-stone-100 text-stone-800 border-stone-300',
          title: '駁回通知（正式發函駁回）',
          desc: '正式函復申請人駁回更正編定申請案，敘明不符法令依據及理由，並副知轄區地政事務所銷案結案。'
        }
      ];
      return rejectNodes;
    }

    // 情況 B：僅提出戶籍謄本設籍證明（須開立補正程序）
    if (isHouseholdOnly) {
      const noticeNodes: FlowNodeData[] = [
        {
          nodeType: 'start',
          stepBadge: '步驟 1',
          title: '申請人送件（收件初審）',
          desc: '受理更正編定申請書及戶籍謄本設籍證明。'
        },
        {
          nodeType: 'normal',
          stepBadge: '步驟 2',
          badgeStyle: 'bg-amber-100 text-amber-800 border-amber-300',
          title: '文件要件審查（單憑設籍不足）',
          desc: '審查發現申請人僅檢附戶籍設籍謄本，依內政部相關函釋規定，設籍僅能證明有人口設籍登記，不足以單獨直接認定現場確有實體合法建築物坐落。'
        },
        {
          nodeType: 'normal',
          stepBadge: '步驟 3',
          badgeStyle: 'bg-amber-100 text-amber-800 border-amber-300',
          title: '補正通知（限期檢附實體證明）',
          desc: '函請申請人限期檢附編定公告前之實體建物證明（如台電裝表供電證明、自來水接水證明、舊房屋稅籍證明或建物登記謄本），或向相關機關查調證明。'
        },
        {
          nodeType: 'branch',
          stepBadge: '步驟 4',
          badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300',
          title: '補正結果續處',
          titleStyle: 'text-blue-900',
          desc: '若申請人於期限內補正合格實體證明，續排現場會勘測量與實質審查；若逾期未補正或補正未完全者，依法簽報駁回。'
        }
      ];
      return noticeNodes;
    }

    // 情況 C：符合實質要件之更正編定完整作業流程
    const nodes: FlowNodeData[] = [];

    // 步驟 1: 送件
    nodes.push({
      nodeType: 'start',
      stepBadge: '步驟 1',
      title: '申請人送件（核對應備文件）',
      desc: targetLandType === 'building'
        ? '受理更正編定申請書、近3個月內土地登記第一類謄本、地籍圖謄本、公告編定前之合法建物證明文件（台電裝表通電證明、舊稅籍證明、自來水證明或建物謄本）及現況建物照片。'
        : '受理更正編定申請書、土地登記謄本、地籍圖謄本及編定公告前已符合目的使用地作業須知之原始證明文件。'
    });

    // 步驟 2: 調閱歷史航照與地籍套繪
    nodes.push({
      nodeType: 'normal',
      stepBadge: '步驟 2',
      title: '調閱檔案與歷史航照圖套繪',
      desc: '查核該宗土地非都市土地公告編定基準日（新北市為70年2月15日）；向農業部林業及自然保育署航測及遙感分署調取編定前最近年份之正射航照圖，套繪地籍圖界址，比對老屋輪廓與陰影坐落位置。'
    });

    // 步驟 3: 會辦各單位 + 現地勘查測量
    let surveyDesc = '';
    if (targetLandType === 'building') {
      if (buildingStatus === 'expanded') {
        surveyDesc = '會同轄區地政事務所測量課及建管單位實地會勘。比對現況建物構造與歷史航照；測量員實地測繪建物投影面積及法定空地。特別注意：僅得以公告前原合法建物坐落範圍辦理測繪更正，公告後自行擴建鐵皮或增建部分不得計入更正範圍。';
      } else {
        surveyDesc = '會同轄區地政事務所測量課及相關主管機關現場勘查。確認現況老屋構造與出入通路，由地政事務所測量員實地測繪合法老屋建築投影面積及依建築法規所需之法定空地。';
      }
    } else {
      surveyDesc = '會同轄區地政事務所及相關目的事業主管機關實地會勘，查核現況實際合法使用情形，製作現場會勘紀錄表。';
    }

    nodes.push({
      nodeType: 'normal',
      stepBadge: '步驟 3',
      title: '現場會勘與合法基地測量',
      desc: surveyDesc
    });

    // 步驟 4: 補正 (非必要)
    nodes.push({
      nodeType: 'normal',
      stepBadge: '步驟 4',
      badgeStyle: 'bg-amber-100 text-amber-800 border-amber-300',
      title: '補正 (非必要)',
      desc: '彙整現場會勘結論、測量成果圖或相關機關會辦意見。如有文件缺漏、航照套繪疑義或土地共有權利人身分問題，發函通知申請人限期辦理補正。'
    });

    // 步驟 5: 簽核（審查核准）
    nodes.push({
      nodeType: 'normal',
      stepBadge: '步驟 5',
      title: '審查審核與簽核核定',
      desc: '彙整地政事務所現場勘查紀錄表、合法建物測量成果圖、歷史航照比對表及編定前合法證明文件，審查符合非都市土地使用管制規則第35條之1及相關作業須知規定後，簽報府層決核定更正編定。'
    });

    // 步驟 6: 地籍逕為分割測量（依第4題分割條件分流）
    if (split === 'yes') {
      nodes.push({
        nodeType: 'branch',
        stepBadge: '步驟 6',
        badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300',
        title: '地籍逕為分割測量（部分更正案件）',
        titleStyle: 'text-blue-900',
        desc: '核准函檢附核准更正範圍圖說，函請轄區地政事務所辦理土地逕為分割複丈。分割後老屋基地更正為建築用地（子筆），其餘非坐落範圍土地維持原編定（母筆）。'
      });
    } else {
      nodes.push({
        nodeType: 'normal',
        stepBadge: '步驟 6',
        badgeStyle: 'bg-stone-100 text-stone-700 border-stone-300',
        title: '免辦地籍分割（全筆更正案件）',
        desc: '本案為整筆土地全數符合更正編定範圍，無須向轄區地政事務所辦理地籍逕為分割測量，逕行接續辦理異動登記。'
      });
    }

    // 步驟 7: 異動登記與登錄土參檔
    let transDesc = '';
    if (split === 'yes') {
      transDesc = '地政事務所辦竣地籍逕為分割複丈測量後，辦理土地登記簿標示部使用地類別更正登記，並登錄土地參考資訊檔（土參檔），副知稅捐稽徵機關調整地價稅稅籍，函復申請人並結案。';
    } else {
      transDesc = '核准函直接副本囑託轄區地政事務所辦理土地登記簿標示部使用地類別更正登記，並登錄土地參考資訊檔（土參檔），副知稅捐機關更正稅籍，發發核准公文函復申請人。';
    }

    nodes.push({
      nodeType: 'end',
      stepBadge: '步驟 7',
      title: '異動（囑託地政事務所登記）',
      desc: transDesc
    });

    return nodes;
  };

  const flowNodes = generateFlowNodes();

  // 複製流程圖文字
  const handleCopyFlowText = () => {
    let text = `【新北市非都市土地更正編定作業流程圖】\n`;
    text += `■ 案件條件：\n`;
    text += `  1. 更正使用地類別：${targetLandType === 'building' ? '更正為建築用地（甲/丙種建築用地）' : '更正為其他使用地'}\n`;
    text += `  2. 證明文件時點：${
      docTime === 'before'
        ? '早於公告編定基準日（符合時效）'
        : docTime === 'after'
        ? '晚於公告編定基準日（不合要件）'
        : '僅有戶籍謄本設籍證明（須補正）'
    }\n`;
    text += `  3. 現場建物現況：${
      buildingStatus === 'intact'
        ? '原老屋完整存續'
        : buildingStatus === 'expanded'
        ? '老屋有擴建改建（僅合法範圍得更正）'
        : '原老屋已倒塌滅失（空地）'
    }\n`;
    text += `  4. 地籍分割：${split === 'no' ? '全筆更正（免辦分割）' : '部分更正（須辦逕為分割）'}\n\n`;
    text += `■ 作業流程步驟：\n`;

    flowNodes.forEach((node) => {
      text += `[${node.stepBadge}] ${node.title}\n`;
      text += `說明：${node.desc}\n\n`;
    });

    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-5" ref={topRef}>
      {/* 頂部標頭與大型重設按鈕 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#704437] flex items-center gap-2">
            <Compass className="w-6 h-6 text-[#8C5A4B]" />
            <span>更正編定判斷精靈</span>
          </h2>
          <p className="text-sm sm:text-base text-[#7D7065] mt-1">
            點選案件條件，快速自動產製客製化作業流程圖
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="self-start sm:self-center px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base font-bold text-[#8C5A4B] bg-[#FAF7F4] hover:bg-[#F2ECE4] border-2 border-[#8C5A4B] rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-xs active:scale-95 shrink-0"
        >
          <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-[#8C5A4B]" />
          <span>重設條件</span>
        </button>
      </div>

      {/* 題目 1: 申請更正編定之使用地類別 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-5 sm:p-6 shadow-xs space-y-3">
        <div className="text-base sm:text-lg font-bold text-[#2D2623] flex items-center gap-2">
          <span>1. 申請更正編定之使用地類別</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setTargetLandType('building')}
            className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col gap-1 ${
              targetLandType === 'building'
                ? 'bg-[#FFFFFF] border-[#8C5A4B] text-[#704437] shadow-sm ring-2 ring-[#8C5A4B]/20'
                : 'bg-[#FAF7F4] border-[#E6DFD5] text-[#2D2623] hover:bg-[#F4EFEB]'
            }`}
          >
            <div className="font-bold text-base flex items-center gap-2">
              <Home className="w-4 h-4 text-[#8C5A4B]" />
              <span>更正為建築用地（老舊合法房屋）</span>
            </div>
            <span className="text-xs sm:text-sm text-[#7D7065] font-normal leading-relaxed">
              最常見類型：編定公告前已建有合法自用房屋，申請更正為甲種、乙種或丙種建築用地
            </span>
          </button>

          <button
            type="button"
            onClick={() => setTargetLandType('other')}
            className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col gap-1 ${
              targetLandType === 'other'
                ? 'bg-[#FFFFFF] border-[#8C5A4B] text-[#704437] shadow-sm ring-2 ring-[#8C5A4B]/20'
                : 'bg-[#FAF7F4] border-[#E6DFD5] text-[#2D2623] hover:bg-[#F4EFEB]'
            }`}
          >
            <div className="font-bold text-base flex items-center gap-2">
              <Building className="w-4 h-4 text-[#8C5A4B]" />
              <span>更正為其他使用地（非建築用地）</span>
            </div>
            <span className="text-xs sm:text-sm text-[#7D7065] font-normal leading-relaxed">
              因編定當時清冊誤植或漏列，更正為農牧、林業、國土保安、交通或水利用地等
            </span>
          </button>
        </div>
      </div>

      {/* 題目 2: 證明文件時間要件 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-5 sm:p-6 shadow-xs space-y-3">
        <div className="text-base sm:text-lg font-bold text-[#2D2623] flex items-center justify-between flex-wrap gap-2">
          <span>2. 證明文件時間要件（是否早於公告編定日？）</span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FAF7F2] text-[#8C5A4B] border border-[#DDD5C7]">
            新北市公告編定基準日：民國70年2月15日
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => setDocTime('before')}
            className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col gap-1 ${
              docTime === 'before'
                ? 'bg-[#FFFFFF] border-[#8C5A4B] text-[#704437] shadow-sm ring-2 ring-[#8C5A4B]/20'
                : 'bg-[#FAF7F4] border-[#E6DFD5] text-[#2D2623] hover:bg-[#F4EFEB]'
            }`}
          >
            <div className="font-bold text-base flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>早於公告編定日</span>
            </div>
            <span className="text-xs sm:text-sm text-[#7D7065] font-normal leading-relaxed">
              檢附70.2.15前之水電裝表證明、舊房屋稅籍、建物謄本或歷史航照圖
            </span>
          </button>

          <button
            type="button"
            onClick={() => setDocTime('after')}
            className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col gap-1 ${
              docTime === 'after'
                ? 'bg-[#FFFFFF] border-[#8C5A4B] text-[#704437] shadow-sm ring-2 ring-[#8C5A4B]/20'
                : 'bg-[#FAF7F4] border-[#E6DFD5] text-[#2D2623] hover:bg-[#F4EFEB]'
            }`}
          >
            <div className="font-bold text-base flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>晚於公告編定日</span>
            </div>
            <span className="text-xs sm:text-sm text-[#7D7065] font-normal leading-relaxed">
              證明文件均在公告編定日之後始設立，不符合法定更正時效要件
            </span>
          </button>

          <button
            type="button"
            onClick={() => setDocTime('household_only')}
            className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col gap-1 ${
              docTime === 'household_only'
                ? 'bg-[#FFFFFF] border-[#8C5A4B] text-[#704437] shadow-sm ring-2 ring-[#8C5A4B]/20'
                : 'bg-[#FAF7F4] border-[#E6DFD5] text-[#2D2623] hover:bg-[#F4EFEB]'
            }`}
          >
            <div className="font-bold text-base flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>僅有戶籍謄本設籍</span>
            </div>
            <span className="text-xs sm:text-sm text-[#7D7065] font-normal leading-relaxed">
              僅提戶籍設籍證明，查無水電或稅籍證明，依函釋須開立限期補正
            </span>
          </button>
        </div>

        {/* 提示警語卡片 */}
        {docTime === 'after' && (
          <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs sm:text-sm text-rose-900 leading-relaxed flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong>不符合要件警告：</strong>更正編定以非都市土地編定公告前已合法存在之事實為限。若提出之證明文件晚於民國70年2月15日，依法應簽擬審查不符要件並正式函復駁回。
            </div>
          </div>
        )}

        {docTime === 'household_only' && (
          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-900 leading-relaxed flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>補正通知程序：</strong>依內政部函釋，單憑戶籍謄本僅能證明設籍，無法直接推定現場確有實體合法建築物，不得逕行核准，應發函限期申請人補正通電證明或舊稅籍證明。
            </div>
          </div>
        )}
      </div>

      {/* 題目 3: 現場建物實體存續現況（更正為建地時檢核） */}
      {targetLandType === 'building' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-5 sm:p-6 shadow-xs space-y-3">
          <div className="text-base sm:text-lg font-bold text-[#2D2623] flex items-center gap-2">
            <span>3. 現場老屋實體存續現況</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setBuildingStatus('intact')}
              className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col gap-1 ${
                buildingStatus === 'intact'
                  ? 'bg-[#FFFFFF] border-[#8C5A4B] text-[#704437] shadow-sm ring-2 ring-[#8C5A4B]/20'
                  : 'bg-[#FAF7F4] border-[#E6DFD5] text-[#2D2623] hover:bg-[#F4EFEB]'
              }`}
            >
              <div className="font-bold text-base flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>原老屋完整存續</span>
              </div>
              <span className="text-xs sm:text-sm text-[#7D7065] font-normal leading-relaxed">
                原公告前老屋主體構造完整，仍有人居住或供原合法用途使用
              </span>
            </button>

            <button
              type="button"
              onClick={() => setBuildingStatus('expanded')}
              className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col gap-1 ${
                buildingStatus === 'expanded'
                  ? 'bg-[#FFFFFF] border-[#8C5A4B] text-[#704437] shadow-sm ring-2 ring-[#8C5A4B]/20'
                  : 'bg-[#FAF7F4] border-[#E6DFD5] text-[#2D2623] hover:bg-[#F4EFEB]'
              }`}
            >
              <div className="font-bold text-base flex items-center gap-1.5">
                <Scissors className="w-4 h-4 text-amber-600" />
                <span>原老屋有擴建／改建</span>
              </div>
              <span className="text-xs sm:text-sm text-[#7D7065] font-normal leading-relaxed">
                老屋仍在但有擴建鐵皮或改建，僅公告前原合法範圍得更正，擴建部分不得計入
              </span>
            </button>

            <button
              type="button"
              onClick={() => setBuildingStatus('collapsed')}
              className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col gap-1 ${
                buildingStatus === 'collapsed'
                  ? 'bg-[#FFFFFF] border-[#8C5A4B] text-[#704437] shadow-sm ring-2 ring-[#8C5A4B]/20'
                  : 'bg-[#FAF7F4] border-[#E6DFD5] text-[#2D2623] hover:bg-[#F4EFEB]'
              }`}
            >
              <div className="font-bold text-base flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>老屋已全部倒塌滅失</span>
              </div>
              <span className="text-xs sm:text-sm text-[#7D7065] font-normal leading-relaxed">
                老屋已全數倒塌或拆除夷平為空地，依內政部函釋「不得再申請更正編定」
              </span>
            </button>
          </div>

          {buildingStatus === 'collapsed' && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs sm:text-sm text-rose-900 leading-relaxed flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong>建物滅失不得更正依據：</strong>內政部78年台內地字第730811號函釋明確規定，更正編定為建築用地以現存合法建物實際坐落之基地為限，若建物已滅失無存者，無更正編定之適用，應予駁回。
              </div>
            </div>
          )}
        </div>
      )}

      {/* 題目 4: 土地更正範圍與地籍分割 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-5 sm:p-6 shadow-xs space-y-3">
        <div className="text-base sm:text-lg font-bold text-[#2D2623] flex items-center gap-2">
          <span>{targetLandType === 'building' ? '4. 土地更正範圍與地籍分割' : '3. 土地更正範圍與地籍分割'}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setSplit('no')}
            className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col gap-1 ${
              split === 'no'
                ? 'bg-[#FFFFFF] border-[#8C5A4B] text-[#704437] shadow-sm ring-2 ring-[#8C5A4B]/20'
                : 'bg-[#FAF7F4] border-[#E6DFD5] text-[#2D2623] hover:bg-[#F4EFEB]'
            }`}
          >
            <div className="font-bold text-base flex items-center gap-2">
              <span>全筆土地更正（免分割）</span>
            </div>
            <span className="text-xs sm:text-sm text-[#7D7065] font-normal leading-relaxed">
              整筆地號全數符合更正範圍與法定空地，核准後免向地所辦理土地分割
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSplit('yes')}
            className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col gap-1 ${
              split === 'yes'
                ? 'bg-[#FFFFFF] border-[#8C5A4B] text-[#704437] shadow-sm ring-2 ring-[#8C5A4B]/20'
                : 'bg-[#FAF7F4] border-[#E6DFD5] text-[#2D2623] hover:bg-[#F4EFEB]'
            }`}
          >
            <div className="font-bold text-base flex items-center gap-2">
              <span>部分土地更正（須辦逕為分割）</span>
            </div>
            <span className="text-xs sm:text-sm text-[#7D7065] font-normal leading-relaxed">
              僅老屋坐落基地與法定空地更正，核准後由地政事務所辦竣地籍逕為分割測量再行異動
            </span>
          </button>
        </div>
      </div>

      {/* 產製作業流程圖（底圖與外框與上方條件區有明顯區隔，膠囊標籤全部移除） */}
      <div id="flowchart-printable-area" className="bg-[#FAF6F0] border-2 border-[#A06C5D] rounded-2xl p-5 sm:p-6 shadow-sm">
        <div className="pb-4 mb-4 border-b border-[#A06C5D]/20 flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#5A4B43] flex items-center gap-2">
            <span>產製作業流程圖</span>
          </h3>
        </div>

        {/* 流程節點清單 */}
        <div className="space-y-3">
          {flowNodes.map((node, index) => {
            const hasNext = index < flowNodes.length - 1;
            return (
              <React.Fragment key={index}>
                <div className="p-4 sm:p-5 bg-white border border-[#DDD5C7] rounded-xl shadow-2xs hover:border-[#8C5A4B]/50 transition-colors">
                  <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                    <span
                      className={`text-xs sm:text-sm font-bold px-3 py-1 rounded-md border ${
                        node.badgeStyle || 'bg-[#8C5A4B] text-white border-[#8C5A4B]'
                      }`}
                    >
                      {node.stepBadge}
                    </span>
                    <h4
                      className={`text-base sm:text-lg font-bold text-[#2D2623] ${
                        node.titleStyle || ''
                      }`}
                    >
                      {node.title}
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base text-[#4A3E39] leading-relaxed pl-0.5">
                    {node.desc}
                  </p>
                </div>

                {hasNext && (
                  <div className="flex justify-center py-0.5">
                    <div className="w-0.5 h-4 bg-[#A06C5D]/40" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* 下方動作按鈕列 */}
        <div className="mt-6 pt-4 border-t border-[#A06C5D]/20 flex items-center justify-end gap-3 flex-wrap">
          <button
            type="button"
            onClick={handleCopyFlowText}
            className="px-4 py-2.5 text-sm sm:text-base font-bold text-[#5A4B43] bg-white hover:bg-[#F2ECE4] border-2 border-[#DDD5C7] hover:border-[#8C5A4B] rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-xs active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>已複製流程文字</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#8C5A4B]" />
                <span>複製流程文字</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="px-5 py-2.5 text-sm sm:text-base font-bold text-white bg-[#8C5A4B] hover:bg-[#704437] rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-xs active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>列印流程圖</span>
          </button>
        </div>
      </div>

      {/* 最下方「判斷下一件」大型按鈕 */}
      <div className="pt-2 pb-6 flex justify-center">
        <button
          type="button"
          onClick={handleReset}
          className="w-full sm:w-auto min-w-[280px] px-8 py-4 text-base sm:text-lg font-bold text-white bg-[#8C5A4B] hover:bg-[#704437] rounded-xl transition-all cursor-pointer flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-98"
        >
          <RotateCcw className="w-5 h-5 text-white" />
          <span>判斷下一件</span>
          <ArrowRight className="w-5 h-5 text-white ml-1" />
        </button>
      </div>
    </div>
  );
};
