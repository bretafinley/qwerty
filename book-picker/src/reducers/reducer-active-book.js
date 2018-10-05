// all reducers are passed two arguments
// state - current state
// action - reducers are only called when an action occurs
export default function ActiveBooks(state = null, action) {
    console.log(action)
    switch(action.type) {
        case 'BOOK_SELECTED' : return action.payload;
    }

    return state;
}