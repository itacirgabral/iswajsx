function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M32.156 27c.554-.853 1.068-1.74 1.469-2.688a17.36 17.36 0 001.031-3.28c.233-1.14.344-2.324.344-3.532 0-1.208-.11-2.392-.344-3.531a17.36 17.36 0 00-1.031-3.281c-.4-.948-.915-1.835-1.469-2.688C28.542 9.66 26 13.263 26 17.5s2.542 7.84 6.156 9.5zM2.844 27c-.554-.853-1.068-1.74-1.469-2.688a17.36 17.36 0 01-1.031-3.28A17.622 17.622 0 010 17.5c0-1.208.11-2.392.344-3.531a17.36 17.36 0 011.031-3.281c.4-.948.915-1.835 1.469-2.688C6.458 9.66 9 13.263 9 17.5S6.458 25.34 2.844 27z"
}));

export default SvgComponent;