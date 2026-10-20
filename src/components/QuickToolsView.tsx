import React, { useState, useMemo } from 'react';
import {
  COUNTY_ANNOUNCEMENT_DATES,
  PENALTY_TIERS,
  COMMON_FORMS_AND_CONTACTS
} from '../data/referenceData';
import { Calendar, Calculator, AlertOctagon, FileCheck, Search, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export const QuickToolsView: React.FC = () => {
  // Tab within tools
  const [activeSubTool, setActiveSubTool] = useState<'dates' | 'calculator' | 'penalties' | 'forms'>('dates');

  // Tool 1: County date lookup
  const [countySearch, setCountySearch] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('新竹縣');
  const [testDocYear, setTestDocYear] = useState<number>(62); // 民國62年

  // Tool 2: Feedback fee calculator
  const [calcArea, setCalcArea] = useState<number>(1000); // ㎡
  const [calcCurrentValue, setCalcCurrentValue] = useState<number>(3500); // 元/㎡
  const [calcRate, setCalcRate] = useState<number>(50); // % (標準50%)

  const totalFee = useMemo(() => {
    return Math.round(calcArea * calcCurrentValue * (calcRate / 100));
  }, [calcArea, calcCurrentValue, calcRate]);

  const filteredCounties = useMemo(() => {
    return COUNTY_ANNOUNCEMENT_DATES.filter(
      (c) => c.county.includes(countySearch) || c.announcementDate.includes(countySearch)
    );
  }, [countySearch]);

  const activeCountyInfo = COUNTY_ANNOUNCEMENT_DATES.find((c) => c.county.includes(selectedCounty)) || COUNTY_ANNOUNCEMENT_DATES[3];

  // Compare test year
  // Parse effective year from effectiveDate e.g. "69.06.01" -> 69
  const countyEffectiveYear = parseInt(activeCountyInfo.effectiveDate.split('.')[0], 10);
  const isBeforeEffective = testDocYear < countyEffectiveYear;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E4DCC8]">
          <div>
            <div className="text-xs font-semibold text-[#1F3864] uppercase tracking-wider mb-1">
              實用公務速查工具
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-tc text-[#1F3864]">
              非都市土地常用公務試算與標準表
            </h2>
            <p className="text-xs sm:text-sm text-[#5B584E] mt-1">
              提供全國各縣市公告編定生效日判定、農業用地變更回饋金試算及違規裁罰級距標準。
            </p>
          </div>
        </div>

        {/* Sub-tools Tab Bar */}
        <div className="flex items-center gap-1.5 p-1 bg-[#FAF8F2] border border-[#E4DCC8] rounded-lg overflow-x-auto text-xs font-semibold pt-4">
          <button
            onClick={() => setActiveSubTool('dates')}
            className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeSubTool === 'dates'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'text-[#5B584E] hover:text-[#1F3864]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>各縣市編定公告日（更正判定）</span>
          </button>

          <button
            onClick={() => setActiveSubTool('calculator')}
            className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeSubTool === 'calculator'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'text-[#5B584E] hover:text-[#1F3864]'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>農地變更回饋金試算機</span>
          </button>

          <button
            onClick={() => setActiveSubTool('penalties')}
            className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeSubTool === 'penalties'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'text-[#5B584E] hover:text-[#1F3864]'
            }`}
          >
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>違規使用裁罰級距表</span>
          </button>

          <button
            onClick={() => setActiveSubTool('forms')}
            className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeSubTool === 'forms'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'text-[#5B584E] hover:text-[#1F3864]'
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>常見申辦表單與權管單位</span>
          </button>
        </div>
      </div>

      {/* Tool 1: County Announcement Dates */}
      {activeSubTool === 'dates' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Interactive Date Checker */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FFFFFF] border-2 border-[#1F3864] rounded-xl p-5 shadow-xs">
              <h3 className="text-base font-bold font-serif-tc text-[#1F3864] mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#1F3864]" />
                <span>更正編定時點快速驗證器</span>
              </h3>
              <p className="text-xs text-[#5B584E] mb-4">
                選擇案件所屬縣市，並輸入民眾檢附證明文件之年份（民國年），立即判定是否早於公告編定日。
              </p>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-[#5B584E] font-medium mb-1">
                    標的土地所屬縣市：
                  </label>
                  <select
                    value={selectedCounty}
                    onChange={(e) => setSelectedCounty(e.target.value)}
                    className="w-full bg-[#FAF8F2] border border-[#E4DCC8] rounded-md px-3 py-2 text-sm text-[#2A2822]"
                  >
                    {COUNTY_ANNOUNCEMENT_DATES.map((c) => (
                      <option key={c.county} value={c.county}>
                        {c.county}（{c.announcementDate}）
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#5B584E] font-medium mb-1">
                    申請人證明文件記載年份（民國年）：
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#1F3864]">民國</span>
                    <input
                      type="number"
                      value={testDocYear}
                      onChange={(e) => setTestDocYear(parseInt(e.target.value) || 0)}
                      className="w-24 bg-[#FAF8F2] border border-[#E4DCC8] rounded-md px-3 py-1.5 text-sm text-[#2A2822] font-mono text-center"
                    />
                    <span className="text-sm font-bold text-[#1F3864]">年</span>
                  </div>
                </div>

                {/* Validation Output */}
                <div
                  className={`mt-4 p-4 rounded-xl border ${
                    isBeforeEffective
                      ? 'bg-[#EAF3EE] border-[#8FBDA3] text-[#235A3D]'
                      : 'bg-[#FEF2F2] border-[#F87171] text-[#991B1B]'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm mb-1">
                    {isBeforeEffective ? (
                      <CheckCircle2 className="w-5 h-5 text-[#235A3D]" />
                    ) : (
                      <XCircle className="w-5 h-5 text-[#991B1B]" />
                    )}
                    <span>
                      {isBeforeEffective
                        ? '【符合時效要件】早於公告編定基準日'
                        : '【時效不符】晚於或等於公告編定日'}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    {selectedCounty}之非都市土地公告實施日為{' '}
                    <strong>{activeCountyInfo.announcementDate}</strong>（民國
                    {countyEffectiveYear}年）。
                    {isBeforeEffective
                      ? ` 您輸入的民國 ${testDocYear} 年證明文件在基準日之前，具備更正編定實質審查資格。`
                      : ` 您輸入的民國 ${testDocYear} 年證明文件已晚於編定實施日，無法認定為編定前既存合法建物，應予輔導或駁回。`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full List of County Announcement Dates */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between gap-3 mb-3">
              <h3 className="text-base font-bold font-serif-tc text-[#1F3864]">
                全國各縣市非都市土地公告編定生效日期表
              </h3>
              <div className="relative w-40">
                <Search className="w-3.5 h-3.5 text-[#5B584E] absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="搜尋縣市..."
                  value={countySearch}
                  onChange={(e) => setCountySearch(e.target.value)}
                  className="w-full pl-8 pr-2 py-1 text-xs bg-[#FAF8F2] border border-[#E4DCC8] rounded"
                />
              </div>
            </div>

            <div className="border border-[#E4DCC8] rounded-lg overflow-x-auto max-h-[480px]">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF8F2] border-b border-[#E4DCC8] text-[#1F3864] font-bold sticky top-0">
                  <tr>
                    <th className="py-2.5 px-3">縣市別</th>
                    <th className="py-2.5 px-3">公告實施日期</th>
                    <th className="py-2.5 px-3">簡稱</th>
                    <th className="py-2.5 px-3">實務備註</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4DCC8]">
                  {filteredCounties.map((c) => (
                    <tr
                      key={c.county}
                      onClick={() => setSelectedCounty(c.county)}
                      className={`hover:bg-[#FAF8F2] cursor-pointer transition-colors ${
                        selectedCounty === c.county ? 'bg-[#FAF8F2] font-semibold text-[#1F3864]' : ''
                      }`}
                    >
                      <td className="py-2 px-3 font-medium">{c.county}</td>
                      <td className="py-2 px-3 font-mono">{c.announcementDate}</td>
                      <td className="py-2 px-3 font-mono text-[#5B584E]">{c.effectiveDate}</td>
                      <td className="py-2 px-3 text-[#5B584E] text-[11px]">{c.legalNote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tool 2: Agricultural Feedback Fee Calculator */}
      {activeSubTool === 'calculator' && (
        <div className="bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl p-5 sm:p-6 shadow-xs max-w-3xl mx-auto space-y-6">
          <div className="border-b border-[#E4DCC8] pb-3">
            <h3 className="text-lg font-bold font-serif-tc text-[#1F3864] flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#1F3864]" />
              <span>農業用地變更回饋金即時試算機</span>
            </h3>
            <p className="text-xs text-[#5B584E] mt-1">
              依據《農業發展條例》第12條及《農業用地變更回饋金撥繳及分配利用辦法》規定核算。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#1F3864] mb-1.5">
                變更編定面積 (平方公尺 ㎡)
              </label>
              <input
                type="number"
                value={calcArea}
                onChange={(e) => setCalcArea(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full bg-[#FAF8F2] border border-[#E4DCC8] rounded-lg px-3 py-2 text-sm text-[#2A2822] font-mono"
              />
              <span className="text-[11px] text-[#5B584E] mt-1 block">
                約合 {(calcArea * 0.3025).toFixed(1)} 坪
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1F3864] mb-1.5">
                當期公告土地現值 (元/㎡)
              </label>
              <input
                type="number"
                value={calcCurrentValue}
                onChange={(e) => setCalcCurrentValue(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full bg-[#FAF8F2] border border-[#E4DCC8] rounded-lg px-3 py-2 text-sm text-[#2A2822] font-mono"
              />
              <span className="text-[11px] text-[#5B584E] mt-1 block">
                由土地登記謄本標示部查得
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1F3864] mb-1.5">
                撥繳比率 (%)
              </label>
              <select
                value={calcRate}
                onChange={(e) => setCalcRate(parseFloat(e.target.value))}
                className="w-full bg-[#FAF8F2] border border-[#E4DCC8] rounded-lg px-3 py-2 text-sm text-[#2A2822]"
              >
                <option value={50}>標準費率：50% (一般產業/商業變更)</option>
                <option value={25}>優惠費率：25% (特定公共事業)</option>
                <option value={10}>特低費率：10% (原住民族特定發展)</option>
                <option value={0}>免繳納：0% (法定免繳項目)</option>
              </select>
              <span className="text-[11px] text-[#5B584E] mt-1 block">
                一般非農用途均適用50%
              </span>
            </div>
          </div>

          {/* Result Card */}
          <div className="p-5 bg-[#FAF8F2] border-2 border-[#1F3864] rounded-xl text-center space-y-2">
            <div className="text-xs font-semibold text-[#5B584E] uppercase tracking-wider">
              應繳納農業用地變更回饋金估算金額
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-[#1F3864] tabular-nums">
              NT$ {totalFee.toLocaleString()} 元整
            </div>
            <div className="text-xs text-[#5B584E]">
              計算公式：{calcArea.toLocaleString()} ㎡ × NT$ {calcCurrentValue.toLocaleString()} × {calcRate}% = NT$ {totalFee.toLocaleString()}
            </div>
          </div>

          <div className="p-3 bg-[#FEF6F0] border border-[#F5C2A5] rounded-lg text-xs text-amber-900 leading-relaxed">
            <strong>承辦提醒：</strong>
            回饋金由縣府農業處（局）開立繳款單，繳款人持單向指定公庫或農會繳納入「農業發展基金」。地政處確認全數繳清憑證後，始得囑託轄區地政事務所辦理土地登記簿使用地變更編定。
          </div>
        </div>
      )}

      {/* Tool 3: Violation Penalties Tier Table */}
      {activeSubTool === 'penalties' && (
        <div className="bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="border-b border-[#E4DCC8] pb-3">
            <h3 className="text-base sm:text-lg font-bold font-serif-tc text-[#1F3864] flex items-center gap-2">
              <AlertOctagon className="w-5 h-5 text-[#991B1B]" />
              <span>區域計畫法第21條及第22條違規裁罰處分級距表</span>
            </h3>
            <p className="text-xs text-[#5B584E] mt-1">
              直轄市及各縣市政府依據《違反區域計畫法案件裁罰基準》實務執行級距對照。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PENALTY_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#FAF8F2] border border-[#E4DCC8] rounded-xl space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1F3864]">{tier.tier}</span>
                  <span className="text-xs font-bold font-mono text-[#991B1B] bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                    {tier.fineRange}
                  </span>
                </div>
                <div className="text-xs text-[#2A2822]">
                  <strong className="text-[#5B584E]">構成要件：</strong>
                  {tier.criteria}
                </div>
                <div className="text-xs text-[#235A3D] bg-[#FFFFFF] p-2.5 rounded border border-[#E4DCC8]">
                  <strong>處置處分程序：</strong>
                  {tier.actionRequired}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tool 4: Forms & Contacts Directory */}
      {activeSubTool === 'forms' && (
        <div className="bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="border-b border-[#E4DCC8] pb-3">
            <h3 className="text-base sm:text-lg font-bold font-serif-tc text-[#1F3864] flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#1F3864]" />
              <span>非都市土地常用公務表單與權管單位速查表</span>
            </h3>
            <p className="text-xs text-[#5B584E] mt-1">
              收案時判斷應請民眾填寫之表單及對應之跨局處主責窗口。
            </p>
          </div>

          <div className="border border-[#E4DCC8] rounded-lg overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF8F2] border-b border-[#E4DCC8] text-[#1F3864] font-bold">
                <tr>
                  <th className="py-2.5 px-3">標準表單名稱</th>
                  <th className="py-2.5 px-3">主要受理/審查機關</th>
                  <th className="py-2.5 px-3">用途說明與新人筆記</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4DCC8]">
                {COMMON_FORMS_AND_CONTACTS.map((form, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF8F2] transition-colors">
                    <td className="py-2.5 px-3 font-bold text-[#1F3864]">{form.name}</td>
                    <td className="py-2.5 px-3 text-[#5B584E]">{form.office}</td>
                    <td className="py-2.5 px-3 text-[#2A2822]">{form.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
