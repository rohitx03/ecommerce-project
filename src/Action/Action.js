
export const Addcart =(item)=>{
    return{
        type : "add",
           payload:item

    }
}

// Dlt
export const Dlt =(id)=>{
    return{
        type : "delect",
           payload:id

    }
}
// Remove
export const Remove =(item)=>{
    return{
        type : "remove",
           payload:item

    }
}


// export const Addcart=(item)=>{
//     return{
//         type:"add",
//         payload:item
//     }
// }















// export const Increment =()=>{
//     return{
//         type : "Incre"
//     }
// }
// export const Decrement =()=>{
//     return{
//         type :"Decre"
//     }
    
// }



