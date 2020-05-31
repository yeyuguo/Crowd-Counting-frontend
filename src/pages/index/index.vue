<template>
  <div @click="clickHandle">
    <div style="text-align:center">图书馆人流量概览</div>
    <div class="echarts-wrap">
      <mpvue-echarts :echarts="echarts" :onInit="onInit" canvasId="demo-canvas" />
    </div>
  </div>
</template>


<script>
import echarts from "echarts";
import mpvueEcharts from "mpvue-echarts";
import store from "./store";

let chart = null;
// let count = 0;
var colorTemplate1 = [
  [0.2, "rgb(0, 178, 106)"],
  [0.8, "rgb(25, 91, 167)"],
  [1, "rgb(194, 53, 49)"]
];

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: "当前占位率变化",
      // 仪表盘标题。
      show: true, // 是否显示标题,默认 true。
      x: "center",
      y: "50px",
      color: "#fff", // 文字的颜色,默认 #333。
      fontSize: 15, // 文字的字体大小,默认 15。
      fontFamily: "Arial, Verdana, sans...",
      fontWeight: "normal"
      // textStyle: {
      //   //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
      //   fontFamily: "Arial, Verdana, sans...",
      //   fontSize: 12,
      //   fontStyle: "normal",
      //   fontWeight: "normal"
      // }
    },
    series: [
      {
        type: "gauge",
        detail: { formatter: "{value}%" },
        data: [{ value: 0 }],
        axisLine: {
          // 仪表盘轴线(轮廓线)相关配置。
          lineStyle: {
            // 仪表盘轴线样式。
            color: colorTemplate1
          }
        },
        detail: {
          // 仪表盘详情，用于显示数据。
          show: true, // 是否显示详情,默认 true。
          offsetCenter: [0, "80%"], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
          color: "auto", // 文字的颜色,默认 auto。
          fontSize: 25, // 文字的字体大小,默认 15。
          formatter: "{value}%" // 格式化函数或者字符串
        }
      }
    ]
  }; // ECharts 配置项

  chart.setOption(option);

  setInterval(function() {
    //把option.series[0].data[0].value的值使用random()方法获取一个随机数
    // option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    // option.series[0].data[0].value = (cent_present[store.state.count] * 100).toFixed(2);
    option.series[0].data[0].value = (store.state.cent_now * 100).toFixed(2);

    store.commit("increment");
    store.commit("update");
    chart.setOption(option, true);
  }, 1000);

  return chart; // 返回 chart 后可以自动绑定触摸操作
}

export default {
  components: {
    mpvueEcharts
  },
  data() {
    return {
      temp: "",
      echarts,
      onInit: initChart
      // orgOptions: {},
      // PersonCent: [
      //   0.8097,
      //   0.7297,
      //   0.8297,
      //   0.5297,
      //   0.9297,
      //   0.9197,
      //   0.5197,
      //   0.7297,
      //   0.1797,
      //   0.6197,
      //   0.9297,
      //   0.6297,
      //   0.6197,
      //   0.7197
      // ], //占位率
      // MaxValue: "", //最大空位率
      // ShowMaxValue: "", //百分数形式显示最大空位率
      // MaxFloor: "" //空位最多的楼层
    };
  },

  mounted: async function() {
    console.log("hi from mounted");

    this.MaxValue = Math.min.apply(null, this.PersonCent);
    this.MaxFloor = this.PersonCent.indexOf(this.MaxValue) + 1;
    console.log("value+floor", this.MaxValue, this.MaxFloor);

    var max_value = this.MaxValue * 100; //将返回的值处理成要显示的样子

    this.ShowMaxValue = max_value.toString() + "%";
  },
  methods: {
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.echarts-wrap {
  width: 100%;
  height: 470px;
  padding-top: 20px;
}
#recommand {
  text-align: center;
  /* font-size:16px; */
  /* position: fixed; */
  /* bottom: 0; */
  padding-top: 20px;
  width: 100%;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
