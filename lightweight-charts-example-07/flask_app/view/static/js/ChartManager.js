export default class ChartManager {
  daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  months = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ];
  chartOptions = {
    autoSize: true,
    layout: {
      background: { type: 'solid', color: '#ffffff' },
      textColor: 'black',
      fontSize: 12,
    },
    rightPriceScale: {
      scaleMargins: { top: 0.05, bottom: 0.05 },
      borderVisible: false,
    },
    timeScale: {
      rightOffset: 3,
      barSpacing: 33,
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
          hours = String(hours).padStart(2, '0');
          minutes = String(minutes).padStart(2, '0');
          return `${hours}:${minutes}`;
        }
      },
    },
    crosshair: {
      mode: 0,
    },
    grid: {
      vertLines: { color: '#edf0ee' },
      horzLines: { color: '#edf0ee' },
    },
    localization: {
      timeFormatter: (time) => {
        var date = new Date(time * 1000);
        var dayOfWeek = this.daysOfWeek[date.getUTCDay()];
        var day = date.getUTCDate();
        var month = this.months[date.getUTCMonth()];
        var year = date.getUTCFullYear();
        var hours = String(date.getUTCHours()).padStart(2, '0');
        var minutes = String(date.getUTCMinutes()).padStart(2, '0');
        return `${dayOfWeek} ${day} ${month} ${year}   ${hours}:${minutes}`;
      },
    },
  };
  candlestickOptions = {
    upColor: '#008984',
    downColor: '#f23645',
    borderVisible: false,
    wickUpColor: '#008984',
    wickDownColor: '#f23645',
  };

  createChart(data) {
    this.chart = LightweightCharts.createChart(
      document.getElementById('chart-panel'),
      this.chartOptions
    );
    this.candlestickSeries = this.chart.addCandlestickSeries(
      this.candlestickOptions
    );
    this.candlestickSeries.setData(data);
  }

  updateChart(data) {
    this.candlestickSeries.update(data);
  }
}
