import React from 'react'

class Message extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      props: this.props
    }
  }
  render(){
    console.log(this.props)
    console.log(this.state)
    return(
      <div><h1>Class Message!</h1></div>
    )
  }
}

export default Message