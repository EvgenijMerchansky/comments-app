import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { test } from './actions/commonAction';
import Common from './containers/common.jsx';
import SubCommet from './containers/subComment.jsx';

class App extends Component {
  render() {
    // console.log(this.props.userDataAndComment[0]);
    // const someUs = this.props.userDataAndComment[0].name;
    console.log(this)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        {/* <SubCommet/> */}
        <h1>NEW COMMENT:</h1>
        <br/>
        type your name: <input ref={(input) => {this.userName = input}}></input><br/>
        type your email: <input ref={(input) => {this.userEmail = input}}></input><br/>
        your comment:<br/> <textarea ref={(textarea) => {this.textarea = textarea}}></textarea><br/>
        <button onClick={() => {this.props.test(this.textarea.value, this.userName.value, this.userEmail.value)}}>ADD COMMENT</button>
        <Common />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDataAndComment: state
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    test
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
