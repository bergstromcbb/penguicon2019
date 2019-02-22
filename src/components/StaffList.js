import React, { Component } from 'react'

export class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    concom: [
        { id: 1, Title: "Chairperson", Name: "Jessica Roland"},
        { id: 2, Title: "Asst. Chair", Name: "Cassy Sinke"},
        { id: 3, Title: "Hospitality", Name: "Niki Macrae"},
        { id: 4, Title: "Hotel", Name: "Matt Arnold"},
        { id: 5, Title: "Registration", Name: "Jeff Marraccini"},
        { id: 6, Title: "Treasurer", Name: "Amanda Long-Adams"},
        { id: 7, Title: "Operations", Name: "Chelle Silas"},
        { id: 8, Title: "Volunteers", Name: "Brigit Bradakis"},
        { id: 9, Title: "Programming Track Chair", Name: "Christie Bertie"},
        { id: 10, Title: "Programming Content Liason", Name: "Open Position"},
        { id: 11, Title: "Programming Diversity and Inclusion Liaison", Name: "Frannie C. Taylor"},
        { id: 12, Title: "Maker Market", Name: "Bagel Garrison"},
        { id: 13, Title: "Communications", Name: "Scott Kennedy"},
        { id: 14, Title: "Community", Name: "Sarah Lynn"},
        { id: 15, Title: "Logistics", Name: "Alison Chan"}
    ],
    board: [
        { id: 1, title: "President", name: "Randy Bradakis"},
        { id: 2, title: "Vice President", name: "Matt Arnold"},
        { id: 3, title: "Secretary", name: "Steve Gutterman"},
        { id: 4, title: "Treasurer", name: "Amanda Long Adams"},
        { id: 5, title: "Director at Large", name: "James Hice"}
    ]
  }
}

  render() {
    return (
      <div className="body-container">
        <h5 className="center-title purple"> Please contact us with your suggestions for Penguicon 2019 – <br />we are always striving to improve! </h5>
         <br />
         <section className="center-title"> If you have emailed a ConCom member and not received a reply, <br />please write to our Con Chair.</section>
        <div className="stafftable-container">
        <h5 className="center-title purple"> 2019 ConCom</h5>
        {this.state.concom.map((concom)=> (
          <div className="stafftable-row" key={concom.id}>
            <div className="stafftable-item">{ concom.Title }</div>
            <div className="stafftable-item">{ concom.Name }</div>
          </div>
          ))}
        </div>
        <br /><br />

<h5 className="center-title purple"> Board Of Directors</h5>
<div className="stafftable-container">
        {this.state.board.map((board)=> (
          <div className="stafftable-row" key={board.id}>
            <div className="stafftable-item">{ board.title }</div>
            <div className="stafftable-item">{ board.name }</div>
          </div>
          ))}
        </div>
<br /><br />
Penguicon is run by a Convention Committee for one year at a time, but also has a multi-year governing body, the Board of Directors. The Board makes decisions for future years of Penguicon, but does so only when unavoidable, in order to leave the Convention Committee with as much control of their weekend as possible. Multi-year decisions include:
<br />
<ul>
  <li>Select each year’s Convention Chair.</li>
  <li>Approve the Convention Chair’s budget proposal.</li>
  <li>Keep the bank account.</li>
  <li>Pay taxes.</li>
  <li>Set down the eight minimum rules that each year’s Convention Committee expands on.</li>
  <li>Collect private reports of isolated misconduct, to detect multi-year patterns of misconduct from any individual which may need to be addressed outside the convention weekend.</li>
  <li>Provide information technology infrastructure.</li>
</ul>
The Board usually meets at Penguicon, but also meets four times a year at the headquarters in Farmington. Meetings are open to the public. You may email the Board Of Directors at: board@penguicon.org
      </div>
    )
  }
}

export default StaffList
