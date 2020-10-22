import React, { PureComponent } from 'react';
import {
  Button,
  Form,
  message,
  Upload,
  Icon,
} from 'antd';

import axios from 'axios';
import { DownloadOutlined } from '@ant-design/icons';
class UploadFile extends PureComponent {
  constructor() {
    super();
    this.state = {
      uploadLoading: false,
      fileList: [],
    };
  }


  handleAsyncUploadAuthFile = detail => {
    const { params } = this.props;
    this.setState({ uploadLoading: true });
    const importFile = new FormData();
    importFile.append('file', detail.file);
    importFile.append('bizType', params.applyType);
    console.log('importFile', importFile)

    // 二进制流方式传参
    // ------WebKitFormBoundaryqULI7Lf9I6bBZAKP
    // Content-Disposition: form-data; name="file"; filename="1600693435712.pdf"
    // Content-Type: application/pdf


    // ------WebKitFormBoundaryqULI7Lf9I6bBZAKP
    // Content-Disposition: form-data; name="bizType"

    // 1
    // ------WebKitFormBoundaryqULI7Lf9I6bBZAKP--

    axios.post('http://172.18.70.100:31030/api/v2/netdisk/upload', importFile)
      .then(res => {
        if (res.data.success) {
          this.props.getFileData(res.data.data)
          this.setState({
            fileName: res.data.data.fileName,
            uploadLoading: false,
          }, () => {
            console.log('fileName', res.data.data.fileName)
          })
        }
      })
  };




  getUploadProps = () => {
    const { fileList } = this.state;
    // const { form: { setFieldsValue, setFields } } = this.props;

    return {
      accept: '.pdf',
      showUploadList: false,
      customRequest: this.handleAsyncUploadAuthFile,
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();

          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        const { name, type } = file;
        if (!(type === 'application/pdf' || type === 'image/jpeg' || type === 'image/png'
          || type === 'image/bmp' || type === 'image/gif' || type === 'image/jpg')) {
          message.error('请选择正确的附件')
          // setFields({
          //   fileName: {
          //     errors: [new Error('请选择正确的附件')],
          //   },
          // });

          return false;
        }
        if (file.size / 1024 / 1024 > 50) {
          message.error('附件大小不能超过50M')
          // setFields({
          //   fileName: {
          //     errors: [new Error('附件大小不能超过50M')],
          //   },
          // });
          return false;
        }
        const dotindex = name.lastIndexOf('.');
        const name1 = name.substring(0, dotindex); // 1.0.0
        // if (!/^[\u4e00-\u9fa5a-zA-Z0-9.\-_]+\.[pP]{1}[dD]{1}[fF]{1}$/.test(name)) {
        if (!/^[\u4e00-\u9fa5a-zA-Z0-9.\-_]+$/.test(name1)) {
          message.error('文件名不合法：文件名不可为空且只能包含中英文数字及.-_')
          // setFields({
          //   fileName: {
          //     errors: [new Error('文件名不合法：文件名不可为空且只能包含中英文数字及.-_')],
          //   },
          // });

          return false;
        }

        this.setState({
          fileList: [file],
        });
        // setFieldsValue({
        //   fileName: name,
        // });
      },
      fileList,
    };
  };

  render () {

    return (
      <div>
        <div style={{ display: 'inline-block' }}>
          <Upload {...this.getUploadProps()}>
            <Button type="default" icon={<DownloadOutlined />} style={{ display: 'inline-block' }} loading={this.state.uploadLoading}>上传文件</Button>
          </Upload>
        </div>
         &nbsp;
        {/* 下载模板 */}
        {this.props.downContent}
        <p style={{ fontSize: '12px', color: '#767D8A', padding: 0, margin: 0 }}>支持pdf，最大不超过50Mb。</p>
      </div>
    );
  }
}


export default UploadFile
