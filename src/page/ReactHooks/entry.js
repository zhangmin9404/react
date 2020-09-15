import React from 'react';
import { ButtonDefault, FuncButton } from './index'
import { Button } from 'antd'
import { Navbar } from './NavBar';
import { Message } from './Message';
import { Example } from './UseEffect';
import AreaCode from '../src/cascade/areaCodeCom';
import { useHistory } from 'react-router-dom'


import { ButtonWithRouter } from './buttonWithRouter'
export const AppContext = React.createContext({});

const Hello = (props) => {
  const { name } = props
  return (
    <div>{name}</div>
  )

}
const App = () => {
  const history = useHistory()
  return (
    <div className="App">
      <ButtonDefault />
      <FuncButton />
      <AppContext.Provider value={{ userName: '测试共享数据' }}>
        <Navbar />
        <Message />
      </AppContext.Provider>

      <Example />
      -----------------------------------

      <Hello name='hooks test' />
      级联动态加载数据:
      <AreaCode />
      <div>
        <ButtonWithRouter />
      </div >
      <Button onClick={() => { history.push('/pre-next') }}>上一个下一个</Button>

    </div>
  )
}

export default App;
