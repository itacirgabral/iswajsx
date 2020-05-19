function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 25V1s7 0 7 7v9c0 8-7 8-7 8zM0 0v2h4c.778 0 1.445.107 2 .313v-2C4.875.005 4 0 4 0H0zM0 5v2h4s.938.014 2 .344V5.312C4.88 5.05 4 5 4 5H0zM0 10v2h4s.94.025 2 .438v-2.126C4.875 10.005 4 10 4 10H0zM0 15v2h4s.94.025 2 .438v-2.125C4.875 15.005 4 15 4 15H0zM6 22.563C4.94 22.974 4 23 4 23H0v2h4s.875-.005 2-.313v-2.125z"
}));

export default SvgComponent;