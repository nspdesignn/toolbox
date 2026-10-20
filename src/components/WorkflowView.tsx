import React, { useState } from 'react';
import { ArrowRight, CheckCircle, AlertTriangle, Clock, BookOpen, Layers } from 'lucide-react';

interface WorkflowStep {
  title: string;
  leadOffice: string;
  duration: string;
  description: string;
  keyCheck: string;
  pitfall: string;
}

interface WorkflowData {
  id: string;
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
}

const WORKFLOWS: WorkflowData[] = [
  {
    id: 'correction',
    title: '更正編定業務審查流程',
    subtitle: '非都市土地使用管制規則第35條之1 · 合法老舊房屋更正為建築用地',
    steps: [
      {
        title: '收件與地籍產權初審',
        leadOffice: '縣府地政處地用科 / 轄區地政所',
        duration: '1～2 日',
        description: '核對更正編定申請書、近3個月土地登記謄本、地籍圖謄本及申請人權利證明文件。',
        keyCheck: '確認土地現行編定是否為農牧或林業等非建築用地，且無法院查封或假扣押等限制登記。',
        pitfall: '若該地號先前已有更正編定駁回確定之紀錄且未提新事證者，注意一事不再理原則。'
      },
      {
        title: '查核該縣市編定公告基準日',
        leadOffice: '承辦人調閱歷史檔案清冊',
        duration: '即時',
        description: '檢視該宗地所屬鄉鎮市區非都市土地公告編定生效日期（如新竹縣、台中市為69.6.1，新北市為70.2.15）。',
        keyCheck: '以該公告日期為絕對基準日，申請人所附合法證明文件必須在此日期前即已具備。',
        pitfall: '切勿以「土地登記取得日期」或「戶長出生日」當基準，必須以「非都市土地公告實施日」為準。'
      },
      {
        title: '實質審查編定前合法建物證明',
        leadOffice: '地政處會審台電、台水、稅捐、戶政',
        duration: '5～7 日',
        description: '核驗老屋水電接水通電證明、舊房屋稅籍證明、戶籍謄本及農航所歷史航照正射影像。',
        keyCheck: '水電證明需有裝表供電起算日；舊稅籍證明需載明構造（土埆、磚造或木石造）及起課年份。',
        pitfall: '單憑戶籍謄本而無法佐證現場確有合法實體建築物者，依規定不得准予更正編定。'
      },
      {
        title: '排定現場實勘與建物投影測量',
        leadOffice: '地政處會同地所測量課、建管科',
        duration: '3～5 日',
        description: '至現地比對現況建物構造是否與歷史航照圖一致，由測量員實地測繪建物投影面積及法定空地。',
        keyCheck: '僅以編定公告前原合法建物主體範圍為測量基準，確認出入現有通路情況。',
        pitfall: '公告後自行增建之鋼骨鐵皮、雨遮或違建擴建部分，絕不可一併納入更正編定範圍。'
      },
      {
        title: '核准更正並辦理逕為分割異動登記',
        leadOffice: '縣府核定函囑轄區地政事務所',
        duration: '3～5 日',
        description: '審查合格者，簽報府一層核定，發函囑託地政事務所逕為辦理土地標示分割測量，將合法建物基地更正為甲/丙種建築用地。',
        keyCheck: '分割後母筆維持原農牧用地，子筆更正為建築用地，並副知稅捐機關辦理稅籍調整。',
        pitfall: '發函後應追蹤地政事務所登載成果，並切實將成果卷宗歸檔以利日後查核。'
      }
    ]
  },
  {
    id: 'change',
    title: '變更編定審查作業流程',
    subtitle: '非都市土地使用管制規則第27條至第35條 · 興辦事業核准後變更',
    steps: [
      {
        title: '目的事業主管機關核定興辦事業計畫',
        leadOffice: '各目的事業主管機關（如農業/經發/教育/觀光局）',
        duration: '依目的事業規程（約1～3個月）',
        description: '興辦人向目的事業主管機關提送興辦事業計畫書（例如幼兒園、安養機構、農產加工廠、太陽能），經審查核發核定函。',
        keyCheck: '核定函必須載明核准之土地地號、面積、計畫用途及有效期限。',
        pitfall: '未取得目的事業核准函即向地政科送件者，應立即退件，地政非興辦審查機關。'
      },
      {
        title: '檢具核准文件向地政處申請變更編定',
        leadOffice: '縣府地政處地用科',
        duration: '2～3 日',
        description: '檢送變更編定申請書、目的事業核准函正本、土地使用同意書、地籍圖及相關會審圖說。',
        keyCheck: '確認申請變更範圍未超出目的事業核定範圍，土地產權清楚無爭端。',
        pitfall: '共有土地若未達土地法第34條之1規定之人數與持分門檻，不得受理變更。'
      },
      {
        title: '跨局處實質會審（建管/環保/水保/農業）',
        leadOffice: '地政處主政，會辦跨局處',
        duration: '14～21 日',
        description: '會同建管科審查道路通行條件；會同水利/水保審查水土保持完工；會同環保局確認免環評或環評通過。',
        keyCheck: '山坡地範圍需確認水土保持保證金繳納或完工證明；農地變更需農業局核發農地變更同意函。',
        pitfall: '臨接通路寬度若未達目的事業標準（一般需6米或指定建築線），建管單位將退回。'
      },
      {
        title: '核算並繳納農業用地變更回饋金',
        leadOffice: '農業處核算，申請人繳款',
        duration: '7～14 日',
        description: '農牧用地變更為非農業使用地者，依農業發展條例第12條核算變更面積當期公告土地現值之50%回饋金。',
        keyCheck: '查核繳款收據是否已全額入國庫（農業發展基金），或有無符合社福公益法定減免規定。',
        pitfall: '未完成回饋金繳納前，地政處絕對不得核發變更編定公函或囑託異動。'
      },
      {
        title: '核定變更編定並辦理使用地異動登記',
        leadOffice: '縣府地政處發函囑託地政事務所',
        duration: '3～5 日',
        description: '府函核准變更編定（如農牧用地變更為特定目的事業用地），囑託地政事務所辦理土地登記簿異動登記。',
        keyCheck: '造具變更編定核准清冊，上傳內政部地政資訊整合系統，列管興辦動工時效。',
        pitfall: '提醒申請人變更後若未依計畫使用或限期未動工，目的事業機關得撤銷興辦，屆時需辦理註銷編定。'
      }
    ]
  },
  {
    id: 'illegal',
    title: '違規使用查處五階段標準處置SOP',
    subtitle: '區域計畫法第21條、第22條 · 查報、現勘、陳述意見、裁處與執行',
    steps: [
      {
        title: '第一階段：查報收案與初審登錄',
        leadOffice: '縣府地政處地用科違規查處組',
        duration: '1～2 日',
        description: '接獲鄉鎮市區公所查報單、首長信箱檢舉或1999派工，建立地用列管案號並下載土地登記謄本與地籍套繪圖。',
        keyCheck: '查核被檢舉地號之使用分區及使用地，調閱歷史裁罰紀錄確認是否為再犯。',
        pitfall: '未查明地號即盲目派員，造成公帑浪費；檢舉人身分應嚴格保密。'
      },
      {
        title: '第二階段：跨單位聯合現地勘查取證',
        leadOffice: '地政、農業、建管、環保、公所',
        duration: '3～5 日',
        description: '赴現地進行聯合勘查，測量違規面積，拍攝全景、特寫、機械機具及地界標的照片，製作會勘紀錄表。',
        keyCheck: '記錄表應記載違規行為態樣（填土、鐵皮廠房、露營棚架等）、面積、使用人及現場人員簽名。',
        pitfall: '現場照片未開啟時間戳記或缺乏地標物比對，後續訴願容易遭質疑證據力。'
      },
      {
        title: '第三階段：函請受處分人限期陳述意見',
        leadOffice: '縣府地政處',
        duration: '7～10 日（等候陳述期）',
        description: '依行政程序法第102條發函土地所有權人或實際違規行為人，通知其於文到7至10日內提出書面陳述意見。',
        keyCheck: '務必使用「雙掛號附郵政送達證書」寄送，妥善保存送達回執確認相對人何時簽收。',
        pitfall: '【極嚴重地雷】若未踐行陳述意見程序即直接開罰，該處分在訴願審議委員會100%遭撤銷！'
      },
      {
        title: '第四階段：裁處審議與開立罰鍰處分書',
        leadOffice: '縣府地政處裁罰審查會議',
        duration: '7～14 日',
        description: '相對人逾期未陳述或陳述無理由者，依區域計畫法第21條裁處新臺幣6萬至30萬元罰鍰，並限期恢復原狀。',
        keyCheck: '處分書主文需併列「罰鍰金額」與「限期令其變更使用、停止使用或拆除其地上物恢復原狀」。',
        pitfall: '裁罰對象以「實際違規行為人」為首要；若地主已善盡監督管理義務，不宜逕罰無辜地主。'
      },
      {
        title: '第五階段：改善期滿複查與執行/司法移送',
        leadOffice: '地政處會同各局處',
        duration: '限期屆滿後10日內',
        description: '期限屆滿赴現場複查。已恢復原狀者准予銷案列管；逾期未改善者連續處罰，情節重大者移送地檢署（§22）。',
        keyCheck: '複查仍未改善者，簽報自來水、台電辦理停止供電供水，並函送地檢署偵辦刑事責任。',
        pitfall: '改善期滿未及時複查列管，形成行政怠惰，遭政風或監察機關糾正。'
      }
    ]
  },
  {
    id: 'permitted',
    title: '容許使用分流判定流程',
    subtitle: '非都市土地使用管制規則第6條及附表一 · 免辦變更編定之合法途徑',
    steps: [
      {
        title: '確認土地使用地類別',
        leadOffice: '承辦人查閱土地登記謄本',
        duration: '即時',
        description: '確認土地標示部之編定（如農牧用地、林業用地、養殖用地或甲/乙種建築用地）。',
        keyCheck: '分區與使用地須為非都市土地，都市計畫農業區適用都市計畫法規，非本規則範圍。',
        pitfall: '若土地屬國家公園區，應依國家公園法辦理，非都市土地管制規則不適用。'
      },
      {
        title: '對照附表一判定「免申請」或「需許可」',
        leadOffice: '承辦人查閱管制規則附表一',
        duration: '即時',
        description: '查閱該使用地項下是否列有擬使用項目。若屬「免經許可」即可直接使用；若屬「許可細目」則需提送申請。',
        keyCheck: '如一般耕作農作免經許可；若要搭設溫室、資材室、堆肥舍，則屬需經主管機關許可之細目。',
        pitfall: '勿將需經許可之固定建築設施，當作免經許可項目直接放行。'
      },
      {
        title: '送請各該目的事業主管機關實質審查',
        leadOffice: '農業處、觀光處、經綠處等',
        duration: '14～30 日',
        description: '申請人檢具容許使用申請書及經營計畫，送各主政機關（農作設施送農業處、露營場送觀光處）審核。',
        keyCheck: '檢核各項設施之建蔽率（如農業設施總面積一般不得逾農地40%）與設置標準。',
        pitfall: '地用科切勿跨俎代庖審查農業設施之農業經營必要性，應由農業專業主管機關判定。'
      },
      {
        title: '核發容許使用同意書與備查列管',
        leadOffice: '目的事業機關核准，副知地政機關',
        duration: '3～5 日',
        description: '目的事業主管機關核發容許使用同意書，副知轄區地政事務所於地政系統註記列管，免辦地目變更。',
        keyCheck: '設施如屬建築物構造，應同時依建築法規定申領免照證明或建造執照。',
        pitfall: '容許使用同意書不等同建築執照，涉實體建物仍需建管程序。'
      }
    ]
  }
];

