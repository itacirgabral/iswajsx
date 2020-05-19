function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 3h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 2v6H0v3h2v2h2v-2h1v2h2v-2h8V8H7V2s0-1-1-1-1 1-1 1v6H4V2s0-1-1-1-1 1-1 1z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 0S1 0 1 2v6h1V2s0-1 1-1 1 1 1 1v6h1V2s0-2-2-2zM1 11v3h4v-3H4v2H2v-2H1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0S4 0 4 2v6h1V2s0-1 1-1 1 1 1 1v6h1V2s0-2-2-2zM4 11v3h4v-3H7v2H5v-2H4z"
}));

export default SvgComponent;