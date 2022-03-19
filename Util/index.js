export default checkDevice = {
  // check navigator.userAgent isMobile
  // @returns {Boolean}
  isMobile: function () {
    return /iPhone|iPad|iPod|Android/.test(navigator.userAgent);
  },

  // check navigator.userAgent isPC
  // @returns {Boolean}
  isPC: function () {
    return !this.isMobile();
  },

  // check navigator.userAgent isIOS
  // @returns {Boolean}
  isIOS: function () {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  },

  // check navigator.userAgent isAndroid
  // @returns {Boolean}
  isAndroid: function () {
    return /Android/.test(navigator.userAgent);
  },

  // check navigator.userAgent isIpad
  // @returns {Boolean}
  isIpad: function () {
    return /iPad/.test(navigator.userAgent);
  },
};
