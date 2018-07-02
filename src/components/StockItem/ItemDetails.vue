<template>
           <div class="container">
               
            <div class="loading" v-if="loading">
                  Loading...
            </div>
            <div v-if="error" >
                    {{ error }}
            </div>
            <div>
                <img class="fakeimg" :src="item.src">
            </div>
             <div v-if="sucess" class="item">
                <h4>{{item.brand}} : {{item.model}}</h4>
                <h5>Launched on, {{item.launch}}</h5>                
                <h5>Price : {{item.price | formatAmount}}</h5>
                <p> <strong>Description:</strong> {{item.description}} </p>  
             </div >               
           </div >
</template>
<script>
export default {

    data(){
        return{
            loading: false,
            sucess: null,
            error: null,
            item:{}
        }
    },
    created(){
        // fetch the data when the view is created and the data is
        // already being observed
        this.fetchItemData()
    },
    watch: {
        // call again the method if the route changes
        '$route': 'fetchItemData'
    },
    methods:{
        fetchItemData(){
            this.error = this.user = null
            this.sucess = null;
            this.loading = true

        // Currently handled with static data
            this.$store.dispatch('setItemDetails',this.$route.params.id);

            setTimeout(()=>{
                console.log('Item Data '+JSON.stringify(this.$store.getters.itemData));
                 this.loading = false
                 this.sucess = true;
                 this.item = this.$store.getters.itemData;
            },2000)           
        
        }
    }
}
</script>

<style scoped>

    .loading{
        margin: 0 auto;
    }
    .container {
        background-color:cadetblue;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 50px;
        align-items: flex-start;
        border: solid 1px blue;
        width: 70%;
        display: flex;
        align-content: space-around;
    }

    .fakeimg{
        height: 300px;
        flex-basis: 40%;
        align-self: center;
        width: 55%;
    }
    .item{
        width: 50%;   
        margin: 0 auto;
    }

    /* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 1200px) {
        .fakeimg{
            height:300px;
        }
    }


    /* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 1000px) {
        .fakeimg{
            height: 250px;
        }
    }

    @media screen and (max-width: 765px) {
        .fakeimg{
            height: 200px;
        }
    }


</style>


