<template>
  <div class="flex-container">
       <div class="loading" v-if="loading">
                  Loading...
            </div>
            <div v-if="error" >
                    {{ error }}
            </div>
      <app-item v-for=" (item, i) in stockItemData" :key="i" :item="item" > </app-item>
  </div>
</template>

<script>
import Item from '@/components/StockItem/Item';
import axios from 'axios';
import {mapGetters} from 'vuex';


export default {
  name: 'HelloWorld',
  data () {
    return {
      loading: false,
      sucess: null,
      error: null,
    }
  },
  components:{
    appItem : Item
  },
  created () {
      if (this.stockItemData.length === 0) {        
        // Handle with static data
        // this.$store.dispatch('getAllStockItems');
         
         // Handle with server data
         this.error = this.user = null
         this.sucess = null;
         this.loading = true
         axios.get('https://shoopping-cart.firebaseio.com/data.json')
                 .then(response =>{
                      this.loading = false
                      this.sucess = true;
                     console.log(response);
                     const data = response.data;
                     this.items = [];
                     for(let key in data){
                         const item = data[key];
                         item.id = key;
                         this.items.push(item);
                     }
                     this.$store.dispatch('setAllStockItems', this.items);
                     console.log(this.items);
                 }, error=>{
                     console.log(error);
                     this.error = error.toString()
                 }).catch(error => {
                     console.log(error);
                     this.error = error.toString()
                 })
      }
    },
  computed: {
     ...mapGetters([
            'stockItemData'
        ])          
       
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .flex-container {
        display: flex;
        background-color: #f1f1f1;
        flex-wrap: wrap;
        text-align: center;
        align-content: flex-start;
        justify-content: flex-start;
        align-items: center;
    }

    .loading{
      height: 100px;
      background-color: cadetblue;

    }
    
</style>
