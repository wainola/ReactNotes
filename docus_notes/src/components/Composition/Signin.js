import React from 'react'
import SigninForm from './Components/SigninForm'

export default class Signin extends React.Component{
  onChange = e => {
    console.log(e.target.value)
  }
  render(){
    return(
      <div>
        <h2>Registro de usuarios!</h2>
        <SigninForm
        onChange={this.onChange}
        />
      </div>
    )
  }
}