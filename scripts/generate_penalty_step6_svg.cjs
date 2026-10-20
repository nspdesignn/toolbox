const fs = require('fs');
const path = require('path');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 230" width="100%" height="100%" style="background-color: #ffffff; font-family: 'PMingLiU', 'MingLiU', 'Microsoft JhengHei', 'PingFang TC', sans-serif;">
  <defs>
    <style>
      .txt { font-size: 13px; fill: #111111; }
      .tbl-hdr { font-size: 13.5px; fill: #111111; font-weight: bold; text-anchor: middle; }
      .tbl-cell { font-size: 13.5px; fill: #000000; font-family: 'Courier New', monospace, sans-serif; font-weight: 500; }
      .tbl-cell-center { font-size: 13.5px; fill: #000000; font-family: 'Courier New', monospace, sans-serif; text-anchor: middle; }
      .btn-sys { fill: #ffffff; stroke: #555555; stroke-width: 1; }
      .btn-txt { font-size: 12.5px; fill: #111111; text-anchor: middle; }
      .red-box { stroke: #e00000; stroke-width: 2.8; fill: none; }
      .red-note-lg { fill: #e00000; font-size: 21px; font-weight: bold; font-family: 'Microsoft JhengHei', sans-serif; letter-spacing: 2px; }
    </style>
  </defs>

  <!-- Red Note: 再按列印繳費單 (above buttons) -->
  <text x="648" y="38" class="red-note-lg" text-anchor="middle">再按列印繳費單</text>

  <!-- Buttons Bar -->
  <g transform="translate(85, 52)">
    <!-- 新增 -->
    <rect x="0" y="0" width="52" height="26" class="btn-sys" />
    <text x="26" y="18" class="btn-txt">新　增</text>

    <!-- 修改 -->
    <rect x="64" y="0" width="52" height="26" class="btn-sys" />
    <text x="90" y="18" class="btn-txt">修　改</text>

    <!-- 取消 -->
    <rect x="128" y="0" width="52" height="26" class="btn-sys" />
    <text x="154" y="18" class="btn-txt">取　消</text>

    <!-- 確定 -->
    <rect x="192" y="0" width="52" height="26" class="btn-sys" />
    <text x="218" y="18" class="btn-txt" fill="#999">確　定</text>

    <!-- 列表檔案 -->
    <rect x="256" y="0" width="70" height="26" class="btn-sys" />
    <text x="291" y="18" class="btn-txt">列表檔案</text>

    <!-- 列表隱藏 -->
    <rect x="338" y="0" width="70" height="26" class="btn-sys" />
    <text x="373" y="18" class="btn-txt">列表隱藏</text>

    <!-- 列印繳款書 -->
    <rect x="420" y="0" width="85" height="26" class="btn-sys" />
    <text x="462" y="18" class="btn-txt">列印繳款書</text>

    <!-- 列印繳費單 (with Red Box) -->
    <rect x="517" y="0" width="85" height="26" class="btn-sys" />
    <text x="559" y="18" class="btn-txt">列印繳費單</text>
    <rect x="509" y="-6" width="102" height="38" class="red-box" />

    <!-- 繳費單複製 -->
    <rect x="614" y="0" width="85" height="26" class="btn-sys" />
    <text x="656" y="18" class="btn-txt">繳費單複製</text>
  </g>

  <!-- Orange/Gold Top border line -->
  <line x1="0" y1="92" x2="880" y2="92" stroke="#e69500" stroke-width="1.8" />

  <!-- Table Container -->
  <g transform="translate(0, 93)">
    <!-- Header Row (Gray gradient look) -->
    <rect x="0" y="0" width="880" height="28" fill="#d8d4c6" stroke="#b0aba0" stroke-width="0.8" />
    <!-- Vertical dividers in header -->
    <line x1="24" y1="0" x2="24" y2="28" stroke="#a09a8e" stroke-width="1" />
    <line x1="250" y1="0" x2="250" y2="28" stroke="#a09a8e" stroke-width="1" />
    <line x1="324" y1="0" x2="324" y2="28" stroke="#a09a8e" stroke-width="1" />
    <line x1="500" y1="0" x2="500" y2="28" stroke="#a09a8e" stroke-width="1" />
    <line x1="635" y1="0" x2="635" y2="28" stroke="#a09a8e" stroke-width="1" />
    <line x1="775" y1="0" x2="775" y2="28" stroke="#a09a8e" stroke-width="1" />

    <!-- Header Titles -->
    <text x="137" y="19" class="tbl-hdr">繳費單編號</text>
    <text x="287" y="19" class="tbl-hdr">期別</text>
    <text x="412" y="19" class="tbl-hdr">繳費單金額</text>
    <text x="567" y="19" class="tbl-hdr">開立日期</text>
    <text x="705" y="19" class="tbl-hdr">入庫日期</text>
    <text x="827" y="19" class="tbl-hdr">撤銷日期</text>

    <!-- Yellow Data Row (Selected Item) -->
    <rect x="0" y="28" width="880" height="28" fill="#fff000" stroke="#cccc00" stroke-width="0.8" />
    <!-- Vertical dividers in data row -->
    <line x1="24" y1="28" x2="24" y2="56" stroke="#c8be00" stroke-width="1" />
    <line x1="250" y1="28" x2="250" y2="56" stroke="#c8be00" stroke-width="1" />
    <line x1="324" y1="28" x2="324" y2="56" stroke="#c8be00" stroke-width="1" />
    <line x1="500" y1="28" x2="500" y2="56" stroke="#c8be00" stroke-width="1" />
    <line x1="635" y1="28" x2="635" y2="56" stroke="#c8be00" stroke-width="1" />
    <line x1="775" y1="28" x2="775" y2="56" stroke="#c8be00" stroke-width="1" />

    <!-- Data Row Contents -->
    <text x="18" y="47" font-size="13" fill="#000" text-anchor="end">000</text>
    <text x="70" y="47" class="tbl-cell">95484311500020</text>
    <text x="492" y="47" class="tbl-cell" text-anchor="end">60,000</text>
    <text x="567" y="47" class="tbl-cell-center">1150113</text>
    <text x="705" y="47" class="tbl-cell-center">1150123</text>
  </g>

  <!-- Red Note: 先點黃黃的這行 (below yellow table row) -->
  <text x="320" y="192" class="red-note-lg" text-anchor="middle">先點黃黃的這行</text>
</svg>`;

fs.writeFileSync(path.join(__dirname, '../public/penalty_step6_image.svg'), svgContent, 'utf8');
console.log('Successfully generated public/penalty_step6_image.svg');
