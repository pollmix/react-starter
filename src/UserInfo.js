import React, { Component } from 'react';
import Avatar from './Avatar';

class UserInfo extends Component{
  render(){
    return (
      <div className="UserInfo">
        <Avatar author={ this.props.author } />
        
        <div className="UserInfo-name">
          { this.props.author.name }
        </div>
      </div>
    );
  }
}

export default UserInfo;