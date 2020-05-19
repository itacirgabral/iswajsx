function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 72,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 14h72v7H0v-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M72 7H0v7h72V7z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v7h72V0H0z"
}));

export default SvgComponent;