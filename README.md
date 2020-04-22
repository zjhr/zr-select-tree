# zr-select-tree

## 说明

基于 vue,elementui 二次封装的简单的下拉选择树，基于 elementui 的[popover](https://element.eleme.cn/2.5/#/zh-CN/component/popover)和[tree](https://element.eleme.cn/2.5/#/zh-CN/component/tree)

## 快速上手

> 先 npm 下载插件

```
`npm install zr-select-tree --save`
或
`npm i zr-select-tree -S`

import zrSelectTree from 'zr-select-tree'
import 'zr-select-tree/lib/zr-select-tree.css'
Vue.use(zrSelectTree)
```

## 使用指南

```js
;<template>
	<zr-select-tree></zr-select-tree>
</template>
```

## 参数

<table>
  <tr>
    <th>参数</th>
    <th>说明</th>
    <th>类型</th>
    <th>可选值</th>
    <th>默认值</th>
  </tr>
  <tr>
    <td>含有elementui的[tree](https://element.eleme.cn/2.5/#/zh-CN/component/tree)的属性和方法</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>data</td>
    <td>tree数据</td>
    <td>Array</td>
    <td>格式为elementui的[tree](https://element.eleme.cn/2.5/#/zh-CN/component/tree)的格式</td>
    <td>[]</td>
  </tr>
  <tr>
    <td>v-module</td>
    <td>双向绑定input的内容</td>
    <td>String</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>inputStyle</td>
    <td>input的style</td>
    <td>String</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>treeHeight</td>
    <td>下拉tree的高度</td>
    <td>String</td>
    <td>-</td>
    <td>"200px"</td>
  </tr>
  <tr>
    <td>size</td>
    <td>大小</td>
    <td>String</td>
    <td>medium / small / mini</td>
    <td>""</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>input的placeholder</td>
    <td>String</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>是否禁用</td>
    <td>Boolean</td>
    <td>true|false</td>
    <td>false</td>
  </tr>
  <tr>
    <td>currentNodeKey</td>
    <td>默认选中节点的tree的key（根据自己设置的node-key定义）</td>
    <td>String, Number</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>radio</td>
    <td>单选</td>
    <td>Boolean</td>
    <td>true|false</td>
    <td>false</td>
  </tr>
  <tr>
    <td>radioP</td>
    <td>单选模式，可以选中父级</td>
    <td>Boolean</td>
    <td>true|false</td>
    <td>false</td>
  </tr>
  <tr>
    <td>$emit('show')</td>
    <td>popover显示回调</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>$emit('after-enter')</td>
    <td>popover显示完成回调</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>$emit('hide')</td>
    <td>popover隐藏回调</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>$emit('after-leave')</td>
    <td>popover隐藏完成回调</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>$emit("checkedChange", data);｜$emit("checkedChange", data,multiples,keys);</td>
    <td>tree节点选中回调，返回节点数据｜多选时候，返回节点数据和选择的所有数据和选中的所有keys（根据自己设置的node-key定义返回）</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>$emit("unCheckedChange", data);｜$emit("unCheckedChange", data,multiples,keys);</td>
    <td>tree节点取消选中回调，返回节点数据｜多选时候，返回节点数据和选择的所有数据和选中的所有keys（根据自己设置的node-key定义返回）</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>$emit("currentChange", data, node)</td>
    <td>tree节点选中切换回调，返回节点数据和node</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>工具类方法--》getNodeDataFun</td>
    <td>获取选择节点数据</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>工具类方法--》loadMultiples</td>
    <td>多选时候，回填数据，当data属性改变时候会触发，也可以手动触发</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>工具类方法--》toggleChangePopover</td>
    <td>改变Popover</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
</table>
