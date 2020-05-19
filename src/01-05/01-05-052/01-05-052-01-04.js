function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.938 13.375l-7 12.125L6 29l7-12.125-6.063-3.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.313 14.75l-6 10.375 4.312 2.5 6-10.375-4.313-2.5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5.406l-3.469 2 4.063 7.031 6.906 4L3.5.408zM11.75 23l-1.156 2H15v-2h-3.25z"
}));

export default SvgComponent;