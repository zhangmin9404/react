import { useEffect, useRef, useState } from "react";
import { Cascader, message } from "antd";
import * as React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom'

import utilConfig from "../../../util/request.config.util";
// import { arearegionApi } from '../../services/api'


const requestUrl = utilConfig.baseData.getAddr() + '/api/v1'

const AreaCode = (history) => {
  console.log('history', history)
  const [_, reRender] = useState(1)
  const areaList = useRef([])
  const getOption = (code) => {
    // arearegionApi({ parentAreaCode: code }).then(response => {
    //   if (response.success) {
    //     const { data = [] } = response
    //     areaList.current = data.map((i) => ({ ...i, isLeaf: false }))
    //     reRender(pre => ++pre)

    //   }
    // })
    axios({
      method: 'POST',
      url: requestUrl + '/central/instance/region',
      data: { parentAreaCode: code }
    })
      .then(response => {
        if (response.data.success) {
          const { data = [] } = response.data
          areaList.current = data.map((i) => ({ ...i, isLeaf: false }))
          reRender(pre => ++pre)

        }
      })
      .catch(err => {
        message.error(err)
      })
  }
  const loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    // arearegionApi({ parentAreaCode: targetOption.areaCode }).then(response => {
    //   if (response.success) {
    //     const { data = [] } = response
    //     targetOption.loading = false;
    //     targetOption.children = data.map((i) => ({ ...i, isLeaf: i.areaLevel === 'street' }))
    //     reRender(pre => ++pre)

    //   }
    // })
    axios({
      method: 'POST',
      url: requestUrl + '/central/instance/region',
      data: { parentAreaCode: targetOption.areaCode }
    })
      .then(response => {
        if (response.data.success) {
          const { data = [] } = response.data
          targetOption.loading = false;
          targetOption.children = data.map((i) => ({ ...i, isLeaf: i.areaLevel === 'street' }))
          reRender(pre => ++pre)

        }
      })
      .catch(err => {
        message.error(err)
      })
  }
  useEffect(() => {
    getOption(0)
  }, [])
  return <Cascader
    // {...props}
    changeOnSelect={true}
    style={{ textAlign: 'left' }}
    loadData={loadData}
    options={areaList.current}
    placeholder={'请选择所属区域'}
    fieldNames={{
      label: 'areaName',
      value: 'areaCode'
    }} />
}
export default withRouter(AreaCode)