const fs = require('fs');
const path = require('path');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 435" width="100%" height="100%" style="background-color: #f7f7f7; font-family: 'PMingLiU', 'MingLiU', 'Microsoft JhengHei', 'PingFang TC', sans-serif;">
  <defs>
    <style>
      .txt { font-size: 11.5px; fill: #222222; }
      .req { color: #cc0000; fill: #cc0000; font-weight: bold; }
      .input-box { fill: #ffffff; stroke: #8d99a6; stroke-width: 1; }
      .input-disabled { fill: #f0f0f0; stroke: #999999; stroke-width: 1; }
      .btn-sys { fill: #f5f5f5; stroke: #8c8c8c; stroke-width: 1; rx: 1; }
      .btn-txt { font-size: 11px; fill: #111111; text-anchor: middle; }
      .red-box { stroke: #e00000; stroke-width: 2.2; fill: none; }
      .red-note { fill: #d60000; font-size: 12.5px; font-weight: bold; font-family: 'Microsoft JhengHei', sans-serif; }
      .red-note-sm { fill: #d60000; font-size: 11px; font-family: 'Microsoft JhengHei', sans-serif; }
    </style>
  </defs>

  <!-- Top bar: 罰鍰系統 | 文件下載區 | PDF閱讀器下載 -->
  <rect x="0" y="0" width="980" height="20" fill="#f0f0f0" />
  <rect x="0" y="0" width="4" height="20" fill="#003399" />
  <text x="8" y="14" font-size="11" fill="#0033cc" font-weight="bold">罰鍰系統</text>
  <text x="56" y="14" font-size="11" fill="#666666">|</text>
  <text x="64" y="14" font-size="11" fill="#0033cc">文件下載區</text>
  <text x="122" y="14" font-size="11" fill="#666666">|</text>
  <text x="130" y="14" font-size="11" fill="#0033cc">PDF閱讀器下載</text>
  <text x="206" y="14" font-size="11" fill="#666666">|</text>

  <!-- Breadcrumb line: 現在位置: 功能選單 >> 罰鍰管理作業 >> 處分書資料維護 -->
  <rect x="0" y="20" width="980" height="24" fill="#fffbe6" stroke="#f0e5b2" stroke-width="0.8" />
  <text x="8" y="36" font-size="11.5" fill="#cc0000" font-weight="bold">現在位置 : 功能選單 &gt;&gt; 罰鍰管理作業 &gt;&gt; 處分書資料維護</text>

  <!-- Tabs Navigation Bar -->
  <g transform="translate(0, 44)">
    <!-- Active Tab: 處分書資料維護 -->
    <rect x="2" y="0" width="112" height="23" fill="#ffff99" stroke="#b0b0b0" stroke-width="1" />
    <text x="12" y="16" font-size="11.5" fill="#cc0000" font-weight="bold">處分書資料維護</text>

    <!-- Other Tabs -->
    <rect x="114" y="0" width="88" height="23" fill="#d8e8cc" stroke="#b0b0b0" stroke-width="1" />
    <text x="124" y="16" font-size="11.5" fill="#222222">繳款資料維護</text>

    <rect x="202" y="0" width="88" height="23" fill="#d8e8cc" stroke="#b0b0b0" stroke-width="1" />
    <text x="212" y="16" font-size="11.5" fill="#222222">催繳資料維護</text>

    <rect x="290" y="0" width="130" height="23" fill="#d8e8cc" stroke="#b0b0b0" stroke-width="1" />
    <text x="298" y="16" font-size="11.5" fill="#222222">移送行政執行資料維護</text>

    <rect x="420" y="0" width="120" height="23" fill="#d8e8cc" stroke="#b0b0b0" stroke-width="1" />
    <text x="428" y="16" font-size="11.5" fill="#222222">債權憑證資料維護</text>

    <rect x="540" y="0" width="120" height="23" fill="#d8e8cc" stroke="#b0b0b0" stroke-width="1" />
    <text x="548" y="16" font-size="11.5" fill="#222222">行政救濟資料維護</text>

    <rect x="660" y="0" width="120" height="23" fill="#d8e8cc" stroke="#b0b0b0" stroke-width="1" />
    <text x="668" y="16" font-size="11.5" fill="#222222">財產清查資料維護</text>

    <rect x="780" y="0" width="200" height="23" fill="#f0f0f0" stroke="#b0b0b0" stroke-width="1" />
  </g>

  <!-- Top Metadata Row: 案件年度, 案件流水號 -->
  <g transform="translate(0, 68)">
    <rect x="0" y="0" width="980" height="25" fill="#ffffea" stroke="#d5d5d5" stroke-width="0.8" />
    <text x="10" y="17" class="txt"><tspan class="req">*</tspan>案件年度 :</text>
    <rect x="75" y="4" width="48" height="17" class="input-box" />
    <text x="82" y="17" font-size="11" fill="#000000">115</text>

    <text x="540" y="17" class="txt"><tspan class="req">*</tspan>案件流水號 :</text>
    <rect x="630" y="4" width="70" height="17" class="input-box" />
  </g>

  <!-- Section Title: 處分資料 (Bright Yellow Header) -->
  <rect x="0" y="93" width="980" height="20" fill="#ffff00" stroke="#d4d400" stroke-width="1" />
  <text x="490" y="108" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle" letter-spacing="2">處分資料</text>

  <!-- Main Form Area -->
  <rect x="0" y="113" width="980" height="320" fill="#ffffff" stroke="#cccccc" stroke-width="1" />

  <!-- Form Row 1: 案件狀態, 結案日期 -->
  <g transform="translate(10, 118)">
    <text x="0" y="16" class="txt"><tspan class="req">*</tspan>案件狀態 :</text>
    <rect x="65" y="3" width="78" height="18" class="input-box" />
    <text x="70" y="16" font-size="11" fill="#000000">未結案</text>
    <path d="M 130 9 L 138 9 L 134 14 Z" fill="#666666" />

    <text x="530" y="16" class="txt">結案日期 :</text>
    <rect x="620" y="3" width="55" height="18" class="input-box" />
    <rect x="677" y="3" width="18" height="18" class="btn-sys" />
    <text x="686" y="15" font-size="10" fill="#222" text-anchor="middle">...</text>
  </g>

  <!-- Form Row 2: 承辦人, 承辦人電話 (Red Box Highlighted) -->
  <g transform="translate(10, 142)">
    <text x="0" y="16" class="txt"><tspan class="req">*</tspan>承辦人 :</text>
    <rect x="65" y="3" width="110" height="18" class="input-box" />

    <!-- 填寫欄位 label (Red) -->
    <text x="473" y="16" class="red-note">填寫欄位</text>

    <!-- *承辦人電話 : -->
    <text x="530" y="16" class="txt"><tspan class="req">*</tspan>承辦人電話 :</text>
    <rect x="620" y="3" width="205" height="18" class="input-box" />

    <!-- Red box around 承辦人電話 input -->
    <rect x="526" y="-1" width="303" height="26" class="red-box" />

    <text x="832" y="16" class="red-note-sm">(限40字數，可輸入電話+分機)</text>
  </g>

  <!-- Form Row 3: 電子郵件, 單位 -->
  <g transform="translate(10, 168)">
    <text x="0" y="16" class="txt"><tspan class="req">*</tspan>電子郵件 :</text>
    <rect x="65" y="3" width="250" height="18" class="input-box" />

    <text x="0" y="39" class="txt"><tspan class="req">*</tspan>單位 :</text>
    <rect x="65" y="26" width="365" height="18" class="input-box" fill="#f8f8f8" />
    <text x="70" y="39" font-size="10.5" fill="#333333">0400110080000 新北市政府地政局主管-新北市政府地政局-新北市政府地政局編定管制科</text>
  </g>

  <!-- Form Row 4: 發文日期 (Red Box), 發文字號 (Red Box) -->
  <g transform="translate(10, 215)">
    <!-- 填寫欄位 label (Red) -->
    <text x="240" y="16" class="red-note">填寫欄位</text>

    <!-- *發文日期 : [ 1151015 ] [...] with Red Box -->
    <text x="0" y="16" class="txt"><tspan class="req">*</tspan>發文日期 :</text>
    <rect x="65" y="2" width="60" height="19" class="input-box" />
    <text x="70" y="16" font-size="11" fill="#000000">1151015</text>
    <rect x="126" y="2" width="18" height="19" class="btn-sys" />
    <text x="135" y="15" font-size="10" fill="#222" text-anchor="middle">...</text>

    <!-- Red Box around 發文日期 -->
    <rect x="-4" y="-2" width="230" height="26" class="red-box" />

    <!-- 填寫欄位 label (Red) -->
    <text x="836" y="16" class="red-note">填寫欄位</text>

    <!-- *發文字號 : [   ] 字 第 [   ] 號 with Red Box -->
    <text x="530" y="16" class="txt"><tspan class="req">*</tspan>發文字號 :</text>
    <rect x="620" y="2" width="68" height="19" class="input-box" />
    <text x="694" y="16" class="txt">字 第</text>
    <rect x="726" y="2" width="68" height="19" class="input-box" />
    <text x="798" y="16" class="txt">號</text>

    <!-- Red Box around 發文字號 -->
    <rect x="526" y="-2" width="298" height="26" class="red-box" />
  </g>

  <!-- Middle Action Buttons Bar -->
  <g transform="translate(280, 245)">
    <rect x="0" y="0" width="490" height="22" fill="#e9edf2" stroke="#b5c0cc" stroke-width="1" />
    <!-- Buttons -->
    <g transform="translate(4, 2)">
      <rect x="0" y="0" width="28" height="18" class="btn-sys" />
      <text x="14" y="13" class="btn-txt">新增</text>

      <rect x="30" y="0" width="28" height="18" class="btn-sys" />
      <text x="44" y="13" class="btn-txt">查詢</text>

      <rect x="60" y="0" width="28" height="18" class="btn-sys" />
      <text x="74" y="13" class="btn-txt">修改</text>

      <rect x="90" y="0" width="28" height="18" class="btn-sys" />
      <text x="104" y="13" class="btn-txt">刪除</text>

      <rect x="120" y="0" width="28" height="18" class="btn-sys" />
      <text x="134" y="13" class="btn-txt">取消</text>

      <rect x="150" y="0" width="28" height="18" class="btn-sys" />
      <text x="164" y="13" class="btn-txt">確定</text>

      <rect x="180" y="0" width="46" height="18" class="btn-sys" />
      <text x="203" y="13" class="btn-txt">列表檔案</text>

      <rect x="228" y="0" width="46" height="18" class="btn-sys" />
      <text x="251" y="13" class="btn-txt">列表隱藏</text>

      <rect x="276" y="0" width="134" height="18" class="btn-sys" />
      <text x="343" y="13" font-size="10" fill="#222" text-anchor="middle">刪除處分書(已開立繳款書或繳費單)</text>

      <rect x="412" y="0" width="40" height="18" class="btn-sys" />
      <text x="428" y="13" font-size="10" fill="#222" text-anchor="middle">請選擇</text>
      <path d="M 444 7 L 448 7 L 446 11 Z" fill="#444" />

      <rect x="454" y="0" width="48" height="18" class="btn-sys" />
      <text x="478" y="13" font-size="10" fill="#222" text-anchor="middle">列印處分書</text>
    </g>
  </g>

  <!-- Lower Section: 違反法條 (with ... button and red annotation), 處分金額, 是否同意分期 -->
  <!-- Red Guidance annotation above 違反法條 button -->
  <text x="310" y="287" class="red-note">點這個...按鈕，選區域計畫法第21條</text>

  <g transform="translate(10, 292)">
    <!-- *違反法條 : [...] 科目 : -->
    <text x="0" y="16" class="txt"><tspan class="req">*</tspan>違反法條 :</text>
    <line x1="65" y1="20" x2="360" y2="20" stroke="#888888" stroke-dasharray="1 1" />

    <!-- Button [...] and 科目 : -->
    <g transform="translate(365, 0)">
      <rect x="0" y="1" width="22" height="19" class="btn-sys" />
      <text x="11" y="14" font-size="11" fill="#222" text-anchor="middle">...</text>
      <text x="28" y="15" class="txt">科目 :</text>

      <!-- Red Box around [...] button and 科目 -->
      <rect x="-4" y="-3" width="54" height="26" class="red-box" />
    </g>

    <!-- *發文字號 (lower view repeat) -->
    <text x="540" y="16" class="txt"><tspan class="req">*</tspan>發文字號 :</text>
    <rect x="625" y="2" width="68" height="18" class="input-box" />
    <text x="698" y="16" class="txt">字 第</text>
    <rect x="730" y="2" width="68" height="18" class="input-box" />
    <text x="802" y="16" class="txt">號</text>
  </g>

  <!-- Form Row: 處分金額 (Red Box), 已繳金額 -->
  <g transform="translate(10, 328)">
    <!-- 處分金額 with Red Box -->
    <text x="0" y="16" class="txt">處分金額 :</text>
    <rect x="65" y="2" width="160" height="19" class="input-box" />

    <!-- Red Box around 處分金額 -->
    <rect x="-4" y="-2" width="245" height="26" class="red-box" />

    <!-- 填寫欄位 label (Red) -->
    <text x="255" y="16" class="red-note">填寫欄位</text>

    <!-- 已繳金額 -->
    <text x="540" y="16" class="txt">已繳金額 :</text>
    <rect x="625" y="2" width="68" height="18" class="input-box" />
  </g>

  <!-- Form Row: 送達日期, 繳費期限, 是否同意分期 (Red Box) -->
  <g transform="translate(10, 362)">
    <!-- 送達日期 -->
    <text x="0" y="16" class="txt">送達日期 :</text>
    <rect x="65" y="2" width="60" height="18" class="input-box" />
    <rect x="126" y="2" width="18" height="18" class="btn-sys" />
    <text x="135" y="15" font-size="10" fill="#222" text-anchor="middle">...</text>

    <!-- 繳費期限 -->
    <text x="540" y="16" class="txt">繳費期限 :</text>
    <rect x="625" y="2" width="68" height="18" class="input-box" />
    <rect x="695" y="2" width="18" height="18" class="btn-sys" />
    <text x="704" y="15" font-size="10" fill="#222" text-anchor="middle">...</text>

    <!-- 是否同意分期 (Red Box Highlighted) -->
    <g transform="translate(718, 0)">
      <rect x="0" y="-3" width="90" height="28" class="red-box" />
      <text x="7" y="15" font-size="11.5" fill="#111111" font-weight="500">是否同意分期</text>
      <!-- Checkbox -->
      <rect x="74" y="4" width="11" height="11" fill="#ffffff" stroke="#333333" stroke-width="1.2" />
    </g>

    <!-- Red Note for 是否同意分期 -->
    <text x="822" y="12" class="red-note">如果行為人要申請</text>
    <text x="822" y="27" class="red-note">分期，這個要打勾</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(__dirname, '../public/penalty_step3_image.svg'), svgContent, 'utf8');
console.log('Successfully generated public/penalty_step3_image.svg');
