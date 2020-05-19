function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 12a10.97 10.97 0 01-3.219 7.781l-1.156.844A8.988 8.988 0 002 27c0 2.485.996 4.746 2.625 6.375l1.5 1.5C6.668 35.418 7 36.172 7 37v5H4v-5c0-1-.781-2.219-.781-2.219A10.97 10.97 0 010 27a10.97 10.97 0 013.219-7.781l1.156-.844A8.988 8.988 0 007 12a8.988 8.988 0 00-2.625-6.375L.187 1.437 1.595 0 5.78 4.219A10.97 10.97 0 019 12z"
}));

export default SvgComponent;