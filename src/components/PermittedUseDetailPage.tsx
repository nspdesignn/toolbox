import React, { useState } from 'react';
import {
  ArrowLeft,
  Compass,
  FileCheck2,
  Building,
  FolderGit2,
  Scale,
  CheckCircle2,
  Copy,
  Check,
  RotateCcw,
  HelpCircle,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  FileText
} from 'lucide-react';

interface PermittedUseDetailPageProps {
  onBack: () => void;
}

interface ResultData {
  badge: string;
  badgeColor: string;
  title: string;
  situation: string;
  law: string;
  check: string[];
  quote: string;
  fill: string;
}

const RESULTS: Record<'s1' | 's2' | 's3', ResultData> = {
  s3: {
    badge: '情境３',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    title: '變更編定之土地容許',
    situation: '土地係經申請變更編定而來，其使用受原核准興辦事業計畫拘束，不得另依附表一容許使用表主張其他容許使用項目或使用細目。例如原農牧用地變更編定為交通用地作停車場使用者，即不得再依附表一容許使用表主張交通用地容許作駕訓班使用。',
    law: '《非都市土地使用管制規則》第30條第6項：「依第四項規定申請變更編定之土地，其使用管制及開發建築，應依目的事業主管機關核准之興辦事業計畫辦理，申請人不得逕依第六條附表一容許使用表作為興辦事業計畫以外之其他容許使用項目或許可使用細目使用。」',
    check: [
      '查閱該筆土地之變更編定歷程（原用地別、變更後用地別）',
      '查閱核准之興辦事業計畫內容'
    ],
    quote: '（交代變更編定歷程），依非都市土地使用管制規則第30條第6項規定，申請變更編定之土地，其使用管制及開發建築應依目的事業主管機關核准之興辦事業計畫辦理，申請人不得逕依第六條附表一容許使用表作為興辦事業計畫以外之其他容許使用項目或許可使用細目使用。爰請本案請申請人向變更前目的事業主管機關及有關機關確認○○使用是否符合原計畫使用內容。',
    fill: '待填空項目：編定歷程、欲申請之使用項目'
  },
  s2: {
    badge: '情境２',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    title: '特定目的事業用地容許',
    situation: '土地經查為特定目的事業用地，須依其特定目的事業計畫使用，而非依一般附表一容許使用表項目認定。',
    law: '《非都市土地使用管制規則》第6條第3項附表一容許使用表（特定目的事業用地類別）；內政部「非都市土地容許使用執行要點」第4點',
    check: [
      '查閱土地參考資訊檔、現況使用、異動清冊',
      '確認是誰申請變更為特目的用地、土地所有權人（管理機關）為何',
      '藉以判斷其目的事業主管機關'
    ],
    quote: '（交代變更為特定目的事業用地之編定歷程），依非都市土地使用管制規則第6條第3項附表一容許使用表規定，特定目的事業用地之容許使用項目係按特定目的事業計畫使用，惟依內政部頒「非都市土地容許使用執行要點」第4點規定，許可使用細目之適用範圍，係由其目的事業主管機關（○○○）認定。',
    fill: '待填空項目：編定歷程、目的事業主管機關名稱'
  },
  s1: {
    badge: '情境１',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    title: '一般容許使用（查附表一容許使用表）',
    situation: '土地非因變更編定而來，亦非特定目的事業用地，回歸一般容許使用項目認定。',
    law: '《非都市土地使用管制規則》第6條第3項附表一容許使用表；內政部「非都市土地容許使用執行要點」第4點',
    check: [
      '依用地別查閱附表一容許使用表（附表一容許使用表內容龐大，請自行查閱現行法規，本工具不內建資料庫）',
      '找出對應的容許使用項目、使用細目、附帶條件'
    ],
    quote: '依非都市土地使用管制規則第6條第3項附表一容許使用表規定，○○用地之容許使用項目有「○○」，需經目的事業主管機關、使用地主管機關及有關機關許可，其使用細目有「○○」，其附帶條件為：「○○」。惟依內政部頒「非都市土地容許使用執行要點」第4點規定，許可使用細目之適用範圍，係由其目的事業主管機關認定。',
    fill: '待填空項目：用地別、容許使用項目、使用細目、附帶條件'
  }
};

