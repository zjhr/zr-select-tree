import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
// 导入组件库
import zrSelectTree from '../lib/zr-select-tree.common.js'
import '../lib/zr-select-tree.css'
console.log(zrSelectTree)
// 注册组件库
Vue.use(zrSelectTree)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')