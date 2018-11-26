import React from 'react'
import './loteriacards.sass'

export default class Card extends React.Component {

  constructor(props){
    super(props)
    this.toggleClass= this.toggleClass.bind(this);
     this.state = {
         active: false,
     };
  }

  toggleClass() {
       const currentState = this.state.active;
       this.setState({ active: !currentState });
   };


  render () {
    return (
      <div className={this.state.active ? 'supercard': 'card'} onClick={this.toggleClass}>
        <span className="card-title">{this.props.headline}</span>
        <img className="card-image" src={`../static/${this.props.image}`} alt='CARLOTA' />
      </div>
    );
  }
}
