function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.414 7.757l.707.707L9.9.686l-.707-.707zM3.536 9.878l.707.707 7.778-7.778-.707-.707z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2.121 8.464l1.415 1.414L11.314 2.1 9.899.686z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 12V4.929h1.016v6.055h6.055V12H0z"
}));

export default SvgComponent;