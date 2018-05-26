import React, { Component } from 'react';
import Search from './Search';

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
    console.log('Searched for: ' + this.state.search);
    this.setState({
      search: ''
    })
  }

  render() {
    return (
      <div>
        Welcome to HELL
        <Search search={this.search} input={this.inputText} inputValue={this.state.search}/>
        
      </div>
    );
  }
}

export default App;
