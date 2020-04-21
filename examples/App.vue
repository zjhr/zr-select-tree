<template>
	<div id="app">
		<zr-select-tree
			inputStyle="width:196px"
			check-strictly
			show-checkbox
			:auto-expand-parent="false"
			:data="treeData"
			:props="{'label':'orgName'}"
			node-key="orgCode"
			:default-checked-keys="keys"
			@checkedChange="handleCheckedChange"
			@unCheckedChange="handleCheckedChange"
			v-model="inputvalue"
		></zr-select-tree>
	</div>
</template>

<script>
export default {
	name: 'App',
	data () {
		return {
			keys: [],
			inputvalue: '',
			treeData: []
		}
	},
	methods: {
		handleCheckedChange (data, multiples, keys) {
			// 选中/未选中
			this.keys = keys
			consloe.log(data, keys, multiples)
		},
	}
}
</script>

<style lang="scss">
</style>
