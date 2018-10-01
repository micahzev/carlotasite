import React from 'react'
import { push as Menu } from 'react-burger-menu'
import './menustyle.sass'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Burger extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  clickedLink(i) {
    scroll.scrollToTop()
    this.props.setActiveSection(i)
    this.closeMenu()
  }

  render () {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right>
      {this.props.menu.map((menuItem, i) => (
        <div key={i} className='header-link' onClick={() => this.clickedLink(i)}>
          {menuItem}
        </div>
      ))}
      </Menu>
    );
  }
}
