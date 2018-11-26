import React from 'react'
import Headroom from 'react-headroom'
import { CSSTransitionGroup } from 'react-transition-group'
import Section from '../components/section'
import LoteriaCards from '../components/LoteriaCards'
import Burger from '../components/Menu'
import '../styles.sass'
import data from '../data/english.json'

import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class MyApp extends React.Component {

  state = {
      menu: data.sections.map(section => section.headline),
      activeSection: data.sections[0],
      burgerClass: 'burgerMenu',
      showMenu: true
    }

  setActiveSection(i) {
    this.setState({
      activeSection: data.sections[i]
    })
  }

  toggleSidenav() {
    let css = (this.state.burgerClass === "burgerMenu") ? "burgerClose" : "burgerMenu";
    this.setState({
      burgerClass:css
    })
  }

  render() {
    return (
      <div className='app'>
        <div className='slide'>
          <img className="loteria-center" src='/static/lobster.png' alt='CARLOTA' />
        </div>
        <div className='slide'>
          <div className='header'>
            <div className='carlota'>
              CARLOTA
            </div>
            <span className='by-line'>An Artist Residency between Belgium and Mexico</span>
          </div>

          <img className="loteria" src='/static/lobster.png' alt='CARLOTA' />

        </div>

        <LoteriaCards />
      </div>
    )
  }
}
