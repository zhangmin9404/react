import React from 'react';
import { Button, FuncButton } from './index'
import { Navbar } from './NavBar';
import { Message } from './Message';
import { Example } from './UseEffect';
import AreaCode from '../src/cascade/areaCodeCom';

import { ButtonWithRouter } from './buttonWithRouter'
export const AppContext = React.createContext({});

const Hello = (props) => {
  const { name } = props
  return (
    <div>{name}</div>
  )

}
const App = () => {
  return (
    <div className="App">
      <Button />
      <FuncButton />
      <AppContext.Provider value={{ userName: '测试共享数据' }}>
        <Navbar />
        <Message />
      </AppContext.Provider>

      <Example />
      -----------------------------------

      <Hello name='hooks test' />
      {/* <AreaCode /> */}
      <ButtonWithRouter />
    </div>
  )
}

export default App;
