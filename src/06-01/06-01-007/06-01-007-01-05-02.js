function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 3v30h15V18H8V3H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 20H8v11h11V20z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 0v2a3 3 0 000 6v2h1V0H3zm0 3v4a2 2 0 110-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 3a2 2 0 100 4V3z",
  fill: "#fff"
}));

export default SvgComponent;