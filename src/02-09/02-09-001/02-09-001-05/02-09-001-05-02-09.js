function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23 7v14l-7-7 7-7zm-1 2.438L17.406 14 22 18.563V9.438z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M30 0a8 8 0 010 16h-7v-4h7c3.314 0 6-1.79 6-4a6 6 0 00-6-6H10a8 8 0 00-8 8v4H0v-4C0 4.477 4.477 0 10 0h20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 9.438v9.124L17.406 14 22 9.437z",
  fill: "#fff"
}));

export default SvgComponent;