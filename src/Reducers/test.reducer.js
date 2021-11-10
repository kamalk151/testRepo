import testType from './../Constants/test.type';

const initialNum = { num : 10 };

const reducer = (state = initialNum, action) => {
  
  switch(action.type) {

    case testType.INC:       
      return {
        ...state,
        num: state.num + 1
      }
    
    case testType.DEC:
      return {
        ...state,
        num: state.num - 1
      }
      
    default:  return state;
  } 

}

export default reducer;