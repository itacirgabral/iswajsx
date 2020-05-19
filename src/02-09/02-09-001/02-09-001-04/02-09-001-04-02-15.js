function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26 0l8 8-8 8V0zm1 2.438v11.124L32.594 8 27 2.437z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 7v2H8a6 6 0 00-6 6v3a6 6 0 006 6h21v4H9a9 9 0 01-9-9v-4a8 8 0 018-8h18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27 2.438L32.594 8 27 13.563V2.437z",
  fill: "#fff"
}));

export default SvgComponent;