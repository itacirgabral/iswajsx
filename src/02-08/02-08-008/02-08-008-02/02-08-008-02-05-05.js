function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 4.5L0 11h13L6.5 4.5zm0 1.406L10.563 10H2.437L6.5 5.906z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 0v12c0 2.761-2.686 5-6 5-2.21 0-4-2.686-4-6H3a9 9 0 009 9h2c3.866 0 7-3.582 7-8V0h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 5.906L2.437 10h8.126L6.5 5.906z",
  fill: "#fff"
}));

export default SvgComponent;