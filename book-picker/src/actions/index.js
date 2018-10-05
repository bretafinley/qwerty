export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an action, an object
    // with a type property
    // Actions always contain a type, and sometimes a payload
    return {
        type: 'BOOK_SELECTED', //can be string or constant
        payload: book
    };
}