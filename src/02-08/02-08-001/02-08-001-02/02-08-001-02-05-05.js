function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 15l9 9 9-9H0zm2.438 1h13.124L9 22.594 2.437 16zM15 0a8 8 0 00-8 8c0 2.539-3 7-3 7h10s-3-4.461-3-7c0-3.314 1.79-6 4-6s4 3.582 4 8h2c0-5.523-2.686-10-6-10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 16L9 22.594 15.563 16H2.437z",
  fill: "#fff"
}));

export default SvgComponent;