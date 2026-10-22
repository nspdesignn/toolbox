import React, { useState } from 'react';
import { CASE_EXAMPLES } from '../data/caseExamplesData';
import { CaseExample } from '../types';
import { FileText, Copy, Check, Info, CheckCircle2, ChevronRight, FileCode } from 'lucide-react';

export const CaseExamplesView: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_EXAMPLES[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  // Dynamic template customization state
  const [customApplicant, setCustomApplicant] = useState<string>('OOO');
  const [customLot, setCustomLot] = useState<string>('OO段 OO 地號');
  const [customArea, setCustomArea] = useState<string>('350');

  const selectedCase = CASE_EXAMPLES.find((c) => c.id === selectedCaseId) || CASE_EXAMPLES[0];

  const handleCopyDraft = () => {
    const formattedDraft = `${selectedCase.documentTemplate.title}
【受文者】：${selectedCase.documentTemplate.recipient}
【主旨】：${selectedCase.documentTemplate.subject.replace(/張先生|陳某|黃○○|台端|OOO/g, customApplicant).replace(/123地號|456地號|789地號|333地號|OO地號/g, customLot)}

【說明】：
${selectedCase.documentTemplate.descriptions
  .map((d) => d.replace(/123地號|456地號|789地號|333地號|OO地號/g, customLot).replace(/280平方公尺|1,800平方公尺/g, `${customArea}平方公尺`))
  .join('\n')}
`;
    navigator.clipboard.writeText(formattedDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E4DCC8]">
          <div>
            <div className="text-xs font-semibold text-[#1F3864] uppercase tracking-wider mb-1">
              實務經驗庫
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-tc text-[#1F3864]">
              真實案件範例與公文簽稿公版
            </h2>
            <p className="text-xs sm:text-sm text-[#5B584E] mt-1">
              精選非都市土地常見典型案件，拆解承辦推演過程，並提供實用公文範本與簽呈草稿。
            </p>
          </div>
        </div>

        {/* Case selector tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-4">
          {CASE_EXAMPLES.map((item) => {
            const isSelected = item.id === selectedCaseId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCaseId(item.id)}
                className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1F3864] text-white border-[#1F3864] shadow-sm'
                    : 'bg-[#FAF8F2] text-[#2A2822] border-[#E4DCC8] hover:border-[#1F3864]'
                }`}
              >
                <div className="text-[11px] font-semibold text-amber-500 mb-1">
                  案例 0{item.id.replace('case-0', '')}
                </div>
                <div className="text-xs font-bold line-clamp-2 leading-snug">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Case Details View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Case Facts & Handling Steps (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl p-5 sm:p-6 shadow-xs">
            <h3 className="text-lg font-bold font-serif-tc text-[#1F3864] mb-2">
              {selectedCase.title}
            </h3>

            <div className="inline-block text-xs font-semibold text-[#5B584E] bg-[#FAF8F2] px-3 py-1.5 rounded-md border border-[#E4DCC8] mb-4">
              <strong>標的標示：</strong> {selectedCase.landInfo}
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-[#5B584E] uppercase tracking-wider mb-1.5">
                  【案情事實摘述】
                </h4>
                <p className="text-sm text-[#2A2822] leading-relaxed bg-[#FAF8F2] p-3.5 rounded-lg border border-[#E4DCC8]">
                  {selectedCase.factSummary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#5B584E] uppercase tracking-wider mb-2">
                  【承辦處置歷程拆解】
                </h4>
                <div className="space-y-2.5">
                  {selectedCase.handlingProcess.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#FFFFFF] border border-[#E4DCC8] rounded-lg text-xs sm:text-sm text-[#2A2822] space-y-1"
                    >
                      <div className="font-bold text-[#1F3864] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#235A3D] shrink-0" />
                        <span>{step.step}</span>
                      </div>
                      <p className="pl-5 text-[#2A2822]">{step.action}</p>
                      <p className="pl-5 text-xs text-[#5B584E] italic">備註：{step.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Critical decision takeaway */}
              <div className="p-4 bg-[#EAF3EE] border border-[#8FBDA3] rounded-xl text-xs sm:text-sm text-[#235A3D]">
                <strong className="block font-bold mb-1">關鍵裁量心法：</strong>
                {selectedCase.criticalDecision}
              </div>

              <div className="p-3 bg-[#FAF8F2] border border-[#E4DCC8] rounded-lg text-xs text-[#5B584E]">
                <strong>處理成果：</strong> {selectedCase.outcome}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Document Draft Generator (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#FFFFFF] border-2 border-[#1F3864] rounded-xl overflow-hidden shadow-xs sticky top-20">
            <div className="bg-[#1F3864] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-amber-300" />
                <h4 className="text-sm font-bold text-white">
                  {selectedCase.documentTemplate.title}
                </h4>
              </div>
              <button
                onClick={handleCopyDraft}
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-500 rounded-md transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '已複製' : '一鍵複製公文'}</span>
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Dynamic replacement input controls */}
              <div className="bg-[#FAF8F2] p-3 rounded-lg border border-[#E4DCC8] space-y-2 text-xs">
                <div className="font-bold text-[#1F3864] flex items-center gap-1">
                  <Info className="w-3.5 h-3.5" />
                  <span>公文欄位動態套印</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] text-[#5B584E]">受處分人 / 申請人：</label>
                    <input
                      type="text"
                      value={customApplicant}
                      onChange={(e) => setCustomApplicant(e.target.value)}
                      className="w-full bg-white border border-[#E4DCC8] rounded px-2 py-1 text-xs text-[#2A2822]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#5B584E]">地號：</label>
                    <input
                      type="text"
                      value={customLot}
                      onChange={(e) => setCustomLot(e.target.value)}
                      className="w-full bg-white border border-[#E4DCC8] rounded px-2 py-1 text-xs text-[#2A2822]"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-[11px] text-[#5B584E]">更正/核准面積 (㎡)：</label>
                    <input
                      type="text"
                      value={customArea}
                      onChange={(e) => setCustomArea(e.target.value)}
                      className="w-full bg-white border border-[#E4DCC8] rounded px-2 py-1 text-xs text-[#2A2822]"
                    />
                  </div>
                </div>
              </div>

              {/* Document Preview Box */}
              <div className="p-3.5 bg-[#FAF8F2] border border-[#E4DCC8] rounded-lg font-mono text-xs text-[#2A2822] space-y-2 leading-relaxed max-h-[360px] overflow-y-auto">
                <div className="font-bold text-[#1F3864]">
                  受文者：{selectedCase.documentTemplate.recipient}
                </div>
                <div>
                  <span className="font-bold">主旨：</span>
                  {selectedCase.documentTemplate.subject
                    .replace(/張先生|陳某|黃○○|台端|OOO/g, customApplicant)
                    .replace(/123地號|456地號|789地號|333地號|OO地號/g, customLot)}
                </div>
                <div className="space-y-1 pt-1">
                  <div className="font-bold">說明：</div>
                  {selectedCase.documentTemplate.descriptions.map((desc, idx) => (
                    <div key={idx}>
                      {desc
                        .replace(/123地號|456地號|789地號|333地號|OO地號/g, customLot)
                        .replace(/280平方公尺|1,800平方公尺/g, `${customArea}平方公尺`)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
