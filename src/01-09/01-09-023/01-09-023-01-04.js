function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 11h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 13h11v11H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 0a3 3 0 00-3 3c0 1.301.842 2.397 2 2.813V9h2V5.812c1.158-.415 2-1.51 2-2.812a3 3 0 00-3-3zM16 17v2h8v-2h-8z"
}));

export default SvgComponent;