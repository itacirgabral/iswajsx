function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 58
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M31.656 32H20.344L.719 51.625l5.656 5.656L31.656 32z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M42.656 21H31.344l-11 11h11.312l11-11z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M51.625.719L31.344 21h11.312L57.281 6.375 51.625.719zM29.5 24C26 24 26 28 26 28h2s0-2 1.5-2 1.5 2 4 2c3.5 0 3.5-4 3.5-4h-2s0 2-1.5 2-1.5-2-4-2z"
}));

export default SvgComponent;