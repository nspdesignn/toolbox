import React, { useState, useEffect } from 'react';
import {
  X,
  FileSpreadsheet,
  ExternalLink,
  Clock,
  Copy,
  CheckCircle2,
  XCircle,
  Info
} from 'lucide-react';

interface CaseSupervisionTableTutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultScope?: 'all' | 'change' | 'correction';
}

export const CaseSupervisionTableTutorialModal: React.FC<CaseSupervisionTableTutorialModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // 關閉 Modal 的 ESC 鍵監聽
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const pdfUrl = '/assets/aistudio/____________e8bdb30d.pdf';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* 點擊背景關閉 */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-white rounded-xl border-2 border-[#8C5A4B] shadow-2xl overflow-hidden z-10 my-4 flex flex-col max-h-[90vh]">
        {/* 頂部 Header - 緊湊設計 */}
        <div className="bg-[#8C5A4B] text-white px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-stone-900 flex items-center justify-center font-bold text-base shrink-0 shadow-xs">
              <FileSpreadsheet className="w-4 h-4 text-stone-900" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-serif-tc font-bold tracking-wide text-white truncate">
                  編定案件列管表登載重點說明
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 text-amber-200 text-[11px] font-semibold shrink-0">
                  <Clock className="w-3 h-3" />
                  115.10.21
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-stone-200 truncate">
                為利內政部每季編定案件進度登載作業，變更與更正編定請配合以下規定
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/15 hover:bg-white/25 text-white text-xs font-semibold border border-white/20 transition-colors"
              title="查看原始 PDF 檔案"
            >
              <ExternalLink className="w-3 h-3" />
              <span>原始 PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="關閉視窗"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 全文內文主要區域 - 調小字級與行距，緊湊排版減少捲動 */}
        <div className="flex-1 overflow-y-auto px-4 py-3.5 sm:px-5 sm:py-4 space-y-2.5 text-[#2D2623] bg-[#FAF7F2] text-xs sm:text-[13px] leading-relaxed">
          {/* 說明前言 */}
          <div className="bg-white border border-[#DDD5C7] rounded-lg px-3.5 py-2 shadow-2xs flex items-center justify-between">
            <div className="font-bold text-[#8C5A4B] text-xs sm:text-[13px]">
              為利內政部每季編定案件進度登載作業，請各位同仁配合以下規定：
            </div>
            <span className="text-[11px] font-mono text-[#7D7065] shrink-0 ml-2">
              115.10.21
            </span>
          </div>

          {/* 逐條完整清單 - 緊湊排列 */}
          <div className="space-y-2">
            {/* 規定一 */}
            <div className="bg-white border border-[#DDD5C7] rounded-lg p-2.5 sm:p-3 shadow-2xs">
              <div className="flex items-start gap-2">
                <span className="px-1.5 py-0.5 rounded bg-[#F5EFE7] text-[#8C5A4B] font-bold text-[11px] shrink-0">
                  一
                </span>
                <div className="space-y-1 flex-1">
                  <p className="font-semibold text-[#2D2623]">
                    日期格式統一用<span className="text-rose-600 font-bold mx-0.5">/</span>(如 <span className="font-mono bg-amber-50 px-1 py-0.2 rounded text-amber-900 border border-amber-200">115/1/1</span>)，請不要用<span className="text-rose-600 font-bold mx-0.5">.</span>(如 <span className="line-through font-mono text-stone-400">115.1.1</span>)。
                  </p>
                </div>
              </div>
            </div>

            {/* 規定二 */}
            <div className="bg-white border border-[#DDD5C7] rounded-lg p-2.5 sm:p-3 shadow-2xs">
              <div className="flex items-start gap-2">
                <span className="px-1.5 py-0.5 rounded bg-[#F5EFE7] text-[#8C5A4B] font-bold text-[11px] shrink-0">
                  二
                </span>
                <div className="space-y-1 flex-1">
                  <p className="font-semibold text-[#2D2623]">
                    案件收到後 <span className="text-rose-600 font-bold">5 日內</span>，應將案件登載在列管表內，<span className="bg-amber-100 px-1 text-stone-900 rounded">一個收件號算一件</span>，不能因為案件是多次撤回重送，就不逐號登載。
                  </p>
                </div>
              </div>
            </div>

            {/* 規定三 */}
            <div className="bg-white border border-[#DDD5C7] rounded-lg p-2.5 sm:p-3 shadow-2xs">
              <div className="flex items-start gap-2">
                <span className="px-1.5 py-0.5 rounded bg-[#F5EFE7] text-[#8C5A4B] font-bold text-[11px] shrink-0">
                  三
                </span>
                <div className="space-y-1.5 flex-1">
                  <p className="font-semibold text-[#2D2623]">
                    案件駁回、撤回後，請於<span className="text-[#8C5A4B] font-bold underline decoration-amber-400 underline-offset-2">核准日期、核准文號、異動日期、異動文號、備查日期及核准面積</span>打 <span className="text-rose-600 font-black">X</span> 並截止登載，重新送件應另外重新登錄且以<span className="bg-amber-100 px-1 text-stone-900 rounded font-bold">舊案序號</span>登載(如案件編號 123 經駁回或撤回，重新送件後案件編號即為<span className="font-mono text-[#8C5A4B] font-bold">舊案 123</span>)。
                  </p>
                  <div className="inline-flex flex-wrap gap-x-3 gap-y-1 bg-[#F5EFE7] px-2.5 py-1 rounded text-[11px] text-[#4A3E39]">
                    <span>❌ 核准日期打 X</span>
                    <span>❌ 核准文號打 X</span>
                    <span>❌ 異動日期打 X</span>
                    <span>❌ 異動文號打 X</span>
                    <span>❌ 備查日期打 X</span>
                    <span>❌ 核准面積打 X</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 規定四 */}
            <div className="bg-white border border-amber-300 rounded-lg p-2.5 sm:p-3 shadow-2xs space-y-2">
              <div className="flex items-start gap-2">
                <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[11px] shrink-0">
                  四
                </span>
                <div className="space-y-1 flex-1">
                  <p className="font-semibold text-[#2D2623]">
                    變更編定案件的興辦事業計畫類型，<span className="text-rose-600 font-bold underline decoration-rose-300 underline-offset-2">請務必填寫興辦事業計畫種類或是免興辦類型</span>，而不是只寫興辦事業核准文件。
                  </p>
                </div>
              </div>

              {/* 原始對照表格完整呈現 - 緊湊版 */}
              <div className="overflow-x-auto rounded-md border border-[#DDD5C7]">
                <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
                  <thead>
                    <tr className="bg-[#8C5A4B] text-white">
                      <th className="py-1.5 px-3 font-bold border-r border-[#A87161] w-1/2">
                        <div className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                          <span>正確填法（具體註記計畫或免興辦種類）</span>
                        </div>
                      </th>
                      <th className="py-1.5 px-3 font-bold w-1/2">
                        <div className="flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5 text-rose-300" />
                          <span>錯誤填法（禁止籠統填寫）</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DDD5C7] bg-white">
                    <tr className="hover:bg-amber-50/40">
                      <td className="py-1.5 px-3 border-r border-[#DDD5C7]">
                        <div className="flex items-center justify-between gap-1.5">
                          <span className="font-medium text-emerald-800">
                            具目的事業主管機關核准文件(毗連擴展工業計畫)
                          </span>
                          <button
                            onClick={() => handleCopy('具目的事業主管機關核准文件(毗連擴展工業計畫)', 'table1')}
                            className="px-1.5 py-0.5 text-[10px] rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium inline-flex items-center gap-0.5 cursor-pointer shrink-0"
                            title="複製"
                          >
                            <Copy className="w-2.5 h-2.5" />
                            <span>{copiedKey === 'table1' ? '已複製' : '複製'}</span>
                          </button>
                        </div>
                      </td>
                      <td className="py-1.5 px-3 text-rose-700 bg-rose-50/20">
                        <span className="line-through font-medium">興辦事業核准文件</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-amber-50/40">
                      <td className="py-1.5 px-3 border-r border-[#DDD5C7]">
                        <div className="flex items-center justify-between gap-1.5">
                          <span className="font-medium text-emerald-800">
                            免附興辦事業計畫(林變農)
                          </span>
                          <button
                            onClick={() => handleCopy('免附興辦事業計畫(林變農)', 'table2')}
                            className="px-1.5 py-0.5 text-[10px] rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium inline-flex items-center gap-0.5 cursor-pointer shrink-0"
                            title="複製"
                          >
                            <Copy className="w-2.5 h-2.5" />
                            <span>{copiedKey === 'table2' ? '已複製' : '複製'}</span>
                          </button>
                        </div>
                      </td>
                      <td className="py-1.5 px-3 text-rose-700 bg-rose-50/20">
                        <span className="line-through font-medium">免附興辦事業計畫</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-amber-50/40">
                      <td className="py-1.5 px-3 border-r border-[#DDD5C7]">
                        <div className="flex items-center justify-between gap-1.5">
                          <span className="font-medium text-emerald-800">
                            免附興辦事業計畫(包圍夾雜)
                          </span>
                          <button
                            onClick={() => handleCopy('免附興辦事業計畫(包圍夾雜)', 'table3')}
                            className="px-1.5 py-0.5 text-[10px] rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium inline-flex items-center gap-0.5 cursor-pointer shrink-0"
                            title="複製"
                          >
                            <Copy className="w-2.5 h-2.5" />
                            <span>{copiedKey === 'table3' ? '已複製' : '複製'}</span>
                          </button>
                        </div>
                      </td>
                      <td className="py-1.5 px-3 text-rose-700 bg-rose-50/20">
                        <span className="line-through font-medium">免附興辦事業計畫</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 規定五 */}
            <div className="bg-white border border-[#DDD5C7] rounded-lg p-2.5 sm:p-3 shadow-2xs">
              <div className="flex items-start gap-2">
                <span className="px-1.5 py-0.5 rounded bg-[#F5EFE7] text-[#8C5A4B] font-bold text-[11px] shrink-0">
                  五
                </span>
                <div className="space-y-1 flex-1">
                  <p className="font-semibold text-[#2D2623]">
                    變更編定案件的補正情形請<span className="text-rose-600 font-bold">確實填寫補正理由</span>。
                  </p>
                </div>
              </div>
            </div>

            {/* 規定六 */}
            <div className="bg-white border border-[#DDD5C7] rounded-lg p-2.5 sm:p-3 shadow-2xs">
              <div className="flex items-start gap-2">
                <span className="px-1.5 py-0.5 rounded bg-[#F5EFE7] text-[#8C5A4B] font-bold text-[11px] shrink-0">
                  六
                </span>
                <div className="space-y-1 flex-1">
                  <p className="font-semibold text-[#2D2623]">
                    變更編定案件的動日日期，請登載地所<span className="text-rose-600 font-bold">實際異動日期</span>，請於<span className="bg-amber-100 px-1 text-stone-900 rounded font-bold">備查同仁會辦時</span>，直接至列管表更新，才不會忘記。
                  </p>
                </div>
              </div>
            </div>

            {/* 規定七 */}
            <div className="bg-white border border-[#DDD5C7] rounded-lg p-2.5 sm:p-3 shadow-2xs">
              <div className="flex items-start gap-2">
                <span className="px-1.5 py-0.5 rounded bg-[#F5EFE7] text-[#8C5A4B] font-bold text-[11px] shrink-0">
                  七
                </span>
                <div className="space-y-1 flex-1">
                  <p className="font-semibold text-[#2D2623]">
                    變更編定案件的異動地號，<span className="text-emerald-700 font-bold">自即日起免填寫</span>。
                  </p>
                </div>
              </div>
            </div>

            {/* 規定八 */}
            <div className="bg-white border border-[#DDD5C7] rounded-lg p-2.5 sm:p-3 shadow-2xs">
              <div className="flex items-start gap-2">
                <span className="px-1.5 py-0.5 rounded bg-[#F5EFE7] text-[#8C5A4B] font-bold text-[11px] shrink-0">
                  八
                </span>
                <div className="space-y-1 flex-1">
                  <p className="font-semibold text-[#2D2623]">
                    更正編定案件的<span className="text-rose-600 font-bold">核准日期及面積</span>，務必在<span className="underline decoration-amber-400 underline-offset-2 font-bold">案件核准後填寫</span>，地所異動日期請於<span className="bg-amber-100 px-1 text-stone-900 rounded font-bold">備查同仁會辦時</span>，直接至列管表更新，才不會忘記。
                  </p>
                </div>
              </div>
            </div>

            {/* 規定九 */}
            <div className="bg-amber-50 border border-amber-300 rounded-lg p-2.5 sm:p-3 shadow-2xs">
              <div className="flex items-start gap-2">
                <span className="px-1.5 py-0.5 rounded bg-amber-600 text-white font-bold text-[11px] shrink-0">
                  九
                </span>
                <div className="space-y-1 flex-1">
                  <p className="font-bold text-stone-900">
                    以上填列說明請同仁配合辦理，<span className="text-rose-700 font-black">未來將請未能配合之同仁專責負責內政部列管表填列工作</span>。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 彈窗底部 Footer - 緊湊設計 */}
        <div className="bg-[#F5EFE7] border-t border-[#DDD5C7] px-4 py-2.5 sm:px-5 sm:py-3 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#7D7065] truncate">
            <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span className="truncate">請同仁登載列管表時嚴格依上開規定辦理。</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-xs font-semibold text-[#8C5A4B] bg-white hover:bg-[#FAF7F2] border border-[#DDD5C7] rounded-lg transition-colors inline-flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" />
              <span>開 PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1 text-xs font-semibold text-white bg-[#8C5A4B] hover:bg-[#784c3e] rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
