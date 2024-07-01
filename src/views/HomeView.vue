<template>
  <div class="homeDashboard">
    <div class="title">
      <h1 class="title-text">General Information</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-6" style="margin-top: 10px;">
          <div class="dropdown" style="display: flex;margin-left: 3%;">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false" style="background-color: #38b14a;border:none;color: whitesmoke; font-weight: 600;">
              6 Months
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">1 Month</a></li>
              <li><a class="dropdown-item" href="#">6 Months</a></li>
              <li><a class="dropdown-item" href="#">6 Months</a></li>
              <li><a class="dropdown-item" href="#">1 year</a></li>
            </ul>
          </div>
          <div class="lineDash">
            <Line :data="data1" :options="options1" />
          </div>
        </div>
        <div class="col-6" style="margin-top: 45px;">
          <div class="barDash">
            <Bar :data="data2" :options="options2" />
          </div>
        </div>
      </div>
    </div>


  </div>

</template>

<script lang="ts" setup>
import Chart from 'chart.js/auto';
import { Bar, Line } from "vue-chartjs";
import { Utils } from '../utils/utils'

import { onMounted, ref } from "vue";
Chart.register();

const utils = new Utils('http://localhost:3000/')

const income = ref(['5000', '4000', '6000', '3000', '4000', '5000', '5000',])
const expenses = ref(['4350', '4200', '4000', '2500', '3500', '6000', '5000'])

const avaregeIncome = utils.averageIncome(income.value)
const avaregeExpenses = utils.averageIncome(expenses.value)



const data1 = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Income(R$)',
      backgroundColor: '#f87979',
      borderColor: '#f87979',
      data: [5000, 4000, 6000, 3000, 4000, 5000, 5000]
    },
    {
      label: 'Expenses(R$)',
      backgroundColor: '#201c36',
      borderColor: '#201c36',
      data: [4350, 4200, 4000, 2500, 3500, 6000, 5000]
    }
  ]
});

const options1 = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      max: avaregeIncome,
    }
  }
});
const data2 = ref({
  labels: [
    "Food",
    "Streaming",
    "Groceary",
    "Fun",
    "Investing",
    "Personal",
    "Bills"
  ],
  datasets: [
    {
      label: "Expenses",
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
      data: [4350, 4200, 4000, 2500, 6000, 3500, 5000]
    },
  ]
});

const options2 = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      max: avaregeExpenses,
    }
  }
});

onMounted(async () => {
}
);


</script>

<style>
.homeDashboard {
  display: flex;
  flex-direction: column;
}

.lineDash {

  height: 300px;
}

.barDash {
  height: 300px;
}

.title {
  display: flex;
  margin-top: 30px;
  margin-left: 50px;
}

.title-text {
  font-size: 2rem;
  color: rgb(41, 40, 40);

}
</style>
