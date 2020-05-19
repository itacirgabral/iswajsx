function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 3v2h10V3H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 4c0-2.21 2.239-4 5-4h1v1H5a3 3 0 000 6h1v1H5C2.239 8 0 6.21 0 4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 4a2 2 0 11-4 0 2 2 0 114 0z"
}));

export default SvgComponent;