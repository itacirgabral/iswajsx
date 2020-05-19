function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.9 27H0v-9.9l2.01 2.011v5.878H7.89L9.899 27z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.615 22.799L24 4.414 22.586 3 4.2 21.385l1.414 1.414zM12 0L6.5 5.5 12 11V9.586L7.914 5.5 12 1.414V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 16c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2zM20 22l-5.5 5.5L9 22h1.414l4.086 4.086L18.586 22H20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 11c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H2v-1h2z"
}));

export default SvgComponent;