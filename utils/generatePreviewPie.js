const PieChart = (data, height = 170, width = 250) => {
  if (!data) return null;
  const entries = Object.keys(data)
    .map((el) => data[el])
    .sort((a, b) => b - a)
    .slice(0, 7);
  const e1 = entries[1] ?? 1;
  const e2 = entries[0] ?? 1;
  const e3 = entries[2] ?? 1;
  const e4 = entries[3] ?? 1;
  const e5 = entries[4] ?? 1;
  const e6 = entries[5] ?? 1;
  const e7 = entries[7] ?? 1;

  const total = e1 + e2 + e3 + e4 + e5 + e6 + e7;
  const circum = 2 * (3.14459 * (height / 2 - 30));
  const thickness = height / 4;

  const p1 = (e1 / total) * circum;
  const p2 = (e2 / total) * circum;
  const p3 = (e3 / total) * circum;
  const p4 = (e4 / total) * circum;
  const p5 = (e5 / total) * circum;
  const p6 = (e6 / total) * circum;
  const p7 = (e6 / total) * circum;

  return `<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  version="1.1"
  width="${width}"
  height="${height}"
  viewBox="0 0 ${width} ${height}">
  
  
  <g >

  <circle id="d1" cx="${width / 2}" cy="${height / 2}" r="${
    height / 2 - 30
  }" fill="transparent" stroke="#91eb7c" stroke-width="${thickness}" stroke-dasharray="${
    p1 + " " + circum
  }" stroke-dashoffset="0" style=""></circle>


<circle id="d2" cx="${width / 2}" cy="${height / 2}" r="${
    height / 2 - 30
  }" fill="transparent" stroke="#7dafeb"  stroke-width="${thickness}" stroke-dasharray="${
    p2 + " " + circum
  }" stroke-dashoffset="${0 - p1}" style=""></circle>

  <circle id="d3" cx="${width / 2}" cy="${height / 2}" r="${
    height / 2 - 30
  }" fill="transparent" stroke="#ed6083"  stroke-width="${thickness}" stroke-dasharray="${
    p3 + " " + circum
  }"  stroke-dashoffset="${0 - (p1 + p2)}" style=""></circle>


  <circle id="d4" cx="${width / 2}" cy="${height / 2}" r="${
    height / 2 - 30
  }" fill="transparent" stroke="#f6a45c"  stroke-width="${thickness}" stroke-dasharray="${
    p4 + " " + circum
  }" stroke-dashoffset="${0 - (p1 + p2 + p3)}"
   style=""></circle>

  <circle id="d5" cx="${width / 2}" cy="${height / 2}" r="${
    height / 2 - 30
  }" fill="transparent" stroke="#8286eb"  stroke-width="${thickness}" stroke-dasharray="${
    p5 + " " + circum
  }" stroke-dashoffset="${0 - (p1 + p2 + p3 + p4)}" style=""></circle>

  <circle id="d6" cx="${width / 2}" cy="${height / 2}" r="${
    height / 2 - 30
  }" fill="transparent" stroke="#e6d160"  stroke-width="${thickness}" stroke-dasharray="${
    p6 + " " + circum
  }" stroke-dashoffset="${0 - (p1 + p2 + p3 + p4 + p5)}" style=""></circle>

  <circle id="d6" cx="${width / 2}" cy="${height / 2}" r="${
    height / 2 - 30
  }" fill="transparent" stroke="#e6d160"  stroke-width="${thickness}" stroke-dasharray="${
    p6 + " " + circum
  }" stroke-dashoffset="${0 - (p1 + p2 + p3 + p4 + p5)}" style=""></circle>

  <circle id="d7" cx="${width / 2}" cy="${height / 2}" r="${
    height / 2 - 30
  }" fill="transparent" stroke="#f1cfae"  stroke-width="${thickness}" stroke-dasharray="${
    p7 + " " + circum
  }" stroke-dashoffset="${0 - (p1 + p2 + p3 + p4 + p5 + p6)}" style=""></circle>
  
</g>

  </svg>`;
};

module.exports = PieChart;
