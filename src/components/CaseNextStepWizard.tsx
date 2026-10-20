import React, { useState, useMemo } from 'react';
import { evaluateCaseNextStep, DecisionInput } from '../data/wizardRules';
import { WizardResult } from '../types';
import {
  Compass,
  CheckCircle2,
  AlertTriangle,
  Clock,
  BookOpen,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  FileText,
  HelpCircle,
  Building,
  AlertCircle
} from 'lucide-react';

interface CaseNextStepWizardProps {
  onGoToModule?: (moduleId: string) => void;
}

export const CaseNextStepWizard: React.FC<CaseNextStepWizardProps> = ({ onGoToModule }) => {
  const [origin, setOrigin] = useState<string>('public_apply');
  const [landCategory, setLandCategory] = useState<string>('agri_forestry');
  const [goal, setGoal] = useState<string>('build_residence_old');
  const [hasOldPermitOrBuilding, setHasOldPermitOrBuilding] = useState<boolean>(true);
  const [hasProjectApproval, setHasProjectApproval] = useState<boolean>(false);
  const [isEncroachedOrReported, setIsEncroachedOrReported] = useState<boolean>(false);

  // Checklist state for documents
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [copiedDraft, setCopiedDraft] = useState<boolean>(false);
  const [copiedMissing, setCopiedMissing] = useState<boolean>(false);

  const input: DecisionInput = useMemo(
    () => ({
      origin,
      landCategory,
      goal,
      hasOldPermitOrBuilding,
      hasProjectApproval,
      isEncroachedOrReported
    }),
    [origin, landCategory, goal, hasOldPermitOrBuilding, hasProjectApproval, isEncroachedOrReported]
  );

  const result: WizardResult = useMemo(() => evaluateCaseNextStep(input), [input]);

  const toggleDoc = (doc: string) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [doc]: !prev[doc]
    }));
  };

  const resetForm = () => {
    setOrigin('public_apply');
    setLandCategory('agri_forestry');
    setGoal('build_residence_old');
    setHasOldPermitOrBuilding(true);
    setHasProjectApproval(false);
    setIsEncroachedOrReported(false);
    setCheckedDocs({});
  };

  // Missing docs
  const missingDocs = result.requiredDocsChecklist.filter((doc) => !checkedDocs[doc]);

  const copyMissingDocs = () => {
    if (missingDocs.length === 0) {
      navigator.clipboard.writeText('【本案所有應備文件均已齊備無缺件】');
    } else {
      const text = `【非都市土地案件補正清單】\n受文者請補正下列文件：\n` + missingDocs.map((d, i) => `${i + 1}. ${d}`).join('\n');
      navigator.clipboard.writeText(text);
    }
    setCopiedMissing(true);
    setTimeout(() => setCopiedMissing(false), 2000);
  };

  const copyDraft = () => {
    navigator.clipboard.writeText(result.documentTemplateSnippet);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E4DCC8]">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1F3864] text-white flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif-tc text-[#1F3864]">
                新人案件下一步判斷精靈
              </h2>
              <p className="text-xs sm:text-sm text-[#5B584E] mt-0.5">
                收到公文或民眾送件不知道怎麼辦？選擇以下條件，立即產出「下一步第一動、檢核清單與公文範本」
              </p>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#5B584E] hover:text-[#1F3864] bg-[#F8F5EE] border border-[#E4DCC8] rounded-md transition-colors self-start sm:self-auto cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>重置條件</span>
          </button>
        </div>

        {/* Form Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
          {/* 1. 案件來源 */}
          <div>
            <label className="block text-xs font-bold text-[#1F3864] mb-2 uppercase tracking-wide">
              1. 案件來源與收件類型
            </label>
            <select
              value={origin}
              onChange={(e) => {
                setOrigin(e.target.value);
                if (e.target.value === 'township_report' || e.target.value === 'public_petition') {
                  setIsEncroachedOrReported(true);
                  setGoal('illegal_use_checking');
                }
              }}
              className="w-full bg-[#FAF8F2] border border-[#E4DCC8] rounded-lg px-3 py-2 text-sm text-[#2A2822] focus:outline-hidden focus:border-[#1F3864] focus:ring-1 focus:ring-[#1F3864]"
            >
              <option value="public_apply">民眾臨櫃 / 郵寄親辦申請書</option>
              <option value="township_report">公所查報違規公文（巡查查報）</option>
              <option value="competent_authority">目的事業主管機關函送（興辦核准）</option>
              <option value="building_court_dep">建管處 / 法院 / 地政所囑託會勘</option>
              <option value="public_petition">民眾陳情檢舉（1999 / 首長信箱）</option>
            </select>
          </div>

          {/* 2. 土地編定現況 */}
          <div>
            <label className="block text-xs font-bold text-[#1F3864] mb-2 uppercase tracking-wide">
              2. 土地目前編定類別
            </label>
            <select
              value={landCategory}
              onChange={(e) => setLandCategory(e.target.value)}
              className="w-full bg-[#FAF8F2] border border-[#E4DCC8] rounded-lg px-3 py-2 text-sm text-[#2A2822] focus:outline-hidden focus:border-[#1F3864] focus:ring-1 focus:ring-[#1F3864]"
            >
              <option value="agri_forestry">農牧用地 / 林業用地 / 養殖用地</option>
              <option value="building_land">甲 / 乙 / 丙 / 丁種建築用地</option>
              <option value="special_purpose">特定目的事業用地 / 交通 / 礦業用地</option>
              <option value="unassigned">土地謄本使用地為「空白」（未編定）</option>
              <option value="special_restricted">國家公園 / 特定水土保持區 / 河川區</option>
            </select>
          </div>

          {/* 3. 申請訴求或實質情況 */}
          <div>
            <label className="block text-xs font-bold text-[#1F3864] mb-2 uppercase tracking-wide">
              3. 案件主要訴求或現場行為
            </label>
            <select
              value={goal}
              onChange={(e) => {
                setGoal(e.target.value);
                if (e.target.value === 'business_plan_change') {
                  setHasProjectApproval(true);
                }
              }}
              className="w-full bg-[#FAF8F2] border border-[#E4DCC8] rounded-lg px-3 py-2 text-sm text-[#2A2822] focus:outline-hidden focus:border-[#1F3864] focus:ring-1 focus:ring-[#1F3864]"
            >
              <option value="build_residence_old">編定前老屋欲更正登記為建地（更正編定）</option>
              <option value="apply_permitted_agri">擬蓋農業資材室、溫室、蓄水池（農業設施）</option>
              <option value="build_farmhouse">擬興建自用農舍</option>
              <option value="business_camping_solar">想做露營場、休閒農場或太陽能光電</option>
              <option value="business_plan_change">已取得主管機關興辦核准函，欲變更編定</option>
              <option value="illegal_use_checking">現場涉填土、堆置土石、違建或工廠（違規查報）</option>
              <option value="petition_dispute">陳情反映鄰地通行、環境污染或地用爭議</option>
            </select>
          </div>
        </div>

        {/* Quick Checkbox Flags */}
        <div className="mt-4 pt-4 border-t border-[#E4DCC8] flex flex-wrap items-center gap-4 text-xs font-medium text-[#2A2822]">
          <span className="text-[#5B584E]">關鍵要件快篩：</span>
          <label className="flex items-center gap-1.5 cursor-pointer bg-[#F8F5EE] px-2.5 py-1.5 rounded-md border border-[#E4DCC8] hover:border-[#1F3864]">
            <input
              type="checkbox"
              checked={hasOldPermitOrBuilding}
              onChange={(e) => setHasOldPermitOrBuilding(e.target.checked)}
              className="rounded text-[#1F3864] focus:ring-[#1F3864]"
            />
            <span>有編定公告前水電/稅籍老屋證明</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer bg-[#F8F5EE] px-2.5 py-1.5 rounded-md border border-[#E4DCC8] hover:border-[#1F3864]">
            <input
              type="checkbox"
              checked={hasProjectApproval}
              onChange={(e) => setHasProjectApproval(e.target.checked)}
              className="rounded text-[#1F3864] focus:ring-[#1F3864]"
            />
            <span>已取得目的事業主管機關興辦核准公函</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer bg-[#F8F5EE] px-2.5 py-1.5 rounded-md border border-[#E4DCC8] hover:border-[#1F3864]">
            <input
              type="checkbox"
              checked={isEncroachedOrReported}
              onChange={(e) => setIsEncroachedOrReported(e.target.checked)}
              className="rounded text-[#1F3864] focus:ring-[#1F3864]"
            />
            <span>屬違規使用查報或遭民眾檢舉案件</span>
          </label>
        </div>
      </div>

      {/* Decision Output Card */}
      <div className="bg-[#FFFFFF] border-2 border-[#1F3864] rounded-xl overflow-hidden shadow-sm">
        {/* Banner */}
        <div className="bg-[#1F3864] text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-200 uppercase tracking-wider font-semibold mb-1">
              <span>案件診斷結果</span>
              <span>·</span>
              <span>法定業務途徑</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-serif-tc text-white">
              {result.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-white/15 text-white border border-white/25 rounded-md text-xs font-semibold whitespace-nowrap">
              {result.routeType}
            </span>
            {onGoToModule && (
              <button
                onClick={() => onGoToModule(result.recommendedModule)}
                className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-md text-xs font-bold transition-colors whitespace-nowrap cursor-pointer"
              >
                前往專題模組
              </button>
            )}
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-6">
          {/* Section A: Next Action Steps (The core requirement for newcomers) */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-4 bg-[#B45309] rounded-xs inline-block" />
              <h4 className="text-base font-bold text-[#1F3864]">
                【下一步第一動】承辦人員具體處置順序
              </h4>
            </div>
            <div className="space-y-2.5">
              {result.immediateNextAction.map((action, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#FAF8F2] border border-[#E4DCC8] rounded-lg text-sm text-[#2A2822] leading-relaxed flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>{action}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section B: Document Checklist (Interactive) */}
          <div className="bg-[#FAF8F2] border border-[#E4DCC8] rounded-xl p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#1F3864] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#1F3864]" />
                  <span>應備文件檢核清單（初審核對表）</span>
                </h4>
                <p className="text-xs text-[#5B584E] mt-0.5">
                  已收齊項目請打勾；未勾選項目可一鍵產出補正通知清單。
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#5B584E]">
                  已核對{' '}
                  <strong className="text-[#1F3864]">
                    {Object.values(checkedDocs).filter(Boolean).length}
                  </strong>{' '}
                  / {result.requiredDocsChecklist.length} 項
                </span>
                <button
                  onClick={copyMissingDocs}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-[#1F3864] bg-[#FFFFFF] border border-[#1F3864] rounded-md hover:bg-[#1F3864] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                >
                  {copiedMissing ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedMissing ? '已複製缺件' : '複製缺件清單'}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {result.requiredDocsChecklist.map((doc, idx) => {
                const isChecked = !!checkedDocs[doc];
                return (
                  <label
                    key={idx}
                    className={`flex items-start gap-2.5 p-2.5 rounded-lg border text-xs sm:text-sm cursor-pointer transition-colors ${
                      isChecked
                        ? 'bg-[#EAF3EE] border-[#8FBDA3] text-[#235A3D]'
                        : 'bg-[#FFFFFF] border-[#E4DCC8] text-[#2A2822] hover:border-[#1F3864]'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleDoc(doc)}
                      className="mt-0.5 rounded text-[#235A3D] focus:ring-[#235A3D]"
                    />
                    <span className={isChecked ? 'line-through opacity-75' : ''}>{doc}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Section C: Deadline & Legal Basis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Deadline */}
            <div className="p-4 bg-[#FFFFFF] border border-[#E4DCC8] rounded-xl flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-[#5B584E] uppercase tracking-wider mb-1">
                  法定處理時效與期限提醒
                </h5>
                <p className="text-sm font-semibold text-[#2A2822]">
                  {result.handlingDeadline}
                </p>
              </div>
            </div>

            {/* Legal Basis */}
            <div className="p-4 bg-[#FFFFFF] border border-[#E4DCC8] rounded-xl flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-[#1F3864] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-[#5B584E] uppercase tracking-wider mb-1">
                  適用法令與函釋依據
                </h5>
                <ul className="text-xs text-[#2A2822] space-y-1">
                  {result.legalBasis.map((law, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-[#1F3864] rounded-full shrink-0" />
                      <span>{law}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section D: Newbie Pitfalls & Warning Notes */}
          <div className="p-4 bg-[#FEF6F0] border-l-4 border-amber-500 rounded-r-xl">
            <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>實務避坑指南（新人最常犯的錯誤）</span>
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm text-amber-900 leading-relaxed">
              {result.newbieTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold shrink-0">·</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section E: Official Document Draft Template */}
          <div className="bg-[#FAF8F2] border border-[#E4DCC8] rounded-xl p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-[#1F3864] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#1F3864]" />
                <span>預擬公文簽稿草案（可直接複製修改）</span>
              </h4>
              <button
                onClick={copyDraft}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-[#1F3864] hover:bg-[#152544] rounded-md transition-colors cursor-pointer"
              >
                {copiedDraft ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedDraft ? '已複製公文' : '一鍵複製公文稿'}</span>
              </button>
            </div>
            <pre className="p-4 bg-[#FFFFFF] border border-[#E4DCC8] rounded-lg text-xs sm:text-sm text-[#2A2822] font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
              {result.documentTemplateSnippet}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
