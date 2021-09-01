
const initialState={
    cart:{},
    client:{}
}
export default  function RootReducer(state=initialState,action)
{
   switch(action.type)
   {
      case 'ADD_CLIENT':
      state.client[action.payload[0]]=action.payload[1]
       return {cart:state.cart,client:state.client}

      case 'ADD_CART':
      state.cart[action.payload[0]]=action.payload[1]
      return {cart:state.cart,client:state.client}

    case 'REMOVE_CART':
        delete state.cart[action.payload[0]]
        return {cart:state.cart,client:state.client}
  
       default:
        return state   
     }

}