function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 14h15v15H1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 16v2H1v3h2v6h6v-6h7v-3H9v-2H3z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 14h3L2 0 .5 1.5 13 14z",
  fillRule: "evenodd"
}));

export default SvgComponent;