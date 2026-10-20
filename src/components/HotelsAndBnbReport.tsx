import React from 'react';
import {
  FileText,
  Copy,
  Table,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Building2,
  Hotel,
  Home,
  Compass,
  ArrowRight,
  ExternalLink,
  MapPin,
  Layers,
  TreePine,
  Check,
  Calendar,
  BookOpen,
  PieChart
} from 'lucide-react';

interface HotelsAndBnbReportProps {
  onCopy?: (text: string, label: string) => void;
}

export const HotelsAndBnbReport: React.FC<HotelsAndBnbReportProps> = ({ onCopy }) => {
  const handleCopyText = (text: string, label: string) => {
    if (onCopy) {
      onCopy(text, label);
    } else {
      navigator.clipboard?.writeText(text);
    }
  };

  return (
    <div className="space-y-8 text-[#2D2623] leading-relaxed text-sm sm:text-base">
      {/* 報告主標題與狀態說明 */}
      <div className="text-center py-5 bg-[#FAF7F2] border-2 border-[#DDD5C7] rounded-xl space-y-1.5 shadow-2xs">
        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-[#EAE2D7] text-[#1F3864]">
          <FileText className="w-3.5 h-3.5 text-[#8C5A4B]" />
          專題報告第 5 案・全文收錄無摘要
        </span>
        <h1 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864] pt-1">
          旅館及民宿相關涉及容許及用地變更
        </h1>
        <p className="text-xs sm:text-sm text-[#7D7065]">
          定義與新北統計現況・容許使用規定・用地變更作業・休閒農場住宿設施・未來國土計畫管制及審查程序圖
        </p>
      </div>

      {/* 章節快速導覽錨點列 */}
      <div className="p-3 bg-white rounded-xl border border-[#DDD5C7] flex items-center gap-2 overflow-x-auto text-xs font-bold shadow-2xs">
        <span className="text-[#8C5A4B] shrink-0 font-bold">章節快速跳轉：</span>
        <a href="#hotel-sec-1" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          一、定義與新北統計
        </a>
        <a href="#hotel-sec-2" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          二、容許使用之規定
        </a>
        <a href="#hotel-sec-3" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          三、用地變更之規定
        </a>
        <a href="#hotel-sec-4" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          四、未來國土計畫管制
        </a>
        <a href="#hotel-sec-5" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          五、相關法令清單
        </a>
        <a href="#hotel-sec-6" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          六、審查作業程序圖表
        </a>
      </div>

      {/* ================================================================= */}
      {/* 一、定義與新北市統計 */}
      {/* ================================================================= */}
      <section id="hotel-sec-1" className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              一
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              一、定義與新北市統計
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `一、定義\n（一）民宿：指利用自用或自有住宅，結合當地人文街區、歷史風貌、自然景觀、生態、環境資源、農林漁牧、工藝製造、藝術文創等生產活動，以在地體驗交流為目的、家庭副業方式經營，提供旅客城鄉家庭式住宿環境與文化生活之住宿處所。(民宿管理辦法第 2 條)\n（二）旅館業：指觀光旅館業以外，以各種方式名義提供不特定人以日或週之住宿、休息並收取費用及其他相關服務之營利事業。(發展觀光條例第 2 條)\n（三）觀光旅館業：指經營國際觀光旅館或一般觀光旅館，對旅客提供住宿及相關服務之營利事業。(發展觀光條例第 2 條)\n\n新北市轄區內旅館業與民宿統計：\n1. 國際觀光旅館：共計 4 家，分別為「福容大飯店淡水漁人碼頭」、「大板根渡假酒店」、「板橋凱撒大飯店」及「八里福朋喜來登酒店」。\n2. 一般觀光旅館：共計 4 家，分別為「美麗春天大飯店」、「碧特弗大飯店」、「瓏山林台北中和飯店」及「福容大飯店福隆」，合計 8 家觀光旅館，客房數為 1,323 間，平均住用率為 58.52%。\n3. 合法旅館：共計 225 家，房間數為 12,711 間。\n4. 合法民宿：共計 307 家，房間數為 1,021 間，其中新設 2 家旅館（房間數為 504 間以及 6 間），及 24 家民宿（房間數為 62 間）。\n【資料來源：中華民國 113 年新北市政府觀光旅遊局統計年報】`,
                '一、定義與統計'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製定義與統計</span>
          </button>
        </div>

        {/* 三大名詞定義 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">（一）</span>
              <h3 className="font-bold text-base text-[#1F3864]">民宿</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
              指利用自用或自有住宅，結合當地人文街區、歷史風貌、自然景觀、生態、環境資源、農林漁牧、工藝製造、藝術文創等生產活動，以在地體驗交流為目的、家庭副業方式經營，提供旅客城鄉家庭式住宿環境與文化生活之住宿處所。（<strong>民宿管理辦法第 2 條</strong>）
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">（二）</span>
              <h3 className="font-bold text-base text-[#1F3864]">旅館業</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
              指觀光旅館業以外，以各種方式名義提供不特定人以日或週之住宿、休息並收取費用及其他相關服務之營利事業。（<strong>發展觀光條例第 2 條</strong>）
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">（三）</span>
              <h3 className="font-bold text-base text-[#1F3864]">觀光旅館業</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
              指經營國際觀光旅館或一般觀光旅館，對旅客提供住宿及相關服務之營利事業。（<strong>發展觀光條例第 2 條</strong>）
            </p>
          </div>
        </div>

        {/* 新北市統計現況卡片 */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#ECE6DB]">
            <h3 className="font-bold text-base text-[#1F3864] flex items-center gap-2">
              <PieChart className="w-4 h-4 text-[#8C5A4B]" />
              <span>新北市轄區內旅館業與民宿統計現況</span>
            </h3>
            <span className="text-xs text-[#7D7065] bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#DDD5C7]">
              113 年觀旅局年報
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <span className="text-xs font-bold text-[#8C5A4B]">1. 國際觀光旅館</span>
              <div className="text-lg font-bold text-[#1F3864]">共計 4 家</div>
              <p className="text-[#4A3E39] text-xs leading-relaxed pt-1 border-t border-[#DDD5C7]">
                「福容大飯店淡水漁人碼頭」、「大板根渡假酒店」、「板橋凱撒大飯店」、「八里福朋喜來登酒店」。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <span className="text-xs font-bold text-[#8C5A4B]">2. 一般觀光旅館</span>
              <div className="text-lg font-bold text-[#1F3864]">共計 4 家</div>
              <p className="text-[#4A3E39] text-xs leading-relaxed pt-1 border-t border-[#DDD5C7]">
                「美麗春天大飯店」、「碧特弗大飯店」、「瓏山林台北中和飯店」、「福容大飯店福隆」。
              </p>
              <div className="text-[11px] text-[#1F3864] font-semibold">
                合計 8 家觀光旅館・客房 1,323 間・平均住用率 58.52%
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <span className="text-xs font-bold text-[#8C5A4B]">3. 合法旅館</span>
              <div className="text-lg font-bold text-[#1F3864]">共計 225 家</div>
              <p className="text-[#4A3E39] text-xs leading-relaxed pt-1 border-t border-[#DDD5C7]">
                總房間數為 <strong>12,711 間</strong>。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <span className="text-xs font-bold text-[#8C5A4B]">4. 合法民宿</span>
              <div className="text-lg font-bold text-[#1F3864]">共計 307 家</div>
              <p className="text-[#4A3E39] text-xs leading-relaxed pt-1 border-t border-[#DDD5C7]">
                房間數為 <strong>1,021 間</strong>。其中新設 2 家旅館（房間數為 504 間及 6 間），及 24 家民宿（房間數 62 間）。
              </p>
            </div>
          </div>

          <p className="text-xs text-[#7D7065] text-right font-medium">
            【資料來源：中華民國 113 年新北市政府觀光旅遊局統計年報】
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 二、容許使用之規定 */}
      {/* ================================================================= */}
      <section id="hotel-sec-2" className="space-y-5 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              二
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              二、容許使用之規定
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `二、容許使用之規定\n(一) 依非都市土地使用管制規則第 6 條之規定，非都市土地經劃定使用分區並編定使用地類別，應依其容許使用之項目及許可使用細目使用。\n(二) 依管制規則第 6 條附表一「各種使用地容許使用項目及許可使用細目表」表列有「民宿」或「旅館」之土地使用地類別整理。\n\n◆【民宿之容許使用】\n1. 甲、乙、丙種建築用地之容許使用項目有「住宅」，其許可使用細目免經申請許可使用細目有「民宿」。\n2. 農牧、林業、養殖、鹽業用地之容許使用項目有「農舍」，其許可使用細目有「民宿」，惟需經目的事業主管機關、使用地主管機關及有關機關許可使用。\n\n◆【旅館之容許使用】\n1. 甲、乙、丙種建築用地之容許使用項目有「日用品零售及服務設施」，其許可使用細目免經申請許可使用細目有「營業及辦公處所」。原則可以設置「旅館」，惟不得位於全國區域計畫規定之沿海自然保護區。\n2. 丙種建築、遊憩用地之容許使用項目有「觀光遊憩管理服務設施」，其許可使用細目免經申請許可使用細目有「國際觀光旅館、觀光旅館、一般旅館」。`,
                '二、容許使用之規定'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製容許使用</span>
          </button>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1 text-xs sm:text-sm text-[#333333]">
          <p>
            <strong>(一)</strong> 依非都市土地使用管制規則（以下稱管制規則）第 6 條之規定，非都市土地經劃定使用分區並編定使用地類別，應依其容許使用之項目及許可使用細目使用。
          </p>
          <p>
            <strong>(二)</strong> 依管制規則第 6 條附表一「各種使用地容許使用項目及許可使用細目表」表列有「<strong>民宿</strong>」或「<strong>旅館</strong>」之土地使用地類別整理如下：
          </p>
        </div>

        {/* ◆【民宿之容許使用】 */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <Home className="w-5 h-5 text-[#8C5A4B]" />
            <h3 className="font-bold text-base text-[#1F3864]">
              ◆【民宿之容許使用】
            </h3>
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-[#333333]">
            <p>
              <strong>1. 甲、乙、丙種建築用地：</strong>容許使用項目有「<strong>住宅</strong>」，其許可使用細目免經申請許可使用細目有「<strong>民宿</strong>」。
            </p>
            <p>
              <strong>2. 農牧、林業、養殖、鹽業用地：</strong>容許使用項目有「<strong>農舍</strong>」，其許可使用細目有「<strong>民宿</strong>」，惟需經目的事業主管機關、使用地主管機關及有關機關許可使用。
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#1F3864] text-white">
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 whitespace-nowrap w-32">使用地類別</th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[140px]">容許使用項目</th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[120px]">免經申請許可細目</th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[130px]">需經主管機關許可細目</th>
                  <th className="py-2.5 px-4 font-bold min-w-[260px]">附帶條件</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C7]">
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    甲、乙、丙種建築用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">(一) 住宅</td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#1F3864]">2. 民宿</td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">—</td>
                  <td className="py-3 px-4 align-top text-[#7D7065]">—</td>
                </tr>

                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    農牧用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-xs">
                    (二) 農舍<br />
                    <span className="text-[#7D7065]">（工業區、河川區除外；特定農業區、森林區不得興建集村農舍）</span>
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">—</td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#8C5A4B]">4. 民宿</td>
                  <td className="py-3 px-4 align-top text-xs space-y-1 text-[#333333]">
                    <p className="text-rose-800 font-medium">一、不得位於全國區域計畫規定之沿海自然保護區。</p>
                    <p>
                      二、限於民宿管理辦法第四條第一項但書規定之<strong>原住民族地區、經農業主管機關劃定之休閒農業區或核發許可登記證之休閒農場、觀光地區、偏遠地區及離島地區等之農舍</strong>。但位於全國區域計畫規定之沿海一般保護區者，需經保護區主管機關許可。
                    </p>
                  </td>
                </tr>

                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    林業用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">(十九) 農舍</td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">—</td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#8C5A4B]">民宿</td>
                  <td className="py-3 px-4 align-top text-xs space-y-1 text-[#333333]">
                    <p>
                      限於民宿管理辦法第四條第一項但書規定之原住民族地區、經農業主管機關劃定之休閒農業區或核發許可登記證之休閒農場、觀光地區、偏遠地區及離島地區等之農舍，<strong className="text-rose-800">並僅限於本規則 102 年 9 月 21 日修正生效前取得使用執照之農舍</strong>。
                    </p>
                  </td>
                </tr>

                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    養殖用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">(七) 農舍<br /><span className="text-xs text-[#7D7065]">（森林區除外）</span></td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">—</td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-medium text-[#4A3E39]">同農牧用地</td>
                  <td className="py-3 px-4 align-top text-xs text-[#4A3E39]">同農牧用地</td>
                </tr>

                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    鹽業用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">(二) 農舍</td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">—</td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-medium text-[#4A3E39]">同農牧用地</td>
                  <td className="py-3 px-4 align-top text-xs text-[#4A3E39]">同農牧用地</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 函釋補充：遊憩用地得否建置民宿 */}
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-2 text-xs sm:text-sm">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#8C5A4B]" />
              <span>【相關函釋補充】Q. 遊憩用地得否建置住宅或農舍，且做為民宿使用一案？</span>
            </h4>
            <p className="text-xs text-[#7D7065]">
              （依交通部觀光局 102 年 11 月 20 日觀賓字第 1020038810 號函釋）
            </p>
            <div className="pl-4 border-l-2 border-[#1F3864]/40 space-y-1.5 text-[#333333]">
              <p>
                <strong>答：</strong>查民宿管理辦法第 10 條（現為第 8 條）第 1 款：「民宿之申請登記應符合下列規定：建築物使用用途以住宅為限。但第四條第一項但書規定地區，其經營者為農舍及其座落用地之所有權人者，得以農舍供作民宿使用。」之規定，住宅或農舍始得申請民宿。
              </p>
              <p>
                所詢遊憩用地得否興建住宅或農舍，係屬內政部權責，依內政部 102 年 10 月 30 日內授中辦地字第 1026040243 號函復略以：<strong>「查區域計畫法施行細則第 13 條規定，遊憩用地係供國民遊憩使用者，與甲、乙、丙種建築用地係供建築使用者，二者之使用性質不同。另依非都市土地使用管制規則第 6 條附表 1 規定，遊憩用地尚無容許作住宅或農舍項目使用，故無民宿管理辦法適用疑義。」</strong>
              </p>
            </div>
          </div>
        </div>

        {/* ◆【旅館之容許使用】 */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <Hotel className="w-5 h-5 text-[#1F3864]" />
            <h3 className="font-bold text-base text-[#1F3864]">
              ◆【旅館之容許使用】
            </h3>
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-[#333333]">
            <p>
              <strong>1. 甲、乙、丙種建築用地：</strong>容許使用項目有「<strong>日用品零售及服務設施</strong>」，其許可使用細目免經申請許可使用細目有「<strong>營業及辦公處所</strong>」。原則可以設置「<strong>旅館</strong>」，惟不得位於全國區域計畫規定之沿海自然保護區。
            </p>
            <p>
              <strong>2. 丙種建築、遊憩用地：</strong>容許使用項目有「<strong>觀光遊憩管理服務設施</strong>」，其許可使用細目免經申請許可使用細目有「<strong>國際觀光旅館、觀光旅館、一般旅館</strong>」。
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#1F3864] text-white">
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 whitespace-nowrap w-32">使用地類別</th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[150px]">容許使用項目</th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[140px]">免經申請許可細目</th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[110px]">需經主管機關許可細目</th>
                  <th className="py-2.5 px-4 font-bold min-w-[260px]">附帶條件</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C7]">
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    甲、乙種建築用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">(二) 日用品零售及服務設施</td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#1F3864]">4. 營業及辦公處所</td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">—</td>
                  <td className="py-3 px-4 align-top text-xs space-y-1 text-[#333333]">
                    <p className="text-rose-800 font-medium">一、國際觀光旅館、觀光旅館、一般旅館者，不得位於全國區域計畫規定之沿海自然保護區。</p>
                    <p>二、位於全國區域計畫規定之沿海一般保護區者，需經目的事業主管機關、使用地主管機關及有關機關許可。</p>
                  </td>
                </tr>

                <tr className="hover:bg-[#FAF7F2]">
                  <td rowSpan={2} className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    丙種建築用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">(二) 日用品零售及服務設施</td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#1F3864]">4. 營業及辦公處所</td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">—</td>
                  <td className="py-3 px-4 align-top text-xs text-[#4A3E39]">附帶條件同甲種建築用地</td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">(十五) 觀光遊憩管理服務設施</td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top space-y-0.5 text-xs">
                    <p className="font-semibold text-[#1F3864]">1. 國際觀光旅館</p>
                    <p className="font-semibold text-[#1F3864]">2. 觀光旅館</p>
                    <p className="font-semibold text-[#1F3864]">3. 一般旅館</p>
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">—</td>
                  <td className="py-3 px-4 align-top text-xs space-y-1 text-[#333333]">
                    <p className="text-rose-800 font-medium">一、不得位於全國區域計畫規定之沿海自然保護區。</p>
                    <p>二、位於全國區域計畫規定之沿海一般保護區者，需經目的事業主管機關、使用地主管機關及有關機關許可者。</p>
                  </td>
                </tr>

                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    遊憩用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">(四) 觀光遊憩管理服務設施</td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-medium text-[#4A3E39]">同丙種建築用地</td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">—</td>
                  <td className="py-3 px-4 align-top text-xs space-y-1 text-[#333333]">
                    <p className="font-semibold text-[#1F3864]">一、本款各目高爾夫球場除外。</p>
                    <p className="text-rose-800 font-medium">二、國際觀光旅館、觀光旅館及一般旅館不得位於全國區域計畫規定之沿海自然保護區。</p>
                    <p>但位於全國區域計畫規定之沿海一般保護區者，需經保護區主管機關許可。</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 函釋補充：甲乙丙丁建是否可興建旅館或飯店 */}
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-2 text-xs sm:text-sm">
            <h4 className="font-bold text-[#1F3864] flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#8C5A4B]" />
              <span>【相關函釋補充】Q. 非都市土地範圍內之甲、乙、丙、丁種建築用地是否可興建旅館或飯店一案？</span>
            </h4>
            <p className="text-xs text-[#7D7065]">
              （依內政部 100 年 4 月 13 日內授中辦地字第 1000724207 號函釋）
            </p>
            <div className="pl-4 border-l-2 border-[#1F3864]/40 space-y-2 text-[#333333]">
              <p>
                <strong>1、甲、乙種建築用地：</strong>查管制規則附表一規定容許作「日用品零售及服務設施」使用，其細目包括「營業及辦公處所」。依容許使用執行要點第 4 點及第 2 點附件一，該細目目的主管為「依其行業性質分別其主管機關」。綜上，於甲、乙種建築用地興建旅館或飯店，<strong>如經目的事業主管機關（中央為交通部觀光局，直轄市或縣(市)政府為旅館業主管單位）認定係屬「營業及辦公處所」之適用範疇者，尚符合非都市土地容許使用規定（即得依法興建）</strong>。
              </p>
              <p>
                <strong>2、丙種建築用地：</strong>容許作「觀光遊憩管理服務設施」項目使用，其許可細目包括「國際觀光旅館」、「觀光旅館」、「一般旅館」等，故興建旅館（飯店）<strong>係屬容許使用範圍</strong>。
              </p>
              <p>
                <strong>3、丁種建築用地：</strong>除已開發工業區且經規劃有案之丁種建築用地容許作「工業社區」項下細目 5「社區日用品零售及服務設施」及細目 14「其他經工業主管機關同意設置之設施」外（惟該 2 細目是否涵蓋旅館應洽工業主管機關），<strong>其餘丁種建築用地尚無可供興建旅館（飯店）之容許使用項目或許可使用細目</strong>。
              </p>
            </div>
          </div>
        </div>

        {/* ◆【民宿與旅館之目的事業主管機關表】 */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <Building2 className="w-5 h-5 text-[#1F3864]" />
            <h3 className="font-bold text-base text-[#1F3864]">
              ◆【民宿與旅館之目的事業主管機關】（非都市土地容許使用執行要點第 2 點附表一節錄）
            </h3>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#1F3864] text-white">
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 whitespace-nowrap">容許使用項目</th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 whitespace-nowrap">許可使用細目</th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 whitespace-nowrap">中央機關</th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[150px]">直轄市或縣（市）級機關</th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[130px]">鄉（鎮、市、區）級單位</th>
                  <th className="py-2.5 px-3 font-bold min-w-[180px]">備註</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C7]">
                <tr className="hover:bg-[#FAF7F2]">
                  <td rowSpan={2} className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">一、農舍</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top">1. 農舍及農舍附屬設施</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top">行政院農業委員會<br />內政部營建署</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top text-xs">農業(產業發展)(都市發展)(工務)（建設）局(處)</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top text-xs">農業(經建)(農經)(建設)課</td>
                  <td className="py-2.5 px-3 align-top text-xs text-[#7D7065]">林業用地依森林法第2條規定之林業主管機關核定（未包括鄉鎮縣轄市區公所）</td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#8C5A4B]">4. 民宿</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#1F3864]">交通部</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top text-xs font-semibold text-[#1F3864]">觀光(交通旅遊)(城鄉發展)局(處)</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top text-xs">建設(經建)(農經)課</td>
                  <td className="py-2.5 px-3 align-top text-[#7D7065]">—</td>
                </tr>

                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">二、住宅</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#8C5A4B]">2. 民宿</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#1F3864]">交通部</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top text-xs font-semibold text-[#1F3864]">觀光(交通旅遊)(城鄉發展)局(處)</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top text-xs">建設(經建)(農經)課</td>
                  <td className="py-2.5 px-3 align-top text-[#7D7065]">—</td>
                </tr>

                <tr className="hover:bg-[#FAF7F2]">
                  <td rowSpan={4} className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">十八、觀光遊憩管理服務設施</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-semibold text-[#1F3864]">1. 國際觀光旅館</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#1F3864]">交通部</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-semibold text-[#1F3864]">觀光(交通旅遊)局(處)</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">—</td>
                  <td rowSpan={4} className="py-2.5 px-3 align-top text-xs text-[#4A3E39] bg-[#FAF7F2]/30">
                    本項目觀光遊憩管理服務設施在風景區或風景特定區經營管理範圍內，<strong>應加會管理機構</strong>。
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-semibold text-[#1F3864]">2. 觀光旅館</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#1F3864]">交通部</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-semibold text-[#1F3864]">觀光(交通旅遊)局(處)</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">—</td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-semibold text-[#1F3864]">3. 一般旅館</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#1F3864]">交通部</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-semibold text-[#1F3864]">觀光(交通旅遊)局(處)</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">—</td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-semibold text-[#1F3864]">4. 餐飲住宿設施</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#1F3864]">交通部</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top font-semibold text-[#1F3864]">觀光(交通旅遊)局(處)</td>
                  <td className="py-2.5 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-[#7D7065] pt-1">
            附註：直轄市或縣（市）政府之組織編制及業務劃分有不同規定者，以實際業務職掌之機關（單位）為目的事業主管機關（單位）。
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 三、用地變更之規定 */}
      {/* ================================================================= */}
      <section id="hotel-sec-3" className="space-y-5 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              三
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              三、用地變更之規定
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `三、用地變更之規定\n（一）法令依據：\n` +
                  `1. 管制規則第 27 條：土地使用分區內各種使用地，除依第三章規定辦理使用分區及使用地變更者外，應在原使用分區範圍內申請變更編定。應依使用分區內各種使用地變更編定原則表如附表三辦理。非都市土地變更編定執行要點，由內政部定之。\n` +
                  `2. 變更編定執行要點第 8 點：申請變更編定為特定目的事業用地……（十）住宿、餐飲、農產品加工（釀造）廠、農產品與農村文物展示（售）及教育解說中心等休閒農業設施。（二十）經區域計畫委員會審議通過之開發案件，無適當用地可供辦理變更編定者。\n` +
                  `3. 管制規則第 10 條：非都市土地經劃定使用分區後，因申請開發，依區域計畫之規定需辦理土地使用分區變更者，應依本規則之規定辦理。\n` +
                  `4. 管制規則第 11 條：非都市土地申請開發達下列規模者，應辦理土地使用分區變更：三、申請開發遊憩設施之土地面積達 5 公頃以上，應變更為特定專用區。七、前六款以外開發之土地面積達 2 公頃以上，應變更為特定專用區。\n\n` +
                  `（二）申請開發觀光旅館之規定：於非都市土地規模不得少於 5 公頃。新北市觀旅局初審同意轉交通部觀光署核發籌設許可。開發規模 30 公頃以上報內政部區委會，30 公頃以下由直轄市縣市政府代為許可審議核定，變更為特定專用區遊憩用地。管制規則第 44 條保育綠地不得少於 30% 變更為國土保安用地。\n\n` +
                  `（三）申請一般旅館之規定：甲乙丙建及遊憩用地直接適用；其餘土地變更遊憩用地（特農、森林、河川區不允許變更）；山坡地面積規模不得少於 5 公頃。新北市目前無訂定變更一般旅館審查作業要點。\n\n` +
                  `（四）休閒農場農業用地設置住宅設施：依休閒農業輔導管理辦法第 21～25 條，全場休閒農業區非山坡地 ≥ 1 公頃、山坡地 ≥ 10 公頃；以外非山坡地 ≥ 2 公頃、山坡地 ≥ 10 公頃。住宿設施應取得觀光旅館營業執照或旅館業登記證。變更為特定目的事業用地，達 2 公頃以上辦理分區變更，總面積不得超過農業用地面積 15% 且以 2 公頃為限（超過 200 公頃者以 5 公頃為限）。`,
                '三、用地變更之規定'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製用地變更</span>
          </button>
        </div>

        {/* （一）法令依據 */}
        <div className="space-y-3">
          <h3 className="font-bold text-base text-[#1F3864] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1F3864]" />
            （一）法令依據
          </h3>

          <div className="space-y-2.5 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1">
              <strong className="text-[#1F3864]">1. 《非都市土地使用管制規則》第 27 條：</strong>
              <p className="text-[#333333] leading-relaxed">
                土地使用分區內各種使用地，除依第三章規定辦理使用分區及使用地變更者外，應在原使用分區範圍內申請變更編定。前項使用分區內各種使用地之變更編定原則，除本規則另有規定外，應依使用分區內各種使用地變更編定原則表如附表三辦理。非都市土地變更編定執行要點，由內政部定之。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1">
              <strong className="text-[#1F3864]">2. 《非都市土地變更編定執行要點》第 8 點：</strong>
              <p className="text-[#333333] leading-relaxed">
                申請變更編定為特定目的事業用地，以各該使用區無其他適當使用地可變更編定者為限，且以政府機關或公營事業機構興辦者為主。但有下列情形之一，經直轄市或縣（市）目的事業主管機關依管制規則第 30 條規定徵得變更前目的事業主管機關及有關機關同意後核准其興辦事業計畫者，得申請變更編定為特定目的事業用地：……。<strong className="text-[#1F3864]">（十）住宿、餐飲、農產品加工（釀造）廠、農產品與農村文物展示（售）及教育解說中心等休閒農業設施。</strong><strong className="text-[#8C5A4B]">（二十）經區域計畫委員會審議通過之開發案件，無適當用地可供辦理變更編定者。</strong>……。前項各款興辦事業計畫，依規定需由中央目的事業主管機關核准者，應檢具其核准文件辦理變更編定。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1">
              <strong className="text-[#1F3864]">3. 《非都市土地使用管制規則》第 10 條：</strong>
              <p className="text-[#333333] leading-relaxed">
                非都市土地經劃定使用分區後，因申請開發，依區域計畫之規定需辦理土地使用分區變更者，應依本規則之規定辦理。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-1">
              <strong className="text-[#1F3864]">4. 《非都市土地使用管制規則》第 11 條：</strong>
              <p className="text-[#333333] leading-relaxed">
                非都市土地申請開發達下列規模者，應辦理土地使用分區變更：……<strong>三、申請開發遊憩設施之土地面積達 5 公頃以上，應變更為特定專用區。</strong>……。<strong>七、前六款以外開發之土地面積達 2 公頃以上，應變更為特定專用區。</strong>前項辦理土地使用分區變更案件，申請開發涉及其他法令規定開發所需最小規模者，並應符合各該法令之規定。……。
              </p>
            </div>
          </div>
        </div>

        {/* （二）申請開發觀光旅館之規定 */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#1F3864] text-white">（二）</span>
            <h3 className="font-bold text-base text-[#1F3864]">
              申請開發觀光旅館之規定
            </h3>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm text-[#333333]">
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong className="text-[#1F3864]">1、開發規模與籌設許可：</strong>
              申請開發觀光旅館興辦事業計畫，於<strong>非都市土地規模不得少於 5 公頃</strong>。但本規則等相關法規另有規定者，從其規定。申請籌設應先檢具籌設申請文件報經縣（市）目的事業主管機關（<strong>新北市政府觀光旅遊局</strong>）審查同意後，再轉送中央目的事業主管機關（<strong>交通部觀光署</strong>）審查同意後，核發籌設許可。（申請開發觀光旅館興辦事業計畫審查作業要點第 4 點）
            </div>

            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong className="text-[#1F3864]">2、委辦直轄市、縣（市）政府審議許可：</strong>
              區域計畫法施行細則第 16 條之 4 規定，依本法第 15 條之 1 第一項第二款規定申請開發之案件，於一定面積以下者，區域計畫擬定機關得委託直轄市、縣（市）政府辦理審議許可。前項之一定面積，由中央主管機關定之。（非都市土地使用分區及使用地變更申請案件委辦直轄市縣（市）政府審查作業要點）
            </div>

            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong className="text-[#1F3864]">3、開發許可與審議層級（30 公頃分界）：</strong>
              申請土地倘非屬前揭得容許使用之土地，經同意籌設許可後，須向<strong>新北市政府城鄉發展局</strong>申請開發許可，<strong>開發規模屬 30 公頃以上者，須報經內政部區域計畫委員會審查同意後，核發開發許可</strong>；如<strong>開發規模於 30 公頃以下者，由直轄市、縣(市)政府代為許可審議核定</strong>，辦理土地使用分區變更為特定專用區，用地變更為<strong>遊憩用地</strong>。
            </div>

            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong className="text-[#1F3864]">4、地政局變更編定：</strong>
              取得開發許可文件後檢具變更編定申請書及開發許可等相關文件，向<strong>新北市政府地政局</strong>申請辦理分區及使用地變更，地政局受理後審查，經會審城鄉發展局及農業局等相關單位意見後，依開發許可核准之開發計畫，核准辦理變更分區及使用地變更編定。
            </div>

            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong className="text-[#1F3864]">5、保育綠地 30% 規定（管制規則第 44 條）：</strong>
              另依本規則第 44 條規定，申請變更編定為遊憩用地者，其事業計畫必須配置必要之保育綠地及公共設施，<strong>設置之保育綠地不得少於變更編定面積 30%，且變更編定為國土保安用地</strong>，公共設施則俟興建完竣經勘驗合格後，依核定之土地使用計畫，變更編定為適當用地。
            </div>
          </div>
        </div>

        {/* （三）申請一般旅館之規定 */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#1F3864] text-white">（三）</span>
            <h3 className="font-bold text-base text-[#1F3864]">
              申請一般旅館之規定
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
            在非都市土地設置旅館，須符合《非都市土地使用管制規則》及各縣市興辦事業計畫審查要點。<strong>原則上以甲、乙、丙種建築用地及遊憩用地可直接作旅館使用；其餘土地（如農牧、林業用地等）則須先向目的事業主管機關提出興辦事業計畫核准後，向地方政府單位申請用地變更為「遊憩用地」</strong>。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
              <strong className="text-[#1F3864]">1、土地類別限制：</strong>
              <div className="space-y-1 text-[#4A3E39]">
                <p><strong>(1) 直接適用：</strong>若土地為「甲、乙、丙種建築用地」或「遊憩用地」，得直接依非都市土地使用管制規則作旅館使用。</p>
                <p><strong>(2) 變更用途：</strong>在非都市土地位於<strong className="text-rose-800">「特定農業區、森林區、河川區」不允許變更編定為遊憩用地</strong>，其餘分區得依法申請變更編定為「遊憩用地」。（管制規則第 27 條附表三）</p>
                <p><strong>(3) 山坡地限制：</strong>若申請位於山坡地範圍，<strong>面積規模不得少於 5 公頃</strong>。</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
              <strong className="text-[#1F3864]">2、旅館業設置規定：</strong>
              <div className="space-y-1 text-[#4A3E39]">
                <p>
                  <strong>(1) 中央與地方要點現況：</strong>中央僅有訂「申請開發觀光旅館興辦事業計畫審查作業要點」，地方政府得依管制規則第 30 條視實際需要訂定審查作業要點。目前有訂定審查作業要點之縣市有新竹市、新竹縣、苗栗縣等。
                </p>
                <p>
                  <strong>(2) 新北市現況：</strong>經本府觀光旅遊局表示，<strong>本市目前無訂定非都市土地申請變更為一般旅館之審查作業要點</strong>，未來如有變更編定審查案件之需求者，將再研議另行訂定相關規定之。
                </p>
              </div>
            </div>
          </div>

          {/* 各縣市設置規模面積限制參考表 */}
          <div className="space-y-2 pt-2">
            <h4 className="font-bold text-xs sm:text-sm text-[#1F3864] flex items-center gap-1.5">
              <Table className="w-4 h-4 text-[#8C5A4B]" />
              <span>【目前有訂定審查作業要點之縣市參考】</span>
            </h4>

            <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] bg-white">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#1F3864] text-white">
                    <th className="py-2 px-3 font-bold border-r border-white/20 whitespace-nowrap w-24">各縣市</th>
                    <th className="py-2 px-4 font-bold min-w-[280px]">設置規模面積限制與要點名稱</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DDD5C7]">
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="py-2.5 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7]">新竹市</td>
                    <td className="py-2.5 px-4 text-[#333333]">
                      <strong>不得少於 2 公頃。山坡地不得少於 5 公頃。</strong><br />
                      <span className="text-xs text-[#7D7065]">(新竹市非都市土地申請變更為遊憩用地興辦事業計畫審查作業要點)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="py-2.5 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7]">新竹縣</td>
                    <td className="py-2.5 px-4 text-[#333333]">
                      <strong>審查作業要點未明定。</strong><br />
                      <span className="text-xs text-[#7D7065]">(新竹縣非都市土地申請變更為一般旅館使用興辦事業計畫審查作業要點)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="py-2.5 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7]">苗栗縣</td>
                    <td className="py-2.5 px-4 text-[#333333]">
                      <strong>不得少於 2 公頃。山坡地不得少於 5 公頃。</strong><br />
                      <span className="text-xs text-[#7D7065]">(苗栗縣非都市土地申請變更為遊憩用地興辦事業計畫審查作業要點)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="py-2.5 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7]">宜蘭縣</td>
                    <td className="py-2.5 px-4 text-[#333333]">
                      <strong>不得小於 2 公頃，不得大於 5 公頃。</strong><br />
                      <span className="text-xs text-[#7D7065]">(宜蘭縣非都市土地申請變更為遊憩用地興辦事業計畫審查作業要點)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="py-2.5 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7]">屏東縣</td>
                    <td className="py-2.5 px-4 text-[#333333]">
                      <strong>不得少於 2 公頃。</strong><br />
                      <span className="text-xs text-[#7D7065]">(屏東縣非都市土地申請變更為觀光遊憩使用之遊憩用地興辦事業計畫審查作業要點)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="py-2.5 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7]">南投縣</td>
                    <td className="py-2.5 px-4 text-[#333333]">
                      <strong>不得少於 0.6 公頃。山坡地不得少於 5 公頃。</strong><br />
                      <span className="text-xs text-[#7D7065]">(南投縣非都市土地申請變更為觀光遊憩使用之遊憩用地興辦事業計畫審查作業要點)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="py-2.5 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7]">花蓮縣</td>
                    <td className="py-2.5 px-4 text-[#333333]">
                      <strong>不得小於 2 公頃。</strong><br />
                      <span className="text-xs text-[#7D7065]">(花蓮縣非都市土地申請變更為觀光遊憩使用之遊憩用地興辦事業計畫審查作業要點)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* （四）休閒農場農業用地得設置「住宅設施」之規定 */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#1F3864] text-white">（四）</span>
            <h3 className="font-bold text-base text-[#1F3864]">
              休閒農場農業用地得設置「住宅設施」之規定
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#333333]">
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong className="text-[#1F3864]">1、定義與依據：</strong>
              所稱「休閒農場」指經營休閒農業之場地。依<strong>休閒農業輔導管理辦法第 21 條第一款</strong>明定休閒農場之農業用地，得視經營需要及規模，設置「住宅設施」之休閒農業設施。
            </div>

            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
              <strong className="text-[#1F3864]">2、設置分區限制：</strong>
              休閒農場得申請設置於非都市土地之工業區、河川區以外之其他使用分區內所編定之農牧用地、養殖用地及工業區、河川區、森林區以外之其他使用分區內所編定之林業用地。<strong className="text-rose-800">已申請興建農舍之農業用地，不得設置前條休閒農業設施</strong>。（休閒農業輔導管理辦法第 22 條）
            </div>

            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <strong className="text-[#1F3864]">3、住宅設施農業用地面積門檻（第 23 條）：</strong>
              <div className="pl-3 space-y-1 text-xs">
                <p><strong>一、全場均坐落於休閒農業區範圍者：</strong>（一）位於非山坡地土地面積在 <strong>1 公頃以上</strong>。（二）位於山坡地之都市土地在 1 公頃以上或<strong>非都市土地面積達 10 公頃以上</strong>。</p>
                <p><strong>二、前款以外範圍者：</strong>（一）位於非山坡地土地面積在 <strong>2 公頃以上</strong>。（二）位於山坡地之都市土地在 2 公頃以上或<strong>非都市土地面積達 10 公頃以上</strong>。</p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <strong className="text-[#1F3864]">4、設施設置原則與營業執照（第 24 條）：</strong>
              <p className="leading-relaxed">
                以符合休閒農業經營目的、無礙自然文化景觀為原則：<strong>（一）以集中設置為原則</strong>。<strong>（二）住宿設施為提供不特定人之住宿相關服務使用者，應依規定取得相關用途之建築執照，並於取得休閒農場許可登記證後，依發展觀光條例及相關規定取得觀光旅館業營業執照或旅館業登記證</strong>；提供特定人士住宿者，應以該休閒農場員工之單身宿舍為限，且不得超過住宿設施用地總面積 5%。
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <strong className="text-[#1F3864]">5、變更編定與面積比率限制（第 25 條）：</strong>
              <p className="leading-relaxed">
                應以休閒農場土地範圍擬具興辦事業計畫，向縣市政府主管機關辦理變更編定。<strong>興辦事業計畫內辦理變更編定面積達 2 公頃以上者，應辦理土地使用分區變更</strong>。前項總面積不得超過休閒農場內農業用地面積 <strong>15%</strong>，並以 <strong>2 公頃</strong>為限；休閒農場總面積超過 200 公頃者，應以 <strong>5 公頃</strong>為限。
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <strong className="text-[#8C5A4B]">6、實務綜整與新北市現況：</strong>
              <p className="leading-relaxed">
                綜上，根據《休閒農業輔導管理辦法》第 25 條規定，位於非都市土地的農業用地，若設置第 21 條第一款之休閒農業設施（住宿設施），<strong>應辦理變更編定為「特定目的事業用地」</strong>。住宿設施之性質屬民宿或旅館業，應依其申請案件審查之主管機關認定。<strong>然而現行新北市非都市土地休閒農場之農業用地設置住宿設施，仍須辦理土地變更編定程序，惟整體評估其實質經濟效益有限，故目前業者多以設置露營場作為住宿服務之主要型態</strong>。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 六、未來國土計畫使用管制規定 (依原文編號) */}
      {/* ================================================================= */}
      <section id="hotel-sec-4" className="space-y-5 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              六
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              六、未來國土計畫使用管制規定
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `六、未來國土計畫使用管制規定\n` +
                  `（一）依據國土計畫法第 22 條第 1 項規定：「直轄市、縣（市）國土計畫公告實施後，應由各該主管機關依各級國土計畫國土功能分區之劃設內容，製作國土功能分區圖及編定適當使用地，並實施管制。」及第 23 條第 2 項規定：「國土功能分區及其分類之使用地類別編定、變更、規模、可建築用地及其強度、應經申請同意使用項目、條件、程序、免經申請同意使用項目、禁止或限制使用及其他應遵行之土地使用管制事項之規則，由中央主管機關定之。……」爰按國土計畫法第 21 條國土功能分區及其分類之土地使用原則、全國國土計畫第九章土地使用指導事項之指導，訂定「國土計畫土地使用管制規則」。\n\n` +
                  `（二）依國土計畫使用管制規則第 3 條第 1 項及第 4 條規定整理。\n\n` +
                  `依前開使用容許表所載，住宅之使用細目「民宿」，於依第三條第一項規定註記甲、乙、丙種建築用地均可免經申請同意使用；旅館之使用細目「國際觀光旅館」、「一般觀光旅館」、「一般旅館」，於依第三條第一項規定註記丙種建築用地、遊憩用地均可免經申請同意使用，註記丁種建築用地則得在國 1、國 2、農 1、農 2、農 3 經申請同意使用，農 4、城 2-1、城 3 則均得經申請同意使用。`,
                '六、未來國土計畫管制'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製國土計畫</span>
          </button>
        </div>

        {/* 法規依據 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
            <span className="font-bold text-[#1F3864]">（一）國土計畫法第 22 條第 1 項及第 23 條第 2 項</span>
            <p className="text-[#333333] pl-2 border-l-2 border-[#1F3864]/40 leading-relaxed">
              直轄市、縣（市）國土計畫公告實施後，應由各該主管機關製作國土功能分區圖及編定適當使用地實施管制；中央主管機關訂定土地使用管制規則。
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
            <span className="font-bold text-[#8C5A4B]">（二）管制規則草案第 3 條第 1 項及第 4 條</span>
            <p className="text-[#333333] pl-2 border-l-2 border-[#8C5A4B]/40 leading-relaxed">
              功能分區分類土地按原土地登記簿使用地類別註記使用；容許使用項目依附表一（國保、農發、城鄉）及附表二（海洋）規定辦理。
            </p>
          </div>
        </div>

        {/* 國土容許使用情形表 */}
        <div className="space-y-3 pt-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-2">
              <Table className="w-4 h-4 text-[#8C5A4B]" />
              <span>國土保育地區、農業發展地區、城鄉發展地區容許使用情形表</span>
            </h3>
            <span className="text-xs text-[#7D7065]">
              👉 支援左右滑動檢視完整功能分區代碼與條件
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] shadow-2xs bg-white">
            <table className="w-full text-center border-collapse text-xs">
              <thead>
                <tr className="bg-[#1F3864] text-white">
                  <th className="py-2.5 px-2 font-bold border-r border-white/20 whitespace-nowrap text-left">群組</th>
                  <th className="py-2.5 px-2 font-bold border-r border-white/20 whitespace-nowrap text-left">使用項目</th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[130px] text-left">使用細目</th>
                  <th className="py-2.5 px-1.5 font-bold border-r border-white/20">國1</th>
                  <th className="py-2.5 px-1.5 font-bold border-r border-white/20">國2</th>
                  <th className="py-2.5 px-1.5 font-bold border-r border-white/20">農1</th>
                  <th className="py-2.5 px-1.5 font-bold border-r border-white/20">農2</th>
                  <th className="py-2.5 px-1.5 font-bold border-r border-white/20">農3</th>
                  <th className="py-2.5 px-1.5 font-bold border-r border-white/20">農4(非原)</th>
                  <th className="py-2.5 px-1.5 font-bold border-r border-white/20">農4(原)</th>
                  <th className="py-2.5 px-1.5 font-bold border-r border-white/20">城2-1</th>
                  <th className="py-2.5 px-1.5 font-bold border-r border-white/20">城3</th>
                  <th className="py-2.5 px-3 font-bold text-left min-w-[220px]">備註條件</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C7]">
                {/* 住商 - 住宅 - 民宿 */}
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2.5 px-2 text-left font-bold text-[#1F3864] bg-[#FAF7F2]/60 border-r border-[#DDD5C7]">住商</td>
                  <td className="py-2.5 px-2 text-left text-[#333333] border-r border-[#DDD5C7]">住宅</td>
                  <td className="py-2.5 px-3 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7]">民宿</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2.5 px-3 text-left text-[11px] leading-tight space-y-1 align-top bg-[#FAF7F2]/40">
                    <p>❶: 限於依第三條第一項規定註記之<strong>甲種建築用地、乙種建築用地、丙種建築用地</strong>。</p>
                    <p className="text-[#8C5A4B]">②: 限於依第三條第一項規定註記之<strong>丁種建築用地</strong>。</p>
                  </td>
                </tr>

                {/* 觀光 - 旅館 */}
                <tr className="hover:bg-[#FAF7F2]">
                  <td rowSpan={3} className="py-2.5 px-2 text-left font-bold text-[#8C5A4B] bg-[#FAF7F2]/60 border-r border-[#DDD5C7] align-top">觀光</td>
                  <td rowSpan={3} className="py-2.5 px-2 text-left font-bold text-[#8C5A4B] border-r border-[#DDD5C7] align-top">旅館</td>
                  <td className="py-2.5 px-3 text-left font-semibold text-[#1F3864] border-r border-[#DDD5C7]">國際觀光旅館</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td rowSpan={3} className="py-2.5 px-3 text-left text-[11px] leading-tight space-y-1 align-top bg-[#FAF7F2]/40">
                    <p>❶: 限於依第三條第一項規定註記之<strong>丙種建築用地、遊憩用地</strong>。</p>
                    <p className="text-[#8C5A4B]">②: 限於依第三條第一項規定註記之<strong>丁種建築用地</strong>。</p>
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2.5 px-3 text-left font-semibold text-[#1F3864] border-r border-[#DDD5C7]">一般觀光旅館</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2.5 px-3 text-left font-semibold text-[#1F3864] border-r border-[#DDD5C7]">一般旅館</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">②</span></td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] text-xs space-y-1.5">
            <span className="font-bold text-[#1F3864]">符號註記說明：</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[#4A3E39]">
              <p><strong>1. 「●」/ ❶</strong> 代表免經申請同意使用；❶ 代表符合備註欄位之 ❶ 條件者，得免經申請同意使用，未符合者禁止使用。</p>
              <p><strong>2. 「○」/ ②</strong> 代表應經申請同意使用；② 代表符合備註欄位之 ② 條件者，得應經申請同意使用，未符合者禁止使用。</p>
              <p><strong>3. 「X」</strong> 代表禁止使用。</p>
            </div>
          </div>
        </div>

        {/* 依前開使用容許表所載深入解析 */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2 text-xs sm:text-sm">
          <h4 className="font-bold text-base text-[#1F3864] flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#1F3864]" />
            <span>依前開使用容許表所載：</span>
          </h4>
          <p className="text-[#333333] pl-5 leading-relaxed">
            住宅之使用細目「<strong>民宿</strong>」，於依第三條第一項規定註記<strong>甲、乙、丙種建築用地均可免經申請同意使用</strong>；旅館之使用細目「<strong>國際觀光旅館</strong>」、「<strong>一般觀光旅館</strong>」、「<strong>一般旅館</strong>」，於依第三條第一項規定註記<strong>丙種建築用地、遊憩用地均可免經申請同意使用</strong>，註記<strong>丁種建築用地</strong>則得在<strong>國 1、國 2、農 1、農 2、農 3 經申請同意使用</strong>，<strong>農 4、城 2-1、城 3 則均得經申請同意使用</strong>。
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 五、民宿與旅館業之相關法令清單 */}
      {/* ================================================================= */}
      <section id="hotel-sec-5" className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              五
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              五、民宿與旅館業之相關法令
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `【民宿與旅館業之相關法令】\n一、民宿管理辦法\n二、發展觀光條例\n三、旅館業管理規則\n四、觀光旅館業管理規則\n五、區域計畫法\n六、非都市土地使用管制規則\n七、非都市土地容許使用執行要點\n八、非都市土地變更編定執行要點\n九、申請開發觀光旅館興辦事業計畫審查作業要點\n十、非都市土地使用分區及使用地變更申請案件委辦直轄市縣（市）政府審查作業要點\n十一、非都市土地開發審議作業規範\n十二、新北市政府辦理都市計畫旅館區設置一般旅館作業要點\n十三、各縣市非都市土地申請變更編定之興辦事業計畫審查作業要點\n十四、休閒農業輔導管理辦法`,
                '五、相關法令清單'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製法令清單</span>
          </button>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#333333]">
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]"><strong>一、</strong> 民宿管理辦法</div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]"><strong>二、</strong> 發展觀光條例</div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]"><strong>三、</strong> 旅館業管理規則</div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]"><strong>四、</strong> 觀光旅館業管理規則</div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]"><strong>五、</strong> 區域計畫法</div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]"><strong>六、</strong> 非都市土地使用管制規則</div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]"><strong>七、</strong> 非都市土地容許使用執行要點</div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]"><strong>八、</strong> 非都市土地變更編定執行要點</div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]"><strong>九、</strong> 申請開發觀光旅館興辦事業計畫審查作業要點</div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]"><strong>十、</strong> 非都市土地使用分區及使用地變更申請案件委辦直轄市縣（市）政府審查作業要點</div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]"><strong>十一、</strong> 非都市土地開發審議作業規範</div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]"><strong>十二、</strong> 新北市政府辦理都市計畫旅館區設置一般旅館作業要點</div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]"><strong>十三、</strong> 各縣市非都市土地申請變更編定之興辦事業計畫審查作業要點</div>
            <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]"><strong>十四、</strong> 休閒農業輔導管理辦法</div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 六、附錄審查圖表與作業程序 */}
      {/* ================================================================= */}
      <section id="hotel-sec-6" className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              六
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              六、附錄圖表與審查作業程序
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `附錄審查作業程序：\n` +
                  `1. 管制規則第 27 條附表三 使用分區內各種使用地變更編定原則表（遊憩用地：除特農區、森林區、河川區不允許變更外，其餘分區得申請變更；特定目的事業用地：除森林區外其餘分區均允許）。\n` +
                  `2. 附錄三之二 山坡地變更編定案件審查作業程序（申請人檢具文件五份 ➜ 直轄市/縣市政府查核 ➜ 會同相關機關審查/地政初審/專案小組審查 ➜ 通知檢附水保完工證明 ➜ 核准變更編定並通知地政事務所登簿）。\n` +
                  `3. 附件四 申請開發觀光旅館興辦事業計畫案件審查作業程序圖（程序審查 30 日內 ➜ 實質審查 30 日內成立專案小組 ➜ 15 日內核發推薦函 ➜ 3 個月內向土地主管機關申請開發許可並修正書件 ➜ 15 日內核發定稿本 ➜ 申請觀光旅館籌設）。`,
                '六、審查作業程序圖表'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製程序摘要</span>
          </button>
        </div>

        <div className="space-y-4">
          {/* 1. 管制規則第 27 條附表三原則說明 */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2 text-xs sm:text-sm">
            <h4 className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs flex items-center justify-center font-bold">1</span>
              <span>第二十七條附表三 使用分區內各種使用地變更編定原則表（遊憩與特目）</span>
            </h4>
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1.5 text-[#333333]">
              <p>
                <strong>遊憩用地變更原則：</strong>特定農業區（╳）、一般農業區（＋）、鄉村區（＋）、工業區（＋）、森林區（╳）、山坡地保育區（＋）、風景區（＋）、河川區（╳）、特定專用區（＋）。<span className="text-rose-800 font-semibold">（特農、森林、河川區不允許變更為遊憩用地）</span>
              </p>
              <p>
                <strong>特定目的事業用地變更原則：</strong>特定農業區（＋）、一般農業區（＋）、鄉村區（＋）、工業區（＋）、森林區（╳）、山坡地保育區（＋）、風景區（＋）、河川區（＋）、特定專用區（＋）。<span className="text-rose-800 font-semibold">（除森林區外，其餘分區均允許申請變更為特定目的事業用地）</span>
              </p>
            </div>
          </div>

          {/* 2. 附錄三之二 山坡地變更編定案件審查作業程序 */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3 text-xs sm:text-sm">
            <h4 className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs flex items-center justify-center font-bold">2</span>
              <span>附錄三之二 山坡地變更編定案件審查作業程序</span>
            </h4>
            <div className="space-y-2 text-[#333333]">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
                <span className="font-bold text-[#1F3864] shrink-0">步驟一：</span>
                <span>申請人依管制規則第 28 條及本要點第 2 點第 2 項規定檢具相關書圖文件各五份申請變更編定。</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
                <span className="font-bold text-[#1F3864] shrink-0">步驟二：</span>
                <span>直轄市或縣（市）政府受理變更編定申請案件及查核有關書件是否齊全。</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
                <span className="font-bold text-[#1F3864] shrink-0">步驟三：</span>
                <span>會同相關機關（單位）初審通過後，依本規則第 49 條之一規定提專案小組審查。（不符規定者駁回退件）</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
                <span className="font-bold text-[#1F3864] shrink-0">步驟四：</span>
                <span>符合規定者，通知申請人依管制規則第 48 條規定檢附<strong>水土保持完工證明書</strong>憑辦。</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7]">
                <span className="font-bold text-[#1F3864] shrink-0">步驟五：</span>
                <span>需提撥維護管理保證金者完成繳納；核准變更編定並通知地政事務所辦理異動登記。</span>
              </div>
            </div>
            <div className="text-[11px] text-[#7D7065] pl-2 border-l-2 border-[#DDD5C7]">
              附註：一、免提專案小組審查之變更編定案件，詳見本規則第四十九條之一。二、免檢附水土保持完工證明書之變更編定案件，詳見本規則第四十八條。
            </div>
          </div>

          {/* 3. 附件四 申請開發觀光旅館興辦事業計畫案件審查作業程序圖 */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3 text-xs sm:text-sm">
            <h4 className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs flex items-center justify-center font-bold">3</span>
              <span>附件四 申請開發觀光旅館興辦事業計畫案件審查作業程序圖</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[#333333]">
              <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
                <span className="font-bold text-[#1F3864]">階段一：程序審查（30 日內）</span>
                <p className="text-xs">收件後 30 日內查核申請書、相關證明文件及興辦事業計畫等書件，作成書面答覆；不符者不予受理。</p>
              </div>
              <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
                <span className="font-bold text-[#1F3864]">階段二：實質審查（30 日內）</span>
                <p className="text-xs">成立審查小組、就經營管理及財務計畫委聘專家委員審查、彙整意見召開會議，做出核准決議。</p>
              </div>
              <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
                <span className="font-bold text-[#1F3864]">階段三：推薦函與開發許可</span>
                <p className="text-xs">15 日內核發推薦函。申請人於 3 個月內向土地主管機關申請非都市土地開發許可或都市計畫變更；核准後 15 日內核發定稿本，憑以申請觀光旅館籌設。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
