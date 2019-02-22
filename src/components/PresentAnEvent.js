import React, { Component } from 'react'
import { Link } from "react-router-dom";


export class PresentAnEvent extends Component {
  render() {
    return (
      <div className="body-container">
        <div className="purple center-title">
        <section className="link-border">
          If your ideas are ready, submit your 
          <br />submission or suggestion <Link to="/Form" className="text-link">here!</Link>
          <br />
          <br />
          Our content is entirely sourced from our local community, Featured Guests and our Guests of Honor. We welcome both beginners and veteran presenters alike.
          <br /> 
          </section>
        </div>
        <div className="left">
          <ul>
            Types of Events:
            <li>
            A panel is any discussion with multiple presenters who get up in front of an audience and discuss the topic.
            </li>
            <li>
            A presentation is a talk delivered by one person. This is usually a subject matter expert of some sort.
            </li>
            <li>
            A workshop/demonstration is a hands-on event where presenters teach audience members how to do/make something. Penguicon does offer reimbursement for workshop supplies!
            </li>
            <li>
            A music/film/spoken performance could be anything from a book reading to a short film screening to a solo electric triangle concert;)
            </li>
            <li>
            A birds of a feather session is any discussion around a topic or common interest scheduled without official panelists. This is where you just show up and talk with whoever comes to chat.  If you don’t want the responsibility of running a panel, this may be for you.
            </li>
            <li>
            A computer lab workshop is held in our Linux computer lab. Past events in the computer lab have ranged from coding classes to résumé writing workshops.
            </li>
            <li>
            If you speak for more than three hours of approved programming OR submit one hour’s event documentation (email programming@penguicon.org for details), you will also have a discounted membership! Note: We reserve the right to alter panel titles, descriptions, or presenters as necessary, though we will make every effort to notify the submitter in advance.
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default PresentAnEvent
