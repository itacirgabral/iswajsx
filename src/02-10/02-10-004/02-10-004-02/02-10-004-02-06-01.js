function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 16h2l3.5-3.5L9 16h2l-5.5-5.5L0 16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0C7.598 0 5.575 4.079 5.094 9.5h1.281C6.872 5.058 7.85 2 9 2c1.657 0 3 6.268 3 14s-1.343 14-3 14c-1.106 0-2.05-2.833-2.563-7H5.095c.385 5.118 2.2 9 4.406 9h2c3.038 0 4.5-5.82 4.5-13v-7c0-6.627-2.134-12-6-12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 22h2l3.5-3.5L9 22h2l-5.5-5.5L0 22z"
}));

export default SvgComponent;