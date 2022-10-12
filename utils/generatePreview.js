const MiniLineChart = (data, height = 170, width = 250, color = "#6495ED") => {
  data = data?.values;
  if (!data) return null;
  const stroke = 1;
  const maxX = data.length - 1;
  const padding = 0;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  let maxY = 0;
  let minY = 0;

  data.forEach((element, index) => {
    if (index === 0) {
      maxY = Number(element.y) || 0;
      minY = Number(element.y) || 0;
    } else if (element.y) {
      if (element.y > maxY) maxY = Number(element.y);
      if (element.y < minY) minY = Number(element.y);
    }
  });
  const points = data
    .map((element, index) => {
      const x = (index / maxX) * chartWidth;
      const y =
        chartHeight - ((element.y - minY) / (maxY - minY)) * chartHeight;

      return `${x},${y}`;
    })
    .join(" ");

  return `<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="${width}"
      height="${height}"
      viewBox="0 0 ${width} ${height}"
    >
    <polyline stroke="${color}" stroke-width="${stroke}" fill='none' points="${points}" />
    </svg>`;
};

module.exports = MiniLineChart;
