import React, { useState, useMemo } from 'react';
import { MODULES_DATA } from '../data/modulesData';
import { Search, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onSelectModule: (moduleId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectModule }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredModules = useMemo(() => {
    if (!searchTerm.trim()) return MODULES_DATA;
    return MODULES_DATA.filter((m) => m.name.includes(searchTerm.trim()));
  }, [searchTerm]);

  // Refined Earth tones palette for card border accents (No green!)
  const getEarthBorder = (index: number) => {
    const borders = [
      'border-l-5 border-l-[#8C5A4B] hover:border-[#8C5A4B]', // Clay
      'border-l-5 border-l-[#5A4B43] hover:border-[#5A4B43]', // Cocoa
      'border-l-5 border-l-[#8C6D4F] hover:border-[#8C6D4F]', // Ochre
      'border-l-5 border-l-[#9E7444] hover:border-[#9E7444]', // Camel
      'border-l-5 border-l-[#735A4F] hover:border-[#735A4F]', // Earth Umber
      'border-l-5 border-l-[#846356] hover:border-[#846356]'  // Warm Terracotta
    ];
    return borders[index % borders.length];
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 px-2 sm:px-4">
      {/* Refined Header (Not overly bold font) */}
      <header className="text-center pt-4 sm:pt-6 pb-2 space-y-2.5">
        <h1 className="text-3xl sm:text-4xl font-serif-tc font-semibold text-[#2D2623] tracking-tight">
          非都市土地業務輔助小工具
        </h1>
        <p className="text-base sm:text-lg text-[#665A54] max-w-2xl mx-auto">
          土地使用管制業務知識輔助平台｜幫助新人加速上手，也是老手的查詢工具
        </p>
      </header>

      {/* Clean Search Input */}
      <div className="max-w-lg mx-auto relative">
        <Search className="w-5 h-5 text-[#9E948C] absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="搜尋業務名稱…"
          className="w-full pl-11 pr-11 py-3 bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl text-base text-[#2D2623] placeholder-[#A39891] focus:outline-hidden focus:border-[#8C5A4B] transition-colors"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#665A54] hover:text-[#2D2623] bg-[#EFE9DF] px-2 py-1 rounded cursor-pointer"
          >
            清除
          </button>
        )}
      </div>

      {/* Business Cards Grid (Compact, Just the Title, No subtext, Earth tones) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-1">
        {filteredModules.map((m, idx) => {
          const borderStyle = getEarthBorder(idx);
          return (
            <button
              key={m.id}
              onClick={() => onSelectModule(m.id)}
              className={`text-left py-5 px-5 rounded-xl bg-[#FFFFFF] border-2 border-[#DDD5C7] transition-all duration-150 flex items-center justify-between cursor-pointer group hover:-translate-y-0.5 hover:shadow-sm ${borderStyle}`}
            >
              <h2 className="text-lg sm:text-xl font-semibold text-[#2D2623] group-hover:text-[#8C5A4B] transition-colors">
                {m.name}
              </h2>
              <ArrowRight className="w-4 h-4 text-[#A39891] group-hover:text-[#8C5A4B] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </button>
          );
        })}
      </div>

      {filteredModules.length === 0 && (
        <div className="p-8 text-center bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl">
          <p className="text-[#665A54] text-base">未找到相符的業務名稱，請清除搜尋條件。</p>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center pt-6 pb-10 text-sm text-[#7D736E]">
        內部試用版本｜如有內容錯誤或建議，請回報承辦單位
      </footer>
    </div>
  );
};
