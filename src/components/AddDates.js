import React, { Component } from 'react';

export default class AddDates extends Component {

render() {
  let status = "working"
  let style = "width:100%; border: 1px solid white;"

  return (
    <div>

    {status}
    <table style = {{style}}>
      <tr>
        <th>Firstname</th>
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
