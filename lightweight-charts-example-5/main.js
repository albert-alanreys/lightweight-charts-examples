import { klines } from "./chart-data.js";

const daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
const months = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Май",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
];
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
    tickMarkFormatter: (time) => {
      var date = new Date(time * 1000);
      var day = date.getUTCDate();
      var month = date.getUTCMonth();
      var year = date.getUTCFullYear();
      var hours = date.getUTCHours();
      var minutes = date.getUTCMinutes();

      if (month == 0 && day == 1 && hours == 0 && minutes == 0) {
        return String(year);
      } else if (day == 1 && hours == 0 && minutes == 0) {
        return months[date.getUTCMonth()];
      } else if (hours == 0 && minutes == 0) {
        return String(day);
      } else {
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        return `${hours}:${minutes}`;
      }
    },
  },
  crosshair: {
    mode: 0,
  },
  grid: {
    vertLines: { color: "#edf0ee" },
    horzLines: { color: "#edf0ee" },
  },
  localization: {
    timeFormatter: (time) => {
      var date = new Date(time * 1000);
      var dayOfWeek = daysOfWeek[date.getUTCDay()];
      var day = date.getUTCDate();
      var month = months[date.getUTCMonth()];
      var year = date.getUTCFullYear();
      var hours = String(date.getUTCHours()).padStart(2, "0");
      var minutes = String(date.getUTCMinutes()).padStart(2, "0");
      return `${dayOfWeek} ${day} ${month} ${year}   ${hours}:${minutes}`;
    },
  },
};
const candlestickOptions = {
  upColor: "#008984",
  downColor: "#f23645",
  borderVisible: false,
  wickUpColor: "#008984",
  wickDownColor: "#f23645",
};
const initialRenderedPointsCount = 500;
let renderedPointsCount = initialRenderedPointsCount;

const chart = LightweightCharts.createChart(
  document.getElementById("chart-panel"),
  chartOptions
);
const candlestickSeries = chart.addCandlestickSeries(candlestickOptions);
candlestickSeries.setData(klines.slice(-renderedPointsCount));

const visibleLogicalRangeChangeHandler = (newVisibleTimeRange) => {
  if (newVisibleTimeRange.from < 50) {
    renderedPointsCount += initialRenderedPointsCount;
    setChartData();
  }
};

const timeScale = chart.timeScale();
timeScale.subscribeVisibleLogicalRangeChange(visibleLogicalRangeChangeHandler);
setChartData();

function setChartData() {
  if (renderedPointsCount > klines.length) {
    timeScale.unsubscribeVisibleLogicalRangeChange(
      visibleLogicalRangeChangeHandler
    );
  }

  candlestickSeries.setData(klines.slice(-renderedPointsCount));
}

const mainLegend = document.createElement("div");
mainLegend.setAttribute("id", "main-legend");
mainLegend.style.position = "absolute";
mainLegend.style.left = "12px";
mainLegend.style.top = "12px";
mainLegend.style.zIndex = 2;
document.getElementById("chart-panel").appendChild(mainLegend);

let o = klines.at(-1).open;
let h = klines.at(-1).high;
let l = klines.at(-1).low;
let c = klines.at(-1).close;

mainLegend.innerHTML = getMainLegendText(o, h, l, c);

const crosshairMoveHandler = (crosshairPosition) => {
  if (crosshairPosition.time) {
    let mainData = crosshairPosition.seriesData.get(candlestickSeries);
    o = mainData.open;
    h = mainData.high;
    l = mainData.low;
    c = mainData.close;
    mainLegend.innerHTML = getMainLegendText(o, h, l, c);
  }
};

chart.subscribeCrosshairMove(crosshairMoveHandler);

function getMainLegendText(o, h, l, c) {
  let color = c > o ? "#008984" : "#f23645";
  return `BTCUSDT.P • 1h • BINANCE &nbsp;
      O <span style="color:${color};">${o}</span>
      H <span style="color:${color};">${h}</span>
      L <span style="color:${color};">${l}</span>
      C <span style="color:${color};">${c}</span>`;
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    timeScale.scrollToRealTime();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Delete") {
    removeChart();
  }
});

function removeChart() {
  try {
    chart.remove();

    for (var item of Array.from(
      document.getElementById("chart-panel").children
    )) {
      item.remove();
    }
  } catch {}
}
