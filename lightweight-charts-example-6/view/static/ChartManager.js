export default class ChartManager {
  daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  months = [
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
  chartOptions = {
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
          return this.months[date.getUTCMonth()];
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
        var dayOfWeek = this.daysOfWeek[date.getUTCDay()];
        var day = date.getUTCDate();
        var month = this.months[date.getUTCMonth()];
        var year = date.getUTCFullYear();
        var hours = String(date.getUTCHours()).padStart(2, "0");
        var minutes = String(date.getUTCMinutes()).padStart(2, "0");
        return `${dayOfWeek} ${day} ${month} ${year}   ${hours}:${minutes}`;
      },
    },
  };
  candlestickOptions = {
    upColor: "#008984",
    downColor: "#f23645",
    borderVisible: false,
    wickUpColor: "#008984",
    wickDownColor: "#f23645",
  };
  lineOptions = {
    lastValueVisible: false,
    priceLineVisible: false,
    crosshairMarkerVisible: false,
  };
  initialRenderedPointsCount = 1000;

  createChart(data) {
    this.createCanvas(data);
    this.createLegends(data);
  }

  createCanvas(data) {
    this.chart = LightweightCharts.createChart(
      document.getElementById("chart-panel"),
      this.chartOptions
    );
    this.candlestickSeries = this.chart.addCandlestickSeries(
      this.candlestickOptions
    );
    this.candlestickSeries.setData(
      data.klines.slice(-this.initialRenderedPointsCount)
    );
    this.candlestickSeries.setMarkers(data.markers);
    this.candlestickSeries.applyOptions({
      priceFormat: {
        type: "price",
        precision: String(data.mintick).match(/.\d+$/g)[0].length - 1,
        minMove: data.mintick,
      },
    });
    this.lineSeriesGroup = {};

    for (let key in data.lines) {
      let lineSeries = this.chart.addLineSeries(data.lines[key].options);

      console.log(data.lines[key].options);

      lineSeries.setData(data.lines[key].values);
      lineSeries.applyOptions(this.lineOptions);
      this.lineSeriesGroup[key] = lineSeries;
    }

    let setChartData = () => {
      if (renderedPointsCount > data.klines.length) {
        timeScale.unsubscribeVisibleLogicalRangeChange(
          visibleLogicalRangeChangeHandler
        );
      }

      this.candlestickSeries.setData(data.klines.slice(-renderedPointsCount));
      let startTime = this.candlestickSeries.data()[0].time;
      let newMarkers = data.markers.filter((item) => {
        if (item.time >= startTime) {
          return item;
        }
      });
      this.candlestickSeries.setMarkers(newMarkers);

      for (let key in this.lineSeriesGroup) {
        this.lineSeriesGroup[key].setData(
          data.lines[key].values.slice(-renderedPointsCount)
        );
      }
    };

    let renderedPointsCount = this.initialRenderedPointsCount;
    let visibleLogicalRangeChangeHandler = (newVisibleTimeRange) => {
      if (newVisibleTimeRange.from < 50) {
        renderedPointsCount += this.initialRenderedPointsCount;
        setChartData();
      }
    };

    let timeScale = this.chart.timeScale();
    timeScale.subscribeVisibleLogicalRangeChange(
      visibleLogicalRangeChangeHandler
    );

    setChartData();
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        timeScale.scrollToRealTime();
      }
    });
  }

  createLegends(data) {
    let mainLegend = document.createElement("div");
    mainLegend.setAttribute("id", "main-legend");
    mainLegend.style.position = "absolute";
    mainLegend.style.left = "12px";
    mainLegend.style.top = "12px";
    mainLegend.style.zIndex = 2;
    document.getElementById("chart-panel").appendChild(mainLegend);

    let linesLegend = document.createElement("div");
    linesLegend.setAttribute("id", "lines-legend");
    linesLegend.style.position = "absolute";
    linesLegend.style.left = "12px";
    linesLegend.style.top = "40px";
    linesLegend.style.zIndex = 2;
    linesLegend.style.fontSize = "14px";
    document.getElementById("chart-panel").appendChild(linesLegend);

    let o = data.klines.at(-1).open;
    let h = data.klines.at(-1).high;
    let l = data.klines.at(-1).low;
    let c = data.klines.at(-1).close;

    mainLegend.innerHTML = getMainLegendText(o, h, l, c);
    linesLegend.innerHTML =
      `${data.name} &nbsp;` +
      Object.values(this.lineSeriesGroup)
        .map((item) => {
          return getLineLegendText(item.data().at(-1));
        })
        .join(" ");

    let crosshairMoveHandler = (crosshairPosition) => {
      if (crosshairPosition.time) {
        let mainData = crosshairPosition.seriesData.get(
          this.candlestickSeries
        );
        o = mainData.open;
        h = mainData.high;
        l = mainData.low;
        c = mainData.close;
        mainLegend.innerHTML = getMainLegendText(o, h, l, c);
        linesLegend.innerHTML = Object.values(this.lineSeriesGroup)
          .map((item) => {
            return getLineLegendText(crosshairPosition.seriesData.get(item));
          })
          .join(" ");
      }
    };

    this.chart.subscribeCrosshairMove(crosshairMoveHandler);

    function getMainLegendText(o, h, l, c) {
      let color = c > o ? "#008984" : "#f23645";
      return `${data.symbol} •
          ${data.interval} • ${data.exchange.toUpperCase()}
          &nbsp;
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
  }

  removeChart() {
    try {
      this.chart.remove();

      for (var item of Array.from(
        document.getElementById("chart-panel").children
      )) {
        item.remove();
      }
    } catch {}
  }
}
