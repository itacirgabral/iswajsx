function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 55,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6h42v4H0V6zM53 4h-1v7h1V4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M50 2.5a2.5 2.5 0 105 0 2.5 2.5 0 10-5 0zM47 7h-1V0h1v7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M44 8.5a2.5 2.5 0 115 0 2.5 2.5 0 11-5 0z"
}));

export default SvgComponent;