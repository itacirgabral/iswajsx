function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.657 17.757L21.92 1.494 20.506.08 4.243 16.343l1.414 1.414zM17 10l5.5 5.5L17 21V10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 12.1L9.9 22H0v-9.9zM6 5c0 6.075 4.925 11 11 11v-1C11.477 15 7 10.523 7 5V3H6v2z"
}));

export default SvgComponent;