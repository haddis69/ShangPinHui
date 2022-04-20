<template>
    <div>
        <!-- TypeNav组件不需要注册 -->
        <TypeNav/>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Like/>
        <!-- 自定义组件里也可以直接v-for遍历 -->
        <!-- list是自定义的动态props -->
        <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor" />
        <Brand/>
    </div>
</template>
<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import {mapState} from 'vuex'; 
export default {
    name:'Home',
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    mounted() {
        //获取floor组件的数据
        this.$store.dispatch('getFloorList');
        //获取用户信息，有了路由守卫者后这里的功能移到router里
        // this.$store.dispatch('getUserInfo');
    },
    computed: {
      ...mapState({floorList:state=>state.home.floorList})
    }
}
</script>
<style>
    
</style>