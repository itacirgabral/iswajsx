function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0l6 6v21H0V6l6-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 2.813l4 4V25H2V6.812l4-4z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 8v2a3 3 0 010 6v2h-1V8h1zm0 3v4a2 2 0 100-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 11a2 2 0 010 4v-4z",
  fill: "#fff"
}));

export default SvgComponent;