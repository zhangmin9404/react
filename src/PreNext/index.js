import React, { Fragment, useState, useEffect } from 'react';
import { Table, Card, Button, Modal, message, Divider, Dropdown, Menu, } from 'antd'
import { apiColumn } from './apiColumn'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './index.styl'
import axios from 'axios';



const SearchTable = (props) => {
  const history = useHistory()
  const [pageParams, setPageParams] = useState({ page: 1, size: 10 });
  const [tableData, setTableData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedAPIRowKeys, setSelectedAPIRowKeys] = useState(props.resourceAPISelectArray);
  const [selectedIndicatorRowKeys, setSelectedIndicatorRowKeys] = useState(props.resourceIndictorSelectArray);
  const [allSelectedRows, setAllSelectedRows] = useState([]);
  const [searchValue, setSearchValue] = useState((pre) => ({ ...pre, ...history.location.state && history.location.state.searchValue }))
  const [searchType, setSearchType] = useState(props.searchType)



  const option = [{
    title: '操作',
    fixed: 'right',
    width: 180,
    render: (text, record, index) => (
      <Fragment>

        {
          <Link to={{
            pathname: '/pre-next/detail',
            state: {
              id: 1,
              record,
              pageParams,
              total: totalCount,
              params: { ...pageParams, ...searchValue },
              index,

            }
          }}>
            详情&nbsp;&nbsp;
          </Link>
        }
      </Fragment>
    ),
  }]

  const getData = () => {
    const finalParams = {
      page: pageParams.page,
      size: pageParams.size,
      ...searchValue,
    }

    axios({
      method: 'GET',
      url: 'http://localhost:3000/JsonData/table-list.json',
      data: finalParams
    })
      .then(response => {
        if (response.data.data) {
          setTableData(response.data.data.items)
          setTotalCount(response.data.data.total)
        }
      })
      .catch(err => {
        message.error(err)
      })

  }
  const pagination = {
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: () => `共有${totalCount}条`,
    pageSize: pageParams.size,
    current: pageParams.page,
    total: totalCount,
    onChange: (page) => {
      setPageParams({ page, size: pageParams.size })

    },
    onShowSizeChange: (current, size) => {
      setPageParams({ page: pageParams.page, size })
    },
  };

  useEffect(() => {
    getData()
  }, [pageParams, searchValue])


  const onRowSelectionChange = (selectedRowKeys, selectedRows) => {
    if (searchType == 'api') {
      setSelectedAPIRowKeys(selectedRowKeys)
      props.onGetResourceSelectAPIIds(selectedRowKeys)

    } else {
      setSelectedIndicatorRowKeys(selectedRowKeys)
      props.onGetResourceSelectIndicatorIds(selectedRowKeys)
    }
  }

  /**
    * 用户手动选择/取消选择某行的回调
    * @param record
    */
  const onSelect = (record) => {
    let flag = true;
    for (let i = 0; i < allSelectedRows.length; i++) {
      // 1. 如果选择的行在已选择行集合中就删除该记录，表示取消选中行
      if (record[searchType == 'api' ? 'apiCode' : 'indicatorCode'] === allSelectedRows[i][searchType == 'api' ? 'apiCode' : 'indicatorCode']) {
        allSelectedRows.splice(i, 1);
        flag = false;
      }
    }
    // 2. 如果第一步查询没有在已选集合中，就新增
    if (flag) {
      allSelectedRows.push(record);
    }
    setAllSelectedRows(allSelectedRows)
  };

  /**
  * 用户手动选择/取消选择所有行的回调
  * @param selected  false:反选，true:选择
  * @param selectedRows
  * @param changeRows
  */
  const onSelectAll = (selected, selectedRows, changeRows) => {
    // 加入新选择的所有行
    if (selected && changeRows.length > 0) {
      changeRows.forEach((item) => {
        allSelectedRows.push(item);
      });
    }
    // 取消新选择的所有行
    if (!selected && changeRows.length > 0) {
      const a = new Set(changeRows);
      const b = new Set(allSelectedRows);
      allSelectedRows = [...b].filter(x => [...a].every(y => y.apiCode !== x.apiCode));
    }
    setAllSelectedRows(allSelectedRows)
  };

  const newColumn = apiColumn({ pageParams }).concat(option);
  const rowSelection = {
    selectedRowKeys: selectedAPIRowKeys,
    onChange: onRowSelectionChange,
    onSelect: onSelect,
    onSelectAll: onSelectAll,
  };

  return (
    <div bordered='false'>
      <Card bordered={false}>
        <Table
          rowKey='id'
          rowSelection={rowSelection}
          columns={newColumn}
          dataSource={tableData}
          pagination={pagination}
          scroll={{ x: 1150 }}
        />
      </Card>
    </div>
  )
}
export default SearchTable