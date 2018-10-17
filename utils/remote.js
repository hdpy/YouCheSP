const url = 'https://youche.jushiwl.com';

/**
 * 远程请求处理
 * api 方法名称
 * url 远程服务器地址
 */
function req_server(api, params, req_params = { 'content-type': 'application/json', 'method': 'GET', 'dataType': 'json' }) {
  if (api == '') {
    return new Promise((resolve, reject) => {
      reject('api error');
    });
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: `${url}/${api}`,
      data: Object.assign({}, params),
      header: Object.assign({}, req_params),
      method: req_params['method'],
      dataType: req_params['dataType'],
      success: resolve,
      fail: reject
    });
  });
}

//上传文件/图片
function upload_file(api, params) {
  if (api == '' || !params) {
    return new Promise((resolve, reject) => {
      reject('params error');
    });
  }

  return new Promise((resolve, reject) => {
    var uploadTask = wx.uploadFile({
      url: `${url}/${api}`,
      filePath: params['filepath'],
      name: 'up',
      success: resolve,
      fail: reject
    });

    /*uploadTask.onProgressUpdate = ((res)=>{
      let progress = res.progress;
      let totalBytesSent = res.totalBytesSent;
      let totalBytesExpectedToSend = res.totalBytesExpectedToSend;

      console.log('上传进度', res.progress)
      console.log('已经上传的数据长度', res.totalBytesSent)
      console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
      
     // wx.showModal({
       // title:'上传进度',
       // content: `<progress percent="${progress}" stroke-width="20" show-info />`,
       // showCancel:false,
       // success:res=>{

       // }
      //});
    });*/
  });
}

module.exports = {
  req_server: req_server,
  upload_file: upload_file
};