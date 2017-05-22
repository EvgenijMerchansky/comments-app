import React ,{ Component } from 'react';
import { connect } from 'react-redux';

class Common extends Component {
  render(){
    console.log(this);
    const some = this.props.common;
    // console.log(some);
    // const wrap = some.map((elem, index) => {
    //   return <li>{elem}</li>
    // })
    return (
      <div>
        {/* {some} */}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    common: state
  }
}

export default connect(mapStateToProps)(Common)
