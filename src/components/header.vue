<template>
  <header class="header">
    <h5>{{title}}</h5>
  </header>
</template>
<script>
export default {
  name: '',
  props:['title'],
  data () {
    return {
      isShow:true
    }
  },
  mounted(){
  },
  methods:{
    showTip(){
        this.isShow = !this.isShow;
    },
    look(){

    }
  }
}
</script>

<style scoped lang="less">
@import "../less/util.less";
.header{
  text-align: center;
  height: 0.30rem;
  background-color:#fff;
  line-height:0.3rem;
}
</style>
