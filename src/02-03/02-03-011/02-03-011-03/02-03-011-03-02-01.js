function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 43
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8h16L8 0zm0 1.438L13.563 7H2.437L8 1.437zM4 8v33.313l14-14V43h2V22.5l-14 14V8H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 8v18.813l14-14V43h2V8L12 22V8h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 8v28.5l14-14V43h4V12.812l-14 14V8H6zM8 1.438L2.437 7h11.126L8 1.437z",
  fill: "#fff"
}));

export default SvgComponent;