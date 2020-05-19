function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0h1v24H9V0zM10 7l5.5-5.5L21 7H10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0h3v24H6V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 0h1v24H5V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 7v5a3 3 0 01-3 3H0v3h11a5 5 0 005-5V7h-1z"
}));

export default SvgComponent;