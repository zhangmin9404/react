import React, { Component } from 'react'
import Table from '../src/table'

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
export default class Demo extends Component {
  paginationChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
  }
  onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }
  render() {
    const pagination = {
      defaultCurrent: 2,
      total: 500,
      showTotal: (total, range) => `共 ${total} 条`,
      onChange: this.paginationChange,
      onShowSizeChange: this.onShowSizeChange,
      showSizeChanger: true
    }
    return (
      <div className="demo" style={{ height: '100%' }}>
        <Table dataSource={dataSource} columns={columns} pagination={pagination} />
      </div>
    )
  }
}
