function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 72,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6h72v8H0V6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M72 2H0v4h72V2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v2h72V0H0z"
}));

export default SvgComponent;