function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 0v1.5h1.5c6.075 0 11 4.925 11 11s-4.925 11-11 11H0V25h4.5C11.404 25 17 19.404 17 12.5S11.404 0 4.5 0H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 1.5v4h1.5a7 7 0 010 14H0v4h4.5c6.075 0 11-4.925 11-11s-4.925-11-11-11H3z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 5.5V7h1.5a5.5 5.5 0 010 11H0v1.5h4.5a7 7 0 000-14H3z"
}));

export default SvgComponent;