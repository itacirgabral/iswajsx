function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 0a5 5 0 015 5v2a5 5 0 01-5 5H6V9h8a3 3 0 003-3V4a3 3 0 00-3-3V0zM6 5v11L.5 10.5 6 5zM5 7.438L1.937 10.5 5 13.563V7.436z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 7.438v6.125L1.937 10.5 5 7.437z",
  fill: "#fff"
}));

export default SvgComponent;