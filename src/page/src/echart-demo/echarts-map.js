import echartWrap from './echart.js'
import _ from 'lodash'

const EchartsMap = function ({ points, lines, onPointClick, mapConfig = {}, regions }) {
  const {
    backgroundColor = '#081227',
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

  return echartWrap({
    backgroundColor,
    geo: {
      map,
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
        data: points,
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
        data: lines
      }]
  }, onPointClick)
}
export default EchartsMap
