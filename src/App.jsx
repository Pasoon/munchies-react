import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home.jsx';

class App extends Component {
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        )
    }
}

export default App;