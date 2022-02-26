<template>
	<div>
		<TabBar>
			<TabBarItem path="/home" activeColor="#ff5777">
				<template v-slot:item-icon>
					<img src="../../../assets/img/tabbar/home.svg" alt="homepage">
				</template>
				<template v-slot:item-icon-active>
					<img src="../../../assets/img/tabbar/home_active.svg" alt="homepageactive">
				</template>
				<template v-slot:item-text>
					<div>首页</div>
				</template>
			</TabBarItem>
			<TabBarItem path="/category" activeColor="#ff5777">
				<template v-slot:item-icon>
					<img src="../../../assets/img/tabbar/category.svg" alt="categorypage">
				</template>
				<template v-slot:item-icon-active>
					<img src="../../../assets/img/tabbar/category_active.svg" alt="categorypageactive">
				</template>
				<template v-slot:item-text>
					<div>分类</div>
				</template>
			</TabBarItem>
			<TabBarItem path="/cart" activeColor="#ff5777">
				<template v-slot:item-icon>
					<img src="../../../assets/img/tabbar/shopcart.svg" alt="cartpage">
				</template>
				<template v-slot:item-icon-active>
					<img src="../../../assets/img/tabbar/shopcart_active.svg" alt="cartpageactive">
				</template>
				<template v-slot:item-text>
					<div>购物车</div>
				</template>
			</TabBarItem>
			<TabBarItem path="/profile" activeColor="#ff5777">
				<template v-slot:item-icon>
					<img src="../../../assets/img/tabbar/profile.svg" alt="profilepage">
				</template>
				<template v-slot:item-icon-active>
					<img src="../../../assets/img/tabbar/profile_active.svg" alt="profilepageactive">
				</template>
				<template v-slot:item-text>
					<div>我的</div>
				</template>
			</TabBarItem>
		</TabBar>
	</div>
</template>

<script type="text/javascript">
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'

export default {
	name: 'MainTabBar',
	components: {
		TabBar,
		TabBarItem
	}
}
</script>

<style>

</style>