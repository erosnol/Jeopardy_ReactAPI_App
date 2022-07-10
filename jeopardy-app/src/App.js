import './App.css';

import { Component } from 'react';
import TriviaInfo from './Components/TriviaInfo'


class App extends Component {
  state = {
    baseURL: 'http://jservice.io/api/random/?',
    category: '',
    points: 0,
    answer: '',
    searchURL: "",
    question: null,
  };

handleChange = (event) => {
  this.setState({ [event.target.id]: event.target.value })
}


handleSubmit = (e) => {
  e.preventDefault();
  this.setState({searchURL: this.state.baseURL + this.state.category + this.state.question + this.state.points + this.state.answer }, () => {
    fetch(this.state.baseURL)
    .then(res => res.json())
    .then(json => this.setState({question: json}))
  });
}


render() {
  return (
    <div className='App'>
      <div className="title">
      <h1>Welcome to Jeopardy</h1>
      </div>
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor=""></label>
      <input type="submit" />

      </form>

      <a href={this.state.searchURL}>{this.state.searchURL}</a>

      {this.state.question && <TriviaInfo question={this.state.question}/>}
      </div>
  )
}
}

export default App;