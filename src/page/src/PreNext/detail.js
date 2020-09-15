import React, { Fragment, PureComponent, useEffect, useState } from "react";

import {
  message,
  Card,
  Col,
  Button,
  Table,
  Modal,
  Icon,
  Form,
} from "antd";

// import { apiListApi, approveApi } from '@/services/interconnect-apply';
import { useHistory } from 'react-router-dom'
import axios from 'axios';

import { isEmpty, get } from 'lodash'


const PreNextDetail = (props) => {
  const history = useHistory()
  console.log(history.location)
  const { total, params, index } = history.location.state
  const [info, setInfo] = useState({})
  const [queryParams, setQueryParams] = useState({ total, params, spinning: false, isInit: true })
  useEffect(() => {
    if (!queryParams.isInit && !queryParams.spinning) {
      setQueryParams(pre => ({ ...pre, spinning: true }))

      axios({
        method: 'GET',
        url: 'http://localhost:3000/JsonData/table-list.json',
        data: queryParams.params
      })
        .then(res => {
          const { data: { items = [], total = 0 } } = res
          if (get(items, '0')) {
            setInfo(get(items, '0'))
          } else {
            history.push({ pathname: '/centre-interconnect/interconnect-apply' })
            setQueryParams((pre) => ({ ...pre, total }))
          }
        })
        .catch(err => {
          message.error(err)
        })
      // apiListApi(queryParams.params).then(res => {
      //   const { data: { items = [], total = 0 } } = res
      //   if (get(items, '0')) {
      //     setInfo(get(items, '0'))
      //   } else {
      //     history.push({ pathname: '/centre-interconnect/interconnect-apply' })
      //     setQueryParams((pre) => ({ ...pre, total }))
      //   }

      // }).finally(() => {
      //   setQueryParams((pre) => ({ ...pre, spinning: false }))
      // })
    }
  }, [history, queryParams.isInit, queryParams.params, queryParams.spinning])

  // useEffect(() => {
  //   // setInfo(history.location.state.item)
  //   setQueryParams({
  //     total,
  //     params: { ...params, page: (params.page - 1) * params.size + index + 1, size: 1 },
  //     isInit: true,
  //     spinning: false
  //   })
  // }, [history.location.state.item, index, params, total])
  const handleState = async (state, text) => {
    // const result = await confirmCom(state, info)
    // const postData = {
    //   applicantZsCode: get(info, 'zsCode'),
    //   state: state ? 2 : 3,
    //   zsInterconnectedApplyId: get(info, 'zsInterconnectedApplyId'),
    // }
    if (!state) {
      // postData.remark = result
    }
    // approveApi(postData).then(res => {
    //   if (res.code === '200') {
    //     message.success('成功')
    //     setQueryParams(pre => ({
    //       ...pre,
    //       isInit: false,
    //       params: { page: pre.params.page, size: 1 }
    //     }))
    //   } else {
    //     message.warn(res.message)
    //   }
    // })


  }


  const handleSlide = (page) => {
    setQueryParams(pre => ({
      ...pre,
      isInit: false,
      params: { ...pre.params, page }
    }))
  }
  return (
    <Card bordered={false}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div >
            {
              queryParams.params.page !== 1 &&
              <a onClick={() => { handleSlide(queryParams.params.page - 1) }}>上一个</a>
            }
          </div>

          <div >
            {
              <>
                <Button style={{ marginRight: 16 }} onClick={() => handleState(false)}>不通过</Button>
                <Button type={"primary"} onClick={() => handleState(true)}>通过</Button></>
            }
          </div>
          <div >
            {
              queryParams.params.page !== total &&
              <a onClick={() => handleSlide(queryParams.params.page + 1)}>下一个</a>
            }
          </div>
        </div>
      </div>

    </Card>
  )

}

export default PreNextDetail;
