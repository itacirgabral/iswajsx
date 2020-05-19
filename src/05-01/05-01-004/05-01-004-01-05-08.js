function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 16H0v4h42v-4zM58 12v7.071h-1.016v-6.055h-6.055V12H58z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M55.525 15.182l-.707-.707-4.243 4.243.707.707 4.243-4.243zM43 15V7.929h1.016v6.055h6.055V15H43z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M45.475 11.818l.707.707 4.243-4.243-.707-.707-4.243 4.243zM46 0v7.071h-1.016V1.016h-6.055V0H46z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M43.525 3.182l-.707-.707-4.243 4.243.707.707 4.243-4.243z"
}));

export default SvgComponent;