<template>
  <div>
    <Layout />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title">Overview</h1>

          <!--
          <div class="row g-4 mb-4">
            <div class="col-6 col-lg-3">
              <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                  <h4 class="stats-type mb-1">Total Sales</h4>
                  <div class="stats-figure">$12,628</div>
                  <div class="stats-meta text-success">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-arrow-up"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>
                    20%
                  </div>
                </div>
                <a class="app-card-link-mask" href="#"></a>
              </div>
            </div>
          
          </div>
          -->
          <div class="row g-4 mb-4">
            <div class="col-12 col-lg-12">
              <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                      <h4 class="app-card-title">Line Chart Example</h4>
                    </div>
                    <div class="col-auto">
                      <div class="card-header-action">
                        <a href="charts.html">More charts</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="app-card-body p-3 p-lg-4">
                <!--   <div class="mb-3 d-flex">
                   <select
                      class="form-select form-select-sm ms-auto d-inline-flex w-auto"
                    >
                      <option value="1" selected>This week</option>
                      <option value="2">Today</option>
                      <option value="3">This Month</option>
                      <option value="3">This Year</option>
                    </select>
                  </div>-->
                  <div class="chart-container">
                    <BarChart :chart-data="chartData"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from "@/components/layout/layout.vue";
import BarChart from "@/components/charts/BarChart.vue";
import auth from "@/mixins/auth/auth.js";

export default {
  components: { Layout, BarChart },
  mixins: [auth],
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12, 100] } ]
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>
