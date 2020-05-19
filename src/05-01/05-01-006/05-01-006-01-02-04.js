function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 14h42v4H0v-4zM16.414 7.758l.707.707L24.9.687l-.707-.708zM18.535 9.879l.707.707 7.779-7.778-.707-.707z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M17.121 8.465l1.414 1.414 7.779-7.778L24.899.687z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 12V4.929h1.016v6.055h6.055V12H15z"
}));

export default SvgComponent;