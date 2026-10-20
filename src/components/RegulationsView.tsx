import React, { useState, useMemo } from 'react';
import { REGULATIONS_DATA } from '../data/regulationsData';
import { RegulationItem } from '../types';
import { Search, Scale, Copy, Check, BookOpen, Tag } from 'lucide-react';

export const RegulationsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'law' | 'rule' | 'interpretation'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredRegulations = useMemo(() => {
    return REGULATIONS_DATA.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.fullContent.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchCategory = categoryFilter === 'all' || item.category === categoryFilter;
      return matchSearch && matchCategory;
    });
  }, [searchTerm, categoryFilter]);

  const copyContent = (item: RegulationItem) => {
    const textToCopy = `【${item.title}】\n文號/法條：${item.number}\n重點摘要：${item.summary}\n\n法條內容：\n${item.fullContent}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E4DCC8]">
          <div>
            <div className="text-xs font-semibold text-[#1F3864] uppercase tracking-wider mb-1">
              法規與解釋令庫
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-tc text-[#1F3864]">
              常用非都市土地法令與經典函釋檢索
            </h2>
            <p className="text-xs sm:text-sm text-[#5B584E] mt-1">
              收錄區域計畫法、非都市土地使用管制規則、農業發展條例核心條文及內政部實務函釋。
            </p>
          </div>
        </div>

        {/* Search and Category Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#5B584E] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜尋法條、條號或關鍵字（如：第21條、更正、回饋金）..."
              className="w-full pl-10 pr-4 py-2 bg-[#FAF8F2] border border-[#E4DCC8] rounded-lg text-xs sm:text-sm text-[#2A2822] placeholder-[#8A8576] focus:outline-hidden focus:border-[#1F3864]"
            />
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-[#FAF8F2] border border-[#E4DCC8] rounded-lg text-xs font-medium">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                categoryFilter === 'all'
                  ? 'bg-[#1F3864] text-white font-semibold'
                  : 'text-[#5B584E] hover:text-[#1F3864]'
              }`}
            >
              全部法規 ({REGULATIONS_DATA.length})
            </button>
            <button
              onClick={() => setCategoryFilter('law')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                categoryFilter === 'law'
                  ? 'bg-[#1F3864] text-white font-semibold'
                  : 'text-[#5B584E] hover:text-[#1F3864]'
              }`}
            >
              母法法律 (3)
            </button>
            <button
              onClick={() => setCategoryFilter('rule')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                categoryFilter === 'rule'
                  ? 'bg-[#1F3864] text-white font-semibold'
                  : 'text-[#5B584E] hover:text-[#1F3864]'
              }`}
            >
              管制規則 (3)
            </button>
            <button
              onClick={() => setCategoryFilter('interpretation')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                categoryFilter === 'interpretation'
                  ? 'bg-[#1F3864] text-white font-semibold'
                  : 'text-[#5B584E] hover:text-[#1F3864]'
              }`}
            >
              內政部函釋 (2)
            </button>
          </div>
        </div>
      </div>

      {/* Regulation Cards List */}
      <div className="space-y-4">
        {filteredRegulations.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl p-5 sm:p-6 shadow-xs hover:border-[#1F3864] transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-[#E4DCC8]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                      item.category === 'law'
                        ? 'bg-[#1F3864] text-white'
                        : item.category === 'rule'
                        ? 'bg-[#235A3D] text-white'
                        : 'bg-[#B45309] text-white'
                    }`}
                  >
                    {item.category === 'law' ? '法律' : item.category === 'rule' ? '法規命令' : '重要函釋'}
                  </span>
                  <span className="text-xs font-mono text-[#5B584E]">{item.number}</span>
                  {item.issueDate && (
                    <span className="text-xs text-[#8A8576]">· {item.issueDate}</span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-bold font-serif-tc text-[#1F3864]">
                  {item.title}
                </h3>
              </div>

              <button
                onClick={() => copyContent(item)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1F3864] bg-[#FAF8F2] hover:bg-[#1F3864] hover:text-white border border-[#E4DCC8] rounded-md transition-colors self-start sm:self-auto cursor-pointer"
              >
                {copiedId === item.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === item.id ? '已複製條文' : '複製條文引用'}</span>
              </button>
            </div>

            {/* Summary */}
            <div className="pt-3 pb-3">
              <p className="text-xs sm:text-sm text-[#2A2822] leading-relaxed">
                {item.summary}
              </p>
            </div>

            {/* Key Application Points */}
            <div className="p-3 bg-[#FAF8F2] border border-[#E4DCC8] rounded-lg space-y-1.5 mb-3">
              <div className="text-xs font-bold text-[#1F3864]">【實務承辦審查重點】：</div>
              <ul className="text-xs text-[#2A2822] space-y-1 list-disc list-inside">
                {item.keyPoints.map((pt, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Content */}
            <div className="pt-2">
              <details className="text-xs group">
                <summary className="font-semibold text-[#1F3864] cursor-pointer hover:underline list-none flex items-center gap-1">
                  <span>▶ 展開完整法條全文內容</span>
                </summary>
                <pre className="mt-2 p-3 bg-[#FAF8F2] border border-[#E4DCC8] rounded-lg font-mono text-xs text-[#2A2822] whitespace-pre-wrap leading-relaxed">
                  {item.fullContent}
                </pre>
              </details>
            </div>

            {/* Tags */}
            <div className="pt-3 flex flex-wrap items-center gap-1.5 text-xs text-[#5B584E]">
              <Tag className="w-3 h-3" />
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-[#FAF8F2] border border-[#E4DCC8] rounded-sm text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {filteredRegulations.length === 0 && (
          <div className="p-8 text-center bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl text-xs text-[#5B584E]">
            未找到與「{searchTerm}」相關的法令函釋，請嘗試其他關鍵字。
          </div>
        )}
      </div>
    </div>
  );
};
