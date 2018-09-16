import { CSSTransitionGroup } from 'react-transition-group'
import Headroom from 'react-headroom'
import Section from '../components/section'
import '../styles.sass'
import data from '../data/english.json'

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
          <div className="carlota">
            CARLOTA
          </div>
          {headings.map((headline, i) => <div className='header-link' key={i}>{headline}</div>)}
        </div>
      </Headroom>
      <img src='/static/lobster.png' alt='CARLOTA' />
      <span className='by-line'>An Artist Residency between Belgium and Mexico</span>
    </div>
    {data.sections.map((info, i) => <Section info={info} key={i} />)}
    <div className='foot'>
      Laetitia & Sébastien
    </div>
  </CSSTransitionGroup>
