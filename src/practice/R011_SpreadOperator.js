import React, {Component} from 'react';


class R011_SpreadOpertor extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    componentDidMount() {
        var varArray1 = ['num1','num2'];
        var varArray2 = ['num3', 'num4'];

        var sumVarArray = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
        console.log( 'sumVarArray : ' + sumVarArray);

        // ES6 Array
        let sumLetArr = [...varArray1, ...varArray2];
        console.log( 'sumLetArr : ' + sumLetArr);

        const [sum1, sum2, ...remain] = sumVarArray;
        console.log( 'sum1 : ' + sum1 + 'sum2 : ' + sum2 + 'remain : ' + remain);

        var varObj1 = { key1 : 'val1', key2 : 'val2' };
        var varObj2 = { key2 : 'new2', key3 : 'val3'};

        var sumVarObj = Object.assign({}, varObj1, varObj2);
        console.log( 'sumVarObj : ' + JSON.stringify(sumVarObj));

        // ES6 Object
        var sumLetObj = { ...varObj1, ...varObj2 };
        console.log(  )




    }
}
export default R011_SpreadOpertor;