import React, { Fragment, useState, useEffect } from 'react';
import { Popover, Badge } from 'antd';
import moment from 'moment'
import { Link } from 'react-router-dom'
import { ExclamationCircleOutlined, CheckCircleOutlined, StopOutlined } from '@ant-design/icons'

export const apiColumn = ({ pageParams }) => [
  {
    title: '序号',
    width: 80,
    fixed: 'left',
    render: (text, record, index) => (pageParams.page - 1) * pageParams.size + (index + 1),
  },
  {
    title: '名称',
    dataIndex: 'name',
    render: (text, record) => (
      <Popover content={text} title={null}>
        {text || '/'}
      </Popover>
    ),
  },
  {
    title: '联系人',
    dataIndex: 'contactsUserName',
    width: 140,
    render: (text, record) => (
      <Popover content={text} title={null}>
        {text}
      </Popover>
    ),
  },
  {
    title: '手机号',
    dataIndex: 'contactsUserPhone',
    width: 140,
    render: (text, record) => (
      <Popover content={text} title={null}>
        {text}
      </Popover>
    ),
  },
  {
    title: '更新时间',
    dataIndex: 'modifyTime',
    width: 180,
  },
  {
    title: '状态',
    dataIndex: 'connectionStatus',
    width: 100,
    render: (text, record) => {
      if (text == 2) {
        return <span><ExclamationCircleOutlined style={{ color: 'red' }} /> 断开</span>;
      }
      if (text == 1) {
        return <span><CheckCircleOutlined style={{ color: '#00CC66' }} /> 正常</span>;
      }
      // return <span><ExclamationCircleOutlined style={{ color: 'red' }} /> 断开</span>;
    },
  },

].filter(Boolean)