export const PermittedUseDetailPage: React.FC<PermittedUseDetailPageProps> = ({ onBack }) => {
  // 主要功能：
  // 1. 一般容許使用 2. 特定目的事業用地容許 3. 變更編定之土地容許 4. 常用相關法令參考 ＋ 右上角「判斷小工具」
  const [activeTab, setActiveTab] = useState<'general' | 'special' | 'change' | 'wizard' | 'laws'>('wizard');

  // 篩選工具當前步驟：'q1' (是否為變更編定而來) | 'q2' (是否為特目的用地) | 'result' (判定結果)
  const [step, setStep] = useState<'q1' | 'q2' | 'result'>('q1');
  const [resultKey, setResultKey] = useState<'s1' | 's2' | 's3'>('s1');
  const [copiedQuote, setCopiedQuote] = useState<boolean>(false);

  const handleCopy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-5">
      {/* 頂部標題區 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ECE6DB]">
          <div className="flex items-center gap-3.5">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm sm:text-base font-semibold text-[#4A3E39] bg-[#F5EFE7] hover:bg-[#EAE2D7] border border-[#DDD5C7] rounded-xl transition-colors cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>返回業務選單</span>
            </button>
            <div className="h-6 w-px bg-[#DDD5C7] shrink-0" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif-tc font-semibold text-[#2D2623]">
                容許使用
              </h1>
              <p className="text-sm sm:text-base text-[#665A54] mt-0.5">
                新北市非都市土地容許使用審查指引與分流判斷
              </p>
            </div>
          </div>

          {/* 容許使用右邊（右上角）：醒目突出的「判斷小工具」按鈕 */}
          <div className="flex items-center sm:self-center">
            <button
              type="button"
              onClick={() => setActiveTab('wizard')}
              className={`flex items-center gap-2.5 px-5 py-2.5 sm:py-3 rounded-xl transition-all cursor-pointer font-bold text-base sm:text-lg shadow-md hover:shadow-lg active:scale-95 border-2 ${
                activeTab === 'wizard'
                  ? 'bg-[#1F3864] text-white border-amber-400 ring-4 ring-amber-400/35 shadow-lg scale-[1.02]'
                  : 'bg-gradient-to-r from-[#1F3864] to-[#2B4B80] hover:from-[#152747] hover:to-[#223963] text-white border-[#152747] shadow-sm'
              }`}
            >
              <Compass className="w-5 h-5 text-amber-400" />
              <span>判斷小工具</span>
            </button>
          </div>
        </div>

        {/* 畫面上 4 個主要分類按鈕 */}
        <div className="flex flex-wrap items-center gap-2.5 pt-4 text-sm sm:text-base">
          <button
            onClick={() => setActiveTab('general')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'general'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>一般容許使用</span>
          </button>

          <button
            onClick={() => setActiveTab('special')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'special'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>特定目的事業用地容許</span>
          </button>

          <button
            onClick={() => setActiveTab('change')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'change'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            <span>變更編定之土地容許</span>
          </button>

          <button
            onClick={() => setActiveTab('laws')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'laws'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>常用相關法令參考</span>
          </button>
        </div>
      </div>

      {/* 判斷小工具分頁 */}
      {activeTab === 'wizard' && (
        <div className="space-y-5">
          {/* 篩選工具卡片主體（模擬 容許使用.html） */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-6 sm:p-7 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#ECE6DB]">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                  容許使用分流小工具
                </h2>
                <p className="text-sm text-[#7D7065] mt-0.5">
                  兩題判斷土地屬性，對應到查證方式與回文參考架構（實際回文內容仍須由承辦人依個案判斷撰寫）
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStep('q1')}
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-bold text-[#1F3864] bg-[#FAF7F4] hover:bg-[#F2ECE4] border border-[#1F3864] rounded-xl transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>重新判斷</span>
              </button>
            </div>

            {/* 步驟 1: 判斷點 1 */}
            {step === 'q1' && (
              <div className="pt-2 space-y-4">
                <div className="border-l-4 border-l-[#1F3864] pl-3">
                  <div className="text-xs sm:text-sm font-bold text-[#7D7065] tracking-wide">
                    判斷點 １
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1F3864] mt-1">
                    這塊地是否為申請變更編定而來？
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setResultKey('s3');
                      setStep('result');
                    }}
                    className="text-left p-5 rounded-xl border-2 border-[#E4DCC8] hover:border-[#1F3864] bg-[#FBF7EE] text-[#2A2822] transition-all cursor-pointer group space-y-1 shadow-2xs hover:shadow-xs"
                  >
                    <div className="font-bold text-base sm:text-lg group-hover:text-[#1F3864] flex items-center justify-between">
                      <span>是，屬變更編定而來之土地</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-medium">情境３</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5B584E]">
                      土地原非該編定，係依管制規則第28條申請變更編定核准後異動而來
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep('q2')}
                    className="text-left p-5 rounded-xl border-2 border-[#E4DCC8] hover:border-[#1F3864] bg-[#FBF7EE] text-[#2A2822] transition-all cursor-pointer group space-y-1 shadow-2xs hover:shadow-xs"
                  >
                    <div className="font-bold text-base sm:text-lg group-hover:text-[#1F3864] flex items-center justify-between">
                      <span>否，非變更編定而來</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium">往下一步</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5B584E]">
                      原始公告編定即為該使用地類別，或經更正編定確認，無興辦事業計畫
                    </p>
                  </button>
                </div>
              </div>
            )}

            {/* 步驟 2: 判斷點 2 */}
            {step === 'q2' && (
              <div className="pt-2 space-y-4">
                <div className="border-l-4 border-l-[#1F3864] pl-3">
                  <div className="text-xs sm:text-sm font-bold text-[#7D7065] tracking-wide">
                    判斷點 ２
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1F3864] mt-1">
                    這塊地是否為特定目的事業用地？
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setResultKey('s2');
                      setStep('result');
                    }}
                    className="text-left p-5 rounded-xl border-2 border-[#E4DCC8] hover:border-[#1F3864] bg-[#FBF7EE] text-[#2A2822] transition-all cursor-pointer group space-y-1 shadow-2xs hover:shadow-xs"
                  >
                    <div className="font-bold text-base sm:text-lg group-hover:text-[#1F3864] flex items-center justify-between">
                      <span>是，屬特定目的事業用地</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-medium">情境２</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5B584E]">
                      土地謄本標示部編定使用地類別載明為「特定目的事業用地」
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setResultKey('s1');
                      setStep('result');
                    }}
                    className="text-left p-5 rounded-xl border-2 border-[#E4DCC8] hover:border-[#1F3864] bg-[#FBF7EE] text-[#2A2822] transition-all cursor-pointer group space-y-1 shadow-2xs hover:shadow-xs"
                  >
                    <div className="font-bold text-base sm:text-lg group-hover:text-[#1F3864] flex items-center justify-between">
                      <span>否，一般用地</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">情境１</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5B584E]">
                      農牧、林業、甲/乙/丙/丁種建築、交通等一般編定用地
                    </p>
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setStep('q1')}
                    className="text-xs sm:text-sm text-[#7D7065] hover:text-[#2A2822] underline cursor-pointer"
                  >
                    ← 返回上一步
                  </button>
                </div>
              </div>
            )}

            {/* 結果呈現卡片 */}
            {step === 'result' && (
              <div className="pt-2 space-y-5">
                <div className="p-5 sm:p-6 bg-[#FAF7F2] border-2 border-[#1F3864] rounded-2xl space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded-md bg-[#1F3864] text-white">
                      {RESULTS[resultKey].badge}
                    </span>
                    <span className="text-xs sm:text-sm text-[#5B584E]">
                      依《非都市土地使用管制規則》相關規定
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                    {RESULTS[resultKey].title}
                  </h3>

                  {/* 1. 適用情形 */}
                  <div className="space-y-1">
                    <div className="text-base font-bold text-[#1F3864]">適用情形</div>
                    <div className="text-base sm:text-lg text-[#2A2822] leading-relaxed">
                      {RESULTS[resultKey].situation}
                    </div>
                  </div>

                  {/* 2. 法源依據（字體放大且顏色顯眼） */}
                  <div className="space-y-1.5">
                    <div className="text-base font-bold text-[#1F3864]">法源依據</div>
                    <div className="p-4 rounded-xl border-2 border-[#1F3864]/30 bg-[#F0F4FA] text-base sm:text-lg font-bold text-[#1F3864] leading-relaxed shadow-2xs">
                      {RESULTS[resultKey].law}
                    </div>
                  </div>

                  {/* 3. 查證方式 */}
                  <div className="space-y-1.5">
                    <div className="text-base font-bold text-[#1F3864]">查證方式</div>
                    <ul className="space-y-1.5 pl-1">
                      {RESULTS[resultKey].check.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-base sm:text-lg text-[#2A2822] leading-relaxed">
                          <span className="w-2 h-2 rounded-full bg-[#1F3864] shrink-0 mt-2.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 4. 回文參考架構（顯眼外框、大字體、好閱讀） */}
                  <div className="p-5 sm:p-6 bg-[#FFFDF5] border-2 border-[#C88A2C] rounded-2xl shadow-xs space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2 pb-2.5 border-b border-[#F0D8A8]">
                      <div className="flex items-center flex-wrap gap-2 text-base sm:text-lg font-bold text-[#8C5A4B]">
                        <div className="flex items-center gap-2">
                          <FileText className="w-5 h-5 text-[#8C5A4B]" />
                          <span>回文參考架構</span>
                        </div>
                        <span className="text-xs sm:text-sm font-normal text-[#8C5A4B] bg-[#FFF5EA] px-2.5 py-0.5 rounded-md border border-[#F0D8A8]">
                          實際回文內容仍須由承辦人依個案判斷撰寫
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(RESULTS[resultKey].quote)}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold text-[#8C5A4B] bg-white hover:bg-[#F2ECE4] border-2 border-[#C88A2C]/40 hover:border-[#C88A2C] rounded-lg transition-all cursor-pointer shadow-2xs active:scale-95"
                      >
                        {copiedQuote ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-600" />
                            <span>已複製草稿</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-[#8C5A4B]" />
                            <span>複製回文架構</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-base sm:text-lg text-[#2A2822] leading-relaxed font-medium">
                      {RESULTS[resultKey].quote}
                    </div>

                    <div className="text-xs sm:text-sm font-semibold text-[#8C5A4B] pt-2 border-t border-[#F0D8A8]/60">
                      📌 {RESULTS[resultKey].fill}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setStep('q1')}
                    className="px-5 py-2.5 rounded-xl bg-[#1F3864] hover:bg-[#152747] text-white font-bold text-sm sm:text-base transition-all cursor-pointer shadow-xs"
                  >
                    ↺ 重新判斷另一筆土地
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 1. 一般容許使用分頁 */}
      {activeTab === 'general' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-6 sm:p-7 shadow-xs space-y-5">
          <div className="border-b border-[#ECE6DB] pb-3 flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 mb-1 inline-block">
                情境１
              </span>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#2D2623]">
                一般容許使用（查附表一容許使用表）
              </h2>
            </div>
            {/* 右上角醒目標籤（文字放大） */}
            <span className="text-sm sm:text-base font-bold text-[#8C5A4B] bg-[#FAF7F2] border-2 border-[#DDD5C7] px-3.5 py-1.5 rounded-xl shadow-2xs">
              未變更編定之一般土地
            </span>
          </div>

          <div className="space-y-5 text-base sm:text-lg text-[#2A2822] leading-relaxed">
            <div className="space-y-1.5">
              <div className="font-bold text-[#1F3864]">適用情形</div>
              <p>{RESULTS.s1.situation}</p>
            </div>

            <div className="space-y-1.5">
              <div className="font-bold text-[#1F3864]">法源依據</div>
              <div className="p-4 rounded-xl border-2 border-[#1F3864]/30 bg-[#F0F4FA] font-bold text-[#1F3864] text-base sm:text-lg">
                {RESULTS.s1.law}
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-[#1F3864]">查證方式</div>
              <ul className="space-y-1.5 pl-1">
                {RESULTS.s1.check.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#1F3864] shrink-0 mt-2.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 回文參考架構（更顯眼框框＋大字體） */}
            <div className="p-5 sm:p-6 bg-[#FFFDF5] border-2 border-[#C88A2C] rounded-2xl shadow-xs space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-2.5 border-b border-[#F0D8A8]">
                <div className="flex items-center flex-wrap gap-2 text-base sm:text-lg font-bold text-[#8C5A4B]">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#8C5A4B]" />
                    <span>回文參考架構</span>
                  </div>
                  <span className="text-xs sm:text-sm font-normal text-[#8C5A4B] bg-[#FFF5EA] px-2.5 py-0.5 rounded-md border border-[#F0D8A8]">
                    實際回文內容仍須由承辦人依個案判斷撰寫
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(RESULTS.s1.quote)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold text-[#8C5A4B] bg-white hover:bg-[#F2ECE4] border-2 border-[#C88A2C]/40 hover:border-[#C88A2C] rounded-lg transition-all cursor-pointer shadow-2xs active:scale-95"
                >
                  {copiedQuote ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>已複製</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#8C5A4B]" />
                      <span>複製回文架構</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-base sm:text-lg text-[#2A2822] leading-relaxed font-medium">
                {RESULTS.s1.quote}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#8C5A4B] pt-2 border-t border-[#F0D8A8]/60">
                📌 {RESULTS.s1.fill}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. 特定目的事業用地容許分頁 */}
      {activeTab === 'special' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-6 sm:p-7 shadow-xs space-y-5">
          <div className="border-b border-[#ECE6DB] pb-3 flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800 mb-1 inline-block">
                情境２
              </span>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#2D2623]">
                特定目的事業用地容許
              </h2>
            </div>
            {/* 右上角醒目標籤（文字放大） */}
            <span className="text-sm sm:text-base font-bold text-[#8C5A4B] bg-[#FAF7F2] border-2 border-[#DDD5C7] px-3.5 py-1.5 rounded-xl shadow-2xs">
              按特定目的事業計畫使用
            </span>
          </div>

          <div className="space-y-5 text-base sm:text-lg text-[#2A2822] leading-relaxed">
            <div className="space-y-1.5">
              <div className="font-bold text-[#1F3864]">適用情形</div>
              <p>{RESULTS.s2.situation}</p>
            </div>

            <div className="space-y-1.5">
              <div className="font-bold text-[#1F3864]">法源依據</div>
              <div className="p-4 rounded-xl border-2 border-[#1F3864]/30 bg-[#F0F4FA] font-bold text-[#1F3864] text-base sm:text-lg">
                {RESULTS.s2.law}
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-[#1F3864]">查證方式</div>
              <ul className="space-y-1.5 pl-1">
                {RESULTS.s2.check.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#1F3864] shrink-0 mt-2.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 回文參考架構（更顯眼框框＋大字體） */}
            <div className="p-5 sm:p-6 bg-[#FFFDF5] border-2 border-[#C88A2C] rounded-2xl shadow-xs space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-2.5 border-b border-[#F0D8A8]">
                <div className="flex items-center flex-wrap gap-2 text-base sm:text-lg font-bold text-[#8C5A4B]">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#8C5A4B]" />
                    <span>回文參考架構</span>
                  </div>
                  <span className="text-xs sm:text-sm font-normal text-[#8C5A4B] bg-[#FFF5EA] px-2.5 py-0.5 rounded-md border border-[#F0D8A8]">
                    實際回文內容仍須由承辦人依個案判斷撰寫
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(RESULTS.s2.quote)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold text-[#8C5A4B] bg-white hover:bg-[#F2ECE4] border-2 border-[#C88A2C]/40 hover:border-[#C88A2C] rounded-lg transition-all cursor-pointer shadow-2xs active:scale-95"
                >
                  {copiedQuote ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>已複製</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#8C5A4B]" />
                      <span>複製回文架構</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-base sm:text-lg text-[#2A2822] leading-relaxed font-medium">
                {RESULTS.s2.quote}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#8C5A4B] pt-2 border-t border-[#F0D8A8]/60">
                📌 {RESULTS.s2.fill}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. 變更編定之土地容許分頁 */}
      {activeTab === 'change' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-6 sm:p-7 shadow-xs space-y-5">
          <div className="border-b border-[#ECE6DB] pb-3 flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-rose-100 text-rose-800 mb-1 inline-block">
                情境３
              </span>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#2D2623]">
                變更編定之土地容許
              </h2>
            </div>
            {/* 右上角醒目標籤（文字放大） */}
            <span className="text-sm sm:text-base font-bold text-[#8C5A4B] bg-[#FAF7F2] border-2 border-[#DDD5C7] px-3.5 py-1.5 rounded-xl shadow-2xs">
              受原核准計畫拘束
            </span>
          </div>

          <div className="space-y-5 text-base sm:text-lg text-[#2A2822] leading-relaxed">
            <div className="space-y-1.5">
              <div className="font-bold text-[#1F3864]">適用情形</div>
              <p>{RESULTS.s3.situation}</p>
            </div>

            <div className="space-y-1.5">
              <div className="font-bold text-[#1F3864]">法源依據</div>
              <div className="p-4 rounded-xl border-2 border-[#1F3864]/30 bg-[#F0F4FA] font-bold text-[#1F3864] text-base sm:text-lg">
                {RESULTS.s3.law}
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-[#1F3864]">查證方式</div>
              <ul className="space-y-1.5 pl-1">
                {RESULTS.s3.check.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#1F3864] shrink-0 mt-2.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 回文參考架構（更顯眼框框＋大字體） */}
            <div className="p-5 sm:p-6 bg-[#FFFDF5] border-2 border-[#C88A2C] rounded-2xl shadow-xs space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-2.5 border-b border-[#F0D8A8]">
                <div className="flex items-center flex-wrap gap-2 text-base sm:text-lg font-bold text-[#8C5A4B]">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#8C5A4B]" />
                    <span>回文參考架構</span>
                  </div>
                  <span className="text-xs sm:text-sm font-normal text-[#8C5A4B] bg-[#FFF5EA] px-2.5 py-0.5 rounded-md border border-[#F0D8A8]">
                    實際回文內容仍須由承辦人依個案判斷撰寫
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(RESULTS.s3.quote)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold text-[#8C5A4B] bg-white hover:bg-[#F2ECE4] border-2 border-[#C88A2C]/40 hover:border-[#C88A2C] rounded-lg transition-all cursor-pointer shadow-2xs active:scale-95"
                >
                  {copiedQuote ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>已複製</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#8C5A4B]" />
                      <span>複製回文架構</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-base sm:text-lg text-[#2A2822] leading-relaxed font-medium">
                {RESULTS.s3.quote}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#8C5A4B] pt-2 border-t border-[#F0D8A8]/60">
                📌 {RESULTS.s3.fill}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. 常用相關法令參考分頁 */}
      {activeTab === 'laws' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-6 sm:p-7 shadow-xs space-y-5">
          <div className="border-b border-[#ECE6DB] pb-3 flex items-center justify-between flex-wrap gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#2D2623]">
                常用相關法令參考
              </h2>
              <p className="text-sm text-[#7D7065] mt-0.5">
                容許使用主要規範與各情境法規對照
              </p>
            </div>
            {/* 右上角醒目標籤（文字放大） */}
            <span className="text-sm sm:text-base font-bold text-white bg-[#8C5A4B] px-3.5 py-1.5 rounded-xl shadow-2xs">
              法令彙整
            </span>
          </div>

          <div className="space-y-4">
            <div className="p-4 sm:p-5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#1F3864] text-white">
                  情境１與情境２
                </span>
                <span className="font-bold text-base sm:text-lg text-[#1F3864]">
                  非都市土地使用管制規則 第6條第3項附表一容許使用表
                </span>
              </div>
              <p className="text-base text-[#4A3E39] leading-relaxed">
                對應情境：情境１（一般容許使用項目認定）與情境２（特定目的事業用地類別）。各使用地之容許使用項目、細目及附帶條件均明定於附表一容許使用表。
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-rose-700 text-white">
                  情境３
                </span>
                <span className="font-bold text-base sm:text-lg text-[#2D2623]">
                  非都市土地使用管制規則 第30條第6項
                </span>
              </div>
              <p className="text-base text-[#4A3E39] leading-relaxed">
                對應情境：變更編定土地之使用限制。申請變更編定之土地，其使用管制及開發建築，應依目的事業主管機關核准之興辦事業計畫辦理，申請人不得逕依第6條附表一容許使用表作為興辦事業計畫以外之其他容許使用項目或許可使用細目使用。
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-amber-700 text-white">
                  通案認定權責
                </span>
                <span className="font-bold text-base sm:text-lg text-[#2D2623]">
                  內政部「非都市土地容許使用執行要點」第4點
                </span>
              </div>
              <p className="text-base text-[#4A3E39] leading-relaxed">
                各使用地容許使用項目中，許可使用細目之適用範圍，係由其目的事業主管機關認定。
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
