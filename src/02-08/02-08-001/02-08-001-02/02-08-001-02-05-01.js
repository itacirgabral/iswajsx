function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6l7 7 7-7H0zm2.438 1h9.124L7 11.594 2.437 7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 0a5 5 0 00-5 5v1h2V5a3 3 0 013-3h3c1.657 0 3 1.79 3 4v2c0 4.472-6 12-6 12h14s-6-7.528-6-12V6c0-3.314-2.239-6-5-6h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 7L7 11.594 11.563 7H2.437z",
  fill: "#fff"
}));

export default SvgComponent;