<template>
	<el-popover
		v-model="isShowSelect"
		:disabled="disabled"
		placement="bottom-start"
		@show="$emit('show')"
		@after-enter="$emit('after-enter')"
		@hide="$emit('hide')"
		@after-leave="$emit('after-leave')"
	>
		<!-- <div slot="reference" class="input_box"> -->
		<!-- <div class="input_box_item">
				<el-tag :size="csize" closable class="tag">小型</el-tag>
		</div>-->
		<el-input
			:style="inputStyle"
			:size="csize"
			class="s_cpointer"
			:placeholder="placeholder"
			@click="isShowSelect = !isShowSelect"
			:value="value"
			@input="$emit('input',value)"
			readonly="readonly"
			:disabled="disabled"
			suffix-icon="el-icon-arrow-down"
			slot="reference"
		></el-input>
		<!-- </div> -->
		<el-scrollbar :style="{height:treeHeight}" wrapStyle="overflow: auto;">
			<div style="padding-right: 25px;">
				<el-tree
					ref="tree"
					:node-key="nodeKey"
					:data="data"
					:default-checked-keys="defaultCheckedKeys"
					:current-node-key="currentNodeKey"
					@check-change="checkChangeFun"
					@current-change="currentChangeFun"
					:highlight-current="radio"
					:props="props"
					v-bind="$attrs"
					v-on="$listeners"
				></el-tree>
			</div>
		</el-scrollbar>
	</el-popover>
</template>

<script>
import Vue from 'vue'
export default {
	name: 'zr-select-tree',
	inheritAttrs: false,
	props: {
		props: {
			type: Object,
			default () {
				return ({})
			}
		},
		nodeKey: {
			type: String,
			default: 'id'
		},
		data: {
			type: Array,
			default () {
				return []
			}
		}, // 传入tree数据
		value: String,
		inputStyle: String,
		defaultCheckedKeys: Array, // 默认勾选的节点的 key 的数组
		size: {
			type: String,
			default: ''
		},
		treeHeight: {
			type: String,
			default: '200px'
		},
		placeholder: {
			type: String,
			default: '请选择'
		},
		disabled: Boolean, // 是否禁用
		currentNodeKey: [String, Number], // 默认选中key
		radio: Boolean, // 单选
		radioP: Boolean// 单选模式，可以选中父级
	},
	data () {
		return {
			inputval: '',
			defaultprops: {
				'label': 'label',
				'children': 'children',
				...this.props
			},
			isShowSelect: false,
			oldId: this.currentNodeKey,
			oldData: {}, // 缓存记录
			multiples: [] // 多选缓存数据
		}
	},
	computed: {
		csize () {
			return this.size || Vue.prototype.$ELEMENT ? Vue.prototype.$ELEMENT.size : false || 'medium'
		}
	},
	mounted () {
		this.$nextTick(() => {
			this.loadMultiples()
		})
	},
	methods: {
		loadMultiples () { // 多选时候，回填数据
			if (!this.radio && this.defaultCheckedKeys.length && this.data.length) {
				const findTreeItem = (list) => {
					list.forEach(v => {
						if (this.defaultCheckedKeys.includes(v[this.nodeKey])) {
							this.multiples.push(v)
						}
						if (v.children && v.children.length) {
							findTreeItem(v.children)
						}
					})
				}
				findTreeItem(this.data)
				const keys = []
				const labels = []
				this.multiples.forEach(v => {
					keys.push(v[this.nodeKey])
					labels.push(v[this.defaultprops.label])
				})
				this.$emit('input', labels.join(','))
				this.$emit('checkedChange', this.multiples[0], this.multiples, keys)
			}
		},
		checkChangeFun (data, checked) {
			if (this.radio) { // 单选
				if (checked) {
					this.oldData = data
					this.$refs.tree.setCheckedNodes([data])
					this.$emit('input', data[this.defaultprops.label])
					this.isShowSelect = false
					this.$emit('checkedChange', data)
				} else if (this.oldData[this.nodeKey] === data[this.nodeKey]) {
					this.$emit('input', '')
					this.$emit('unCheckedChange', data)
				}
			} else { // 多选
				if (checked) {
					this.multiples.push(data)
				} else {
					const index = this.multiples.findIndex(v => v[this.nodeKey] === data[this.nodeKey])
					this.multiples.splice(index, 1)
				}
				const keys = []
				const labels = []
				this.multiples.forEach(v => {
					keys.push(v[this.nodeKey])
					labels.push(v[this.defaultprops.label])
				})
				this.$emit('input', labels.join(','))
				this.$emit(checked ? 'checkedChange' : 'unCheckedChange', data, this.multiples, keys)
			}
		},
		currentChangeFun (data, node) {
			if (this.radioP || this.radio) {
				if (!this.radioP) {
					if (data[this.defaultprops.children] && data[this.defaultprops.children].length) {
						this.$refs.tree.setCurrentKey(this.oldId || null)
						return
					}
				}
				this.oldId = data[this.nodeKey]
				this.isShowSelect = false
				this.$emit('input', data[this.defaultprops.label])
				this.$emit('currentChange', data, node)
				return
			}
			this.$emit('currentChange', data, node)
		},
		getNodeDataFun () { // 获取选择节点数据
			return this.radio ? this.$refs.tree.getCurrentNode() : this.$refs.tree.getCheckedNodes()
		},
		toggleChangePopover (toggle = false) {//触发式改变Popover
			this.isShowSelect = toggle
		}
	},
	watch: {
		data () {
			this.$nextTick(() => {
				this.loadMultiples()
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.s_cpointer {
	::v-deep .el-input__inner {
		cursor: pointer !important;
	}
	::v-deep .el-input__suffix {
		cursor: pointer !important;
	}
}
// .input_box {
// 	position: relative;
// 	.input_box_item {
// 		position: absolute;
// 		z-index: 1;
// 		top: 0;
// 		left: 15px;
// 		right: 30px;
// 		bottom: 0;
// 		&--nowrap {
// 			overflow: hidden;
// 			white-space: nowrap;
// 		}
// 		.tag {
// 			margin-right: 5px;
// 			&:last-child {
// 				margin-right: 0;
// 			}
// 		}
// 	}
// }
</style>
