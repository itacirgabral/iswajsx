function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 9v8H7v-7H2v11h12V9h-1v8h-2V9H9z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 8h2V3s0 3 0 0-3-3-3-3H1v2h5S5 2 6 2s1 1 1 1v5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 4v4h4V4H2z"
}));

export default SvgComponent;