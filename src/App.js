import React, { Component } from 'react';
import './App.css';
//import ImportConponent from './practice/R003_ImportConponent';
//import Lifecycle from './practice/R004_LifecycleEx'
//import Lifecycle2 from './practice/R005_LifecycleEx'
//import Lifecycle3 from './practice/R006_LifecycleEx'
//import Lifecycle4 from './practice/R007_LifecycleEx'
//import Lifecycle5 from './practice/R008_LifecycleEx'
//import Es6 from './practice/R009_Es6'
//import Variable from './practice/R010_Variable'
import spread from './practice/R011_SpreadOperator'

class App extends Component {
    render() {
        return (
            <div className="App">
               <h1>Start React 200!</h1>
               <p>HTML 적용</p>
               <p>CSS 적용</p>
               {/*
               <ImportConponent></ImportConponent>
               <Lifecycle></Lifecycle>
               <Lifecycle2></Lifecycle2>

               <Lifecycle3
                    prop_value="formApp.js"
               />

                <Lifecycle4
                    prop_value="formApp.js"
               />
               */}
                <spread/>
            </div>
        );
    }
}

export default App;
