function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 0h2v15H3V0zM8 0h2v15H8V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 0v15h3V0H5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 6v3h13V6H0z"
}));

export default SvgComponent;