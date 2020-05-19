function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 18a8 8 0 11-16 0 8 8 0 1116 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 0C1.344 0 0 1.344 0 3c0 1.3.842 2.397 2 2.813V18h2V5.812C5.158 5.397 6 4.301 6 3c0-1.656-1.344-3-3-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 16v2h16c0-.688-.086-1.362-.25-2H2z",
  fill: "#fff"
}));

export default SvgComponent;