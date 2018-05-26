import React from 'react';

const ListEntry = (props) => (
  <div className="entry">
    <table>
    <tbody>
    <tr>
      <th className="year">Year</th>
      <th className="location">Location</th>
      <th className="description">Description</th>
    </tr>
    <tr>
      <td>{props.entry.date}</td>
      <td>{props.entry.category2}</td>
      <td>{props.entry.description}</td>
    </tr>
    </tbody>
    </table>
  </div>
);

export default ListEntry;