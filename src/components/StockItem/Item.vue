<template>
           <div>
                <router-link :to="'/itemdetails/'+item.id" class="item"> 
                    <h4>{{item.brand}} : {{item.model}}</h4>
                    <h5>Launched on: {{item.launch}}</h5>
                    <img class="fakeimg" :src="item.src">
                    <h5>Price : {{item.price | formatAmount}}</h5>
                    <button v-if="isAddToCart" class="button" @click="addtocart(item, $event)"> Add to Cart</button>
                    <button v-else class="button button-danger" @click="removeFromCart(item, $event)">Remove from Cart</button>
               </router-link>
           </div >
</template>
<script>

export default {
    props:['item'],
    computed: {
      isAddToCart() {
        return this.$store.getters.cartItemData.indexOf(this.item) < 0
      }
    },
    methods:{
        addtocart(item,event){
            event.preventDefault();
            this.$store.dispatch('addToCart',item);
        },
        removeFromCart(item, event){
            event.preventDefault();
            this.$store.dispatch('removeFromCart',item);
        }
    }
}
</script>

<style scoped>

    .item{
        text-decoration: none;
        color: white
    }
    div {
        background-color:cadetblue;
        margin: 10px;
        border: solid 1px blue;
        flex:0 0 auto;
        padding-bottom: 10px;
        width: 23%;
    }

    .fakeimg{
        height: 150px;
    }
    .button{
        background-color: cornsilk;
        padding: 10px;
    }

    .button-danger{
        background-color: red;
        padding: 10px;
    }
/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 1200px) {
        div{
            width:31%;
        }
    }


    /* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 1000px) {
        div{
            width:47%;            
        }
    }

    @media screen and (max-width: 765px) {
        div{
            width:100%;
        }
    }

</style>


