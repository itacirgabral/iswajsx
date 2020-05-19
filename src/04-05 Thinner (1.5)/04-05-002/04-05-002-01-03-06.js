function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 0a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 110 4 2 2 0 010-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 1a2 2 0 100 4 2 2 0 000-4zm0 1a1 1 0 110 2 1 1 0 010-2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 3a1 1 0 11-2 0 1 1 0 112 0z"
}));

export default SvgComponent;