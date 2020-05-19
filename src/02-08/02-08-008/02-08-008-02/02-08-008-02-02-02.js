function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 0l8 8H7l8-8zm0 1.438L9.437 7h11.157L15 1.437zM16 8v17a4 4 0 01-4 4H8a8 8 0 01-8-8h10v3c0 1.657.895 3 2 3a2 2 0 002-2V8h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 1.438L20.594 7H9.437L15 1.437z",
  fill: "#fff"
}));

export default SvgComponent;