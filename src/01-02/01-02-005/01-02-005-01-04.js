function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 10h15v13H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 12h11v9H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0c-1.656 0-3 1.344-3 3 0 .979.461 1.859 1.188 2.406L12.688 8H15l1.156-2.031C17.736 5.884 19 4.6 19 3c0-1.656-1.344-3-3-3zM8 0a3.001 3.001 0 00-.125 6l1.156 2h2.313l-1.5-2.625A3.002 3.002 0 0011 3c0-1.656-1.344-3-3-3z"
}));

export default SvgComponent;