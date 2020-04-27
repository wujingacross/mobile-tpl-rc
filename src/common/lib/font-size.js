/* eslint-disable no-undef */
/**
 * @file    动态设置font-size
 * @version 1.0.0
 *
 * 使用方法:
 *
 * import fontSize from '@/common/lib/fontSize';
 * fontSize(document, window);
 */

var fontSize = function(doc, win) {
  var docEl = doc.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var recalc = function() {
    if (window.autoSizeOff === 'off') {
      return;
    }
    var clientWidth = docEl.clientWidth;
    clientWidth = Math.min(750, Math.min(window.innerWidth, document.documentElement.clientWidth));
    if (!clientWidth) {
      return;
    }
    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    docEl.getElementsByTagName('body')[0].style.fontSize = docEl.style.fontSize;
  };

  if (!doc.addEventListener) {
    return;
  }
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
};

export default fontSize;

// 修复微信调整字体大小
export const resetWxFont = () => {
  if (typeof WeixinJSBridge == 'object' && typeof WeixinJSBridge.invoke == 'function') {
    handleFontSize();
  } else {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', handleFontSize, false);
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', handleFontSize);
      document.attachEvent('onWeixinJSBridgeReady', handleFontSize);
    }
  }

  function handleFontSize() {
    console.log('handleFontSize');
    // 设置网页字体为默认大小
    WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 });
    // 重写设置网页字体大小的事件
    WeixinJSBridge.on('menu:setfont', function() {
      WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 });
    });
  }
};
