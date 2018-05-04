import React, { Component } from 'react'

export class Posts extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log('Render Posts');
    console.log(this.props);
    return (
      <div>
        <h1>Posts</h1>
      </div>
    )
  }
}

export default Posts;
