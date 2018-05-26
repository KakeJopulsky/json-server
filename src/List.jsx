import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import ListEntry from './ListEntry';

const List = (props) => (
  <div>
    <div className="list">
      {props.data.map((entry) => (
        <ListEntry entry={entry} />
      ))}
    </div>
    <ReactPaginate containerClassName={'pagination'}
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    pageCount={10}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    activeClassName={"entry"}
                    onPageChange={props.next}
    />
  </div>
)

export default List;
