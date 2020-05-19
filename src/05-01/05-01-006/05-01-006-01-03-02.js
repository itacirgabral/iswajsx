function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.414 4.243l.707-.707L9.9 11.314l-.707.707zM3.536 2.121l.707-.707 7.778 7.778-.707.707z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2.121 3.536L3.536 2.12 11.314 9.9l-1.415 1.415z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v7.071h1.016V1.016h6.055V0H0z"
}));

export default SvgComponent;