import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import LoteriaCards from '../components/LoteriaCards'
import '../styles.sass'
import data from '../data/english.json'


import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class MyApp extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      toggleShow: true
    }
    this.captureEvent = this.captureEvent.bind(this)
  }

  captureEvent() {
    this.setState({toggleShow: false})
  }

  render() {
    return (
      <div className='app' onWheel={this.captureEvent}
      onScroll={this.captureEvent}
      onTouchEnd={this.captureEvent}>
      {this.state.toggleShow ?
        <div className='slide'>
            <div className='carlota'>
              CARLOTA
            </div>

             <img className="loteria-center" src='/static/lobster.png' alt='CARLOTA' />

            <span className='by-line'>An Artist Residency between Belgium and Mexico</span>
        </div>
        :  <LoteriaCards />  }
      </div>
    )
  }
}
