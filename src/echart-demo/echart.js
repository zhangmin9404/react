import React, { useEffect } from 'react';
import { uniqueId, uniq } from 'lodash'
import hangzhou from './map/hangzhou.json'
import zhengzhou from './map/zhengzhou.json'
import puer from './map/puer.json'
import echarts from 'echarts'

echarts.registerMap('hangzhou', hangzhou);
echarts.registerMap('zhengzhou', zhengzhou);
echarts.registerMap('puer', puer);

export default function echart (option, onPointClick) {

  return function () {
    const id = uniqueId('chart-')

    function render (myChart) {
      myChart.setOption(option);
      myChart.on('click', (e) => {
        if (e.componentType === 'series' && e.componentSubType === 'scatter') {
          onPointClick && onPointClick(e)
        }
      })
    }

    useEffect(() => {
      const myChart = echarts.init(document.getElementById(id));
      render(myChart)
    }, [id])
    return <div id={id} style={{ height: '100%' }}></div>
  }
}
