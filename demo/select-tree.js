import React, { Component } from 'react'
import SelectTree from '../src/select-tree'

export default class Demo extends Component {
  state = {
    value: null
  }
  onChange = value => {
    this.setState({ value });
  };
  render() {
    const fieldMapping = {
      title: 'name',
      value: 'id',
      key: 'id',
    }
    const dataSource = [
      { "id": 5, "code": "10021002", "name": "二级类目02", "parentId": 1, showAction: true, state: 1, disabled: true },
      { "id": 1, "code": "1001", "name": "一级类目001", "parentId": null, showAction: true, state: 1, disableCheckbox: true },
      { "id": 10, "code": "10021001", "name": "二级类目02", "parentId": 2, showAction: true, state: 0 },
      { "id": 8, "code": "100110011001", "name": "三级类目01", "parentId": 4, showAction: true },
      { "id": 4, "code": "10011001", "name": "二级类目01", "parentId": 1, showAction: true },
      { "id": 6, "code": "10031003", "name": "二级类目03", "parentId": 1, showAction: true },
      { "id": 9, "code": "100110011002", "name": "三级类目002", "parentId": 4, showAction: true },
      { "id": 2, "code": "1002", "name": "一级类目002", "parentId": null, showAction: true, state: 0 },
      { "id": 14, "code": "10031004", "name": "二级类目a", "parentId": 1, showAction: true },
      { "id": 3, "code": "1003", "name": "一级类目003", "parentId": null, showAction: true, state: 0 },
      { "id": 12, "code": "1005", "name": "一级类目a", "parentId": null, showAction: true },
      { "id": 15, "code": "1006", "name": "一级类目b", "parentId": null, showAction: true, state: 0 }
    ]
    return (
      <div className="demo" style={{ height: '100%' }}>
        <SelectTree
          treeData={dataSource}
          fieldMapping={fieldMapping}
          style={{ width: '100%' }}
          value={this.state.value}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="Please select"
    
          onChange={this.onChange}
        />
        <span>{this.state.value}</span>
      </div>
    )
  }
}
