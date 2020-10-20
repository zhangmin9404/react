import React, { Component } from 'react';
import { Row, Modal, Col, Input, Select, DatePicker } from 'antd';
import ReactEcharts from 'echarts-for-react';
import greenImage from './green.png'
import _ from 'lodash'
import echarts from 'echarts/lib/echarts';
import 'echarts/map/js/china.js';



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
    const data = [
      {
        value: [120.12, 30.16],
        itemStyle: { color: '#00FCA3' },
        symbolSize: 24,
        // symbol: 'path://M22.4281059,18.1946137 C22.2312373,17.9919538 22.0981253,17.7512436 22.014916,17.4969776 L19.2980888,17.4969776 C19.1394113,17.9789273 18.8430514,18.393745 18.4607686,18.6993523 L20.2356714,21.8640765 C20.5055231,21.7994734 20.7921423,21.7924162 21.0785617,21.8713689 C22.0088317,22.1281048 22.5612179,23.1125583 22.3118186,24.0704295 C22.0626192,25.0283007 21.1060696,25.5966719 20.175571,25.339936 C19.2450439,25.0834353 18.6929148,24.0989819 18.9423426,23.1411106 C19.0206959,22.8395025 19.1749744,22.5825313 19.3708433,22.3715791 L17.5643193,19.15075 C17.3637944,19.2043555 17.1562425,19.2404356 16.9391785,19.2404356 C16.4320675,19.2404356 15.9609482,19.0836182 15.5672395,18.81562 L11.7408124,22.7545806 C11.8734102,23.0078467 11.9556483,23.2928998 11.9556483,23.6010064 C11.9556483,24.5924583 11.1748008,25.3965408 10.2114241,25.3965408 C9.24804752,25.3965408 8.4672,24.5924583 8.4672,23.6010064 C8.4672,22.6090547 9.24804752,21.8054427 10.2114241,21.8054427 C10.5116974,21.8054427 10.79009,21.8905999 11.0368328,22.0283922 L14.8620601,18.0906373 C14.6004922,17.6848175 14.4474134,17.1986041 14.4474134,16.6753403 C14.4474134,16.1488125 14.6019204,15.6598351 14.866202,15.2525156 L11.9785287,12.2802184 C11.6799694,12.4635886 11.3319929,12.5712995 10.9589651,12.5712995 C9.85810605,12.5712995 8.96557015,11.6524783 8.96557015,10.5192351 C8.96557015,9.38575658 9.85813464,8.4672 10.9589651,8.4672 C12.0598242,8.4672 12.9523886,9.38575658 12.9523886,10.5192351 C12.9523886,10.8962379 12.8518691,11.2484228 12.6793376,11.5522657 L15.5733238,14.5311202 C15.9658328,14.2655921 16.4344955,14.1103038 16.9391785,14.1103038 C17.2000323,14.1103038 17.4511741,14.1518826 17.6874336,14.2282771 L19.2299331,11.478106 C19.089023,11.3087621 18.9783058,11.1088661 18.9184911,10.8791829 C18.7048263,10.05831 19.1781166,9.21414838 19.9757888,8.99419821 C20.2690065,8.91330477 20.5648808,8.92956578 20.8330472,9.02151551 C20.9386513,9.00675417 21.3189916,9.23370275 21.3591252,9.33615011 C21.568391,9.52875352 21.7287538,9.78251957 21.8066214,10.0823634 C22.0205147,10.9034714 21.5469674,11.7473979 20.7495522,11.9675833 C20.5276608,12.0287165 20.3054838,12.0301868 20.09379,11.990137 L18.558346,14.7277815 C19.044519,15.1566255 19.3662159,15.7746031 19.4197463,16.4709747 L21.9810667,16.4709747 C22.0567635,16.1728952 22.2010443,15.8888419 22.4280774,15.6553654 C23.1091766,14.9539655 24.2134063,14.9539655 24.8947626,15.6553654 C25.2475951,16.0185772 25.4138137,16.498792 25.4009024,16.9749488 C25.4018736,17.0215559 25.3972461,17.0578712 25.3899621,17.0931867 C25.3531991,17.4949781 25.1936075,17.8870069 24.8947911,18.1946137 C24.2134062,18.895749 23.1091766,18.895749 22.4281059,18.1946137 Z',
        symbol: `image://${greenImage}`,
        name: '杭州',
        label: {
          normal: {
            formatter: (item) => item.name,
            show: true,
            position: 'top',
            distance: 10,
            textStyle: {
              color: '#00FCA3'
            }
          }
        }
      },
      {
        value: [100.972344, 22.777321],
        itemStyle: { color: '#00FCA3' },
        symbolSize: 24,
        // symbol: 'path://M22.4281059,18.1946137 C22.2312373,17.9919538 22.0981253,17.7512436 22.014916,17.4969776 L19.2980888,17.4969776 C19.1394113,17.9789273 18.8430514,18.393745 18.4607686,18.6993523 L20.2356714,21.8640765 C20.5055231,21.7994734 20.7921423,21.7924162 21.0785617,21.8713689 C22.0088317,22.1281048 22.5612179,23.1125583 22.3118186,24.0704295 C22.0626192,25.0283007 21.1060696,25.5966719 20.175571,25.339936 C19.2450439,25.0834353 18.6929148,24.0989819 18.9423426,23.1411106 C19.0206959,22.8395025 19.1749744,22.5825313 19.3708433,22.3715791 L17.5643193,19.15075 C17.3637944,19.2043555 17.1562425,19.2404356 16.9391785,19.2404356 C16.4320675,19.2404356 15.9609482,19.0836182 15.5672395,18.81562 L11.7408124,22.7545806 C11.8734102,23.0078467 11.9556483,23.2928998 11.9556483,23.6010064 C11.9556483,24.5924583 11.1748008,25.3965408 10.2114241,25.3965408 C9.24804752,25.3965408 8.4672,24.5924583 8.4672,23.6010064 C8.4672,22.6090547 9.24804752,21.8054427 10.2114241,21.8054427 C10.5116974,21.8054427 10.79009,21.8905999 11.0368328,22.0283922 L14.8620601,18.0906373 C14.6004922,17.6848175 14.4474134,17.1986041 14.4474134,16.6753403 C14.4474134,16.1488125 14.6019204,15.6598351 14.866202,15.2525156 L11.9785287,12.2802184 C11.6799694,12.4635886 11.3319929,12.5712995 10.9589651,12.5712995 C9.85810605,12.5712995 8.96557015,11.6524783 8.96557015,10.5192351 C8.96557015,9.38575658 9.85813464,8.4672 10.9589651,8.4672 C12.0598242,8.4672 12.9523886,9.38575658 12.9523886,10.5192351 C12.9523886,10.8962379 12.8518691,11.2484228 12.6793376,11.5522657 L15.5733238,14.5311202 C15.9658328,14.2655921 16.4344955,14.1103038 16.9391785,14.1103038 C17.2000323,14.1103038 17.4511741,14.1518826 17.6874336,14.2282771 L19.2299331,11.478106 C19.089023,11.3087621 18.9783058,11.1088661 18.9184911,10.8791829 C18.7048263,10.05831 19.1781166,9.21414838 19.9757888,8.99419821 C20.2690065,8.91330477 20.5648808,8.92956578 20.8330472,9.02151551 C20.9386513,9.00675417 21.3189916,9.23370275 21.3591252,9.33615011 C21.568391,9.52875352 21.7287538,9.78251957 21.8066214,10.0823634 C22.0205147,10.9034714 21.5469674,11.7473979 20.7495522,11.9675833 C20.5276608,12.0287165 20.3054838,12.0301868 20.09379,11.990137 L18.558346,14.7277815 C19.044519,15.1566255 19.3662159,15.7746031 19.4197463,16.4709747 L21.9810667,16.4709747 C22.0567635,16.1728952 22.2010443,15.8888419 22.4280774,15.6553654 C23.1091766,14.9539655 24.2134063,14.9539655 24.8947626,15.6553654 C25.2475951,16.0185772 25.4138137,16.498792 25.4009024,16.9749488 C25.4018736,17.0215559 25.3972461,17.0578712 25.3899621,17.0931867 C25.3531991,17.4949781 25.1936075,17.8870069 24.8947911,18.1946137 C24.2134062,18.895749 23.1091766,18.895749 22.4281059,18.1946137 Z',
        symbol: `image://${greenImage}`,
        name: '普洱',
        label: {
          normal: {
            formatter: (item) => item.name,
            show: true,
            position: 'top',
            distance: 10,
            textStyle: {
              color: '#00FCA3'
            }
          }
        }
      },
      {
        value: [113.65, 34.76],
        itemStyle: { color: '#00FCA3' },
        symbolSize: 24,
        // symbol: 'path://M22.4281059,18.1946137 C22.2312373,17.9919538 22.0981253,17.7512436 22.014916,17.4969776 L19.2980888,17.4969776 C19.1394113,17.9789273 18.8430514,18.393745 18.4607686,18.6993523 L20.2356714,21.8640765 C20.5055231,21.7994734 20.7921423,21.7924162 21.0785617,21.8713689 C22.0088317,22.1281048 22.5612179,23.1125583 22.3118186,24.0704295 C22.0626192,25.0283007 21.1060696,25.5966719 20.175571,25.339936 C19.2450439,25.0834353 18.6929148,24.0989819 18.9423426,23.1411106 C19.0206959,22.8395025 19.1749744,22.5825313 19.3708433,22.3715791 L17.5643193,19.15075 C17.3637944,19.2043555 17.1562425,19.2404356 16.9391785,19.2404356 C16.4320675,19.2404356 15.9609482,19.0836182 15.5672395,18.81562 L11.7408124,22.7545806 C11.8734102,23.0078467 11.9556483,23.2928998 11.9556483,23.6010064 C11.9556483,24.5924583 11.1748008,25.3965408 10.2114241,25.3965408 C9.24804752,25.3965408 8.4672,24.5924583 8.4672,23.6010064 C8.4672,22.6090547 9.24804752,21.8054427 10.2114241,21.8054427 C10.5116974,21.8054427 10.79009,21.8905999 11.0368328,22.0283922 L14.8620601,18.0906373 C14.6004922,17.6848175 14.4474134,17.1986041 14.4474134,16.6753403 C14.4474134,16.1488125 14.6019204,15.6598351 14.866202,15.2525156 L11.9785287,12.2802184 C11.6799694,12.4635886 11.3319929,12.5712995 10.9589651,12.5712995 C9.85810605,12.5712995 8.96557015,11.6524783 8.96557015,10.5192351 C8.96557015,9.38575658 9.85813464,8.4672 10.9589651,8.4672 C12.0598242,8.4672 12.9523886,9.38575658 12.9523886,10.5192351 C12.9523886,10.8962379 12.8518691,11.2484228 12.6793376,11.5522657 L15.5733238,14.5311202 C15.9658328,14.2655921 16.4344955,14.1103038 16.9391785,14.1103038 C17.2000323,14.1103038 17.4511741,14.1518826 17.6874336,14.2282771 L19.2299331,11.478106 C19.089023,11.3087621 18.9783058,11.1088661 18.9184911,10.8791829 C18.7048263,10.05831 19.1781166,9.21414838 19.9757888,8.99419821 C20.2690065,8.91330477 20.5648808,8.92956578 20.8330472,9.02151551 C20.9386513,9.00675417 21.3189916,9.23370275 21.3591252,9.33615011 C21.568391,9.52875352 21.7287538,9.78251957 21.8066214,10.0823634 C22.0205147,10.9034714 21.5469674,11.7473979 20.7495522,11.9675833 C20.5276608,12.0287165 20.3054838,12.0301868 20.09379,11.990137 L18.558346,14.7277815 C19.044519,15.1566255 19.3662159,15.7746031 19.4197463,16.4709747 L21.9810667,16.4709747 C22.0567635,16.1728952 22.2010443,15.8888419 22.4280774,15.6553654 C23.1091766,14.9539655 24.2134063,14.9539655 24.8947626,15.6553654 C25.2475951,16.0185772 25.4138137,16.498792 25.4009024,16.9749488 C25.4018736,17.0215559 25.3972461,17.0578712 25.3899621,17.0931867 C25.3531991,17.4949781 25.1936075,17.8870069 24.8947911,18.1946137 C24.2134062,18.895749 23.1091766,18.895749 22.4281059,18.1946137 Z',
        symbol: `image://${greenImage}`,
        name: '郑州',
        label: {
          normal: {
            formatter: (item) => item.name,
            show: true,
            position: 'top',
            distance: 10,
            textStyle: {
              color: '#00FCA3'
            }
          }
        }
      }
    ]
    const linesData = [
      { coords: [[120.12, 30.16], [100.972344, 22.777321]], lineStyle: { color: '#00FCA3' } },
      { coords: [[120.12, 30.16], [113.65, 34.76]], lineStyle: { color: '#00FCA3' } }
    ]
    const regions = [
      {
        name: '云南',
        selected: true,
        itemStyle: {
          normal: {
            // 边框的颜色
            borderColor: '#2F83E4',
            borderWidth: 1,
            // 地图中省的填充色
            areaColor: '#050F2B',
          },
          emphasis: {
            areaColor: '#0377CA',
            //    shadowColor: 'rgb(12,25,50)',
            borderWidth: 0.1
          }
        },
      },
      {
        name: '河南',
        selected: true,
        itemStyle: {
          normal: {
            // 边框的颜色
            borderColor: '#2F83E4',
            borderWidth: 1,
            // 地图中省的填充色
            areaColor: '#050F2B',
          },
          emphasis: {
            areaColor: '#0377CA',
            //    shadowColor: 'rgb(12,25,50)',
            borderWidth: 0.1
          }
        },
      },
      {
        name: '浙江',
        selected: true,
        itemStyle: {
          normal: {
            // 边框的颜色
            borderColor: '#2F83E4',
            borderWidth: 1,
            // 地图中省的填充色
            areaColor: '#050F2B',
          },
          emphasis: {
            areaColor: '#0377CA',
            //    shadowColor: 'rgb(12,25,50)',
            borderWidth: 0.1
          }
        },

      }
    ]
    const mapConfig = {}
    const {
      map = 'china',
      itemStyle = {
        normal: {
          // 边框的颜色
          borderColor: '#2F83E4',
          borderWidth: 1,
          // 地图中省的填充色
          areaColor: '#050F2B',
        },
        emphasis: {
          areaColor: '#0377CA',
          //    shadowColor: 'rgb(12,25,50)',
          borderWidth: 0.1
        }
      },
      outBorderWidth = 4
    } = mapConfig

    const inlineItemStyle = _.cloneDeep(itemStyle)
    inlineItemStyle.normal.borderWidth = outBorderWidth

    return {
      backgroundColor: '#081227',
      geo: {
        map: 'china',
        itemStyle: {
          normal: {
            // 边框的颜色
            borderColor: '#2F83E4',
            borderWidth: 1,
            // 地图中省的填充色
            areaColor: '#050F2B',
          },
          emphasis: {
            areaColor: '#0377CA',
            //    shadowColor: 'rgb(12,25,50)',
            borderWidth: 0.1
          }
        },
        outBorderWidth: 1,
        aspectScale: 0.75, //长宽比
        roam: false,
        label: {
          normal: {
            show: true,
            textStyle: {
              // 省名称的颜色
              color: 'transparent'
            }
          },
          emphasis: {
            // 高亮的颜色
            textStyle: {
              color: 'transparent'
            }
          }
        },
        regions,
        itemStyle: inlineItemStyle
      },
      series: [
        {
          type: 'map',
          roam: false,
          // selectedMode: 'multiple',
          label: {
            normal: {
              show: true,
              textStyle: {
                // 省名称的颜色
                color: 'transparent'
              }
            },
            emphasis: {
              // 高亮的颜色
              textStyle: {
                color: 'transparent'
              }
            }
          },
          data: regions,
          itemStyle,
          map,
        },
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          // showEffectOn: 'render',
          zlevel: 10,
          /*
          rippleEffect: {
            period: 15,
            scale: 4,
            brushType: 'fill'
          },
          */
          hoverAnimation: false,
          data: data,
          animation: false
        },
        // 飞线的动画效果
        {
          type: 'lines',
          zlevel: 20,
          effect: {
            show: true,
            period: 4, // 箭头指向速度，值越小速度越快
            trailLength: 0.4, // 特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'point',
            symbolSize: 4, // 图标大小
            color: '#fff'
          },
          lineStyle: {
            normal: {
              color: '#1DE9B6',
              width: 1, // 线条宽度
              opacity: 0.1, // 尾迹线条透明度
              curveness: -0.3 // 尾迹线条曲直度
            }
          },
          data: linesData
        }]
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

  onChartClick = (e) => {
    console.log('..', e)
  }

  render () {
    let onEvents = {
      'click': this.onChartClick,
      'legendselectchanged': this.onChartLegendselectchanged
    }

    return (
      <div className="detailWrap" style={{ height: '100vh' }}>
        {<ReactEcharts option={this.barOption()} onEvents={onEvents} />}
        <div id="echart" style={{ height: '100%' }}></div>

      </div>




    )
  }
}

export default DetailModal