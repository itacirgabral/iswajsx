function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 16.5l7 7v-14l-7 7zM7 20v-2h23v2H7zM7 15v-2h23v2H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 18h23v-3H7v3z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.5 0l-7 7h14l-7-7zM15 7h2v19h-2V7zM20 7h2v19h-2V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 7v19h3V7h-3z",
  fill: "#fff"
}));

export default SvgComponent;