import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class Http3 extends React.Component {


    constructor(props) {
        super();

        this.state = { id: '', name: '' };
        //    console.log(this.props.attr1);

        this.getInfo = this.getInfo.bind(this);

        this.changehandler1 = this.changehandler1.bind(this);
        //this.changehandler2 = this.changehandler2.bind(this);
    }

    changehandler1(e) {
        if (e.target.name === "Id") {
            console.log(e.target.value);
            this.setState({ id: e.target.value });
        }

        if (e.target.name === "Name") {
            console.log(e.target.value);
            this.setState({ name: e.target.value });
        }
        //this.setState({name:e.target.value});
    }



    getInfo = (e) => {
        var usr = {
            id: this.state.id,
            name: this.state.name

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


        let finalurl = 'http://localhost:8080/createdept/';
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

                Id :    <input type="text" name="Id" value={this.state.id} onChange={this.changehandler1} /><br />
                Name : <input type="text" name="Name" value={this.state.name} onChange={this.changehandler1} /><br />

                <br /> <button type="button" onClick={this.getInfo}>Click Me! </button>

            </div>
        );
    }
}
export default Http3;