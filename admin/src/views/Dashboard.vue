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
          <!-- graph 
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
                  <div class="chart-container">
                    <BarChart :chart-data="chartData" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          -->

          <div class="clock">
            <div class="text">
              <span class="c1">Mr.Changay</span><br />
              <span class="c">I'm late anyway ...</span>
            </div>

            <div class="numbers">
              <span class="n1 abs">1</span>
              <span class="n2 abs">2</span>
              <span class="n3 abs">3</span>
              <span class="n4 abs">4</span>
              <span class="n5 abs">5</span>
              <span class="n6 abs">6</span>
              <span class="n7 abs">7</span>
              <span class="n8 abs">8</span>
              <span class="n9 abs">9</span>
              <span class="n10 abs">10</span>
              <span class="n11 abs">11</span>
              <span class="n12 abs">12</span>
            </div>

            <div class="center"></div>
            <div class="sec"></div>
            <div class="min"></div>
            <div class="hour"></div>
          </div>
          <article class="c-article">
            <header class="c-article__header">
              <h1 class="c-article__title ">

              Welcome {{$store.state.user.name}}                
              </h1>
            </header>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import {
//   getFirestore,
//   query,
//   where,
//   collection,
//   getDocs,
// } from "firebase/firestore";
//import moment from "moment";
import Layout from "@/components/layout/layout.vue";
//import BarChart from "@/components/charts/BarChart.vue";
import auth from "@/mixins/auth/auth.js";

export default {
  components: { Layout },
  mixins: [auth],
  data() {
    return {
      // db: getFirestore(),
      // loader: false,
      // chartData: {
      //   labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      //   datasets: [{ data: [40, 20, 12, 100] }],
      // },
    };
  },
  async mounted() {
    //await this.getData();
    setInterval(function() {
      var date = new Date();
      var seconds = date.getSeconds() * 6;
      var minutes = (date.getMinutes() + date.getSeconds() / 60) * 6;
      var hours =
        (date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600) *
        30;
      if (hours >= 12) {
        hours -= 12;
      }
      window.$(".sec").css({ transform: "rotate(" + seconds + "deg)" });
      window.$(".min").css({ transform: "rotate(" + minutes + "deg)" });
      window.$(".hour").css({ transform: "rotate(" + hours + "deg)" });
    }, 1000);
  },
  methods: {
    // getData: async function() {
    //   let sDate = moment()
    //     .subtract(1, "weeks")
    //     .startOf("week")
    //     .format("YYYY-MM-DD");
    //   sDate = moment(sDate);
    //   let eDate = moment()
    //     .subtract(1, "weeks")
    //     .endOf("week")
    //     .format("YYYY-MM-DD");
    //   eDate = moment(eDate);
    //   const q = query(
    //     collection(this.db, "orders"),
    //     where("date", ">=", +sDate),
    //     where("date", "<=", +eDate),
    //     where("status", "==", "delivered")
    //   );
    //   const querySnapshot = await getDocs(q);
    //   const orders = [];
    //   for (let i = 0; i < querySnapshot.docs.length; i++) {
    //     orders.push(querySnapshot.docs[i].data());
    //   }
    //   const counts = [];
    //   for (sDate; sDate.diff(eDate, "days") <= 0; sDate.add(1, "days")) {
    //     const date = sDate.format("YYYY-MM-DD");
    //     const start = +moment(date)
    //       .startOf("day")
    //       .format("x");
    //     const end = +moment(date)
    //       .endOf("day")
    //       .format("x");
    //     counts.push(
    //       orders.filter((element) => {
    //         return element.date >= start && element.date <= end;
    //       }).length
    //     );
    //     // console.log(date);
    //     // console.log(
    //     //   orders.filter((element) => {
    //     //     return element.date >= start && element.date <= end;
    //     //   }).length
    //     // );
    //     console.log(start)
    //     console.log(end)
    //   }
    //   this.chartData.datasets[0].data = counts;
    // },
  },
};
</script>

<style scoped>
.clock {
  border: 1em solid #d3d3d3;
  background-color: #ffefd5;
  border-radius: 100%;
  height: 20em;
  width: 20em;
  box-shadow: inset 0 0 2em #808080, 0 0 2em black;
  position: relative;
  margin: 2em auto;
}

.center {
  top: 8.5em;
  left: 8.5em;
  width: 1em;
  height: 1em;
  background: #d3d3d3;
  border-radius: 100%;
  box-shadow: inset 0 0 1em #808080;
  position: absolute;
  z-index: 99;
}

.sec {
  top: 1em;
  left: 8.95em;
  height: 8em;
  width: 0.1em;
  background-color: #f08080;
  box-shadow: 0 0 0.1em #808080;

  -o-transform-origin: bottom;
  -moz-transform-origin: bottom;
  -ms-transform-origin: bottom;
  -webkit-transform-origin: bottom;
  transform-origin: bottom;

  position: absolute;
  z-index: 90;
}

.sec:after {
  content: "";
  height: 2em;
  width: 0.1em;
  top: 8em;
  background-color: #f08080;
  box-shadow: 0 0 0.1em #808080;
  position: absolute;
}

.min {
  top: 1em;
  left: 8.75em;
  height: 8em;
  width: 0.5em;
  background-color: #d3d3d3;
  border-radius: 0.5em;
  box-shadow: inset 0 0 0.2em #808080;

  -o-transform-origin: bottom;
  -moz-transform-origin: bottom;
  -ms-transform-origin: bottom;
  -webkit-transform-origin: bottom;
  transform-origin: bottom;

  position: absolute;
  z-index: 80;
}

.min:after {
  content: "";
  height: 2em;
  width: 0.5em;
  top: 8em;
  border-radius: 0.5em;
  box-shadow: inset 0 0 0.2em #808080;
  background-color: #d3d3d3;
  position: absolute;
}

.hour {
  left: 8.75em;
  top: 3em;
  height: 6em;
  width: 0.5em;
  background: #d3d3d3;
  border-radius: 0.5em;

  box-shadow: inset 0 0 0.2em #808080;

  -o-transform-origin: bottom;
  -moz-transform-origin: bottom;
  -ms-transform-origin: bottom;
  -webkit-transform-origin: bottom;
  transform-origin: bottom;

  position: absolute;
  z-index: 70;
}

.hour:after {
  content: "";
  height: 2em;
  width: 0.5em;
  top: 6em;
  border-radius: 0.5em;
  box-shadow: inset 0 0 0.2em #808080;
  background-color: #d3d3d3;
  position: absolute;
}

.c {
  font-family: cursive;
  font-style: italic;
}

.c1 {
  font-family: sans-serif;
  font-weight: 700;
  font-size: 2em;
  text-shadow: 0 0 0.05em #808080;
}

.text {
  top: 4em;
  width: 100%;
  line-height: 1.5em;
  text-align: center;
  opacity: 0.8;
  position: absolute;
  z-index: 1;
}

.numbers {
  bottom: 0;
  left: 0;
  height: 10em;
  width: 100%;
  border-bottom-left-radius: 50% 100%;
  border-bottom-right-radius: 50% 100%;
  opacity: 0.8;
  position: absolute;
  z-index: 1;
}

.n1 {
  top: 70%;
  right: 50%;
  -ms-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  -o-transform: rotate(30deg);
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.n2 {
  top: 35%;
  right: 80%;
  -ms-transform: rotate(95deg);
  -moz-transform: rotate(95deg);
  -o-transform: rotate(95deg);
  -webkit-transform: rotate(95deg);
  transform: rotate(95deg);
}

.n3 {
  top: 65%;
  right: 60%;
  -ms-transform: rotate(140deg);
  -moz-transform: rotate(140deg);
  -o-transform: rotate(140deg);
  -webkit-transform: rotate(140deg);
  transform: rotate(140deg);
}

.n4 {
  top: 55%;
  right: 55%;
  -ms-transform: rotate(10deg);
  -moz-transform: rotate(10deg);
  -o-transform: rotate(10deg);
  -webkit-transform: rotate(10deg);
  transform: rotate(10deg);
}

.n5 {
  top: 70%;
  right: 35%;
  -ms-transform: rotate(75deg);
  -moz-transform: rotate(75deg);
  -o-transform: rotate(75deg);
  -webkit-transform: rotate(75deg);
  transform: rotate(75deg);
}

.n6 {
  top: 50%;
  right: 20%;
  -ms-transform: rotate(50deg);
  -moz-transform: rotate(50deg);
  -o-transform: rotate(50deg);
  -webkit-transform: rotate(50deg);
  transform: rotate(50deg);
}

.n7 {
  top: 57%;
  right: 40%;
  -ms-transform: rotate(12deg);
  -moz-transform: rotate(12deg);
  -o-transform: rotate(12deg);
  -webkit-transform: rotate(12deg);
  transform: rotate(12deg);
}

.n8 {
  top: 40%;
  right: 75%;
  -ms-transform: rotate(12deg);
  -moz-transform: rotate(12deg);
  -o-transform: rotate(12deg);
  -webkit-transform: rotate(12deg);
  transform: rotate(12deg);
}

.n9 {
  top: 55%;
  right: 30%;
  -ms-transform: rotate(156deg);
  -moz-transform: rotate(156deg);
  -o-transform: rotate(156deg);
  -webkit-transform: rotate(156deg);
  transform: rotate(156deg);
}

.n10 {
  top: 45%;
  right: 40%;
  -ms-transform: rotate(130deg);
  -moz-transform: rotate(130deg);
  -o-transform: rotate(130deg);
  -webkit-transform: rotate(130deg);
  transform: rotate(130deg);
}

.n11 {
  top: 30%;
  right: 10%;
  -ms-transform: rotate(123deg);
  -moz-transform: rotate(123deg);
  -o-transform: rotate(123deg);
  -webkit-transform: rotate(123deg);
  transform: rotate(123deg);
}

.n12 {
  top: 55%;
  right: 65%;
  -ms-transform: rotate(130deg);
  -moz-transform: rotate(130deg);
  -o-transform: rotate(130deg);
  -webkit-transform: rotate(130deg);
  transform: rotate(130deg);
}

.abs {
  font-size: 2.5em;
  font-family: sans-serif;
  text-shadow: 0 0 0.05em #808080;
  position: absolute;
}

@-webkit-keyframes animationgradienttitle {
  0% {
    background-position: 0 1600px;
  }
  100% {
    background-position: 1600px 0;
  }
}
@keyframes animationgradienttitle {
  0% {
    background-position: 0 1600px;
  }
  100% {
    background-position: 1600px 0;
  }
}

.c-article {
  text-align: center;
}

.c-article__header {
  position: relative;
}

.c-article__title {
  font-family: "Scope One", serif;
  font-size: 3em;
  color: #fc3735;
  background: -webkit-linear-gradient(left, #F57170, #10DDC2, #F57170);
  background-size: 1600px 200px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-name: animationgradienttitle;
          animation-name: animationgradienttitle;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

.u-font-lora {
  font-family: "Lora", serif;
  font-size: 1.5em;
  font-weight: 700;
}
</style>