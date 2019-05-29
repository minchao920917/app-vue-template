<template>
    <footer>
        <div class="footer-conent">
            <p>{{footer}}</p>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'footercomponent',
  data () {
    return {
      time: `copyright @${new Date().getFullYear()}minchao.me`
    }
  },
  props:['footercontent'],
  computed:{
      footer(){
          return this._props.footercontent +this.time;
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
