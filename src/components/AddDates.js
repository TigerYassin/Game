import React, { Component } from 'react';
import './AddDates.scss';

export default class AddDates extends Component {

constructor(props){
  super(props);
  this.state = { team : "", attuid : "", name : "", daysRemaining : 2, hoursRemaining : 16}
  this.handleChange = this.handleChange.bind(this);
}


handleChange(e) {
  this.setState({[e.target.name] : e.target.value})
  console.log("working")
}

render() {
  var dates = ["July 15", "July 16"]
  var width = (440.5 * windowWidth) / 1920;
  var windowWidth = window.innerWidth
  let windowHeight = window.innerHeight
  const style = {
    border : '1px solid #000000'

  }

  let team = "TEAM"
  let attuid = "ATTUID"

  return (
    <div style={style}>
            {
              // Top Row
            }
          <input type="text" id="inputTeam" className="input" aria-label="Sizing example input" placeholder="TEAM" name='team' value= {this.state.team} onChange={this.handleChange} />
          <input type="text" id="inputAttuid" className="input veritcalLine" aria-label="Sizing example input" placeholder="ATTUID" name='attuid' value= {this.state.attuid} onChange={this.handleChange} />
          <input type="text" id="inputName" className="input veritcalLine" aria-label="Sizing example input" placeholder="FULL NAME" name='name' value= {this.state.name} onChange={this.handleChange} />


          {
            //Bottom Row
          }
          <div style={{marginTop: "5px"}}> </div>

          <div className="elementText"> Days remaining:  </div>  <div className="numberValue">{this.state.daysRemaining} </div>
          <div className="elementText"> Hours remaining:  </div>  <div className="numberValue">{this.state.hoursRemaining} </div>


          {
            //Dates booked
          }
          <div style={{display : "inline-block", marginLeft : "3vw", marginRight : "0.7vw", fontSize: "3.3vh"}}> dates selected: </div> <div style={{display : "inline-block", fontSize : "2.4vh"}}>{dates}</div>


    </div>
  )
}


}
