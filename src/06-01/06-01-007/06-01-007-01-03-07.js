function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15.5 23a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 0v22L9 37l-1.406-1.406L22 21.187V5H0V0h24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 5v1h21v14.75L6.156 35.594 7.563 37H9l-1.406-1.406L22 21.187V5H0zm9 32h1.406L24 23.437V22L9 37z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.5 24a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"
}));

export default SvgComponent;