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
    var geoCoordMap = {
      '上海': [121.4648, 31.2891],
      '东莞': [113.8953, 22.901],
      '东营': [118.7073, 37.5513],
      '中山': [113.4229, 22.478],
      '临汾': [111.4783, 36.1615],
      '临沂': [118.3118, 35.2936],
      '丹东': [124.541, 40.4242],
      '丽水': [119.5642, 28.1854],
      '乌鲁木齐': [87.9236, 43.5883],
      '佛山': [112.8955, 23.1097],
      '保定': [115.0488, 39.0948],
      '兰州': [103.5901, 36.3043],
      '包头': [110.3467, 41.4899],
      '北京': [116.4551, 40.2539],
      '北海': [109.314, 21.6211],
      '南京': [118.8062, 31.9208],
      '南宁': [108.479, 23.1152],
      '南昌': [116.0046, 28.6633],
      '南通': [121.1023, 32.1625],
      '厦门': [118.1689, 24.6478],
      '台州': [121.1353, 28.6688],
      '合肥': [117.29, 32.0581],
      '呼和浩特': [111.4124, 40.4901],
      '咸阳': [108.4131, 34.8706],
      '哈尔滨': [127.9688, 45.368],
      '唐山': [118.4766, 39.6826],
      '嘉兴': [120.9155, 30.6354],
      '大同': [113.7854, 39.8035],
      '大连': [122.2229, 39.4409],
      '天津': [117.4219, 39.4189],
      '太原': [112.3352, 37.9413],
      '威海': [121.9482, 37.1393],
      '宁波': [121.5967, 29.6466],
      '宝鸡': [107.1826, 34.3433],
      '宿迁': [118.5535, 33.7775],
      '常州': [119.4543, 31.5582],
      '广州': [113.5107, 23.2196],
      '廊坊': [116.521, 39.0509],
      '延安': [109.1052, 36.4252],
      '张家口': [115.1477, 40.8527],
      '徐州': [117.5208, 34.3268],
      '德州': [116.6858, 37.2107],
      '惠州': [114.6204, 23.1647],
      '成都': [103.9526, 30.7617],
      '扬州': [119.4653, 32.8162],
      '承德': [117.5757, 41.4075],
      '拉萨': [91.1865, 30.1465],
      '无锡': [120.3442, 31.5527],
      '日照': [119.2786, 35.5023],
      '昆明': [102.9199, 25.4663],
      '杭州': [119.5313, 29.8773],
      '枣庄': [117.323, 34.8926],
      '柳州': [109.3799, 24.9774],
      '株洲': [113.5327, 27.0319],
      '武汉': [114.3896, 30.6628],
      '汕头': [117.1692, 23.3405],
      '江门': [112.6318, 22.1484],
      '沈阳': [123.1238, 42.1216],
      '沧州': [116.8286, 38.2104],
      '河源': [114.917, 23.9722],
      '泉州': [118.3228, 25.1147],
      '泰安': [117.0264, 36.0516],
      '泰州': [120.0586, 32.5525],
      '济南': [117.1582, 36.8701],
      '济宁': [116.8286, 35.3375],
      '海口': [110.3893, 19.8516],
      '淄博': [118.0371, 36.6064],
      '淮安': [118.927, 33.4039],
      '深圳': [114.5435, 22.5439],
      '清远': [112.9175, 24.3292],
      '温州': [120.498, 27.8119],
      '渭南': [109.7864, 35.0299],
      '湖州': [119.8608, 30.7782],
      '湘潭': [112.5439, 27.7075],
      '滨州': [117.8174, 37.4963],
      '潍坊': [119.0918, 36.524],
      '烟台': [120.7397, 37.5128],
      '玉溪': [101.9312, 23.8898],
      '珠海': [113.7305, 22.1155],
      '盐城': [120.2234, 33.5577],
      '盘锦': [121.9482, 41.0449],
      '石家庄': [114.4995, 38.1006],
      '福州': [119.4543, 25.9222],
      '秦皇岛': [119.2126, 40.0232],
      '绍兴': [120.564, 29.7565],
      '聊城': [115.9167, 36.4032],
      '肇庆': [112.1265, 23.5822],
      '舟山': [122.2559, 30.2234],
      '苏州': [120.6519, 31.3989],
      '莱芜': [117.6526, 36.2714],
      '菏泽': [115.6201, 35.2057],
      '营口': [122.4316, 40.4297],
      '葫芦岛': [120.1575, 40.578],
      '衡水': [115.8838, 37.7161],
      '衢州': [118.6853, 28.8666],
      '西宁': [101.4038, 36.8207],
      '西安': [109.1162, 34.2004],
      '贵阳': [106.6992, 26.7682],
      '连云港': [119.1248, 34.552],
      '邢台': [114.8071, 37.2821],
      '邯郸': [114.4775, 36.535],
      '郑州': [113.4668, 34.6234],
      '鄂尔多斯': [108.9734, 39.2487],
      '重庆': [107.7539, 30.1904],
      '金华': [120.0037, 29.1028],
      '铜川': [109.0393, 35.1947],
      '银川': [106.3586, 38.1775],
      '镇江': [119.4763, 31.9702],
      '长春': [125.8154, 44.2584],
      '长沙': [113.0823, 28.2568],
      '长治': [112.8625, 36.4746],
      '阳泉': [113.4778, 38.0951],
      '青岛': [120.4651, 36.3373],
      '韶关': [113.7964, 24.7028]
    };

    var XAData = [
      [{ name: '西安' }, { name: '北京', value: 100 }],
      [{ name: '西安' }, { name: '上海', value: 100 }],
      [{ name: '西安' }, { name: '广州', value: 100 }],
      [{ name: '西安' }, { name: '西宁', value: 100 }],
      [{ name: '西安' }, { name: '银川', value: 100 }]
    ];

    var XNData = [
      [{ name: '西宁' }, { name: '北京', value: 100 }],
      [{ name: '西宁' }, { name: '上海', value: 100 }],
      [{ name: '西宁' }, { name: '广州', value: 100 }],
      [{ name: '西宁' }, { name: '西安', value: 100 }],
      [{ name: '西宁' }, { name: '银川', value: 100 }]
    ];

    var YCData = [
      [{ name: '银川' }, { name: '北京', value: 100 }],
      [{ name: '银川' }, { name: '广州', value: 100 }],
      [{ name: '银川' }, { name: '上海', value: 100 }],
      [{ name: '银川' }, { name: '西安', value: 100 }],
      [{ name: '银川' }, { name: '西宁', value: 100 }],
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    //var planePath = 'arrow';
    var convertData = function (data) {

      var res = [];
      for (var i = 0; i < data.length; i++) {

        var dataItem = data[i];

        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
          res.push({
            fromName: dataItem[0].name,
            toName: dataItem[1].name,
            coords: [fromCoord, toCoord],
            value: dataItem[1].value
          });
        }
      }
      return res;

    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
    var series = [];
    // 	['西宁', XNData], ['银川', YCData]
    [['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {
      series.push({
        name: item[0] + ' Top3',
        type: 'lines',
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: '#fff',   //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
        {
          name: item[0] + ' Top3',
          type: 'lines',
          zlevel: 2,
          symbol: ['none', 'arrow'],
          symbolSize: 10,
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 1,
              opacity: 0.6,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + ' Top3',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            brushType: 'stroke'
          },
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{b}'
            }
          },
          symbolSize: function (val) {
            return val[2] / 8;
          },
          itemStyle: {
            normal: {
              color: color[i],
            },
            emphasis: {
              areaColor: '#2B91B7'
            }
          },
          data: item[1].map(function (dataItem) {
            return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
          })
        });
    });


    return {
      backgroundColor: '#000',
      title: {
        text: '模拟航线',
        subtext: '数据纯属虚构',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params, ticket, callback) {
          if (params.seriesType == "effectScatter") {
            return "线路：" + params.data.name + "" + params.data.value[2];
          } else if (params.seriesType == "lines") {
            return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
          } else {
            return params.name;
          }
        }
      },
      legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['西安 Top3', '西宁 Top3', '银川 Top3'],
        textStyle: {
          color: '#fff'
        },
        selectedMode: 'multiple'
      },
      geo: {
        map: 'china',
        label: {
          emphasis: {
            show: true,
            color: '#fff'
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#00186E',
            borderColor: '#195BB9',
            borderWidth: 1,
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        }
      },

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
        {<ReactEcharts option={this.barOption()} />}
        <div id="echart" style={{ height: '100%' }}></div>

      </div>




    )
  }
}

export default DetailModal