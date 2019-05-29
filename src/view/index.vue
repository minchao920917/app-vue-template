<template>
 <div>
    

    <!--中间内容-->
    <div class="contanet">
      中间内容
    </div>

  
 </div>
</template>

<script>
import HeaderComponent from '../components/header.vue';
import FooterComponent from '../components/footer.vue';
import { mapState } from 'vuex';
export default {
  name: 'index',
  data(){
    return {
      title:"顶部标题",
      footercontent:"底部主题"
    }
  },
  props:[],
  computed:mapState({
        // wateritem: state => state.wateritem,
        // fenglist : state => state.indexdata.styleTagList,
        // stylelist : state => state.indexdata.scaneTagList,
        // indeximg : state => state.indexdata.banner
  }),
  created (){

  },

  mounted (){
    
  },
  methods:{
    
  },
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
<style scoped>
.contanet{
  width: 100%;
  height: 2rem;
  background: #f60;
}
</style>
