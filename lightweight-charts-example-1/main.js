import { klines } from "./chart-data.js";

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

const chart = LightweightCharts.createChart(
  document.getElementById("chart-panel"),
  chartOptions
);
const candlestickSeries = chart.addCandlestickSeries(candlestickOptions);
candlestickSeries.setData(klines);
