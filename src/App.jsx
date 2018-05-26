import React, { Component } from 'react';
import Search from './Search';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      data: '',
    }
    this.search = this.search.bind(this);
    this.inputText = this.inputText.bind(this);
  }

  inputText(text) {
    this.setState({
      search: text.target.value
    })
  }

  search() {
    let pageNum = 1;
    fetch(`http://localhost:3000/events?&_page=${pageNum}?category2=${this.state.search}&limit=10`)
      .then(res =>res.json()).then(body => console.log(body))
    this.setState({
      search: ''
    })
  }

  render() {
    return (
      <div className="container">
        Welcome to HELL
        <Search search={this.search} input={this.inputText} inputValue={this.state.search}/>
        <List />
      </div>
    );
  }
}

export default App;
