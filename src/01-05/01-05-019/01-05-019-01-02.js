function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 1h20v9H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 3h16v3H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25.25-.063L21 4.188V7l5.656-5.656L25.25-.063z"
}));

export default SvgComponent;