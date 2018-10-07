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
      <div id="outer-container">
        <Burger menu={this.state.menu} setActiveSection={this.setActiveSection.bind(this)} />
        <div id="page-wrap" className='page-container'>
          <div className='app-lander'>
            <div className='header'>
              <div className='carlota'>
                CARLOTA
              </div>
              <span className='by-line'>An Artist Residency between Belgium and Mexico</span>
            </div>

            <div className='menu'>
              {this.state.menu.map((menuItem, i) => (
                <div
                  key={i}
                  className={
                    'onpage-button ' + (menuItem == this.state.activeSection.headline ? 'active' : 'inactive')
                  }
                  onClick={() => this.setActiveSection(i)}>
                  {menuItem}
                </div>
              ))}
            </div>

            <img className="loteria" src='/static/lobster.png' alt='CARLOTA' />

          </div>
          <Section info={this.state.activeSection}/>
          <div className='foot'>
            <div>CARLOTA Residency</div>
            <div>&#127463;&#127466; &#129309; &#127474;&#127485;</div>
          </div>
        </div>
      </div>
    )
  }
}
