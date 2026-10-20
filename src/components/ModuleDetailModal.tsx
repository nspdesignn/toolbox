import React from 'react';
import { BusinessModule } from '../types';
import { X, CheckCircle, AlertTriangle, BookOpen, ArrowRight, Layers } from 'lucide-react';

interface ModuleDetailModalProps {
  module: BusinessModule | null;
  onClose: () => void;
  onOpenWizard: () => void;
  onGoToWorkflow: (workflowId: string) => void;
}

export const ModuleDetailModal: React.FC<ModuleDetailModalProps> = ({
  module,
  onClose,
  onOpenWizard,
  onGoToWorkflow
}) => {
  if (!module) return null;

  const getWorkflowId = (id: string) => {
    if (id === 'change-designation') return 'change';
    if (id === 'correction') return 'correction';
    if (id === 'illegal-use') return 'illegal';
    if (id === 'permitted-use') return 'permitted';
    return 'correction';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div
        className="bg-[#FFFFFF] border-2 border-[#1F3864] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1F3864] text-white p-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-200 font-semibold mb-1">
              <span>非都市土地業務手冊</span>
              <span>·</span>
              <span>{module.tag}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-tc text-white">
              {module.name}
            </h3>
            <p className="text-xs text-slate-200 mt-0.5">{module.desc}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-sm">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-bold text-[#5B584E] uppercase tracking-wider mb-1.5">
              業務核心定義與要旨
            </h4>
            <p className="text-[#2A2822] leading-relaxed bg-[#FAF8F2] p-3.5 rounded-xl border border-[#E4DCC8]">
              {module.summary}
            </p>
          </div>

          {/* Primary Law */}
          <div className="flex items-start gap-2.5 p-3 bg-[#FAF8F2] border border-[#E4DCC8] rounded-xl text-xs">
            <BookOpen className="w-4 h-4 text-[#1F3864] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1F3864] block">主要法令依據：</strong>
              <span className="text-[#2A2822]">{module.primaryLaw}</span>
            </div>
          </div>

          {/* Key Steps */}
          <div>
            <h4 className="text-xs font-bold text-[#1F3864] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#235A3D]" />
              <span>標準承辦推展作業步驟</span>
            </h4>
            <div className="space-y-2">
              {module.keySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-[#FFFFFF] border border-[#E4DCC8] rounded-lg text-xs sm:text-sm text-[#2A2822] flex items-start gap-2.5"
                >
                  <span className="w-4 h-4 rounded-full bg-[#1F3864] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pitfalls */}
          <div className="p-4 bg-[#FEF6F0] border-l-4 border-amber-500 rounded-r-xl">
            <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>實務避坑指南（新人最常發生的問題）</span>
            </h4>
            <ul className="text-xs text-amber-900 space-y-1 list-disc list-inside leading-relaxed">
              {module.commonPitfalls.map((pitfall, idx) => (
                <li key={idx}>{pitfall}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#FAF8F2] border-t border-[#E4DCC8] flex flex-wrap items-center justify-between gap-2">
          <button
            onClick={() => {
              onClose();
              onGoToWorkflow(getWorkflowId(module.id));
            }}
            className="px-3 py-2 text-xs font-semibold text-[#1F3864] bg-[#FFFFFF] border border-[#1F3864] rounded-lg hover:bg-[#1F3864] hover:text-white transition-colors cursor-pointer"
          >
            檢視本業務互動流程圖
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-2 text-xs font-semibold text-[#5B584E] hover:text-[#1F3864] cursor-pointer"
            >
              關閉
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenWizard();
              }}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1F3864] hover:bg-[#152544] rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <span>啟動收件判定精靈</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
