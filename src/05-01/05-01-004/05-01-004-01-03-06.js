function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 57,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 11H0V7h42v4zM52 15V7.929h-1.016v6.055h-6.055V15H52z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M49.525 11.818l-.707.707-4.243-4.243.707-.707 4.243 4.243zM49 0v7.071h1.016V1.016h6.055V0H49z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M51.475 3.182l.707-.707 4.243 4.243-.707.707-4.243-4.243z"
}));

export default SvgComponent;