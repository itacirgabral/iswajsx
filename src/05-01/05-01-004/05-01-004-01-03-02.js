function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 60,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 11h42V7H0v4zM60 8h-7.071V6.984h6.055V.929H60V8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M56.818 5.525l.707-.707L53.282.575l-.707.707 4.243 4.243zM44 4h7.071v1.016h-6.055v6.055H44V4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M47.182 6.475l-.707.707 4.243 4.243.707-.707-4.243-4.243z"
}));

export default SvgComponent;