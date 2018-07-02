export const stockActions = {             
    addToCart({commit}, itemData) {
        console.log('itemData Info'+itemData);
        commit('addToCart',itemData);
    },
    removeFromCart({commit}, itemData){
        commit('removeFromCart',itemData);
    },
    setAllStockItems({commit}, items){
        commit('setAllStockItems', items);
    },
    setItemDetails:({commit}, itemId)=>{
        commit('setItemDetails', itemId);
     }

}
