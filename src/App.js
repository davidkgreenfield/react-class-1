import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import './App.css';

const roster = ['Podsednik', 'Iguchi', 'Dye', 'Konerko', 'Everett', 'Rowand', 'Peirzinski', 'Crede', 'Uribe'];

const Results = () => (
    <div>
        <ul>
            <li>Game 1: W - (5-3)</li>
            <li>Game 2: W - (7-6)</li>
            <li>Game 3: W - (7-5)</li>
            <li>Game 4: W - (1-0)</li>
        </ul>
    </div>
)

const Roster = () => (
    <div>
        <ul>
            {
                roster.map(p => (
                    <li> {p} </li>
                ))
            }
        </ul>
    </div>
);
const Home = () => (
    <div>
        <h1>Welcome to Chicago's World Series Champions!</h1>
    </div>
)
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/roster' component={Roster}/>
            <Route path='/results' component={Results}/>
        </Switch>
    </main>
);

const Header = () => (
    <header>
        <nav>

                <p/><Link to='/'>Home</Link>
                <p/><Link to='/roster'>Roster</Link>
                <p/><Link to='/results'>Results</Link>
        </nav>
    </header>
)

class App extends Component {


    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default App;
