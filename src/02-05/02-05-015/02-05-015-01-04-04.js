function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.615 22.799L24 4.414 22.586 3 4.2 21.385l1.414 1.414zM10 22l5.5 5.5L21 22H10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 17.1L9.9 27H0v-9.9zM5 11c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H3v-1h2zM12 11L6.5 5.5 12 0v11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 16c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2z"
}));

export default SvgComponent;