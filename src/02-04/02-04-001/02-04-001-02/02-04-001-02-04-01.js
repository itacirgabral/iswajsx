function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0h2v22H4V0zM10 0h2v22h-2V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v22h4V0H6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 9v3h16V9H0z"
}));

export default SvgComponent;