import React from 'react';

const Search = (props) => (
  <div>
    <input name="search" onChange={props.input} value={props.inputValue}></input>
    <button onClick={props.search}>Search json server</button>
  </div>
)

export default Search;
