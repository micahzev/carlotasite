import React from 'react'
import Headroom from 'react-headroom'
import { CSSTransitionGroup } from 'react-transition-group'
import Section from '../components/section'
import Burger from '../components/Menu'
import '../styles.sass'
import data from '../data/english.json'

import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class MyApp extends React.Component {

  state = {
      menu: data.sections.map(section => section.menu),
      activeSection: data.sections[0],
      burgerClass: 'burgerMenu',
      showMenu: true
    }

  setActiveSection(i) {
    console.log(this.state.activeSection)
    this.setState({
      activeSection: data.sections[i]
    })
    console.log(this.state.activeSection)
  }

  toggleSidenav() {
    let css = (this.state.burgerClass === "burgerMenu") ? "burgerClose" : "burgerMenu";
    this.setState({
      burgerClass:css
    })
  }


  render() {
    return (
      <div id="outer-container">
        <Burger menu={this.state.menu} setActiveSection={this.setActiveSection.bind(this)} />
        <div id="page-wrap">
          <div className='app-lander'>
            <div className='header'>
              <div className='carlota'>
                <span className="carlotaC">C</span> A R L O T A
              </div>
            </div>
            <div className="image-box">
              <img className="loteria" src='/static/lobster.png' alt='CARLOTA' />
            </div>

            <span className='by-line'>An Artist Residency between Belgium and Mexico</span>
          </div>
          <div name='scrollToMe'>
            <Section info={this.state.activeSection}/>
          </div>
          <div className='foot'>
          <div>CARLOTA Residency</div>
          <div>&#127463;&#127466; &#129309; &#127474;&#127485;</div>
          </div>
        </div>
      </div>
    )
  }
}
