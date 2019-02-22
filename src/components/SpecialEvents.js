import React, { Component } from 'react'

export class SpecialEvents extends Component {
  render() {
    return (
      <div className="body-container">
        <div className="center-title purple"> Penguins are hard at work adding more special events!</div>
          If you have an idea for a special event, please email events@penguicon.org.
          <br /><br />
          <h5 className="blue uppercase"> CHAOS MACHINE</h5>
          This customizable marble roller coaster is a perennial favorite. It serves as a metaphor for the open source development process.  The Chaos Machine is available all weekend for Penguicon attendees to tinker with!
          <br /><br />
          <h5 className="blue uppercase">RETRO GAMING</h5>
          Relive your childhood with our retro gaming event! From Atari to Nintendo 64 (and almost every system in between), revel in four hours of pure time-travel joy!
      </div>
    )
  }
}

export default SpecialEvents
