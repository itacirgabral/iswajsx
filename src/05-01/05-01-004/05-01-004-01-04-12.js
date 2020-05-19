function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 61,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M61 17H19v-4h42v4zM22 8V.929h-1.016v6.055h-6.055V8H22z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.525 4.818l-.707.707-4.243-4.243.707-.707 4.243 4.243zM15 15V7.929h-1.016v6.055H7.929V15H15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.525 11.818l-.707.707-4.243-4.243.707-.707 4.243 4.243zM8 22.071V15H6.984v6.055H.929v1.016H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.525 18.89l-.707.706-4.243-4.242.707-.708 4.243 4.243z"
}));

export default SvgComponent;