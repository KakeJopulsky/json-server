import React, { Component } from 'react';
import Search from './Search';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      data: null,
      page: 0,
    }
    this.search = this.search.bind(this);
    this.inputText = this.inputText.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  inputText(text) {
    this.setState({
      search: text.target.value
    })
  }

  search() {
    fetch(`http://localhost:3000/events?q=${this.state.search}&_page=${this.state.page}&_limit=8`)
      .then(res =>res.json()).then(body => this.setState({ data: body }))
    this.setState({
      search: ''
    })
  }

  handlePageClick({ selected }) {
    this.setState({
      page: selected
    })
    this.search();
  }

  renderList() {
    return this.state.data ? <List data={this.state.data} next={this.handlePageClick}/> : <div></div>;
  }

  render() {
    return (
      <div className="container">
        Welcome to HELL
        <Search search={this.search} input={this.inputText} inputValue={this.state.search}/>
        {this.renderList()}
      </div>
    );
  }
}

export default App;
