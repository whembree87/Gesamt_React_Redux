import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { translate } from "../actions";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.translate(this.state.term);

        this.setState({ term: '' });
    }

    static collectWords(word) {
        const id = word.meaningId;
        const phrase = word.phrase;
        const text = phrase && phrase.text;

        if(id) {
            return (
                <tr key={id}>
                    <td>
                        {text}
                    </td>
                </tr>
            );
        }
    }

    render() {
        return (
            <div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">English to German</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">German to English</a>
                    </li>
                </ul>

                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                        placeholder="Please enter word"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>

                <table className="table table-hover">
                    <tbody>
                    {this.props.translations.map(SearchBar.collectWords)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { translate }, dispatch);
}

function mapStateToProps({ translations }) {
    return { translations };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);