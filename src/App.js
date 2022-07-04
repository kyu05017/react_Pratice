import React, { Component } from 'react';
import './App.css';
import MC from './practice/MyComponent';
import EP from './practice/EventPractice';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MC name="React" age=20 />
                <EP />

            </div>
        );
    }
}

export default App;
