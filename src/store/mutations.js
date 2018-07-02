
export const stockMutations = {             
    addToCart:(state, itemData)=> {
        console.log('itemData Info'+itemData);
        state.cartData.push(itemData);
        var price = itemData.price.split(',').join('');
        state.totalCartValue = state.totalCartValue + parseFloat(price);
    },
    removeFromCart:(state, itemData)=>{
        console.log('itemData Info'+itemData);
        const index = state.cartData.indexOf(itemData);
        if (index > -1) {
            state.cartData.splice(index, 1);
            var price = itemData.price.split(',').join('');
            state.totalCartValue = state.totalCartValue - parseFloat(price);
         }
    },
    setAllStockItems:(state, items)=>{
        state.stockItemData = items;
    },
    setItemDetails:(state, itemId)=>{
       state.itemData =  state.stockItemData.find(function(item) {
            return item.id == itemId;
        });
    }
}