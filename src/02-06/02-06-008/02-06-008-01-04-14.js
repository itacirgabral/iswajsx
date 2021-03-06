function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6l6-6 6 6H0zM13 19a9.5 9.5 0 01-9.5-9.5V6h1v3.5A8.5 8.5 0 0013 18h7v1h-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 18a8.5 8.5 0 01-8.5-8.5V6h3v3.5A5.5 5.5 0 0013 15h7v3h-7z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 15a5.5 5.5 0 01-5.5-5.5V6h1v3.5A4.5 4.5 0 0013 14h7v1h-7z"
}));

export default SvgComponent;