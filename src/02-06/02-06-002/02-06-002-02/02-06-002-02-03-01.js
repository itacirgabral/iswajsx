function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L.5 7.5 8 15v-2.813L3.312 7.5 8 2.812V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 4v1.5h1.5c7.18 0 13 5.82 13 13s-5.82 13-13 13H3V33h6.5C17.508 33 24 26.508 24 18.5S17.508 4 9.5 4H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 5.5v4h1.5a9 9 0 110 18H3v4h6.5c7.18 0 13-5.82 13-13s-5.82-13-13-13H8z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 9.5V11h1.5a7.5 7.5 0 110 15H3v1.5h6.5a9 9 0 100-18H8z"
}));

export default SvgComponent;