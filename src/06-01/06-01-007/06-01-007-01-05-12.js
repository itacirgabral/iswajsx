function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v30h15V15H2V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 17H2v11h11V17z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 4v2a3 3 0 010 6v2H4V4h1zm0 3v4a2 2 0 100-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 7a2 2 0 010 4V7z",
  fill: "#fff"
}));

export default SvgComponent;