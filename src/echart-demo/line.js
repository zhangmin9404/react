import React, { Component } from 'react';
import { Row, Modal, Col, Input, Select, DatePicker } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts'


class DetailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cockpitData: [],
      startTime: '',
      endTime: '',
      cockpitId: this.props.cockpitId,
    }
  }

  barOption (detailData) {

    return {
      backgroundColor: '#072848',
      grid: {
        left: '5%',
        right: '10%',
        top: '10%',
        bottom: '20%',
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        borderColor: '#21619F',
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: '#0B1D30',
        padding: 10,
      },
      legend: {
        show: true,
        x: 'center',
        y: 'bottom',
        icon: 'circle',
        itemWidth: 6,
        itemHeight: 6,
        textStyle: {
          color: '#fff',
          fontSize: 14,

        },
        data: ['浏览量', '访问用户数']
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          color: '#fff',
          fontSize: 14,

        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#3196FA'
          }
        },
        axisTick: {
          show: true,
          inside: true,
        },
        splitLine: {
          show: false,

        },
        // data: dateTime,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      }],
      yAxis: [{
        type: 'value',
        name: '',
        min: 0,
        max: 1000,
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#fff',
            fontSize: 14,

          }
        },
        axisLine: {
          lineStyle: {
            color: '#3196FA'
          }
        },
        axisTick: {
          show: true,
          inside: true,
        },
        splitLine: {
          show: false,
        }
      },

      ],
      series: [{
        name: '浏览量',
        type: 'line',
        stack: '总量',
        symbol: 'none',
        smooth: true,
        itemStyle: {
          normal: {
            color: '#0092f6',
            lineStyle: {
              color: "#5EAFFF",
              width: 1
            },

          }
        },
        markPoint: {
          itemStyle: {
            normal: {
              color: 'red'
            }
          }
        },
        // data: visitCount,
        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
      },
      {
        name: '访问用户数',
        type: 'line',
        stack: '总量',
        symbol: 'none',
        smooth: true,
        itemStyle: {
          normal: {
            color: ' #FFB99E',
            lineStyle: {
              color: " #FFB99E",
              width: 1
            },

          }
        },
        // data: visitUser,
        data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410]
      },

      ]
    }
  }

  // useEffect(() => {
  //   const myChart = echarts.init(document.getElementById(id));
  //   render(myChart)
  // }, [])
  // componentDidMount () {
  //   const myChart = echarts.init(document.getElementById('echart'));
  //   myChart.setOption(this.barOption);

  // }



  render () {
    return (
      <div className="detailWrap" style={{ height: '100vh' }}>
        {<ReactEcharts option={this.barOption(this.state.detailData)} />}
        <div id="echart" style={{ height: '100%' }}></div>

      </div>




    )
  }
}

export default DetailModal