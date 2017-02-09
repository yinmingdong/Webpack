// Greeter.js
// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = "Hi there and greetings!";
//     return greet;
// };

import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
    render() {
        return (
            <div>
            {config.greetText}
            <h1>我的第一个webpack</h1>
    </div>
    );
    }
}

export default Greeter