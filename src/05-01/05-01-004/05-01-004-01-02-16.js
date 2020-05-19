function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 56,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M56 11H14v4h42v-4zM0 7v7.071h1.016V8.016h6.055V7H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.475 10.182l.707-.707 4.243 4.243-.707.707-4.243-4.243zM7 0v7.071h1.016V1.016h6.055V0H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.475 3.182l.707-.707 4.243 4.243-.707.707-4.243-4.243z"
}));

export default SvgComponent;