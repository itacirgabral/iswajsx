function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 3v30h15V18H2V3H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 20H2v11h11V20z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 0v2a3 3 0 010 6v2H4V0h1zm0 3v4a2 2 0 000-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 3a2 2 0 010 4V3z",
  fill: "#fff"
}));

export default SvgComponent;