import axios from "axios";
const GET_ITEMS = 'GET_ITEMS';
const ADD_ORDER = 'ADD_ORDER';
const GET_PRODUCT = 'GET_PRODUCT';
const initState = {
  items: [],
  product:{},

};
export default (state = initState, action) => {
    switch (action.type) {
       case GET_ITEMS: {
           return {
               ...state, 
               items: action.items
           }
       }
       case ADD_ORDER: {
          const idx = state.order.findIndex((item)=>{
              return item.id === action.obj.id
          }) ;
          if(idx === -1){
              return{
                  ...state,
                  order:[{...action.obj, count: 1},...state.order]
              }
          }else{
              state.order[idx].count++;
              return{
...state
              }
          }
       }
       case GET_PRODUCT: {
        return {
            ...state,
            product: action.product
        }
       }
        default:
            return state
    }
};

export const getItems = ()=>{
return (dispatch)=>{
    axios.get('http://localhost:7070/')
    .then(({data})=>{
       return dispatch({type: GET_ITEMS, items: data})
    })
}
};
export const addOrder = (obj)=>{
    return (dispatch)=>{
     return dispatch({type: ADD_ORDER, obj})
    }
};
export const getProduct = (idx)=>{
    return (dispatch)=>{
        axios.get('http://localhost:7070/')
        .then(({data})=>{
    return dispatch({type: GET_PRODUCT, product: data[idx]})
        })
    }
};



