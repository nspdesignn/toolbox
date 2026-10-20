const fs = require('fs');
const path = require('path');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 950 780" width="100%" height="100%" style="background-color: #ffffff; font-family: 'PMingLiU', 'MingLiU', 'DFKai-SB', 'BiauKai', 'Noto Serif TC', serif;">
  <defs>
    <style>
      .word-mark { font-family: sans-serif; font-size: 13px; fill: #666; }
      .title { font-size: 21px; font-weight: bold; letter-spacing: 5px; fill: #000; text-anchor: middle; }
      .tbl-border { stroke: #000; stroke-width: 1.2; fill: none; }
      .cell-text { font-size: 13.5px; fill: #000; }
      .cell-center { font-size: 13.5px; fill: #000; text-anchor: middle; }
      .pilcrow { fill: #888; font-size: 12px; font-family: monospace; }
      .red-box { stroke: #e00000; stroke-width: 2.5; fill: none; }
      .red-text { fill: #e00000; font-size: 13px; font-weight: bold; font-family: 'PMingLiU', 'MingLiU', sans-serif; }
      .red-text-sm { fill: #e00000; font-size: 12px; font-family: 'PMingLiU', 'MingLiU', sans-serif; }
      .underline-text { text-decoration: underline; }
    </style>
  </defs>

  <!-- Word Document Crop Marks -->
  <path d="M 25 35 L 25 15 M 10 30 L 30 30" stroke="#777" stroke-width="1" fill="none" />
  <path d="M 925 35 L 925 15 M 920 30 L 940 30" stroke="#777" stroke-width="1" fill="none" />

  <!-- Document Title -->
  <text x="475" y="55" class="title">新 北 市 政 府 裁 處 違 反 區 域 計 畫 法 案 件 處 分 書</text>
  <text x="815" y="53" class="pilcrow">↵</text>

  <!-- Outer Main Table Border -->
  <rect x="25" y="75" width="900" height="680" class="tbl-border" stroke-width="1.8" />

  <!-- ================= ROW 1: Header row (速別, 郵遞方式, 回執) ================= -->
  <!-- Horizontal line below row 1 -->
  <line x1="25" y1="112" x2="925" y2="112" class="tbl-border" />
  <!-- Vertical dividers -->
  <line x1="170" y1="75" x2="170" y2="112" class="tbl-border" />
  <line x1="310" y1="75" x2="310" y2="112" class="tbl-border" />
  <line x1="390" y1="75" x2="390" y2="112" class="tbl-border" />
  <line x1="500" y1="75" x2="500" y2="112" class="tbl-border" />

  <!-- Text Row 1 -->
  <text x="97" y="99" class="cell-center">速　　別<tspan class="pilcrow">↵</tspan></text>
  <text x="240" y="99" class="cell-center">普　　通　　件</text>
  <text x="350" y="99" class="cell-center">郵 遞 方 式<tspan class="pilcrow">↵</tspan></text>
  <text x="445" y="99" class="cell-center">正本雙掛號</text>
  <text x="690" y="99" class="cell-center">雙掛號郵件回執聯請退回原單位憑查<tspan class="pilcrow">↵</tspan></text>

  <!-- ================= ROW 2: 受文者, 行文單位, 發文日期/字號 ================= -->
  <line x1="25" y1="210" x2="925" y2="210" class="tbl-border" />
  <!-- Left column / Right column split at x=500 -->
  <line x1="500" y1="112" x2="500" y2="210" class="tbl-border" />

  <!-- Inside Left Column -->
  <line x1="25" y1="145" x2="500" y2="145" class="tbl-border" />
  <line x1="92" y1="112" x2="92" y2="210" class="tbl-border" />

  <text x="58" y="133" class="cell-center">受　文　者<tspan class="pilcrow">↵</tspan></text>
  <text x="105" y="133" class="cell-text">如行文單位<tspan class="pilcrow">↵</tspan></text>

  <text x="58" y="180" class="cell-center">行　文<tspan class="pilcrow">↵</tspan><tspan x="58" y="196">單　位<tspan class="pilcrow">↵</tspan></tspan></text>

  <text x="100" y="166" class="cell-text">正本<tspan class="pilcrow">↵</tspan></text>
  <line x1="92" y1="172" x2="500" y2="172" class="tbl-border" />
  <text x="185" y="166" class="cell-text">00 君<tspan class="pilcrow">↵</tspan></text>
  <!-- Red Note for 正本 -->
  <text x="260" y="160" class="red-text-sm">有地上物才要給拆大</text>
  <text x="260" y="174" class="red-text-sm">(建物、貨櫃等等)</text>

  <text x="100" y="196" class="cell-text">副本<tspan class="pilcrow">↵</tspan></text>
  <!-- 副本 content with Red Boxes -->
  <text x="175" y="196" class="cell-text">新北市政府違章建築拆除大隊</text>
  <rect x="170" y="180" width="220" height="23" class="red-box" />

  <!-- Red note above 00 局 -->
  <text x="408" y="175" class="red-text-sm">使用地主管機關</text>
  <text x="408" y="196" class="cell-text">新北市政府 00 局</text>
  <rect x="402" y="180" width="130" height="23" class="red-box" />

  <!-- 新北市政府地政局 -->
  <text x="545" y="196" class="cell-text">、新北市政府地政局<tspan class="pilcrow">↵</tspan></text>

  <!-- Inside Right Column (x=500 to 925) -->
  <line x1="575" y1="112" x2="575" y2="210" class="tbl-border" />
  <text x="537" y="165" class="cell-center">發　文<tspan class="pilcrow">↵</tspan></text>

  <line x1="575" y1="145" x2="925" y2="145" class="tbl-border" />
  <line x1="575" y1="178" x2="925" y2="178" class="tbl-border" />

  <line x1="645" y1="112" x2="645" y2="210" class="tbl-border" />
  <text x="610" y="133" class="cell-center">日　期<tspan class="pilcrow">↵</tspan></text>
  <text x="655" y="133" class="cell-text">中華民國 00 年 00 月 00 日<tspan class="pilcrow">↵</tspan></text>
  <!-- Red Box on 00 日 -->
  <rect x="803" y="117" width="48" height="24" class="red-box" />
  <!-- Red note next to date -->
  <text x="860" y="128" class="red-text-sm">陳核時，日期</text>
  <text x="860" y="142" class="red-text-sm">先空白(年月要填)，發文時再填發文日期</text>

  <text x="610" y="166" class="cell-center">字　號<tspan class="pilcrow">↵</tspan></text>
  <text x="655" y="166" class="cell-text" text-decoration="underline">新北府地管字第 OOO 號<tspan class="pilcrow">↵</tspan></text>

  <text x="610" y="199" class="cell-center">附　件<tspan class="pilcrow">↵</tspan></text>
  <text x="655" y="199" class="cell-text">本處分書、繳費單 1 份<tspan class="pilcrow">↵</tspan></text>

  <!-- ================= ROW 3: 受處分人 ================= -->
  <line x1="25" y1="280" x2="925" y2="280" class="tbl-border" />
  <line x1="170" y1="210" x2="170" y2="280" class="tbl-border" />
  <text x="97" y="249" class="cell-center">受　處　分　人<tspan class="pilcrow">↵</tspan></text>

  <!-- Sub-table for 受處分人 -->
  <line x1="170" y1="245" x2="925" y2="245" class="tbl-border" />
  <line x1="365" y1="210" x2="365" y2="280" class="tbl-border" />
  <line x1="425" y1="210" x2="425" y2="280" class="tbl-border" />
  <line x1="550" y1="210" x2="550" y2="280" class="tbl-border" />
  <line x1="680" y1="210" x2="680" y2="280" class="tbl-border" />

  <text x="267" y="228" class="cell-center">自然人姓名或法人名稱<tspan class="pilcrow">↵</tspan></text>
  <text x="267" y="241" class="cell-center">（代表人或負責人）<tspan class="pilcrow">↵</tspan></text>
  <text x="267" y="267" class="cell-center">000<tspan class="pilcrow">↵</tspan></text>

  <text x="395" y="234" class="cell-center">性別<tspan class="pilcrow">↵</tspan></text>
  <text x="395" y="267" class="cell-center">0<tspan class="pilcrow">↵</tspan></text>

  <text x="487" y="234" class="cell-center">出生年月日<tspan class="pilcrow">↵</tspan></text>
  <text x="487" y="267" class="cell-center">00/00/00<tspan class="pilcrow">↵</tspan></text>

  <text x="615" y="228" class="cell-center">統一編號<tspan class="pilcrow">↵</tspan></text>
  <text x="615" y="241" class="cell-center">身分證字號<tspan class="pilcrow">↵</tspan></text>
  <text x="615" y="267" class="cell-center">0000000000<tspan class="pilcrow">↵</tspan></text>

  <text x="802" y="234" class="cell-center">住 居 所 或 營 業 所<tspan class="pilcrow">↵</tspan></text>
  <text x="802" y="267" class="cell-center">00 市 00 區 00000000<tspan class="pilcrow">↵</tspan></text>

  <!-- ================= ROW 4: 處分主文 ================= -->
  <line x1="25" y1="330" x2="925" y2="330" class="tbl-border" />
  <line x1="170" y1="280" x2="170" y2="330" class="tbl-border" />
  <text x="97" y="309" class="cell-center">處　分　主　文<tspan class="pilcrow">↵</tspan></text>
  <text x="185" y="302" class="cell-text">一、處以罰鍰新臺幣 0 萬元整。<tspan class="pilcrow">↵</tspan></text>
  <text x="185" y="322" class="cell-text">二、應依指定改正事項及規定期限完成改正。<tspan class="pilcrow">↵</tspan></text>

  <!-- ================= ROW 5: 查獲(證)日期 & 違規內容及事實 ================= -->
  <line x1="25" y1="410" x2="925" y2="410" class="tbl-border" />
  <line x1="170" y1="330" x2="170" y2="410" class="tbl-border" />
  <text x="97" y="365" class="cell-center">查 獲 (證)<tspan class="pilcrow">↵</tspan></text>
  <text x="97" y="385" class="cell-center">日　　期<tspan class="pilcrow">↵</tspan></text>

  <line x1="310" y1="330" x2="310" y2="410" class="tbl-border" />
  <text x="240" y="375" class="cell-center">00 年 00 月 00 日<tspan class="pilcrow">↵</tspan></text>

  <line x1="425" y1="330" x2="425" y2="410" class="tbl-border" />
  <text x="367" y="365" class="cell-center">違規內容<tspan class="pilcrow">↵</tspan></text>
  <text x="367" y="385" class="cell-center">及 事 實<tspan class="pilcrow">↵</tspan></text>

  <text x="440" y="365" class="cell-text">現況具 000000，非作 00 使用<tspan class="pilcrow">↵</tspan></text>
  <!-- Red note on 愛連網 -->
  <text x="680" y="385" class="red-text">1.用愛連網框面積</text>
  <text x="680" y="403" class="red-text">2.按使用面積測量結果</text>

  <!-- ================= ROW 6: 土地權屬 ================= -->
  <line x1="25" y1="445" x2="925" y2="445" class="tbl-border" />
  <line x1="170" y1="410" x2="170" y2="445" class="tbl-border" />
  <text x="97" y="432" class="cell-center">土 地 權 屬<tspan class="pilcrow">↵</tspan></text>
  <text x="185" y="432" class="cell-text">私有<tspan class="pilcrow">↵</tspan></text>

  <!-- ================= ROW 7: 土地種類 ================= -->
  <line x1="25" y1="480" x2="925" y2="480" class="tbl-border" />
  <line x1="170" y1="445" x2="170" y2="480" class="tbl-border" />
  <text x="97" y="467" class="cell-center">土 地 種 類<tspan class="pilcrow">↵</tspan></text>
  <text x="185" y="467" class="cell-text">非都市土地 00 區 00 用地<tspan class="pilcrow">↵</tspan></text>

  <!-- ================= ROW 8: 違規地點 & 違規面積 ================= -->
  <line x1="25" y1="518" x2="925" y2="518" class="tbl-border" />
  <line x1="170" y1="480" x2="170" y2="518" class="tbl-border" />
  <text x="97" y="503" class="cell-center">違 規 地 點<tspan class="pilcrow">↵</tspan></text>

  <line x1="550" y1="480" x2="550" y2="518" class="tbl-border" />
  <text x="185" y="503" class="cell-text">本市 00 區 00 段 00 地號土地<tspan class="pilcrow">↵</tspan></text>

  <line x1="645" y1="480" x2="645" y2="518" class="tbl-border" />
  <text x="597" y="503" class="cell-center">違 規 面 積<tspan class="pilcrow">↵</tspan></text>

  <!-- Red Box on 違規面積 -->
  <text x="660" y="503" class="cell-text">約 00 平方公尺<tspan class="pilcrow">↵</tspan></text>
  <rect x="553" y="487" width="225" height="26" class="red-box" />

  <!-- ================= ROW 9: 違反法條 ================= -->
  <line x1="25" y1="552" x2="925" y2="552" class="tbl-border" />
  <line x1="170" y1="518" x2="170" y2="552" class="tbl-border" />
  <text x="97" y="539" class="cell-center">違 反 法 條<tspan class="pilcrow">↵</tspan></text>
  <text x="185" y="539" class="cell-text">違反區域計畫法第十五條第一項規定<tspan class="pilcrow">↵</tspan></text>

  <!-- ================= ROW 10: 處分法條 ================= -->
  <line x1="25" y1="650" x2="925" y2="650" class="tbl-border" />
  <line x1="170" y1="552" x2="170" y2="650" class="tbl-border" />
  <text x="97" y="605" class="cell-center">處 分 法 條<tspan class="pilcrow">↵</tspan></text>
  <text x="185" y="574" class="cell-text">一、依非都市土地使用管制規則第五條<tspan class="pilcrow">↵</tspan></text>
  <text x="185" y="596" class="cell-text">二、依據區域計畫法<tspan text-decoration="underline">第二十一條</tspan><tspan class="pilcrow">↵</tspan></text>
  <text x="185" y="618" class="cell-text">三、新北市政府處理違反非都市土地使用管制案件裁罰基準<tspan class="pilcrow">↵</tspan></text>
  <text x="185" y="640" class="cell-text">※條文內容詳見本處分書備註欄六、七、八<tspan class="pilcrow">↵</tspan></text>

  <!-- ================= ROW 11: 繳納期限 ================= -->
  <line x1="25" y1="685" x2="925" y2="685" class="tbl-border" />
  <line x1="170" y1="650" x2="170" y2="685" class="tbl-border" />
  <text x="97" y="671" class="cell-center">繳 納 期 限<tspan class="pilcrow">↵</tspan></text>
  <text x="185" y="671" class="cell-text">公文送達之日起 30 日內<tspan class="pilcrow">↵</tspan></text>
  <!-- Red Note for 照公文內填寫 -->
  <text x="760" y="668" class="red-text-sm">照公文內填寫</text>

  <!-- ================= ROW 12: 指定改正事項 ================= -->
  <line x1="25" y1="722" x2="925" y2="722" class="tbl-border" />
  <line x1="170" y1="685" x2="170" y2="722" class="tbl-border" />
  <text x="97" y="707" class="cell-center">指定改正事項<tspan class="pilcrow">↵</tspan></text>
  <text x="185" y="707" class="cell-text">請即停止非法使用，並依法恢復原 00 使用目的，不依規定改正者，則依區域計畫法另為處分。<tspan class="pilcrow">↵</tspan></text>
  <!-- Red Box on 指定改正事項 text -->
  <rect x="175" y="691" width="680" height="26" class="red-box" />

  <!-- ================= ROW 13: 應完成改正期限 ================= -->
  <text x="97" y="743" class="cell-center">應完成改正<tspan class="pilcrow">↵</tspan></text>
  <text x="97" y="756" class="cell-center">期　　限<tspan class="pilcrow">↵</tspan></text>
  <line x1="170" y1="722" x2="170" y2="755" class="tbl-border" />
  <text x="185" y="747" class="cell-text">公文送達之日起 30 日內<tspan class="pilcrow">↵</tspan></text>
</svg>`;

fs.writeFileSync(path.join(__dirname, '../public/penalty_doc_image.svg'), svgContent, 'utf8');
console.log('Successfully generated public/penalty_doc_image.svg');