export const WorkflowView: React.FC = () => {
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string>('correction');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeWorkflow = WORKFLOWS.find((w) => w.id === selectedWorkflowId) || WORKFLOWS[0];
  const activeStep = activeWorkflow.steps[activeStepIndex] || activeWorkflow.steps[0];

  return (
    <div className="space-y-6">
      {/* Header and Workflow Selector */}
      <div className="bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E4DCC8]">
          <div>
            <div className="text-xs font-semibold text-[#1F3864] uppercase tracking-wider mb-1">
              標準作業指引
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-tc text-[#1F3864]">
              非都市土地核心業務流程導引
            </h2>
            <p className="text-xs sm:text-sm text-[#5B584E] mt-1">
              點選各業務流程及階段步驟，檢視主政單位、審查時限、關鍵檢核點與新人避坑須知。
            </p>
          </div>

          {/* Workflow Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#FAF8F2] border border-[#E4DCC8] rounded-lg overflow-x-auto text-xs font-semibold">
            {WORKFLOWS.map((w) => (
              <button
                key={w.id}
                onClick={() => {
                  setSelectedWorkflowId(w.id);
                  setActiveStepIndex(0);
                }}
                className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedWorkflowId === w.id
                    ? 'bg-[#1F3864] text-white shadow-xs'
                    : 'text-[#5B584E] hover:text-[#1F3864]'
                }`}
              >
                {w.title.replace('審查流程', '').replace('業務', '').replace('作業流程', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Workflow Title and Subtitle */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-[#1F3864]">{activeWorkflow.title}</h3>
            <p className="text-xs text-[#5B584E] mt-0.5">{activeWorkflow.subtitle}</p>
          </div>
          <span className="text-xs font-medium text-[#1F3864] bg-[#FAF8F2] px-2.5 py-1 rounded-md border border-[#E4DCC8] self-start sm:self-auto">
            共 {activeWorkflow.steps.length} 個標準推進步驟
          </span>
        </div>
      </div>

      {/* Interactive Step Navigator Bar */}
      <div className="bg-[#FFFFFF] border-2 border-[#E4DCC8] rounded-xl p-4 sm:p-5 shadow-xs overflow-x-auto">
        <div className="flex items-center gap-2 min-w-[680px]">
          {activeWorkflow.steps.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <React.Fragment key={idx}>
                <button
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex-1 p-3 rounded-lg border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1F3864] text-white border-[#1F3864] shadow-sm'
                      : 'bg-[#FAF8F2] text-[#2A2822] border-[#E4DCC8] hover:border-[#1F3864]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span
                      className={`font-mono font-bold ${
                        isSelected ? 'text-amber-300' : 'text-[#5B584E]'
                      }`}
                    >
                      步驟 0{idx + 1}
                    </span>
                    <span
                      className={`text-[11px] ${
                        isSelected ? 'text-slate-200' : 'text-[#5B584E]'
                      }`}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-bold truncate ${
                      isSelected ? 'text-white' : 'text-[#1F3864]'
                    }`}
                  >
                    {step.title}
                  </div>
                </button>
                {idx < activeWorkflow.steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#8A8576] shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Step Deep-Dive Inspector */}
      <div className="bg-[#FFFFFF] border-2 border-[#1F3864] rounded-xl overflow-hidden shadow-xs">
        <div className="bg-[#1F3864] text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="text-xs text-amber-200 uppercase font-mono font-bold">
              STEP 0{activeStepIndex + 1} OF 0{activeWorkflow.steps.length}
            </div>
            <h4 className="text-lg sm:text-xl font-bold font-serif-tc text-white mt-0.5">
              {activeStep.title}
            </h4>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="bg-white/15 px-2.5 py-1 rounded-md text-white border border-white/20">
              主責單位：{activeStep.leadOffice}
            </span>
            <span className="bg-amber-400 text-slate-900 font-bold px-2.5 py-1 rounded-md">
              時限：{activeStep.duration}
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-6">
          {/* Detailed description */}
          <div>
            <h5 className="text-xs font-bold text-[#5B584E] uppercase tracking-wider mb-2">
              實務處置說明
            </h5>
            <p className="text-sm sm:text-base text-[#2A2822] leading-relaxed">
              {activeStep.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Key check item */}
            <div className="p-4 bg-[#FAF8F2] border border-[#E4DCC8] rounded-xl">
              <h5 className="text-xs font-bold text-[#1F3864] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <CheckCircle className="w-4 h-4 text-[#235A3D]" />
                <span>關鍵審查重點（審核標準）</span>
              </h5>
              <p className="text-xs sm:text-sm text-[#2A2822] leading-relaxed">
                {activeStep.keyCheck}
              </p>
            </div>

            {/* Pitfall */}
            <div className="p-4 bg-[#FEF6F0] border border-[#F5C2A5] rounded-xl">
              <h5 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>新人避坑叮嚀（常見瑕疵）</span>
              </h5>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                {activeStep.pitfall}
              </p>
            </div>
          </div>

          {/* Navigation Controls between steps */}
          <div className="pt-4 border-t border-[#E4DCC8] flex items-center justify-between">
            <button
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeStepIndex === 0}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-colors cursor-pointer ${
                activeStepIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200'
                  : 'bg-[#FAF8F2] text-[#1F3864] border-[#E4DCC8] hover:bg-[#1F3864] hover:text-white'
              }`}
            >
              ← 上一步驟
            </button>

            <span className="text-xs text-[#5B584E]">
              {activeStepIndex + 1} / {activeWorkflow.steps.length}
            </span>

            <button
              onClick={() =>
                setActiveStepIndex((prev) => Math.min(activeWorkflow.steps.length - 1, prev + 1))
              }
              disabled={activeStepIndex === activeWorkflow.steps.length - 1}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-colors cursor-pointer ${
                activeStepIndex === activeWorkflow.steps.length - 1
                  ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200'
                  : 'bg-[#FAF8F2] text-[#1F3864] border-[#E4DCC8] hover:bg-[#1F3864] hover:text-white'
              }`}
            >
              下一步驟 →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
