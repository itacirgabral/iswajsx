function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 25V1s7 0 7 7v9c0 8-7 8-7 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 3v20s1.815.002 3-1.844V4.531C10.815 3.001 9 3 9 3z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v2h4c2.075 0 3.29.867 4 1.875V1.156C6.101.008 4 0 4 0H0zM0 5v2h4s2.542.016 4 1.469V6c-1.9-.988-4-1-4-1H0zM0 10v2h4s2.542.02 4 1.844v-2.688C6.101 10.008 4 10 4 10H0zM0 15v2h4s2.542.02 4 1.844v-2.688C6.101 15.008 4 15 4 15H0zM8 21.156C6.542 22.98 4 23 4 23H0v2h4s2.101-.008 4-1.156v-2.688z"
}));

export default SvgComponent;