function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 19h2l3.5-3.5L9 19h2l-5.5-5.5L0 19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0C7.239 0 5 5.373 5 12v.5h1.125C6.46 6.478 7.605 2 9 2c1.657 0 3 6.268 3 14s-1.343 14-3 14c-1.356 0-2.472-4.237-2.844-10H5v1c0 6.075 2.015 11 4.5 11h2c3.038 0 4.5-5.82 4.5-13v-7c0-6.627-2.134-12-6-12z"
}));

export default SvgComponent;