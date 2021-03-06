function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C27.165 0 35 7.835 35 17.5S27.165 35 17.5 35 0 27.165 0 17.5 7.835 0 17.5 0zm0 1.5c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M31.375 6.875L42 17.5 31.375 28.125c1.307-1.705 2.326-3.633 2.938-5.75l4.874-4.875-4.874-4.875c-.612-2.117-1.63-4.045-2.938-5.75zM11.224 33.808c-.1-.039-.209-.048-.309-.089-.36-.146-.687-.381-1.038-.552 1.319-2.293 1.098-5.222-.862-7.182s-4.889-2.18-7.182-.862c-.17-.351-.406-.678-.552-1.038-.04-.1-.05-.209-.089-.31 2.85-1.573 6.466-1.268 8.883 1.15 2.418 2.417 2.723 6.032 1.15 8.883z"
}));

export default SvgComponent;