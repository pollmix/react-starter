import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

class App extends Component {
  render() {
    const comment = {
      date: new Date(),
      text: "I am learning React",
      author: {
        name: "Imran",
        avaterUrl: "http://placekitten.com/g/64/64"
      }
    };
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}
          />
        </p>

      </div>
    );
  }
}

export default App;
