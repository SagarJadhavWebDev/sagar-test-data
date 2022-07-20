var options = {
  series: [{
      data: [35, 65, 78, 82, 67, 97, 57, 100],
    },
    {
      data: [15, 55, 57, 56, 75, 64, 75, 80],
    },
  ],
  chart: {
    type: "bar",
    height: 200,
    borderRadius: 10,
    toolbar: { show: false },
    zoom: { enabled: false },
    enabled: false,
    dataLabels: { enabled: false },
    legend: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      vertical: false,
      columnWidth: "25%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 1,
    colors: ["transparent"],
  },

  yaxis: {
    show: false,
    title: {
      text: "$ (thousands)",
    },
  },
  xaxis: {
    show: false,
    labels: { show: false },
    axisBorder: { show: false },
    crosshairs: { show: false },
    axisTicks: { show: false },
  },
  fill: {
    opacity: 1,
  },
  grid: {
    show: false,
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#column-chart"), options);
chart.render();