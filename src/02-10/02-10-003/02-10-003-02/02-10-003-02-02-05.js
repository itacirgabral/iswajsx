function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 19.5L4 14h11l-5.5 5.5zm0-1.438L12.563 15H6.436L9.5 18.063z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 32c-2.761 0-5-5.373-5-12v-9C0 4.925 2.015 0 4.5 0h2C9.538 0 12 5.82 12 13H6.937C6.691 6.718 5.697 2 4.5 2 3.12 2 2 8.268 2 16s1.12 14 2.5 14c1.097 0 2.007-3.995 2.344-9.5H12C11.845 26.892 8.767 32 5 32z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 18.063L6.437 15h6.125L9.5 18.063z",
  fill: "#fff"
}));

export default SvgComponent;