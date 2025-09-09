import { klines, lines, markers } from "./chart-data.js";

const chartOptions = {
  autoSize: true,
  layout: {
    background: { type: "solid", color: "#ffffff" },
    textColor: "black",
    fontSize: 12,
  },
  rightPriceScale: {
    scaleMargins: { top: 0.05, bottom: 0.05 },
    borderVisible: false,
  },
  timeScale: {
    rightOffset: 5,
    barSpacing: 10,
    minBarSpacing: 2,
    borderVisible: false,
  },
  crosshair: {
    mode: 0,
  },
  grid: {
    vertLines: { color: "#edf0ee" },
    horzLines: { color: "#edf0ee" },
  },
};
const candlestickOptions = {
  upColor: "#008984",
  downColor: "#f23645",
  borderVisible: false,
  wickUpColor: "#008984",
  wickDownColor: "#f23645",
};
const lineOptions = {
  lastValueVisible: false,
  priceLineVisible: false,
  crosshairMarkerVisible: false,
};

const chart = LightweightCharts.createChart(
  document.getElementById("chart-panel"),
  chartOptions
);
const candlestickSeries = chart.addCandlestickSeries(candlestickOptions);
candlestickSeries.setData(klines);
candlestickSeries.setMarkers(markers);
const lineSeriesGroup = {};

for (let key in lines) {
  let lineSeries = chart.addLineSeries(lines[key].options);
  lineSeries.setData(lines[key].values);
  lineSeries.applyOptions(lineOptions);
  lineSeriesGroup[key] = lineSeries;
}

const mainLegend = document.createElement("div");
mainLegend.setAttribute("id", "main-legend");
mainLegend.style.position = "absolute";
mainLegend.style.left = "12px";
mainLegend.style.top = "12px";
mainLegend.style.zIndex = 2;
document.getElementById("chart-panel").appendChild(mainLegend);

const linesLegend = document.createElement("div");
linesLegend.setAttribute("id", "lines-legend");
linesLegend.style.position = "absolute";
linesLegend.style.left = "12px";
linesLegend.style.top = "40px";
linesLegend.style.zIndex = 2;
linesLegend.style.fontSize = "14px";
document.getElementById("chart-panel").appendChild(linesLegend);

let o = klines.at(-1).open;
let h = klines.at(-1).high;
let l = klines.at(-1).low;
let c = klines.at(-1).close;

mainLegend.innerHTML = getMainLegendText(o, h, l, c);
linesLegend.innerHTML = Object.values(lineSeriesGroup)
  .map((item) => {
    return getLineLegendText(item.data().at(-1));
  })
  .join(" ");

const crosshairMoveHandler = (crosshairPosition) => {
  if (crosshairPosition.time) {
    let mainData = crosshairPosition.seriesData.get(candlestickSeries);
    o = mainData.open;
    h = mainData.high;
    l = mainData.low;
    c = mainData.close;
    mainLegend.innerHTML = getMainLegendText(o, h, l, c);
    linesLegend.innerHTML = Object.values(lineSeriesGroup)
      .map((item) => {
        return getLineLegendText(crosshairPosition.seriesData.get(item));
      })
      .join(" ");
  }
};

chart.subscribeCrosshairMove(crosshairMoveHandler);

function getMainLegendText(o, h, l, c) {
  let color = c > o ? "#008984" : "#f23645";
  return `BTCUSDT.P • 1D • BINANCE &nbsp;
      O <span style="color:${color};">${o}</span>
      H <span style="color:${color};">${h}</span>
      L <span style="color:${color};">${l}</span>
      C <span style="color:${color};">${c}</span>`;
}

function getLineLegendText(point) {
  let color = point.color;
  let value = point.value;

  if (point.color == "transparent") {
    value = "∅";
    color = "#000000";
  }

  return `<span style="color:${color};">${value}</span>`;
}
