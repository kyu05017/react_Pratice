import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

    static defaultProps = {
        name: '기본이름'
    }

    static propTypes = {
        name: PropTypes.string,
        age : PropTypes.number.isRequired

    }

    render() {
        return (
            <div>
                <p> 안녕하세요, 제 이름은 {this.props.name}</p>
                <p> 나이는 {this.props.age} 살 입니다.</p>
            </div>
        )
    }
}

MyComponent.defaultProps = {
    name: PropTypes.string
}

export default MyComponent;