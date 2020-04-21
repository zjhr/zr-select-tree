import zrSelectTree from './src'

// 为组件提供 install 安装方法，供按需引入
zrSelectTree.install = function (Vue) {
  Vue.component(zrEditTable.name, zrSelectTree)
}

// 默认导出组件
export default zrSelectTree