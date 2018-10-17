
//模态消息框
function modalbox(params) {
  wx.showModal({
    title: params.title && params.title != '' ? params.title : '提示',
    content: params.content,
    showCancel: params.btncan ? params.btncan : false,
    success: (res) => {
      if (res.confirm) {
        if (params.success != undefined && typeof (params.success) == 'function'){
          params.success();
        }
      } else if (res.cancel) {
        if (params.cancel_msg != undefined && params.cancel_msg != '') {
          promptmsg(params.cancel_msg, null, 'none', 800);
        }
      }
    }
  });
}

//普通消息框
function promptmsg(title, success = null, icon = 'none', duration = 2000) {
  if (title != '') {
    wx.showToast({
      title: title,
      icon: icon,
      duration: duration,
      success: success
    });
  }
}

//操作状态提示框
function statusmsg(title, icon = 'success', duration = 2000) {
  if (title == '')
    return;
  wx.showToast({
    title: title,
    icon: icon,
    duration: duration
  });
}

/**
 * 隐藏消息框
 */
function hideToast() {
  wx.hideToast();
}

//加载数据状态显示
function loaddataing(title, success = null, icon = 'loading', duration = 2000) {
  if (title == '')
    return;
  wx.showToast({
    title: title,
    icon: icon,
    duration: duration,
    success: success
  });
}

/**
 * 操作中提示框
 */
function showloading(title = '', success = null, mask = true) {
  wx.showLoading({
    title: title,
    mask: mask,
    success: success
  });
}

/**
 * 隐藏提示框
 */
function hideloading() {
  wx.hideLoading();
}

module.exports = {
  modalbox: modalbox,
  promptmsg: promptmsg,
  statusmsg: statusmsg,
  showloading: showloading,
  hideloading: hideloading,
  loaddataing: loaddataing,
  hideToast: hideToast,
}