function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.938 13.375l-7 12.125L6 29l7-12.125-6.063-3.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.313 14.75l-6 10.375 2.156 1.25 6-10.375-2.156-1.25z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5.406l-3.469 2 6.625 11.469.282-.5 6.062 3.5L3.5.406z"
}));

export default SvgComponent;