import Vue from 'vue';
import Vuex from 'vuex';

import {ItemData} from '../assets/items.js'
import {stockItemGetters} from './getters'
import {stockMutations} from './mutations'
import {stockActions} from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({

    state:{
        cartData:[],
        itemData:{},
        totalCartValue:0,
        stockItemData:[]        
    },
    getters:  Object.assign({}, stockItemGetters),
    mutations:Object.assign({},stockMutations),
    actions: Object.assign({}, stockActions)
});