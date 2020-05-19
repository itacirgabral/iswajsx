function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26 19l7 7-7 7v-2l5-5-5-5v-2zM6 0a6 6 0 000 12h8a2 2 0 012 2c0 .552-.232 1.044-.594 1.406l-3.281 2.813A3.994 3.994 0 0011 21a7 7 0 007 7h8v-4H16a3 3 0 01-3-3c0-.536.22-1.016.563-1.375l3.28-2.781A4.01 4.01 0 0018 14a5 5 0 00-5-5H6a4 4 0 110-8h8V0H6z"
}));

export default SvgComponent;