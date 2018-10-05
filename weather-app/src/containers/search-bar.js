import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index.js';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        // need to bind this to inputChange to get the correct context
        this.onInputChange = this.onInputChange.bind(this);
        //this.onFormSubmit = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        // go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <form className="input-group" onSubmit={(event) => this.onFormSubmit(event)}>
                <input
                placeholder="Get a five-day forecast in your favorite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// passing null because we don't need state for this container
export default connect(null, mapDispatchToProps)(SearchBar);