const fs = require('fs');
const path = require('path');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 390" width="100%" height="100%" style="background-color: #ffffff; font-family: 'PMingLiU', 'MingLiU', 'DFKai-SB', 'BiauKai', 'Noto Serif TC', serif;">
  <defs>
    <style>
      .num-txt { font-size: 19px; fill: #111111; line-height: 1.8; letter-spacing: 0.5px; }
      .box-border { stroke: #111111; stroke-width: 1.5; fill: #ffffff; }
    </style>
  </defs>

  <!-- Document outer box matching user image border -->
  <rect x="15" y="15" width="750" height="360" class="box-border" />

  <!-- Item 1 -->
  <g transform="translate(25, 48)">
    <text x="0" y="0" class="num-txt">1. 須由專案小組審查之案件，每案新臺幣13,000元。</text>
  </g>

  <!-- Item 2 -->
  <g transform="translate(25, 102)">
    <text x="0" y="0" class="num-txt">2. 應檢附興辦事業計畫核准文件且無須由專案小組審查之案件，每案</text>
    <text x="22" y="32" class="num-txt">新臺幣5,000元。</text>
  </g>

  <!-- Item 3 -->
  <g transform="translate(25, 186)">
    <text x="0" y="0" class="num-txt">3. 免附興辦事業計畫核准文件且無須由專案小組審查之案件，每案新</text>
    <text x="22" y="32" class="num-txt">臺幣3,000元。</text>
  </g>

  <!-- Item 4 -->
  <g transform="translate(25, 270)">
    <text x="0" y="0" class="num-txt">4. 應檢附區域計畫擬定機關核發許可文件之案件，每案新臺幣10,000</text>
    <text x="22" y="30" class="num-txt">元。</text>
  </g>

  <!-- Item 5 -->
  <g transform="translate(25, 332)">
    <text x="0" y="0" class="num-txt">5. 土地徵收、撥用或依土地徵收條例第三條規定得徵收之土地以協議</text>
    <text x="22" y="30" class="num-txt">價購或其他方式取得，經核准一併辦理非都市土地變更編定之案件，</text>
    <text x="22" y="60" class="num-txt">免繳納審查費。</text>
  </g>
</svg>`;

// We will adjust height and positioning for exact layout
const finalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 430" width="100%" height="100%" style="background-color: #ffffff; font-family: 'PMingLiU', 'MingLiU', 'DFKai-SB', 'BiauKai', 'Noto Serif TC', serif;">
  <defs>
    <style>
      .num-txt { font-size: 19px; fill: #111111; letter-spacing: 0.5px; }
      .box-border { stroke: #111111; stroke-width: 1.5; fill: #ffffff; }
    </style>
  </defs>

  <!-- Outer Box with Border -->
  <rect x="15" y="15" width="750" height="400" class="box-border" />

  <!-- Content lines matching user screenshot exactly -->
  <!-- 1 -->
  <text x="28" y="55" class="num-txt">1. 須由專案小組審查之案件，每案新臺幣13,000元。</text>

  <!-- 2 -->
  <text x="28" y="105" class="num-txt">2. 應檢附興辦事業計畫核准文件且無須由專案小組審查之案件，每案</text>
  <text x="28" y="137" class="num-txt">新臺幣5,000元。</text>

  <!-- 3 -->
  <text x="28" y="187" class="num-txt">3. 免附興辦事業計畫核准文件且無須由專案小組審查之案件，每案新</text>
  <text x="28" y="219" class="num-txt">臺幣3,000元。</text>

  <!-- 4 -->
  <text x="28" y="269" class="num-txt">4. 應檢附區域計畫擬定機關核發許可文件之案件，每案新臺幣10,000</text>
  <text x="28" y="301" class="num-txt">元。</text>

  <!-- 5 -->
  <text x="28" y="351" class="num-txt">5. 土地徵收、撥用或依土地徵收條例第三條規定得徵收之土地以協議</text>
  <text x="28" y="383" class="num-txt">價購或其他方式取得，經核准一併辦理非都市土地變更編定之案件，</text>
  <text x="28" y="405" class="num-txt" font-size="19">免繳納審查費。</text>
</svg>`;

const adjustedSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 435" width="100%" height="100%" style="background-color: #ffffff; font-family: 'PMingLiU', 'MingLiU', 'DFKai-SB', 'BiauKai', 'Noto Serif TC', serif;">
  <!-- Outer Box with Border -->
  <rect x="12" y="12" width="756" height="410" fill="#ffffff" stroke="#000000" stroke-width="1.6" />

  <!-- 1 -->
  <text x="24" y="52" font-size="18.5" fill="#111">1. 須由專案小組審查之案件，每案新臺幣13,000元。</text>

  <!-- 2 -->
  <text x="24" y="100" font-size="18.5" fill="#111">2. 應檢附興辦事業計畫核准文件且無須由專案小組審查之案件，每案</text>
  <text x="24" y="132" font-size="18.5" fill="#111">新臺幣5,000元。</text>

  <!-- 3 -->
  <text x="24" y="180" font-size="18.5" fill="#111">3. 免附興辦事業計畫核准文件且無須由專案小組審查之案件，每案新</text>
  <text x="24" y="212" font-size="18.5" fill="#111">臺幣3,000元。</text>

  <!-- 4 -->
  <text x="24" y="260" font-size="18.5" fill="#111">4. 應檢附區域計畫擬定機關核發許可文件之案件，每案新臺幣10,000</text>
  <text x="24" y="292" font-size="18.5" fill="#111">元。</text>

  <!-- 5 -->
  <text x="24" y="340" font-size="18.5" fill="#111">5. 土地徵收、撥用或依土地徵收條例第三條規定得徵收之土地以協議</text>
  <text x="24" y="372" font-size="18.5" fill="#111">價購或其他方式取得，經核准一併辦理非都市土地變更編定之案件，</text>
  <text x="24" y="404" font-size="18.5" fill="#111">免繳納審查費。</text>
</svg>`;

fs.writeFileSync(path.join(__dirname, '../public/change_fee_standards_image.svg'), adjustedSvg, 'utf8');
console.log('Successfully generated public/change_fee_standards_image.svg');
