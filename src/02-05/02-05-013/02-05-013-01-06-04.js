function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.9 22H0v-9.9l2.01 2.011v5.878H7.89L9.899 22z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.657 17.757L21.92 1.494 20.506.08 4.243 16.343l1.414 1.414zM23 15l-5.5 5.5L12 15h1.414l4.086 4.086L21.586 15H23z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 4c6.075 0 11 4.925 11 11h-1C17 9.477 12.523 5 7 5H5V4h2z"
}));

export default SvgComponent;