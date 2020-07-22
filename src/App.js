import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FuncButton } from './page/ReactHooks'

import test1 from './page/Svg/text1.svg'
import { Navbar } from './page/ReactHooks/NavBar';
import { Message } from './page/ReactHooks/Message';

export const AppContext = React.createContext({});
function App () {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Button />
      <FuncButton />
      <AppContext.Provider value={{ userName: '测试共享数据' }}>
        <Navbar />
        <Message />
      </AppContext.Provider>


    </div>
  );
}

export default App;
