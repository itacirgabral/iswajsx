function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v27h12V0L6 6 0 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 4.813V25h8V4.812l-4 4-4-4z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.375 11.813L12 18.186V21l7.781-7.781-1.406-1.406z"
}));

export default SvgComponent;