function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 60,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M60 11H18V7h42v4zM0 4h7.071v1.016H1.016v6.055H0V4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.182 6.475l-.707.707 4.243 4.243.707-.707-4.243-4.243zM16 8H8.929V6.984h6.055V.929H16V8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.818 5.525l.707-.707L9.282.575l-.707.707 4.243 4.243z"
}));

export default SvgComponent;