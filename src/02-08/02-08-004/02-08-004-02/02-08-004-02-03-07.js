function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.988 4.03l11.314 11.313c.585.586 1.693.428 2.474-.353.53-.53.788-1.203.707-1.768l.31-7.778c0-1.28.482-2.56 1.458-3.536a5 5 0 017.071 0l6.364 6.364c2.322 2.321 9.193 3.536 9.193 3.536l-7.071 7.07s-1.215-6.87-3.536-9.192l-6.364-6.364c-.586-.585-1.694-.427-2.475.354-.529.529-.787 1.202-.707 1.768l-.31 7.778c0 1.28-.481 2.559-1.458 3.535a5 5 0 01-7.07 0L.573 5.444l1.414-1.415z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M43 9.686V21H31.686l1.415-1.414h8.485V11.1L43 9.686z"
}));

export default SvgComponent;