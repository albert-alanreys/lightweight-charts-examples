import { klines, indicators, indicatorOptions } from './chart-data.js';

const chartOptions = {
  autoSize: true,
  layout: {
    background: { type: 'solid', color: '#ffffff' },
    textColor: 'black',
    fontSize: 12,
    // panes: {
    //   // enableResize: false,
    //   separatorColor: 'rgb(100, 100, 255)',
    //   separatorHoverColor: 'rgba(100, 100, 255, 0.3)',
    // },
    attributionLogo: false,
  },
  rightPriceScale: {
    scaleMargins: { top: 0.05, bottom: 0.05 },
    borderVisible: false,
  },
  timeScale: {
    rightOffset: 2,
    barSpacing: 10,
    minBarSpacing: 14,
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
const indicatorOptionsCommon = {
  lastValueVisible: false,
  priceLineVisible: false,
  crosshairMarkerVisible: false,
};
const indicatorTypes = {
  line: LightweightCharts.LineSeries,
  histogram: LightweightCharts.HistogramSeries,
};

function initChart() {
  const chartContainer = document.getElementById('chart-container');
  const chartApi = LightweightCharts.createChart(chartContainer);
  chartApi.applyOptions(chartOptions);
  return chartApi;
}

function createCandlestickSeries(chartApi) {
  const candlestickSeries = chartApi.addSeries(
    LightweightCharts.CandlestickSeries
  );
  candlestickSeries.applyOptions(candlestickOptions);
  candlestickSeries.setData(klines);
}

function createIndicatorSeries(chartApi) {
  Object.entries(indicatorOptions).forEach(([name, options]) => {
    const type = indicatorTypes[options.type] ?? indicatorTypes.line;
    const allOptions = { ...indicatorOptionsCommon, ...options };
    const paneIndex = Math.max(0, options.pane ?? 0);

    const series = chartApi.addSeries(type, allOptions, paneIndex);
    series.setData(indicators[name]);
  });
}

const chartApi = initChart();

createCandlestickSeries(chartApi);
createIndicatorSeries(chartApi);

// chartApi.swapPanes(1, 2);
// chartApi.removePane(2);
// chartApi.addPane();
