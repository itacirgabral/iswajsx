function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 59,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M59 11H17v4h42v-4zM15 7v7.071h-1.016V8.016H7.929V7H15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.525 10.182l-.707-.707-4.243 4.243.707.707 4.243-4.243zM8 0v7.071H6.984V1.016H.929V0H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.525 3.182l-.707-.707L.575 6.718l.707.707 4.243-4.243z"
}));

export default SvgComponent;