import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FuncButton } from './page/ReactHooks'

import test1 from './page/Svg/text1.svg'
import { Navbar } from './page/ReactHooks/NavBar';
import { Message } from './page/ReactHooks/Message';
import { Example } from './page/ReactHooks/UseEffect';

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


    </div>
  )
}

export default App;
