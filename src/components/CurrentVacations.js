import React, { Component } from 'react';
import './CurrentVacations.scss';
import Table from 'react-bootstrap/Table';

export default class CurrentVacations extends Component {

constructor(props){
  super(props);
}


render () {
  var status = "working"

  return (

    <div  style={{paddingTop : "7vh", paddingLeft : "5vw", fontSize : "2.5vh", width : "40vw", float : "left"}}>
    <Table striped bordered hover variant="dark" size="sm" responsive>
  <thead style={{fontSize : "3vh"}}>
    <tr>
      <th>#</th>
      <th>Dates</th>
      <th>Hours</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <td>1</td>
      <td>July 4</td>
      <td>8</td>
      <td>approved</td>
      <td><a href="">EDIT</a></td>
    </tr>
    <tr>
      <td>2</td>
      <td>July 10</td>
      <td>8</td>
      <td>approved</td>
      <td><a href="">EDIT</a></td>
    </tr>
  </tbody>
</Table>


    </div>
  )
}

}
