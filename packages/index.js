// 导入颜色选择器组件
import zrSelectTree from './zrSelectTree'

// 存储组件列表
const components = [
  zrSelectTree
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  zrSelectTree
}