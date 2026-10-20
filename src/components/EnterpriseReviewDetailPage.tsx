import React, { useState } from 'react';
import {
  ArrowLeft,
  FileText,
  AlertTriangle,
  Scale,
  Copy,
  Check,
  CheckCircle2,
  Building,
  Info,
  Layers,
  ExternalLink
} from 'lucide-react';

interface EnterpriseReviewDetailPageProps {
  onBack: () => void;
}

export const EnterpriseReviewDetailPage: React.FC<EnterpriseReviewDetailPageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'review-notes' | 'doc-templates' | 'laws'>('review-notes');
  const [docTemplateType, setDocTemplateType] = useState<'slopeland' | 'non-slopeland'>('slopeland');
  const [copied, setCopied] = useState<boolean>(false);

  // Template 1: 第一次審查(山坡地範圍)
  const templateSlopeland = `主旨：有關 OO 申辦坐落本市 OO 區 OO 段 OO 地號（申請面積：OO 公頃）等 O 筆非都市土地變更編定為 OO 使用之興辦事業計畫一案，本局是日不派員與勘，復請查照。

說明：
一、復貴局 O 年 O 月 O 日新北民宗字第 OO 號函。
二、有關興辦事業計畫審查表本局審查意見如下：
(一)旨揭土地係 OO 區 OO 用地，依非都市土地使用管制規則（下稱管制規則）第 27 條附表三規定，OO 區內土地得變更編定為特定目的事業用地，又依非都市土地變更編定執行要點第 8 點規定，OO 得申請變更編定為特定目的事業用地，惟仍應取得興辦事業計畫核准文件。
(二)本案已檢附土地登記（簿）謄本、地籍圖謄本、位置圖及配置圖。
(三)本案請依管制規則第 30 條第 4 項規定，先徵得變更前目的事業主管機關（本府 OO 局）及有關機關同意；又依管制規則第 28 條規定，山坡地範圍土地申請開發建築面積未達 10 公頃者，應檢附開發建築面積免受限制文件。
(四)本案如涉及先行違規使用情事，將依區域計畫法裁罰。
(五)本案土地倘有經政府管養之道路，請先洽轄區地政事務所辦理使用面積測量（假分割），以免發生核准面積與日後實際分割面積不符之情事；測量完竣，請於計畫書檢附測量成果圖，並將道路使用範圍變更編定為交通用地作道路使用。
(六)本案請一併檢附本市非都市土地變更編定申請書。
(七)查內政部國土管理署環境敏感地區單一窗口查詢平台自 112 年 6 月 29 日起暫緩受理申請查詢新北市轄區範圍內之第一級環境敏感地區「13.古蹟保存區」、「14.考古遺址」及第二級環境敏感地區「12.歷史建築」、「13.聚落建築群」、「14.文化景觀」、「15.紀念建築」及「16.史蹟」等項目，涉前開查詢項目，請逕至新北市開發行為涉及有形文化資產查詢系統查詢。
三、請依「非都市土地變更編定執行要點」第 3 項第 2 點規定，就事業計畫之可行性、必要性、土地區位或面積規模等予以審查；另前揭要點業經內政部 107 年 3 月 21 日內授中辦地字第 1071301740 號令修正，請貴局依修正後要點第 3 點附錄一之二 62 項禁、限建查詢項目予以審查。另依案附 62 項禁、限建查詢結果，本案土地位於第二級環境敏感地區第 O 項，請先予釐明確認是否有各該項目法令規定之禁、限建及不得設置或興辦之情事，並於核准時於興辦事業計畫核准文件內敘明「已完成非都市土地變更編定執行要點第 3 點第 1 項附錄一之二所列查詢項目之查核，尚無各該項目法令規定之禁、限建及不得設置或興辦情事」。
四、按「簡化非都市土地變更編定審查程序-由各目的事業主管機關成立單一窗口審查機制」案業已簽奉核准，本局另以 105 年 6 月 20 日新北地管字第 1051132665 號函通知正式施行，本案建請將「新北市政府非都市土地變更編定審查表」（詳附件）之審查項目一併入會會審。另本局前以 114 年 10 月 23 日新北地管字第 1142145659 號函建請本府水利局衡酌是否有要求申請人提供用水證明必要，並於各「興辦事業計畫階段」入會正式審查，請貴局協助釐明，並一併入會會審項目，俾符合中央內政部國土管理署要求各地方政府加速後續變更編定案件審查辦理時程。
四、查旨揭地號土地皆位屬山坡地範疇，依新北市非都市山坡地範圍內土地變更編定審查原則分工表本局意見如下：
(一)審查項目（一）：本案係屬山坡地範圍內有興辦事業計畫之案件，應依非都市土地使用管制規則第 49 條之 1 第 2 項規定，逐一檢視有無經依建築相關法令認定屬 6 款情形之一者，不得規劃作建築使用。
(二)審查項目（五）：案內無公有土地。
(三)審查項目（六）：計畫範圍內無未登記土地。
(四)審查項目（八）：興辦事業計畫中無劃設保育綠地或保育區。
(五)審查項目（十五）：依非都市土地使用管制規則第 27 條附表三規定，OO 區內土地得變更編定為 OO 用地；又依非都市土地變更編定執行要點第 8 點規定，OO 設施得申請變更編定為特定目的事業用地。經檢視本興辦事業計畫內容已依上開規定規劃為 OO 用地。
五、請依新北市政府 100 年 4 月 18 日北府城規字第 1000329841 號函及新北市政府城鄉發展局 104 年 2 月 13 日新北城規字第 1040254782 號函，應先加會新北市政府城鄉發展局就區位適宜性提供意見。
六、另依管制規則第 48 條規定，山坡地範圍內各使用分區土地申請變更編定，屬依水土保持法相關規定應擬具水土保持計畫者，應檢附水土保持機關核發之水土保持完工證明書。
七、隨函檢還該興辦事業計畫書及審查表各 1 份。
八、副本抄送：
(一)本府城鄉發展局：檢送該地區土地使用編定圖及分區圖，為落實土地變更編定與國土計畫之有效銜接，參照 114 年 6 月 25 日基北北桃合作交流平台都會發展組 114 年第 2 季小組會議決議，請就土地適宜性，以及是否符合各級國土計畫、區域計畫之空間發展及成長管理計畫等內容進行審查，以確保符合本市國土計畫指導原則。
(二)本市 OO 地政事務所：申請人如因申請案有申請使用面積測量需求，請協助辦理使用面積測量事宜。`;

  // Template 2: 第一次審查(非山坡地範圍)
  const templateNonSlopeland = `主旨：有關 OO 申辦坐落本市 OO 區 OO 段 OO 地號（申請面積：OO 公頃）等 O 筆非都市土地變更編定為 OO 使用之興辦事業計畫一案，本局是日不派員與勘，復請查照。

說明：
一、復貴局 O 年 O 月 O 日新北 OO 字第 OO 號函。
二、有關興辦事業計畫審查表本局審查意見如下：
(一)旨揭土地係 OO 區 OO 用地，依非都市土地使用管制規則（下稱管制規則）第 27 條附表三規定，OO 區內土地得變更編定為 OO 用地，惟仍應取得興辦事業計畫核准文件。
(二)本案已檢附土地登記（簿）謄本、地籍圖謄本、位置圖及配置圖。
(三)本案有檢附土地所有權人之變更編定同意書。
(四)本案請依管制規則第 30 條第 4 項規定，先徵得變更前目的事業主管機關（本府 OO 局）及有關機關同意。
(五)本案非屬山坡地範圍。
(六)本案如涉及先行違規使用情事，將依區域計畫法裁罰。
(七)本案土地倘有經政府管養之道路，請先洽轄區地政事務所辦理使用面積測量（假分割），以免發生核准面積與日後實際分割面積不符之情事；測量完竣，請於計畫書檢附測量成果圖，並將道路使用範圍變更編定為交通用地作道路使用。
(八)本案請一併檢附本市非都市土地變更編定申請書。
(九)查內政部國土管理署環境敏感地區單一窗口查詢平台自 112 年 6 月 29 日起暫緩受理申請查詢新北市轄區範圍內之第一級環境敏感地區「13.古蹟保存區」、「14.考古遺址」及第二級環境敏感地區「12.歷史建築」、「13.聚落建築群」、「14.文化景觀」、「15.紀念建築」及「16.史蹟」等項目，涉前開查詢項目，請逕至新北市開發行為涉及有形文化資產查詢系統查詢。
三、請依「非都市土地變更編定執行要點」第 3 項第 2 點規定，就事業計畫之可行性、必要性、土地區位或面積規模等予以審查；另前揭要點業經內政部 107 年 3 月 21 日內授中辦地字第 1071301740 號令修正，請貴局依修正後要點第 3 點附錄一之二 62 項禁、限建查詢項目予以審查。另依案附 62 項禁、限建查詢結果，本案土地位於第二級環境敏感地區第 O 項，請先予釐明確認是否有各該項目法令規定之禁、限建及不得設置或興辦之情事，並於核准時於興辦事業計畫核准文件內敘明「已完成非都市土地變更編定執行要點第 3 點第 1 項附錄一之二所列查詢項目之查核，尚無各該項目法令規定之禁、限建及不得設置或興辦情事」。
四、按「簡化非都市土地變更編定審查程序-由各目的事業主管機關成立單一窗口審查機制」案業已簽奉核准，本局另以 105 年 6 月 20 日新北地管字第 1051132665 號函通知正式施行，本案建請將「新北市政府非都市土地變更編定審查表」（詳附件）之審查項目一併入會會審。另本局前以 114 年 10 月 23 日新北地管字第 1142145659 號函建請本府水利局衡酌是否有要求申請人提供用水證明必要，並於各「興辦事業計畫階段」入會正式審查，請貴局協助釐明，並一併入會會審項目，俾符合中央內政部國土管理署要求各地方政府加速後續變更編定案件審查辦理時程。
五、請依新北市政府 100 年 4 月 18 日北府城規字第 1000329841 號函及新北市政府城鄉發展局 104 年 2 月 13 日新北城規字第 1040254782 號函，應先加會新北市政府城鄉發展局就區位適宜性提供意見。
六、隨函檢還該興辦事業計畫書及審查表各 1 份。
七、副本抄送：
(一)本府城鄉發展局：檢送該地區土地使用編定圖及分區圖，為落實土地變更編定與國土計畫之有效銜接，參照 114 年 6 月 25 日基北北桃合作交流平台都會發展組 114 年第 2 季小組會議決議，請就土地適宜性，以及是否符合各級國土計畫、區域計畫之空間發展及成長管理計畫等內容進行審查，以確保符合本市國土計畫指導原則。
(二)本市 OO 地政事務所：申請人如因申請案有申請使用面積測量需求，請協助辦理使用面積測量事宜。`;

  const currentTemplate = docTemplateType === 'slopeland' ? templateSlopeland : templateNonSlopeland;

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(currentTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 w-full max-w-6xl mx-auto">
      {/* Top Banner Navigation */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ECE6DB]">
          <div className="flex items-center gap-3.5">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm sm:text-base font-semibold text-[#4A3E39] bg-[#F5EFE7] hover:bg-[#EAE2D7] border border-[#DDD5C7] rounded-xl transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>返回業務選單</span>
            </button>
            <div className="h-6 w-px bg-[#DDD5C7]" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif-tc font-semibold text-[#2D2623]">
                興辦事業計畫審查
              </h1>
              <p className="text-sm sm:text-base text-[#665A54] mt-0.5">
                新北市政府非都市土地興辦事業計畫會審指引與公文範本
              </p>
            </div>
          </div>
        </div>

        {/* Tab Controls (Flex-wrap, clean earth-tones) */}
        <div className="flex flex-wrap items-center gap-2 pt-4 text-sm sm:text-base">
          <button
            onClick={() => setActiveTab('review-notes')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'review-notes'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>審查注意事項</span>
          </button>

          <button
            onClick={() => setActiveTab('doc-templates')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'doc-templates'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>回復審查意見公文範本</span>
          </button>

          <button
            onClick={() => setActiveTab('laws')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-semibold ${
              activeTab === 'laws'
                ? 'bg-[#8C5A4B] text-white shadow-xs'
                : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>常用相關法令</span>
          </button>
        </div>
      </div>

      {/* TAB 1: 審查注意事項 (Strictly matching PDF content) */}
      {activeTab === 'review-notes' && (
        <div className="space-y-6">
          {/* 常見類型 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 border-b border-[#ECE6DB] pb-3">
              <Building className="w-5 h-5 text-[#8C5A4B]" />
              <h2 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                常見類型
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[#3E342F] leading-relaxed pl-1">
              工廠毗鄰擴廠(或包圍夾雜)、特定工廠、社會福利機構、宗教建築、停車場、資源回收場等。
            </p>
          </div>

          {/* 第一次審查 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 border-b border-[#ECE6DB] pb-3">
              <CheckCircle2 className="w-5 h-5 text-[#8C5A4B]" />
              <h2 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                第一次審查注意事項
              </h2>
            </div>
            <div className="space-y-3 pl-1">
              <div className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
                <span className="w-7 h-7 rounded-lg bg-[#8C5A4B] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  1
                </span>
                <p className="text-base sm:text-lg text-[#2D2623] pt-0.5">
                  照興辦審查表審查
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
                <span className="w-7 h-7 rounded-lg bg-[#8C5A4B] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  2
                </span>
                <p className="text-base sm:text-lg text-[#2D2623] pt-0.5">
                  確認申請範圍地號、面積、地主(非申請人要附土同)、土地清冊、內文敘述
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
                <span className="w-7 h-7 rounded-lg bg-[#8C5A4B] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  3
                </span>
                <p className="text-base sm:text-lg text-[#2D2623] pt-0.5">
                  興辦事業計畫圖說與土地配置是否一致
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
                <span className="w-7 h-7 rounded-lg bg-[#8C5A4B] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  4
                </span>
                <p className="text-base sm:text-lg text-[#2D2623] pt-0.5">
                  確認有無環敏查詢結果、新北市文化資產查詢結果
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
                <span className="w-7 h-7 rounded-lg bg-[#8C5A4B] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  5
                </span>
                <p className="text-base sm:text-lg text-[#2D2623] pt-0.5">
                  計畫範圍如有無政府養護道路，先洽轄區地所辦使用面積測量，計畫面積依測量結果填寫
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
                <span className="w-7 h-7 rounded-lg bg-[#8C5A4B] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  6
                </span>
                <p className="text-base sm:text-lg text-[#2D2623] pt-0.5">
                  計畫書內最好一併檢附變更編定申請書
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
                <span className="w-7 h-7 rounded-lg bg-[#8C5A4B] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  7
                </span>
                <p className="text-base sm:text-lg text-[#2D2623] pt-0.5">
                  確認主管機關有無把「變更編定審查表、新北市非都市土地山坡地變更審查原則表(山坡地範圍才需要)」一起會審各單位
                </p>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
                <span className="w-7 h-7 rounded-lg bg-[#8C5A4B] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  8
                </span>
                <div className="text-base sm:text-lg text-[#2D2623] pt-0.5 space-y-1">
                  <span className="font-semibold text-[#8C5A4B]">副本抄送本府城鄉發展局：</span>
                  <p className="leading-relaxed">
                    檢送該地區土地使用編定圖及分區圖，為落實土地變更編定與國土計畫之有效銜接，參照 114 年 6 月 25 日基北北桃合作交流平台都會發展組 114 年第 2 季小組會議決議，請就土地適宜性，以及是否符合各級國土計畫、區域計畫之空間發展及成長管理計畫等內容進行審查，以確保符合本市國土計畫指導原則。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 第二次(含)後續審查 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 border-b border-[#ECE6DB] pb-3">
              <Layers className="w-5 h-5 text-[#8C5A4B]" />
              <h2 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                第二次(含)後續審查注意事項
              </h2>
            </div>
            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
              <p className="text-base sm:text-lg font-semibold text-[#2D2623]">
                確認前次意見有無修正、有無新增意見。
              </p>
            </div>
          </div>

          {/* 目的事業主管機關核准興辦後 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 border-b border-[#ECE6DB] pb-3">
              <Info className="w-5 h-5 text-[#8C5A4B]" />
              <h2 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                目的事業主管機關核准興辦後
              </h2>
            </div>
            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
              <p className="text-base sm:text-lg text-[#2D2623] leading-relaxed">
                跟興辦目的事業主管機關要各機關原審意見(要公文)，然後就等申請人送件申請變更編定。
              </p>
            </div>
          </div>

          {/* 注意事項 */}
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 border-b border-[#ECE6DB] pb-3">
              <AlertTriangle className="w-5 h-5 text-[#8C5A4B]" />
              <h2 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                注意事項
              </h2>
            </div>
            <div className="space-y-3 pl-1">
              <div className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
                <span className="w-6 h-6 rounded-full bg-[#EAE2D7] text-[#5A4B43] font-bold flex items-center justify-center shrink-0 text-sm">
                  1
                </span>
                <p className="text-base sm:text-lg text-[#2D2623]">
                  山坡地範圍，申請面積在 10 公頃以下要檢附免受 10 公頃限制文件
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
                <span className="w-6 h-6 rounded-full bg-[#EAE2D7] text-[#5A4B43] font-bold flex items-center justify-center shrink-0 text-sm">
                  2
                </span>
                <p className="text-base sm:text-lg text-[#2D2623]">
                  產業園區丁種建築用地的建蔽率 70%，容積率維持 300%，目前只有新北產業園區(五股工業區)、瑞芳工業區
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
                <span className="w-6 h-6 rounded-full bg-[#EAE2D7] text-[#5A4B43] font-bold flex items-center justify-center shrink-0 text-sm">
                  3
                </span>
                <p className="text-base sm:text-lg text-[#2D2623]">
                  特定工廠的特定目的事業用地，建蔽率 70%，容積率 180%。
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
                <span className="w-6 h-6 rounded-full bg-[#EAE2D7] text-[#5A4B43] font-bold flex items-center justify-center shrink-0 text-sm">
                  4
                </span>
                <p className="text-base sm:text-lg text-[#2D2623]">
                  確認計畫範圍四周有無同一性質計畫，且經目的事業主管機關審認屬同一興辦事業計畫，應累計其面積。
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7]">
                <span className="w-6 h-6 rounded-full bg-[#EAE2D7] text-[#5A4B43] font-bold flex items-center justify-center shrink-0 text-sm">
                  5
                </span>
                <p className="text-base sm:text-lg text-[#2D2623]">
                  申請範圍超過 2 公頃，應依非都市土地使用管制規則第 11 條規定，洽新北市政府城鄉發展局辦理分區變更。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 回復審查意見公文範本 (Strictly matching PDF Pages 2-5) */}
      {activeTab === 'doc-templates' && (
        <div className="space-y-5">
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#ECE6DB] pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                  公文範本（回復審查意見）
                </h2>
                <p className="text-sm sm:text-base text-[#665A54] mt-1">
                  請選擇適用的案件範本（山坡地範圍 / 非山坡地範圍），可直接一鍵複製全文貼至公文系統。
                </p>
              </div>

              {/* Copy button */}
              <button
                onClick={handleCopyTemplate}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#8C5A4B] hover:bg-[#774B3E] text-white rounded-xl font-semibold shadow-xs transition-colors cursor-pointer shrink-0 text-base"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? '已複製到剪貼簿！' : '複製公文範本全文'}</span>
              </button>
            </div>

            {/* Disclaimer Notice Banner as requested by user */}
            <div className="p-3.5 bg-[#FDF6E2] border-2 border-[#ECD9A2] rounded-xl text-sm sm:text-base text-[#7D5A12] flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 shrink-0 text-[#B45309] mt-0.5" />
              <div>
                <span className="font-semibold">【注意事項】：</span>
                <span>本範本僅供參考，實際仍須依計畫個案之具體內容、土地條件及各機關會審結果進行審查妥處。</span>
              </div>
            </div>

            {/* Template selector tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setDocTemplateType('slopeland')}
                className={`px-4 py-2 rounded-xl text-base font-semibold cursor-pointer transition-all ${
                  docTemplateType === 'slopeland'
                    ? 'bg-[#5A4B43] text-white shadow-xs'
                    : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
                }`}
              >
                第一次審查（山坡地範圍）
              </button>

              <button
                onClick={() => setDocTemplateType('non-slopeland')}
                className={`px-4 py-2 rounded-xl text-base font-semibold cursor-pointer transition-all ${
                  docTemplateType === 'non-slopeland'
                    ? 'bg-[#5A4B43] text-white shadow-xs'
                    : 'bg-[#F5EFE7] text-[#4A3E39] hover:bg-[#EAE2D7] border border-[#DDD5C7]'
                }`}
              >
                第一次審查（非山坡地範圍）
              </button>
            </div>

            {/* Document display card */}
            <div className="bg-[#FAF7F2] border border-[#DDD5C7] rounded-xl p-5 sm:p-6 font-mono text-base text-[#2D2623] leading-relaxed whitespace-pre-wrap select-all">
              {currentTemplate}
            </div>

            {/* Bottom Copy Action */}
            <div className="flex justify-end pt-2">
              <button
                onClick={handleCopyTemplate}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#8C5A4B] hover:bg-[#774B3E] text-white rounded-xl font-semibold shadow-xs transition-colors cursor-pointer text-base"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? '已複製全文！' : '複製此範本'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 常用相關法令 (Original layout as shown in user screenshot) */}
      {activeTab === 'laws' && (
        <div className="space-y-5">
          <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-6">
            <div className="flex items-center gap-2.5 border-b border-[#ECE6DB] pb-3">
              <Scale className="w-5 h-5 text-[#8C5A4B]" />
              <h2 className="text-xl sm:text-2xl font-serif-tc font-semibold text-[#2D2623]">
                常用相關法令
              </h2>
            </div>

            <div className="space-y-6 pl-1">
              {/* 法令 1: 非都市土地使用管制規則 */}
              <div className="p-5 sm:p-6 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[#E5DDD0] pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-[#EAE2D7] text-[#5A4B43] rounded-md">
                      法規命令
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2623]">
                      1. 非都市土地使用管制規則
                    </h3>
                  </div>
                  <a
                    href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0060013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8C5A4B] hover:text-[#6E4236] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:border-[#8C5A4B] transition-colors"
                  >
                    <span>全國法規資料庫條文</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 全部列出之各條項清單 */}
                <div className="space-y-3 pt-1">
                  {/* 第 11 條第 1 項 */}
                  <div className="p-3.5 bg-[#FFFFFF] rounded-lg border border-[#DDD5C7] flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="font-semibold text-[#8C5A4B] text-base sm:text-lg">
                        • 第 11 條第 1 項（辦理使用分區變更之規模標準）
                      </div>
                    </div>
                    <a
                      href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0060013&flno=11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-xs sm:text-sm text-[#8C5A4B] hover:underline pt-0.5"
                    >
                      <span>法規查閱</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* 第 11 條第 4 項 */}
                  <div className="p-3.5 bg-[#FFFFFF] rounded-lg border border-[#DDD5C7] flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="font-semibold text-[#8C5A4B] text-base sm:text-lg">
                        • 第 11 條第 4 項（毗鄰屬同一興辦事業計畫者，應累計其面積）
                      </div>
                    </div>
                    <a
                      href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0060013&flno=11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-xs sm:text-sm text-[#8C5A4B] hover:underline pt-0.5"
                    >
                      <span>法規查閱</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* 第 28 條第 5 項 */}
                  <div className="p-3.5 bg-[#FFFFFF] rounded-lg border border-[#DDD5C7] flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="font-semibold text-[#8C5A4B] text-base sm:text-lg">
                        • 第 28 條第 5 項（山坡地範圍內計畫面積未達10公頃者，應檢附免受限制文件）。
                      </div>
                    </div>
                    <a
                      href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0060013&flno=28"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-xs sm:text-sm text-[#8C5A4B] hover:underline pt-0.5"
                    >
                      <span>法規查閱</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* 第 30 條 */}
                  <div className="p-3.5 bg-[#FFFFFF] rounded-lg border border-[#DDD5C7] flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="font-semibold text-[#8C5A4B] text-base sm:text-lg">
                        • 第 30 條（應取得變更前目的事業主管機關及有關機關同意）
                      </div>
                      <p className="text-xs sm:text-sm text-[#735A4F] pl-3 font-medium">
                        小字：林業用地變更須徵得中央(農業部)同意
                      </p>
                    </div>
                    <a
                      href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0060013&flno=30"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-xs sm:text-sm text-[#8C5A4B] hover:underline pt-0.5"
                    >
                      <span>法規查閱</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* 第 30 條之 1 */}
                  <div className="p-3.5 bg-[#FFFFFF] rounded-lg border border-[#DDD5C7] flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="font-semibold text-[#8C5A4B] text-base sm:text-lg">
                        • 第 30 條之 1（興辦事業計畫原則不得位於第一級環境敏感地區）
                      </div>
                    </div>
                    <a
                      href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0060013&flno=30-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-xs sm:text-sm text-[#8C5A4B] hover:underline pt-0.5"
                    >
                      <span>法規查閱</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* 第 32 條 */}
                  <div className="p-3.5 bg-[#FFFFFF] rounded-lg border border-[#DDD5C7] flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="font-semibold text-[#8C5A4B] text-base sm:text-lg">
                        • 第 32 條（工業區以外，核准設廠用地範圍內，被丁建包圍或夾雜土地得變更編定為丁建）
                      </div>
                      <p className="text-xs sm:text-sm text-[#735A4F] pl-3 font-medium">
                        小字：包圍或夾雜由經濟發展局認定
                      </p>
                    </div>
                    <a
                      href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0060013&flno=32"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-xs sm:text-sm text-[#8C5A4B] hover:underline pt-0.5"
                    >
                      <span>法規查閱</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* 第 33 條 */}
                  <div className="p-3.5 bg-[#FFFFFF] rounded-lg border border-[#DDD5C7] flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="font-semibold text-[#8C5A4B] text-base sm:text-lg">
                        • 第 33 條（工業區以外原編定丁建包圍夾雜未達 2 公頃，作低污染、高附加價值，得變更編定為丁建）
                      </div>
                      <p className="text-xs sm:text-sm text-[#735A4F] pl-3 font-medium">
                        小字：包圍或夾雜由經濟發展局認定
                      </p>
                    </div>
                    <a
                      href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0060013&flno=33"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-xs sm:text-sm text-[#8C5A4B] hover:underline pt-0.5"
                    >
                      <span>法規查閱</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* 第 49 條之 1 */}
                  <div className="p-3.5 bg-[#FFFFFF] rounded-lg border border-[#DDD5C7] flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="font-semibold text-[#8C5A4B] text-base sm:text-lg">
                        • 第 49 條之 1（山坡地變更編定案件組專案小組審查）
                      </div>
                    </div>
                    <a
                      href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0060013&flno=49-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-xs sm:text-sm text-[#8C5A4B] hover:underline pt-0.5"
                    >
                      <span>法規查閱</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* 第 52 條之 1 */}
                  <div className="p-3.5 bg-[#FFFFFF] rounded-lg border border-[#DDD5C7] flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="font-semibold text-[#8C5A4B] text-base sm:text-lg">
                        • 第 52 條之 1（山坡地興辦計畫面積原則不得少於 10 公頃）
                      </div>
                    </div>
                    <a
                      href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0060013&flno=52-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-xs sm:text-sm text-[#8C5A4B] hover:underline pt-0.5"
                    >
                      <span>法規查閱</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* 法令 2: 非都市土地變更編定執行要點 */}
              <div className="p-5 sm:p-6 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[#E5DDD0] pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-[#EAE2D7] text-[#5A4B43] rounded-md">
                      行政規則
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2623]">
                      2. 非都市土地變更編定執行要點
                    </h3>
                  </div>
                  <a
                    href="https://glrs.moi.gov.tw/LawContent.aspx?id=FL003207"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8C5A4B] hover:text-[#6E4236] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:border-[#8C5A4B] transition-colors"
                  >
                    <span>內政部主管法規查詢系統</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="space-y-1.5">
                  <span className="font-semibold text-[#8C5A4B] text-base">
                    第 3 點（目的事業主管機關審核原則與附錄一之二查核）
                  </span>
                  <p className="text-base text-[#3E342F] leading-relaxed">
                    目的事業主管機關審查興辦事業計畫，應就其可行性、必要性、土地區位與面積規模等予以審核；並依修正後附錄一之二 62 項禁建、限建查詢項目予以實質查核。
                  </p>
                </div>
              </div>

              {/* 法令 3: 特定工廠申請變更編定為特定目的事業用地審查辦法 */}
              <div className="p-5 sm:p-6 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[#E5DDD0] pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-[#EAE2D7] text-[#5A4B43] rounded-md">
                      法規命令
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2623]">
                      3. 特定工廠申請變更編定為特定目的事業用地審查辦法
                    </h3>
                  </div>
                  <a
                    href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0030153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8C5A4B] hover:text-[#6E4236] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#DDD5C7] hover:border-[#8C5A4B] transition-colors"
                  >
                    <span>全國法規資料庫條文</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="space-y-1.5">
                  <span className="font-semibold text-[#8C5A4B] text-base">
                    第 6 條第 5 項（特定工廠用地之建蔽率與容積率標準）
                  </span>
                  <p className="text-base text-[#3E342F] leading-relaxed">
                    特定工廠申請變更編定為特定目的事業用地，其土地之建蔽率不得超過 70%、容積率不得超過 180%，並應配合規劃隔離綠帶或留設法定空地。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
