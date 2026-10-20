import React from 'react';
import { ArrowLeft, Clock } from 'lucide-react';
import { MODULES_DATA } from '../data/modulesData';
import { EnterpriseReviewDetailPage } from './EnterpriseReviewDetailPage';
import { ChangeDesignationDetailPage } from './ChangeDesignationDetailPage';
import { CorrectionDetailPage } from './CorrectionDetailPage';
import { PermittedUseDetailPage } from './PermittedUseDetailPage';
import { IllegalUseDetailPage } from './IllegalUseDetailPage';
import { PetitionDetailPage } from './PetitionDetailPage';
import { SupplementaryNoteDetailPage } from './SupplementaryNoteDetailPage';
import { CancellationDetailPage } from './CancellationDetailPage';
import { AdministrativeAppealDetailPage } from './AdministrativeAppealDetailPage';
import { ReportsEvaluationsDetailPage } from './ReportsEvaluationsDetailPage';
import { PublicityDetailPage } from './PublicityDetailPage';
import { SpecialReportDetailPage } from './SpecialReportDetailPage';

interface ModuleDetailPageProps {
  moduleId: string;
  onBack: () => void;
}

export const ModuleDetailPage: React.FC<ModuleDetailPageProps> = ({ moduleId, onBack }) => {
  if (moduleId === 'enterprise-review') {
    return <EnterpriseReviewDetailPage onBack={onBack} />;
  }
  if (moduleId === 'change-designation') {
    return <ChangeDesignationDetailPage onBack={onBack} />;
  }
  if (moduleId === 'correction') {
    return <CorrectionDetailPage onBack={onBack} />;
  }
  if (moduleId === 'permitted-use') {
    return <PermittedUseDetailPage onBack={onBack} />;
  }
  if (moduleId === 'illegal-use') {
    return <IllegalUseDetailPage onBack={onBack} />;
  }
  if (moduleId === 'petition-management') {
    return <PetitionDetailPage onBack={onBack} />;
  }
  if (moduleId === 'supplementary-note') {
    return <SupplementaryNoteDetailPage onBack={onBack} />;
  }
  if (moduleId === 'cancellation') {
    return <CancellationDetailPage onBack={onBack} />;
  }
  if (moduleId === 'administrative-appeal') {
    return <AdministrativeAppealDetailPage onBack={onBack} />;
  }
  if (moduleId === 'reports-evaluations') {
    return <ReportsEvaluationsDetailPage onBack={onBack} />;
  }
  if (moduleId === 'publicity') {
    return <PublicityDetailPage onBack={onBack} />;
  }
  if (moduleId === 'others') {
    return <SpecialReportDetailPage onBack={onBack} />;
  }

  // 其他尚未建置之模組（依指示將舊內容全部清空，後續依附件陸續建置）
  const moduleInfo = MODULES_DATA.find((m) => m.id === moduleId);
  const title = moduleInfo?.name || '業務模組';
  const desc = moduleInfo?.desc || '';

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* 頂部導航列 */}
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
                {title}
              </h1>
              {desc && (
                <p className="text-sm sm:text-base text-[#665A54] mt-0.5">{desc}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 清空狀態提示卡片 */}
      <div className="bg-[#FFFFFF] border-2 border-dashed border-[#DDD5C7] rounded-2xl p-12 sm:p-16 text-center space-y-3 shadow-2xs">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#DDD5C7] text-[#8C5A4B] mb-1">
          <Clock className="w-7 h-7" />
        </div>
        <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#2D2623]">
          內容建置中
        </h2>
        <p className="text-sm sm:text-base text-[#7D7065] max-w-md mx-auto leading-relaxed">
          本業務模組內容已依指示先行清空，後續將依提供之資料與附件標準作業規範逐項新增。
        </p>
      </div>
    </div>
  );
};
