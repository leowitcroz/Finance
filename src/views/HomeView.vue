<template>
  <Bar :data="data1" :options="options1" />
  <PolarArea width="300px" :data="data2" :options="options2" />
</template>

<script lang="ts" setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  RadialLinearScale,
  ArcElement,
  LinearScale
} from "chart.js";
import { Bar, PolarArea } from "vue-chartjs";
import { ref } from "vue";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale);

const data1 = ref({
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [{
    label: "# of Votes",
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",  // Red
      "rgba(54, 162, 235, 0.2)",  // Blue
      "rgba(255, 206, 86, 0.2)",  // Yellow
      "rgba(75, 192, 192, 0.2)",  // Green
      "rgba(153, 102, 255, 0.2)", // Purple
      "rgba(255, 159, 64, 0.2)"   // Orange
    ],
    borderWidth: 1
  }]
});

const options1 = ref({
  scales: {
    y: {
      beginAtZero: true
    }
  }
});

const data2 = ref({
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running"
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",  // Red
        "rgba(54, 162, 235, 0.2)",  // Blue
        "rgba(255, 206, 86, 0.2)",  // Yellow
        "rgba(75, 192, 192, 0.2)",  // Green
        "rgba(153, 102, 255, 0.2)", // Purple
        "rgba(255, 159, 64, 0.2)"   // Orange
      ],
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: "My Second dataset",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",  // Red
        "rgba(54, 162, 235, 0.2)",  // Blue
        "rgba(255, 206, 86, 0.2)",  // Yellow
        "rgba(75, 192, 192, 0.2)",  // Green
        "rgba(153, 102, 255, 0.2)", // Purple
        "rgba(255, 159, 64, 0.2)"   // Orange
      ],
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
});

const options2 = ref({
  responsive: true,
  maintainAspectRatio: false
});

</script>
