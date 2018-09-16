import { CSSTransitionGroup } from 'react-transition-group'
import Headroom from 'react-headroom'
import Section from '../components/section'
import '../styles.sass'
import data from '../data/english.json'

import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const headings = data.sections.map(section => section.headline)

export default () =>
  <CSSTransitionGroup
      transitionName='hello'
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
    <div className='app-container'>
      <Headroom className='header'>
        <div className='header-section'>
          <div className='carlota' onClick={scroll.scrollToTop}>
            CARLOTA
          </div>
          {headings.map((headline, i) => <Link className='header-link' key={i} activeClass="activeLink" to={headline} spy={true} smooth={true} offset={0} duration={500}>{headline}</Link>)}
        </div>
      </Headroom>
      <img src='/static/lobster.png' alt='CARLOTA' />
      <span className='by-line'>An Artist Residency between Belgium and Mexico</span>
    </div>
    {data.sections.map((info, i) => <Section name={info.headline} info={info} key={i} />)}
    <div className='foot'>
      Laetitia & Sébastien
    </div>
  </CSSTransitionGroup>
