function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0l-7 7h14l-7-7zM4 7h2v7H4V7zM9 7h2v7H9V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 7v7h3V7H6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.5 0l-7 7h14l-7-7zM16 7h2v7h-2V7zM21 7h2v7h-2V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 7v7h3V7h-3z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 16v2h27v-2H0z"
}));

export default SvgComponent;