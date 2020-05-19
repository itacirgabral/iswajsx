function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v7l7-7H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 8a9.956 9.956 0 01-7.063-2.938L3.125 3.875l.75-.75 1.25 1.25A8.988 8.988 0 0011.5 7a8.988 8.988 0 006.375-2.625L22.281 0 23 .719l-4.438 4.343A9.956 9.956 0 0111.5 8z"
}));

export default SvgComponent;