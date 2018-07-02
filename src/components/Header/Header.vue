<template>
    <div>
         <!-- Header -->
      <div class="header">
        <h1>Shopping Cart</h1>
      </div>

      <!-- Navigation Bar -->
      <div class="navbar">        
          <li class="left-pan"><router-link to="/"><i class="fa fa-home"></i> Home</router-link></li>        
          <!-- NOt Implemented -->
          <!-- <div class="right-pan search-container">
            <input type="text" placeholder="Search.." name="search">
            <button type="submit" @click="searchItem"><i class="fa fa-search"></i></button>
          </div>                 -->
          <li class="right-pan cart-pan"><router-link  to="/cart"><i class="fa fa-shopping-cart" ></i> Cart ({{cartItemsCount}})</router-link></li>  
      </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {    
    computed: {
        ...mapGetters([
            'cartItemsCount'
        ])
    },
    methods:{
        searchItem(){
            console.log('Search Text');
        }
    }
    
}
</script>
<style scoped>


/* Header */
.header {
    padding: 20px;
    text-align: center;
    background: #1abc9c;
    color: white;
}

/* Style the top navigation bar */
.right-pan {
	margin-left: auto;
    align-self: center;
}

.left-pan {
	align-self: center;
}

.cart-pan {
	align-self: center;
}
.navbar {
    display: flex;
    background-color: #333;
    flex-direction: row;
    padding: 10px;
}


/* Style the navigation bar links */
.navbar a {
    color: white;
    padding: 11px 10px;
    text-decoration: none;
    text-align: center;
}

/* Change color on hover */
.navbar a:hover {
    background-color: #ddd;
    color: black;
}

 button {
  float: right;
  padding: 6px 10px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

input[type=text] {
  padding: 6px;
  font-size: 17px;
  border: none;
}

    @media screen and (max-width: 560px) {
        .navbar{
              flex-direction:column;
              align-content: center;
        }
    }
</style>


