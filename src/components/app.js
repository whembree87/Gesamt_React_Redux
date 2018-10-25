import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import TranslationList from '../containers/translation_list';

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <TranslationList/>
            </div>
        );
    }
}