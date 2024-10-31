import ChartManager from "./ChartManager.js";

const baseURL = "http://127.0.0.1:5000";

async function getDataIds() {
  var response = await fetch(`${baseURL}/data/ids`);
  var result = await response.json();
  return result;
}

async function getMainData(id) {
  var response = await fetch(`${baseURL}/data/main/${id}`);
  var result = await response.json();
  return result;
}

function renderUI(id) {
  getMainData(id).then((mainData) => {
    chartManager.removeChart();
    chartManager.createChart(mainData);
  });
}

const chartManager = new ChartManager();
const dataIds = await getDataIds();
let currentId = dataIds[0];

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    let index = dataIds.indexOf(currentId);

    if (index > 0) {
      index -= 1;
      currentId = dataIds[index];
      renderUI(currentId);
    }
  } else if (event.key === "ArrowDown") {
    let index = dataIds.indexOf(currentId);

    if (index < dataIds.length - 1) {
      index += 1;
      currentId = dataIds[index];
      renderUI(currentId);
    }
  }
});

renderUI(currentId);
