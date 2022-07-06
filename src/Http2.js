import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class Http2 extends React.Component {


    constructor(props) {
        super();

        this.state = { username: '', email: '' };
        //    console.log(this.props.attr1);

        this.getInfo = this.getInfo.bind(this);

        this.changehandler1 = this.changehandler1.bind(this);
        //this.changehandler2 = this.changehandler2.bind(this);
    }

    changehandler1(e) {
        if (e.target.name === "Username") {
            console.log(e.target.value);
            this.setState({ username: e.target.value });
        }

        if (e.target.name === "Email") {
            console.log(e.target.value);
            this.setState({ email: e.target.value });
        }
        //this.setState({name:e.target.value});
    }



    getInfo = (e) => {
        var usr = {
            username: this.state.username,
            email: this.state.email
        }

        //creating usr object first above then strinfy it

        console.log('inside geinfo' + JSON.stringify(usr))
        console.log(typeof usr);

        const myInit1 = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'

            }, body: JSON.stringify(usr)

        };


        let finalurl = 'http://localhost:8080/createuser/';
        fetch(finalurl, myInit1)
            .then((response) => {
                console.log(response);
                console.log(response.data);
                return response.data;
            })
            .then(function (myJson) {
                console.log(myJson);
            })
            .catch((error) => console.error(error));





    }
    render() {

        return (
            <div className="App">
                <p> Click to test http call</p>
                Username : <input type="text" name="Username" value={this.state.username} onChange={this.changehandler1} /><br />
                Email :    <input type="text" name="Email" value={this.state.email} onChange={this.changehandler1} /><br />

                <br /> <button type="button" onClick={this.getInfo}>Click Me! </button>

            </div>
        );
    }
}
export default Http2;