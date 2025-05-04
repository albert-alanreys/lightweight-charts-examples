import ChartManager from './ChartManager.js';

const BASE_URL = 'http://127.0.0.1:5000';
const WS_URL = 'ws://127.0.0.1:6790';

const chartManager = new ChartManager();

async function getHistoryKlines() {
  try {
    const response = await fetch(`${BASE_URL}/get_history_klines`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch historical klines:', error);
    return [];
  }
}

async function connectWebSocket() {
  const websocket = new WebSocket(WS_URL);

  websocket.onopen = () => {
    console.log('WebSocket connection opened');
  };

  websocket.onmessage = (event) => {
    try {
      const kline = JSON.parse(event.data);
      chartManager.updateChart(kline);
    } catch (error) {
      console.error('Invalid message:', error);
    }
  };

  websocket.onerror = (err) => {
    console.error('WebSocket error:', err);
  };

  websocket.onclose = () => {
    console.warn('WebSocket connection closed');
  };
}

async function renderUI() {
  const historyKlines = await getHistoryKlines();

  if (historyKlines) {
    chartManager.createChart(historyKlines);
    connectWebSocket();
  }
}

renderUI();
