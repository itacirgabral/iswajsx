function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 39
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0a6 6 0 016 6v27c0 1.105 1.343 2 3 2 1.105 0 2-1.343 2-3v-3h8v4c0 3.314-3.582 6-8 6h-2a5 5 0 01-5-5V6a4 4 0 10-8 0v10H0V6a6 6 0 016-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 21l8 8H13l8-8zm0 1.438L15.437 28h11.126L21 22.437z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 22.438L26.563 28H15.438L21 22.437z",
  fill: "#fff"
}));

export default SvgComponent;