<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(slide, index) in skuImageList"
        :key="slide.id"
      >
        <!-- 这里判断的index是上文的index，是循环生成的，每次循环的时候这个index都是变化的 -->
        <img :src="slide.imgUrl" :class="{active:currentIndex==index}" @click="changeIndex(index)" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "ImageList",
  data() {
    return {
      currentIndex:0
    }
  },
  methods: {
    changeIndex(index){
      this.currentIndex=index;
      //这个组件在imageList里，和上面的大图Zoom组件是兄弟关系
      //点击了新的小图之后，要把这个小图的index通过全局事件总线传给大图，在Zoom里接收
      this.$bus.$emit('getIndex',index);
    }
  },
  props: ["skuImageList"],
  watch: {
    //v-for可能没循环完毕
    skuImageList(newValue, oldValue) {
      this.$nextTick(() => {
        new Swiper(this.$refs.cur, {
          slidesPerView : 3,
          slidesPerGroup : 1,
          loop:true,
          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    },
  },
};
</script>

<style scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;
}
.swiper-container .swiper-slide {
  width: 56px;
  height: 56px;
}
.swiper-container .swiper-slide img {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  padding: 2px;
  width: 50px;
  height: 50px;
  display: block;
}
.swiper-container .swiper-slide img.active {
  border: 2px solid #f60;
  padding: 1px;
}
.swiper-container .swiper-button-next {
  left: auto;
  right: 0;
}
.swiper-container .swiper-button-prev {
  left: 0;
  right: auto;
}
.swiper-container .swiper-button-next,
.swiper-container .swiper-button-prev {
  box-sizing: border-box;
  width: 12px;
  height: 56px;
  background: #ebebeb;
  border: 1px solid #cccccc;
  top: 0;
  margin-top: 0;
}
.swiper-container .swiper-button-next::after,
.swiper-container .swiper-button-prev::after {
  font-size: 12px;
}
</style>
