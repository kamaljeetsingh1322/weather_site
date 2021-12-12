//chart-01
const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: "rgb(255, 99, 104)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 9, 15, 10, 25, 35, 48],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};
const myChart = new Chart(document.getElementById("myChart"), config);

//chart-02
const data1 = {
  labels: ["a"],
  datasets: [
    {
      data: [10, 18, 8, 5, 12],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
      ],
    },
  ],
};

const config1 = {
  type: "polarArea",
  data: data1,
  options: {},
};

const mychart1 = new Chart(document.getElementById("mycanvas1"), config1);
