var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar", // Specify the chart type (e.g., bar, line, pie)
  data: {
    labels: ["Label 1", "Label 2", "Label 3"], // X-axis labels
    datasets: [
      {
        label: "My Dataset",
        data: [10, 20, 30], // Y-axis values
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Customize colors
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    // Customize chart options (e.g., title, legend, tooltips)
  },
});
