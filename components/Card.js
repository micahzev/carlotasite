import React from 'react'
import './loteriacards.sass'

export default class Card extends React.Component {

  constructor(props){
    super(props)

     this.state = {
         active: false,
     };
  }



  render () {
    return (
      <div onClick={this.props.buttonClick} className={this.props.classProp + ' card'}>
        <div className="card-title">{this.props.headline}</div>
        {this.props.headline2 ? <div className="card-title2">{this.props.headline2}</div> : null}
        <img className="card-image" src={`../static/${this.props.image}`} alt='CARLOTA' />
      </div>
    );
  }
}
