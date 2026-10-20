import React from 'react';
import {
  FileText,
  Copy,
  Table,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Building2,
  Truck,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
  MapPin,
  Layers,
  Calendar,
  BookOpen,
  Info
} from 'lucide-react';

interface PowerMachineryParkingReportProps {
  onCopy?: (text: string, label: string) => void;
}

export const PowerMachineryParkingReport: React.FC<PowerMachineryParkingReportProps> = ({ onCopy }) => {
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
          專題報告第 4 案・全文收錄無摘要
        </span>
        <h1 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864] pt-1">
          「動力機具停放場所涉容許及用地變更」疑義案例分享
        </h1>
        <p className="text-xs sm:text-sm text-[#7D7065]">
          歷次跨部會協商、交通部函釋認定、各種建築用地容許、變更編定疑義、新北市府指定主政與未來國土計畫管制研析
        </p>
      </div>

      {/* 章節快速導覽錨點列 */}
      <div className="p-3 bg-white rounded-xl border border-[#DDD5C7] flex items-center gap-2 overflow-x-auto text-xs font-bold shadow-2xs">
        <span className="text-[#8C5A4B] shrink-0 font-bold">章節快速跳轉：</span>
        <a href="#power-sec-1" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          一、歷程與會議
        </a>
        <a href="#power-sec-2" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          二、法令依據與函釋
        </a>
        <a href="#power-sec-3" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          三、遭遇問題與建議
        </a>
        <a href="#power-sec-4" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          四、未來國土計畫上路
        </a>
        <a href="#power-sec-5" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          五、結語與長遠解方
        </a>
        <a href="#power-sec-6" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          六、函釋公文附錄清單
        </a>
      </div>

      {/* ================================================================= */}
      {/* 一、歷程 */}
      {/* ================================================================= */}
      <section id="power-sec-1" className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              一
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              一、歷程
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `一、歷程：現行「動力機具」多違規使用農業用地放置機械設備，經相關建築機械業者提出訴求，前經行政院邀集相關部會研商、內政部跨部會協商獲致結果，同時經交通部認定「得於交通用地之其他交通設施」容許使用之類型，暫緩解業者迫在眉睫之需，所涉歷次會議內容，重點摘要如下：\n` +
                  `【112 年 9 月 6 日｜行政院(政務委員)】討論：研商建築機械業者之目的事業主管機關歸屬相關事宜。決議：1. 使用類型包括營建工區附近之儲放場，機械進口後之倉儲、機具配件展示、保養、組裝或測試等用地。 2. 建請目的事業主管機關釐清(各類使用性質及所需空間)納入輔導業者之類型。 3. 清查農地違規作建築機械倉儲之量體及用地需求。\n` +
                  `【113 年 12 月 26 日｜立法委員(吳琪銘國會辦公室)】討論：為釐清建築機械設備放置場地之需求與法令限制一案。決議：請交通部於 114 年 2 月 17 日前：1. 就現有法令規定研議動力機械停放場所是否係屬「其他交通設施」範疇。 2. 並調查現有其他交通設施之種類。\n` +
                  `【114 年 2 月 12 日｜行政院(秘書長)】討論：特殊機械、重機械停放場地及規範問題。決議：賡續推動後續事項。\n` +
                  `【114 年 5 月 15 日｜內政部(國土署)】討論：停放場所涉及相關議題。決議：1. 會議確認動力機械停放場所：(1) 於都市計畫朝專用區方式設置辦理，循都市計畫通盤檢討變更程序，檢討變更適當專用區以解決業者長期複合式經營之用地需求。(2) 於非都市土地，以公路監理機關申請登記領用牌證之動力機械，得於交通用地之其他交通設施容許使用，餘得依區域計畫法相關規定申請變更為適當分區或適當使用地類別。 2. 後續請交通部通函告知直轄市政府，以利地方政府目的事業主管機關受理民眾申請使用。`,
                '一、歷程與會議摘要'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製歷程</span>
          </button>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs">
          <p className="text-[#333333] leading-relaxed text-sm sm:text-base">
            現行「<strong>動力機具</strong>」多違規使用農業用地放置機械設備，經相關建築機械業者提出訴求，前經行政院邀集相關部會研商、內政部跨部會協商獲致結果，同時經交通部認定「<strong>得於交通用地之其他交通設施</strong>」容許使用之類型，暫緩解業者迫在眉睫之需，所涉歷次會議內容，重點摘要如下：
          </p>
        </div>

        {/* 歷次會議表格 */}
        <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] shadow-2xs bg-white">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#1F3864] text-white">
                <th className="py-3 px-3 font-bold border-r border-white/20 whitespace-nowrap w-24 sm:w-28 text-center">
                  時間
                </th>
                <th className="py-3 px-3 font-bold border-r border-white/20 whitespace-nowrap w-28 sm:w-32">
                  單位
                </th>
                <th className="py-3 px-3 font-bold border-r border-white/20 min-w-[160px]">
                  討論事項
                </th>
                <th className="py-3 px-4 font-bold min-w-[300px]">
                  決議（結論）
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DDD5C7]">
              {/* 112年9月6日 */}
              <tr className="hover:bg-[#FAF7F2] transition-colors">
                <td className="py-3 px-3 text-center font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] whitespace-nowrap align-top">
                  112 年<br />9 月 6 日
                </td>
                <td className="py-3 px-3 font-bold text-[#333333] border-r border-[#DDD5C7] align-top">
                  行政院<br />
                  <span className="text-xs font-normal text-[#7D7065]">（政務委員）</span>
                </td>
                <td className="py-3 px-3 text-[#333333] border-r border-[#DDD5C7] align-top">
                  研商建築機械業者之目的事業主管機關歸屬相關事宜
                </td>
                <td className="py-3 px-4 text-[#333333] space-y-1 align-top">
                  <p><strong>1.</strong> 使用類型包括營建工區附近之儲放場，機械進口後之倉儲、機具配件展示、保養、組裝或測試等用地。</p>
                  <p><strong>2.</strong> 建請目的事業主管機關釐清（各類使用性質及所需空間）納入輔導業者之類型。</p>
                  <p><strong>3.</strong> 清查農地違規作建築機械倉儲之量體及用地需求。</p>
                </td>
              </tr>

              {/* 113年12月26日 */}
              <tr className="hover:bg-[#FAF7F2] transition-colors">
                <td className="py-3 px-3 text-center font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] whitespace-nowrap align-top">
                  113 年<br />12 月 26 日
                </td>
                <td className="py-3 px-3 font-bold text-[#333333] border-r border-[#DDD5C7] align-top">
                  立法委員<br />
                  <span className="text-xs font-normal text-[#7D7065]">（吳琪銘國會辦公室）</span>
                </td>
                <td className="py-3 px-3 text-[#333333] border-r border-[#DDD5C7] align-top">
                  為釐清建築機械設備放置場地之需求與法令限制一案
                </td>
                <td className="py-3 px-4 text-[#333333] space-y-1 align-top">
                  <p className="font-semibold text-[#1F3864]">請交通部於 114 年 2 月 17 日前：</p>
                  <p><strong>1.</strong> 就現有法令規定研議動力機械停放場所是否係屬「其他交通設施」範疇。</p>
                  <p><strong>2.</strong> 並調查現有其他交通設施之種類。</p>
                </td>
              </tr>

              {/* 114年2月12日 */}
              <tr className="hover:bg-[#FAF7F2] transition-colors">
                <td className="py-3 px-3 text-center font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] whitespace-nowrap align-top">
                  114 年<br />2 月 12 日
                </td>
                <td className="py-3 px-3 font-bold text-[#333333] border-r border-[#DDD5C7] align-top">
                  行政院<br />
                  <span className="text-xs font-normal text-[#7D7065]">（秘書長）</span>
                </td>
                <td className="py-3 px-3 text-[#333333] border-r border-[#DDD5C7] align-top">
                  特殊機械、重機械停放場地及規範問題
                </td>
                <td className="py-3 px-4 font-semibold text-[#1F3864] align-top">
                  賡續推動後續事項。
                </td>
              </tr>

              {/* 114年5月15日 */}
              <tr className="hover:bg-[#FAF7F2] transition-colors">
                <td className="py-3 px-3 text-center font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] whitespace-nowrap align-top">
                  114 年<br />5 月 15 日
                </td>
                <td className="py-3 px-3 font-bold text-[#1F3864] border-r border-[#DDD5C7] align-top">
                  內政部<br />
                  <span className="text-xs font-normal text-[#7D7065]">（國土署）</span>
                </td>
                <td className="py-3 px-3 font-bold text-[#1F3864] border-r border-[#DDD5C7] align-top">
                  停放場所涉及相關議題
                </td>
                <td className="py-3 px-4 text-[#333333] space-y-2 align-top">
                  <div className="space-y-1">
                    <p className="font-bold text-[#1F3864]">1. 會議確認動力機械停放場所：</p>
                    <p className="pl-3">
                      <strong>(1) 都市計畫地區：</strong>朝<strong>專用區</strong>方式設置辦理，循都市計畫通盤檢討變更程序，檢討變更適當專用區以解決業者長期複合式經營之用地需求。
                    </p>
                    <p className="pl-3">
                      <strong>(2) 非都市土地：</strong>以公路監理機關申請登記領用牌證之動力機械，得於<strong>交通用地之其他交通設施容許使用</strong>，餘得依區域計畫法相關規定申請變更為適當分區或適當使用地類別。
                    </p>
                  </div>
                  <p className="border-t border-[#DDD5C7] pt-1 text-xs text-[#7D7065]">
                    <strong>2.</strong> 後續請交通部通函告知直轄市政府，以利地方政府目的事業主管機關受理民眾申請使用。
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 二、法令依據、函釋（交通部認定） */}
      {/* ================================================================= */}
      <section id="power-sec-2" className="space-y-5 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              二
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              二、法令依據、函釋（交通部認定）
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `二、法令依據、函釋（交通部認定）：\n` +
                  `1. 依道路交通安全規則第83條規定：「(第1項)非屬汽車範圍之動力機械，指下列各款之一之機械：一、不經曳引而能以原動機行駛之工程重機械。二、屬裝配起重機械專供起重用途且無載貨容量之起重機車或其他自力推動機械。三、配衡型堆高機。四、其他特定用途設計製造，不經曳引而能以原動機行駛之機械…。(第2項)前項第二款及第三款裝有輪式輪胎之動力機械應先向公路監理機關申請登記領用牌證，並比照第八十條之規定申請核發臨時通行證後，方得憑證行駛道路…。」\n` +
                  `＊依第83條第1項定義，動力機械泛指工程重機械、起重機械、堆高機、其他特定用途。（廣義）\n` +
                  `＊惟經交通部表示該部僅認定「輪式輪胎」且「領用牌證」之動力機械(即「可合法上路行駛」者)，與業者之期待尚有落差：同意以公路監理機關核發牌證之動力機械，得適用於非都市土地使用管制規則之交通用地-其他交通設施之範疇。（限縮）`,
                '二、法令依據與函釋'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製法令函釋</span>
          </button>
        </div>

        {/* 1. 道路交通安全規則第 83 條規定 */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <h3 className="font-bold text-base text-[#1F3864]">
            1. 依道路交通安全規則第 83 條規定：
          </h3>
          <blockquote className="text-[#333333] pl-3 border-l-2 border-[#1F3864] text-xs sm:text-sm leading-relaxed bg-[#FAF7F2]/40 p-2.5 rounded-r-lg space-y-1.5">
            <p>
              「（第1項）非屬汽車範圍之動力機械，指下列各款之一之機械：一、不經曳引而能以原動機行駛之工程重機械。二、屬裝配起重機械專供起重用途且無載貨容量之起重機車或其他自力推動機械。三、配衡型堆高機。四、其他特定用途設計製造，不經曳引而能以原動機行駛之機械……。
            </p>
            <p>
              （第2項）前項第二款及第三款裝有輪式輪胎之動力機械應先向公路監理機關申請登記領用牌證，並比照第八十條之規定申請核發臨時通行證後，方得憑證行駛道路……。」
            </p>
          </blockquote>

          <div className="space-y-2 pt-1 text-xs sm:text-sm">
            <div className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-200 text-[#1F3864]">
              <strong>＊依第 83 條第 1 項定義：</strong>動力機械泛指工程重機械、起重機械、堆高機、其他特定用途。（<strong>廣義</strong>）
            </div>
            <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200 text-[#8C5A4B]">
              <strong>＊惟經交通部表示：</strong>該部僅認定「<strong>輪式輪胎</strong>」且「<strong>領用牌證</strong>」之動力機械（即「<strong>可合法上路行駛</strong>」者），與業者之期待尚有落差：同意以公路監理機關核發牌證之動力機械，得適用於非都市土地使用管制規則之<strong>交通用地－其他交通設施</strong>之範疇。（<strong>限縮</strong>）
            </div>
          </div>
        </div>

        {/* 差異分析表 */}
        <div className="space-y-3 pt-2">
          <h3 className="font-bold text-base text-[#1F3864] flex items-center gap-2">
            <Table className="w-4 h-4 text-[#8C5A4B]" />
            <span>＊動力機械認定範疇差異分析（交通部 vs 業者）</span>
          </h3>

          <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] shadow-2xs bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#1F3864] text-white">
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 whitespace-nowrap w-36">
                    非屬汽車定義
                  </th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[200px]">
                    交通部（認定範疇）
                  </th>
                  <th className="py-2.5 px-4 font-bold min-w-[260px]">
                    業者（訴求與期待）
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C7]">
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 text-[#4A3E39] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top text-xs space-y-1">
                    <p className="font-bold text-[#1F3864]">依道路交通安全規則第 2 條：</p>
                    <p>汽車：指在道路上不依軌道或電力架線而以原動機行駛之車輛（包括機車）。</p>
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top space-y-2">
                    <div className="space-y-1">
                      <p className="font-bold text-[#1F3864]">1. 輪式輪胎</p>
                      <p className="font-bold text-[#1F3864]">2. 已領用牌證</p>
                    </div>
                    <div className="pt-1 border-t border-[#DDD5C7] text-xs text-[#333333]">
                      <span className="font-semibold text-[#8C5A4B]">（機械種類名稱）</span>
                      <ul className="list-disc list-inside mt-0.5 space-y-0.5">
                        <li>輪型起重機</li>
                        <li>輪式起重機</li>
                        <li>輪胎式起重機</li>
                        <li>卡車起重機</li>
                        <li>輪型式吊車</li>
                      </ul>
                    </div>
                  </td>
                  <td className="py-3 px-4 align-top space-y-2 text-xs sm:text-sm text-[#333333]">
                    <p><strong>1.</strong> 建議不僅侷限於道路交通安全規則內之機械定義範疇。</p>
                    <p><strong>2.</strong> 希冀營建動力機具亦可納入。</p>
                    <p><strong>3.</strong> 建議將履帶式機械及現行使用之機械納入動力機械範圍。</p>
                    <div className="p-2 rounded bg-[#FAF7F2] border border-[#DDD5C7] text-xs">
                      <strong className="text-[#8C5A4B]">（訴求）</strong> 使用類型包括營建工區附近之儲放場，機械進口後之倉儲、機具配件展示、保養、組裝或測試等用地。
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. 容許使用：交通用地－其他交通設施 */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#1F3864] text-white">2</span>
            <h3 className="font-bold text-base text-[#1F3864]">
              容許使用：（非都市土地之「交通用地」、許可使用細目：其他交通設施）
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            {/* (1) 函釋 1140017490 */}
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <strong className="text-[#1F3864]">(1) 交通部 114 年 7 月 17 日交路字第 1140017490 號函：</strong>
              <p className="text-[#333333] pl-2 leading-relaxed">
                有關依道路交通安全規則第 83 條規定，向公路監理機關申請登記領用牌證之動力機械，得於交通用地之其他交通設施作<strong>動力機械停放場地</strong>容許使用。
              </p>
            </div>

            {/* (2) 函釋 11400174901 */}
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1.5">
              <strong className="text-[#1F3864]">(2) 交通部 114 年 7 月 17 日交路字第 11400174901 號函：</strong>
              <div className="pl-2 space-y-1 text-[#333333]">
                <p>
                  <strong>I.</strong> 至於非屬前述動力機械之其他動力機械，仍請貴部依行政院 114 年 2 月 12 日研商「特殊機械、重機械停放場地及規範問題」會議結論，適時續邀集相關部會研商辦理。（<span className="text-rose-700 font-bold">註：履帶式機具非屬交通部認定動力機械範疇</span>）
                </p>
                <p>
                  <strong>II.</strong> 目前已領用牌證之動力機械（機械種類名稱）計有：<strong>輪型起重機、輪式起重機、輪胎式起重機、卡車起重機、輪型式吊車</strong>。
                </p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-white border border-[#DDD5C7] text-xs text-[#5B584E] space-y-1">
              <p>
                按「非都市土地使用管制規則」第 6 條規定：非都市土地經劃定使用分區並編定使用地類別，應依其容許使用之項目及許可使用細目使用。
              </p>
              <p className="font-semibold text-[#1F3864]">
                交通用地容許項目（二）交通設施（特定農業區除外）第 16 點「其他交通設施」附帶條件：限於經區域計畫擬定機關核准開發計畫所設置。
              </p>
            </div>

            {/* 停車場排除提示 */}
            <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-200 text-rose-900 text-xs">
              <strong>＊排除停車場細目：</strong>有關交通用地之容許使用項目「交通設施」，許可使用細目「11. 停車場」，應專指<strong>汽車停車場</strong>（交通部頒停車場法、利用空地申請設置臨時路外停車場辦法），<strong>非本次動力機械容許使用範疇</strong>。
            </div>
          </div>
        </div>

        {/* 3. 容許使用：(其他使用地類別) */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#1F3864] text-white">3</span>
            <h3 className="font-bold text-base text-[#1F3864]">
              容許使用：（其他使用地類別）
            </h3>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm text-[#333333]">
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <strong className="text-[#1F3864]">(1) 甲、乙、丙、丁種建築用地：</strong>
              <p className="leading-relaxed">
                查<strong>甲種、乙種、丙種建築用地</strong>之容許使用項目「日用品零售及服務設施」，許可使用細目有「零售設施」（業者進口機械販售與機具配件展售）、「倉儲設施」（機械進口後之倉儲）與「營業及辦公處所」等；<strong>丁種建築用地</strong>之容許使用項目「工業設施」，其許可使用細目有「附屬辦公室」、「附屬倉庫」、「(運輸)倉儲設施」與「附屬停車場等必要設施」等，<strong>本案（廣義之動力機械）於前述各種建築用地應無違反非都市土地使用管制</strong>。
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <strong className="text-[#1F3864]">(2) 特定目的事業用地：</strong>
              <p className="leading-relaxed">
                按特定目的事業計畫使用，倘經目的事業主管機關認定符合原核定計畫，亦無違反使用。
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <strong className="text-[#1F3864]">(3) 遊憩用地：</strong>
              <p className="leading-relaxed">
                遊憩用地之容許使用項目「交通設施」其許可使用細目亦有「其他交通設施」，惟依交通部 114 年 7 月 17 日函釋僅限定於交通用地之其他交通設施，後續仍有請示研議空間。
              </p>
            </div>
          </div>
        </div>

        {/* 4. 變更編定：(各種建築用地、交通用地以外) */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#1F3864] text-white">4</span>
            <h3 className="font-bold text-base text-[#1F3864]">
              變更編定：（各種建築用地、交通用地以外）
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#333333]">
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <strong className="text-[#1F3864]">(1) 法令依據：</strong>
              <p className="leading-relaxed">
                「非都市土地使用管制規則」第 28 條（興辦事業計畫核准文件、變更編定申請書、變更編定同意書、免受 10 公頃限制文件等）、第 30 條（興辦事業計畫）、第 48 條（山坡地－水土保持計畫）、第 49 條之 1（專案小組審查及不得規劃作建築使用情形）、第 52 條之 1（山坡地範圍內面積不得少於十公頃）等。
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
              <strong className="text-[#8C5A4B]">(2) 本案變更編定尚有下列疑義：</strong>
              <div className="pl-2 space-y-2 text-[#333333]">
                <p>
                  <strong>a. 目的事業主管機關爭議：</strong>中央為「交通部」，惟於部分直轄市、(縣)市政府尚有爭議 ➜ <strong className="text-[#1F3864]">本市經府一層指定為「交通局」</strong>。
                </p>
                <p>
                  <strong>b. 興辦事業計畫之審查依據：</strong>係依循一般路外停車場之審查辦法（非都市土地申請興闢路外公共停車場免受山坡地開發建築面積不得少於十公頃限制審議規範），或由中央（交通部）另訂之 ➜ 正由交通部研擬中。
                </p>
                <p>
                  <strong>c. 變更編定之用地類別疑義：</strong>係變更為「<strong>交通用地</strong>」（目前僅限於已領牌之輪式動力機械）或「<strong>特定目的事業用地</strong>」（是否適用廣義之動力機械，未見興辦事業計畫之審查依據尚無從判定），如為後者又係「非都市土地變更編定執行要點」第 8 點之何款？（應於條文中明訂）。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 三、建議 */}
      {/* ================================================================= */}
      <section id="power-sec-3" className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              三
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              三、建議
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `三、建議：\n` +
                  `1. 【中央】交通部目前僅部分同意容許使用（如.挖土機、鏟土機需先就其對交通安全所造成影響，再行評估是否得適用於非都市土地使用管制規則之交通用地-其他交通設施之範疇），至於非屬前述動力機械之其他動力機械，仍建由中央續邀集相關部會研商，採全面放寬適用交通用地之容許使用項目及加速訂定其興辦事業計畫審查依據，以符業者之需求及後續輔導合法化，期能使其合於區域計畫（都市土地、非都市土地）及日後國土計畫之使用管制。\n` +
                  `2. 【地方】部分直轄市、縣(市)政府尚有分工(目的事業主管機關)及審查依據之疑義：\n` +
                  `(1) 工務單位表示僅管轄營建工區內之動力機械，其餘(區外、路上行駛)非其管轄範疇；交通單位表示僅受理輪式動力機械（依循中央-交通部認定，未含履帶式等機）；另土管機關（地政、城鄉或都計單位）僅針對該停放場所之容許使用或使用地變更協助審查，惟後續計畫管制、停放管理作業等事項仍係目的事業主管機關權責→本府已指定為「交通局」。\n` +
                  `(2) 惟案雖經市府一層裁示（動力機械違規停放等尚屬交通業務，建請由交通局主政，工務局、地政局、城鄉局等機關協辦），後續涉及目的事業主管機關權責（如：容許使用認定、興辦事業計畫、輔導合法化、法令適用等）尚有諸多疑義。\n` +
                  `3. 另中央歷次會議針對其興辦事業計畫細節及變更編定程序並無過多討論及明文（如：興辦事業計畫之審查依據、是否變更編定為特定專用區「特定目的事業用地」），將俟中央（交通部）訂頒相關審議規範後，配合辦理與執行，實執行若有疑義或窒礙難行之處，另案請示中央主管（目的事業主管、土管）機關。`,
                '三、建議'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製建議</span>
          </button>
        </div>

        <div className="space-y-3.5 text-xs sm:text-sm">
          {/* 1. 中央建議 */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
            <h3 className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#1F3864] text-white text-xs font-bold">1</span>
              <span>【中央】建請全面放寬適用交通用地並加速訂定興辦審查依據</span>
            </h3>
            <p className="text-[#333333] pl-6 leading-relaxed">
              交通部目前僅部分同意容許使用（如：挖土機、鏟土機需先就其對交通安全所造成影響，再行評估是否得適用於非都市土地使用管制規則之交通用地－其他交通設施之範疇），至於非屬前述動力機械之其他動力機械，<strong>仍建由中央續邀集相關部會研商，採全面放寬適用交通用地之容許使用項目及加速訂定其興辦事業計畫審查依據</strong>，以符業者之需求及後續輔導合法化，期能使其合於區域計畫（都市土地、非都市土地）及日後國土計畫之使用管制。
            </p>
          </div>

          {/* 2. 地方分工與主管權責疑義 */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2.5">
            <h3 className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#1F3864] text-white text-xs font-bold">2</span>
              <span>【地方】直轄市、縣(市)政府分工與審查依據疑義（新北市府一層裁示）</span>
            </h3>
            <div className="pl-6 space-y-2 text-[#333333]">
              <p>
                <strong>(1) 機關管轄界限：</strong>工務單位表示僅管轄營建工區內之動力機械，其餘（區外、路上行駛）非其管轄範疇；交通單位表示僅受理輪式動力機械（依循中央－交通部認定，未含履帶式等機）；另土管機關（地政、城鄉或都計單位）僅針對該停放場所之容許使用或使用地變更協助審查，惟後續計畫管制、停放管理作業等事項仍係目的事業主管機關權責 ➜ <strong className="text-[#1F3864]">本府已指定為「交通局」</strong>。
              </p>
              <p>
                <strong>(2) 一層裁示與後續疑義：</strong>惟案雖經<strong>市府一層裁示（動力機械違規停放等尚屬交通業務，建請由交通局主政，工務局、地政局、城鄉局等機關協辦）</strong>，後續涉及目的事業主管機關權責（如：容許使用認定、興辦事業計畫、輔導合法化、法令適用等）尚有諸多疑義。
              </p>
            </div>
          </div>

          {/* 3. 興辦審議規範俟中央訂頒 */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
            <h3 className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#8C5A4B] text-white text-xs font-bold">3</span>
              <span>興辦事業計畫細節與變更編定程序俟中央訂頒規範</span>
            </h3>
            <p className="text-[#333333] pl-6 leading-relaxed">
              另中央歷次會議針對其興辦事業計畫細節及變更編定程序並無過多討論及明文（如：興辦事業計畫之審查依據、是否變更編定為特定專用區「特定目的事業用地」），將俟中央（交通部）訂頒相關審議規範後，配合辦理與執行，實執行若有疑義或窒礙難行之處，另案請示中央主管（目的事業主管、土管）機關。
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 四、未來國土計畫上路 */}
      {/* ================================================================= */}
      <section id="power-sec-4" className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              四
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              四、未來國土計畫上路
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `四、未來國土計畫上路：\n依國土計畫土地使用管制規則（草案）附表一國土保育地區、農業發展地區、城鄉發展地區容許使用情形表，僅有「營業處所（一般服務設施）」與「停車場」兩項似較為符合，惟容有疑義。\n` +
                  `1. 如業者採複合經營，兼營買賣、租賃等：群組:2、分類:住商、項次 2-6 營業處所(一般服務設施)\n` +
                  `2. 如僅單純作停車使用：群組:7、分類:一般性公共設施、項次 7-4 停車場（①:限於依第三條第一項規定註記之乙種建築用地、丙種建築用地、交通用地及遊憩用地，且使用面積限二公頃以下。）`,
                '四、未來國土計畫管制'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製國土計畫</span>
          </button>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs">
          <p className="text-[#333333] text-xs sm:text-sm leading-relaxed">
            依<strong>國土計畫土地使用管制規則（草案）附表一</strong>國土保育地區、農業發展地區、城鄉發展地區容許使用情形表，僅有「<strong>營業處所（一般服務設施）</strong>」與「<strong>停車場</strong>」兩項似較為符合，惟容有疑義：
          </p>
        </div>

        {/* 1. 複合經營：營業處所 */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#1F3864] text-white">1</span>
            <h3 className="font-bold text-sm sm:text-base text-[#1F3864]">
              如業者採複合經營，兼營買賣、租賃等：
            </h3>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-[#8C5A4B]">
            群組：2、分類：住商、項次 2-6 營業處所（一般服務設施）
          </p>

          <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] bg-white">
            <table className="w-full text-center border-collapse text-xs">
              <thead>
                <tr className="bg-[#1F3864] text-white">
                  <th className="py-2 px-2 font-bold border-r border-white/20 whitespace-nowrap text-left">項次</th>
                  <th className="py-2 px-2 font-bold border-r border-white/20 min-w-[90px] text-left">使用項目</th>
                  <th className="py-2 px-3 font-bold border-r border-white/20 min-w-[130px] text-left">使用細目</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">國1</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">國2</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">農1</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">農2</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">農3</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">農4(非原)</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">農4(原)</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">城2-1</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">城3</th>
                  <th className="py-2 px-3 font-bold text-left min-w-[220px]">備註條件</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C7]">
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2 px-2 text-left font-semibold text-[#333333] border-r border-[#DDD5C7]">2-6</td>
                  <td className="py-2 px-2 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7]">營業處所</td>
                  <td className="py-2 px-3 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7]">一般服務設施</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">❷</span></td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">❷</span></td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">❷</span></td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">❷</span></td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">❶<br /><span className="text-[#8C5A4B]">❷</span></td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">❶<br />○</td>
                  <td className="py-2 px-3 text-left text-[11px] leading-tight space-y-1 align-top bg-[#FAF7F2]/40">
                    <p>❶: 限於依第三條第一項規定註記之甲種建築用地、乙種建築用地、丙種建築用地。</p>
                    <p className="text-[#8C5A4B]">❷: 限於依第三條第一項規定註記之丁種建築用地。</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. 單純停車使用：停車場 */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#8C5A4B] text-white">2</span>
            <h3 className="font-bold text-sm sm:text-base text-[#1F3864]">
              如僅單純作停車使用：
            </h3>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-[#8C5A4B]">
            群組：7、分類：一般性公共設施、項次 7-4 停車場
          </p>

          <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] bg-white">
            <table className="w-full text-center border-collapse text-xs">
              <thead>
                <tr className="bg-[#1F3864] text-white">
                  <th className="py-2 px-2 font-bold border-r border-white/20 whitespace-nowrap text-left">項次</th>
                  <th className="py-2 px-2 font-bold border-r border-white/20 min-w-[90px] text-left">使用項目</th>
                  <th className="py-2 px-3 font-bold border-r border-white/20 min-w-[130px] text-left">使用細目</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">國1</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">國2</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">農1</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">農2</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">農3</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">農4(非原)</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">農4(原)</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">城2-1</th>
                  <th className="py-2 px-1.5 font-bold border-r border-white/20">城3</th>
                  <th className="py-2 px-3 font-bold text-left min-w-[220px]">備註條件</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C7]">
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-2.5 px-2 text-left font-semibold text-[#333333] border-r border-[#DDD5C7]">7-4</td>
                  <td className="py-2.5 px-2 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7]">停車場</td>
                  <td className="py-2.5 px-3 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7]">停車場</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-[#1F3864]">①</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">╳</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2.5 px-3 text-left text-[11px] leading-tight text-[#4A3E39] align-top bg-[#FAF7F2]/40">
                    ①: 限於依第三條第一項規定註記之<strong>乙種建築用地、丙種建築用地、交通用地及遊憩用地</strong>，且<strong>使用面積限二公頃以下</strong>。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 五、結語 */}
      {/* ================================================================= */}
      <section id="power-sec-5" className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              五
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              五、結語
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `五、結語：業者目前除停放機具需求外，現行態樣尚有買賣、租賃等複合式經營型態，考量其經營方式、規模、條件與停車場所使用於土地使用管理上亦有所不同，且更涉及不同主管機關法令及權責，倘經業者評估後仍有前開多用途使用需求，可整合並朝專用區設置方式透過現行土地變更程序，於非都市計畫地區，得依區域計畫法相關規定申請變更為適當分區或適當使用地類別；都市計畫地區可循都市計畫通盤檢討變更程序，檢討變更適當專用區以解決業者長期複合式經營之用地需求，案雖經交通部 114 年 7 月 17 日函釋得採「其他交通設施」之容許使用模式，惟僅限於部分之動力機械（輪式為主），後續長期、遠程目標仍應依循內政部指示採行變更「專用區」（都市土地）或「適當分區、使用地類別」（非都市土地），始為正辦。`,
                '五、結語'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製結語</span>
          </button>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <p className="text-[#333333] leading-relaxed text-sm sm:text-base">
            業者目前除停放機具需求外，現行態樣尚有買賣、租賃等複合式經營型態，考量其經營方式、規模、條件與停車場所使用於土地使用管理上亦有所不同，且更涉及不同主管機關法令及權責，倘經業者評估後仍有前開多用途使用需求，<strong>可整合並朝專用區設置方式透過現行土地變更程序</strong>：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm pt-1">
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <strong className="text-[#1F3864]">非都市土地地區：</strong>
              <p className="text-[#4A3E39]">
                得依區域計畫法相關規定申請變更為<strong>適當分區或適當使用地類別</strong>。
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
              <strong className="text-[#1F3864]">都市計畫地區：</strong>
              <p className="text-[#4A3E39]">
                可循都市計畫通盤檢討變更程序，檢討變更<strong>適當專用區</strong>以解決業者長期複合式經營之用地需求。
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#4A3E39] pt-2 border-t border-[#ECE6DB] leading-relaxed">
            案雖經<strong>交通部 114 年 7 月 17 日函釋得採「其他交通設施」之容許使用模式，惟僅限於部分之動力機械（輪式為主）</strong>，後續長期、遠程目標仍應依循內政部指示採行變更「<strong>專用區</strong>」（都市土地）或「<strong>適當分區、使用地類別</strong>」（非都市土地），始為正辦。
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 六、附錄：重要公文函釋、行政院公報及研商會議紀錄清單 */}
      {/* ================================================================= */}
      <section id="power-sec-6" className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              六
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              六、附錄：重要公文函釋、公報及研商會議紀錄清單
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `六、重要公文函釋、公報及會議紀錄清單：\n` +
                  `1. 行政院公報（第017卷第070期）：交通部與內政部會銜令修正「道路交通安全規則」第83條至第83條之3暨附件十八「動力機械保養紀錄表」。\n` +
                  `2. 交通部 114 年 7 月 17 日交路字第 1140017490 號函：領用牌證之動力機械得於交通用地之其他交通設施作停放場地容許使用。\n` +
                  `3. 交通部 114 年 7 月 17 日交路字第 11400174901 號函：敘明已領證機械計5種（輪型起重機、輪式起重機、輪胎式起重機、卡車起重機、輪型式吊車），履帶式機具非屬交通部認定範疇。\n` +
                  `4. 內政部 114 年 6 月 13 日內授國營字第 1140807179 號函：檢送 114 年 5 月 15 日「動力機械停放場所適用容許使用項目」研商會議紀錄。\n` +
                  `5. 內政部 114 年 7 月 28 日內授國營字第 1140809701 號函：檢送會議紀錄勘誤表（確認發言更正內容）。\n` +
                  `6. 交通部 114 年 1 月 3 日交路字第 1145000058 號函：函詢各縣市政府就「其他交通設施」表示卓見。\n` +
                  `7. 立法委員吳琪銘國會辦公室 113 年 12 月 26 日協調會紀錄：要求交通部於 114 年 2 月 17 日前研議動力機械停放場所是否係屬其他交通設施範疇。\n` +
                  `8. 新北市政府工務局 114 年 1 月 14 日新北工建字第 1140046890 號函：表示動力機械停放場所容許事宜屬交通主管機關權責，後續倘涉建築事項工務局協助審查。\n` +
                  `9. 內政部國土管理署 113 年 1 月 22 日國署營字第 1131005846 號函：檢送 112 年 12 月 13 日「協助建築機械業者重機械放置用地合法化及建立相關管理機制」研商會議紀錄。\n` +
                  `10. 新北市政府公文改分表（公文文號：1142311114）：地政局簽請一層裁定，經秘書長邱敬斌批示「動力機械違規停放等尚屬交通業務，由交通局主政，工務局、地政局、城鄉局等機關協辦」。\n` +
                  `11. 「非都市土地容許使用項目之許可使用細目目的事業主管機關（單位）表」第十五項交通設施規定。`,
                '六、公文函釋附錄清單'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製公文清單</span>
          </button>
        </div>

        <div className="space-y-6 text-xs sm:text-sm">
          {/* 總覽說明 */}
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-[#4A3E39] leading-relaxed">
            <p className="font-bold text-[#1F3864] text-sm mb-1">
              報告附件完整公文檔案全文收錄（PDF 第 12～54 頁全件無摘要完整呈現）：
            </p>
            <p className="text-xs text-[#7D7065]">
              包含行政院公報修正條文、交通部關鍵函釋、內政部國土署會議紀錄決議、勘誤表、22 個與會機關發言意見全文、立法委員協調會紀錄及新北市政府公文改分一層核決歷程。
            </p>
          </div>

          {/* 1. 道路交通安全規則法規條文與保養紀錄表 */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#ECE6DB] pb-2">
              <h4 className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs flex items-center justify-center font-bold">1</span>
                <span>行政院公報：道路交通安全規則第 83 條～第 83 條之 3 修正條文與保養紀錄表全文</span>
              </h4>
              <span className="text-[11px] text-[#7D7065]">100年4月14日交路字第1000002592號令</span>
            </div>
            <div className="space-y-3 font-mono text-xs text-[#333333] leading-relaxed bg-[#FAF7F2] p-3.5 rounded-lg border border-[#DDD5C7]">
              <div>
                <p className="font-bold text-[#1F3864]">【第八十三條】（動力機械定義、牌證申請與分類）</p>
                <p className="mt-1">非屬汽車範圍之動力機械，係指下列各款之一之機械：</p>
                <p className="pl-4">一、不經曳引而能以原動機行駛之工程重機械。</p>
                <p className="pl-4">二、屬裝配起重機械專供起重用途且無載貨容量之起重機車或其他自力推動機械。</p>
                <p className="pl-4">三、其他特定用途設計製造，不經曳引而能以原動機行駛之機械。</p>
                <p>動力機械應先向公路監理機關申請登記領用牌證，並比照第八十條之規定申請核發臨時通行證後，方得憑證行駛道路。</p>
                <p>動力機械申請登記領用牌證，依其總重量及規格分為下列各類：</p>
                <p className="pl-4">一、普通動力機械：總重量四十二公噸以下且其全長、全寬及全高尺度符合第三十八條規定大貨車尺度限制之動力機械。</p>
                <p className="pl-4">二、重型動力機械：總重量逾四十二公噸但在七十五公噸以下，或四十二公噸以下其全長、全寬及全高尺度逾第三十八條規定大貨車尺度限制之動力機械。</p>
                <p className="pl-4">三、大型重型動力機械：總重量逾七十五公噸之動力機械。</p>
                <p>進口第一項第二款裝有輪式輪胎之動力機械，其方向盤應在左側。但於中華民國一百零四年十二月三十一日以前進口者，不在此限。</p>
              </div>
              <div className="pt-2 border-t border-[#DDD5C7]">
                <p className="font-bold text-[#1F3864]">【第八十三條之一】（登記領用牌證與臨時通行證審查）</p>
                <p className="mt-1">動力機械應依下列規定向公路監理機關申請登記領用牌證：</p>
                <p className="pl-4">一、以裝有輪胎且方向盤在左側及確實無法使用車輛載運者為限。但於中華民國一百零四年十二月三十一日以前進口者，其方向盤得非在左側。</p>
                <p className="pl-4">二、應繳驗公司或行號登記證明文件及檢附動力機械來歷憑證、諸元規格資料、加註尺度之照片。</p>
                <p className="pl-4">三、屬勞工安全衛生法規定之危險性機械者，應檢附勞動檢查機構核發之檢查合格證明。</p>
                <p>動力機械應檢附依法領有公司、商業或工廠登記證明文件之合法汽車修理業者出具四個月內保養紀錄表（檢查項目如附件十八），方得核發臨時通行證。</p>
              </div>
              <div className="pt-2 border-t border-[#DDD5C7]">
                <p className="font-bold text-[#1F3864]">【附件十八：動力機械保養紀錄表工作項目清單】</p>
                <p className="text-[11px] text-[#4A3E39] mt-0.5">
                  <strong>引擎系統：</strong>檢查機油壓力、引擎漏油漏氣、更換機油濾清芯子、更換機油、校準汽門腳間隙、清洗冷卻系統及換水、皮帶檢查調整、空氣濾清器芯子、進排氣歧管及消音器、柴油濾清器、校正噴射幫浦正時、清洗校正噴油嘴、電瓶樁頭、啟動馬達、發電機。<br />
                  <strong>底盤系統：</strong>轉向機檢查/換油、拆洗前輪軸承、大王銷及銅套、羊角及轉向臂、前軸、直拉桿及橫拉桿球頭、拆洗後輪軸承、後軸後軸殼及螺帽、差速器油量、萬向接頭、推進軸、離合器、變速箱油量、煞車系統及配件換來令、煞車鼓、手腳煞車校準、煞車總缸、潤滑前後鋼板銷、鋼板吊架吊鉤、U型螺絲、避震器、輪胎情形換位/換胎、底盤加註黃油、照後鏡照地鏡、頭燈尾燈、方向燈帶狀反光識別材料、吊桿警示燈、防止捲入裝置、輪廓邊界標識燈。
                </p>
              </div>
            </div>
          </div>

          {/* 2. 交通部兩大函釋全文 */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#ECE6DB] pb-2">
              <h4 className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs flex items-center justify-center font-bold">2</span>
                <span>交通部關鍵函釋二文全文（交路字第 1140017490 號及 11400174901 號）</span>
              </h4>
              <span className="text-[11px] text-[#7D7065]">發文日期：114年7月17日</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
              <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
                <strong className="text-[#1F3864] block font-bold">【交路字第 1140017490 號函】</strong>
                <p><strong>受文者：</strong>直轄市及各縣市政府</p>
                <p><strong>主旨：</strong>有關依道路交通安全規則第83條規定，向公路監理機關申請登記領用牌證之動力機械，得於交通用地之其他交通設施作動力機械停放場地容許使用，請查照。</p>
                <p><strong>說明：</strong></p>
                <p className="pl-2">一、依據內政部114年6月13日內授國營字第1140807179號函辦理。</p>
                <p className="pl-2">二、依非都市土地容許使用執行要點第4點規定，許可使用細目中列有其他二字者，應由目的主管機關商使用地及地政主管機關認定之。內政部114年5月15日會議獲致決議：就可行駛道路之動力機械，即依道安規則第83條向公路監理機關登記領用牌證之動力機械，得於交通用地之其他交通設施作停放場地容許使用，轉請據以辦理。</p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
                <strong className="text-[#1F3864] block font-bold">【交路字第 11400174901 號函】</strong>
                <p><strong>受文者：</strong>新北市政府（復內政部會議紀錄函）</p>
                <p><strong>主旨：</strong>有關貴部檢送114年5月15日「動力機械停放場所適用容許使用項目」研商會議紀錄一案，復如說明，請查照。</p>
                <p><strong>說明：</strong></p>
                <p className="pl-2">二、非屬前述動力機械之其他動力機械，仍請貴部依行政院114年2月12日會議結論續邀相關部會研商。（<span className="text-rose-700 font-bold">註：履帶式機具非屬交通部認定範疇</span>）。</p>
                <p className="pl-2">三、確認已領用牌證動力機械（機械種類名稱）計有：<strong>輪型起重機、輪式起重機、輪胎式起重機、卡車起重機、輪型式吊車</strong>。</p>
              </div>
            </div>
          </div>

          {/* 3. 114年5月15日研商會議紀錄全文與22出席單位發言 */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#ECE6DB] pb-2">
              <h4 className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs flex items-center justify-center font-bold">3</span>
                <span>內政部國土署「動力機械停放場所適用容許使用項目研商會議紀錄（修正後）」全文</span>
              </h4>
              <span className="text-[11px] text-[#7D7065]">114年5月15日會議紀錄</span>
            </div>
            <div className="p-3.5 bg-[#FAF7F2] rounded-lg border border-[#DDD5C7] space-y-2 text-xs leading-relaxed text-[#333333]">
              <p><strong>時間：</strong>114年5月15日（星期四）下午2時｜<strong>地點：</strong>本部國土管理署107會議室</p>
              <p><strong>主席：</strong>於副署長望聖（李組長守仁代）｜<strong>紀錄：</strong>張鎮邦</p>
              <div className="space-y-1.5 pt-1 border-t border-[#DDD5C7]">
                <p className="font-bold text-[#1F3864]">【討論事項與決議全文】：</p>
                <p><strong>案由一、認定動力機械停放場所屬交通用地之「其他交通設施」適用其容許使用項目。</strong></p>
                <p className="pl-3">決議：依非都市土地容許使用執行要點第4點，交通部表示可行駛道路之動力機械（即依道安規則第83條登記領牌者），得於交通用地其他交通設施作動力機械停放場地容許使用。後續由交通部通函告知直轄市、縣(市)政府。</p>
                <p><strong>案由二、動力機械停放場所適用之機械種類、使用條件（面積限制）等。</strong></p>
                <p className="pl-3">決議：目前已領證動力機械名稱計有輪型起重機、輪式起重機、輪胎式起重機、卡車起重機、輪型式吊車。地方政府得比照汽車停車場、客貨運停車站等規範，就使用條件（路寬、面積、環境影響）訂定審查作業要點。</p>
                <p><strong>案由三、都市土地或非都市土地用地變更規範及申請程序。</strong></p>
                <p className="pl-3">決議：業者現行態樣尚有買賣、租賃等複合式經營型態，倘有實際需求，可整合並朝專用區設置方式透過現行土地變更程序：非都市土地申請變更為適當分區或適當使用地類別；都市計畫循通盤檢討變更適當專用區以解決長期複合式經營需求。</p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-[#DDD5C7]">
                <p className="font-bold text-[#1F3864]">【各與會單位關鍵發言精華】：</p>
                <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] text-[#4A3E39]">
                  <li><strong>台灣建設機械協會 / 臺北公會 / 新北公會 / 高雄公會：</strong>業界機械以營建與重機械為主，多數為履帶式（如挖土機、推土機），強烈建請納入營建動力機具與履帶式機械，並建立合法化法源依據。</li>
                  <li><strong>交通部：</strong>截至114年5月系統登載大型重型、重型、普通動力機械牌證數共 5,995 輛。挖土機、鏟土機需先就其對交通安全造成影響再行評估。</li>
                  <li><strong>臺中市交通局（書面）：</strong>動力機械主要用於施工製程而非運輸，建請採「正面表列」明確規範得停放種類，避免業者動輒得咎。</li>
                  <li><strong>新北市交通局：</strong>非都市土地臨路寬度（如8米以上）需再盤點，機具轉彎進出安全與出入口大小宜慎密考量。</li>
                  <li><strong>國土署國土計畫組：</strong>依非都市土地容許要點附註，以實際業務職掌機關為主政機關，再會辦府內其他單位受理審查。</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. 新北市公文改分表爭議簽簽核實務全文 */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#ECE6DB] pb-2">
              <h4 className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs flex items-center justify-center font-bold">4</span>
                <span>新北市政府公文改分表與一層核決歷程全文（公文文號：1142311114）</span>
              </h4>
              <span className="text-[11px] text-[#7D7065]">收文日期：114年11月13日</span>
            </div>
            <div className="p-3.5 bg-rose-50/50 rounded-lg border border-rose-200 space-y-2 text-xs leading-relaxed text-[#333333]">
              <p><strong>收文機關：</strong>地政局 ➜ <strong>改分機關：</strong>交通局／工務局</p>
              <div className="space-y-1 bg-white p-3 rounded-lg border border-rose-100">
                <p className="font-bold text-[#1F3864]">【地政局改分意見與理由全文】：</p>
                <p>1. 經電洽審計處表示：本案「辦理動力機械停放管理作業情形調查」事項係目的事業主管機關權責，應由目的事業主管機關開文，本局與城鄉局僅為土管機關。</p>
                <p>2. 工務局表示僅管轄營建工區內之動力機械，工區外非其管轄；交通局表示僅受理輪式動力機械，本案似為討論履帶式機具為主非其權管。因協商未果且主管機關未明，陳請鈞長裁示主政機關。</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-rose-200 space-y-1">
                <p className="font-bold text-rose-900">【府一層核稿與最終裁決】：</p>
                <p><strong>參議（陳碧琴）核稿意見：</strong>「查本案之管理標的—動力機械均需向公路監理機關申請登記領用牌證，又審計處來文之調查事項違規停放等尚屬交通業務。承上，本案建議由交通局主政，工務局、地政局、城鄉局等機關協辦。陳核示。」</p>
                <p><strong>副秘書長（張其強）：</strong>「同意參議核稿意見」</p>
                <p><strong>秘書長（邱敬斌）最終裁定：</strong><span className="font-bold text-rose-800 font-mono">「依副秘書長核簽意見辦理」</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
