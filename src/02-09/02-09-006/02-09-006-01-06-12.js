function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 26l-4.5-4.5L11 17v1.438L7.937 21.5 11 24.563V26zM24 12c0 5.523-4.477 10-10 10h-3v-1h3a9 9 0 009-9V6h1v6zM5 20L.5 15.5 5 11v1.438L1.937 15.5 5 18.563V20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 6c0 5.523-4.477 10-10 10H5v-1h3a9 9 0 009-9V0h1v6z"
}));

export default SvgComponent;