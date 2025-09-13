import { klines, indicators, indicatorOptions } from './chart-data.js';

const chartOptions = {
  autoSize: true,
  layout: {
    background: { type: 'solid', color: '#ffffff' },
    textColor: 'black',
    fontSize: 12,
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

requestAnimationFrame(() => {
  const pane2 = chartApi.panes()[1];
  // console.log(pane2.getHeight());
  // pane2.setHeight(100);
});

// requestAnimationFrame(() => {
//   const pane2 = chartApi.panes()[1];
//   pane2.moveTo(pane2.paneIndex() + 1);
// });

// requestAnimationFrame(() => {
//   const pane3 = chartApi.panes()[2];
//   pane3
//     .getSeries()
//     .forEach((series) => series.applyOptions({ visible: false }));

//   // const series = pane3.addSeries(LightweightCharts.LineSeries, {
//   //   lineWidth: 2,
//   //   color: 'rgba(50, 50, 50, 1)',
//   // });
//   // series.setData([
//   //   {
//   //     time: 1640995200.0,
//   //     value: 25.0,
//   //   },
//   //   {
//   //     time: 1735689600.0,
//   //     value: 25.0,
//   //   },
//   // ]);
// });

// requestAnimationFrame(() => {
//   const pane1 = chartApi.panes()[0];
//   const pane2 = chartApi.panes()[1];
//   const pane3 = chartApi.panes()[2];

//   console.log(pane1.getStretchFactor());
//   console.log(pane2.getStretchFactor());
//   console.log(pane3.getStretchFactor());

//   // pane1.setStretchFactor(70);
//   // pane2.setStretchFactor(15);
//   // pane3.setStretchFactor(15);
// });

// requestAnimationFrame(() => {
//   const pane2 = chartApi.panes()[1];
//   const element = pane2.getHTMLElement();
//   element.style.position = 'relative';

//   const infoPanel = document.createElement('div');
//   element.appendChild(infoPanel);

//   infoPanel.textContent = '📊 Demo Panel';
//   infoPanel.style.position = 'absolute';
//   infoPanel.style.top = '12px';
//   infoPanel.style.left = '12px';
//   infoPanel.style.width = '200px';
//   infoPanel.style.height = '50px';
//   infoPanel.style.padding = '12px';
//   infoPanel.style.backgroundColor = 'rgba(59, 130, 246, 0.95)';
//   infoPanel.style.color = 'white';
//   infoPanel.style.borderRadius = '12px';
//   infoPanel.style.zIndex = '10';
// });
