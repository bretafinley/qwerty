import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        // array of JSX objects is returned
        return this.props.books.map((book) => {
            return (
                <li
                key={book.title}
                className="list-group-item"
                onClick={ () => {this.props.selectBook(book)} }>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// glue between react and redux
function mapStateToProps(state) {
    // whatever is returned here will show up as props inside of booklist
    return {
        books: state.books
    };
}

// dispatch receives actions and spits them out to all of our reducers
// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, the result should be passed to our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// let foo = connect(mapStateToProps, mapDispatchToProps)
// let bar = foo(BookList)
// export default bar;

// Promote BookList from a component to a container - it needs to know about
// this new dispatch method, selectBook, make it available as a prop
// lots of different ways to use connect
export default connect(mapStateToProps, mapDispatchToProps)(BookList);