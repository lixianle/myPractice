<template>
	<div class="tab-bar-item" v-on:click="itemClick">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<div :style="activeColor">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TabBarItem',
	props: {
		path: {
			type: String
		},
		activeColor: {
			type: String,
			default: '#ff5777'
		}
	},
	data () {
		return {
			//data
		}
	},
	computed: {
		isActive () {
			return this.$route.path.indexOf(this.path) !== -1
		},
		activeStyle () {
			return this.isActive ? {color:this.activeColor} : {}
		}
	},
	methods: {
		itemClick () {
			this.$router.push(this.path)
		}
	}
}
</script>

<style scoped>
.tab-bar-item {
	flex: 1;
	margin-top: 3px;
	text-align: center;
}
.tab-bar-item img {
    vertical-align: middle;
    width: 24px;
    height: 24px;
    margin-bottom: 2px;
 }
</style>