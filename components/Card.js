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
      <div className={this.props.classProp + (this.state.active ? ' supercard': ' card')} onClick={this.toggleClass}>
        <div className="card-title">{this.props.headline}</div>
        {this.props.headline2 ? <div className="card-title2">{this.props.headline2}</div> : null}
        <img className="card-image" src={`../static/${this.props.image}`} alt='CARLOTA' />
      </div>
    );
  }
}
