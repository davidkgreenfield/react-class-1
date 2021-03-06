import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Results from './components/Results';
import Roster from './components/Roster';

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
