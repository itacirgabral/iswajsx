function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8l8-8 8 8H0zM7 8v20a4 4 0 004 4h4a8 8 0 008-8H13v3c0 1.657-.895 3-2 3a2 2 0 01-2-2v-7.563c.591.342 1.267.563 2 .563a4 4 0 100-8c-.733 0-1.409.22-2 .563V8H7zm4 7a2 2 0 110 4 2 2 0 010-4z"
}));

export default SvgComponent;