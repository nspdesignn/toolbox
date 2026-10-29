import React, { useState } from 'react';
import { ExternalLink, Sparkles, BookOpen } from 'lucide-react';
import { ModuleId } from '../types';

interface SmartAssistantModalProps {
  onNavigateModule?: (moduleId: ModuleId) => void;
}

const NOTEBOOKLM_URL =
  'https://notebook.google.com/notebook/846b3807-62d0-48eb-b188-72314967aa27';

export const SmartAssistantModal: React.FC<SmartAssistantModalProps> = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* 懸浮提示框 (Hover Tooltip) */}
      {isHovered && (
        <div className="mb-2.5 max-w-xs bg-[#2D2623] text-white text-xs rounded-xl p-3 shadow-xl border border-[#DDD5C7]/30 animate-fade-in pointer-events-none">
          <div className="flex items-center gap-1.5 font-bold text-amber-300 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NotebookLM 知識庫問答</span>
          </div>
          <p className="text-white/90 leading-relaxed text-[11px]">
            已收錄 49 個非都市土地與國土計畫專業來源。點擊即可在新分頁開啟 NotebookLM 直接提問！
          </p>
        </div>
      )}

      {/* 直接跳轉 NotebookLM 的智能小幫手懸浮按鈕 */}
      <a
        href={NOTEBOOKLM_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex items-center gap-3 px-4 py-3 rounded-full bg-[#1F3864] hover:bg-[#152544] text-white shadow-xl hover:shadow-2xl transition-all duration-200 border-2 border-white/20 hover:border-amber-300/60 hover:-translate-y-1 active:translate-y-0"
        title="開新視窗前往 NotebookLM 提問"
        aria-label="智能小幫手 (前往 NotebookLM 提問)"
      >
        <div className="relative flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <BookOpen className="w-4 h-4 text-amber-300" />
          </div>
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
        </div>

        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm tracking-wide text-white">智能小幫手</span>
            <span className="text-[10px] font-semibold bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded border border-amber-300/30">
              NotebookLM
            </span>
          </div>
          <span className="text-[11px] text-white/75 group-hover:text-white flex items-center gap-1 transition-colors">
            <span>前往題庫提問</span>
            <ExternalLink className="w-3 h-3 text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </a>
    </div>
  );
};
