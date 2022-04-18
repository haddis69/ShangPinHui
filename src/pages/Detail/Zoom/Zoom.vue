<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <img :src="imgObj.imgUrl" ref="big"/>
    </div>
    <!-- 遮罩层，这个绿块 -->
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props:['skuImageList'],
    data() {
      return {
        currentIndex:0
      }
    },
    computed: {
      imgObj(){
        //避免控制台报错
        return this.skuImageList[this.currentIndex] || {};
      }
    },
    mounted() {
      //受到新的数据之后这个组件会重新挂载，在这里接收兄弟传来的index，并且在上面的imgObj里通过index重新选图
      //后端传来的数据结构就是一个图片列表数组
      this.$bus.$on('getIndex',(index)=>{
        this.currentIndex=index;
      })
    },
    methods: {
      handler(event){
        let mask=this.$refs.mask;
        let big=this.$refs.big;
        //绿块的左偏移等于鼠标到左边框的距离减去绿块宽度的一半，高度同理
        let lf=event.offsetX-mask.offsetWidth/2;
        let tp=event.offsetY-mask.offsetHeight/2;
        //限定范围，mask这种有宽高的块级元素的属性值是offsetWidth和offsetHeight
        if(lf<=0) lf=0;
        if(lf>=mask.offsetWidth) lf=mask.offsetWidth;
        if(tp<=0) tp=0;
        if(tp>=mask.offsetHeight) tp=mask.offsetHeight;
        //让绿块mask动起来
        mask.style.left=lf+'px';
        mask.style.top=tp+'px';
        //css里设置图片的宽高，右边是左边的二倍，宽高都是200%
        //而且鼠标左移，放大镜的图应该右移，放大镜应该是反方向的，所以用-2来乘绿块的偏移
        big.style.left= -2* lf + 'px';
        big.style.top= -2* tp + 'px';
      }
    },
  }
</script>

<style>
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
}
.spec-preview img {
  width: 100%;
  height: 100%;
}
.spec-preview .event {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
}
.spec-preview .mask {
  width: 50%;
  height: 50%;
  background-color: rgba(0, 255, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  display: none;
}
.spec-preview .big {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -1px;
  left: 100%;
  border: 1px solid #aaa;
  overflow: hidden;
  z-index: 998;
  display: none;
  background: white;
}
.spec-preview .big img {
  width: 200%;
  max-width: 200%;
  height: 200%;
  position: absolute;
  left: 0;
  top: 0;
}
.spec-preview .event:hover ~ .mask,
.spec-preview .event:hover ~ .big {
  display: block;
}

</style>