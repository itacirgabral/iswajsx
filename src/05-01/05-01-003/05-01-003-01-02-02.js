function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 60,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 11h42v4H0v-4zM44 7v7.071h1.016V8.016h6.055V7H44z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M45.414 11.243l.707-.707 4.243 4.242-.707.707-4.243-4.242zM47.536 9.121l.707-.707 4.242 4.243-.707.707-4.242-4.243zM51 0v7.071h1.016V1.016h6.055V0H51z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M52.414 4.243l.707-.707 4.243 4.242-.707.707-4.243-4.242zM54.536 2.121l.707-.707 4.242 4.243-.707.707-4.242-4.243z"
}));

export default SvgComponent;