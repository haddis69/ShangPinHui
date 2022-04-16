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
        this.$store.dispatch('getFloorList');
    },
    computed: {
      ...mapState({floorList:state=>state.home.floorList})
    }
}
</script>
<style>
    
</style>