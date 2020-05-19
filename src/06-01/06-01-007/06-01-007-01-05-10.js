function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v30h15V15H8V0H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 17H8v11h11V17z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 5v2a3 3 0 000 6v2h1V5H3zm0 3v4a2 2 0 110-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 8a2 2 0 000 4V8z",
  fill: "#fff"
}));

export default SvgComponent;