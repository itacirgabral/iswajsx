function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 44,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M44 12l-7 7-7-7h14zm-2.438 1h-9.124L37 17.594 41.563 13z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28 0c5.523 0 10 4.477 10 10v2h-2v-2a8 8 0 00-8-8H8a6 6 0 00-6 6c0 2.21 2.686 4 6 4h7v4H8A8 8 0 118 0h20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M41.563 13L37 17.594 32.437 13h9.126z",
  fill: "#fff"
}));

export default SvgComponent;