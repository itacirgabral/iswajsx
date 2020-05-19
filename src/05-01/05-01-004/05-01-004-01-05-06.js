function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 4H0V0h42v4zM58 8V.929h-1.016v6.055h-6.055V8H58z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M55.525 4.818l-.707.707-4.243-4.243.707-.707 4.243 4.243zM43 5v7.071h1.016V6.016h6.055V5H43z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M45.475 8.182l.707-.707 4.243 4.243-.707.707-4.243-4.243zM46 20v-7.071h-1.016v6.055h-6.055V20H46z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M43.525 16.818l-.707.707-4.243-4.243.707-.707 4.243 4.243z"
}));

export default SvgComponent;