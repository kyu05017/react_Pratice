import React, { Component } from 'react';
import './App.css';
import MC from './MyComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MC name="React" age="20" />
            </div>
        );
    }
}

export default App;
