function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0l-7 7h14l-7-7zm0 1.438L12.063 6H2.937L7.5 1.437zM4 7h2v8H4V7zM9 7h2v8H9V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 7v8h3V7H6zM7.5 1.438L2.937 6h9.126L7.5 1.437z",
  fill: "#fff"
}));

export default SvgComponent;