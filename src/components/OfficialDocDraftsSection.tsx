import React, { useState } from 'react';
import {
  FileText,
  Copy,
  Check,
  Search,
  ExternalLink,
  ChevronRight,
  Printer,
  Sparkles,
  Layers,
  Building2,
  Calendar,
  AlertTriangle,
  Send
} from 'lucide-react';

export interface DocDraftTemplate {
  id: string;
  itemNumber: number;
  title: string;
  subtitle: string;
  flowStage: string;
  category: '函' | '簽' | '簽函併陳';
  recipientDefault: string;
  attachmentsDefault: string;
  subject: string;
  descriptions: string[];
  originalCopy: string;
  carbonCopy: string;
  decisionNote: string;
  hasSubDrafts?: boolean;
  subDrafts?: {
    id: string;
    subTitle: string;
    type: '簽' | '函';
    subject: string;
    bodyText: string;
  }[];
  fullPlainText: string;
}

export const OFFICIAL_DOC_TEMPLATES: DocDraftTemplate[] = [
  {
    id: 'draft-1',
    itemNumber: 1,
    title: '會辦各單位+會勘+繳規費',
    subtitle: '申請人送件後，同時辦理：通知會勘、通知繳納規費、會審各相關局處',
    flowStage: '流程第 2 步（會同相關主管機關現場會勘）',
    category: '函',
    recipientDefault: 'OO 君',
    attachmentsDefault: '如說明二（繳款書 3 聯單 1 份、審查表及分工表）',
    subject:
      '有關 OO 申請坐落本市 OO 區 OO 段 OO 地號土地，面積 OO 公頃，擬由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，茲訂於 O 年 O 月 O 日（星期 O）O 午 O 時 O 分至現場會同勘查，屆時請協助領勘，請查照。',
    descriptions: [
      '一、依(申請人)O 年 O 月 O 日非都市土地變更編定申請書辦理。',
      '二、依非都市土地使用管制規則第 28 條暨本市非都市土地變更編定收費標準規定，本案應繳納規費新臺幣 OOOO 元整，隨文檢附繳款書 3 聯單 1 份，請於會勘前持繳款書逕至臺灣銀行各分行繳納，繳款書影本請傳真至本府地政局續辦，嗣後本案是否核准，依規定均不得請求返還。',
      '三、本案經書面審核符合非都市土地使用管制規則第 28 條規定，依非都市土地變更編定執行要點第 5 點規定，由本府地政局按非都市土地變更編定審查表及有關規定簽會相關單位及實地會勘。',
      '四、副本抄送：\n(一)本府 OO 局：本案係位於山坡地範圍，依內政部 96 年 7 月 31 日內授中辦地字第 0960726558 號令頒「非都市山坡地範圍內土地變更編定審查原則」（詳附件），經本府於 98 年 1 月 10 日簽准各原則審查單位權責之分工，其中項次 4、7、9、10、12 項係由目的事業主管機關審查，貴局為本案之目的事業主管機關，請貴局就上開審查原則表示意見，檢送申請文件 1 份供參。\n(二)本府工務局(建照科)、本府農業局(農牧經營管理科、山坡地保育科、林務科)、本府環境保護局、本府水利局、本府養護工程處：\n１、檢送申請文件及「本市非都市土地變更編定審查表」各 1 份（同單位各科請共同使用），請依所訂之會辦(審)期限內（農業局 20 日、工務局 10 日、水利局 15 日、環境保護局 7 日）填妥該審查表，並協助檢視有無新增或修正意見後函復本府地政局彙辦，另審查項目如須會辦各科，請務必彙整各科意見後統一回復。\n２、本案係位屬山坡地範疇，請依「新北市非都市山坡地範圍內土地變更編定審查原則分工表」（隨文檢送）涉貴管審查事項請協助填妥該審查表，並確認有無新增或修正意見，本府農業局：審查事項 2，本府工務局：審查事項 1、7、14，本府水利局：審查事項 11、13，本府環境保護局：審查事項 3。\n(三)副本單位：會勘當日請派員與勘，倘欲一同搭車前往者，請先來電告知。\n(四)本市 OO 地政事務所：會勘是日請惠予派員協助指界。'
    ],
    originalCopy: 'OO 君',
    carbonCopy:
      '新北市政府 OO 局(含附件)、新北市政府工務局(含附件)、新北市政府農業局(含附件)、新北市政府水利局(含附件)、新北市政府環境保護局(含附件)、新北市政府養護工程處(含附件)、新北市 OO 地政事務所',
    decisionNote: '本案依分層負責規定授權業務主管決行\n會辦單位：\n第三層決行',
    fullPlainText: `受文者：OO 君
發文日期：
發文字號：
速別：
密等及解密條件或保密期限：
附件：如說明二

主旨：有關 OO 申請坐落本市 OO 區 OO 段 OO 地號土地，面積 OO 公頃，擬由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，茲訂於 O 年 O 月 O 日（星期 O）O 午 O 時 O 分至現場會同勘查，屆時請協助領勘，請查照。

說明：
一、依(申請人)O 年 O 月 O 日非都市土地變更編定申請書辦理。
二、依非都市土地使用管制規則第 28 條暨本市非都市土地變更編定收費標準規定，本案應繳納規費新臺幣 OOOO 元整，隨文檢附繳款書 3 聯單 1 份，請於會勘前持繳款書逕至臺灣銀行各分行繳納，繳款書影本請傳真至本府地政局續辦，嗣後本案是否核准，依規定均不得請求返還。
三、本案經書面審核符合非都市土地使用管制規則第 28 條規定，依非都市土地變更編定執行要點第 5 點規定，由本府地政局按非都市土地變更編定審查表及有關規定簽會相關單位及實地會勘。
四、副本抄送：
(一)本府 OO 局：本案係位於山坡地範圍，依內政部 96 年 7 月 31 日內授中辦地字第 0960726558 號令頒「非都市山坡地範圍內土地變更編定審查原則」（詳附件），經本府於 98 年 1 月 10 日簽准各原則審查單位權責之分工，其中項次 4、7、9、10、12 項係由目的事業主管機關審查，貴局為本案之目的事業主管機關，請貴局就上開審查原則表示意見，檢送申請文件 1 份供參。
(二)本府工務局(建照科)、本府農業局(農牧經營管理科、山坡地保育科、林務科)、本府環境保護局、本府水利局、本府養護工程處：
１、檢送申請文件及「本市非都市土地變更編定審查表」各 1 份（同單位各科請共同使用），請依所訂之會辦(審)期限內（農業局 20 日、工務局 10 日、水利局 15 日、環境保護局 7 日）填妥該審查表，並協助檢視有無新增或修正意見後函復本府地政局彙辦，另審查項目如須會辦各科，請務必彙整各科意見後統一回復。
２、本案係位屬山坡地範疇，請依「新北市非都市山坡地範圍內土地變更編定審查原則分工表」（隨文檢送）涉貴管審查事項請協助填妥該審查表，並確認有無新增或修正意見，本府農業局：審查事項 2，本府工務局：審查事項 1、7、14，本府水利局：審查事項 11、13，本府環境保護局：審查事項 3。
(三)副本單位：會勘當日請派員與勘，倘欲一同搭車前往者，請先來電告知。
(四)本市 OO 地政事務所：會勘是日請惠予派員協助指界。

正本：OO 君
副本：新北市政府 OO 局(含附件)、新北市政府工務局(含附件)、新北市政府農業局(含附件)、新北市政府水利局(含附件)、新北市政府環境保護局(含附件)、新北市政府養護工程處(含附件)、新北市 OO 地政事務所

本案依分層負責規定授權業務主管決行
會辦單位：
第三層決行`
  },
  {
    id: 'draft-2',
    itemNumber: 2,
    title: '補正(非必要)',
    subtitle: '彙整各單位審查意見後，開立 15 日補正期限函知申請人',
    flowStage: '流程第 3 步（確認各單位意見有無補正事項）',
    category: '函',
    recipientDefault: 'OO',
    attachmentsDefault: '如說明一',
    subject:
      '有關 OO 申請本市 OO 區 OO 段 OO 地號土地，面積 OOO 公頃，擬由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，請依說明段辦理，請查照。',
    descriptions: [
      '一、依(申請人)O 年 O 月 O 日函、非都市土地變更編定申請書、本府 OO 局 O 年 O 月 O 日 OOO 號函（影附）辦理。',
      '二、本案請依下列事項補正，俾憑續辦變更編定事宜：\n(一)涉「OO」一節：請 OO。\n(二)涉「OO」一節：請 OO。',
      '三、另為免變更編定案件懸而未決，請於文到 15 日內速依上開說明辦理，逾期全案將先予退還，嗣後若經補正，得再依非都市土地使用管制規則第 28 條規定，重新申請變更編定。'
    ],
    originalCopy: 'OO',
    carbonCopy: 'OO、新北市政府 OO 局',
    decisionNote: '本案依分層負責規定授權業務主管決行\n會辦單位：\n第三層決行',
    fullPlainText: `受文者：
發文日期：
發文字號：新北府地管字第 OOO 號
速別：
密等及解密條件或保密期限：
附件：如說明一

主旨：有關 OO 申請本市 OO 區 OO 段 OO 地號土地，面積 OOO 公頃，擬由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，請依說明段辦理，請查照。

說明：
一、依(申請人)O 年 O 月 O 日函、非都市土地變更編定申請書、本府 OO 局 O 年 O 月 O 日 OOO 號函（影附）辦理。
二、本案請依下列事項補正，俾憑續辦變更編定事宜：
(一)涉「OO」一節：請 OO。
(二)涉「OO」一節：請 OO。
三、另為免變更編定案件懸而未決，請於文到 15 日內速依上開說明辦理，逾期全案將先予退還，嗣後若經補正，得再依非都市土地使用管制規則第 28 條規定，重新申請變更編定。

正本：OO
副本：OO、新北市政府 OO 局

本案依分層負責規定授權業務主管決行
會辦單位：
第三層決行`
  },
  {
    id: 'draft-3',
    itemNumber: 3,
    title: '催辦審查意見',
    subtitle: '會審單位逾期未回復意見時，行文催請速辦',
    flowStage: '流程第 3 步（追蹤各單位回審查意見，超過時間要催辦）',
    category: '函',
    recipientDefault: '新北市政府 OO 局',
    attachmentsDefault: '如說明一',
    subject:
      '有關 OO 君申請本市 OO 區 OO 段 OO 地號土地，面積 OOO 公頃，擬由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，自 OO 年 OO 月 OO 日行文貴局迄今尚未函復，爰請貴局於儘速查復審查意見，俾憑續辦變更編定事宜，請查照。',
    descriptions: [
      '說明：依本府 OO 年 OO 月 OO 日新北府地管字第 OO 號函（副本諒達）續辦。'
    ],
    originalCopy: 'OO',
    carbonCopy: 'OO、新北市政府 OO 局',
    decisionNote: '本案依分層負責規定授權業務主管決行\n會辦單位：\n第三層決行',
    fullPlainText: `受文者：
發文日期：
發文字號：新北府地管字第 OOO 號
速別：
密等及解密條件或保密期限：
附件：如說明一

主旨：有關 OO 君申請本市 OO 區 OO 段 OO 地號土地，面積 OOO 公頃，擬由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，自 OO 年 OO 月 OO 日行文貴局迄今尚未函復，爰請貴局於儘速查復審查意見，俾憑續辦變更編定事宜，請查照。

說明：依本府 OO 年 OO 月 OO 日新北府地管字第 OO 號函（副本諒達）續辦。

正本：OO
副本：OO、新北市政府 OO 局

本案依分層負責規定授權業務主管決行
會辦單位：
第三層決行`
  },
  {
    id: 'draft-4',
    itemNumber: 4,
    title: '簽核（以山坡地範圍為例）',
    subtitle: '府簽另外創新文號，簽准後以申請案號函覆申請人排入審查會議程',
    flowStage: '流程第 4 步（簽核簽准或駁回）與 第 5 步（提審查會）',
    category: '簽函併陳',
    recipientDefault: '市府長官 / 申請人',
    attachmentsDefault: '詳簽稿附件說明',
    subject:
      '簽呈主旨：有關 OO 申請坐落本市 OO 區 OO 段 OO 地號土地，面積 OO 公頃，擬由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，擬提交本市非都市土地使用編定審議小組審議，請鑒核。',
    descriptions: [
      '【此項目包含兩份文件】\n4-A：府簽（地政局陳核市府長官內部簽呈，綜整農業局、工務局、水利局、環保局、地政局審查意見）\n4-B：函稿（簽准後函知申請人已排入審查會議程，並通知備妥技師說明與相關圖說）'
    ],
    originalCopy: '市長 / 申請人',
    carbonCopy: '依規定分送',
    decisionNote: '本案府簽另外創新文號，簽准後由原申請案號發函通知',
    hasSubDrafts: true,
    subDrafts: [
      {
        id: 'draft-4a',
        subTitle: '4-A. 內部簽呈（山坡地範圍擬提審議小組簽）',
        type: '簽',
        subject:
          '有關 OO 申請坐落本市 OO 區 OO 段 OO 地號土地，面積 OO 公頃，擬由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，擬提交本市非都市土地使用編定審議小組審議，請鑒核。',
        bodyText: `簽
日期：中華民國 OO 年 OO 月 OO 日
單位：地政局
附件：如說明一、二

主旨：有關 OO 申請坐落本市 OO 區 OO 段 OO 地號土地，面積 OO 公頃，擬由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，擬提交本市非都市土地使用編定審議小組審議，請鑒核。

說明：
一、依(申請人)OO 年 OO 月 OO 日非都市土地變更編定申請書辦理。
二、查本案位屬山坡地範圍，業經本府（OO 局）OO 年 OO 月 OO 日新北府 OO 字第 OO 號函核准興辦事業計畫，並表示依「OOO 免受山坡地開發建築面積不得少於十公頃限制審查作業要點」審竣，得免受興辦事業計畫土地面積不得少於 10 公頃限制（詳附件 1）。爰按非都市土地變更編定執行要點第 5 點及第 6 點規定審查程序，綜整各機關審查意見如下：
(一)農業局（詳附件 2）：
1、
2、
(二)工務局（詳附件 3）：
1、
2、
(三)水利局（詳附件 4）：
1、
2、
(四)環境保護局（詳附件 5）：
1、
2、
(五)地政局：
1、本案已檢具土地所有權人變更編定同意書，且已繳納非都市土地變更編定審查規費（詳附件 6）。
2、依非都市土地使用管制規則第 27 條規定，使用分區內各種使用地之變更編定原則，除本規則另有規定外，應依使用分區內各種使用地變更編定原則表附表三辦理。該表規定：OO 區得依本規則辦理變更編定為 OO 用地，且依非都市土地變更編定執行要點第 8 點第 28 項規定，OO 設施得申請變更編定為特定目的事業用地。
3、依本府 OO 年 OO 月 OO 日新北府 OO 字第 OO 號函示，本案依非都市土地變更編定執行要點第 3 點第 3 項規定，完成前揭要點附錄 1 之 2 所列查詢項目之查核，尚無各該項目法令規定之禁、限建及不得設置或興辦情事。（詳附件 OO）。
4、本案屬山坡地範圍，已依「新北市政府非都市山坡地範圍內土地變更編定審查原則」會各機關審查完竣（詳附件 OO）。
5、本案先行違規部分，已依區域計畫法第 21 條規定處以罰鍰，並於 OO 年 OO 月 OO 日繳納完竣（詳附件 OO）。
6、本案符合管制規則第 28 條規定之應備文件。
三、本案業經各審查機關審查符合各相關法令規定，擬依管制規則第 49 條之 1 規定，提交本市非都市土地使用編定審議小組審議通過後，辦理變更編定異動並加註各局處審查意見之應行注意事項，其應行注意事項如下：
(一)
(二)
四、本案審查程序依據變更編定執行要點第 5 點規定辦理，並依據第 6 點規定填具非都市土地變更編定審查表。
五、本案依使用管制規則第 28 條規定由直轄市政府核准變更編定。

擬辦：
一、奉核後，擬依管制規則第 49 條之 1 規定，提交本市非都市土地使用編定審議小組審查變更編定相關事宜。
二、涉上開管制規則第 49 條之 1 及建築技術規則山坡地建築專章檢核部分，擬於會議是日請申請人或相關專業技師與會補充說明；涉興辦事業計畫可行性、必要性部分，擬請目的事業主管機關（OOO 局處）與會列席說明。`
      },
      {
        id: 'draft-4b',
        subTitle: '4-B. 函稿（簽准後通知排入審議小組議程通知函）',
        type: '函',
        subject:
          '有關 OO 申請本市 OO 區 OO 段 OO 地號土地，面積 OOO 公頃，擬由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，業經排入本市非都市土地使用編定審議小組本次議程，請查照。',
        bodyText: `受文者：
發文日期：
發文字號：新北府地管字第 OOO 號
速別：
密等及解密條件或保密期限：
附件：如說明一

主旨：有關 OO 申請本市 OO 區 OO 段 OO 地號土地，面積 OOO 公頃，擬由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，業經排入本市非都市土地使用編定審議小組本次議程，請查照。

說明：
一、依(申請人)O 年 O 月 O 日函、非都市土地變更編定申請書辦理。
二、案經本府各單位依「非都市土地變更編定執行要點」第 5、6 點審查程序審竣，擬於本市非都市土地使用編定審議小組審議，惟目前開會日期未定，將另於確定後通知，特予敘明。
三、另為利審議小組會議順利進行，屆時請建築師或相關專業技師與會說明本案興辦事業計畫內容及必要性、基地內外交通動線、停車規劃、排水情形等，另請先備妥本案涉「非都市土地使用管制規則」第 49 條之 1 相關圖說（如坡度分析圖－需套繪建物配置、山坡地建築管理與技術規範檢核表等），俾利會議進行。

正本：OO
副本：

本案依分層負責規定授權業務主管決行
會辦單位：
第三層決行`
      }
    ],
    fullPlainText: `【文件 1：內部簽呈】
簽
日期：中華民國 OO 年 OO 月 OO 日
單位：地政局
附件：如說明一、二

主旨：有關 OO 申請坐落本市 OO 區 OO 段 OO 地號土地，面積 OO 公頃，擬由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，擬提交本市非都市土地使用編定審議小組審議，請鑒核。

說明：
一、依(申請人)OO 年 OO 月 OO 日非都市土地變更編定申請書辦理。
二、查本案位屬山坡地範圍，業經本府（OO 局）OO 年 OO 月 OO 日新北府 OO 字第 OO 號函核准興辦事業計畫，並表示依「OOO 免受山坡地開發建築面積不得少於十公頃限制審查作業要點」審竣，得免受興辦事業計畫土地面積不得少於 10 公頃限制（詳附件 1）。爰按非都市土地變更編定執行要點第 5 點及第 6 點規定審查程序，綜整各機關審查意見如下：
(一)農業局（詳附件 2）：
1、
2、
(二)工務局（詳附件 3）：
1、
2、
(三)水利局（詳附件 4）：
1、
2、
(四)環境保護局（詳附件 5）：
1、
2、
(五)地政局：
1、本案已檢具土地所有權人變更編定同意書，且已繳納非都市土地變更編定審查規費（詳附件 6）。
2、依非都市土地使用管制規則第 27 條規定，使用分區內各種使用地之變更編定原則，除本規則另有規定外，應依使用分區內各種使用地變更編定原則表附表三辦理。該表規定：OO 區得依本規則辦理變更編定為 OO 用地，且依非都市土地變更編定執行要點第 8 點第 28 項規定，OO 設施得申請變更編定為特定目的事業用地。
3、依本府 OO 年 OO 月 OO 日新北府 OO 字第 OO 號函示，本案依非都市土地變更編定執行要點第 3 點第 3 項規定，完成前揭要點附錄 1 之 2 所列查詢項目之查核，尚無各該項目法令規定之禁、限建及不得設置或興辦情事。（詳附件 OO）。
4、本案屬山坡地範圍，已依「新北市政府非都市山坡地範圍內土地變更編定審查原則」會各機關審查完竣（詳附件 OO）。
5、本案先行違規部分，已依區域計畫法第 21 條規定處以罰鍰，並於 OO 年 OO 月 OO 日繳納完竣（詳附件 OO）。
6、本案符合管制規則第 28 條規定之應備文件。
三、本案業經各審查機關審查符合各相關法令規定，擬依管制規則第 49 條之 1 規定，提交本市非都市土地使用編定審議小組審議通過後，辦理變更編定異動並加註各局處審查意見之應行注意事項，其應行注意事項如下：
(一)
(二)
四、本案審查程序依據變更編定執行要點第 5 點規定辦理，並依據第 6 點規定填具非都市土地變更編定審查表。
五、本案依使用管制規則第 28 條規定由直轄市政府核准變更編定。

擬辦：
一、奉核後，擬依管制規則第 49 條之 1 規定，提交本市非都市土地使用編定審議小組審查變更編定相關事宜。
二、涉上開管制規則第 49 條之 1 及建築技術規則山坡地建築專章檢核部分，擬於會議是日請申請人或相關專業技師與會補充說明；涉興辦事業計畫可行性、必要性部分，擬請目的事業主管機關（OOO 局處）與會列席說明。

--------------------------------------------------

【文件 2：開會通知函稿】
受文者：
發文日期：
發文字號：新北府地管字第 OOO 號
速別：
密等及解密條件或保密期限：
附件：如說明一

主旨：有關 OO 申請本市 OO 區 OO 段 OO 地號土地，面積 OOO 公頃，擬由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，業經排入本市非都市土地使用編定審議小組本次議程，請查照。

說明：
一、依(申請人)O 年 O 月 O 日函、非都市土地變更編定申請書辦理。
二、案經本府各單位依「非都市土地變更編定執行要點」第 5、6 點審查程序審竣，擬於本市非都市土地使用編定審議小組審議，惟目前開會日期未定，將另於確定後通知，特予敘明。
三、另為利審議小組會議順利進行，屆時請建築師或相關專業技師與會說明本案興辦事業計畫內容及必要性、基地內外交通動線、停車規劃、排水情形等，另請先備妥本案涉「非都市土地使用管制規則」第 49 條之 1 相關圖說（如坡度分析圖－需套繪建物配置、山坡地建築管理與技術規範檢核表等），俾利會議進行。

正本：OO
副本：

本案依分層負責規定授權業務主管決行
會辦單位：
第三層決行`
  },
  {
    id: 'draft-5',
    itemNumber: 5,
    title: '核准',
    subtitle: '完成審議小組決議或免提案件審查後之正式核准處分函稿',
    flowStage: '流程第 6 步（核准或駁回：發核准函）',
    category: '函',
    recipientDefault: 'OOO',
    attachmentsDefault: '如說明一',
    subject:
      '有關 OO 申請本市 OO 區 OO 段 OO 地號土地，面積 OOO 公頃，由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，請查照。',
    descriptions: [
      '一、依(申請人)O 年 O 月 O 日非都市土地變更編定申請書暨 OO 年 OO 月 OO 日本市非都市土地使用編定審議小組會議決議辦理。',
      '二、本案經審查符合非都市土地使用管制規則等相關法令規定，且已取得水土保持機關核發之水土保持完工證明書，爰核准變更編定為同區 OO 用地，俟完成地籍分割登記後，本府另函請本市 OO 地政事務所辦理變更編定登記異動手續並加註各單位審查意見之應注意事項於土地參考資訊檔。',
      '三、本案變更編定應注意事項如下：\n(一)\n(二)',
      '四、本案須於 OO 年 OO 月 OO 日前完成說明二相關事項，並檢具相關文件（地籍分割成果）辦理變更編定異動手續，如有正當事由得申請展延 1 次（至多 1 年），逾期將廢止原核准之行政處分。',
      '五、依訴願法第 1 條第 1 項前段規定：「人民對於中央或地方機關之行政處分，認為違法或不當，致損害其權利或利益者，得依本法提起訴願。」，同法第 14 條及 58 條規定，訴願之提起，應自行政處分達到或公告期滿之次日起 30 日內為之，訴願人應繕具訴願書經由原行政處分機關向訴願管轄機關提起訴願。如不服本行政處分，請依訴願法之規定辦理。',
      '六、本案處理之滿意度調查及相關建議，歡迎至「新北市政府雲端櫃檯申辦 e 服務」網頁（網址：https://service.ntpc.gov.tw/eservice/Index.action）直接填寫「滿意度意見調查表」問卷，您的相關意見作為本府提升申請案件服務品質之參考。',
      '七、副本抄送：\n(一)本府 OO 局：依非都市土地使用管制規則第 54 條規定：「……依目的事業主管機關核定事業計畫…變更編定……，由目的事業主管機關檢查是否依原核定計畫使用……。」，爰後續請貴局本於權責確實管制本案土地依核定計畫使用。\n(二)本市 OO 地政事務所：檢送申請文件 1 份，請協助申請人辦理地籍分割事宜。'
    ],
    originalCopy: 'OOO',
    carbonCopy:
      '新北市政府 OO 局、新北市政府工務局、新北市政府農業局、新北市政府水利局、新北市政府環境保護局、新北市 OO 地政事務所(含附件)',
    decisionNote: '本案依分層負責規定授權業務主管決行\n會辦單位：\n第三層決行',
    fullPlainText: `受文者：
發文日期：
發文字號：新北府地管字第 OOO 號
速別：
密等及解密條件或保密期限：
附件：如說明一

主旨：有關 OO 申請本市 OO 區 OO 段 OO 地號土地，面積 OOO 公頃，由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，請查照。

說明：
一、依(申請人)O 年 O 月 O 日非都市土地變更編定申請書暨 OO 年 OO 月 OO 日本市非都市土地使用編定審議小組會議決議辦理。
二、本案經審查符合非都市土地使用管制規則等相關法令規定，且已取得水土保持機關核發之水土保持完工證明書，爰核准變更編定為同區 OO 用地，俟完成地籍分割登記後，本府另函請本市 OO 地政事務所辦理變更編定登記異動手續並加註各單位審查意見之應注意事項於土地參考資訊檔。
三、本案變更編定應注意事項如下：
(一)
(二)
四、本案須於 OO 年 OO 月 OO 日前完成說明二相關事項，並檢具相關文件（地籍分割成果）辦理變更編定異動手續，如有正當事由得申請展延 1 次（至多 1 年），逾期將廢止原核准之行政處分。
五、依訴願法第 1 條第 1 項前段規定：「人民對於中央或地方機關之行政處分，認為違法或不當，致損害其權利或利益者，得依本法提起訴願。」，同法第 14 條及 58 條規定，訴願之提起，應自行政處分達到或公告期滿之次日起 30 日內為之，訴願人應繕具訴願書經由原行政處分機關向訴願管轄機關提起訴願。如不服本行政處分，請依訴願法之規定辦理。
六、本案處理之滿意度調查及相關建議，歡迎至「新北市政府雲端櫃檯申辦 e 服務」網頁（網址：https://service.ntpc.gov.tw/eservice/Index.action）直接填寫「滿意度意見調查表」問卷，您的相關意見作為本府提升申請案件服務品質之參考。
七、副本抄送：
(一)本府 OO 局：依非都市土地使用管制規則第 54 條規定：「……依目的事業主管機關核定事業計畫…變更編定……，由目的事業主管機關檢查是否依原核定計畫使用……。」，爰後續請貴局本於權責確實管制本案土地依核定計畫使用。
(二)本市 OO 地政事務所：檢送申請文件 1 份，請協助申請人辦理地籍分割事宜。

正本：OOO
副本：新北市政府 OO 局、新北市政府工務局、新北市政府農業局、新北市政府水利局、新北市政府環境保護局、新北市 OO 地政事務所(含附件)

本案依分層負責規定授權業務主管決行
會辦單位：
第三層決行`
  },
  {
    id: 'draft-6',
    itemNumber: 6,
    title: '異動函稿（請地所登記+登錄土參）',
    subtitle: '完成土地分割與水保完工後，同意異動並函囑地政事務所登記及登錄土地參考資訊檔',
    flowStage: '流程第 7 步（請地所異動：無分割案於核准文直接副本；有分割案辦竣後檢附文件續辦）',
    category: '函',
    recipientDefault: 'OOO',
    attachmentsDefault: '土地參考資訊檔登錄申請書及異動序號',
    subject:
      '有關 OO 申請本市 OO 區 OO 段 OO 地號土地，面積 OOO 公頃，由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，同意變更編定異動，請查照。',
    descriptions: [
      '一、依本府 OO 年 OO 月 OO 日新北府地管字第 OO 號函（諒達）續辦；兼復(申請人)OO 年 OO 月 OO 日申請書。',
      '二、本案前經本府首揭號函核准變更編定，且已取得水土保持完工證明，現已完成地籍合併分割，故本府同意辦理變更編定異動，嗣後請確實依其核定計畫及各單位審查意見之應注意事項使用，若有違反土地使用管制情形，即移請有關機關依法處分。本案變更編定應注意事項為：\n(一)\n(二)',
      '三、依訴願法第 1 條第 1 項前段規定：「人民對於中央或地方機關之行政處分，認為違法或不當，致損害其權利或利益者，得依本法提起訴願。」，同法第 14 條及 58 條規定，訴願之提起，應自行政處分達到或公告期滿之次日起 30 日內為之，訴願人應繕具訴願書經由原行政處分機關向訴願管轄機關提起訴願。如不服本行政處分，請依訴願法之規定辦理。',
      '四、本案處理之滿意度調查及相關建議，歡迎至「新北市政府雲端櫃檯申辦 e 服務」網頁（網址：https://service.ntpc.gov.tw/eservice/Index.action）直接填寫「滿意度意見調查表」問卷，您的相關意見作為本府提升申請案件服務品質之參考。',
      '五、副本抄送：\n(一)本府 OO 局：依非都市土地使用管制規則第 54 條規定：「……依目的事業主管機關核定事業計畫…變更編定……，由目的事業主管機關檢查是否依原核定計畫使用……。」，爰後續請貴局本於權責確實管制本案土地依核定計畫使用。\n(二)本市 OO 地政事務所：\n１、檢送土地參考資訊檔（代碼：D8）登錄申請書及土地參考資訊異動序號各 1 份，請即依所載辦理土地變更編定異動手續，並請依非都市土地使用管制規則第 30 條第 5 項規定辦理下列土地參考資訊登錄事宜：\n(1)OO 區 OO 段 OO 地號：加註核准文號（OO 年 OO 月 OO 日新北府地管字第 OO 號函）、「限依其事業計畫作 OO 使用」及「應注意事項」。\n(2)OO 區 OO 段 OO 地號：加註核准文號（OO 年 OO 月 OO 日新北府地管字第 OO 號函）、「限依其事業計畫作 OO 使用」及「應注意事項」。\n２、請於異動登記完成後函報本府備查，另請將編定異動結果通知土地所有權人及轄區公所、稅捐單位。'
    ],
    originalCopy: 'OOO',
    carbonCopy:
      '新北市政府 OO 局、新北市政府農業局、新北市政府工務局、新北市政府水利局、新北市政府環境保護局、新北市 OO 地政事務所(含附件)、新北市政府地政局地政資料科',
    decisionNote: '本案依分層負責規定授權業務主管決行\n會辦單位：後會美芳，請協助產製本案土地參考資訊異動序號\n第三層決行',
    fullPlainText: `受文者：
發文日期：
發文字號：新北府地管字第 OOO 號
速別：
密等及解密條件或保密期限：
附件：

主旨：有關 OO 申請本市 OO 區 OO 段 OO 地號土地，面積 OOO 公頃，由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，同意變更編定異動，請查照。

說明：
一、依本府 OO 年 OO 月 OO 日新北府地管字第 OO 號函（諒達）續辦；兼復(申請人)OO 年 OO 月 OO 日申請書。
二、本案前經本府首揭號函核准變更編定，且已取得水土保持完工證明，現已完成地籍合併分割，故本府同意辦理變更編定異動，嗣後請確實依其核定計畫及各單位審查意見之應注意事項使用，若有違反土地使用管制情形，即移請有關機關依法處分。本案變更編定應注意事項為：
(一)
(二)
三、依訴願法第 1 條第 1 項前段規定：「人民對於中央或地方機關之行政處分，認為違法或不當，致損害其權利或利益者，得依本法提起訴願。」，同法第 14 條及 58 條規定，訴願之提起，應自行政處分達到或公告期滿之次日起 30 日內為之，訴願人應繕具訴願書經由原行政處分機關向訴願管轄機關提起訴願。如不服本行政處分，請依訴願法之規定辦理。
四、本案處理之滿意度調查及相關建議，歡迎至「新北市政府雲端櫃檯申辦 e 服務」網頁（網址：https://service.ntpc.gov.tw/eservice/Index.action）直接填寫「滿意度意見調查表」問卷，您的相關意見作為本府提升申請案件服務品質之參考。
五、副本抄送：
(一)本府 OO 局：依非都市土地使用管制規則第 54 條規定：「……依目的事業主管機關核定事業計畫…變更編定……，由目的事業主管機關檢查是否依原核定計畫使用……。」，爰後續請貴局本於權責確實管制本案土地依核定計畫使用。
(二)本市 OO 地政事務所：
１、檢送土地參考資訊檔（代碼：D8）登錄申請書及土地參考資訊異動序號各 1 份，請即依所載辦理土地變更編定異動手續，並請依非都市土地使用管制規則第 30 條第 5 項規定辦理下列土地參考資訊登錄事宜：
(1)OO 區 OO 段 OO 地號：加註核准文號（OO 年 OO 月 OO 日新北府地管字第 OO 號函）、「限依其事業計畫作 OO 使用」及「應注意事項」。
(2)OO 區 OO 段 OO 地號：加註核准文號（OO 年 OO 月 OO 日新北府地管字第 OO 號函）、「限依其事業計畫作 OO 使用」及「應注意事項」。
２、請於異動登記完成後函報本府備查，另請將編定異動結果通知土地所有權人及轄區公所、稅捐單位。

正本：OOO
副本：新北市政府 OO 局、新北市政府農業局、新北市政府工務局、新北市政府水利局、新北市政府環境保護局、新北市 OO 地政事務所(含附件)、新北市政府地政局地政資料科

本案依分層負責規定授權業務主管決行
會辦單位：後會美芳，請協助產製本案土地參考資訊異動序號
第三層決行`
  }
];

