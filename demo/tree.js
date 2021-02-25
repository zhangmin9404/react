import React from 'react'
import { Component } from 'react'
import Tree from '../src/tree'

export default class TreeDemo extends Component {
  state={
    isTreeDataUpdate:false,
    dataSource:[
    {"id":5,"code":"10021002","name":"二级类目02","parentId":1,showAction:true,state:1},
    {"id":1,"code":"1001","name":"一级类目001","parentId":null,showAction:true,state:1},
    {"id":10,"code":"10021001","name":"二级类目02","parentId":2,showAction:true,state:0},
    {"id":8,"code":"100110011001","name":"三级类目01","parentId":4,showAction:true},
    {"id":4,"code":"10011001","name":"二级类目01","parentId":1,showAction:true},
    {"id":6,"code":"10031003","name":"二级类目03","parentId":1,showAction:true},
    {"id":9,"code":"100110011002","name":"三级类目002","parentId":4,showAction:true},
    {"id":2,"code":"1002","name":"一级类目002","parentId":null,showAction:true,state:0},
    {"id":14,"code":"10031004","name":"二级类目a","parentId":1,showAction:true},
    {"id":3,"code":"1003","name":"一级类目003","parentId":null,showAction:true,state:0},
    {"id":12,"code":"1005","name":"一级类目a","parentId":null,showAction:true},
    {"id":15,"code":"1006","name":"一级类目b","parentId":null,showAction:true,state:0}
  ],
  }
  handleDelete=(item)=>{
    const {isTreeDataUpdate} = this.state
    this.setState({isTreeDataUpdate:!isTreeDataUpdate})
    new Promise((resolve)=>{
      const {dataSource} = this.state
      item.isEditable = null
      dataSource.forEach(p=>{
        if(p.id===item.id){
          data.splice(index, 1);
        }
      })
      resolve(dataSource)
    }).then(dataSource=>{
      const {isTreeDataUpdate} = this.state
      this.setState({dataSource,isTreeDataUpdate:!isTreeDataUpdate})
    })
    
  }
  handleUpdate=(item)=>{
    const {isTreeDataUpdate} = this.state
    this.setState({isTreeDataUpdate:!isTreeDataUpdate})
    new Promise((resolve)=>{
      const {dataSource} = this.state
      item.isEditable = null
      dataSource.forEach(p=>{
        if(p.id===item.id){
          p.name = item.name
        }
      })
      resolve(dataSource)
    }).then(dataSource=>{
      const {isTreeDataUpdate} = this.state
      this.setState({dataSource,isTreeDataUpdate:!isTreeDataUpdate})
    })
  }
  handleAdd=(item)=>{
    let result = JSON.parse(JSON.stringify(item))
    const {isTreeDataUpdate} = this.state
    this.setState({isTreeDataUpdate:!isTreeDataUpdate})
    return new Promise((resolve)=>{
      const {dataSource} = this.state
      result.isEditable = null
      result.key = null
      result.id = Date.now()
      result.parentId = result.parentId*1
      dataSource.push(result)
      resolve(dataSource)
    }).then(dataSource=>{
      const {isTreeDataUpdate} = this.state
      this.setState({dataSource,isTreeDataUpdate:!isTreeDataUpdate})
    })
  }
  handleSort=(list)=>{
    let dataList = list.map((p,index)=>{
      return {id:p.id,orderNo:index}
    })
    console.log(dataList)
  }
  onSelect=(keys)=>{
    this.setState({selectedKeys:keys})
  }
  onExpand=(keys)=>{
    this.setState({expandedKeys:keys})
  }
  render() {
    const {dataSource,isTreeDataUpdate,selectedKeys,expandedKeys} = this.state
    const addActionType = [
      {
        type:1,
        name:'新增子文件夹'
      },
      {
        type:2,
        name:'新增子维度'
      }
    ]
    const options = {
      showLine: true,
      showIcon: true,
      showAction: true,
      dataSource:dataSource, 
      addActionType:addActionType,
      selectedKeys:selectedKeys,
      expandedKeys:expandedKeys,
      isTreeDataUpdate:isTreeDataUpdate,
      handleDelete:this.handleDelete,
      handleUpdate:this.handleUpdate,
      handleSort:this.handleSort,
      handleAdd:this.handleAdd,
      onSelect:this.onSelect,
      onExpand:this.onExpand,
    }
    return <Tree {...options} />
  }
}
