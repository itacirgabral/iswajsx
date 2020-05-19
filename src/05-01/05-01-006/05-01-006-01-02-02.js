function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 14H0v4h42v-4zM25.586 7.757l-.707.707L17.1.686l.707-.707zM23.465 9.878l-.707.707-7.779-7.778.707-.707z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M24.879 8.464l-1.414 1.414L15.686 2.1 17.101.686z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27 12V4.929h-1.016v6.055h-6.055V12H27z"
}));

export default SvgComponent;