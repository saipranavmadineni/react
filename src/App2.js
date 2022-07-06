import logo from './logo.svg';
import './App.css';
import React from 'react';

class App2 extends React.Component {


    constructor(props) {
        super();
        //    console.log(this.props.attr1);

    }




    render() {

        return (
            <div className="App">
                <p> This is child app2 component , props passed from parent are {this.props.attr1}</p>

            </div>
        );
    }
}
export default App2;