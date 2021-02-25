import React, { Component } from 'react'
import IPInput from '../src/ip-input'
import TableDemo from './TableDemo'
import TreeDemo from './tree'
import SelectTreeDemo from './select-tree'
import CustomerHeader from '../src/customer-header'
import OperationHeader from '../src/operation-header'
import AuthorizedComm from '../src/authorized-comm'
import './demo.styl'
import { InputNumber, ConfigProvider } from 'antd'
import 'antd/dist/antd.css'
import zhCN from 'antd/es/locale/zh_CN'
import Layout from '../src/layout'
import P404 from '../src/page-404'
import UploadFile from '../src/upload-file'

export default class Demo extends Component {
  constructor() {
    super()
    this.state = {
      tableHeight: 200,
      reloader: true
    }
  }

  changeTableHeight = (tableHeight) => {

    this.setState({
      tableHeight,
      reloader: false
    })
    setTimeout(() => {
      this.setState({ reloader: true })
    }, 100)
  }

  render () {
    const { tableHeight, reloader } = this.state
    let ipValue1 = ['127', '0', '0', '1']
    let ipValue2 = ['192', '168', '1', '1', '9999']
    return (
      <ConfigProvider locale={zhCN}>
        <div className="demo">
          <h2>前端公共组件库</h2>

          <h3>目录</h3>
          <ul>
            <li><a href="#IPInput">IPInput</a></li>
            <li><a href="#Table">Table</a></li>
            <li><a href="#CustomerHeader">CustomerHeader</a></li>
            <li><a href="#Layout">Layout</a></li>
          </ul>

          <h3>组件们</h3>

          <div className="pane">
            <div className="pane-title" id="IPInput">IPInput</div>
            <div className="pane-body">
              <div className="pane-inline" style={{ width: 300 }}>
                <span>无端口号：&nbsp;</span>
                <IPInput
                  hidePort
                  value={ipValue1}
                  onChange={value => {
                    ipValue1 = value
                  }}
                />
              </div>
              <div className="pane-inline">
                <span>有端口号：&nbsp;</span>
                <IPInput
                  value={ipValue2}
                  onChange={value => {
                    ipValue2 = value
                  }}
                />
              </div>
            </div>
          </div>
          <div className="pane">
            <div className="pane-title" id="Table">Table</div>
            <div className="pane-body">
              <InputNumber onChange={this.changeTableHeight} value={tableHeight} />
              <div className="pane-inline" style={{ height: tableHeight }}>
                {reloader && <TableDemo />}
              </div>
            </div>
          </div>

          <div className="pane">
            <div className="pane-title" id="Tree">Tree</div>
            <div className="pane-body">
              <div className="pane-inline" >
                <TreeDemo />
              </div>
            </div>
          </div>

          <div className="pane">
            <div className="pane-title" id="Tree">SelectTree</div>
            <div className="pane-body">
              <div className="pane-inline" >
                <SelectTreeDemo />
              </div>
            </div>
          </div>

          <div className="pane">
            <div className="pane-title" id="OperationHeader">OperationHeader</div>
            <div className="pane-body">
              <div className="pane-inline">
                <CustomerHeader userInfoPath="/login" serverPath="http://192.168.1.110:18089" loginPath="http://172.18.109.177:7780" />
              </div>
            </div>
          </div>


          <div className="pane">
            <div className="pane-title" id="OperationHeader">OperationHeader</div>
            <div className="pane-body">
              <div className="pane-inline">
                <OperationHeader userInfoPath="/login" serverPath="http://192.168.1.110:18089" loginPath="http://172.18.109.177:7780" />
              </div>
            </div>
          </div>

          <div className="pane">
            <div className="pane-title" id="Layout">Layout</div>
            <div className="pane-body">
              <Layout
                aside={<div>我是侧边栏</div>} asideWith={'300px'}
                asidePosition={'left'}
                crumbs={<div>我是面包屑导航栏/xxxx</div>}
                header={<div>我是搜索条件栏</div>}
                section={<div>我是主体部分《〈反垄断法〉修订草案（公开征求意见稿）》一共八章64条，与现行《反垄断法》比较，有多处增加修改，其中第21条在认定经营者具有市场支配地位时，征求意见稿特别提及，“认定互联网领域经营者具有市场支配地位还应当考虑网络效应、规模经济、锁定效应、掌握和处理相关数据的能力等因素。”
                征求意见稿中对违法处罚金额有较大提升，“第53条规定：经营者违反本法规定，达成并实施垄断协议的，由反垄断执法机构责令停止违法行为，没收违法所得，并处上一年度销售额百分之一以上百分之十以下的罚款；对于上一年度没有销售额的经营者或者尚未实施所达成的垄断协议的，可以处五千万元以下的罚款。”现行《反垄断法》46条规定对“尚未实施所达成的垄断协议的，可以处五十万元以下的罚款。”
                  征求意见稿中规定“行业协会违反本法规定，组织经营者达成垄断协议的，由反垄断执法机构责令停止违法行为，可以处五百万元以下的罚款”，现行《反垄断法》中对行业协会组织经营者达成垄断协议的罚款上限为五十万元。同时征求意见稿还新增公平竞争审查等条款。征求意见稿第9条规定：国家建立和实施公平竞争审查制度，规范政府行政行为，防止出台排除、限制竞争的政策措施。</div>}
                footer={<div>我是底部分页</div>}
              />
            </div>
          </div>
          <div className="pane" >
            <div className="pane-title" id="OperationHeader">404</div>
            <div className="pane-body">
              <div className="pane-inline" style={{ position: 'relative', height: '500px' }}>
                <P404 />
              </div>
            </div>
          </div>
          <div className="pane" >
            <div className="pane-title" id="OperationHeader">UploadFile</div>
            <div className="pane-body">
              <div className="pane-inline" >
                <UploadFile
                  params={{
                    applyType: 1
                  }}
                  getFileData={(params) => {
                    console.log('params', params)
                  }}
                  downContent={
                    <a href={`${window.serverUrl || ''}`}>
                      下载申请模版
                    </a>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </ConfigProvider>
    )
  }
}
