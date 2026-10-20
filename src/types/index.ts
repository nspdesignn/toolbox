export type ModuleId =
  | 'change-designation' // 變更編定
  | 'enterprise-review' // 興辦事業審查
  | 'correction' // 更正編定
  | 'illegal-use' // 違規使用
  | 'permitted-use' // 容許使用
  | 'supplementary-designation' // 補辦編定
  | 'zoning-adjustment' // 分區調整
  | 'supplementary-note' // 補註用地
  | 'cancellation' // 註銷編定
  | 'petition-management' // 人陳案管
  | 'administrative-appeal' // 訴願＆訴訟
  | 'reports-evaluations' // 報表、考核、會議
  | 'publicity' // 宣導
  | 'others'; // 專題報告

export interface BusinessModule {
  id: ModuleId;
  name: string;
  desc: string;
  tag: string;
  active: boolean;
  category: 'core' | 'enforcement' | 'administrative';
  summary: string;
  primaryLaw: string;
  keySteps: string[];
  commonPitfalls: string[];
}

export type CaseOrigin =
  | 'public_apply' // 民眾送件申請
  | 'township_report' // 鄉鎮市區公所查報
  | 'competent_authority' // 目的事業主管機關函送/核准興辦
  | 'building_court_dep' // 建管/法院/地政所囑託會勘或更正
  | 'public_petition'; // 人民檢舉陳情 / 1999

export type LandCurrentState =
  | 'agri_forestry' // 農牧用地 / 林業用地 / 養殖用地
  | 'building_land' // 甲/乙/丙/丁種建築用地
  | 'special_purpose' // 特定目的事業用地 / 公共設施
  | 'unassigned' // 未編定土地
  | 'special_restricted'; // 國家公園 / 特定水土保持區 / 河川區

export type ApplicantGoal =
  | 'build_residence_old' // 老舊建物/房屋欲辦理建地登記（早於編定公告前）
  | 'build_farmhouse' // 擬興建自用農舍
  | 'apply_permitted_agri' // 擬作農作產銷設施、資材室、溫室
  | 'business_camping_solar' // 擬申設露營場、休閒農場或再生能源設施
  | 'business_plan_change' // 已取得目的事業興辦核准，欲變更編定用地
  | 'illegal_use_checking' // 收到違規使用查報、堆置土石、違建或工廠
  | 'petition_dispute'; // 鄰地爭議、陳情反映未依法使用

export interface WizardResult {
  title: string;
  routeType: string;
  recommendedModule: ModuleId;
  badgeColor: 'navy' | 'emerald' | 'amber' | 'crimson';
  immediateNextAction: string[];
  requiredDocsChecklist: string[];
  legalBasis: string[];
  handlingDeadline: string;
  newbieTips: string[];
  documentTemplateSnippet: string;
}

export interface RegulationItem {
  id: string;
  category: 'law' | 'rule' | 'interpretation';
  title: string;
  number: string;
  issueDate?: string;
  source: string;
  summary: string;
  keyPoints: string[];
  fullContent: string;
  tags: string[];
}

export interface CaseExample {
  id: string;
  title: string;
  moduleId: ModuleId;
  landInfo: string;
  factSummary: string;
  handlingProcess: {
    step: string;
    action: string;
    note: string;
  }[];
  criticalDecision: string;
  outcome: string;
  documentTemplate: {
    title: string;
    recipient: string;
    subject: string;
    descriptions: string[];
  };
}

export interface CountyDateInfo {
  county: string;
  announcementDate: string;
  effectiveDate: string;
  legalNote: string;
}
