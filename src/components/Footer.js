import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-body">
          Connect with us!
          <br /><br />
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-google-plus-square"></i>
          <i className="fab fa-instagram"></i>

          <section className="copyright-body">
            copyright Penguicon 2019
          </section>
        </div>
      </div>
    )
  }
}

export default Footer
