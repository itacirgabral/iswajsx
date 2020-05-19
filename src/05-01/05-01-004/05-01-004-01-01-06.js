function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 52,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4h42V0H0v4zM52 9V1.929h-1.016v6.055h-6.055V9H52z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M49.525 5.818l-.707.707-4.243-4.243.707-.707 4.243 4.243z"
}));

export default SvgComponent;