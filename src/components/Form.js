import React, { Component } from 'react';
import ProgammingBody from "./ProgammingBody";

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
        selectedOption: "option1",
        email: '',
        name:'',
        whoCould: '',
        title: '',
        description: '',
        programming: '',
        track:'',
        zprogrammingChoices: [
            { id: 1, Type: "Birds of a Feather"},
            { id: 2, Type: "Special Event"},
            { id: 3, Type: "Panel"},
            { id: 4, Type: "DIY Panel"},
            { id: 5, Type: "Computer Lab Panel"},
            { id: 6, Type: 'Food/Drink Panel'},
            { id: 7, Type: "Computer Lab Panel"},
            { id: 8, Type: "Gaming Event"}
        ],
        ztrackChoices: [
            { id: 1, Type: "After Dark"},
            { id: 2, Type: "Anime"},
            { id: 3, Type: "Action Adventure"},
            { id: 4, Type: "Cosplay"},
            { id: 5, Type: "DIY"},
            { id: 6, Type: 'Food'},
            { id: 7, Type: "Gaming"},
            { id: 8, Type: "Life"},
            { id: 9, Type: "Literature"},
            { id: 10, Type: "Mayhem"},
            { id: 11, Type: 'Media'},
            { id: 12, Type: "Science"},
            { id: 13, Type: "Technology"},
            { id: 14, Type: "Special Event"}
        ]
      }
    }
      onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.setState({ title: '', selectedOption:'', name:'', email:'', description:'', whoCould:'', programming:'', track:''  });
      }
    
      onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    

  render() {
    return (
        <React.Fragment>
            <ProgammingBody />
      <div className="form-container">
        <section className="content bgcolor-4">
        <form onSubmit={this.onSubmit}>
        <span className="input input--chisato">
            <input 
                className="input__field input__field--chisato" 
                name= 'email'
                value= {this.state.email}
                onChange= {this.onChange}
                type="text" />
					<label className="input__label input__label--chisato" htmlFor="input-13">
						<span className="input__label-content input__label-content--chisato" data-content="What is your email?">What is your email?</span>
					</label>
				</span>
                <br />
            <span className="input input--chisato">
            <input 
                className="input__field input__field--chisato" 
                name= 'name'
                value= {this.state.name}
                onChange= {this.onChange}
                type="text" />
					<label className="input__label input__label--chisato" htmlFor="input-13">
						<span className="input__label-content input__label-content--chisato" data-content="What's your Name?">What's your Name?</span>
					</label>
				</span>
                <br />
            <span className="input input--chisato">
            <input 
            className="input__field input__field--chisato" 
                name= 'whoCould'
                value= {this.state.whoCould}
                onChange= {this.onChange}
                type="text" />
					<label className="input__label input__label--chisato" htmlFor="input-13">
						<span className="input__label-content input__label-content--chisato" data-content="Presenter Ideas">If you are not planning on presenting do you have an idea of who could?</span>
					</label>
				</span>
                <br />
            <span className="input input--chisato">
            <input 
            className="input__field input__field--chisato" 
                name= 'title'
                value= {this.state.title}
                onChange= {this.onChange}
                type="text" />
					<label className="input__label input__label--chisato" htmlFor="input-13">
						<span className="input__label-content input__label-content--chisato" data-content="Suggested Title">Suggested Title for Panel or Event</span>
					</label>
				</span>
                <br />
            <span className="input input--chisato">
            <input 
            className="input__field input__field--chisato" 
                name= 'description'
                value= {this.state.description}
                onChange= {this.onChange}
                type="text" />
                <label className="input__label input__label--chisato" htmlFor="input-13">
						<span className="input__label-content input__label-content--chisato" data-content="Brief Description">Brief Description of Panel/Event</span>
					</label>
				</span>
            <br />
                <select name='programming' value={this.state.programming} onChange={this.onChange}>
                    {this.state.zprogrammingChoices.map((zprogrammingChoices)=> (
                    <option key={zprogrammingChoices.id}
                        name= 'programming'
                        defaultValue= '3'
                        type="text">{zprogrammingChoices.Type}</option>
                        ))}
                </select>
                <br />
                <select name='track' value={this.state.track} onChange={this.onChange}>
                    {this.state.ztrackChoices.map((ztrackChoices)=> (
                    <option key={ztrackChoices.id}
                        name= 'track'
                        defaultValue= '3'
                        type="text">{ztrackChoices.Type}</option>
                        ))}
                </select>
<br /><br />
        <input 
            type="submit" 
            value="Submit" 
            className="btn"
            style={{flex: '1'}} />
        
        
        </form>
      <br />
		</section>
      </div>
      </React.Fragment>
    )
  }
}

export default Form
