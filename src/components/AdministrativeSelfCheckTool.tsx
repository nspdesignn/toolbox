import React, { useState } from 'react';
import {
  FolderOpen,
  Clock,
  Eye,
  Users,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Scale,
  ShieldAlert,
  Info
} from 'lucide-react';

interface AdministrativeSelfCheckToolProps {
  onCopy?: (text: string, label: string) => void;
}

export const AdministrativeSelfCheckTool: React.FC<AdministrativeSelfCheckToolProps> = ({ onCopy }) => {
  // 答辯與處分自檢工具互動狀態
  const [simCaseType, setSimCaseType] = useState<'violation' | 'correction' | 'change'>('violation');
  const [simDaysRemaining, setSimDaysRemaining] = useState<number>(8);
  const [hasOnsiteEvidence, setHasOnsiteEvidence] = useState<boolean>(true);
  const [hasHearingNotice, setHasHearingNotice] = useState<boolean>(true);
  const [localCopied, setLocalCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    if (onCopy) {
      onCopy(text, label);
    } else {
      navigator.clipboard?.writeText(text);
      setLocalCopied(`已複製「${label}」！`);
      setTimeout(() => setLocalCopied(null), 2500);
    }
  };

  return (
    <div className="space-y-6">
      {localCopied && (
        <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-xl text-sm font-semibold flex items-center gap-2.5 shadow-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{localCopied}</span>
        </div>
      )}

      {/* 標題與說明卡片 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EEE8DE] gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8C5A4B] text-white flex items-center justify-center font-bold text-lg shadow-xs">
              🎛️
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                實務救濟答辯與處分自檢工具
              </h2>
              <p className="text-xs sm:text-sm text-[#6E5D53]">
                第一線承辦同仁於收到訴願書/起訴狀時之 20 日黃金期限監控與卷證防禦檢核（避免處分遭撤銷）
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#8C5A4B]/10 text-[#8C5A4B] border border-[#8C5A4B]/20 self-start sm:self-auto">
            <Scale className="w-3.5 h-3.5" />
            <span>內政部訴願會與行政法院判決通說</span>
          </div>
        </div>

        {/* 互動設定選項 */}
        <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* 案件類型選擇 */}
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-bold text-[#1F3864] flex items-center gap-1.5">
                <FolderOpen className="w-4 h-4 text-[#8C5A4B]" />
                <span>1. 救濟案件類別</span>
              </label>
              <select
                value={simCaseType}
                onChange={(e) => setSimCaseType(e.target.value as any)}
                className="w-full p-2.5 bg-white rounded-lg border border-[#DDD5C7] text-xs sm:text-sm text-[#3A2F2A] font-medium focus:ring-2 focus:ring-[#8C5A4B] focus:border-[#8C5A4B]"
              >
                <option value="violation">違反區域計畫法第21條裁罰案件（罰鍰與限期改善）</option>
                <option value="correction">更正編定駁回案件（主張70年前老屋從來之使用）</option>
                <option value="change">變更編定否准案件（主張土地狹小零星被包圍或特定目的）</option>
              </select>
            </div>

            {/* 答辯天數監控 */}
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-bold text-[#1F3864] flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#8C5A4B]" />
                  <span>2. 收到訴願書或起訴狀已過天數（黃金期限：20日）</span>
                </span>
                <span className="text-rose-700 font-black">第 {simDaysRemaining} 天</span>
              </label>
              <input
                type="range"
                min={1}
                max={25}
                value={simDaysRemaining}
                onChange={(e) => setSimDaysRemaining(Number(e.target.value))}
                className="w-full accent-[#8C5A4B]"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>1 日 (剛收到)</span>
                <span className="text-amber-700 font-bold">15 日 (緊繃期)</span>
                <span className="text-red-700 font-black">20 日 (法定送出底線)</span>
                <span className="text-rose-900 font-black">25 日 (逾期)</span>
              </div>
            </div>

            {/* 現場勘查與照片 */}
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-bold text-[#1F3864] flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-[#8C5A4B]" />
                <span>3. 處分當下是否具備「現場勘查紀錄與現況照片」</span>
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setHasOnsiteEvidence(true)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                    hasOnsiteEvidence
                      ? 'bg-[#1F3864] text-white border-[#1F3864]'
                      : 'bg-white text-[#4A3E39] border-[#DDD5C7]'
                  }`}
                >
                  ✓ 有當次處分會勘與照片（獨立取證）
                </button>
                <button
                  type="button"
                  onClick={() => setHasOnsiteEvidence(false)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                    !hasOnsiteEvidence
                      ? 'bg-rose-700 text-white border-rose-700'
                      : 'bg-white text-[#4A3E39] border-[#DDD5C7]'
                  }`}
                >
                  ✕ 僅憑前案公文或他機關函文（有撤銷風險）
                </button>
              </div>
            </div>

            {/* 陳述意見通知 */}
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-bold text-[#1F3864] flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#8C5A4B]" />
                <span>4. 處分前是否已合法寄發「陳述意見通知函」</span>
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setHasHearingNotice(true)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                    hasHearingNotice
                      ? 'bg-[#1F3864] text-white border-[#1F3864]'
                      : 'bg-white text-[#4A3E39] border-[#DDD5C7]'
                  }`}
                >
                  ✓ 已合法送達並給予意見陳述期
                </button>
                <button
                  type="button"
                  onClick={() => setHasHearingNotice(false)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                    !hasHearingNotice
                      ? 'bg-rose-700 text-white border-rose-700'
                      : 'bg-white text-[#4A3E39] border-[#DDD5C7]'
                  }`}
                >
                  ✕ 未給予陳述機會（程序瑕疵高風險）
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 自檢結果提示卡片 */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <span className="text-xs sm:text-sm font-black text-amber-400 flex items-center gap-2">
              <FileCheck className="w-4 h-4" />
              <span>答辯防禦健康度診斷結果</span>
            </span>
            <span className="text-[11px] text-slate-400">依三峽OOO案與近 3 年判決通說分析</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 期限狀態 */}
            <div className="p-4 bg-white/10 rounded-xl border border-white/10 space-y-1.5">
              <span className="text-[11px] text-slate-300 font-bold">答辯時限狀態</span>
              <div
                className={`text-base sm:text-lg font-black ${
                  simDaysRemaining <= 15
                    ? 'text-emerald-400'
                    : simDaysRemaining <= 20
                    ? 'text-amber-400'
                    : 'text-rose-400'
                }`}
              >
                {simDaysRemaining <= 20
                  ? `剩餘 ${20 - simDaysRemaining} 天必須函出`
                  : `已逾期 ${simDaysRemaining - 20} 天！訴願會可逕行決定`}
              </div>
              <p className="text-[11px] text-slate-300">
                {simDaysRemaining <= 20
                  ? '請速備齊答辯書連同全案卷證函送主管機關'
                  : '逾期未答辯易陷程序劣勢，請立即專人補送'}
              </p>
            </div>

            {/* 證據力評級 */}
            <div className="p-4 bg-white/10 rounded-xl border border-white/10 space-y-1.5">
              <span className="text-[11px] text-slate-300 font-bold">處分證據鏈強度</span>
              <div
                className={`text-base sm:text-lg font-black ${
                  hasOnsiteEvidence ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {hasOnsiteEvidence ? '✓ 獨立取證（勝訴率高）' : '⚠️ 欠缺處分當下證據（極危險）'}
              </div>
              <p className="text-[11px] text-slate-300">
                {hasOnsiteEvidence
                  ? '符合內政部「每次處罰、獨立取證」標準，避免推測擬制'
                  : '三峽OOO案第3、4次遭撤銷即因僅憑他機關函文無當下照片'}
              </p>
            </div>

            {/* 程序合法性 */}
            <div className="p-4 bg-white/10 rounded-xl border border-white/10 space-y-1.5">
              <span className="text-[11px] text-slate-300 font-bold">行政程序保障</span>
              <div
                className={`text-base sm:text-lg font-black ${
                  hasHearingNotice ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {hasHearingNotice ? '✓ 符合行政程序法第102條' : '⚠️ 程序瑕疵（高度撤銷風險）'}
              </div>
              <p className="text-[11px] text-slate-300">
                {hasHearingNotice
                  ? '處分前有合法通知陳述意見，防禦程序完整'
                  : '未予陳述意見為行政法院撤銷處分最常見程序理由'}
              </p>
            </div>
          </div>

          {/* 核心建議 */}
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs sm:text-sm text-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-amber-300 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" />
                <span>建議答辯攻防重點：</span>
              </strong>
              <button
                type="button"
                onClick={() =>
                  handleCopy(
                    simCaseType === 'violation'
                      ? '強調土地所有人「狀態責任」（無論是否本人所為或前人所留）、土地改良須「事先申請」事後補正無效、按次處罰係切斷違法行為單一性不違反一事不二罰，並附上歷年航照比對推翻復耕抗辯。'
                      : simCaseType === 'correction'
                      ? '堅守「民國 70 年 2 月 15 日前官方合法證明」與「實地勘查確有建物存在」兩大門檻；指出門牌水電為輔助證據，航照套疊精確判定年代，依法駁回。'
                      : '堅持變更編定為高度法定性行政行為，回歸面積、形狀、道路寬度等客觀要件，不採主觀生活合理性陳述；特殊用途（如殯葬）未附事業計畫與技師簽證依法駁回。',
                    '建議答辯攻防重點'
                  )
                }
                className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>複製攻防要點</span>
              </button>
            </div>
            {simCaseType === 'violation' ? (
              <p className="leading-relaxed">
                強調土地所有人「狀態責任」（無論是否本人所為或前人所留）、土地改良須「事先申請」事後補正無效、按次處罰係切斷違法行為單一性不違反一事不二罰，並附上歷年航照比對推翻復耕抗辯。
              </p>
            ) : simCaseType === 'correction' ? (
              <p className="leading-relaxed">
                堅守「民國 70 年 2 月 15 日前官方合法證明」與「實地勘查確有建物存在」兩大門檻；指出門牌水電為輔助證據，航照套疊精確判定年代，依法駁回。
              </p>
            ) : (
              <p className="leading-relaxed">
                堅持變更編定為高度法定性行政行為，回歸面積、形狀、道路寬度等客觀要件，不採主觀生活合理性陳述；特殊用途（如殯葬）未附事業計畫與技師簽證依法駁回。
              </p>
            )}
          </div>
        </div>

        {/* 實務檢核要點對照說明 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
            <h4 className="text-xs sm:text-sm font-bold text-[#1F3864] flex items-center gap-1.5">
              <Info className="w-4 h-4 text-[#8C5A4B]" />
              <span>「每次處罰、獨立取證」標準（三峽OOO案經驗）</span>
            </h4>
            <p className="text-xs text-[#5C4D44] leading-relaxed">
              行政機關針對違規未改善採取連續罰（按次處罰）時，每一次處分都必須提出獨立且明確的證據，證明違規人於該次限期改善屆滿後仍未履行改善義務。切勿僅憑他機關通報函文即直接作成處分，處分書核發前務必由承辦同仁親自至現場勘查並拍攝當日現況彩色照片。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
            <h4 className="text-xs sm:text-sm font-bold text-[#1F3864] flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>行政程序法第 102 條與合法送達注意</span>
            </h4>
            <p className="text-xs text-[#5C4D44] leading-relaxed">
              行政機關於作成限制或剝奪人民自由或權利之行政處分前，應給予處分相對人陳述意見之機會。務必注意雙掛號郵件之回執聯（送達證書），確認是否由本人、受僱人或有辨識能力之同居人簽收。若寄存送達亦須符合法定期間規範，確保合法送達後方得起算期限。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
