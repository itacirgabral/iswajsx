function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 0L5 6v21h12V6l-6-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 2.813l-4 4V25h8V6.812l-4-4z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 17v2a3 3 0 000 6v2h1V17H3zm0 3v4a2 2 0 110-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 20a2 2 0 000 4v-4z",
  fill: "#fff"
}));

export default SvgComponent;