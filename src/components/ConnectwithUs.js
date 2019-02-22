import React from 'react'

export class ConnectwithUs extends React.Component {
  render() {
    return (
      <div className="body-container">
        <h5 className="center-title purple"> FOLLOW US!</h5><br/>
          Most information about Penguicon is shared via Facebook!
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>IRC</li>
          </ul>
          <h5 className="center-title purple">MAILING LISTS</h5><br />
          Our mailing lists are another way to get updates about Penguicon. Information about board meetings is usually shared on the general mailing list.
          <ul>
            <li>Board – Penguicon Board of Directors</li>
            <li>General – The list for the rest of us! (Very general, open to all)</li>
          </ul>
      </div>
    )
  }
}

export default ConnectwithUs
