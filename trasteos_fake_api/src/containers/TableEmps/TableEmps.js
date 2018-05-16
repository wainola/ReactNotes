import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getEmployees } from '../../actions/index'

class TableEmps extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        TableEmps
      </div>
    )
  }
}

function mapStateToProps({emps}){
  return {emps}
}

function maptDispatchToProps(dispatch){
  return bindActionCreators({getEmployees}, dispatch)
}

export default connect(mapStateToProps, maptDispatchToProps)(TableEmps)