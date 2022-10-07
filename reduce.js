
const redux = require("redux");

// 1. Create a basic Reducer
const rootReducer = (currentState = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return currentState + 1;
        case "DECREMENT":
            return currentState - 1;
        default :
            return currentState;
    }
};

// 2. Create a store
const store = redux.createStore(rootReducer);
console.log("State Before Increment",store.getState());

// 3. dispatch action
store.dispatch({type:"INCREMENT"});
console.log("State After Increment = ", store.getState());