export interface OfficialDocDraftsSectionProps {
  selectedDraftId?: string;
  onSelectDraftId?: (id: string) => void;
}

export const OfficialDocDraftsSection: React.FC<OfficialDocDraftsSectionProps> = ({
  selectedDraftId: controlledDraftId,
  onSelectDraftId
}) => {
  const [internalDraftId, setInternalDraftId] = useState<string>('draft-1');
  const [subDraftTab, setSubDraftTab] = useState<'4a' | '4b'>('4a');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [copiedMessage, setCopiedMessage] = useState<string | null>(null);

  const selectedDraftId = controlledDraftId ?? internalDraftId;

  const handleSelectDraft = (id: string) => {
    if (onSelectDraftId) {
      onSelectDraftId(id);
    }
    setInternalDraftId(id);
    if (id === 'draft-4') setSubDraftTab('4a');
  };

  const selectedDraft =
    OFFICIAL_DOC_TEMPLATES.find((d) => d.id === selectedDraftId) ||
    OFFICIAL_DOC_TEMPLATES[0];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedMessage(`已複製「${label}」至剪貼簿！`);
    setTimeout(() => {
      setCopiedMessage(null);
    }, 2800);
  };

  const filteredDrafts = OFFICIAL_DOC_TEMPLATES.filter((draft) => {
    if (!searchKeyword.trim()) return true;
    const q = searchKeyword.toLowerCase();
    return (
      draft.title.toLowerCase().includes(q) ||
      draft.subtitle.toLowerCase().includes(q) ||
      draft.subject.toLowerCase().includes(q) ||
      draft.flowStage.toLowerCase().includes(q) ||
      draft.fullPlainText.toLowerCase().includes(q)
    );
  });

  return (
    <div className="bg-[#FFFFFF] border-2 border-[#DDD5C7] rounded-xl p-4 sm:p-7 shadow-xs space-y-6">
      {/* 標題區 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#ECE6DB] pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#8C5A4B]/10 text-[#8C5A4B] rounded-xl border border-[#8C5A4B]/20">
            <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="flex items-center flex-wrap gap-2.5">
            <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#2D2623] tracking-wide">
              公文函稿參考
            </h2>
            <span className="text-xs sm:text-sm font-normal text-[#8C5A4B] bg-[#FFF5EA] px-3 py-1 rounded-md border border-[#F0D8A8]">
              實際回文內容仍須由承辦人依個案判斷撰寫
            </span>
          </div>
        </div>

        {/* 搜尋欄 */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#8C5A4B] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="搜尋公文文字、關鍵字..."
            className="w-full pl-10 pr-4 py-2 text-sm sm:text-base bg-[#FAF7F2] border-2 border-[#DDD5C7] rounded-xl focus:outline-none focus:border-[#8C5A4B] placeholder-[#9E9084] text-[#2D2623]"
          />
        </div>
      </div>

      {/* 複製成功提示 */}
      {copiedMessage && (
        <div className="p-3.5 bg-emerald-50 text-emerald-800 border-2 border-emerald-300 rounded-xl text-sm sm:text-base font-bold flex items-center gap-2.5 animate-in fade-in duration-150 shadow-xs">
          <Check className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{copiedMessage}</span>
        </div>
      )}

      {/* 6 個範本快速切換橫向 / 網格選單 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {OFFICIAL_DOC_TEMPLATES.map((draft) => {
          const isSelected = draft.id === selectedDraftId;
          return (
            <button
              key={draft.id}
              type="button"
              onClick={() => handleSelectDraft(draft.id)}
              className={`p-3.5 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between gap-2 shadow-2xs ${
                isSelected
                  ? 'bg-[#8C5A4B] text-white border-[#8C5A4B] shadow-sm'
                  : 'bg-[#FAF7F2] text-[#2D2623] border-[#DDD5C7] hover:border-[#8C5A4B]/60 hover:bg-[#F2ECE3]'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`text-xs sm:text-sm font-bold px-2.5 py-0.5 rounded-md ${
                    isSelected
                      ? 'bg-white text-[#8C5A4B]'
                      : 'bg-[#8C5A4B] text-white'
                  }`}
                >
                  範本 {draft.itemNumber}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-[#DDD5C7]/50 text-[#665A54]'
                  }`}
                >
                  {draft.category}
                </span>
              </div>

              <div className="font-bold text-base sm:text-lg leading-snug">
                {draft.title}
              </div>

              <div
                className={`text-xs sm:text-sm line-clamp-1 ${
                  isSelected ? 'text-white/90' : 'text-[#735A4F]'
                }`}
              >
                {draft.flowStage}
              </div>
            </button>
          );
        })}
      </div>

      {/* 當前選中範本的詳細公文預覽與操作 */}
      <div className="bg-[#FAF7F2] border-2 border-[#DDD5C7] rounded-xl p-4 sm:p-6 space-y-5">
        {/* 卡片標題與頂部操作按鈕 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5DDD0] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-sm sm:text-base font-bold px-3 py-1 rounded-md bg-[#8C5A4B] text-white">
                範本 {selectedDraft.itemNumber}
              </span>
              <span className="text-sm sm:text-base font-semibold px-3 py-1 rounded-md bg-[#8C5A4B]/10 text-[#8C5A4B] border border-[#8C5A4B]/20">
                {selectedDraft.category}
              </span>
              <span className="text-xs sm:text-sm text-[#735A4F] font-medium bg-white px-2.5 py-1 rounded-md border border-[#DDD5C7]">
                {selectedDraft.flowStage}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2D2623] pt-1">
              {selectedDraft.title}
            </h3>
            <p className="text-sm sm:text-base text-[#665A54]">
              {selectedDraft.subtitle}
            </p>
          </div>

          {/* 複製全稿按鈕 - 醒目且字體大 */}
          <div className="flex items-center gap-2.5 self-start md:self-center shrink-0">
            <button
              type="button"
              onClick={() => {
                if (selectedDraft.id === 'draft-4') {
                  const textToCopy =
                    subDraftTab === '4a'
                      ? selectedDraft.subDrafts?.[0].bodyText ||
                        selectedDraft.fullPlainText
                      : selectedDraft.subDrafts?.[1].bodyText ||
                        selectedDraft.fullPlainText;
                  handleCopy(
                    textToCopy,
                    subDraftTab === '4a'
                      ? '範本 4-A：山坡地府簽呈'
                      : '範本 4-B：審查會議程通知函稿'
                  );
                } else {
                  handleCopy(
                    selectedDraft.fullPlainText,
                    `範本 ${selectedDraft.itemNumber}：${selectedDraft.title}`
                  );
                }
              }}
              className="px-5 py-3 sm:px-6 sm:py-3.5 text-base sm:text-lg font-bold text-white bg-[#8C5A4B] hover:bg-[#724639] rounded-xl transition-all cursor-pointer flex items-center gap-2.5 shadow-md active:scale-95"
              title="複製本範本全文"
            >
              <Copy className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span className="tracking-wide">
                {selectedDraft.id === 'draft-4'
                  ? subDraftTab === '4a'
                    ? '複製 4-A 簽呈全文'
                    : '複製 4-B 函稿全文'
                  : '複製公文全稿'}
              </span>
            </button>
          </div>
        </div>

        {/* 針對範本 4 提供次分頁切換：4-A 簽呈 vs 4-B 通知函 */}
        {selectedDraft.id === 'draft-4' && (
          <div className="flex items-center gap-3 border-b border-[#DDD5C7] pb-3">
            <button
              type="button"
              onClick={() => setSubDraftTab('4a')}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer flex items-center gap-2 ${
                subDraftTab === '4a'
                  ? 'bg-[#8C5A4B] text-white shadow-xs'
                  : 'bg-white text-[#5A4B43] border border-[#DDD5C7] hover:bg-[#F2ECE3]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>4-A. 內部簽呈（山坡地範圍擬提審議小組簽）</span>
            </button>

            <button
              type="button"
              onClick={() => setSubDraftTab('4b')}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer flex items-center gap-2 ${
                subDraftTab === '4b'
                  ? 'bg-[#8C5A4B] text-white shadow-xs'
                  : 'bg-white text-[#5A4B43] border border-[#DDD5C7] hover:bg-[#F2ECE3]'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>4-B. 函稿（簽准後排入議程通知申請人）</span>
            </button>
          </div>
        )}

        {/* 公文正式紅藍格式排版區域 */}
        <div className="bg-white rounded-xl border-2 border-[#DDD5C7] p-5 sm:p-8 shadow-xs space-y-6 font-sans">
          {/* 範本 4 雙文件專屬顯示 */}
          {selectedDraft.id === 'draft-4' ? (
            subDraftTab === '4a' ? (
              /* 4-A 簽呈 */
              <div className="space-y-6">
                <div className="border-b-2 border-[#8C5A4B]/40 pb-4 text-center">
                  <div className="text-2xl sm:text-3xl font-serif-tc font-bold tracking-widest text-[#8C5A4B]">
                    簽
                  </div>
                  <div className="flex items-center justify-center gap-6 mt-2 text-sm sm:text-base text-[#5A4B43]">
                    <span>日期：中華民國 OO 年 OO 月 OO 日</span>
                    <span>單位：地政局</span>
                    <span>附件：如說明一、二</span>
                  </div>
                </div>

                {/* 主旨 */}
                <div className="space-y-1.5 bg-[#FAF7F2] p-4 rounded-xl border border-[#DDD5C7]">
                  <div className="font-bold text-base sm:text-lg text-[#8C5A4B] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8C5A4B]" />
                    主旨：
                  </div>
                  <p className="text-base sm:text-lg font-medium text-[#2D2623] leading-relaxed pl-4">
                    有關 OO 申請坐落本市 OO 區 OO 段 OO 地號土地，面積 OO 公頃，擬由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，擬提交本市非都市土地使用編定審議小組審議，請鑒核。
                  </p>
                </div>

                {/* 說明段 */}
                <div className="space-y-3">
                  <div className="font-bold text-base sm:text-lg text-[#8C5A4B] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8C5A4B]" />
                    說明：
                  </div>
                  <div className="space-y-3.5 pl-2 sm:pl-4 text-base sm:text-lg text-[#2D2623] leading-relaxed">
                    <p>一、依(申請人)OO 年 OO 月 OO 日非都市土地變更編定申請書辦理。</p>
                    <p>
                      二、查本案位屬山坡地範圍，業經本府（OO 局）OO 年 OO 月 OO 日新北府 OO 字第 OO 號函核准興辦事業計畫，並表示依「OOO 免受山坡地開發建築面積不得少於十公頃限制審查作業要點」審竣，得免受興辦事業計畫土地面積不得少於 10 公頃限制（詳附件 1）。爰按非都市土地變更編定執行要點第 5 點及第 6 點規定審查程序，綜整各機關審查意見如下：
                    </p>
                    <div className="pl-4 space-y-2 text-[#4A3E38] bg-[#FAF7F2] p-3.5 rounded-lg border border-[#E5DDD0]">
                      <div>(一)農業局（詳附件 2）：1、&nbsp;&nbsp;&nbsp;&nbsp;2、</div>
                      <div>(二)工務局（詳附件 3）：1、&nbsp;&nbsp;&nbsp;&nbsp;2、</div>
                      <div>(三)水利局（詳附件 4）：1、&nbsp;&nbsp;&nbsp;&nbsp;2、</div>
                      <div>(四)環境保護局（詳附件 5）：1、&nbsp;&nbsp;&nbsp;&nbsp;2、</div>
                      <div>
                        (五)地政局：
                        <ol className="list-decimal pl-5 space-y-1.5 mt-1 text-sm sm:text-base">
                          <li>本案已檢具土地所有權人變更編定同意書，且已繳納非都市土地變更編定審查規費（詳附件 6）。</li>
                          <li>依非都市土地使用管制規則第 27 條規定，使用分區內各種使用地之變更編定原則，除本規則另有規定外，應依使用分區內各種使用地變更編定原則表附表三辦理。該表規定：OO 區得依本規則辦理變更編定為 OO 用地，且依非都市土地變更編定執行要點第 8 點第 28 項規定，OO 設施得申請變更編定為特定目的事業用地。</li>
                          <li>依本府 OO 年 OO 月 OO 日新北府 OO 字第 OO 號函示，本案依非都市土地變更編定執行要點第 3 點第 3 項規定，完成前揭要點附錄 1 之 2 所列查詢項目之查核，尚無各該項目法令規定之禁、限建及不得設置或興辦情事。（詳附件 OO）。</li>
                          <li>本案屬山坡地範圍，已依「新北市政府非都市山坡地範圍內土地變更編定審查原則」會各機關審查完竣（詳附件 OO）。</li>
                          <li>本案先行違規部分，已依區域計畫法第 21 條規定處以罰鍰，並於 OO 年 OO 月 OO 日繳納完竣（詳附件 OO）。</li>
                          <li>本案符合管制規則第 28 條規定之應備文件。</li>
                        </ol>
                      </div>
                    </div>
                    <p>
                      三、本案業經各審查機關審查符合各相關法令規定，擬依管制規則第 49 條之 1 規定，提交本市非都市土地使用編定審議小組審議通過後，辦理變更編定異動並加註各局處審查意見之應行注意事項，其應行注意事項如下：<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;(一)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;(二)
                    </p>
                    <p>四、本案審查程序依據變更編定執行要點第 5 點規定辦理，並依據第 6 點規定填具非都市土地變更編定審查表。</p>
                    <p>五、本案依使用管制規則第 28 條規定由直轄市政府核准變更編定。</p>
                  </div>
                </div>

                {/* 擬辦段 */}
                <div className="space-y-2 bg-[#F5EFEB] p-4 rounded-xl border border-[#DDD5C7]">
                  <div className="font-bold text-base sm:text-lg text-[#8C5A4B] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8C5A4B]" />
                    擬辦：
                  </div>
                  <div className="space-y-2 pl-4 text-base sm:text-lg text-[#2D2623] leading-relaxed">
                    <p>一、奉核後，擬依管制規則第 49 條之 1 規定，提交本市非都市土地使用編定審議小組審查變更編定相關事宜。</p>
                    <p>二、涉上開管制規則第 49 條之 1 及建築技術規則山坡地建築專章檢核部分，擬於會議是日請申請人或相關專業技師與會補充說明；涉興辦事業計畫可行性、必要性部分，擬請目的事業主管機關（OOO 局處）與會列席說明。</p>
                  </div>
                </div>
              </div>
            ) : (
              /* 4-B 開會通知函稿 */
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base border-b border-[#E5DDD0] pb-4">
                  <div><span className="font-semibold text-[#8C5A4B]">受文者：</span>OO</div>
                  <div><span className="font-semibold text-[#8C5A4B]">發文日期：</span></div>
                  <div><span className="font-semibold text-[#8C5A4B]">發文字號：</span>新北府地管字第 OOO 號</div>
                  <div><span className="font-semibold text-[#8C5A4B]">速別：</span></div>
                  <div><span className="font-semibold text-[#8C5A4B]">密等及解密條件或保密期限：</span></div>
                  <div><span className="font-semibold text-[#8C5A4B]">附件：</span>如說明一</div>
                </div>

                <div className="space-y-1.5 bg-[#FAF7F2] p-4 rounded-xl border border-[#DDD5C7]">
                  <div className="font-bold text-base sm:text-lg text-[#8C5A4B]">主旨：</div>
                  <p className="text-base sm:text-lg font-medium text-[#2D2623] leading-relaxed pl-2 sm:pl-4">
                    有關 OO 申請本市 OO 區 OO 段 OO 地號土地，面積 OOO 公頃，擬由 OO 區 OO 用地變更編定為同區 OO 用地作 OO 使用一案，業經排入本市非都市土地使用編定審議小組本次議程，請查照。
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="font-bold text-base sm:text-lg text-[#8C5A4B]">說明：</div>
                  <div className="space-y-3 pl-2 sm:pl-4 text-base sm:text-lg text-[#2D2623] leading-relaxed">
                    <p>一、依(申請人)O 年 O 月 O 日函、非都市土地變更編定申請書辦理。</p>
                    <p>二、案經本府各單位依「非都市土地變更編定執行要點」第 5、6 點審查程序審竣，擬於本市非都市土地使用編定審議小組審議，惟目前開會日期未定，將另於確定後通知，特予敘明。</p>
                    <p>三、另為利審議小組會議順利進行，屆時請建築師或相關專業技師與會說明本案興辦事業計畫內容及必要性、基地內外交通動線、停車規劃、排水情形等，另請先備妥本案涉「非都市土地使用管制規則」第 49 條之 1 相關圖說（如坡度分析圖－需套繪建物配置、山坡地建築管理與技術規範檢核表等），俾利會議進行。</p>
                  </div>
                </div>

                <div className="border-t border-[#E5DDD0] pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base">
                  <div><span className="font-bold text-[#8C5A4B]">正本：</span>OO</div>
                  <div><span className="font-bold text-[#8C5A4B]">副本：</span></div>
                </div>

                <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#DDD5C7] text-xs sm:text-sm text-[#735A4F] whitespace-pre-line">
                  本案依分層負責規定授權業務主管決行{'\n'}會辦單位：{'\n'}第三層決行
                </div>
              </div>
            )
          ) : (
            /* 一般函稿（範本 1, 2, 3, 5, 6）標準公文排版 */
            <div className="space-y-6">
              {/* 公文頭 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base border-b border-[#E5DDD0] pb-4">
                <div>
                  <span className="font-semibold text-[#8C5A4B]">受文者：</span>
                  <span className="font-medium text-[#2D2623] ml-1">{selectedDraft.recipientDefault}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#8C5A4B]">發文日期：</span>
                  <span className="font-mono text-[#5A4B43] ml-1">中華民國 年 月 日</span>
                </div>
                <div>
                  <span className="font-semibold text-[#8C5A4B]">發文字號：</span>
                  <span className="font-mono text-[#5A4B43] ml-1">新北府地管字第 OOO 號</span>
                </div>
                <div>
                  <span className="font-semibold text-[#8C5A4B]">速別：</span>
                  <span className="text-[#5A4B43] ml-1">普通件</span>
                </div>
                <div>
                  <span className="font-semibold text-[#8C5A4B]">密等及保密期限：</span>
                  <span className="text-[#5A4B43] ml-1">普通</span>
                </div>
                <div>
                  <span className="font-semibold text-[#8C5A4B]">附件：</span>
                  <span className="text-[#5A4B43] ml-1">{selectedDraft.attachmentsDefault}</span>
                </div>
              </div>

              {/* 主旨 */}
              <div className="space-y-1.5 bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DDD5C7]">
                <div className="font-bold text-base sm:text-lg text-[#8C5A4B] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8C5A4B]" />
                  主旨：
                </div>
                <p className="text-base sm:text-lg font-medium text-[#2D2623] leading-relaxed pl-2 sm:pl-4">
                  {selectedDraft.subject}
                </p>
              </div>

              {/* 說明段落 */}
              <div className="space-y-3">
                <div className="font-bold text-base sm:text-lg text-[#8C5A4B] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8C5A4B]" />
                  說明：
                </div>
                <div className="space-y-3.5 pl-2 sm:pl-4 text-base sm:text-lg text-[#2D2623] leading-relaxed whitespace-pre-line">
                  {selectedDraft.descriptions.map((desc, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-lg border border-[#F0EBE3] hover:border-[#8C5A4B]/30 transition-colors"
                    >
                      {desc}
                    </div>
                  ))}
                </div>
              </div>

              {/* 正本與副本 */}
              <div className="border-t border-[#E5DDD0] pt-4 space-y-2 text-sm sm:text-base">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                  <span className="font-bold text-[#8C5A4B] shrink-0">正本：</span>
                  <span className="text-[#2D2623] font-medium">{selectedDraft.originalCopy}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                  <span className="font-bold text-[#8C5A4B] shrink-0">副本：</span>
                  <span className="text-[#4A3E38] leading-relaxed">{selectedDraft.carbonCopy}</span>
                </div>
              </div>

              {/* 決行層級與批示區 */}
              <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#DDD5C7] text-xs sm:text-sm text-[#735A4F] whitespace-pre-line leading-relaxed">
                {selectedDraft.decisionNote}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
