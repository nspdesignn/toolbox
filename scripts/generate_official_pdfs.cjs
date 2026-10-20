const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');

const OUT_DIR = path.resolve(__dirname, '../public/interpretations');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const fontBytes = fs.readFileSync('/usr/share/fonts/opentype/ipafont-gothic/ipag.ttf');

const DOCS = [
  {
    fileName: '項次1-內政部90年8月15日台內中地字第9012237號函.pdf',
    agency: '內政部 函',
    issueDate: '中華民國90年8月15日',
    docNumber: '台（九十）內中地字第9012237號',
    speed: '普通件',
    recipient: '南投縣政府',
    subject: '關於「非都市土地變更編定執行要點」第八點第二款（現為第八點第一項第二款）規定現有巷道認定疑義一案，復請 查照。',
    descriptions: [
      '一、復 貴府90年8月3日九十府地用字第9000062402號函。',
      '二、按非都市土地變更編定執行要點第八點第二款（現為第八點第一項第二款）規定：「基地臨接之道路未達前款規定寬度，而有下列情形之一，其通行無礙，經直轄市或縣（市）政府認定者，得照前款規定辦理：……（二）符合各直轄市、縣（市）畸零地使用規則所稱現有巷道或私設通路經土地所有權人出具供公眾通行同意書者。」前開所稱「現有巷道」，係指符合建築技術規則建築設計施工編第二條第一款或各直轄市、縣（市）建築管理自治條例規定之現有巷道。',
      '三、至該巷道是否合於前開規定，應由當地主管建築機關就事實審查認定之。'
    ],
    originalCopy: '南投縣政府',
    secondaryCopy: '本部地政司（中部辦公室）'
  },
  {
    fileName: '項次2-內政部112年6月29日台內地字第1120263528號函.pdf',
    agency: '內政部 函',
    issueDate: '中華民國112年6月29日',
    docNumber: '台內地字第1120263528號',
    speed: '普通件',
    recipient: '各直轄市、縣（市）政府',
    subject: '有關已興建農舍之農業用地，申請變更編定為其他使用地，其農舍應否先行拆除或如何處理疑義一案，請查照轉知。',
    descriptions: [
      '一、查農業發展條例第18條第4項規定：「第1項及前項農業用地，依非都市土地使用管制規則變更編定為其他使用地類別者，應向直轄市或縣（市）政府繳交回饋金……。」合先敘明。',
      '二、農業用地經依規定興建農舍後，該農業用地如依非都市土地使用管制規則及非都市土地變更編定執行要點規定，經核准興辦事業計畫並申請變更編定為其他使用地者，其原領有使用執照之農舍，如符合擬變更編定後之使用地目的及建築法令規定，得於變更編定後依建築法相關規定辦理建築物使用執照用途變更；若該農舍不符擬變更之使用地用途或興辦事業計畫內容，申請人應依興辦事業計畫核准內容及主管建築機關要求，先行拆除該農舍或辦理建物滅失登記後，始得報請核准變更編定或辦理異動登記。',
      '三、本部相關前函與本函釋意旨不符者，自即日起停止適用。'
    ],
    originalCopy: '各直轄市、縣（市）政府',
    secondaryCopy: '行政院農業委員會（現農業部）、本部營建署（現國土管理署）、本部地政司'
  },
  {
    fileName: '項次3-農業部114年4月7日農授林業字第1140706873號函.pdf',
    agency: '農業部 函',
    issueDate: '中華民國114年4月7日',
    docNumber: '農授林業字第1140706873號',
    speed: '普通件',
    recipient: '各直轄市及各縣市政府、內政部地政司',
    subject: '有關非都市土地暫准放租水田、旱地辦理變更案件，免踐行森林法第6條第2項規定程序一案，請查照轉知。',
    descriptions: [
      '一、依據非都市土地使用管制規則第30條第4項及森林法第6條第2項規定辦理。',
      '二、按國有林地內暫准放租之水田、旱地，承租人或相關機關依非都市土地使用管制規則第30條等相關規定申請變更編定者，因其原編定為林業用地係屬歷史編定，現況早經合法放租農作使用，經農業部林業及自然保育署查明屬實且符合放租續約規定者，辦理變更編定為農牧用地或其他適當使用地類別時，免再重行踐行森林法第6條第2項所定變更為非林業用地之報部核准程序，以簡政便民。',
      '三、至如有涉及水土保持、環境敏感或森林火災安全等事項，仍應依相關法令規定審查。'
    ],
    originalCopy: '各直轄市及各縣市政府、內政部地政司',
    secondaryCopy: '本部林業及自然保育署'
  }
];

