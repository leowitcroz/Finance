<template>
  <div class="homeDashboard">
    <div class="title">
      <h1 class="title-text">General Information</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-6" style="margin-top: 10px">
          <div class="dropdown" style="display: flex; margin-left: 3%">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="
                background-color: #38b14a;
                border: none;
                color: whitesmoke;
                font-weight: 600;
              "
            >
              {{ periodCurrent }}
            </button>
            <ul class="dropdown-menu">
              <li v-for="(item, key) in period" :key="key">
                <a
                  class="dropdown-item"
                  @click="
                    periodValue = item.value;
                    periodCurrent = item.label;
                  "
                  >{{ item.label }}</a
                >
              </li>
            </ul>
          </div>
          <div class="lineDash">
            <Line
              v-if="isDataLoaded"
              :data="lineGraphData"
              :options="optionLine"
            />
          </div>
        </div>
        <div class="col-6" style="margin-top: 45px">
          <div class="barDash">
            <Bar :data="bardGraphData" :options="optionBar" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Chart from "chart.js/auto";
import { Bar, Line } from "vue-chartjs";
import { Utils } from "../utils/utils";

import { onMounted, ref, watch } from "vue";
import store from "@/store";
Chart.register();

const utils = new Utils("http://localhost:3000/");

const months = ref([
  { month: "January", incomes: 0, expenses: 0 },
  { month: "February", incomes: 0, expenses: 0 },
  { month: "March", incomes: 0, expenses: 0 },
  { month: "April", incomes: 0, expenses: 0 },
  { month: "May", incomes: 0, expenses: 0 },
  { month: "June", incomes: 0, expenses: 0 },
  { month: "July", incomes: 0, expenses: 0 },
  { month: "August", incomes: 0, expenses: 0 },
  { month: "September", incomes: 0, expenses: 0 },
  { month: "October", incomes: 0, expenses: 0 },
  { month: "November", incomes: 0, expenses: 0 },
  { month: "December", incomes: 0, expenses: 0 },
]);

const getMonthsByPeriod = (period: number) => {
  return months.value.slice(0, period + 1);
};

const monthsEffective = ref();

const period = ref([
  {
    label: "3 Months",
    value: 2,
  },
  {
    label: "6 Months",
    value: 5,
  },
  {
    label: "12 Months",
    value: 11,
  },
]);

const periodValue = ref(2);
const periodCurrent = ref("3 Months");

const income = ref<number[]>([]);
const expenses = ref<number[]>([]);

const avarege_ = ref();

const lineGraphData = ref({
  labels: months.value.map((m) => m.month),
  datasets: [
    {
      label: "Income(R$)",
      backgroundColor: "#f87979",
      borderColor: "#f87979",
      data: months.value.map((m) => m.incomes),
    },
    {
      label: "Expenses(R$)",
      backgroundColor: "#201c36",
      borderColor: "#201c36",
      data: months.value.map((m) => m.expenses),
    },
  ],
});

const optionLine = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      max: avarege_,
    },
  },
});

const bardGraphData = ref({
  labels: [
    "Food",
    "Streaming",
    "Groceary",
    "Fun",
    "Investing",
    "Personal",
    "Bills",
  ],
  datasets: [
    {
      label: "Expenses",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)", // Red
        "rgba(54, 162, 235, 0.2)", // Blue
        "rgba(255, 206, 86, 0.2)", // Yellow
        "rgba(75, 192, 192, 0.2)", // Green
        "rgba(153, 102, 255, 0.2)", // Purple
        "rgba(255, 159, 64, 0.2)", // Orange
      ],
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [4350, 4200, 4000, 2500, 6000, 3500, 5000],
    },
  ],
});

const optionBar = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      max: avarege_,
    },
  },
});

const getIncomeData = async (dataString: any) => {
  if (dataString) {
    const data = JSON.parse(dataString);
    const request: any = await utils.get("expenses/incomes", data.id);
    await updateMonthsWithIncomes(request);
  }
};

const updateMonthsWithIncomes = async (receivedArray: any[]) => {
  receivedArray.forEach((data) => {
    const monthIndex = data.month - 1;
    if (months.value[monthIndex]) {
      months.value[monthIndex].incomes = data.totalIncome;
    }
  });

  lineGraphData.value.datasets[0].data = months.value.map((m) => m.incomes);

  income.value = months.value.map((m) => m.incomes);
};

const getExpenseData = async (dataString: any) => {
  if (dataString) {
    const data = JSON.parse(dataString);
    const request: any = await utils.get("expenses/prices", data.id);
    await updateMonthsWithExpenses(request);
  }
};

const updateMonthsWithExpenses = async (receivedArray: any[]) => {
  receivedArray.forEach((data) => {
    const monthIndex = data.month - 1;
    if (months.value[monthIndex]) {
      months.value[monthIndex].expenses = data.totalExpense;
    }
  });

  lineGraphData.value.datasets[1].data = months.value.map((m) => m.expenses);

  expenses.value = months.value.map((m) => m.expenses);
};

const avarege = (income: number, expenses: number) => {
  if (income >= expenses) {
    avarege_.value = income;
  } else avarege_.value = expenses;
};

const isDataLoaded = ref(false);

const periodSetting = (period: number) => {
  for (let i = 0; i <= 2; i++) {
    console.log(months.value[i]);
  }
};

watch(periodValue, async (newPeriod) => {
  // Atualiza os meses de acordo com o período selecionado
  console.log(newPeriod);
  monthsEffective.value = getMonthsByPeriod(newPeriod);
  console.log(monthsEffective.value.map((m: any) => m.incomes));

  isDataLoaded.value = false;
  // Atualiza os rótulos e dados do gráfico com os meses filtrados
  lineGraphData.value.labels = monthsEffective.value.map((m: any) => m.month);

  // Recarregar os dados de incomes e expenses de acordo com os meses
  await updateMonthsWithIncomes(income.value);
  await updateMonthsWithExpenses(expenses.value);

  // Aguardar a atualização dos dados
  isDataLoaded.value = true;
});

onMounted(async () => {
  const dataString = localStorage.getItem("saveData");
  monthsEffective.value = getMonthsByPeriod(periodValue.value);
  await getIncomeData(dataString);
  await getExpenseData(dataString);
  avarege(
    utils.averageIncome(income.value),
    utils.averageIncome(expenses.value)
  );

  lineGraphData.value.labels = monthsEffective.value.map((m: any) => m.month);
  lineGraphData.value.datasets[0].data = monthsEffective.value.map(
    (m: any) => m.incomes
  );
  lineGraphData.value.datasets[1].data = monthsEffective.value.map(
    (m: any) => m.expenses
  );

  isDataLoaded.value = true;
});
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
  margin-bottom: 10px;
}

.title-text {
  font-size: 2rem;
  color: rgb(41, 40, 40);
}
</style>
