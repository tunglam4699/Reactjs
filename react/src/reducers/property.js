import * as types from "../const/ActionTypes";
var initialState = {
    print : '',
    size: '',
    orientation: '',
    colorMode: '',
    displayTags: '',
    imgStep: '',
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_PROPERTY:
      const newState = {...state};
      newState[action.payload.name] = action.payload.value;
      console.log(newState);
      return {...newState}
    default:    
      return state;
  }
};
export default myReducer;
