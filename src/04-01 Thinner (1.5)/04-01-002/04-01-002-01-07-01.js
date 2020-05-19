function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M33.469 24.594c.044-.099.114-.182.156-.282.151-.358.216-.755.344-1.125C31.414 22.5 29.5 20.273 29.5 17.5c0-2.772 1.914-4.999 4.469-5.688-.128-.37-.193-.766-.344-1.124-.042-.1-.112-.183-.156-.282C30.34 11.31 28 14.081 28 17.5c0 3.419 2.34 6.19 5.469 7.094z"
}));

export default SvgComponent;