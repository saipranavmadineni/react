import logo from './logo.svg';
import './App.css';
import React from 'react';
import App2 from './App2';

class App extends React.Component {
  x;

  constructor(props) {
    super();
    this.x = 100;

    this.state = { name: 'Naren', age: 40, email: 'narenrr@yahoo.com' }
    this.change1 = this.change1.bind(this);
    this.test1 = this.test1.bind(this);

  }

  test1() {
    console.log(this.state);

  }

  change1(e) {

    if (e.target.name === "Name") {
      console.log(e.target.value);
      this.setState({ name: e.target.value });
    }

    if (e.target.name === "Email") {
      console.log(e.target.value);
      this.setState({ email: e.target.value });
    }

    if (e.target.name === "Dept") {
      console.log(this.refs.dept.value);

    }
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> Welcome to React session,this is  a class based component
            <br /> Name: {this.state.name}
            <br /> age: {this.state.age}
            <br /> email: {this.state.email}
            <br /> value of {this.x}
          </p>


          <br />
          Enter Name :<input name="Name" value={this.state.name} onChange={this.change1} placeholder="Enter Value" />
          <br /> Enter email :<input name="Email" value={this.state.email} type="email" onChange={this.change1} placeholder="Enter Value" />
          <br /> Enter Department :<input name="Dept" ref="dept" type="email" onChange={this.change1} placeholder="Enter Value" />
          <br /> <button type="button" onClick={this.test1}>Click Me! </button>


        </header>

        <App2 attr1={this.state.email} attr2={this.a}> </App2>
      </div>
    );
  }
}

export default App;