function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.9 28H0v-9.9l2.01 2.011v5.878H7.89L9.899 28z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.615 23.799L24 5.414 22.586 4 4.2 22.385l1.414 1.414zM15 29l5.5-5.5L15 18v1.413l4.086 4.087L15 27.586V29z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 13c0 6.075 4.925 11 11 11v-1C9.477 23 5 18.523 5 13v-2H4v2zM6 6L11.5.5 17 6h-1.414L11.5 1.913 7.414 6H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 17c-6.075 0-11-4.925-11-11h1c0 5.523 4.477 10 10 10h2v1h-2z"
}));

export default SvgComponent;