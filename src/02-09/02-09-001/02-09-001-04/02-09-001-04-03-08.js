function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0v2L2 8l6 6v2L0 8l8-8zM8 7v2h18a6 6 0 016 6v3a6 6 0 01-6 6h-1v4a9 9 0 009-9v-4a8 8 0 00-8-8H8z"
}));

export default SvgComponent;