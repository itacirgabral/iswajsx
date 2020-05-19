function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 4h42V0H16v4zM0 8V.929h1.016v6.055h6.055V8H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.475 4.818l.707.707 4.243-4.243-.707-.707-4.243 4.243zM15 5v7.071h-1.016V6.016H7.929V5H15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.525 8.182l-.707-.707-4.243 4.243.707.707 4.243-4.243zM12 20v-7.071h1.016v6.055h6.055V20H12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.475 16.818l.707.707 4.243-4.243-.707-.707-4.243 4.243z"
}));

export default SvgComponent;