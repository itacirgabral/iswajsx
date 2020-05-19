function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M32.156 27c.554-.853 1.068-1.74 1.469-2.688a17.36 17.36 0 001.031-3.28c.233-1.14.344-2.324.344-3.532 0-1.208-.11-2.392-.344-3.531a17.36 17.36 0 00-1.031-3.281c-.4-.948-.915-1.835-1.469-2.688C28.542 9.66 26 13.263 26 17.5s2.542 7.84 6.156 9.5z"
}));

export default SvgComponent;