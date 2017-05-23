import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// functions:
import { response } from '../actions/commonAction';
// end
class SubCommet extends Component {
  render(){
    console.log(this);
    const responseUser = this.props.responseReducer;
    const wrapped = responseUser.map((elem,index) => {
      console.log(elem);
      return (
        <div className='generic2' key={index}>
          <h2>{elem[0]}</h2><p>{elem[1]}</p>
          <h4>{elem[2]}</h4>
          <div className='sub-comment'>

            name: <input ref={(input) => {this.userName = input}}></input><br/>
            email: <input ref={(input) => {this.userEmail = input}}></input><br/>
            comment: <br/> <textarea ref={(textarea) => {this.textarea = textarea}}></textarea><br/>
            <button onClick={() => {this.props.response(this.textarea.value, this.userName.value, this.userEmail.value)}}>Response</button>
          </div>
          {/* onClick={} my next block with response from first user comment */}
        </div>

      )
    })
    return (
      <div>
        {wrapped}
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

export default connect(mapStateToProps,mapDispatchToProps)(SubCommet)
