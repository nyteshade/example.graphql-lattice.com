import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'

import Home from './pages/home'

render((
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
    </div>
  </Router>
), document.querySelector('#react-root'));
