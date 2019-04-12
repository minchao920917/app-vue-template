<template>
  <div>
     <!--头部-->
    <header-component
      :title="title">
    </header-component>

    <!--中间内容-->
    <transition name="fade">
      <router-view>
        <!--content-->
      </router-view>
    </transition>  

    <!--底部内容-->
    <footer-component 
      :footercontent="footercontent">
    </footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/header.vue';
import FooterComponent from './components/footer.vue';

export default {
  name: 'app',
  data(){
    return {
      title:"hello,欢迎加入评驾前端",
      footercontent:""
    }
  },
  components:{
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
@import './less/reset.less';
.fade-enter-active, .fade-leave-active {
    -webkit-transition: all .3s ease;
      transition: all .3s ease;
  }
.fade-enter, .fade-leave-to {
  opacity:0;
}
</style>
