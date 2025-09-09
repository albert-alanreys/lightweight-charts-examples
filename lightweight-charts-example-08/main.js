import { klines, lines, markers } from './chart-data.js';

const chartOptions = {
  autoSize: true,
  layout: {
    background: { type: 'solid', color: '#ffffff' },
    textColor: 'black',
    fontSize: 12,
    // attributionLogo: false,
  },
  rightPriceScale: {
    scaleMargins: { top: 0.05, bottom: 0.05 },
    borderVisible: false,
  },
  timeScale: {
    rightOffset: 4,
    barSpacing: 10,
    minBarSpacing: 16,
    borderVisible: false,
  },
  crosshair: {
    mode: 0,
  },
  grid: {
    vertLines: { color: '#edf0ee' },
    horzLines: { color: '#edf0ee' },
  },
};
const candlestickOptions = {
  upColor: '#008984',
  downColor: '#f23645',
  borderVisible: false,
  wickUpColor: '#008984',
  wickDownColor: '#f23645',
};
const lineOptions = {
  lastValueVisible: false,
  priceLineVisible: false,
  lineWidth: 2,
  crosshairMarkerVisible: false,
};

const chartContainer = document.getElementById('chart-container');
const chart = LightweightCharts.createChart(chartContainer);
chart.applyOptions(chartOptions);

const candlestickSeries = chart.addSeries(LightweightCharts.CandlestickSeries);
candlestickSeries.applyOptions(candlestickOptions);
candlestickSeries.setData(klines);

Object.values(lines).forEach((values) => {
  const lineSeries = chart.addSeries(
    LightweightCharts.LineSeries,
    lineOptions
  );
  lineSeries.setData(values);
});

const seriesMarkers = LightweightCharts.createSeriesMarkers(candlestickSeries);
seriesMarkers.setMarkers(markers);
