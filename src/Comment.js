import React, { Component } from 'react';
import UserInfo from './UserInfo';

class Comment extends Component{
  constructor(props){
    super(props);
    this.state = { time: new Date() }
  }

  componentDidMount(){
    this.mountedTime = setInterval(()=> this.tick());
  }

  componentWillUnmount(){
    clearInterval(this.mountedTime);
  }

  tick(){
    this.setState({
      time: new Date()
    });
  }

  render(){
    return (
      <div className="Comment">
        <UserInfo author={ this.props.author }/>

        <div className="Comment-text">
          { this.props.text }
        </div>
        <div className="Comment-date">
          { this.props.date.toLocaleString() }
          <br />
          { this.state.time.toLocaleString() }
        </div>
      </div>
    );
  }
}

export default Comment;