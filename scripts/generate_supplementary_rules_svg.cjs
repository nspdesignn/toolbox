const fs = require('fs');
const path = require('path');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 950 1200" width="100%" height="100%" style="background-color: #ffffff; font-family: 'PMingLiU', 'MingLiU', 'DFKai-SB', 'BiauKai', 'Noto Serif TC', serif;">
  <defs>
    <style>
      .title { font-size: 21px; font-weight: bold; letter-spacing: 2px; fill: #000000; text-anchor: middle; }
      .tbl-border { stroke: #000000; stroke-width: 1.2; fill: none; }
      .tbl-border-thick { stroke: #000000; stroke-width: 2; fill: none; }
      .th-txt { font-size: 13px; font-weight: bold; fill: #000000; text-anchor: middle; }
      .td-txt { font-size: 13.5px; fill: #000000; text-anchor: middle; }
      .td-left { font-size: 13.5px; fill: #000000; }
      .symbol { font-size: 15px; font-weight: bold; text-anchor: middle; font-family: sans-serif; }
      .footnote { font-size: 11px; fill: #222222; }
    </style>
  </defs>

  <!-- Title -->
  <text x="475" y="45" class="title">製定非都市土地使用分區圖及編定各種使用地作業須知編定原則表</text>

  <!-- Outer Border -->
  <rect x="25" y="70" width="900" height="1100" class="tbl-border-thick" />

  <!-- Vertical Column Lines -->
  <!-- Col 0: 使用地類別 (x=25 to 175, w=150) -->
  <!-- Col 1: 一特定農業區 田 (x=175 to 235, w=60) -->
  <!-- Col 2: 一特定農業區 旱 (x=235 to 295, w=60) -->
  <!-- Col 3: 二一般農業區 田 (x=295 to 355, w=60) -->
  <!-- Col 4: 二一般農業區 旱 (x=355 to 415, w=60) -->
  <!-- Col 5: 三鄉村區 (x=415 to 480, w=65) -->
  <!-- Col 6: 四工業區 (x=480 to 545, w=65) -->
  <!-- Col 7: 五森林區 (x=545 to 610, w=65) -->
  <!-- Col 8: 六山坡地保育區 (x=610 to 685, w=75) -->
  <!-- Col 9: 七風景區 (x=685 to 745, w=60) -->
  <!-- Col 10: 八河川區 (x=745 to 805, w=60) -->
  <!-- Col 11: 九特定專用區 (x=805 to 865, w=60) -->
  <!-- Col 12: 十海域區 (x=865 to 925, w=60) -->

  <line x1="175" y1="70" x2="175" y2="1170" class="tbl-border" />
  <line x1="235" y1="125" x2="235" y2="1080" class="tbl-border" />
  <line x1="295" y1="70" x2="295" y2="1080" class="tbl-border" />
  <line x1="355" y1="125" x2="355" y2="1080" class="tbl-border" />
  <line x1="415" y1="70" x2="415" y2="1080" class="tbl-border" />
  <line x1="480" y1="70" x2="480" y2="1080" class="tbl-border" />
  <line x1="545" y1="70" x2="545" y2="1080" class="tbl-border" />
  <line x1="610" y1="70" x2="610" y2="1080" class="tbl-border" />
  <line x1="685" y1="70" x2="685" y2="1080" class="tbl-border" />
  <line x1="745" y1="70" x2="745" y2="1080" class="tbl-border" />
  <line x1="805" y1="70" x2="805" y2="1080" class="tbl-border" />
  <line x1="865" y1="70" x2="865" y2="1080" class="tbl-border" />

  <!-- Diagonal line in top-left cell -->
  <line x1="25" y1="70" x2="175" y2="155" class="tbl-border" />
  <text x="135" y="95" class="th-txt">使用分區</text>
  <text x="45" y="145" class="th-txt">使用地類別</text>

  <!-- Horizontal Lines for Headers -->
  <line x1="175" y1="98" x2="925" y2="98" class="tbl-border" />
  <line x1="175" y1="125" x2="415" y2="125" class="tbl-border" />
  <line x1="25" y1="155" x2="925" y2="155" class="tbl-border" />

  <!-- Header Row 1: 分區編號 -->
  <text x="235" y="88" class="th-txt">一</text>
  <text x="355" y="88" class="th-txt">二</text>
  <text x="447" y="88" class="th-txt">三</text>
  <text x="512" y="88" class="th-txt">四</text>
  <text x="577" y="88" class="th-txt">五</text>
  <text x="647" y="88" class="th-txt">六</text>
  <text x="715" y="88" class="th-txt">七</text>
  <text x="775" y="88" class="th-txt">八</text>
  <text x="835" y="88" class="th-txt">九</text>
  <text x="895" y="88" class="th-txt">十</text>

  <!-- Header Row 2: 分區名稱 -->
  <text x="235" y="115" class="th-txt">特定農業區</text>
  <text x="355" y="115" class="th-txt">一般農業區</text>
  <text x="447" y="138" class="th-txt">鄉村區</text>
  <text x="512" y="138" class="th-txt">工業區</text>
  <text x="577" y="138" class="th-txt">森林區</text>
  <text x="647" y="125" class="th-txt">山坡地</text>
  <text x="647" y="143" class="th-txt">保育區</text>
  <text x="715" y="138" class="th-txt">風景區</text>
  <text x="775" y="138" class="th-txt">河川區</text>
  <text x="835" y="125" class="th-txt">特定專</text>
  <text x="835" y="143" class="th-txt">用區</text>
  <text x="895" y="138" class="th-txt">海域區</text>

  <!-- Subheaders for 田 / 旱 -->
  <text x="205" y="145" class="th-txt">田</text>
  <text x="265" y="145" class="th-txt">旱</text>
  <text x="325" y="145" class="th-txt">田</text>
  <text x="385" y="145" class="th-txt">旱</text>

  <!-- Table Body Rows (19 使用地類別 + 備註) -->
  <!-- Row height ~45px -->
  ${[
    { name: '一、甲種建築用地', vals: ['v', 'x', 'v', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'v', 'x'] },
    { name: '二、乙種建築用地', vals: ['x', 'x', 'x', 'x', 'v', 'x', 'x', 'x', 'x', 'x', 'x', 'x'] },
    { name: '三、丙種建築用地', vals: ['x', 'v', 'x', 'v', 'x', 'x', '△', '△', '△', 'x', 'x', 'x'] },
    { name: '四、丁種建築用地', vals: ['△', '△', '△', '△', '△', 'v', '△', '△', '△', 'x', '△', 'x'] },
    { name: '五、農牧用地', vals: ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', '△', 'v', 'x'] },
    { name: '六、林業用地', vals: ['x', 'x', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'x', 'v', 'x'] },
    { name: '七、養殖用地', vals: ['△', '△', 'v', 'v', 'v', 'x', 'v', 'v', 'v', 'x', 'v', 'x'] },
    { name: '八、鹽業用地', vals: ['x', 'x', '△', '△', 'x', 'x', 'x', 'x', 'x', 'x', '△', 'x'] },
    { name: '九、礦業用地', vals: ['△', '△', '△', '△', 'x', 'x', '△', '△', '△', 'x', '△', 'x'] },
    { name: '十、窯業用地', vals: ['x', 'x', '△', '△', 'x', '△', 'x', 'v', 'x', 'x', '△', 'x'] },
    { name: '十一、交通用地', vals: ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', '△', 'v', 'x'] },
    { name: '十二、水利用地', vals: ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'x'] },
    { name: '十三、遊憩用地', vals: ['△', '△', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'x', 'v', 'x'] },
    { name: '十四、古蹟保存用地', vals: ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', '△', 'v', 'x'] },
    { name: '十五、生態保護用地', vals: ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', '△', 'v', 'x'] },
    { name: '十六、國土保安用地', vals: ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', '△', 'v', 'x'] },
    { name: '十七、墳墓用地', vals: ['△', '△', 'v', 'v', '△', 'x', '△', 'v', '△', 'x', 'v', 'x'] },
    { name: '十八、特定目的事業用地', vals: ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', '△', 'v', 'x'] },
    { name: '十九、海域用地', vals: ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'v'] }
  ].map((row, rIdx) => {
    const y = 155 + rIdx * 45;
    const centers = [205, 265, 325, 385, 447, 512, 577, 647, 715, 775, 835, 895];
    return `
    <line x1="25" y1="${y + 45}" x2="925" y2="${y + 45}" class="tbl-border" />
    <text x="35" y="${y + 28}" class="td-left font-bold">${row.name}</text>
    ${row.vals.map((v, cIdx) => {
      const char = v === 'v' ? '✓' : v === 'x' ? '✕' : '△';
      const color = v === 'v' ? '#006600' : v === 'x' ? '#cc0000' : '#885500';
      return `<text x="${centers[cIdx]}" y="${y + 28}" class="symbol" fill="${color}">${char}</text>`;
    }).join('')}
    `;
  }).join('')}

  <!-- 備註列 -->
  <g transform="translate(0, 1010)">
    <line x1="25" y1="1080" x2="925" y2="1080" class="tbl-border" />
    <text x="100" y="1050" class="th-txt">備　　註</text>
    <text x="235" y="1035" class="footnote" text-anchor="middle">以編定原則</text>
    <text x="235" y="1052" class="footnote" text-anchor="middle">用地為主，</text>
    <text x="235" y="1069" class="footnote" text-anchor="middle">依實際使用編定</text>

    <text x="355" y="1052" class="footnote" text-anchor="middle">同左</text>
    <text x="447" y="1052" class="footnote" text-anchor="middle">同左</text>
    <text x="512" y="1042" class="footnote" text-anchor="middle">以編定丁種</text>
    <text x="512" y="1060" class="footnote" text-anchor="middle">建築用地為主</text>
    <text x="577" y="1042" class="footnote" text-anchor="middle">以編定林業</text>
    <text x="577" y="1060" class="footnote" text-anchor="middle">用地為主</text>
    <text x="647" y="1052" class="footnote" text-anchor="middle">同左</text>
    <text x="715" y="1052" class="footnote" text-anchor="middle">同左</text>

    <text x="775" y="1035" class="footnote" text-anchor="middle">以編定水利</text>
    <text x="775" y="1052" class="footnote" text-anchor="middle">用地為主</text>
    <text x="775" y="1069" class="footnote" text-anchor="middle">河川局為準</text>

    <text x="835" y="1042" class="footnote" text-anchor="middle">依核准計畫</text>
    <text x="835" y="1060" class="footnote" text-anchor="middle">之主要用途為準</text>
  </g>

  <!-- 圖例說明 -->
  <g transform="translate(45, 1105)">
    <text x="0" y="22" font-size="13" font-weight="bold" fill="#000000">圖例說明：</text>
    <text x="80" y="22" font-size="14" font-weight="bold" fill="#006600">✓</text>
    <text x="100" y="22" font-size="13" fill="#333333">編定原則主要用地</text>

    <text x="240" y="22" font-size="14" font-weight="bold" fill="#885500">△</text>
    <text x="260" y="22" font-size="13" fill="#333333">視現地實際狀況或核准計畫編定</text>

    <text x="490" y="22" font-size="14" font-weight="bold" fill="#cc0000">✕</text>
    <text x="510" y="22" font-size="13" fill="#333333">不合該使用分區性質，原則不予編定</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(__dirname, '../public/supplementary_note_rules_table.svg'), svgContent, 'utf8');
console.log('Successfully generated public/supplementary_note_rules_table.svg');
