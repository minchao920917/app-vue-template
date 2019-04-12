<template>
  <div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'index',
  data(){
    return {
      title:"",
      moreData:[]
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