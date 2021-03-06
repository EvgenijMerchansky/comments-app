import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// functions:
import { response } from '../actions/commonAction';
// end
import SubCommet from './subComment.jsx';

class Common extends Component {
  render(){
    console.log(this);
    const user = this.props.common;
    // const responseUser = this.props.responseReducer;
    // const wrapped = responseUser.map((elem,index) => {
    //   console.log(elem);
    // })
    const wrappedUser = user.map((elem,index) => {
      console.log(elem);
      return (
        <div className='generic' key={index}>
          <h2>{elem[0]}</h2><p>{elem[1]}</p>
          <h4>{elem[2]}</h4>
          <SubCommet/>
          <div className='sub-comment'>
            <h1>RESPONSE TO: {elem[0]}</h1><br/>
            name: <input ref={(input) => {this.userName = input}}></input><br/>
            email: <input ref={(input) => {this.userEmail = input}}></input><br/>
            comment:<br/> <textarea ref={(textarea) => {this.textarea = textarea}}></textarea><br/>
            <button onClick={() => {this.props.response(this.textarea.value, this.userName.value)}}>Response</button>
          </div>
          {/* onClick={} my next block with response from first user comment */}
        </div>
      )
    })
    return (
      <div>
        {wrappedUser}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    common: state.testReducer,
    responseReducer: state.responseReducer
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    response
  }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Common)
