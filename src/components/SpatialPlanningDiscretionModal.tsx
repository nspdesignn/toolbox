import React, { useState } from 'react';
import {
  X,
  Gavel,
  Users,
  Building2,
  FileCheck,
  Scale,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Sliders,
  Copy
} from 'lucide-react';

interface SpatialPlanningDiscretionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopy?: (text: string, label: string) => void;
}

export const SpatialPlanningDiscretionModal: React.FC<SpatialPlanningDiscretionModalProps> = ({
  isOpen,
  onClose,
  onCopy
}) => {
  // 裁量速查工具互動模擬狀態
  const [selectedViolationType, setSelectedViolationType] = useState<number>(1);
  const [isPerpetratorFound, setIsPerpetratorFound] = useState<boolean>(true);
  const [landOwnership, setLandOwnership] = useState<'private' | 'public'>('private');
  const [localCopied, setLocalCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopyText = (text: string, label: string) => {
    if (onCopy) {
      onCopy(text, label);
    } else {
      navigator.clipboard?.writeText(text);
      setLocalCopied(`已複製「${label}」！`);
      setTimeout(() => setLocalCopied(null), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* 點擊背景關閉 */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-white rounded-2xl border-2 border-[#1F3864] shadow-2xl overflow-hidden z-10 my-8">
        {/* 彈窗頂部 Header */}
        <div className="bg-[#1F3864] text-white p-5 sm:p-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
              <Sliders className="w-5 h-5 text-slate-900" />
            </div>
            <div className="min-w-0">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-amber-300 text-xs font-semibold mb-1">
                <Sparkles className="w-3 h-3" />
                <span>國土計畫法第 38 條情境模擬</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black truncate">
                實務裁量與處分流程速查工具
              </h2>
              <p className="text-xs text-slate-300 hidden sm:block">
                第一線承辦人員快速判斷適用條項、罰鍰區間、管制處分與行政執行程序
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
            title="關閉速查工具"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 彈窗本體內容 */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[calc(85vh-120px)] overflow-y-auto">
          {localCopied && (
            <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{localCopied}</span>
            </div>
          )}

          {/* 互動設定選項 */}
          <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 違規態樣選取 */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-[#1F3864] flex items-center gap-1.5">
                  <Gavel className="w-4 h-4 text-[#8C5A4B]" />
                  <span>1. 違規使用行為類型</span>
                </label>
                <select
                  value={selectedViolationType}
                  onChange={(e) => setSelectedViolationType(Number(e.target.value))}
                  className="w-full p-2.5 bg-white rounded-lg border border-[#DDD5C7] text-xs sm:text-sm text-[#3A2F2A] font-medium focus:ring-2 focus:ring-[#1F3864]"
                >
                  <option value={1}>
                    態樣一：未符合分區原則，且達一定規模或性質特殊（第38條第1項）
                  </option>
                  <option value={2}>
                    態樣二：符合分區原則，但應申請使用許可而未申請（第38條第2項第1款）
                  </option>
                  <option value={3}>
                    態樣三：已取得使用許可，但未依核准計畫內容使用（第38條第2項第2款）
                  </option>
                  <option value={4}>
                    態樣四：輕微違規，未符原則但未達規模且性質非特殊（第38條第3項）
                  </option>
                </select>
              </div>

              {/* 是否找得到行為人 */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-[#1F3864] flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#8C5A4B]" />
                  <span>2. 是否找得到行為人（自然人/施工人/縱容人）</span>
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPerpetratorFound(true)}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      isPerpetratorFound
                        ? 'bg-[#1F3864] text-white border-[#1F3864]'
                        : 'bg-white text-[#4A3E39] border-[#DDD5C7]'
                    }`}
                  >
                    ✓ 找得到行為人（可舉證故意或過失）
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsPerpetratorFound(false)}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      !isPerpetratorFound
                        ? 'bg-rose-700 text-white border-rose-700'
                        : 'bg-white text-[#4A3E39] border-[#DDD5C7]'
                    }`}
                  >
                    ✕ 找不到行為人（適用第6項）
                  </button>
                </div>
              </div>

              {/* 土地權屬（當找不到行為人時） */}
              {!isPerpetratorFound && (
                <div className="space-y-2 md:col-span-2 p-3 bg-white rounded-lg border border-amber-200">
                  <label className="text-xs sm:text-sm font-bold text-[#1F3864] flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-amber-700" />
                    <span>3. 土地權屬性質（適用第 6 項 vs 第 7 項）</span>
                  </label>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <label className="flex items-center gap-1.5 text-xs font-bold text-[#4A3E39] cursor-pointer">
                      <input
                        type="radio"
                        name="modalLandOwnership"
                        checked={landOwnership === 'private'}
                        onChange={() => setLandOwnership('private')}
                        className="accent-[#1F3864]"
                      />
                      <span>私有土地（依序命使用人 → 管理人 → 所有人限期改善）</span>
                    </label>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-[#4A3E39] cursor-pointer">
                      <input
                        type="radio"
                        name="modalLandOwnership"
                        checked={landOwnership === 'public'}
                        onChange={() => setLandOwnership('public')}
                        className="accent-[#1F3864]"
                      />
                      <span>公有土地（管理人得擬定改善計畫報核備；有公安立即危害不得緩辦）</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 速查試算結果呈現 */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <span className="text-xs sm:text-sm font-black text-amber-400 flex items-center gap-2">
                <FileCheck className="w-4 h-4" />
                <span>第一線處分審核結果建議</span>
              </span>
              <button
                type="button"
                onClick={() =>
                  handleCopyText(
                    `【國土計畫法第38條速查試算建議】\n違規態樣：態樣${selectedViolationType}\n行為人查得狀態：${
                      isPerpetratorFound ? '已查得行為人' : '無法發現行為人'
                    }\n法定罰鍰：${
                      isPerpetratorFound
                        ? selectedViolationType === 1
                          ? '100 萬 ~ 500 萬元'
                          : selectedViolationType === 2
                          ? '30 萬 ~ 150 萬元'
                          : selectedViolationType === 3
                          ? '30 萬 ~ 150 萬元'
                          : '6 萬 ~ 30 萬元'
                        : '不科處罰鍰（先命限期改善）'
                    }\n命改善對象：${
                      isPerpetratorFound
                        ? '行為人（施工人/承租人/縱容人）'
                        : landOwnership === 'private'
                        ? '依序：使用人 → 管理人 → 所有人'
                        : '公有土地管理機關（得擬改善計畫）'
                    }\n強制執行：按次處罰 • 怠金 • 斷水電 • 強拆`,
                    '第38條速查結果'
                  )
                }
                className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>複製結果</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 罰鍰結果 */}
              <div className="p-4 bg-white/10 rounded-xl border border-white/10 space-y-1.5">
                <span className="text-[11px] text-slate-300 font-bold">法定行政罰鍰階層</span>
                {isPerpetratorFound ? (
                  <div className="text-xl font-black text-amber-300">
                    {selectedViolationType === 1
                      ? '100 萬 ~ 500 萬元'
                      : selectedViolationType === 2
                      ? '30 萬 ~ 150 萬元'
                      : selectedViolationType === 3
                      ? '30 萬 ~ 150 萬元'
                      : '6 萬 ~ 30 萬元'}
                  </div>
                ) : (
                  <div className="text-sm font-bold text-slate-400">
                    不科處罰鍰（先命限期改善）
                  </div>
                )}
                <p className="text-[11px] text-slate-300">
                  {isPerpetratorFound
                    ? selectedViolationType === 1
                      ? '依第 38 條第 1 項裁處（重大違規）'
                      : selectedViolationType === 2
                      ? '依第 38 條第 2 項第 1 款裁處'
                      : selectedViolationType === 3
                      ? '依第 38 條第 2 項第 2 款裁處'
                      : '依第 38 條第 3 項裁處（輕微違規）'
                    : '無法發現行為人時，無法適用行政罰法科處罰鍰'}
                </p>
              </div>

              {/* 管制處分對象 */}
              <div className="p-4 bg-white/10 rounded-xl border border-white/10 space-y-1.5">
                <span className="text-[11px] text-slate-300 font-bold">管制性處分命改善對象</span>
                <div className="text-sm font-black text-emerald-300">
                  {isPerpetratorFound
                    ? '行為人（施工人/承租人/縱容人）'
                    : landOwnership === 'private'
                    ? '依序：使用人 → 管理人 → 所有人'
                    : '公有土地管理機關（得擬改善計畫）'}
                </div>
                <p className="text-[11px] text-slate-300">
                  {isPerpetratorFound
                    ? '第 4 項：命限期變更使用、停止使用或拆除恢復原狀'
                    : landOwnership === 'private'
                    ? '第 6 項：法定嚴格順序，切勿越級跳過使用人逕罰地主'
                    : '第 7 項：得送改善計畫核備，但危害公共安全應立即排除'}
                </p>
              </div>

              {/* 後續強制執行手段 */}
              <div className="p-4 bg-white/10 rounded-xl border border-white/10 space-y-1.5">
                <span className="text-[11px] text-slate-300 font-bold">屆期不遵從之後續強制手段</span>
                <div className="text-sm font-black text-rose-300">
                  按次處罰 • 怠金 • 斷水電 • 強拆
                </div>
                <p className="text-[11px] text-slate-300">
                  依第 5 項按次處罰；並依行政執行法第27/28/32條書面告誡後強制執行
                </p>
              </div>
            </div>

            {/* 實務檢核清單 */}
            <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs space-y-2">
              <span className="font-bold text-amber-200">承辦人發函前合憲合法性 Checklist：</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span>
                  <span>已自行職權調查，非僅憑他機關通報資料</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span>
                  <span>已給予行政程序法第 102 條陳述意見機會</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span>
                  <span>符合比例原則，先命限期改善再採斷水斷電拆除</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span>
                  <span>執行前已完成書面告誡（明確期限與費用估算）</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 彈窗底部操作按鈕 */}
        <div className="bg-[#FAF7F2] border-t border-[#DDD5C7] px-5 sm:px-6 py-3.5 flex items-center justify-between">
          <span className="text-xs text-[#6E5D53]">
            依國土計畫法第 38 條及實務手冊作業準則計算
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#1F3864] hover:bg-[#152747] text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
          >
            關閉速查工具
          </button>
        </div>
      </div>
    </div>
  );
};
