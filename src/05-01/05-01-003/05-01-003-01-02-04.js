function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 60,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4h42v4H0V4zM44 9V1.929h1.016v6.055h6.055V9H44z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M45.414 4.757l.707.707 4.243-4.242-.707-.707-4.243 4.242zM47.536 6.879l.707.707 4.242-4.243-.707-.707-4.242 4.243zM51 16V8.929h1.016v6.055h6.055V16H51z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M52.414 11.757l.707.707 4.243-4.242-.707-.707-4.243 4.242zM54.536 13.879l.707.707 4.242-4.243-.707-.707-4.242 4.243z"
}));

export default SvgComponent;