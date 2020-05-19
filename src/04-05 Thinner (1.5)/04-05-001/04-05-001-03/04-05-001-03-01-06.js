function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 25.25v1.5h7v-1.5h-7zM19 25.25V26a2 2 0 004 0v-.75h-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 25.25V27a4 4 0 108 0v-1.75h-1V27c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5v-1.75h-1z"
}));

export default SvgComponent;