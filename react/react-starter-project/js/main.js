import React from "react";
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            clickCount: 0,
        };
    }
    render() {
        return <div>
            <a href="" onClick={this.handleClick.bind(this)}>Clicks: {this.state.clickCount}</a>
        </div>;
    }
    handleClick(event) {
        event.preventDefault();
        this.setState({
            clickCount: this.state.clickCount + 1,
        });
    }
}


export default Main;


// init react Component
//render((
//	    <Main/>
//	), document.getElementById('main'));
	
// React without JSX
//var MyMain = React.createFactory(Main);
//ReactDOM.render(MyMain({}),
//  document.getElementById('main'));	