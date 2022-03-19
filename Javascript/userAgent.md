# 현재 브라우저에대한 정보

## navigator.userAgent

navigator.userAgent는 읽기 전용속성으로 현재 브라우저에 대한 사용자 에이전트 문자열은 반환함.

```javascript
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
```

---

## navigator.platform (Deprecated)

navigator.platform 으로도 어느정도 브라우저의 블랫폼을 찾을 수 있는 방법이 있지만 Deprecated 되었고 현재 공식문서에서도 권장하지않는 방법.

---

## navigator.userAgentData.platform

navigator.userAgentData.platform 으로 간단하게 체크도 가능하지만
현재 일부 주요 브라우저에서는 아직 지원하지 않으며 이를 정의하는 사양은 아직 표준 그룹에서 채택되지 않았기에 현재로서는 userAgent를 사용해야 함.
