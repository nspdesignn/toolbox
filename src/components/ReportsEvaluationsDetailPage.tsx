import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
  FileText,
  Copy,
  Check,
  ChevronRight,
  PhoneCall,
  Building2,
  Layers,
  Award,
  Radar,
  ShieldCheck,
  ArrowRight,
  Maximize2,
  X,
  Users,
  MessageSquareQuote,
  FileCheck,
  Sparkles,
  Scale,
  Landmark
} from 'lucide-react';

interface ReportsEvaluationsDetailPageProps {
  onBack: () => void;
}

// 跨局處開會意見標準全文範本
const publicLandMeetingRawText = `一、公有土地涉及變更編定、更正編定：
1.變更編定：
(1)本案倘符合變更編定執行要點第10點規定略以：「需用土地人申請徵收或撥用土地計畫書內敘明請求一併准予變更編定者，直轄市或縣（市）政府在接到核准徵收或撥用案件時，經審查申請變更編定標的符合本規則及本要點相關規定者，應依徵收或撥用土地使用性質逕為核准變更編定為適當使用地及辦理異動程序。…」，原則可循簡化變更編定程序，提供撥用不動產計畫書、奉准興辦事業文件、變更前目的事業主管機關 (林業用地需檢附農業部同意函)、62項環境敏感區查詢確認無禁限建文件、山坡地免受10公頃限制文件，向本局申請變更編定為「特定目的事業用地」。 
(2)倘非屬前開可循簡化程序辦理者，除上開文件外，如土地為法定山坡地範圍，需另檢附水土保持完工證明(或符合非都市土地使用管制規則第48條但書規定)後，來函向本局申請變更編定為「特定目的事業用地」。
(3)如土地上係非屬建物性質之設施物，符合內政部94年8月19日內授中辦地字第0940050400號函釋，構造用途特殊，非屬建築法第7條所稱之雜項工作物者（如自來水公司設置之淨水場、配合池、取水口工程用地或台灣電力股份有限公司設置之輸配電鐵塔……等），考量其屬公共建設需要，且土地使用開發衝擊性較低，得免依非都市土地變更編定執行要點規定辦理62項環境敏感區查詢。
2.更正編定：請檢附70年2月15日編定前是否已核准活動中心興建計畫及核准之地號、面積及範圍，並取得土地所有權人更正編定同意書，向本局申請更正編定為「特定目的事業用地」。`;

const privateLandMeetingRawText = `二、私有土地涉及變更編定、開發許可：
1.經查貴局檢送相關地號清冊，本案OO區OO段O地號等OO筆土地係屬森林區OO用地，面積共166公頃，現況仍應依非都市土地使用管制規則第6條第3項附表一規定，依其容許使用之項目及許可使用細目使用。
2.另查本案土地皆位於區域計畫劃定之森林區，屬第一級環境敏感地區，依非都市土地使用管制規則(下稱管制規則)第30-1條規定：「…興辦事業計畫不得位於區域計畫規定之第一級環境敏感地區。但有下列情形之一者，不在此限：一、屬內政部會商中央目的事業主管機關認定由政府興辦之公共設施或公用事業，且經各項第一級環境敏感地區之中央法令規定之目的事業主管機關同意興辦。二、為整體規劃需要，不可避免夾雜之零星土地符合第三十條之二規定者，得納入範圍，並應維持原地形地貌不得開發使用。三、依各項第一級環境敏感地區之中央目的事業主管法令明定得許可或同意開發。四、屬優良農地，供農業生產及其必要之產銷設施使用，經農業主管機關認定符合農業發展所需，且不影響農業生產環境及農地需求總量。五、位於水庫集水區（供家用或供公共給水）非屬與水資源保育直接相關之環境敏感地區範圍，且該水庫集水區經水庫管理機關（構）擬訂水庫集水區保育實施計畫，開發行為不影響該保育實施計畫之執行。…」，本案若有符合上開規定，應擬具興辦事業計畫向變更後目的事業主管機關申請並取得核准文件後，依管制規則第28條規定向本局申請使用地變更編定事宜。另倘本案後續開發已達管制規則第11條規定應辦理土地使用分區變更之開發規模，應依區域計畫法第15條之1及管制規則等相關規定洽新北市政府城鄉發展局申請開發許可取得同意後，向本局申請土地使用分區及使用地變更編定事宜。
3.另依管制規則第52-1條：「申請人擬具之興辦事業計畫土地位屬山坡地範圍內者，其面積不得少於十公頃。但有下列情形之一者，不在此限：……」，倘本案申請開發建築面積未達10公頃者，應檢附開發面積免受限制文件。`;

const allMeetingOpinionsRawText = `${publicLandMeetingRawText}\n\n${privateLandMeetingRawText}`;

