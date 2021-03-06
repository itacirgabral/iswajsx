function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 17l7 7 7-7H0zm2.438 1h9.124L7 22.594 2.437 18zM10 0a4 4 0 00-4 4v6c0 2.539-3 7-3 7h8s-3-4.461-3-7V4a2 2 0 012-2 1 1 0 011 1v6h2V3a3 3 0 00-3-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 18L7 22.594 11.563 18H2.437z",
  fill: "#fff"
}));

export default SvgComponent;