function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0a6 6 0 00-6 6h2a4 4 0 118 0v1a4.01 4.01 0 01-1.156 2.844L3.75 14.75A5.992 5.992 0 002 19v1a6 6 0 006 6 8 8 0 008-8h-2a6 6 0 01-6 6 4 4 0 01-4-4v-1a4.01 4.01 0 011.156-2.844l5.094-4.906A5.992 5.992 0 0012 7V6a6 6 0 00-6-6z"
}));

export default SvgComponent;