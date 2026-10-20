import React from 'react';
import {
  FileText,
  Copy,
  Table,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Building2,
  TreePine,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
  MapPin,
  Layers
} from 'lucide-react';

interface SportsVenuesReportProps {
  onCopy?: (text: string, label: string) => void;
}

export const SportsVenuesReport: React.FC<SportsVenuesReportProps> = ({ onCopy }) => {
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
          專題報告第 2 案・全文收錄無摘要
        </span>
        <h1 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864] pt-1">
          運動場館、高爾夫球場及高爾夫球練習場涉容許及用地變更
        </h1>
        <p className="text-xs sm:text-sm text-[#7D7065]">
          依據《非都市土地使用管制規則》、《非都市土地變更編定執行要點》、《高爾夫球場管理規則》及《國土計畫土地使用管制規則》
        </p>
      </div>

      {/* 章節快速導覽錨點列 */}
      <div className="p-3 bg-white rounded-xl border border-[#DDD5C7] flex items-center gap-2 overflow-x-auto text-xs font-bold shadow-2xs">
        <span className="text-[#8C5A4B] shrink-0 font-bold">章節快速跳轉：</span>
        <a href="#sports-sec-1" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          一、定義
        </a>
        <a href="#sports-sec-2" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          二、三種場地之差異
        </a>
        <a href="#sports-sec-3" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          三、容許使用規定
        </a>
        <a href="#sports-sec-4" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          四、用地變更程序
        </a>
        <a href="#sports-sec-5" className="px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#1F3864] shrink-0 transition-colors">
          五、未來國土計畫管制
        </a>
      </div>

      {/* ================================================================= */}
      {/* 一、定義 */}
      {/* ================================================================= */}
      <section id="sports-sec-1" className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              一
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              一、定義
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `一、定義\n（一）運動場館：指專門用於體育運動、訓練、競賽、表演及健身活動的室內外場所與設施。這類設施包含體育場（露天）、體育館（室內）、運動中心、游泳池、球場（籃球、棒球、網球等）及相關附屬設施（如更衣室、看台、器材室），係為民眾、學生或選手提供健康、體育及休閒的空間。\n（二）高爾夫球場：專門用於進行高爾夫球運動的戶外場地，標準球場通常由 18 個依序排列的球洞組成，總標準桿通常為 72 桿。場地包含發球檯、球道、長草區、沙坑、水池障礙以及果嶺與球洞。\n（三）高爾夫球練習場：專門供球員練習揮桿、熱身或提升擊球穩定性與準確性的場所，非正式比賽球場。單獨設立高爾夫練習場屬於「體育場所」或「運動場地」申設，非高爾夫球場，目前國內無專項法規。高爾夫球場附設練習場申設則需倂同高爾夫球場依「高爾夫球場管理規則」規定辦理申設。`,
                '一、定義'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製此段</span>
          </button>
        </div>

        <div className="space-y-3">
          {/* （一）運動場館 */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">
                （一）
              </span>
              <h3 className="font-bold text-base text-[#1F3864]">運動場館</h3>
            </div>
            <p className="text-[#333333] pl-2 border-l-2 border-[#1F3864]/30 leading-relaxed text-sm sm:text-base">
              指專門用於體育運動、訓練、競賽、表演及健身活動的室內外場所與設施。這類設施包含體育場（露天）、體育館（室內）、運動中心、游泳池、球場（籃球、棒球、網球等）及相關附屬設施（如更衣室、看台、器材室），係為民眾、學生或選手提供健康、體育及休閒的空間。
            </p>
          </div>

          {/* （二）高爾夫球場 */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">
                （二）
              </span>
              <h3 className="font-bold text-base text-[#1F3864]">高爾夫球場</h3>
            </div>
            <p className="text-[#333333] pl-2 border-l-2 border-[#1F3864]/30 leading-relaxed text-sm sm:text-base">
              專門用於進行高爾夫球運動的戶外場地，標準球場通常由 18 個依序排列的球洞組成，總標準桿通常為 72 桿。場地包含發球檯、球道、長草區、沙坑、水池障礙以及果嶺與球洞。
            </p>
          </div>

          {/* （三）高爾夫球練習場 */}
          <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">
                （三）
              </span>
              <h3 className="font-bold text-base text-[#1F3864]">高爾夫球練習場</h3>
            </div>
            <p className="text-[#333333] pl-2 border-l-2 border-[#1F3864]/30 leading-relaxed text-sm sm:text-base">
              專門供球員練習揮桿、熱身或提升擊球穩定性與準確性的場所，非正式比賽球場。單獨設立高爾夫練習場屬於「體育場所」或「運動場地」申設，非高爾夫球場，目前國內無專項法規。高爾夫球場附設練習場申設則需倂同高爾夫球場依「高爾夫球場管理規則」規定辦理申設。
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 二、三種場地之差異 */}
      {/* ================================================================= */}
      <section id="sports-sec-2" className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              二
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              二、三種場地之差異
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `三種場地之差異比較表：\n` +
                  `【場地設施】\n・運動場館：如健身中心、游泳池、羽球館等式內外場館\n・高爾夫球練習場：僅供揮桿練習之場所，無標準球洞配置\n・高爾夫球場：設有發球台、球道、果嶺及球洞等設施\n` +
                  `【適用法規】\n・運動場館：各運動種類之專屬規範\n・高爾夫球練習場：競技及休閒運動場館業規範\n・高爾夫球場：高爾夫球場管理規則\n` +
                  `【審核機關】\n・運動場館：地方（體育局）\n・高爾夫球練習場：地方（體育局）\n・高爾夫球場：運動部\n` +
                  `【環境規範】\n・運動場館：著重於消防安全、符合土地使用分區、建築物用途\n・高爾夫球練習場：須符合土地使用分區\n・高爾夫球場：必須通過環評、水保、土地變更等嚴格程序\n` +
                  `【娛樂稅負擔】\n・運動場館：無須課徵\n・高爾夫球練習場：無須課徵\n・高爾夫球場：需課徵娛樂稅（不得超過收費額 20%）\n` +
                  `【面積限制】\n・運動場館：視各類型場館而定\n・高爾夫球練習場：無法令規範面積限制\n・高爾夫球場：不得小於 30 公頃，以不超過 120 公頃為限`,
                '三種場地差異比較表'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製差異表</span>
          </button>
        </div>

        {/* 差異比較表格 */}
        <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] shadow-2xs bg-white">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#1F3864] text-white">
                <th className="py-3 px-4 font-bold border-r border-white/20 whitespace-nowrap w-28 sm:w-32">
                  項目
                </th>
                <th className="py-3 px-4 font-bold border-r border-white/20 min-w-[200px]">
                  運動場館
                </th>
                <th className="py-3 px-4 font-bold border-r border-white/20 min-w-[200px]">
                  高爾夫球練習場
                </th>
                <th className="py-3 px-4 font-bold min-w-[220px]">
                  高爾夫球場
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DDD5C7]">
              <tr className="hover:bg-[#FAF7F2] transition-colors">
                <td className="py-3 px-4 font-bold text-[#1F3864] bg-[#FAF7F2]/60 border-r border-[#DDD5C7] whitespace-nowrap">
                  場地設施
                </td>
                <td className="py-3 px-4 text-[#333333] border-r border-[#DDD5C7]">
                  如健身中心、游泳池、羽球館等式內外場館
                </td>
                <td className="py-3 px-4 text-[#333333] border-r border-[#DDD5C7]">
                  僅供揮桿練習之場所，無標準球洞配置
                </td>
                <td className="py-3 px-4 text-[#333333]">
                  設有發球台、球道、果嶺及球洞等設施
                </td>
              </tr>
              <tr className="hover:bg-[#FAF7F2] transition-colors">
                <td className="py-3 px-4 font-bold text-[#1F3864] bg-[#FAF7F2]/60 border-r border-[#DDD5C7] whitespace-nowrap">
                  適用法規
                </td>
                <td className="py-3 px-4 text-[#333333] border-r border-[#DDD5C7]">
                  各運動種類之專屬規範
                </td>
                <td className="py-3 px-4 text-[#333333] border-r border-[#DDD5C7]">
                  競技及休閒運動場館業規範
                </td>
                <td className="py-3 px-4 text-[#333333] font-semibold text-[#1F3864]">
                  高爾夫球場管理規則
                </td>
              </tr>
              <tr className="hover:bg-[#FAF7F2] transition-colors">
                <td className="py-3 px-4 font-bold text-[#1F3864] bg-[#FAF7F2]/60 border-r border-[#DDD5C7] whitespace-nowrap">
                  審核機關
                </td>
                <td className="py-3 px-4 text-[#333333] border-r border-[#DDD5C7]">
                  地方（體育局）
                </td>
                <td className="py-3 px-4 text-[#333333] border-r border-[#DDD5C7]">
                  地方（體育局）
                </td>
                <td className="py-3 px-4 font-bold text-[#8C5A4B]">
                  運動部
                </td>
              </tr>
              <tr className="hover:bg-[#FAF7F2] transition-colors">
                <td className="py-3 px-4 font-bold text-[#1F3864] bg-[#FAF7F2]/60 border-r border-[#DDD5C7] whitespace-nowrap">
                  環境規範
                </td>
                <td className="py-3 px-4 text-[#333333] border-r border-[#DDD5C7]">
                  著重於消防安全、符合土地使用分區、建築物用途
                </td>
                <td className="py-3 px-4 text-[#333333] border-r border-[#DDD5C7]">
                  須符合土地使用分區
                </td>
                <td className="py-3 px-4 text-[#333333]">
                  必須通過環評、水保、土地變更等嚴格程序
                </td>
              </tr>
              <tr className="hover:bg-[#FAF7F2] transition-colors">
                <td className="py-3 px-4 font-bold text-[#1F3864] bg-[#FAF7F2]/60 border-r border-[#DDD5C7] whitespace-nowrap">
                  娛樂稅負擔
                </td>
                <td className="py-3 px-4 text-emerald-800 font-medium border-r border-[#DDD5C7]">
                  無須課徵
                </td>
                <td className="py-3 px-4 text-emerald-800 font-medium border-r border-[#DDD5C7]">
                  無須課徵
                </td>
                <td className="py-3 px-4 text-rose-800 font-semibold">
                  需課徵娛樂稅（不得超過收費額 20%）
                </td>
              </tr>
              <tr className="hover:bg-[#FAF7F2] transition-colors">
                <td className="py-3 px-4 font-bold text-[#1F3864] bg-[#FAF7F2]/60 border-r border-[#DDD5C7] whitespace-nowrap">
                  面積限制
                </td>
                <td className="py-3 px-4 text-[#333333] border-r border-[#DDD5C7]">
                  視各類型場館而定
                </td>
                <td className="py-3 px-4 text-[#333333] border-r border-[#DDD5C7]">
                  無法令規範面積限制
                </td>
                <td className="py-3 px-4 font-bold text-[#1F3864]">
                  不得小於 30 公頃，以不超過 120 公頃為限
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 二（三）、容許使用 */}
      {/* ================================================================= */}
      <section id="sports-sec-3" className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              三
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                二、容許使用
              </h2>
              <span className="text-xs text-[#7D7065]">
                依非都市土地使用管制規則第 6 條附表一規定
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `二、容許使用\n依非都市土地使用管制規則第 6 條附表一規定：\n` +
                  `（一）運動場館、高爾夫球練習場：\n` +
                  `・甲種建築用地：容許項目（二）日用品零售及服務設施，免經申請細目「4. 營業及辦公處所」。附帶條件：1. 國際觀光旅館、觀光旅館、一般旅館者，不得位於全國區域計畫規定之沿海自然保護區。2. 位於全國區域計畫規定之沿海一般保護區者，需經目的事業主管機關、使用地主管機關及有關機關許可。\n` +
                  `・乙種建築用地：容許項目（十三）遊憩設施，免經申請細目「4. 室內桌球館或撞球場」、「5. 球場、溜冰場或游泳池」、「7. 其他室內及小型運動設施」。\n` +
                  `・丙種建築用地：容許項目（十三）遊憩設施（同乙種建築用地）；（十四）戶外遊憩設施「2. 綜合運動場」、「20. 其他戶外運動設施」。\n` +
                  `・丁種建築用地：容許項目（二）工業社區，免經申請細目「3. 社區遊憩設施」。\n` +
                  `・水利用地：容許項目（三）戶外遊憩設施，需經目的機關許可細目「1. 球道」，附帶條件：本款各目不得位於全國區域計畫規定之沿海自然保護區。\n` +
                  `・遊憩用地：容許項目（一）遊憩設施（同乙種建築用地）；（二）戶外遊憩設施（同丙種建築用地）。\n\n` +
                  `（二）高爾夫球場、高爾夫球場附設練習場：\n` +
                  `・丙種建築用地：容許項目（十四）戶外遊憩設施，免經申請細目「1. 高爾夫球場與其附屬建築物及設施」。\n` +
                  `・遊憩用地：容許項目（二）戶外遊憩設施（同丙種建築用地）。`,
                '容許使用規定'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製容許使用</span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#5B584E] font-medium">
          依非都市土地使用管制規則第 6 條附表一規定：
        </p>

        {/* （一）運動場館、高爾夫球練習場 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">
              （一）
            </span>
            <h3 className="font-bold text-base text-[#1F3864]">
              運動場館、高爾夫球練習場
            </h3>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] shadow-2xs bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#1F3864] text-white">
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 whitespace-nowrap w-28">
                    使用地類別
                  </th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[130px]">
                    容許使用項目
                  </th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[160px]">
                    免經申請許可使用細目
                  </th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[150px]">
                    需經目的事業主管機關、使用地主管機關及有關機關許可使用細目
                  </th>
                  <th className="py-2.5 px-3 font-bold min-w-[200px]">
                    附帶條件
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C7]">
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    甲種建築用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （二）日用品零售及服務設施
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-semibold text-[#1F3864]">
                    4. 營業及辦公處所
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 align-top space-y-1 text-xs text-[#4A3E39]">
                    <p>
                      1. 國際觀光旅館、觀光旅館、一般旅館者，不得位於全國區域計畫規定之沿海自然保護區。
                    </p>
                    <p>
                      2. 位於全國區域計畫規定之沿海一般保護區者，需經目的事業主管機關、使用地主管機關及有關機關許可。
                    </p>
                  </td>
                </tr>

                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    乙種建築用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （十三）遊憩設施
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top space-y-0.5">
                    <p className="font-semibold text-[#1F3864]">4. 室內桌球館或撞球場</p>
                    <p className="font-semibold text-[#1F3864]">5. 球場、溜冰場或游泳池</p>
                    <p className="font-semibold text-[#1F3864]">7. 其他室內及小型運動設施</p>
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 align-top text-[#7D7065]">
                    —
                  </td>
                </tr>

                <tr className="hover:bg-[#FAF7F2]">
                  <td rowSpan={2} className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    丙種建築用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （十三）遊憩設施
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#4A3E39] font-medium">
                    同乙種建築用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 align-top text-[#7D7065]">
                    —
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （十四）戶外遊憩設施
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top space-y-0.5">
                    <p className="font-semibold text-[#1F3864]">2. 綜合運動場</p>
                    <p className="font-semibold text-[#1F3864]">20. 其他戶外運動設施</p>
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 align-top text-[#7D7065]">
                    —
                  </td>
                </tr>

                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    丁種建築用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （二）工業社區
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-semibold text-[#1F3864]">
                    3. 社區遊憩設施
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 align-top text-[#7D7065]">
                    —
                  </td>
                </tr>

                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    水利用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （三）戶外遊憩設施
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-bold text-[#8C5A4B]">
                    1. 球道
                  </td>
                  <td className="py-3 px-3 align-top text-xs text-rose-800 font-medium">
                    本款各目不得位於全國區域計畫規定之沿海自然保護區
                  </td>
                </tr>

                <tr className="hover:bg-[#FAF7F2]">
                  <td rowSpan={2} className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    遊憩用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （一）遊憩設施
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#4A3E39] font-medium">
                    同乙種建築用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 align-top text-[#7D7065]">
                    —
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （二）戶外遊憩設施
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#4A3E39] font-medium">
                    同丙種建築用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 align-top text-[#7D7065]">
                    —
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* （二）高爾夫球場、高爾夫球場附設練習場 */}
        <div className="space-y-3 pt-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">
              （二）
            </span>
            <h3 className="font-bold text-base text-[#1F3864]">
              高爾夫球場、高爾夫球場附設練習場
            </h3>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] shadow-2xs bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#1F3864] text-white">
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 whitespace-nowrap w-28">
                    使用地類別
                  </th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[130px]">
                    容許使用項目
                  </th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[200px]">
                    免經申請許可使用細目
                  </th>
                  <th className="py-2.5 px-3 font-bold border-r border-white/20 min-w-[150px]">
                    需經目的事業主管機關、使用地主管機關及有關機關許可使用細目
                  </th>
                  <th className="py-2.5 px-3 font-bold min-w-[100px]">
                    附帶條件
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C7]">
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    丙種建築用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （十四）戶外遊憩設施
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top font-semibold text-[#1F3864]">
                    1. 高爾夫球場與其附屬建築物及設施
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 align-top text-[#7D7065]">
                    —
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]">
                  <td className="py-3 px-3 font-bold text-[#1F3864] bg-[#FAF7F2]/50 border-r border-[#DDD5C7] align-top">
                    遊憩用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top">
                    （二）戶外遊憩設施
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#4A3E39] font-medium">
                    同丙種建築用地
                  </td>
                  <td className="py-3 px-3 border-r border-[#DDD5C7] align-top text-[#7D7065]">
                    —
                  </td>
                  <td className="py-3 px-3 align-top text-[#7D7065]">
                    —
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 三、用地變更 */}
      {/* ================================================================= */}
      <section id="sports-sec-4" className="space-y-5 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              四
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              三、用地變更
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `三、用地變更\n（一）法令規定\n` +
                  `1. 非都市土地變更編定執行要點第 8 點規定略以：「申請變更編定為特定目的事業用地，以各該使用區無其他適當使用地可變更編定者為限，且以政府機關或公營事業機構興辦者為主。但有下列情形之一，經直轄市或縣（市）目的事業主管機關依本規則第三十條規定徵得變更前目的事業主管機關及有關機關同意後核准其興辦事業計畫者，得申請變更編定為特定目的事業用地：……（二十三）運動場館設施。……前項各款興辦事業計畫，依規定需由中央目的事業主管機關核准者，應檢具其核准文件辦理變更編定。」\n` +
                  `2. 非都市土地使用管制第 11 條規定略以：「非都市土地申請開發達下列規模者，應辦理土地使用分區變更：……三、申請開發遊憩設施之土地面積達五公頃以上，應變更為特定專用區。……五、申請開發高爾夫球場之土地面積達十公頃以上，應變更為特定專用區。……七、前六款以外開發之土地面積達二公頃以上，應變更為特定專用區。前項辦理土地使用分區變更案件，申請開發涉及其他法令規定開發所需最小規模者，並應符合各該法令之規定。……」\n\n` +
                  `（二）用地變更編定程序\n` +
                  `1. 運動場館、高爾夫球場練習場：\n` +
                  `（1）申請土地倘非屬前揭得容許使用之土地，則需依非都市土地使用管制規則（下稱管制規則）第 30 條規定擬具興辦事業計畫報經目的事業主管機關（新北市政府體育局）核准，取得核准文件後依管制規則第 28 條規定檢具變更編定申請書、興辦事業計畫核准文件相關文件向新北市政府地政局申請變更編定為特定目的事業用地（依管制規則第 27 條附表三規定，除森林區外，其餘分區均允許申請變更編定為特定目的事業用地）。\n` +
                  `（2）申請變更編定用地倘屬山坡地範圍則須依管制規則第 52 之 1 條規定檢具免受山坡地開發面積不得少於 10 公頃限制文件。如屬公有運動場館則可依「非都市土地興設公有運動場館設施申請免受山坡地開發面積不得少於十公頃限制審議規範」向新北市政府體育局申請免受山坡地開發面積不得少於 10 公頃限制。\n` +
                  `（3）倘開發面積大於 2 公頃以上則須向新北市政府城鄉發展局申請開發許可，經核准開發許可後辦理土地使分區變更為特定專用區。\n\n` +
                  `2. 高爾夫球場：\n` +
                  `（1）依高爾夫球場管理規則第 6 條規規定，高爾夫球場總面積不得少於 30 公頃，以不超過 120 公頃為限，申請籌設應先檢具籌設申請文件報經縣（市）目的事業主管機關（新北市政府體育局）審查同意後，再轉送中央目的事業主管機關（運動部）審查同意後，核發籌設許可。\n` +
                  `（2）申請土地倘非屬前揭得容許使用之土地，經同意籌設許可後，須向新北市政府城鄉發展局申請開發許可，經審查同意後，報經內政部區域計畫委員會審查同意後核發開發許可，辦理土地使分區變更為特定專用區，用地變更為遊憩用地。\n` +
                  `（3）取得開發許可文件後檢具變更編定申請書及開發許可等相關文件，向新北市政府地政局申請辦理分區及使用地變更，地政局受理後審查，經會審城鄉發展局及農業局等相關單位意見後，依開發許可核准之開發計畫，核准辦理變更分區及使用地變更編定。\n` +
                  `（4）另依管制規則第 44 條規定，申請變更編定為遊憩用地者，其事業計畫必須配置必要之保育綠地及公共設施，設置之保育綠地不得少於變更編定面積 30%，且變更編定為國土保安用地，公共設施則俟興建完竣經勘驗合格後，依核定之土地使用計畫，變更編定為適當用地。`,
                '用地變更完整規定與程序'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製用地變更</span>
          </button>
        </div>

        {/* （一）法令規定 */}
        <div className="space-y-3">
          <h3 className="font-bold text-base text-[#1F3864] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1F3864]" />
            （一）法令規定
          </h3>

          <div className="space-y-3">
            {/* 1. 非都市土地變更編定執行要點第8點 */}
            <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm sm:text-base text-[#1F3864]">
                  1. 非都市土地變更編定執行要點第 8 點規定
                </span>
                <span className="text-xs bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#DDD5C7] text-[#7D7065]">
                  特定目的事業用地
                </span>
              </div>
              <blockquote className="text-[#333333] pl-3 border-l-2 border-[#1F3864] text-xs sm:text-sm leading-relaxed bg-[#FAF7F2]/40 p-2.5 rounded-r-lg">
                略以：「申請變更編定為特定目的事業用地，以各該使用區無其他適當使用地可變更編定者為限，且以政府機關或公營事業機構興辦者為主。但有下列情形之一，經直轄市或縣（市）目的事業主管機關依本規則第三十條規定徵得變更前目的事業主管機關及有關機關同意後核准其興辦事業計畫者，得申請變更編定為特定目的事業用地：……<strong className="text-[#1F3864]">（二十三）運動場館設施。</strong>……前項各款興辦事業計畫，依規定需由中央目的事業主管機關核准者，應檢具其核准文件辦理變更編定。」
              </blockquote>
            </div>

            {/* 2. 非都市土地使用管制第11條 */}
            <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm sm:text-base text-[#1F3864]">
                  2. 非都市土地使用管制第 11 條規定
                </span>
                <span className="text-xs bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#DDD5C7] text-[#7D7065]">
                  使用分區變更規模門檻
                </span>
              </div>
              <blockquote className="text-[#333333] pl-3 border-l-2 border-[#8C5A4B] text-xs sm:text-sm leading-relaxed bg-[#FAF7F2]/40 p-2.5 rounded-r-lg space-y-1">
                <p>
                  略以：「非都市土地申請開發達下列規模者，應辦理土地使用分區變更：……
                </p>
                <p className="font-semibold text-[#1F3864]">
                  三、申請開發遊憩設施之土地面積達五公頃以上，應變更為特定專用區。……
                </p>
                <p className="font-semibold text-[#8C5A4B]">
                  五、申請開發高爾夫球場之土地面積達十公頃以上，應變更為特定專用區。……
                </p>
                <p className="font-semibold text-[#333333]">
                  七、前六款以外開發之土地面積達二公頃以上，應變更為特定專用區。
                </p>
                <p>
                  前項辦理土地使用分區變更案件，申請開發涉及其他法令規定開發所需最小規模者，並應符合各該法令之規定。……」
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        {/* （二）用地變更編定程序 */}
        <div className="space-y-4 pt-2">
          <h3 className="font-bold text-base text-[#1F3864] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1F3864]" />
            （二）用地變更編定程序
          </h3>

          {/* 1. 運動場館、高爾夫球場練習場 */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#1F3864] text-white">
                1
              </span>
              <h4 className="font-bold text-base text-[#1F3864]">
                運動場館、高爾夫球場練習場
              </h4>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
                <div className="font-bold text-[#1F3864] flex items-center gap-1.5">
                  <span className="text-xs bg-[#1F3864]/10 text-[#1F3864] px-1.5 py-0.5 rounded">
                    （1）
                  </span>
                  <span>興辦事業計畫與申請特定目的事業用地變更編定</span>
                </div>
                <p className="text-[#333333] pl-6 leading-relaxed">
                  申請土地倘非屬前揭得容許使用之土地，則需依非都市土地使用管制規則（下稱管制規則）第 30 條規定擬具興辦事業計畫報經目的事業主管機關（<strong>新北市政府體育局</strong>）核准，取得核准文件後依管制規則第 28 條規定檢具變更編定申請書、興辦事業計畫核准文件相關文件向<strong>新北市政府地政局</strong>申請變更編定為特定目的事業用地（依管制規則第 27 條附表三規定，<span className="text-rose-700 font-bold">除森林區外，其餘分區均允許申請變更編定為特定目的事業用地</span>）。
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
                <div className="font-bold text-[#1F3864] flex items-center gap-1.5">
                  <span className="text-xs bg-[#1F3864]/10 text-[#1F3864] px-1.5 py-0.5 rounded">
                    （2）
                  </span>
                  <span>山坡地範圍與免受 10 公頃限制審議規範</span>
                </div>
                <p className="text-[#333333] pl-6 leading-relaxed">
                  申請變更編定用地倘屬山坡地範圍則須依管制規則第 52 之 1 條規定檢具免受山坡地開發面積不得少於 10 公頃限制文件。如屬公有運動場館則可依「<strong>非都市土地興設公有運動場館設施申請免受山坡地開發面積不得少於十公頃限制審議規範</strong>」向<strong>新北市政府體育局</strong>申請免受山坡地開發面積不得少於 10 公頃限制。
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
                <div className="font-bold text-[#1F3864] flex items-center gap-1.5">
                  <span className="text-xs bg-[#1F3864]/10 text-[#1F3864] px-1.5 py-0.5 rounded">
                    （3）
                  </span>
                  <span>達 2 公頃以上辦理土地使用分區變更</span>
                </div>
                <p className="text-[#333333] pl-6 leading-relaxed">
                  倘開發面積大於 <strong>2 公頃以上</strong>則須向<strong>新北市政府城鄉發展局</strong>申請開發許可，經核准開發許可後辦理土地使分區變更為特定專用區。
                </p>
              </div>
            </div>
          </div>

          {/* 2. 高爾夫球場 */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#8C5A4B] text-white">
                2
              </span>
              <h4 className="font-bold text-base text-[#1F3864]">
                高爾夫球場
              </h4>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
                <div className="font-bold text-[#1F3864] flex items-center gap-1.5">
                  <span className="text-xs bg-[#8C5A4B]/10 text-[#8C5A4B] px-1.5 py-0.5 rounded font-bold">
                    （1）
                  </span>
                  <span>籌設許可（體育局初審轉運動部）與規模限制</span>
                </div>
                <p className="text-[#333333] pl-6 leading-relaxed">
                  依高爾夫球場管理規則第 6 條規規定，高爾夫球場總面積<strong className="text-[#1F3864]">不得少於 30 公頃，以不超過 120 公頃為限</strong>，申請籌設應先檢具籌設申請文件報經縣（市）目的事業主管機關（<strong>新北市政府體育局</strong>）審查同意後，再轉送中央目的事業主管機關（<strong>運動部</strong>）審查同意後，核發籌設許可。
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
                <div className="font-bold text-[#1F3864] flex items-center gap-1.5">
                  <span className="text-xs bg-[#8C5A4B]/10 text-[#8C5A4B] px-1.5 py-0.5 rounded font-bold">
                    （2）
                  </span>
                  <span>城鄉局與內政部區委會開發許可審查</span>
                </div>
                <p className="text-[#333333] pl-6 leading-relaxed">
                  申請土地倘非屬前揭得容許使用之土地，經同意籌設許可後，須向<strong>新北市政府城鄉發展局</strong>申請開發許可，經審查同意後，報經<strong>內政部區域計畫委員會</strong>審查同意後核發開發許可，辦理土地使分區變更為特定專用區，用地變更為遊憩用地。
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
                <div className="font-bold text-[#1F3864] flex items-center gap-1.5">
                  <span className="text-xs bg-[#8C5A4B]/10 text-[#8C5A4B] px-1.5 py-0.5 rounded font-bold">
                    （3）
                  </span>
                  <span>地政局受理分區及使用地變更編定審查</span>
                </div>
                <p className="text-[#333333] pl-6 leading-relaxed">
                  取得開發許可文件後檢具變更編定申請書及開發許可等相關文件，向<strong>新北市政府地政局</strong>申請辦理分區及使用地變更，地政局受理後審查，經會審城鄉發展局及農業局等相關單位意見後，依開發許可核准之開發計畫，核准辦理變更分區及使用地變更編定。
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1">
                <div className="font-bold text-[#1F3864] flex items-center gap-1.5">
                  <span className="text-xs bg-[#8C5A4B]/10 text-[#8C5A4B] px-1.5 py-0.5 rounded font-bold">
                    （4）
                  </span>
                  <span>保育綠地配置不得少於 30%（管制規則第 44 條）</span>
                </div>
                <p className="text-[#333333] pl-6 leading-relaxed">
                  另依管制規則第 44 條規定，申請變更編定為遊憩用地者，其事業計畫必須配置必要之保育綠地及公共設施，<strong className="text-emerald-800">設置之保育綠地不得少於變更編定面積 30%</strong>，且變更編定為國土保安用地，公共設施則俟興建完竣經勘驗合格後，依核定之土地使用計畫，變更編定為適當用地。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 四、未來國土計畫使用管制規定 */}
      {/* ================================================================= */}
      <section id="sports-sec-5" className="space-y-5 pt-4">
        <div className="flex items-center justify-between border-b-2 border-[#1F3864] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F3864] text-white text-sm font-bold flex items-center justify-center shrink-0">
              五
            </span>
            <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
              四、未來國土計畫使用管制規定
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCopyText(
                `四、未來國土計畫使用管制規定\n` +
                  `（一）依據國土計畫法第 22 條第 1 項規定：「直轄市、縣（市）國土計畫公告實施後，應由各該主管機關依各級國土計畫國土功能分區之劃設內容，製作國土功能分區圖及編定適當使用地，並實施管制。」及第 23 條第 2 項規定：「國土功能分區及其分類之使用地類別編定、變更、規模、可建築用地及其強度、應經申請同意使用項目、條件、程序、免經申請同意使用項目、禁止或限制使用及其他應遵行之土地使用管制事項之規則，由中央主管機關定之。……」爰按國土計畫法第 21 條國土功能分區及其分類之土地使用原則、全國國土計畫第九章土地使用指導事項之指導，訂定「國土計畫土地使用管制規則」。\n\n` +
                  `（二）依國土計畫使用管制規則第 3 條第 1 項：「各國土功能分區及其分類土地，於依本法核准使用同意、使用許可或由既有合法可建築用地變更為非可建築用地前，按本規則施行日前土地登記簿所載之使用地類別註記，並依本法第二十三條第二項至第四項所定管制規則規定之土地使用管制內容使用。」及第 4 條：「各國土功能分區及其分類土地，除本規則另有規定者外，其免經申請同意、應經申請同意、禁止或限制之使用項目及其細目依下列規定，並應符合各目的事業主管法令規定：一、國土保育地區、農業發展地區及城鄉發展地區各分類土地，依附表一規定。二、海洋資源地區各分類土地，依附表二規定。附表一及附表二容許使用項目及其細目之適用範圍，由中央主管機關會商中央目的事業主管機關認定。」，涉及運動場館、高爾夫球場相關規定整理如下：\n\n` +
                  `依前開使用容許表所載，\n` +
                  `1. 營業處所之使用細目「健身服務設施」，於依第三條第一項規定註記甲、乙、丙種建築用地均可免經申請同意使用，註記丁種建築用地則得在國 1、國 2、農 1、農 2、農 3 經申請同意使用，農 4、城 2-1、城 3 則均得經申請同意使用。\n` +
                  `2. 運動或遊憩設施之使用細目「球場」、「溜冰場」、「游泳池」、「野外健身訓練設施」、「綜合體育場」、「運動場館及其附屬設施」、「其他運動或遊憩設施」，於依第三條第一項規定註記乙、丙種建築用地、遊憩用地、特定目的事業用地均可免經申請同意使用，註記丁種建築用地則得在國 1、國 2、農 1、農 2、農 3 經申請同意使用，農 4、城 2-1、城 3 則均得經申請同意使用。\n` +
                  `3. 運動或遊憩設施之使用細目「高爾夫球場與其附屬建築物及設施」，除城 2-1、城 3 得經申請同意使用，其餘均禁止使用。`,
                '國土計畫管制規定'
              )
            }
            className="flex items-center gap-1 text-xs text-[#8C5A4B] hover:text-[#1F3864] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-colors cursor-pointer font-bold"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>複製國土計畫</span>
          </button>
        </div>

        {/* （一）國土計畫法依據 */}
        <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">
              （一）
            </span>
            <h3 className="font-bold text-sm sm:text-base text-[#1F3864]">
              國土計畫法第 22 條第 1 項及第 23 條第 2 項規定
            </h3>
          </div>
          <div className="text-[#333333] pl-3 border-l-2 border-[#1F3864]/40 leading-relaxed space-y-2">
            <p>
              依據國土計畫法第 22 條第 1 項規定：「直轄市、縣（市）國土計畫公告實施後，應由各該主管機關依各級國土計畫國土功能分區之劃設內容，製作國土功能分區圖及編定適當使用地，並實施管制。」
            </p>
            <p>
              及第 23 條第 2 項規定：「國土功能分區及其分類之使用地類別編定、變更、規模、可建築用地及其強度、應經申請同意使用項目、條件、程序、免經申請同意使用項目、禁止或限制使用及其他應遵行之土地使用管制事項之規則，由中央主管機關定之。……」
            </p>
            <p className="text-[#7D7065]">
              爰按國土計畫法第 21 條國土功能分區及其分類之土地使用原則、全國國土計畫第九章土地使用指導事項之指導，訂定「國土計畫土地使用管制規則」。
            </p>
          </div>
        </div>

        {/* （二）國土計畫使用管制規則第 3 條與第 4 條規定 */}
        <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-2 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">
              （二）
            </span>
            <h3 className="font-bold text-sm sm:text-base text-[#1F3864]">
              國土計畫土地使用管制規則第 3 條第 1 項及第 4 條規定
            </h3>
          </div>
          <div className="text-[#333333] pl-3 border-l-2 border-[#8C5A4B]/40 leading-relaxed space-y-2">
            <p>
              依國土計畫使用管制規則第 3 條第 1 項：「各國土功能分區及其分類土地，於依本法核准使用同意、使用許可或由既有合法可建築用地變更為非可建築用地前，按本規則施行日前土地登記簿所載之使用地類別註記，並依本法第二十三條第二項至第四項所定管制規則規定之土地使用管制內容使用。」
            </p>
            <p>
              及第 4 條：「各國土功能分區及其分類土地，除本規則另有規定者外，其免經申請同意、應經申請同意、禁止或限制之使用項目及其細目依下列規定，並應符合各目的事業主管法令規定：一、國土保育地區、農業發展地區及城鄉發展地區各分類土地，依附表一規定。二、海洋資源地區各分類土地，依附表二規定。附表一及附表二容許使用項目及其細目之適用範圍，由中央主管機關會商中央目的事業主管機關認定。」，涉及運動場館、高爾夫球場相關規定整理如下：
            </p>
          </div>
        </div>

        {/* 容許使用情形表 */}
        <div className="space-y-3 pt-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-bold text-sm sm:text-base text-[#1F3864] flex items-center gap-2">
              <Table className="w-4 h-4 text-[#8C5A4B]" />
              <span>國土保育地區、農業發展地區、城鄉發展地區容許使用情形表</span>
            </h3>
            <span className="text-xs text-[#7D7065]">
              👉 支援左右滑動檢視完整 10 大功能分區管制代號
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DDD5C7] shadow-2xs bg-white">
            <table className="w-full text-center border-collapse text-xs">
              <thead>
                <tr className="bg-[#1F3864] text-white">
                  <th className="py-2 px-2 font-bold border-r border-white/20 whitespace-nowrap w-12 text-left">
                    群組
                  </th>
                  <th className="py-2 px-2 font-bold border-r border-white/20 whitespace-nowrap w-16 text-left">
                    使用項目
                  </th>
                  <th className="py-2 px-3 font-bold border-r border-white/20 min-w-[140px] text-left">
                    使用細目
                  </th>
                  <th className="py-2 px-2 font-bold border-r border-white/20 min-w-[36px]">國1</th>
                  <th className="py-2 px-2 font-bold border-r border-white/20 min-w-[36px]">國2</th>
                  <th className="py-2 px-2 font-bold border-r border-white/20 min-w-[36px]">農1</th>
                  <th className="py-2 px-2 font-bold border-r border-white/20 min-w-[36px]">農2</th>
                  <th className="py-2 px-2 font-bold border-r border-white/20 min-w-[36px]">農3</th>
                  <th className="py-2 px-2 font-bold border-r border-white/20 min-w-[44px]">
                    農4<br /><span className="text-[10px] font-normal">(非原)</span>
                  </th>
                  <th className="py-2 px-2 font-bold border-r border-white/20 min-w-[44px]">
                    農4<br /><span className="text-[10px] font-normal">(原)</span>
                  </th>
                  <th className="py-2 px-2 font-bold border-r border-white/20 min-w-[40px]">城2-1</th>
                  <th className="py-2 px-2 font-bold border-r border-white/20 min-w-[36px]">城3</th>
                  <th className="py-2 px-3 font-bold text-left min-w-[220px]">
                    備註
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C7]">
                {/* 健身服務設施 */}
                <tr className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-2.5 px-2 text-left font-bold text-[#1F3864] bg-[#FAF7F2]/60 border-r border-[#DDD5C7]">
                    住
                  </td>
                  <td className="py-2.5 px-2 text-left text-[#333333] border-r border-[#DDD5C7]">
                    營業處所
                  </td>
                  <td className="py-2.5 px-3 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7]">
                    健身服務設施
                  </td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-3 text-left border-[#DDD5C7] text-[11px] leading-tight space-y-1">
                    <p>① 限於依第三條第一項規定註記之甲種建築用地、乙種建築用地、丙種建築用地</p>
                    <p>② 限於依第三條第一項規定註記之丁種建築用地</p>
                  </td>
                </tr>

                {/* 球場 */}
                <tr className="hover:bg-[#FAF7F2] transition-colors">
                  <td rowSpan={8} className="py-2.5 px-2 text-left font-bold text-[#8C5A4B] bg-[#FAF7F2]/60 border-r border-[#DDD5C7] align-top">
                    觀光
                  </td>
                  <td rowSpan={8} className="py-2.5 px-2 text-left text-[#333333] border-r border-[#DDD5C7] align-top">
                    運動或遊憩設施
                  </td>
                  <td className="py-2.5 px-3 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7]">
                    球場
                  </td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td rowSpan={7} className="py-2.5 px-3 text-left border-[#DDD5C7] text-[11px] leading-tight space-y-1 align-top bg-[#FAF7F2]/30">
                    <p>① 限於依第三條第一項規定註記之乙種建築用地、丙種建築用地、遊憩用地、特定目的事業用地</p>
                    <p>② 限於依第三條第一項規定註記之丁種建築用地</p>
                  </td>
                </tr>

                {/* 溜冰場 */}
                <tr className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-2.5 px-3 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7]">
                    溜冰場
                  </td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                </tr>

                {/* 游泳池 */}
                <tr className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-2.5 px-3 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7]">
                    游泳池
                  </td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                </tr>

                {/* 野外健身訓練設施 */}
                <tr className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-2.5 px-3 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7]">
                    野外健身訓練設施
                  </td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                </tr>

                {/* 綜合運動場 */}
                <tr className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-2.5 px-3 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7]">
                    綜合運動場
                  </td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                </tr>

                {/* 運動場館及其附屬設施 */}
                <tr className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-2.5 px-3 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7]">
                    運動場館及其附屬設施
                  </td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                </tr>

                {/* 其他運動或遊憩設施 */}
                <tr className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-2.5 px-3 text-left font-bold text-[#1F3864] border-r border-[#DDD5C7]">
                    其他運動或遊憩設施
                  </td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium">①<br />②</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] leading-tight font-medium text-emerald-700">①<br />○</td>
                </tr>

                {/* 高爾夫球場與其附屬建築物及設施 */}
                <tr className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-2.5 px-3 text-left font-bold text-[#8C5A4B] border-r border-[#DDD5C7]">
                    高爾夫球場與其附屬建築物及設施
                  </td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">Ø</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">Ø</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">Ø</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">Ø</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">Ø</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">Ø</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-rose-700">Ø</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2.5 px-1 border-r border-[#DDD5C7] font-bold text-emerald-700">○</td>
                  <td className="py-2.5 px-3 text-left border-[#DDD5C7] text-[11px] text-[#7D7065]">
                    —
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 表格符號說明 */}
          <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] text-xs space-y-1.5">
            <span className="font-bold text-[#1F3864]">符號註記說明：</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[#4A3E39]">
              <p>
                <strong className="text-[#1F3864]">1. ①</strong> 代表符合備註欄位①之條件者，得免經申請同意使用，未符合者禁止使用。
              </p>
              <p>
                <strong className="text-emerald-800">2. ○</strong> 代表應經申請同意使用。
              </p>
              <p>
                <strong className="text-[#8C5A4B]">3. ②</strong> 代表符合備註欄位②之條件者，得應經申請同意使用，未符合者禁止使用。
              </p>
              <p>
                <strong className="text-rose-700">4. Ø</strong> 代表禁止使用。
              </p>
            </div>
          </div>
        </div>

        {/* 依前開使用容許表所載（3 大點分析解說） */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#DDD5C7] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ECE6DB]">
            <CheckCircle2 className="w-4 h-4 text-[#1F3864]" />
            <h3 className="font-bold text-sm sm:text-base text-[#1F3864]">
              依前開使用容許表所載：
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1.5">
              <span className="font-bold text-[#1F3864] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs flex items-center justify-center font-bold">
                  1
                </span>
                <span>健身服務設施之使用細目管制</span>
              </span>
              <p className="text-[#333333] pl-6 leading-relaxed">
                營業處所之使用細目「<strong>健身服務設施</strong>」，於依第三條第一項規定註記<strong>甲、乙、丙種建築用地均可免經申請同意使用</strong>，註記<strong>丁種建築用地</strong>則得在<strong>國 1、國 2、農 1、農 2、農 3 經申請同意使用</strong>，<strong>農 4、城 2-1、城 3 則均得經申請同意使用</strong>。
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1.5">
              <span className="font-bold text-[#1F3864] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#1F3864] text-white text-xs flex items-center justify-center font-bold">
                  2
                </span>
                <span>各類運動或遊憩設施之使用細目管制</span>
              </span>
              <p className="text-[#333333] pl-6 leading-relaxed">
                運動或遊憩設施之使用細目「<strong>球場</strong>」、「<strong>溜冰場</strong>」、「<strong>游泳池</strong>」、「<strong>野外健身訓練設施</strong>」、「<strong>綜合體育場</strong>」、「<strong>運動場館及其附屬設施</strong>」、「<strong>其他運動或遊憩設施</strong>」，於依第三條第一項規定註記<strong>乙、丙種建築用地、遊憩用地、特定目的事業用地均可免經申請同意使用</strong>，註記<strong>丁種建築用地</strong>則得在<strong>國 1、國 2、農 1、農 2、農 3 經申請同意使用</strong>，<strong>農 4、城 2-1、城 3 則均得經申請同意使用</strong>。
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#DDD5C7] space-y-1.5">
              <span className="font-bold text-[#8C5A4B] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#8C5A4B] text-white text-xs flex items-center justify-center font-bold">
                  3
                </span>
                <span>高爾夫球場與其附屬建築物及設施之使用細目管制</span>
              </span>
              <p className="text-[#333333] pl-6 leading-relaxed">
                運動或遊憩設施之使用細目「<strong>高爾夫球場與其附屬建築物及設施</strong>」，<strong className="text-emerald-800">除城 2-1、城 3 得經申請同意使用</strong>，<strong className="text-rose-700">其餘均禁止使用</strong>。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
