<template>
  <div>
      <h2>Total Amount Payable: {{totalCartValue | formatAmount}}</h2>
      <div class="flex-container" v-if="cartItemData.length > 0">        
            <app-item v-for=" (item, i) in cartItemData" :key="i" :item="item" > </app-item>
      </div>
      <div v-if="cartItemData.length == 0">
            <h4> Your cart is empty.</h4>
      </div>
  </div>
</template>

<script>
import Item from '@/components/StockItem/Item';
import {mapGetters} from 'vuex';

export default {
  name: 'CartView',
  components:{
    appItem : Item
  },
  data () {
    return {
    }
  },
  computed:{
        ...mapGetters([
            'totalCartValue',
            'cartItemData'
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
    h4{
        text-align: center;
        align-items: center;
    }
    
</style>
