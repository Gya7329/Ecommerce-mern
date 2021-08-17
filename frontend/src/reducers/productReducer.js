export const produtListReducer = (state={
products:[]},action)=>{
switch(action.type){
    case 'PRODUCT_LIST_REQUEST':
       return{loading:true, product:[]}
       case 'PRODUCT_LIST_SUCCESS':
           return{loading:false , products: action.playload}
           case 'PRODUCT_LIST_FAIL':
               return {loading : false, error:action.playload}
               default:
                   return state 
}


}

