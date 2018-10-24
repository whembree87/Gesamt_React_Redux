import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props)  {
        super(props);

        // this.state = {
        //     videos: [],
        //     selectedVideo: null
        // };
        //
        // this.videoSearch('');
    }

    render() {
        return (
            <div>Hello World</div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));