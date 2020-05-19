function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v26h29V0h-2v24H2V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v20h17V0h-2v18H8V0H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v24h25V0h-4v20H6V0H2z",
  fill: "#fff"
}));

export default SvgComponent;