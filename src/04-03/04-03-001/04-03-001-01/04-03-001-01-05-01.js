function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.156 19c.554-.853 1.068-1.74 1.469-2.688a17.36 17.36 0 001.031-3.28C8.89 11.891 9 10.707 9 9.5c0-1.208-.11-2.392-.344-3.531a17.36 17.36 0 00-1.031-3.282C7.225 1.74 6.71.853 6.156 0 2.542 1.66 0 5.263 0 9.5s2.542 7.84 6.156 9.5z"
}));

export default SvgComponent;