import { CSSTransitionGroup } from 'react-transition-group'
import "../styles.sass"

export default () =>
  <CSSTransitionGroup
      transitionName="hello"
      transitionAppear={true}
      transitionAppearTimeout={3000}
      transitionEnter={false}
      transitionLeave={false}>
    <div>
      <img src="/static/camaron.jpg" alt="CARLOTA" />
    </div>
  </CSSTransitionGroup>