export const ReportsEvaluationsDetailPage: React.FC<ReportsEvaluationsDetailPageProps> = ({ onBack }) => {
  // 6 個主要分頁（含跨局處開會意見）
  const [activeTab, setActiveTab] = useState<
    'half-yearly' | 'illegal-reports' | 'variation-points' | 'district-evaluation' | 'nlma-evaluation' | 'meeting-opinions'
  >('half-yearly');

  // 跨局處開會意見分類篩選
  const [meetingFilter, setMeetingFilter] = useState<'all' | 'public' | 'private'>('all');

  // 地用半年報內部檢視（已依指示刪除「四大核心報表清單」分頁）：
  // 1. 辦理流程（7大步驟）
  // 2. 內政部統計系統操作畫面與步驟
  // 3. 新北市統計報送系統操作畫面與步驟
  const [halfYearlySubSection, setHalfYearlySubSection] = useState<'flow' | 'nlma-system' | 'ntpc-system'>('flow');

  // 圖片放大檢視 Modal
  const [zoomImage, setZoomImage] = useState<{ src: string; title: string } | null>(null);

  // 一鍵複製提示
  const [copiedTip, setCopiedTip] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedTip(`已複製「${label}」！`);
    setTimeout(() => setCopiedTip(null), 2500);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* 複製成功提示 Toast */}
      {copiedTip && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1F3864] text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-sm font-semibold animate-fade-in border border-[#DDD5C7]/30">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{copiedTip}</span>
        </div>
      )}

      {/* 圖片大圖檢視 Modal */}
      {zoomImage && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-gray-200">
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#1F3864] text-white">
              <span className="font-bold text-sm sm:text-base flex items-center gap-2">
                <span>📸</span>
                <span>{zoomImage.title}</span>
              </span>
              <button
                type="button"
                onClick={() => setZoomImage(null)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors cursor-pointer text-white"
                title="關閉"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-3 sm:p-5 overflow-auto flex-1 flex items-center justify-center bg-[#FAF7F2]">
              <img
                src={zoomImage.src}
                alt={zoomImage.title}
                className="max-w-full max-h-[78vh] object-contain rounded-lg shadow-md border border-[#DDD5C7]"
              />
            </div>
          </div>
        </div>
      )}

      {/* 頂部標題區 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm sm:text-base font-semibold text-[#4A3E39] bg-[#F5EFE7] hover:bg-[#EAE2D7] border border-[#DDD5C7] rounded-xl transition-colors cursor-pointer shrink-0 whitespace-nowrap shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">返回業務選單</span>
            </button>
            <div className="h-6 w-px bg-[#DDD5C7] shrink-0" />
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl font-serif-tc font-semibold text-[#1F3864]">
                報表、考核、會議
              </h1>
              <p className="text-sm sm:text-base text-[#5B584E] mt-0.5">
                地用半年報、違規報表、變異點查處、公所與國土署考核、跨局處開會意見作業指引
              </p>
            </div>
          </div>
        </div>

        {/* 6 個功能分頁標籤按鈕 */}
        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-[#ECE6DB] overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('half-yearly')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'half-yearly'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>地用半年報</span>
          </button>

          <button
            onClick={() => setActiveTab('illegal-reports')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'illegal-reports'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>違規報表</span>
          </button>

          <button
            onClick={() => setActiveTab('variation-points')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'variation-points'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Radar className="w-4 h-4" />
            <span>變異點</span>
          </button>

          <button
            onClick={() => setActiveTab('district-evaluation')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'district-evaluation'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>公所考核</span>
          </button>

          <button
            onClick={() => setActiveTab('nlma-evaluation')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'nlma-evaluation'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>國土署考核</span>
          </button>

          <button
            onClick={() => setActiveTab('meeting-opinions')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'meeting-opinions'
                ? 'bg-[#1F3864] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>跨局處開會意見</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 分頁 1：地用半年報（依附件《地用半年報.pdf》建置） */}
      {/* ========================================================================= */}
      {activeTab === 'half-yearly' && (
        <div className="space-y-6">
          {/* 一、關鍵時程與重要提醒卡片 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#ECE6DB]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] flex items-center justify-center text-[#8C5A4B]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                    地用半年報作業時程與重要時限
                  </h2>
                  <p className="text-xs sm:text-sm text-[#7D7065]">
                    115 年 10 月版（新版系統仍未完善，還沒辦理教育訓練，請務必依下方指引辦理）
                  </p>
                </div>
              </div>

              {/* 承辦諮詢電話快捷 */}
              <div className="flex items-center gap-2 text-xs bg-[#FAF7F2] px-3 py-2 rounded-xl border border-[#DDD5C7] text-[#4A3E39]">
                <PhoneCall className="w-4 h-4 text-[#8C5A4B] shrink-0" />
                <span>
                  新版系統承辦諮詢：<strong>黃士銓</strong>(分機 162)、<strong>吳炳武</strong>(分機 123)
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy('02-27485209', '國土署統計系統電話')}
                  title="複製電話"
                  className="p-1 hover:bg-[#EAE2D7] rounded text-[#8C5A4B] cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 關鍵時程 4 欄卡片 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
              {/* 上半年區間 */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1F3864] text-white">
                    上半年報
                  </span>
                  <span className="text-xs text-[#7D7065] font-medium">1 ~ 6 月統計</span>
                </div>
                <div className="space-y-1 text-xs sm:text-sm text-[#4A3E39]">
                  <div>📅 <strong>發文地所：</strong>6/28 左右</div>
                  <div>📥 <strong>請地所上傳：</strong>7/5 前</div>
                  <div className="text-[#8C5A4B] font-bold">⏰ <strong>系統確認截止：</strong>7/15 前</div>
                  <div className="text-rose-700 font-bold">🏁 <strong>報送完成：</strong>7 月底前</div>
                </div>
              </div>

              {/* 下半年區間 */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#8C5A4B] text-white">
                    下半年報
                  </span>
                  <span className="text-xs text-[#7D7065] font-medium">7 ~ 12 月統計</span>
                </div>
                <div className="space-y-1 text-xs sm:text-sm text-[#4A3E39]">
                  <div>📅 <strong>發文地所：</strong>12/28 左右</div>
                  <div>📥 <strong>請地所上傳：</strong>1/5 前</div>
                  <div className="text-[#8C5A4B] font-bold">⏰ <strong>系統確認截止：</strong>1/15 前</div>
                  <div className="text-rose-700 font-bold">🏁 <strong>報送完成：</strong>1 月底前</div>
                </div>
              </div>

              {/* 報表總量防呆 */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#4A3E39] text-white">
                    報表檔案量
                  </span>
                  <span className="text-xs text-[#7D7065] font-medium">總計 116 份</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                  新北市共 <strong>29 個行政區</strong>，每區有 <strong>4 張報表</strong>，由內政部系統下載共計 <strong>116 個 Excel 檔案</strong>！
                </p>
              </div>

              {/* 帳號防呆提醒 */}
              <div className="p-4 rounded-xl bg-[#FFF5F5] border border-[#FECACA] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-xs font-bold bg-rose-700 text-white flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    <span>帳號注意</span>
                  </span>
                  <span className="text-xs text-rose-600 font-bold">90 天停用機制</span>
                </div>
                <p className="text-xs text-rose-800 leading-relaxed font-medium">
                  第一次承辦者請<strong>提早申請帳號</strong>；系統<strong>超過 90 天未登錄會被自動停用</strong>，報送期前請提早確認帳號狀態！
                </p>
              </div>
            </div>
          </div>

          {/* 子功能切換導覽按鈕（已刪除「二、三、四、」前綴編號，並刪除第四分頁） */}
          <div className="flex items-center gap-2 bg-[#FAF7F2] p-1.5 rounded-2xl border-2 border-[#DDD5C7] flex-wrap">
            <button
              type="button"
              onClick={() => setHalfYearlySubSection('flow')}
              className={`flex-1 min-w-[150px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                halfYearlySubSection === 'flow'
                  ? 'bg-[#1F3864] text-white shadow-xs'
                  : 'text-[#4A3E39] hover:bg-white/60'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>辦理流程（7大步驟）</span>
            </button>

            <button
              type="button"
              onClick={() => setHalfYearlySubSection('nlma-system')}
              className={`flex-1 min-w-[170px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                halfYearlySubSection === 'nlma-system'
                  ? 'bg-[#1F3864] text-white shadow-xs'
                  : 'text-[#4A3E39] hover:bg-white/60'
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>內政部統計系統操作畫面與步驟</span>
            </button>

            <button
              type="button"
              onClick={() => setHalfYearlySubSection('ntpc-system')}
              className={`flex-1 min-w-[170px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                halfYearlySubSection === 'ntpc-system'
                  ? 'bg-[#1F3864] text-white shadow-xs'
                  : 'text-[#4A3E39] hover:bg-white/60'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>新北市統計報送系統操作畫面與步驟</span>
            </button>
          </div>

          {/* 區塊 1：辦理流程 7 大步驟 */}
          {halfYearlySubSection === 'flow' && (
            <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ECE6DB] gap-2">
                <div>
                  <h3 className="text-xl font-serif-tc font-bold text-[#1F3864]">
                    辦理流程（完整 7 大步驟對照表）
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                    115 年 10 月版作業指引｜包含前置作業、公文系統核對、內政部系統檢核與新北市系統陳核送出
                  </p>
                </div>
                <div className="text-xs text-[#8C5A4B] font-bold bg-[#FAF7F2] px-3 py-1.5 rounded-lg border border-[#DDD5C7]">
                  ★ 注意：不用紙本陳核（會計室不收）
                </div>
              </div>

              {/* 流程步驟表格 */}
              <div className="overflow-x-auto rounded-xl border-2 border-[#DDD5C7]">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#1F3864] text-white">
                      <th className="p-3 text-center w-14 shrink-0">流程</th>
                      <th className="p-3 w-32 sm:w-44">項目</th>
                      <th className="p-3">作業內容與注意事項</th>
                      <th className="p-3 w-28 sm:w-36 text-center">關鍵時點 / 系統</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DDD5C7] bg-white">
                    {/* Step 1 */}
                    <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                      <td className="p-3 text-center font-bold text-base text-[#8C5A4B] bg-[#FAF7F2]">
                        1
                      </td>
                      <td className="p-3 font-bold text-[#1F3864]">
                        辦帳號(內政部系統)
                        <div className="text-xs font-normal text-[#7D7065] mt-0.5">
                          第一次申請辦理者，要提早先申請帳號
                        </div>
                      </td>
                      <td className="p-3 space-y-1.5 text-[#4A3E39] leading-relaxed">
                        <div>
                          1. 參考國土署提供附件《使用者系統帳號申請、操作說明.pdf》。
                        </div>
                        <div className="text-rose-700 font-semibold flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          <span>2. <strong>90 天未登錄會被停用</strong>，務必提早測試登入！</span>
                        </div>
                      </td>
                      <td className="p-3 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-[#FAF7F2] text-[#4A3E39] border border-[#DDD5C7]">
                          前置作業
                        </span>
                      </td>
                    </tr>

                    {/* Step 2 */}
                    <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                      <td className="p-3 text-center font-bold text-base text-[#8C5A4B] bg-[#FAF7F2]">
                        2
                      </td>
                      <td className="p-3 font-bold text-[#1F3864]">
                        發文地所
                        <div className="text-xs font-normal text-[#7D7065] mt-0.5">
                          提早發文給地所，提醒要上傳內政部系統
                        </div>
                      </td>
                      <td className="p-3 space-y-1.5 text-[#4A3E39] leading-relaxed">
                        <div>
                          1. <strong>發文提醒地所時間：</strong>上半年 <strong>6/28 左右</strong>、下半年 <strong>12/28 左右</strong>。
                        </div>
                        <div>
                          2. <strong>請地所上傳系統時間：</strong>上半年 <strong>7/5</strong>、下半年 <strong>1/5</strong>。
                        </div>
                      </td>
                      <td className="p-3 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-300">
                          6/28 · 12/28
                        </span>
                      </td>
                    </tr>

                    {/* Step 3 */}
                    <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                      <td className="p-3 text-center font-bold text-base text-[#8C5A4B] bg-[#FAF7F2]">
                        3
                      </td>
                      <td className="p-3 font-bold text-[#1F3864]">
                        檢核
                        <div className="text-xs font-normal text-[#7D7065] mt-0.5">
                          地所陸續上傳後，陸續檢核數據是否正確
                        </div>
                      </td>
                      <td className="p-3 space-y-1.5 text-[#4A3E39] leading-relaxed">
                        <div>
                          1. <strong>核對公文系統：</strong>要撈公文系統、案件列管表統計這半年變更編定「異動」的數據，應該要跟地所報送的數據一樣。
                        </div>
                        <div>
                          2. <strong>筆數與面積：</strong>筆數為整數、面積<strong>單位統一為公頃（小數點後 6 碼）</strong>，通常確認 <span className="font-mono font-bold text-[#1F3864]">11920-03-04-2</span>、<span className="font-mono font-bold text-[#1F3864]">11920-03-05-2</span>、<span className="font-mono font-bold text-[#1F3864]">11920-03-06-2</span> 表。
                        </div>
                        <div>
                          3. <strong>記案筆記：</strong>最好把每一案的文號、異動筆數、面積記下來，方便快速核對。
                        </div>
                        <div className="text-xs bg-[#FAF7F2] p-2 rounded-lg border border-[#DDD5C7] text-[#5A4B43]">
                          📞 系統操作疑問請洽新版統計系統承辦窗口：<strong>黃士銓</strong>（電話：02-27485209 分機 162）或 <strong>吳炳武</strong>（電話：02-27485209 分機 123）。
                        </div>
                      </td>
                      <td className="p-3 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-800 border border-sky-300">
                          內政部系統
                        </span>
                      </td>
                    </tr>

                    {/* Step 4 */}
                    <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                      <td className="p-3 text-center font-bold text-base text-[#8C5A4B] bg-[#FAF7F2]">
                        4
                      </td>
                      <td className="p-3 font-bold text-[#1F3864]">
                        完成
                        <div className="text-xs font-normal text-[#7D7065] mt-0.5">
                          檢核完成
                        </div>
                      </td>
                      <td className="p-3 space-y-1.5 text-[#4A3E39] leading-relaxed">
                        <div className="font-bold text-rose-800 bg-rose-50 p-2 rounded-lg border border-rose-200">
                          ★ 不用紙本陳核（會計室不收），內政部系統不用報送，只要確認地所上傳數據無誤即可。
                        </div>
                        <div>
                          要在 15 號前確認完成（上半年 <strong>7/15 前</strong>、下半年 <strong>1/15 前</strong>）。
                        </div>
                      </td>
                      <td className="p-3 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-300">
                          7/15 · 1/15
                        </span>
                      </td>
                    </tr>

                    {/* Step 5 */}
                    <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                      <td className="p-3 text-center font-bold text-base text-[#8C5A4B] bg-[#FAF7F2]">
                        5
                      </td>
                      <td className="p-3 font-bold text-[#1F3864]">
                        上傳新北市統計系統
                        <div className="text-xs font-normal text-[#7D7065] mt-0.5">
                          到公務雲的新北市統計報送系統上傳
                        </div>
                      </td>
                      <td className="p-3 space-y-2 text-[#4A3E39] leading-relaxed">
                        <div className="text-xs text-[#8C5A4B] font-bold">
                          1. 新系統改版後非常麻煩。
                        </div>
                        <div>
                          2. 先在內政部系統下載 29 個行政區的 excel 表（有 4 張表，所以總共要下載 116 個 excel 檔案）。
                        </div>
                        <div>
                          3. 到公務雲的公務統計行政管理系統下載空白的 4 張表。
                        </div>
                        <div className="p-2.5 bg-[#FFFBEB] rounded-lg border border-[#FDE68A] text-amber-900 font-medium">
                          4. 把內政部系統下載的各區數據複製貼上到新北市空白的 4 張表上。<br />
                          <strong>請注意：只要以純文字複製貼上到「各行政區」的表（不要貼到總計的欄位），因為其他表有公式會自動統計。</strong><br />
                          <span className="text-rose-700 font-bold">➔ 完成後至公務統計行政作業匯入填好的 excel。</span>
                        </div>
                        <div>
                          5. 填完後確認數據是否正確 ➔ 上傳。
                        </div>
                      </td>
                      <td className="p-3 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-300">
                          新北公務雲
                        </span>
                      </td>
                    </tr>

                    {/* Step 6 */}
                    <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                      <td className="p-3 text-center font-bold text-base text-[#8C5A4B] bg-[#FAF7F2]">
                        6
                      </td>
                      <td className="p-3 font-bold text-[#1F3864]">
                        陳核
                        <div className="text-xs font-normal text-[#7D7065] mt-0.5">
                          上傳完成後陳核給主管
                        </div>
                      </td>
                      <td className="p-3 space-y-1.5 text-[#4A3E39] leading-relaxed">
                        <div className="text-rose-700 font-bold bg-rose-50 px-2.5 py-1.5 rounded-lg border border-rose-200 inline-block">
                          ★ 一定要提醒主管去簽核！！（不然他們會不知道）
                        </div>
                        <div>
                          簽核流程通常是：<strong>你 ➔ 專員或股長 ➔ 科長 ➔ 會計室 ➔ 科長決行 ➔ 完成！</strong>
                        </div>
                        <div>
                          送出時需使用自然人憑證 IC 卡插卡並輸入 PIN 碼完成線上身分簽章。
                        </div>
                      </td>
                      <td className="p-3 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-300">
                          自然人憑證
                        </span>
                      </td>
                    </tr>

                    {/* Step 7 */}
                    <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                      <td className="p-3 text-center font-bold text-base text-[#8C5A4B] bg-[#FAF7F2]">
                        7
                      </td>
                      <td className="p-3 font-bold text-[#1F3864]">
                        完成
                        <div className="text-xs font-normal text-[#7D7065] mt-0.5">
                          月底前要報送完成
                        </div>
                      </td>
                      <td className="p-3 text-[#4A3E39] font-medium leading-relaxed">
                        上半年：<strong>7 月底前</strong>完成 ｜ 下半年：<strong>1 月底前</strong>完成！
                      </td>
                      <td className="p-3 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                          7月底 · 1月底
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 區塊 2：內政部統計系統操作畫面與步驟（已刪除「二、」前綴，並置入檔案截圖） */}
          {halfYearlySubSection === 'nlma-system' && (
            <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ECE6DB] gap-3">
                <div>
                  <h3 className="text-xl font-serif-tc font-bold text-[#1F3864]">
                    內政部統計系統操作畫面與步驟
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                    全國建築管理資訊系統入口網（公務統計系統）操作指引與截圖示範
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy('https://cloudbm.nlma.gov.tw/CPTL/', '內政部建管入口網網址')}
                    className="px-3 py-1.5 rounded-xl font-bold text-xs text-[#4A3E39] bg-[#FAF7F2] hover:bg-[#EAE2D7] border border-[#DDD5C7] transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製系統網址</span>
                  </button>
                  <a
                    href="https://cloudbm.nlma.gov.tw/CPTL/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl font-bold text-xs text-white bg-[#1F3864] hover:bg-[#152747] transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>開啟內政部入口網</span>
                  </a>
                </div>
              </div>

              {/* 圖片 1：入口網公務專區登錄與國土計畫統計 4 張表截圖 */}
              <div className="p-4 rounded-xl border-2 border-[#DDD5C7] bg-[#FAF7F2] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm sm:text-base text-[#1F3864]">
                    1. 全國建管入口網登錄 ➔ 2. 選國土計畫統計找到 4 張表
                  </div>
                  <button
                    type="button"
                    onClick={() => setZoomImage({ src: '/half_yearly_nlma_step1_2.svg', title: '內政部公務統計系統入口與國土計畫統計4張表' })}
                    className="flex items-center gap-1 text-xs text-[#8C5A4B] font-bold hover:underline cursor-pointer bg-white px-2 py-1 rounded border border-[#DDD5C7]"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>放大檢視</span>
                  </button>
                </div>

                <div
                  onClick={() => setZoomImage({ src: '/half_yearly_nlma_step1_2.svg', title: '內政部公務統計系統入口與國土計畫統計4張表' })}
                  className="rounded-xl overflow-hidden border border-[#DDD5C7] bg-white cursor-pointer hover:opacity-95 transition-opacity"
                >
                  <img
                    src="/half_yearly_nlma_step1_2.svg"
                    alt="內政部統計系統入口網與選單操作截圖"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed pt-1 space-y-1">
                  <div>
                    1. 到 <strong>全國建築管理資訊系統入口網</strong> (<code>https://cloudbm.nlma.gov.tw/CPTL/</code>) ➔ 點<strong>公務專區</strong> ➔ 登錄 ➔ 點<strong>公務統計系統</strong>。
                  </div>
                  <div>
                    2. 選<strong>國土計畫統計</strong> ➔ 找到 <strong>4 張表</strong>（先選其中一張）：
                    <span className="font-mono text-[#8C5A4B] font-bold ml-1">119200303、119200304、119200305、119200306</span>。
                  </div>
                </div>
              </div>

              {/* 圖片 2：查詢區間、29區已填報與 119200306 萬里區數據核對截圖 */}
              <div className="p-4 rounded-xl border-2 border-[#DDD5C7] bg-[#FAF7F2] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm sm:text-base text-[#1F3864]">
                    3. 查詢各區上傳資料 ➔ 4. 點「編輯正式資料」核對筆數與面積
                  </div>
                  <button
                    type="button"
                    onClick={() => setZoomImage({ src: '/half_yearly_nlma_step3_4.svg', title: '內政部各區數據查詢與119200306表單核對' })}
                    className="flex items-center gap-1 text-xs text-[#8C5A4B] font-bold hover:underline cursor-pointer bg-white px-2 py-1 rounded border border-[#DDD5C7]"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>放大檢視</span>
                  </button>
                </div>

                <div
                  onClick={() => setZoomImage({ src: '/half_yearly_nlma_step3_4.svg', title: '內政部各區數據查詢與119200306表單核對' })}
                  className="rounded-xl overflow-hidden border border-[#DDD5C7] bg-white cursor-pointer hover:opacity-95 transition-opacity"
                >
                  <img
                    src="/half_yearly_nlma_step3_4.svg"
                    alt="查詢各區上傳資料與數據檢核截圖"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 區塊 3：新北市統計報送系統操作畫面與步驟（已刪除「三、」前綴，加入匯入文字與置入檔案截圖） */}
          {halfYearlySubSection === 'ntpc-system' && (
            <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ECE6DB] gap-3">
                <div>
                  <h3 className="text-xl font-serif-tc font-bold text-[#1F3864]">
                    新北市統計報送系統操作畫面與步驟
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                    新北市公務雲公務統計行政管理系統操作指引與截圖示範
                  </p>
                </div>
                <div className="text-xs font-bold text-rose-800 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200">
                  ⚠️ 複製貼上切勿貼到「總計」欄位
                </div>
              </div>

              {/* 圖片 1：公務雲首頁 ➔ 常用應用程式 ➔ 報表編制及報送 ➔ 匯出空白報表 */}
              <div className="p-4 rounded-xl border-2 border-[#DDD5C7] bg-[#FAF7F2] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm sm:text-base text-[#1F3864]">
                    1. 至公務雲首頁 ➔ 2. 報表編制及報送作業 ➔ 3. 匯出空白報表
                  </div>
                  <button
                    type="button"
                    onClick={() => setZoomImage({ src: '/half_yearly_ntpc_step1_2_3.svg', title: '新北市公務雲入口與匯出空白4張報表' })}
                    className="flex items-center gap-1 text-xs text-[#8C5A4B] font-bold hover:underline cursor-pointer bg-white px-2 py-1 rounded border border-[#DDD5C7]"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>放大檢視</span>
                  </button>
                </div>

                <div
                  onClick={() => setZoomImage({ src: '/half_yearly_ntpc_step1_2_3.svg', title: '新北市公務雲入口與匯出空白4張報表' })}
                  className="rounded-xl overflow-hidden border border-[#DDD5C7] bg-white cursor-pointer hover:opacity-95 transition-opacity"
                >
                  <img
                    src="/half_yearly_ntpc_step1_2_3.svg"
                    alt="新北市公務雲系統路徑與匯出空白報表截圖"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed pt-1 space-y-1">
                  <div>
                    1. 至<strong>公務雲首頁</strong> ➔ 常用應用程式 ➔ <strong>公務統計行政管理系統</strong>。
                  </div>
                  <div>
                    2. <strong>公務統計行政作業</strong> ➔ <strong>公務統計報表編送作業</strong> ➔ <strong>報表編制及報送作業</strong>。
                  </div>
                  <div>
                    3. <strong>新增報表</strong> ➔ 找到 <span className="font-mono font-bold text-[#1F3864]">11920-03-03-2、11920-03-04-2、11920-03-05-2、11920-03-06-2</span> 這 4 張表，先點其中一張，按<strong>開啟系統報表</strong> ➔ <strong>匯出空白報表</strong>。
                  </div>
                </div>
              </div>

              {/* 圖片 2：Excel 純文字貼上示範（不要貼總計、完成後匯入） */}
              <div className="p-4 rounded-xl border-2 border-[#8C5A4B] bg-[#FFFBEB] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm sm:text-base text-[#92400E]">
                    4. 純文字貼上各行政區數據示範 ➔ 完成後匯入填好的 Excel
                  </div>
                  <button
                    type="button"
                    onClick={() => setZoomImage({ src: '/half_yearly_ntpc_step4_excel.svg', title: '新北市報表Excel純文字貼入各行政區表與匯入' })}
                    className="flex items-center gap-1 text-xs text-[#8C5A4B] font-bold hover:underline cursor-pointer bg-white px-2 py-1 rounded border border-[#DDD5C7]"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>放大檢視</span>
                  </button>
                </div>

                <div
                  onClick={() => setZoomImage({ src: '/half_yearly_ntpc_step4_excel.svg', title: '新北市報表Excel純文字貼入各行政區表與匯入' })}
                  className="rounded-xl overflow-hidden border border-[#FDE68A] bg-white cursor-pointer hover:opacity-95 transition-opacity"
                >
                  <img
                    src="/half_yearly_ntpc_step4_excel.svg"
                    alt="Excel純文字貼入各行政區表截圖示範"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-xs sm:text-sm text-[#78350F] leading-relaxed pt-1 space-y-1.5 font-medium">
                  <div>
                    4. 把內政部系統下載的「各行政區」數據複製貼上到新北市空白的 4 張表上，<strong className="text-[#0369a1] bg-sky-50 px-2 py-0.5 rounded border border-sky-200">完成後至公務統計行政作業匯入填好的 excel。</strong>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-[#FDE68A] space-y-1">
                    <div className="text-rose-700 font-bold">
                      ⚠️ 請注意：只要以「純文字」複製貼上到「各行政區」的表！
                    </div>
                    <div>• <strong>選行政區的表，不要選到地所</strong>（例如：新北市板橋區表）。</div>
                    <div>• <strong>貼至紅色框線內就好，不要貼到總計的欄位</strong>，因為公式會自己計算！</div>
                  </div>
                </div>
              </div>

              {/* 圖片 3：空值檢查 ➔ 報送及存檔 ➔ 自然人憑證 ➔ 提醒主管簽核 */}
              <div className="p-4 rounded-xl border-2 border-[#DDD5C7] bg-[#FAF7F2] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm sm:text-base text-[#1F3864]">
                    5. 空值檢查報送存檔 ➔ 6. 自然人憑證驗證與主管簽核鏈
                  </div>
                  <button
                    type="button"
                    onClick={() => setZoomImage({ src: '/half_yearly_ntpc_step5_6_submit.svg', title: '新北市系統報送送出、自然人憑證與簽核流程' })}
                    className="flex items-center gap-1 text-xs text-[#8C5A4B] font-bold hover:underline cursor-pointer bg-white px-2 py-1 rounded border border-[#DDD5C7]"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>放大檢視</span>
                  </button>
                </div>

                <div
                  onClick={() => setZoomImage({ src: '/half_yearly_ntpc_step5_6_submit.svg', title: '新北市系統報送送出、自然人憑證與簽核流程' })}
                  className="rounded-xl overflow-hidden border border-[#DDD5C7] bg-white cursor-pointer hover:opacity-95 transition-opacity"
                >
                  <img
                    src="/half_yearly_ntpc_step5_6_submit.svg"
                    alt="報送送出、自然人憑證與簽核流程截圖"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 分頁 2：違規報表（預留待提供詳細手冊） */}
      {/* ========================================================================= */}
      {activeTab === 'illegal-reports' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex items-center gap-3 pb-4 border-b border-[#ECE6DB]">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] flex items-center justify-center text-[#8C5A4B]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                違規報表
              </h2>
              <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                非都市土地違規使用查處成果定期報表（月報、季報、年度統計與裁罰收繳列管）
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] text-center space-y-3">
            <div className="inline-flex p-3 rounded-full bg-white border border-[#DDD5C7] text-[#8C5A4B]">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#1F3864]">
              此分頁即將建置
            </h3>
            <p className="text-sm text-[#665A54] max-w-lg mx-auto leading-relaxed">
              目前已完成分頁架構。待後續提供《違規報表》之附件手冊、報表格式、產製期程與公文填報規則後，將立即為您精確建置完整作業指引！
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#EAE2D7] text-[#4A3E39]">
                待提供：違規報表.pdf 或相關指引
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 分頁 3：變異點（預留待提供詳細手冊） */}
      {/* ========================================================================= */}
      {activeTab === 'variation-points' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex items-center gap-3 pb-4 border-b border-[#ECE6DB]">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] flex items-center justify-center text-[#8C5A4B]">
              <Radar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                變異點
              </h2>
              <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                內政部國土測繪中心衛星遙測疑似變異點分派、現地查處查報與系統成果回報
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] text-center space-y-3">
            <div className="inline-flex p-3 rounded-full bg-white border border-[#DDD5C7] text-[#8C5A4B]">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#1F3864]">
              此分頁即將建置
            </h3>
            <p className="text-sm text-[#665A54] max-w-lg mx-auto leading-relaxed">
              目前已完成分頁架構。待後續提供《變異點》相關作業指引、查處時效規範、公所分派與回傳審核流程後，將立即為您精確建置完整作業指引！
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#EAE2D7] text-[#4A3E39]">
                待提供：變異點.pdf 或相關指引
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 分頁 4：公所考核（預留待提供詳細手冊） */}
      {/* ========================================================================= */}
      {activeTab === 'district-evaluation' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex items-center gap-3 pb-4 border-b border-[#ECE6DB]">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] flex items-center justify-center text-[#8C5A4B]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                公所考核
              </h2>
              <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                新北市各區公所非都市土地使用管制與查報巡查年度業務考核評分與現地查證
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] text-center space-y-3">
            <div className="inline-flex p-3 rounded-full bg-white border border-[#DDD5C7] text-[#8C5A4B]">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#1F3864]">
              此分頁即將建置
            </h3>
            <p className="text-sm text-[#665A54] max-w-lg mx-auto leading-relaxed">
              目前已完成分頁架構。待後續提供《公所考核》之考核評分項目、配分比率、實地考評流程與獎懲提報規則後，將立即為您精確建置完整作業指引！
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#EAE2D7] text-[#4A3E39]">
                待提供：公所考核.pdf 或相關指引
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 分頁 5：國土署考核（預留待提供詳細手冊） */}
      {/* ========================================================================= */}
      {activeTab === 'nlma-evaluation' && (
        <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex items-center gap-3 pb-4 border-b border-[#ECE6DB]">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] flex items-center justify-center text-[#8C5A4B]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                國土署考核
              </h2>
              <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                內政部國土管理署年度地政與非都市土地使用管制業務督導考核準備指引
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] text-center space-y-3">
            <div className="inline-flex p-3 rounded-full bg-white border border-[#DDD5C7] text-[#8C5A4B]">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#1F3864]">
              此分頁即將建置
            </h3>
            <p className="text-sm text-[#665A54] max-w-lg mx-auto leading-relaxed">
              目前已完成分頁架構。待後續提供《國土署考核》之督考指標、受檢卷證整備、業務簡報架構與實地受檢重點後，將立即為您精確建置完整作業指引！
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#EAE2D7] text-[#4A3E39]">
                待提供：國土署考核.pdf 或相關指引
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 分頁 6：跨局處開會意見（公有土地／私有土地標準會核意見） */}
      {/* ========================================================================= */}
      {activeTab === 'meeting-opinions' && (
        <div className="space-y-6 animate-fade-in">
          {/* 頂部操作與篩選工具列 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ECE6DB]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] flex items-center justify-center text-[#8C5A4B] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#1F3864]">
                    跨局處開會意見
                  </h2>
                  <p className="text-xs sm:text-sm text-[#7D7065] mt-0.5">
                    公有土地（變更編定／更正編定）、私有土地（變更編定／第一級環境敏感區／開發許可）之標準會核與發言意見
                  </p>
                </div>
              </div>

              {/* 一鍵複製全文 */}
              <button
                type="button"
                onClick={() => handleCopy(allMeetingOpinionsRawText, '跨局處開會意見完整全文')}
                className="px-4 py-2 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#1F3864] hover:bg-[#152747] transition-all cursor-pointer flex items-center gap-2 shadow-xs shrink-0 self-start sm:self-auto"
              >
                <Copy className="w-4 h-4" />
                <span>一鍵複製全部開會意見</span>
              </button>
            </div>

            {/* 實務提醒 */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#FFFBEB] border-2 border-[#FDE68A] flex items-start gap-2.5 shadow-2xs">
              <AlertTriangle className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#92400E] leading-relaxed">
                <strong>【開會運用重點】：</strong>
                出席跨局處專案或會勘研商會議時，請先釐清土地屬<strong>公有</strong>或<strong>私有</strong>。公有土地著重於是否符合撥用/徵收之「簡化程序」或「特殊設施免辦62項環敏」；私有土地則應嚴格審查「森林區第一級環境敏感區」之興辦禁止與但書例外，並檢視是否達10公頃或達開發許可規模。
              </div>
            </div>

            {/* 分類切換按鈕 */}
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <span className="text-xs font-bold text-[#7D7065] mr-1">檢視範圍：</span>
              <button
                type="button"
                onClick={() => setMeetingFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  meetingFilter === 'all'
                    ? 'bg-[#1F3864] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
                }`}
              >
                <span>全部意見</span>
              </button>
              <button
                type="button"
                onClick={() => setMeetingFilter('public')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  meetingFilter === 'public'
                    ? 'bg-[#1F3864] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
                }`}
              >
                <Landmark className="w-3.5 h-3.5" />
                <span>一、公有土地（變更編定、更正編定）</span>
              </button>
              <button
                type="button"
                onClick={() => setMeetingFilter('private')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  meetingFilter === 'private'
                    ? 'bg-[#1F3864] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>二、私有土地（變更編定、開發許可）</span>
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 一、公有土地涉及變更編定、更正編定 */}
          {/* ========================================================================= */}
          {(meetingFilter === 'all' || meetingFilter === 'public') && (
            <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#ECE6DB]">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-lg bg-[#1F3864] text-white text-xs font-bold shrink-0">
                    公有土地
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                    一、公有土地涉及變更編定、更正編定
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(publicLandMeetingRawText, '公有土地開會意見全文')}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-bold text-[#8C5A4B] transition-all cursor-pointer flex items-center gap-1.5 shrink-0 shadow-2xs self-start sm:self-auto"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>複製公有土地全文</span>
                </button>
              </div>

              {/* 1. 變更編定 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#1F3864]">
                  <Scale className="w-4 h-4 text-[#8C5A4B]" />
                  <span>1. 變更編定</span>
                </div>

                {/* (1) 簡化變更編定程序 */}
                <div className="p-4 sm:p-5 rounded-xl border-2 border-[#DDD5C7] bg-[#FAF7F2] space-y-3 relative group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#ECE6DB]">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-bold text-white bg-[#1F3864] px-2 py-0.5 rounded">
                        (1)
                      </span>
                      <h4 className="font-bold text-sm sm:text-base text-[#1F3864]">
                        簡化變更編定程序（徵收或撥用一併准予變更編定）
                      </h4>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                        變更編定執行要點第10點
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          `(1)本案倘符合變更編定執行要點第10點規定略以：「需用土地人申請徵收或撥用土地計畫書內敘明請求一併准予變更編定者，直轄市或縣（市）政府在接到核准徵收或撥用案件時，經審查申請變更編定標的符合本規則及本要點相關規定者，應依徵收或撥用土地使用性質逕為核准變更編定為適當使用地及辦理異動程序。…」，原則可循簡化變更編定程序，提供撥用不動產計畫書、奉准興辦事業文件、變更前目的事業主管機關 (林業用地需檢附農業部同意函)、62項環境敏感區查詢確認無禁限建文件、山坡地免受10公頃限制文件，向本局申請變更編定為「特定目的事業用地」。`,
                          '公有土地變更編定 (1) 簡化程序意見'
                        )
                      }
                      className="px-2.5 py-1 rounded bg-white hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-bold text-[#8C5A4B] transition-colors cursor-pointer flex items-center gap-1 shrink-0 self-start sm:self-auto shadow-2xs"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>複製 (1) 意見</span>
                    </button>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] text-xs sm:text-sm text-[#2D2623] leading-relaxed font-mono select-all whitespace-pre-wrap">
                    (1)本案倘符合變更編定執行要點第10點規定略以：「需用土地人申請徵收或撥用土地計畫書內敘明請求一併准予變更編定者，直轄市或縣（市）政府在接到核准徵收或撥用案件時，經審查申請變更編定標的符合本規則及本要點相關規定者，應依徵收或撥用土地使用性質逕為核准變更編定為適當使用地及辦理異動程序。…」，原則可循簡化變更編定程序，提供撥用不動產計畫書、奉准興辦事業文件、變更前目的事業主管機關 (林業用地需檢附農業部同意函)、62項環境敏感區查詢確認無禁限建文件、山坡地免受10公頃限制文件，向本局申請變更編定為「特定目的事業用地」。
                  </div>

                  {/* 應備文件清單輔助標籤 */}
                  <div className="pt-1">
                    <span className="text-xs font-bold text-[#7D7065] mr-2">應備文件要件：</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      <span className="px-2 py-0.5 rounded bg-white text-xs text-[#4A3E39] border border-[#DDD5C7] shadow-2xs">
                        ① 撥用不動產計畫書
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white text-xs text-[#4A3E39] border border-[#DDD5C7] shadow-2xs">
                        ② 奉准興辦事業文件
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white text-xs text-[#4A3E39] border border-[#DDD5C7] shadow-2xs">
                        ③ 變更前目的主管機關同意函（林業用地需農業部同意）
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white text-xs text-[#4A3E39] border border-[#DDD5C7] shadow-2xs">
                        ④ 62項環境敏感區無禁限建文件
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white text-xs text-[#4A3E39] border border-[#DDD5C7] shadow-2xs">
                        ⑤ 山坡地免受10公頃限制文件
                      </span>
                    </div>
                  </div>
                </div>

                {/* (2) 非屬簡化程序辦理者 */}
                <div className="p-4 sm:p-5 rounded-xl border-2 border-[#DDD5C7] bg-[#FAF7F2] space-y-3 relative group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#ECE6DB]">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-bold text-white bg-[#1F3864] px-2 py-0.5 rounded">
                        (2)
                      </span>
                      <h4 className="font-bold text-sm sm:text-base text-[#1F3864]">
                        非屬簡化程序者（一般變更程序＋法定山坡地範圍）
                      </h4>
                      <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                        需水土保持完工證明
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          `(2)倘非屬前開可循簡化程序辦理者，除上開文件外，如土地為法定山坡地範圍，需另檢附水土保持完工證明(或符合非都市土地使用管制規則第48條但書規定)後，來函向本局申請變更編定為「特定目的事業用地」。`,
                          '公有土地變更編定 (2) 一般程序意見'
                        )
                      }
                      className="px-2.5 py-1 rounded bg-white hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-bold text-[#8C5A4B] transition-colors cursor-pointer flex items-center gap-1 shrink-0 self-start sm:self-auto shadow-2xs"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>複製 (2) 意見</span>
                    </button>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] text-xs sm:text-sm text-[#2D2623] leading-relaxed font-mono select-all whitespace-pre-wrap">
                    (2)倘非屬前開可循簡化程序辦理者，除上開文件外，如土地為法定山坡地範圍，需另檢附水土保持完工證明(或符合非都市土地使用管制規則第48條但書規定)後，來函向本局申請變更編定為「特定目的事業用地」。
                  </div>

                  <div className="text-xs text-[#7D7065]">
                    💡 <strong>審查要點：</strong>法定山坡地案件除上述 5 項文件外，務必確認檢附水土保持完工證明（或管制規則第 48 條但書免附水保規定）。
                  </div>
                </div>

                {/* (3) 非屬建物性質之特殊設施物 */}
                <div className="p-4 sm:p-5 rounded-xl border-2 border-[#DDD5C7] bg-[#FAF7F2] space-y-3 relative group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#ECE6DB]">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-bold text-white bg-[#1F3864] px-2 py-0.5 rounded">
                        (3)
                      </span>
                      <h4 className="font-bold text-sm sm:text-base text-[#1F3864]">
                        非屬建物性質之設施物（免依要點辦理 62 項環境敏感區查詢）
                      </h4>
                      <span className="text-[11px] font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded border border-blue-300">
                        內政部94.8.19函釋
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          `(3)如土地上係非屬建物性質之設施物，符合內政部94年8月19日內授中辦地字第0940050400號函釋，構造用途特殊，非屬建築法第7條所稱之雜項工作物者（如自來水公司設置之淨水場、配合池、取水口工程用地或台灣電力股份有限公司設置之輸配電鐵塔……等），考量其屬公共建設需要，且土地使用開發衝擊性較低，得免依非都市土地變更編定執行要點規定辦理62項環境敏感區查詢。`,
                          '公有土地變更編定 (3) 特殊設施物意見'
                        )
                      }
                      className="px-2.5 py-1 rounded bg-white hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-bold text-[#8C5A4B] transition-colors cursor-pointer flex items-center gap-1 shrink-0 self-start sm:self-auto shadow-2xs"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>複製 (3) 意見</span>
                    </button>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] text-xs sm:text-sm text-[#2D2623] leading-relaxed font-mono select-all whitespace-pre-wrap">
                    (3)如土地上係非屬建物性質之設施物，符合內政部94年8月19日內授中辦地字第0940050400號函釋，構造用途特殊，非屬建築法第7條所稱之雜項工作物者（如自來水公司設置之淨水場、配合池、取水口工程用地或台灣電力股份有限公司設置之輸配電鐵塔……等），考量其屬公共建設需要，且土地使用開發衝擊性較低，得免依非都市土地變更編定執行要點規定辦理62項環境敏感區查詢。
                  </div>

                  <div className="text-xs text-[#7D7065] flex items-center gap-1.5 flex-wrap">
                    <span className="font-bold text-[#1F3864]">典型適用案例：</span>
                    <span className="px-2 py-0.5 bg-white rounded border border-[#DDD5C7]">自來水公司淨水場</span>
                    <span className="px-2 py-0.5 bg-white rounded border border-[#DDD5C7]">配水池</span>
                    <span className="px-2 py-0.5 bg-white rounded border border-[#DDD5C7]">取水口工程用地</span>
                    <span className="px-2 py-0.5 bg-white rounded border border-[#DDD5C7]">台電公司輸配電鐵塔</span>
                  </div>
                </div>
              </div>

              {/* 2. 更正編定 */}
              <div className="space-y-4 pt-2 border-t border-[#ECE6DB]">
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#1F3864]">
                  <Scale className="w-4 h-4 text-[#8C5A4B]" />
                  <span>2. 更正編定</span>
                </div>

                <div className="p-4 sm:p-5 rounded-xl border-2 border-[#DDD5C7] bg-[#FAF7F2] space-y-3 relative group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#ECE6DB]">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-sm sm:text-base text-[#1F3864]">
                        活動中心等編定前興建計畫更正編定為特定目的事業用地
                      </h4>
                      <span className="text-[11px] font-bold text-purple-900 bg-purple-100 px-2 py-0.5 rounded border border-purple-300">
                        70年2月15日編定前計畫
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          `2.更正編定：請檢附70年2月15日編定前是否已核准活動中心興建計畫及核准之地號、面積及範圍，並取得土地所有權人更正編定同意書，向本局申請更正編定為「特定目的事業用地」。`,
                          '公有土地 2. 更正編定意見'
                        )
                      }
                      className="px-2.5 py-1 rounded bg-white hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-bold text-[#8C5A4B] transition-colors cursor-pointer flex items-center gap-1 shrink-0 self-start sm:self-auto shadow-2xs"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>複製 2. 意見</span>
                    </button>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] text-xs sm:text-sm text-[#2D2623] leading-relaxed font-mono select-all whitespace-pre-wrap">
                    2.更正編定：請檢附70年2月15日編定前是否已核准活動中心興建計畫及核准之地號、面積及範圍，並取得土地所有權人更正編定同意書，向本局申請更正編定為「特定目的事業用地」。
                  </div>

                  <div className="text-xs text-[#7D7065]">
                    💡 <strong>關鍵查核：</strong>須確認 70年2月15日編定前核准之興建計畫、明確之地號/面積/範圍，以及全體土地所有權人同意書。
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 二、私有土地涉及變更編定、開發許可 */}
          {/* ========================================================================= */}
          {(meetingFilter === 'all' || meetingFilter === 'private') && (
            <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#ECE6DB]">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-lg bg-[#8C5A4B] text-white text-xs font-bold shrink-0">
                    私有土地
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#1F3864]">
                    二、私有土地涉及變更編定、開發許可
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(privateLandMeetingRawText, '私有土地開會意見全文')}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-bold text-[#8C5A4B] transition-all cursor-pointer flex items-center gap-1.5 shrink-0 shadow-2xs self-start sm:self-auto"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>複製私有土地全文</span>
                </button>
              </div>

              {/* 1. 現況容許使用項目檢核 */}
              <div className="p-4 sm:p-5 rounded-xl border-2 border-[#DDD5C7] bg-[#FAF7F2] space-y-3 relative group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#ECE6DB]">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs font-bold text-white bg-[#8C5A4B] px-2 py-0.5 rounded">
                      1
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-[#1F3864]">
                      森林區土地現況容許使用項目限制
                    </h4>
                    <span className="text-[11px] font-bold text-stone-800 bg-stone-200 px-2 py-0.5 rounded border border-stone-300">
                      管制規則第6條附表一
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleCopy(
                        `1.經查貴局檢送相關地號清冊，本案OO區OO段O地號等OO筆土地係屬森林區OO用地，面積共166公頃，現況仍應依非都市土地使用管制規則第6條第3項附表一規定，依其容許使用之項目及許可使用細目使用。`,
                        '私有土地 1. 現況容許使用意見'
                      )
                    }
                    className="px-2.5 py-1 rounded bg-white hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-bold text-[#8C5A4B] transition-colors cursor-pointer flex items-center gap-1 shrink-0 self-start sm:self-auto shadow-2xs"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製 1. 意見</span>
                  </button>
                </div>

                <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] text-xs sm:text-sm text-[#2D2623] leading-relaxed font-mono select-all whitespace-pre-wrap">
                  1.經查貴局檢送相關地號清冊，本案OO區OO段O地號等OO筆土地係屬森林區OO用地，面積共166公頃，現況仍應依非都市土地使用管制規則第6條第3項附表一規定，依其容許使用之項目及許可使用細目使用。
                </div>
              </div>

              {/* 2. 森林區第一級環境敏感地區限制與但書例外 */}
              <div className="p-4 sm:p-5 rounded-xl border-2 border-[#DDD5C7] bg-[#FAF7F2] space-y-3 relative group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#ECE6DB]">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs font-bold text-white bg-[#8C5A4B] px-2 py-0.5 rounded">
                      2
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-[#1F3864]">
                      森林區第一級環境敏感地區管制、但書例外與開發許可
                    </h4>
                    <span className="text-[11px] font-bold text-rose-900 bg-rose-100 px-2 py-0.5 rounded border border-rose-300">
                      管制規則第30-1條、第11條
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleCopy(
                        `2.另查本案土地皆位於區域計畫劃定之森林區，屬第一級環境敏感地區，依非都市土地使用管制規則(下稱管制規則)第30-1條規定：「…興辦事業計畫不得位於區域計畫規定之第一級環境敏感地區。但有下列情形之一者，不在此限：一、屬內政部會商中央目的事業主管機關認定由政府興辦之公共設施或公用事業，且經各項第一級環境敏感地區之中央法令規定之目的事業主管機關同意興辦。二、為整體規劃需要，不可避免夾雜之零星土地符合第三十條之二規定者，得納入範圍，並應維持原地形地貌不得開發使用。三、依各項第一級環境敏感地區之中央目的事業主管法令明定得許可或同意開發。四、屬優良農地，供農業生產及其必要之產銷設施使用，經農業主管機關認定符合農業發展所需，且不影響農業生產環境及農地需求總量。五、位於水庫集水區（供家用或供公共給水）非屬與水資源保育直接相關之環境敏感地區範圍，且該水庫集水區經水庫管理機關（構）擬訂水庫集水區保育實施計畫，開發行為不影響該保育實施計畫之執行。…」，本案若有符合上開規定，應擬具興辦事業計畫向變更後目的事業主管機關申請並取得核准文件後，依管制規則第28條規定向本局申請使用地變更編定事宜。另倘本案後續開發已達管制規則第11條規定應辦理土地使用分區變更之開發規模，應依區域計畫法第15條之1及管制規則等相關規定洽新北市政府城鄉發展局申請開發許可取得同意後，向本局申請土地使用分區及使用地變更編定事宜。`,
                        '私有土地 2. 第一級環境敏感區與開發許可意見'
                      )
                    }
                    className="px-2.5 py-1 rounded bg-white hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-bold text-[#8C5A4B] transition-colors cursor-pointer flex items-center gap-1 shrink-0 self-start sm:self-auto shadow-2xs"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製 2. 意見</span>
                  </button>
                </div>

                <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] text-xs sm:text-sm text-[#2D2623] leading-relaxed font-mono select-all whitespace-pre-wrap">
                  2.另查本案土地皆位於區域計畫劃定之森林區，屬第一級環境敏感地區，依非都市土地使用管制規則(下稱管制規則)第30-1條規定：「…興辦事業計畫不得位於區域計畫規定之第一級環境敏感地區。但有下列情形之一者，不在此限：一、屬內政部會商中央目的事業主管機關認定由政府興辦之公共設施或公用事業，且經各項第一級環境敏感地區之中央法令規定之目的事業主管機關同意興辦。二、為整體規劃需要，不可避免夾雜之零星土地符合第三十條之二規定者，得納入範圍，並應維持原地形地貌不得開發使用。三、依各項第一級環境敏感地區之中央目的事業主管法令明定得許可或同意開發。四、屬優良農地，供農業生產及其必要之產銷設施使用，經農業主管機關認定符合農業發展所需，且不影響農業生產環境及農地需求總量。五、位於水庫集水區（供家用或供公共給水）非屬與水資源保育直接相關之環境敏感地區範圍，且該水庫集水區經水庫管理機關（構）擬訂水庫集水區保育實施計畫，開發行為不影響該保育實施計畫之執行。…」，本案若有符合上開規定，應擬具興辦事業計畫向變更後目的事業主管機關申請並取得核准文件後，依管制規則第28條規定向本局申請使用地變更編定事宜。另倘本案後續開發已達管制規則第11條規定應辦理土地使用分區變更之開發規模，應依區域計畫法第15條之1及管制規則等相關規定洽新北市政府城鄉發展局申請開發許可取得同意後，向本局申請土地使用分區及使用地變更編定事宜。
                </div>

                {/* 雙路徑流程圖示 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1 text-xs">
                    <span className="font-bold text-[#1F3864] flex items-center gap-1">
                      <span>路徑 A：符合但書・申請使用地變更編定</span>
                    </span>
                    <p className="text-[#5A4B43] leading-relaxed">
                      符合但書 5 款之一 ➔ 擬具興辦事業計畫洽變更後目的主管機關核准 ➔ 依管制規則第28條向地政局申請使用地變更編定。
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] space-y-1 text-xs">
                    <span className="font-bold text-[#8C5A4B] flex items-center gap-1">
                      <span>路徑 B：達管制規則第11條規模・申請開發許可</span>
                    </span>
                    <p className="text-[#5A4B43] leading-relaxed">
                      開發規模達應辦分區變更者 ➔ 依區域計畫法第15條之1洽城鄉發展局申請開發許可核准 ➔ 向地政局申請土地使用分區及使用地變更編定。
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. 山坡地面積限制與免受限制文件 */}
              <div className="p-4 sm:p-5 rounded-xl border-2 border-[#DDD5C7] bg-[#FAF7F2] space-y-3 relative group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#ECE6DB]">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs font-bold text-white bg-[#8C5A4B] px-2 py-0.5 rounded">
                      3
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-[#1F3864]">
                      山坡地面積門檻（未達 10 公頃應檢附免受限制文件）
                    </h4>
                    <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                      管制規則第52-1條
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleCopy(
                        `3.另依管制規則第52-1條：「申請人擬具之興辦事業計畫土地位屬山坡地範圍內者，其面積不得少於十公頃。但有下列情形之一者，不在此限：……」，倘本案申請開發建築面積未達10公頃者，應檢附開發面積免受限制文件。`,
                        '私有土地 3. 山坡地免受限制文件意見'
                      )
                    }
                    className="px-2.5 py-1 rounded bg-white hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-bold text-[#8C5A4B] transition-colors cursor-pointer flex items-center gap-1 shrink-0 self-start sm:self-auto shadow-2xs"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製 3. 意見</span>
                  </button>
                </div>

                <div className="p-3 bg-white rounded-lg border border-[#DDD5C7] text-xs sm:text-sm text-[#2D2623] leading-relaxed font-mono select-all whitespace-pre-wrap">
                  3.另依管制規則第52-1條：「申請人擬具之興辦事業計畫土地位屬山坡地範圍內者，其面積不得少於十公頃。但有下列情形之一者，不在此限：……」，倘本案申請開發建築面積未達10公頃者，應檢附開發面積免受限制文件。
                </div>

                <div className="text-xs text-[#7D7065]">
                  💡 <strong>審查要點：</strong>興辦事業計畫土地若位屬山坡地範圍且申請開發建築面積未達 10 公頃，務必檢附目的事業主管機關或法令出具之「開發面積免受限制文件」。
                </div>
              </div>
            </div>
          )}

          {/* 全文一鍵複製對照純文字區塊 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#ECE6DB]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#8C5A4B]" />
                <span className="font-bold text-sm sm:text-base text-[#1F3864]">
                  開會意見公文／會議紀錄原始純文字複製區
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(allMeetingOpinionsRawText, '跨局處開會意見完整全文')}
                className="px-3 py-1 rounded-lg bg-[#FAF7F2] hover:bg-[#8C5A4B] hover:text-white border border-[#DDD5C7] text-xs font-bold text-[#8C5A4B] transition-colors cursor-pointer flex items-center gap-1 shrink-0 shadow-2xs"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>複製全文</span>
              </button>
            </div>
            <pre className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] text-xs font-mono text-[#2D2623] leading-relaxed whitespace-pre-wrap select-all max-h-72 overflow-y-auto">
              {allMeetingOpinionsRawText}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
