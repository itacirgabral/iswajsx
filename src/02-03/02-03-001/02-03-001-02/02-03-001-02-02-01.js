function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8h16L8 0zm0 1.438L13.563 7H2.437L8 1.437zM4 8h2v22H4V8zM10 8h2v22h-2V8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 8v22h4V8H6zM8 1.438L2.437 7h11.126L8 1.437z",
  fill: "#fff"
}));

export default SvgComponent;