<template>
  <div>
    <template>
      <div class="pagination">
        <button :disabled="pageno==1" @click="$emit('getPageNo',pageno-1)">上一页</button>
        <!-- 当前页页码过小，不应该出现这个1和...，因为下面有 -->
        <button v-show="startNumAndEndNum.start>1"  @click="$emit('getPageNo',1)" :class="{active:pageno==1}">1</button>
        <button v-show="startNumAndEndNum.start>2">···</button>
        <!-- v-for可以遍历数字，从1到in后面的值 -->
        <button v-for="(pages) in startNumAndEndNum.end" v-show="pages>startNumAndEndNum.end-continues" @click="$emit('getPageNo',pages)" :class="{active:pageno==pages}">{{pages}}</button>
        <!-- 同理，当前页页码过大 -->
        <button v-show="startNumAndEndNum.end < totalPage-1">···</button>
        <button v-show="startNumAndEndNum.end < totalPage" @click="$emit('getPageNo',totalPage)" :class="{active:pageno==totalPage}">{{totalPage}}</button>
        <button :disabled="pageno==totalPage" @click="$emit('getPageNo',pageno+1)">下一页</button>

        <button style="margin-left: 30px">共{{total}}条</button>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props:['pageno','pageSize','total','continues'],
  computed: {
    totalPage(){
      return Math.ceil(this.total/this.pageSize);
    },
    startNumAndEndNum(){
      let start=0,end=0;
      if(this.continues>this.totalPage){
        start=1;
        end=this.totalPage;
        return {start,end };
      }else{
        start=this.pageno-Math.floor(this.continues/2);
        end=this.pageno+Math.floor(this.continues/2);
        if(start<1){
          start=1;
          end=this.continues;
        }
        if(end>this.totalPage){
          end=this.totalPage;
          start=end-this.continues+1;
        }
        return {start,end}
      }
    }
  },
};
</script>
<style>
.pagination{
    text-align: center;
}
.pagination button {
  margin: 0 5px;
  background-color: #f4f4f5;
  color: #606266;
  outline: none;
  border-radius: 2px;
  padding: 0 4px;
  vertical-align: top;
  display: inline-block;
  font-size: 13px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  border: 0;
}
.pagination button[disabled] {
  color: #c0c4cc;
  cursor: not-allowed;
}
.pagination button.active {
  cursor: not-allowed;
  background-color: #409eff;
  color: #fff;
}
</style>
