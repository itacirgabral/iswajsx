function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 45
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 10C8.059 10 0 17.835 0 27.5S8.059 45 18 45s18-7.835 18-17.5S27.941 10 18 10zm0 2c8.837 0 16 6.94 16 15.5C34 36.06 26.837 43 18 43S2 36.06 2 27.5C2 18.94 9.163 12 18 12zM19.688 0L13.5 6.188l.719.687L20.375.687 19.687 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.375.688l-6.156 6.187 1.406 1.438 6.188-6.188L20.375.687z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.813 2.125l-6.188 6.188.688.687L22.5 2.812l-.688-.687z"
}));

export default SvgComponent;