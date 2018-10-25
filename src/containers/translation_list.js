import React, { Component } from 'react';
import { connect } from 'react-redux';

class TranslationList extends Component {

    collectWords(word) {
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
            <table className="table table-hover">
                <tbody>
                    {this.props.translations.map(this.collectWords)}
                </tbody>
            </table>
        );
    };
}

function mapStateToProps({ translations }) {
    return { translations };
}

export default connect(mapStateToProps)(TranslationList);