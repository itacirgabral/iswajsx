function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.9 24H0v-9.9l2.01 2.011v5.878H7.89L9.899 24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.657 19.799L24.042 1.414 22.628 0 4.243 18.385l1.414 1.414zM15 25l5.5-5.5L15 14v1.414l4.086 4.086L15 23.586V25z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 9c0 6.075 4.925 11 11 11v-1C9.477 19 5 14.523 5 9V7H4v2zM22 18l5.5-5.5L22 7v1.414l4.086 4.086L22 16.586V18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 2c0 6.075 4.925 11 11 11v-1c-5.523 0-10-4.477-10-10V0h-1v2z"
}));

export default SvgComponent;