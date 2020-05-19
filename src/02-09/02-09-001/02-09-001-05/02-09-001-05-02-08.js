function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 44,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 12l7 7 7-7H0zm2.438 1h9.124L7 17.594 2.437 13z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0C10.477 0 6 4.477 6 10v2h2v-2a8 8 0 018-8h20a6 6 0 016 6c0 2.21-2.686 4-6 4h-7v4h7a8 8 0 100-16H16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 13L7 17.594 11.563 13H2.437z",
  fill: "#fff"
}));

export default SvgComponent;