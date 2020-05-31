<template>
  <div>
    <div style="height:50px"></div>
    <div style="text-align:center;padding-top:20px;padding-bottom:20px">当前人数：{{num_value}} , 占位率：{{percent_value}}%</div>
    <div style="padding-top:10px">
      <!-- <video src="../../../static/video/video.mp4" binderror="videoErrorCallback"></video> -->
      <video
        style="width: 100%;height=400px;margin:1px;"
        src="http://qaotskxsy.bkt.clouddn.com/1.jpg_pred_7.445531616210937.mp4"
        binderror="videoErrorCallback"
      ></video>
    </div>
  </div>
</template>

<script>
import store from "../index/store";

export default {
  data() {
    return {
    };
  },
  computed: {
    percent_value() {
      return (store.state.cent_now*100).toFixed(2);
    },
    num_value(){
      return store.state.num_now;
    }
  },
 

  data() {
    return {};
  },

  created() {}
};
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
