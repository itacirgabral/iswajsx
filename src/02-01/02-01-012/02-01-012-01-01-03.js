function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 3a6 6 0 100 12A6 6 0 008 3zm0 2a4 4 0 110 8 4 4 0 010-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 5a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 7a2 2 0 100 4 2 2 0 000-4zM16 0H0v2h16V0zM16 16H0v2h16v-2z"
}));

export default SvgComponent;