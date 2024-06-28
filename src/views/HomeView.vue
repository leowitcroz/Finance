<template>
  <div class="homeDashboard">
    <div class="lineDash">
      <Line :data="data1" :options="options1" />
    </div>
    <div class="barDash">
      <Bar :data="data2" :options="options2" />
    </div>
  </div>

</template>

<script lang="ts" setup>
import Chart from 'chart.js/auto';
import { Bar, Line } from "vue-chartjs";

import { ref } from "vue";
Chart.register();

const data1 = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Income(R$)',
      backgroundColor: '#f87979',
      data: [5000,4000,6000,3000,4000,5000,5000,]
    },
    {
      label: 'Expenses(R$)',
      backgroundColor: '#201c36',
      data: [4350, 4200, 4000, 2500, 3500, 6000, 5000]
    }
  ]
});

const options1 = ref({
  responsive: true,
  maintainAspectRatio: false
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

<style>
.homeDashboard {
  display: flex;
}

.lineDash {
  margin: 4%;
  width: 50%;
  height: 300px;
}

.barDash {
  margin: 4%;
  height: 300px;
  width: 50%;
}
</style>
