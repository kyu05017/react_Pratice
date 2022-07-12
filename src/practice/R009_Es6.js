import React, {Component} from 'react';

class R009_Es6 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var jsString = '자바스크립트'
        var jsString2 = '입니다 \n다음 줄 입니다.'
        console.log(jsString + ' 문자열'+ jsString2+"~");

        var Es6String = 'Es6'
        var Es6String2 = '입니다.'
        console.log(' ${Es6String} 문자열 ${Es6String2}!! ___ 다음줄 입니다.' );

        var LongString = 'Es6에 추가된 String 함수들 입니다.';
        console.log('1 : ' + LongString.startWith("Es6에"));
        console.log('2 : ' + LongString.startWith("입니다."));
        console.log('3 : ' + LongString.include("추가된 String"));
    }

    render() {
        return (
            <h2>[This is Es6 String]</h2>
        )
    }}
export default R009_Es6;