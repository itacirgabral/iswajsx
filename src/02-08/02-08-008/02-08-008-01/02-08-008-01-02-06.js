function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 13l7 7H4l7-7zm0 1.406L6.437 19h9.125L11 14.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v21a3 3 0 003 3c1.657 0 3-1.79 3-4h6a6 6 0 01-6 6H5a5 5 0 01-5-5V0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 14.406L15.563 19H6.437L11 14.406z",
  fill: "#fff"
}));

export default SvgComponent;