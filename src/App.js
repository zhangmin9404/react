import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './page/ReactHooks/entry'
import 'antd/dist/antd.less';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect

} from 'react-router-dom'
import AreaCode from './page/src/cascade/areaCodeCom';
// import ButtonWithRouter from './page/ReactHooks/buttonWithRouter'
import PreNext from './page/src/PreNext/index';
import PreNextDetail from './page/src/PreNext/detail';

export const AppContext = React.createContext({});

const Hello = (props) => {
  const { name } = props
  return (
    <div>{name}</div>
  )

}
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/demo'} component={Demo} />
        <Route path={'/AreaCode'} component={AreaCode} />
        <Route path={'/pre-next/detail'} component={PreNextDetail} />

        <Route path={'/pre-next'} component={PreNext} />

        <Redirect exact from={'/'} to={'/demo'} />
        <Route render={() => <div className="FBV FBAC FBJC" style={{ fontSize: 100 }}>404</div>} />
      </Switch>

    </Router>
  )
}

export default App;
