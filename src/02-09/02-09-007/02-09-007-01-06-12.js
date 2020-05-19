function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 28l-4.5-4.5L7 19v1.438L3.937 23.5 7 26.563V28zM20 14c0 5.523-4.477 10-10 10H7v-1h3a9 9 0 009-9V8h1v6zM18 5L13.5.5 9 5h1.438L13.5 1.937 16.563 5H18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 8c0 5.523-4.477 10-10 10H0v-1h4a9 9 0 009-9V5h1v3z"
}));

export default SvgComponent;