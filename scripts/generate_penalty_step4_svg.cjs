const fs = require('fs');
const path = require('path');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 325" width="100%" height="100%" style="background-color: #f7f7f7; font-family: 'PMingLiU', 'MingLiU', 'Microsoft JhengHei', 'PingFang TC', sans-serif;">
  <defs>
    <style>
      .txt { font-size: 11.5px; fill: #222222; }
      .req { color: #cc0000; fill: #cc0000; font-weight: bold; }
      .input-box { fill: #ffffff; stroke: #8d99a6; stroke-width: 1; }
      .btn-sys { fill: #f5f5f5; stroke: #8c8c8c; stroke-width: 1; rx: 1; }
      .btn-txt { font-size: 10.5px; fill: #111111; text-anchor: middle; }
      .red-box { stroke: #e00000; stroke-width: 2.2; fill: none; }
      .red-note { fill: #d60000; font-size: 12px; font-weight: bold; font-family: 'Microsoft JhengHei', sans-serif; }
      .red-note-sm { fill: #d60000; font-size: 10.5px; font-family: 'Microsoft JhengHei', sans-serif; }
      .sub-note { font-size: 10px; fill: #555555; }
    </style>
  </defs>

  <!-- ================= SECTION 1: 受處分人資料 ================= -->
  <!-- Yellow Banner Header 1 -->
  <rect x="0" y="0" width="980" height="20" fill="#ffff00" stroke="#d4d400" stroke-width="1" />
  <text x="490" y="15" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle" letter-spacing="2">受處分人資料</text>

  <!-- Form Area 1 -->
  <rect x="0" y="20" width="980" height="135" fill="#f8f8f8" stroke="#cccccc" stroke-width="0.8" />

  <!-- Row 1: 類別, 姓名, 身分證字號 (with Left Red Box) & 性別, 出生年月日 (with Right Red Box) -->
  <g transform="translate(10, 26)">
    <!-- Left Labels -->
    <text x="0" y="15" class="txt"><tspan class="req">*</tspan>類別 :</text>
    <rect x="145" y="2" width="70" height="18" class="input-box" />
    <text x="150" y="15" font-size="10.5" fill="#333">請選擇</text>
    <path d="M 205 8 L 211 8 L 208 13 Z" fill="#444" />

    <text x="0" y="38" class="txt"><tspan class="req">*</tspan>姓名 :</text>
    <rect x="145" y="25" width="70" height="18" class="input-box" />
    <rect x="218" y="25" width="16" height="18" class="btn-sys" />
    <text x="226" y="37" font-size="9" fill="#222" text-anchor="middle">...</text>

    <text x="0" y="61" class="txt"><tspan class="req">*</tspan>身分證字號(統一編號) :</text>
    <rect x="145" y="48" width="70" height="18" class="input-box" />

    <!-- Red Box around 類別, 姓名, 身分證字號 inputs -->
    <rect x="140" y="-1" width="100" height="71" class="red-box" />
    <text x="255" y="60" class="red-note">填寫欄位</text>

    <!-- Right Labels: 性別, 出生年月日 -->
    <g transform="translate(530, 0)">
      <text x="10" y="15" class="txt">性別 :</text>
      <rect x="95" y="2" width="55" height="18" class="input-box" />
      <text x="99" y="15" font-size="10.5" fill="#333">請選擇</text>
      <path d="M 141 8 L 146 8 L 143.5 13 Z" fill="#444" />

      <text x="10" y="38" class="txt">出生年月日 :</text>
      <rect x="95" y="25" width="55" height="18" class="input-box" />
      <rect x="153" y="25" width="16" height="18" class="btn-sys" />
      <text x="161" y="37" font-size="9" fill="#222" text-anchor="middle">...</text>

      <!-- Red Box around 性別, 出生年月日 -->
      <rect x="5" y="-1" width="170" height="48" class="red-box" />
      <text x="185" y="18" class="red-note">填寫欄位</text>
    </g>
  </g>

  <!-- Row 2: 外國居留證號或護照號碼, 職業 -->
  <g transform="translate(10, 100)">
    <text x="0" y="15" class="txt">外國居留證號或護照號碼 :</text>
    <rect x="145" y="2" width="70" height="18" class="input-box" />

    <text x="540" y="15" class="txt">職業 :</text>
    <rect x="625" y="2" width="72" height="18" class="input-box" />
  </g>

  <!-- Row 3: 住居所/營業所地址 (with Red Box) -->
  <g transform="translate(10, 123)">
    <text x="6" y="15" class="txt">住居所/營業所地址 :</text>
    <text x="145" y="15" class="txt">郵遞區號 :</text>
    <rect x="200" y="2" width="50" height="18" class="input-box" />
    <text x="256" y="15" class="txt">地址 :</text>
    <rect x="288" y="2" width="205" height="18" class="input-box" />

    <!-- Red Box around 住居所/營業所地址 whole input row -->
    <rect x="0" y="-1" width="498" height="24" class="red-box" />

    <text x="504" y="15" class="sub-note">(範例 : 220242新北市板橋區中山路1段161號)</text>
  </g>

  <!-- Row 4: 戶籍地址 & 附件1, 附件2 -->
  <g transform="translate(10, 148)">
    <text x="0" y="15" class="txt">戶籍地址 :</text>
    <text x="145" y="15" class="txt">郵遞區號 :</text>
    <rect x="200" y="2" width="50" height="18" class="input-box" />

    <text x="145" y="36" class="txt">地址 :</text>
    <rect x="178" y="23" width="200" height="18" class="input-box" />
    <rect x="385" y="23" width="78" height="18" class="btn-sys" />
    <text x="424" y="35" class="btn-txt">同住居所/營業所地址</text>

    <!-- 附件 1, 附件 2 -->
    <g transform="translate(540, 0)">
      <text x="0" y="15" class="txt">附件1 : [</text>
      <line x1="45" y1="16" x2="160" y2="16" stroke="#888" stroke-dasharray="1 1" />
      <text x="162" y="15" class="txt">]</text>
      <rect x="170" y="2" width="42" height="17" class="btn-sys" />
      <text x="191" y="14" class="btn-txt">上傳檔案</text>
      <rect x="216" y="2" width="42" height="17" class="btn-sys" />
      <text x="237" y="14" class="btn-txt">下載檔案</text>

      <text x="0" y="36" class="txt">附件2 : [</text>
      <line x1="45" y1="37" x2="160" y2="37" stroke="#888" stroke-dasharray="1 1" />
      <text x="162" y="36" class="txt">]</text>
      <rect x="170" y="23" width="42" height="17" class="btn-sys" />
      <text x="191" y="35" class="btn-txt">上傳檔案</text>
      <rect x="216" y="23" width="42" height="17" class="btn-sys" />
      <text x="237" y="35" class="btn-txt">下載檔案</text>
    </g>
  </g>

  <!-- Middle Action Buttons Bar -->
  <g transform="translate(265, 178)">
    <rect x="0" y="0" width="520" height="21" fill="#e9edf2" stroke="#b5c0cc" stroke-width="1" />
    <g transform="translate(4, 1.5)">
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
      <text x="343" y="13" font-size="9.5" fill="#222" text-anchor="middle">刪除處分書(已開立繳款書或繳費單)</text>

      <rect x="412" y="0" width="40" height="18" class="btn-sys" />
      <text x="428" y="13" font-size="9.5" fill="#222" text-anchor="middle">請選擇</text>
      <path d="M 444 7 L 448 7 L 446 11 Z" fill="#444" />

      <rect x="454" y="0" width="58" height="18" class="btn-sys" />
      <text x="483" y="13" font-size="9.5" fill="#222" text-anchor="middle">列印處分書</text>
    </g>
  </g>

  <!-- ================= SECTION 2: 法定代理人資料 (法人填寫) ================= -->
  <!-- Yellow Banner Header 2 -->
  <rect x="0" y="200" width="980" height="20" fill="#ffff00" stroke="#d4d400" stroke-width="1" />
  <text x="490" y="215" font-size="12" text-anchor="middle">
    <tspan fill="#e00000" font-weight="bold">受處分人如果為公司法人要填這個　</tspan>
    <tspan fill="#000000" font-weight="bold">法定代理人資料</tspan>
  </text>

  <!-- Form Area 2 -->
  <rect x="0" y="220" width="980" height="105" fill="#f8f8f8" stroke="#cccccc" stroke-width="0.8" />

  <!-- Row 1: 姓名 (with Red Box) & 性別 (with Red Box) -->
  <g transform="translate(10, 225)">
    <text x="0" y="15" class="txt">姓名 :</text>
    <!-- 填寫欄位 (Red) on left -->
    <text x="82" y="15" class="red-note">填寫欄位</text>
    <rect x="135" y="2" width="70" height="18" class="input-box" />
    <rect x="208" y="2" width="16" height="18" class="btn-sys" />
    <text x="216" y="14" font-size="9" fill="#222" text-anchor="middle">...</text>

    <!-- Red Box around 姓名 input -->
    <rect x="130" y="-1" width="98" height="24" class="red-box" />

    <!-- 性別 on right with Red Box -->
    <g transform="translate(500, 0)">
      <text x="5" y="15" class="txt">性別 :</text>
      <rect x="90" y="2" width="55" height="18" class="input-box" />
      <text x="94" y="15" font-size="10.5" fill="#333">請選擇</text>
      <path d="M 136 8 L 141 8 L 138.5 13 Z" fill="#444" />

      <!-- Red Box around 性別 -->
      <rect x="0" y="-1" width="160" height="24" class="red-box" />
      <text x="170" y="27" class="red-note">填寫欄位</text>
    </g>
  </g>

  <!-- Row 2: 商號 -->
  <g transform="translate(10, 248)">
    <text x="0" y="15" class="txt">商號 :</text>
    <rect x="135" y="2" width="240" height="18" class="input-box" />
  </g>

  <!-- Row 3: 身分證字號(統一編號) (with Red Box) & 出生年月日 (with Red Box) -->
  <g transform="translate(10, 270)">
    <text x="0" y="15" class="txt">身分證字號(統一編號) :</text>
    <!-- 填寫欄位 (Red) -->
    <text x="98" y="15" class="red-note">填寫欄位</text>
    <rect x="135" y="2" width="70" height="18" class="input-box" />

    <!-- Red Box around 身分證字號 input -->
    <rect x="130" y="-1" width="100" height="24" class="red-box" />

    <!-- 出生年月日 on right with Red Box -->
    <g transform="translate(500, 0)">
      <text x="5" y="15" class="txt">出生年月日 :</text>
      <rect x="90" y="2" width="55" height="18" class="input-box" />
      <rect x="148" y="2" width="16" height="18" class="btn-sys" />
      <text x="156" y="14" font-size="9" fill="#222" text-anchor="middle">...</text>

      <!-- Red Box around 出生年月日 -->
      <rect x="0" y="-1" width="170" height="24" class="red-box" />
    </g>
  </g>

  <!-- Row 4: 外國居留證號或護照號碼, 職業 -->
  <g transform="translate(10, 292)">
    <text x="0" y="15" class="txt">外國居留證號或護照號碼 :</text>
    <rect x="135" y="2" width="70" height="18" class="input-box" />

    <text x="505" y="15" class="txt">職業 :</text>
    <rect x="590" y="2" width="68" height="18" class="input-box" />
  </g>

  <!-- Row 5: 戶籍地址 -->
  <g transform="translate(10, 307)">
    <text x="0" y="14" class="txt">戶籍地址 :</text>
    <text x="135" y="14" class="txt">郵遞區號 :</text>
    <rect x="188" y="2" width="48" height="16" class="input-box" />
    <text x="240" y="14" class="txt">地址 :</text>
    <rect x="270" y="2" width="195" height="16" class="input-box" />
    <text x="470" y="14" class="sub-note">(範例 : 220242新北市板橋區中山路1段161號)</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(__dirname, '../public/penalty_step4_image.svg'), svgContent, 'utf8');
console.log('Successfully generated public/penalty_step4_image.svg');
