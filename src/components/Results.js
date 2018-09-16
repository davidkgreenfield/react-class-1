import React, {Component} from 'react';

class Results extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <ul>
                <li>Game 1: W - (5-3)</li>
                <li>Game 2: W - (7-6)</li>
                <li>Game 3: W - (7-5)</li>
                <li>Game 4: W - (1-0)</li>
            </ul>
        </div>;
    }
}
export default Results;