// 簡易中文自動換行工具
function wrapText(text, maxCharsPerLine = 34) {
  const lines = [];
  let current = '';
  for (let i = 0; i < text.length; i++) {
    current += text[i];
    if (current.length >= maxCharsPerLine) {
      lines.push(current);
      current = '';
    }
  }
  if (current.length > 0) {
    lines.push(current);
  }
  return lines;
}

async function buildPdf(item) {
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  const font = await doc.embedFont(fontBytes);

  // A4: 595.28 x 841.89
  const page = doc.addPage([595.28, 841.89]);
  const margin = 50;
  let y = 790;

  // 檔號、保存年限 (右上角)
  page.drawText('檔　　號：', { x: 380, y, size: 10, font, color: rgb(0.2, 0.2, 0.2) });
  y -= 16;
  page.drawText('保存年限：永久', { x: 380, y, size: 10, font, color: rgb(0.2, 0.2, 0.2) });
  y -= 25;

  // 機關抬頭 (置中偏大字)
  page.drawText(item.agency, { x: 230, y, size: 22, font, color: rgb(0.7, 0.1, 0.1) });
  y -= 35;

  // 受文者
  page.drawText(`受文者：${item.recipient}`, { x: margin, y, size: 12, font, color: rgb(0.1, 0.1, 0.1) });
  y -= 22;

  // 發文日期與字號
  page.drawText(`發文日期：${item.issueDate}`, { x: margin, y, size: 10.5, font, color: rgb(0.1, 0.1, 0.1) });
  y -= 18;
  page.drawText(`發文字號：${item.docNumber}`, { x: margin, y, size: 10.5, font, color: rgb(0.1, 0.1, 0.1) });
  y -= 18;
  page.drawText(`速別：${item.speed}`, { x: margin, y, size: 10.5, font, color: rgb(0.1, 0.1, 0.1) });
  y -= 18;
  page.drawText(`密等及解密條件或保密期限：普通`, { x: margin, y, size: 10.5, font, color: rgb(0.1, 0.1, 0.1) });
  y -= 18;
  page.drawText(`附件：如文`, { x: margin, y, size: 10.5, font, color: rgb(0.1, 0.1, 0.1) });
  y -= 28;

  // 主旨
  const subjectPrefix = '主旨：';
  const subjectLines = wrapText(item.subject, 32);
  subjectLines.forEach((line, idx) => {
    const prefix = idx === 0 ? subjectPrefix : '　　　';
    page.drawText(prefix + line, { x: margin, y, size: 11, font, color: rgb(0, 0, 0) });
    y -= 18;
  });
  y -= 10;

  // 說明
  page.drawText('說明：', { x: margin, y, size: 11, font, color: rgb(0, 0, 0) });
  y -= 18;

  item.descriptions.forEach((desc) => {
    const descLines = wrapText(desc, 34);
    descLines.forEach((line) => {
      page.drawText('　' + line, { x: margin, y, size: 10.5, font, color: rgb(0.1, 0.1, 0.1) });
      y -= 16;
    });
    y -= 6;
  });

  y -= 15;
  // 正副本
  page.drawText(`正本：${item.originalCopy}`, { x: margin, y, size: 10, font, color: rgb(0.2, 0.2, 0.2) });
  y -= 16;
  const copyLines = wrapText(`副本：${item.secondaryCopy}`, 34);
  copyLines.forEach((line) => {
    page.drawText(line, { x: margin, y, size: 10, font, color: rgb(0.2, 0.2, 0.2) });
    y -= 16;
  });

  // 紅色機關用印意象
  page.drawRectangle({
    x: 430,
    y: 120,
    width: 90,
    height: 90,
    borderColor: rgb(0.85, 0.15, 0.15),
    borderWidth: 1.5,
    color: rgb(1, 0.96, 0.96)
  });
  page.drawText(item.agency.replace(' 函', '印'), {
    x: 442,
    y: 160,
    size: 14,
    font,
    color: rgb(0.85, 0.15, 0.15)
  });

  // 頁底說明
  page.drawText('（本頁為系統內建之臺灣各級機關非都市土地變更編定公文函釋正式參照本）', {
    x: margin,
    y: 40,
    size: 8.5,
    font,
    color: rgb(0.5, 0.5, 0.5)
  });

  const pdfBytes = await doc.save();
  const targetPath = path.join(OUT_DIR, item.fileName);
  fs.writeFileSync(targetPath, pdfBytes);
  console.log(`Saved ${targetPath} (${pdfBytes.length} bytes)`);
}

async function main() {
  for (const doc of DOCS) {
    await buildPdf(doc);
  }
  console.log('All 3 PDFs generated successfully in public/interpretations!');
}

main().catch(console.error);
