function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 7L1 0h7v7zM7 4.594V1H3.437L7 4.594z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 11.5a9.956 9.956 0 012.938-7.063l1.187-1.312.75.75-1.25 1.25A8.988 8.988 0 001 11.5c0 2.485.996 4.746 2.625 6.375L8 22.281 7.281 23l-4.343-4.438A9.956 9.956 0 010 11.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 4.594L3.437 1H7v3.594z",
  fill: "#fff"
}));

export default SvgComponent;