// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    cent_now:0,
    cent_present :[0,0,0,0,0,0,0,0.85,0.74,0.69,0.44,0.54,0.63,0.62,0.73,0.78,0.73,0.82,0.92,0.94,0.85,0.76,0.52,0.42,0.63,0.71,0.61,0.83,0.72,0.76,0.52],
      num_now:0,
      num_persent:[0,0,0,0,0,0,0,7.44,6.24,6.87,6.15,7.35,6.51,6.36,6.79,6.70,6.59,5.04,77.38,80.34,80.14,55.11,55.11,48.81,55.40,57.32],
      // num_persent:[63,2,62,83,235,34,17,237,568,1457,234,137,35,136,136,679,236,679,236,79,46,56,568,1457,234,137,35,136,136,679,568,1457,234,137,35,136,136,679,],
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    },
    update:(state)=>{
        const obj=state
        obj.cent_now=obj.cent_present[obj.count]
        obj.num_now=obj.num_persent[obj.count]
    }
  }
})

export default store
