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

      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => { history.push('/await-promise') }}>await</Button>
      </div>
      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => { history.push('/echart-demo') }}>echartDemo</Button>
      </div>
      <div className="ScrollContent">
        滚动条出现挤压页面宽度，影响布局滚动条出现挤压页面宽度，影响布局滚动条出现挤压页面宽度，影响布局滚动条出现挤压页面宽度，影响布局滚动条出现挤压页面宽度，影响布局滚动条出现挤压页面宽度，影响布局
      </div>
      <div>
        <Button onClick={() => {
          window.history.pushState({ stepParams: 2 }, 'http://localhost:9000//#/active-cental-system?requestCode=048b318ed8cc571ac117e5f985c27572d058496050ee0a3d61a05c865295b1126f4a468fcbba8d0fa1c51832291496cb6711b0f58a1a0d6905b778cfb57243afa4c4173986d9338d1c8b53e0553da031ecf6845efaf3ccee4f03e17f25abf4008e495abd56db3bf4006a4a&timestamp=1602660894468&req=7ddcce588ce27c8501caf4eb011e7809')
          window.location.href = 'http://localhost:9000/active-cental-system?requestCode=048b318ed8cc571ac117e5f985c27572d058496050ee0a3d61a05c865295b1126f4a468fcbba8d0fa1c51832291496cb6711b0f58a1a0d6905b778cfb57243afa4c4173986d9338d1c8b53e0553da031ecf6845efaf3ccee4f03e17f25abf4008e495abd56db3bf4006a4a&timestamp=1602660894468&req=7ddcce588ce27c8501caf4eb011e7809'
        }}>跳转</Button>
      </div>


    </div>
  )
}

export default App;
