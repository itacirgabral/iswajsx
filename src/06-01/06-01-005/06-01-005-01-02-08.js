function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 48,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 0C14.335 0 6.5 7.835 6.5 17.5S14.335 35 24 35s17.5-7.835 17.5-17.5S33.665 0 24 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 14v7h6.844a17.61 17.61 0 01-.344-3.5c0-1.198.115-2.37.344-3.5H0zm41.156 0c.23 1.13.344 2.302.344 3.5s-.115 2.37-.344 3.5H48v-7h-6.844zM40.308 11.224c-.039-.1-.048-.209-.089-.309-.146-.36-.381-.687-.552-1.038-2.293 1.319-5.222 1.098-7.182-.862s-2.18-4.889-.862-7.182c-.351-.17-.678-.406-1.038-.552-.1-.04-.209-.05-.31-.089-1.573 2.85-1.268 6.466 1.15 8.883 2.417 2.418 6.032 2.723 8.883 1.15z"
}));

export default SvgComponent;