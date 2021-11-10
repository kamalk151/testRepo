import cakeType from './../Constants/cake.type';

const initialCake = { numOfCake : 10 };

const reducer = (state = initialCake, action) => {
  
  switch(action.type) {

    case cakeType.BUY_CAKE: 
      
      return {
        ...state,
        numOfCake: state.numOfCake + 1
      }
    
    case cakeType.SELL_CAKE: 

      return {
        ...state,
        numOfCake: state.numOfCake - action.data
      }

    default:  return state;

  } 

}

export default reducer;