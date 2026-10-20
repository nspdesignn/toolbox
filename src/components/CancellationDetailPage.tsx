import React from 'react';
import {
  ArrowLeft,
  Layers,
  ArrowRight,
  Building2,
  CheckCircle2,
  AlertCircle,
  FileText,
  Landmark,
  ShieldCheck
} from 'lucide-react';

interface CancellationDetailPageProps {
  onBack: () => void;
}

// 作業流程導覽地圖 4 大標準步驟
const CANCELLATION_MAP_STEPS = [
  {
    step: 1,
    code: 'STEP 01',
    title: '收件',
    actor: '地政局',
    actorRole: '受理登錄與審核',
    badge: '程序起點',
    badgeColor: 'bg-[#1F3864] text-white',
    icon: FileText,
    summary: '收受目的事業主管局處廢止或撤銷興辦事業計畫公文，登錄收文案號建立專案列管，並調閱土地登記第一類謄本及地籍圖核對標示。'
  },
  {
    step: 2,
    code: 'STEP 02',
    title: '請城鄉發展局確認是否屬都市計畫範圍',
    actor: '城鄉發展局',
    actorRole: '範圍查復確認',
    badge: '關鍵查核',
    badgeColor: 'bg-[#B45309] text-white',
    icon: AlertCircle,
    highlight: true,
    summary: '函請或簽會城鄉發展局查復土地是否屬都市計畫範圍。如屬都市計畫範圍應依都市計畫法令處理；非都市土地方得續行辦理註銷編定。'
  },
  {
    step: 3,
    code: 'STEP 03',
    title: '發文請地所辦理註銷編定異動登記',
    actor: '地政局 ➔ 轄區地政事務所',
    actorRole: '簽准囑託登記',
    badge: '異動囑託',
    badgeColor: 'bg-[#1F3864] text-white',
    icon: Landmark,
    summary: '確認非屬都市計畫範圍後簽報核准，製作註銷變更編定恢復原編定清冊，正式發文囑託轄區地政事務所辦理土地登記簿異動登記。'
  },
  {
    step: 4,
    code: 'STEP 04',
    title: '地所報府備查',
    isFinal: true,
    actor: '轄區地政事務所 ➔ 地政局',
    actorRole: '備查審核歸檔',
    badge: '全案辦結！',
    badgeColor: 'bg-[#2E7D32] text-white',
    icon: ShieldCheck,
    summary: '轄區地政事務所辦竣土地登記簿標示部異動登記及圖冊標註後函報市府備查，審核謄本無誤後簽准同意備查，全案順利辦結歸檔！'
  }
];

export const CancellationDetailPage: React.FC<CancellationDetailPageProps> = ({ onBack }) => {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
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
                註銷編定
              </h1>
              <p className="text-sm sm:text-base text-[#5B584E] mt-0.5">
                標準作業流程：【收件】➔【請城鄉發展局確認是否屬都市計畫範圍】➔【發文請地所辦理註銷編定異動登記】➔【地所報府備查】結案！
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 作業流程導覽地圖 */}
      <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#ECE6DB] gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#F5EFE7] border border-[#DDD5C7] flex items-center justify-center text-[#8C5A4B]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-tc font-bold text-xl sm:text-2xl text-[#1F3864]">
                作業流程導覽地圖
              </h2>
              <p className="text-xs sm:text-sm text-[#7D7569] mt-0.5">
                辦理註銷編定恢復原編定之全流程節點導覽
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E8E1D5] text-xs font-semibold text-[#8C5A4B]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
            <span>4 步驟完整流程</span>
          </div>
        </div>

        {/* 流程地圖卡片網格與銜接導覽 */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {CANCELLATION_MAP_STEPS.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={s.step}
                className={`flex flex-col justify-between rounded-2xl p-5 border-2 transition-all relative ${
                  s.isFinal
                    ? 'bg-[#F0FDF4]/50 border-[#BBF7D0]'
                    : s.highlight
                    ? 'bg-[#FFFBEB]/50 border-[#FDE68A]'
                    : 'bg-[#FAF7F2] border-[#E8E1D5]'
                }`}
              >
                {/* 卡片上方：步驟編號與標籤 */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${s.badgeColor}`}>
                      步驟 {s.step}
                    </span>
                    <span className="text-2xs font-semibold text-[#8C5A4B] uppercase tracking-wider">
                      {s.code}
                    </span>
                  </div>

                  {/* 步驟標題 */}
                  <div className="flex items-start gap-2.5 mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      s.isFinal
                        ? 'bg-[#DCFCE7] text-[#166534]'
                        : s.highlight
                        ? 'bg-[#FEF3C7] text-[#92400E]'
                        : 'bg-[#EAE2D7] text-[#1F3864]'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif-tc font-bold text-base sm:text-lg text-[#1F3864] leading-snug">
                        【{s.title}】{s.isFinal ? '結案！' : ''}
                      </h3>
                    </div>
                  </div>

                  {/* 說明內文 */}
                  <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed mb-4">
                    {s.summary}
                  </p>
                </div>

                {/* 卡片底部：主責機關 */}
                <div className="pt-3 border-t border-[#E8E1D5] bg-[#FFFFFF]/70 rounded-xl p-2.5 mt-2">
                  <div className="text-2xs text-[#7D7569] font-medium flex items-center gap-1 mb-1">
                    <Building2 className="w-3 h-3 text-[#8C5A4B]" />
                    <span>主責機關 / 單位</span>
                  </div>
                  <div className="font-semibold text-xs text-[#1F3864] leading-tight">
                    {s.actor}
                  </div>
                </div>

                {/* 箭頭指示器（桌面版介於卡片之間） */}
                {idx < 3 && (
                  <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#FFFFFF] border border-[#DDD5C7] items-center justify-center shadow-xs text-[#8C5A4B]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 底部導覽流程總覽線條圖 */}
        <div className="mt-8 pt-6 border-t border-[#ECE6DB]">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-[#4A3E39]">
            <span className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#E8E1D5] text-[#1F3864]">
              【收件】
            </span>
            <ArrowRight className="w-4 h-4 text-[#8C5A4B]" />
            <span className="px-3 py-1.5 rounded-lg bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E]">
              【請城鄉發展局確認是否屬都市計畫範圍】
            </span>
            <ArrowRight className="w-4 h-4 text-[#8C5A4B]" />
            <span className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#E8E1D5] text-[#1F3864]">
              【發文請地所辦理註銷編定異動登記】
            </span>
            <ArrowRight className="w-4 h-4 text-[#8C5A4B]" />
            <span className="px-3 py-1.5 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] text-[#166534]">
              【地所報府備查】結案！
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
