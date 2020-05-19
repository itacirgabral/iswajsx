function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 18h2l3.5-3.5L13 18h2l-5.5-5.5L4 18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 0C2.239 0 0 5.373 0 12v9c0 6.075 2.015 11 4.5 11h2c3.038 0 5.5-5.82 5.5-13H6.937C6.691 25.282 5.697 30 4.5 30 3.12 30 2 23.732 2 16S3.12 2 4.5 2c1.097 0 2.007 3.995 2.344 9.5H12C11.845 5.108 8.767 0 5 0z"
}));

export default SvgComponent;