const InitialState = {
    cart: []
};

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case "add": 
        const ItemIndex = state.cart.findIndex((item)=>item.id===action.payload.id);
        if(ItemIndex>=0){
            state.cart[ItemIndex].qnty+=1;
        }else{
            const temp={...action.payload,qnty:1}
            return {
                ...state,
                cart: [...state.cart, temp]
            }
        }
            case 'delect': 
            const data =state.cart.filter((ele)=>
                ele.id !== action.payload)
            return{
                ...state,
                cart:data
            }
            case 'remove':
            const ItemIndexdec = state.cart.findIndex((item)=>item.id===action.payload.id);
            if(state.cart[ItemIndexdec].qnty>=1){
                const dltitem =state.cart[ItemIndexdec] -=1;
                return{
                    ...state,
                    cart:[...state.cart]
                }
            }
        default: return state;
    }

}


export default reducer;



// const InitialState = {
//     cart: []
// }

// export const reducer = (state = InitialState, action) => {
//     switch (action.type) {
//         case 'add':
//             return {
//                 ...state,
//                 cart: [...state.cart, action.payload]
//             }
//         default: return state
//     }
// }