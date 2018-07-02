export const stockItemGetters = {
    stockItemData:state => {
        return state.stockItemData;
    },
    cartItemData:state => {
        return state.cartData;
    },
    cartItemsCount:state=>{
        return state.cartData.length;
    },
    itemData:state=>{
        return state.itemData;
    },
    totalCartValue:state=>{
        return state.totalCartValue;
    }
}