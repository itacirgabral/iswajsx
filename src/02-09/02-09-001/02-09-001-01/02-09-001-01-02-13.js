function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8V0h8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.938 1l-3 3C16.352 5.585 13.91 6 11.5 6s-4.852-.416-6.438-2l-.53-.531L3.468 4.53 5.5 6.5a8.45 8.45 0 006 2.5c2.344 0 4.459-.968 6-2.5L22 2.062 20.937 1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.563 1L1 5.563V1h4.563z",
  fill: "#fff"
}));

export default SvgComponent;