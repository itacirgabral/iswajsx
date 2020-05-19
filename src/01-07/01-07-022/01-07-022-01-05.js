function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 9v6h2V9H7zm4 0v6h2V9h-2zm-9 1v6H0v2h2v3h6v-3h7v-2H6v-6H2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 8h2V3s0 3 0 0-3-3-3-3H1v2h5S5 2 6 2s1 1 1 1v5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 4v4h4V4H2z"
}));

export default SvgComponent;