function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 49
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 42l-6.5 6.5L0 42h13zm-2.438 1H2.438L6.5 47.094 10.563 43zM10 12a10.97 10.97 0 01-3.219 7.781l-1.156.844A8.988 8.988 0 003 27c0 2.485.996 4.746 2.625 6.375l1.5 1.5C7.668 35.418 8 36.172 8 37v5H5v-5c0-1-.781-2.219-.781-2.219A10.97 10.97 0 011 27a10.97 10.97 0 013.219-7.781l1.156-.844A8.988 8.988 0 008 12a8.988 8.988 0 00-2.625-6.375L1.187 1.437 2.595 0 6.78 4.219A10.97 10.97 0 0110 12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.563 43L6.5 47.094 2.437 43h8.126z",
  fill: "#fff"
}));

export default SvgComponent;