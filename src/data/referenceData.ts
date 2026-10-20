import { CountyDateInfo } from '../types';

export const COUNTY_ANNOUNCEMENT_DATES: CountyDateInfo[] = [
  { county: '基隆市', announcementDate: '民國 70 年 2 月 15 日', effectiveDate: '70.02.15', legalNote: '編定前合法建物之證明文件，需早於70年2月15日以前已存在。' },
  { county: '新北市（原台北縣）', announcementDate: '民國 70 年 2 月 15 日', effectiveDate: '70.02.15', legalNote: '早期部分地區分期分區公告，大部分鄉鎮於70年2月15日生效。' },
  { county: '桃園市（原桃園縣）', announcementDate: '民國 70 年 2 月 15 日', effectiveDate: '70.02.15', legalNote: '大園、觀音、新屋、楊梅等區均以70年2月15日為基準日。' },
  { county: '新竹縣', announcementDate: '民國 69 年 6 月 1 日', effectiveDate: '69.06.01', legalNote: '竹北、新埔、關西、竹東等鄉鎮公告編定基準日為69年6月1日。' },
  { county: '新竹市', announcementDate: '民國 69 年 6 月 1 日', effectiveDate: '69.06.01', legalNote: '原新竹縣市合併時期公告，基準日為69年6月1日。' },
  { county: '苗栗縣', announcementDate: '民國 69 年 6 月 1 日', effectiveDate: '69.06.01', legalNote: '全縣非都市土地編定公告生效日為69年6月1日。' },
  { county: '台中市（原台中縣）', announcementDate: '民國 69 年 6 月 1 日', effectiveDate: '69.06.01', legalNote: '豐原、大甲、清水、沙鹿、太平、霧峰等區以69年6月1日為基準。' },
  { county: '彰化縣', announcementDate: '民國 69 年 6 月 1 日', effectiveDate: '69.06.01', legalNote: '全縣非都市土地公告編定日期為民國69年6月1日。' },
  { county: '南投縣', announcementDate: '民國 69 年 6 月 1 日', effectiveDate: '69.06.01', legalNote: '草屯、埔里、竹山、南投等鄉鎮公告編定日為69年6月1日。' },
  { county: '雲林縣', announcementDate: '民國 73 年 11 月 20 日', effectiveDate: '73.11.20', legalNote: '斗六、虎尾、西螺、北港等鄉鎮公告生效日為73年11月20日。' },
  { county: '嘉義縣', announcementDate: '民國 73 年 11 月 20 日', effectiveDate: '73.11.20', legalNote: '民雄、朴子、水上、竹崎等公告生效日為73年11月20日。' },
  { county: '嘉義市', announcementDate: '民國 73 年 11 月 20 日', effectiveDate: '73.11.20', legalNote: '嘉義市轄區非都市土地基準日為73年11月20日。' },
  { county: '台南市（原台南縣）', announcementDate: '民國 65 年 6 月 1 日', effectiveDate: '65.06.01', legalNote: '全臺首批實施非都市土地編定縣市之一，基準日為65年6月1日。' },
  { county: '高雄市（原高雄縣）', announcementDate: '民國 65 年 6 月 1 日', effectiveDate: '65.06.01', legalNote: '岡山、旗山、鳳山等原高雄縣轄區公告基準日為65年6月1日。' },
  { county: '屏東縣', announcementDate: '民國 64 年 10 月 6 日', effectiveDate: '64.10.06', legalNote: '全臺最早公告實施非都市土地編定縣市，基準日為64年10月6日。' },
  { county: '宜蘭縣', announcementDate: '民國 73 年 10 月 15 日', effectiveDate: '73.10.15', legalNote: '宜蘭、羅東、礁溪、冬山等公告生效日為73年10月15日。' },
  { county: '花蓮縣', announcementDate: '民國 74 年 11 月 16 日', effectiveDate: '74.11.16', legalNote: '吉安、壽豐、玉里、瑞穗等公告基準日為74年11月16日。' },
  { county: '臺東縣', announcementDate: '民國 74 年 11 月 16 日', effectiveDate: '74.11.16', legalNote: '台東市周邊、卑南、成功、關山等基準日為74年11月16日。' },
  { county: '澎湖縣', announcementDate: '民國 76 年 3 月 31 日', effectiveDate: '76.03.31', legalNote: '馬公及各離島公告編定生效日為76年3月31日。' },
  { county: '金門縣', announcementDate: '民國 85 年 1 月 20 日', effectiveDate: '85.01.20', legalNote: '金門地區戰地政務終止後實施非都市編定基準日為85年1月20日。' },
  { county: '連江縣', announcementDate: '民國 86 年 12 月 31 日', effectiveDate: '86.12.31', legalNote: '馬祖地區公告編定基準日為86年12月31日。' }
];

export const PENALTY_TIERS = [
  {
    tier: '第一次違規（情節輕微）',
    fineRange: '新臺幣 60,000 元',
    criteria: '違規面積在 500 平方公尺以下，且非屬傾倒廢棄物或破壞水土保持之重大行為者。',
    actionRequired: '發函裁處 6 萬元罰鍰，並限期 1 至 3 個月內停止違規使用或恢復原編定使用。'
  },
  {
    tier: '第一次違規（情節重大）',
    fineRange: '新臺幣 90,000 ～ 150,000 元',
    criteria: '違規面積逾 1,000 平方公尺、大規模填土整地、搭建大型未經核准廠房，或位於重要水源保護區。',
    actionRequired: '加重處分，限期 1 個月內清除，逾期複查得連續處罰並限期斷水斷電。'
  },
  {
    tier: '經限期未改善（連續處罰）',
    fineRange: '新臺幣 150,000 ～ 300,000 元',
    criteria: '經前次處分限期改善期滿，會同各機關複查仍未恢復原狀或繼續營運作業。',
    actionRequired: '依區域計畫法第21條第2項按次處罰，簽報斷水斷電、強制拆除，並得依第22條移送地方檢察署。'
  },
  {
    tier: '刑事責任移送',
    fineRange: '處 6 個月以下有期徒刑或拘役',
    criteria: '經主管機關命其限期恢復原狀而不遵從，持續違法開發或再犯情節惡劣者。',
    actionRequired: '檢齊歷次現勘紀錄、行政處分書、送達回執及複查照片，依刑事訴訟法第241條函送地檢署偵辦。'
  }
];

export const COMMON_FORMS_AND_CONTACTS = [
  {
    name: '非都市土地變更編定申請書',
    office: '縣府地政處地用科',
    remark: '申請興辦事業核准後變更用地時必備表件。'
  },
  {
    name: '更正編定申請書暨證明文件審查表',
    office: '轄區地政事務所 / 縣府地政處',
    remark: '檢附編定前水電、稅籍、航照及戶籍證明申辦。'
  },
  {
    name: '現場會勘紀錄表（違規聯合稽查用）',
    office: '地政、農業、建管、環保、公所',
    remark: '現場定位GPS、違規面積測量、行為人陳述簽名。'
  },
  {
    name: '行政程序法第102條陳述意見通知書函稿',
    office: '縣府地政處違規查處小組',
    remark: '開罰前法定絕對必經程序，限期7~10日陳述。'
  },
  {
    name: '農業用地作農業設施容許使用申請書',
    office: '鄉鎮市區公所農建課 / 縣府農業處',
    remark: '農作產銷設施、溫室、資材室、畜牧設施專用。'
  },
  {
    name: '露營場設置許可申請書',
    office: '縣府觀光處 / 觀光局',
    remark: '農牧林業用地1公頃以下微型露營場專用。'
  }
];
