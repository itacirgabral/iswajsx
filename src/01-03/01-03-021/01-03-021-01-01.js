function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 11h15v15H2z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M4 13h11v11H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.406.406L4.97 1.812 14.187 11H17L6.406.406zM1.406.406L-.03 1.812 9.188 11H12L1.406.406zM23.375 11.813L17 18.186V21l7.781-7.781-1.406-1.406z"
}));

export default SvgComponent;