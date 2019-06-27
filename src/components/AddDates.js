import React, { Component } from 'react';

export default class AddDates extends Component {

render() {
  let status = "working"
  const style = {
    border : '1px solid #000000'
  }
  const line = {
    width : '100px',
    size : '0px'
  }

  return (
    <div>

    {status}
    <table style = {style}>
      <tr><hr style={line}/>
        <th style = {style}>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
    </table>

    </div>
  )
}


}
