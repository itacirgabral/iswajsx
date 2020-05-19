function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 17h42v-4H0v4zM39 8V.929h1.016v6.055h6.055V8H39z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M41.475 4.818l.707.707 4.243-4.243-.707-.707-4.243 4.243zM53 5v7.071h-1.016V6.016h-6.055V5H53z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M50.525 8.182l-.707-.707-4.243 4.243.707.707 4.243-4.243zM50 19v-7.071h1.016v6.055h6.055V19H50z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M52.475 15.818l.707.707 4.243-4.243-.707-.707-4.243 4.243z"
}));

export default SvgComponent;