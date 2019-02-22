import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className='purple center-title'>WHAT IS PENGUICON?</section>
            <div className="whatis-container">
                <div className="whatis-item">
                    <div className="center-title purple">YOUR HAPPY PLACE</div>
                    Imagine your happy place, where all geeky interests are represented, explored, and respected. A place where hackers, makers, foodies, open source software junkies, anime buffs, and science fiction fans of all ages and backgrounds come together in a hotel for a weekend and totally blow the roof off.
                </div>
                <div className="whatis-item">
                    <div className="center-title purple">COMMUNITY</div>
                    Penguicon doesn’t just happen for one weekend. We meet all year long, working to make sure the event is going to be a success. Working is the technical term for it, but is it really working when you’re having so much fun? We’re friends outside of con, too. Monthly planning meetings are held either in the house of a volunteer or in the host hotel… and are always followed by a potluck and a party. It’s like a mini-convention every month!
                </div>
                <div className="whatis-item">
                    <div className="center-title purple">GET INVOLVED</div>
                    You can help make Penguicon happen! We are 100% volunteer-run and we need people like you to join our team. You can become a staff member and work on Penguicon all year long, or volunteer during the convention weekend. Staff and volunteers have tons of fun and get awesome perks! Contact volunteers@penguicon.org for more information.
                </div>
                <div className="whatis-item">
                    <div className="center-title purple">FIND YOUR PENGUICON</div>
                    Penguicon has a little something for everyone. If you’re passionate about a topic, we want to hear about it! We’re an inclusive and accepting community for all geek interests. Ready to come find your Penguicon? Register by purchasing a badge!
                </div>
            </div>
      </div>
    )
  }
}
