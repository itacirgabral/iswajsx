function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0l4.5 4.5L13 9V7.562L16.063 4.5 13 1.437V0zM0 14C0 8.477 4.477 4 10 4h3v1h-3a9 9 0 00-9 9v6H0v-6zM2 23l4.5 4.5L11 23H9.562L6.5 26.063 3.437 23H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 20c0-5.523 4.477-10 10-10h4v1h-4a9 9 0 00-9 9v3H6v-3z"
}));

export default SvgComponent;