function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 31,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8l7 7 7-7H0zm2.438 1h9.124L7 13.563 2.437 9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 0a5 5 0 00-5 5v3h2V5a3 3 0 013-3h1a4 4 0 014 4v14h2v-4a3 3 0 016 0v6c0 4.028-5 11-5 11h12s-5-6.972-5-11v-6a5 5 0 00-5-5 4.946 4.946 0 00-3 1V6a6 6 0 00-6-6h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 9L7 13.563 11.563 9H2.437z",
  fill: "#fff"
}));

export default SvgComponent;