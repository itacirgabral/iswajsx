function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 17l-7-7h14l-7 7zM4 10h2V3H4v7zM9 10h2V3H9v7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 10V3h3v7H6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.5 0l-7 7h14l-7-7zM17 7h2v7h-2V7zM22 7h2v7h-2V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 7v7h3V7h-3z",
  fill: "#fff"
}));

export default SvgComponent;