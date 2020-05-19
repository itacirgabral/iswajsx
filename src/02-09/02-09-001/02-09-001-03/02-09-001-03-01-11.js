function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 23l-8-8 8-8v16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 0a7 7 0 017 7v2a8 8 0 01-8 8H8v-4h14a5 5 0 005-5V7a5 5 0 00-5-5H5V0h17z"
}));

export default SvgComponent;