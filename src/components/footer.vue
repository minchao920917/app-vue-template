<template>
    <footer>
        <div class="footer-conent">
            <p>{{title}}</p>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'footercomponent',
  data () {
    return {
      time: `copyright @${new Date().getFullYear()}xxxx.com`
    }
  },
  props:['title'],
  computed:{
      titles:function (){
          return this._props.title;
      }
  },
  methods:{
    look(){
    }
  }
}
</script>

<style lang="less">
   @import "../less/util.less";
    .footer-conent{
      text-align: center;
    }
</style>
