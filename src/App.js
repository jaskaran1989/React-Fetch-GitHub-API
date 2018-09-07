import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      user:''
      
    };
  }
   componentDidMount() {
    fetch("https://api.github.com/users/jaskaran1989")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            user: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { isLoaded,error,user } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          <img src={user.avatar_url}/>
          <p>{user.name}</p>
          <p>{user.company}</p>
          <p>{user.bio}</p>
        </ul>
      );
    }
  }
}

export default App;
