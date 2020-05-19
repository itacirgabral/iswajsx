function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 13l8 8H5l8-8zm0 1.438L7.437 20h11.125L13 14.437z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v23a4 4 0 004 4c1.657 0 3-2.686 3-6h8a8 8 0 01-8 8H6a6 6 0 01-6-6V0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 14.438L18.563 20H7.438L13 14.437z",
  fill: "#fff"
}));

export default SvgComponent;