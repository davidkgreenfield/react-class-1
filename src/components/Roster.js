import React, {Component} from 'react';

const roster = ['Podsednik', 'Iguchi', 'Dye', 'Konerko', 'Everett', 'Rowand', 'Peirzinski', 'Crede', 'Uribe'];

class Roster extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return     <div>
            <ul>
                {
                    roster.map(p => (
                        <li> {p} </li>
                    ))
                }
            </ul>
        </div>
    }
}
export default Roster;