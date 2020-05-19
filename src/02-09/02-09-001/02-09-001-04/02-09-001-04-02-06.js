function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 0l-9 9h18l-9-9zm0 1.438L31.594 8H18.406L25 1.437zM24 9v11a6 6 0 01-6 6H0v4h17a9 9 0 009-9V9h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 1.438L18.406 8h13.188L25 1.437z",
  fill: "#fff"
}));

export default SvgComponent;