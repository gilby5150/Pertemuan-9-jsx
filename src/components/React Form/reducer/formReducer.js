export default (state = [], action) => {
    switch (action.type) {
        case "SUBMIT_FORM":
            return action.payload;
        default:
            return state;
    }
};

