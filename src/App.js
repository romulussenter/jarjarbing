import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


const BASE_URL = 'HTTPS://swapi.co/api/';
const PEOPLE_URL =`${BASE_URL}people`;


class App extends Component {
  constructor(){
    super();
    this.state={
      people: []
    }
  }
  componentDidMount(){
    console.log('component did mount');
    axios.get(PEOPLE_URL)
  .then((response) => this.setState({people: response.data.results}))
  .catch((error) => console.log(error));
  }
  render() {
    return (
      <pre>
        {JSON.stringify(this.state.people, null, 4)}
      </pre>
    );
  }
}

export default App;
