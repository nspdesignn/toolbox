import React, { useState, useMemo } from 'react';
import { MODULES_DATA } from '../data/modulesData';
import { BusinessModule, ModuleId } from '../types';
import { Search, ArrowRight, ShieldCheck, FileCheck, Layers, AlertOctagon } from 'lucide-react';

interface ModuleGridProps {
  onSelectModule: (module: BusinessModule) => void;
  onOpenWizard: () => void;
}

export const ModuleGrid: React.FC<ModuleGridProps> = ({ onSelectModule, onOpenWizard }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'core' | 'enforcement' | 'administrative'>('all');

  const filteredModules = useMemo(() => {
    return MODULES_DATA.filter((m) => {
      const matchSearch =
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = categoryFilter === 'all' || m.category === categoryFilter;
      return matchSearch && matchCategory;
    });
  }, [searchTerm, categoryFilter]);

  return (
    <div className="space-y-8">
      {/* Hero Banner with Warm Institutional Styling */}
      <div className="bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-2xl p-6 sm:p-8 shadow-xs text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1F3864] uppercase bg-[#FAF8F2] px-3 py-1 rounded-full border border-[#E4DCC8]">
            <span>土地使用管制知識平台</span>
            <span aria-hidden="true">·</span>
            <span>新人首選指引</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-serif-tc text-[#1F3864] text-balance">
            非都市土地業務輔助指引庫
          </h2>

          <p className="text-sm sm:text-base text-[#5B584E] leading-relaxed">
            涵蓋變更編定、更正編定、違規查處與容許使用等核心實務流程，協助承辦人員快速判斷收件案件下一步處置程序。
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenWizard}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1F3864] hover:bg-[#152544] text-white text-sm font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <span>啟動新人案件下一步篩選精靈</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Search and Category Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#5B584E] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="搜尋業務名稱、管制關鍵字或法令..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl text-sm text-[#2A2822] placeholder-[#8A8576] focus:outline-hidden focus:border-[#1F3864]"
          />
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-[#FFFFFF] border border-[#E4DCC8] rounded-xl overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              categoryFilter === 'all'
                ? 'bg-[#1F3864] text-white font-semibold'
                : 'text-[#5B584E] hover:text-[#1F3864]'
            }`}
          >
            全部業務 ({MODULES_DATA.length})
          </button>
          <button
            onClick={() => setCategoryFilter('core')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              categoryFilter === 'core'
                ? 'bg-[#1F3864] text-white font-semibold'
                : 'text-[#5B584E] hover:text-[#1F3864]'
            }`}
          >
            核心審查 (4)
          </button>
          <button
            onClick={() => setCategoryFilter('enforcement')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              categoryFilter === 'enforcement'
                ? 'bg-[#1F3864] text-white font-semibold'
                : 'text-[#5B584E] hover:text-[#1F3864]'
            }`}
          >
            稽查裁處 (3)
          </button>
          <button
            onClick={() => setCategoryFilter('administrative')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              categoryFilter === 'administrative'
                ? 'bg-[#1F3864] text-white font-semibold'
                : 'text-[#5B584E] hover:text-[#1F3864]'
            }`}
          >
            行政管理 (6)
          </button>
        </div>
      </div>

      {/* Grid of Business Modules (Matching attachment layout and theme) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {filteredModules.map((item) => {
          const isCore = ['change-designation', 'correction', 'illegal-use', 'permitted-use'].includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => onSelectModule(item)}
              className={`group bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                item.active
                  ? 'border-l-[6px] border-l-[#1F3864] hover:-translate-y-1 hover:border-[#1F3864] hover:shadow-md'
                  : 'hover:border-[#1F3864]/50'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-black font-serif-tc text-[#1F3864] group-hover:text-[#152544] transition-colors">
                    {item.name}
                  </h3>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                      isCore
                        ? 'bg-[#E2ECE6] text-[#235A3D]'
                        : 'bg-[#FAF8F2] text-[#5B584E] border border-[#E4DCC8]'
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#B45309] mb-2 flex items-center gap-1">
                  <span>{item.desc}</span>
                </div>

                <p className="text-xs text-[#5B584E] leading-relaxed line-clamp-3 mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EFE9DB] flex items-center justify-between text-xs text-[#1F3864] font-semibold group-hover:underline">
                <span>檢視處置流程與法規</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>

      {filteredModules.length === 0 && (
        <div className="p-12 text-center bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-2xl">
          <p className="text-[#5B584E] text-sm">查無相符業務模組，請嘗試其他關鍵字。</p>
        </div>
      )}
    </div>
  );
};
