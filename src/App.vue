<template>
  <div id="app">
    <!-- Header -->
    <app-header class="item"></app-header>

    <router-view class="item"></router-view>      

    <!-- Footer -->
    <app-footer id="last-item"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default {
  name: 'App',
  components:{
    appHeader:Header,
    appFooter:Footer
  },
  data(){
    return{

    }
  }

}
</script>

<style >

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.item{
  flex-grow: 1
}

#last-item{
  margin-top: auto
}

</style>
