function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0v1.5h1.5c7.18 0 13 5.82 13 13s-5.82 13-13 13H0V29h6.5C14.508 29 21 22.508 21 14.5S14.508 0 6.5 0H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 1.5v4h1.5a9 9 0 110 18H0v4h6.5c7.18 0 13-5.82 13-13s-5.82-13-13-13H5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 5.5V7h1.5a7.5 7.5 0 110 15H0v1.5h6.5a9 9 0 100-18H5z"
}));

export default SvgComponent;