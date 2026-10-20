import React from 'react';
import { Compass, BookOpen, GitMerge, FileText, Scale, Calculator, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenWizard: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenWizard }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b-2 border-[#1F3864] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Zone 1: Single text wordmark */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectTab('modules')}
              className="text-left group cursor-pointer focus:outline-hidden"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-6 bg-[#1F3864] rounded-xs inline-block" />
                <span className="font-serif-tc text-xl sm:text-2xl font-bold tracking-tight text-[#1F3864]">
                  非都市土地業務輔助小工具
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2 text-sm font-medium">
            <button
              onClick={() => onSelectTab('modules')}
              className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap ${
                currentTab === 'modules'
                  ? 'bg-[#1F3864] text-white font-semibold'
                  : 'text-[#2A2822] hover:bg-[#FAF8F2] hover:text-[#1F3864]'
              }`}
            >
              業務總覽
            </button>
            <button
              onClick={() => onSelectTab('wizard')}
              className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                currentTab === 'wizard'
                  ? 'bg-[#1F3864] text-white font-semibold'
                  : 'text-[#2A2822] hover:bg-[#FAF8F2] hover:text-[#1F3864]'
              }`}
            >
              <Compass className="w-4 h-4 text-amber-500" />
              新人下一步判定
            </button>
            <button
              onClick={() => onSelectTab('workflows')}
              className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                currentTab === 'workflows'
                  ? 'bg-[#1F3864] text-white font-semibold'
                  : 'text-[#2A2822] hover:bg-[#FAF8F2] hover:text-[#1F3864]'
              }`}
            >
              <GitMerge className="w-4 h-4" />
              業務流程圖
            </button>
            <button
              onClick={() => onSelectTab('cases')}
              className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                currentTab === 'cases'
                  ? 'bg-[#1F3864] text-white font-semibold'
                  : 'text-[#2A2822] hover:bg-[#FAF8F2] hover:text-[#1F3864]'
              }`}
            >
              <FileText className="w-4 h-4" />
              實務範例與公版
            </button>
            <button
              onClick={() => onSelectTab('regulations')}
              className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                currentTab === 'regulations'
                  ? 'bg-[#1F3864] text-white font-semibold'
                  : 'text-[#2A2822] hover:bg-[#FAF8F2] hover:text-[#1F3864]'
              }`}
            >
              <Scale className="w-4 h-4" />
              常用法令函釋
            </button>
            <button
              onClick={() => onSelectTab('tools')}
              className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                currentTab === 'tools'
                  ? 'bg-[#1F3864] text-white font-semibold'
                  : 'text-[#2A2822] hover:bg-[#FAF8F2] hover:text-[#1F3864]'
              }`}
            >
              <Calculator className="w-4 h-4" />
              實用速查工具
            </button>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenWizard}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#1F3864] hover:bg-[#152544] rounded-lg shadow-xs transition-colors whitespace-nowrap focus:outline-hidden focus:ring-2 focus:ring-[#1F3864]/50"
            >
              <span>收件速判精靈</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Sub-bar */}
      <div className="md:hidden flex overflow-x-auto py-2 px-4 gap-1.5 bg-[#F8F5EE] border-t border-[#E4DCC8] text-xs">
        <button
          onClick={() => onSelectTab('modules')}
          className={`px-2.5 py-1.5 rounded-sm whitespace-nowrap ${currentTab === 'modules' ? 'bg-[#1F3864] text-white font-medium' : 'text-[#2A2822]'}`}
        >
          業務總覽
        </button>
        <button
          onClick={() => onSelectTab('wizard')}
          className={`px-2.5 py-1.5 rounded-sm whitespace-nowrap font-medium ${currentTab === 'wizard' ? 'bg-[#1F3864] text-white' : 'text-[#2A2822]'}`}
        >
          新人下一步
        </button>
        <button
          onClick={() => onSelectTab('workflows')}
          className={`px-2.5 py-1.5 rounded-sm whitespace-nowrap ${currentTab === 'workflows' ? 'bg-[#1F3864] text-white' : 'text-[#2A2822]'}`}
        >
          流程圖
        </button>
        <button
          onClick={() => onSelectTab('cases')}
          className={`px-2.5 py-1.5 rounded-sm whitespace-nowrap ${currentTab === 'cases' ? 'bg-[#1F3864] text-white' : 'text-[#2A2822]'}`}
        >
          案例與公文
        </button>
        <button
          onClick={() => onSelectTab('regulations')}
          className={`px-2.5 py-1.5 rounded-sm whitespace-nowrap ${currentTab === 'regulations' ? 'bg-[#1F3864] text-white' : 'text-[#2A2822]'}`}
        >
          法令函釋
        </button>
        <button
          onClick={() => onSelectTab('tools')}
          className={`px-2.5 py-1.5 rounded-sm whitespace-nowrap ${currentTab === 'tools' ? 'bg-[#1F3864] text-white' : 'text-[#2A2822]'}`}
        >
          速查小工具
        </button>
      </div>
    </header>
  );
};
