import React  from 'react'

export class PurchaseBadge extends React.Component {
  render() {
    return (
      <div className="body-container">
        <div className="list-container">
            <section className="center-title purple">
                PRE-REGISTRATION IS OPEN UNTIL <br />APRIL 12, 2019!
            </section>
            <ul>
                <li>Pre-Reg will be $50* from November 1, 2018 until midnight on April 12, 2019 Register now!</li>
                <li>Staff and ConCom rate, at any time, is $25. (A ConCom member must confirm that you are Staff for you to receive this rate.)  Pre-register by April 12 to get a pre-printed badge.</li>
                <li>Maker Market vendors also pay $25, but must pay through their liaison.  Please contact makermarket@penguicon.org.</li>
            <li>Panelists who present at least 3 hours of programming or submit their presentation (to be shared with our community via a creative commons license) in advance, will pay $30. Pre-register by April 12 to get a pre-printed badge.</li>
            </ul>
            <section className="center-title purple">
                REGISTRATION PRICES AT THE CONVENTION
            </section>
            <ul>
                <li>At-the-door weekend rate is $60.</li>
                <li>Friday-only memberships are available for $30.  Your access to Penguicon events expires at midnight.</li>
                <li>If you purchase a membership on Saturday, it is reduced to $40.</li>
                <li>If you purchase a membership on Sunday, it is reduced to $20.</li>
                <li>The Registration desk opens officially at 3 PM, however it’s often open much earlier, so if you get to the hotel midday, check in the North lobby.</li>
            </ul>
            *Stay tuned for special promo codes that can get you a discount on badge prices from now until April 12.  We will be posting these at events we attend (such as other conventions), ConCom meetings, and occasionally online via Facebook and Twitter.  
        </div>
      </div>
    )
  }
}

export default PurchaseBadge
