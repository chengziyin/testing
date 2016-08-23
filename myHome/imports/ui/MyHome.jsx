import React,{ Component } from 'react';
import { render } from 'react-dom';

class MyHome extends Component {
	render() {
		return(
        <h1>Hello,world!</h1>,
        document.getElementById('wraper')
     );
	}
}

export default MyHome;