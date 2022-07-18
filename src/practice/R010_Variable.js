import React, {Component} from 'react';

class R010_Variable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varName = 'React';
        console.log( 'varName1 '+ varName);

        var varName = '200';
        console.log( 'varName2 '+ varName);

        let letName = 'React';
        console.log( 'letName1 '+ letName);

        letName = 'React200';
        console.log( 'letName2 '+ letName);

        const constName = 'React200';
        console.log( 'constName1 '+ constName);
    }

    render() {
        return(
            <h2> [this is R010_Variable]</h2>
        )
    }
}

export default R010_Variable