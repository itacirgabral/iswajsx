function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 7v16l8-8-8-8zm1 2.438L27.594 15 22 20.563V9.438z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 0a7 7 0 00-7 7v2a8 8 0 008 8h13v-4H7a5 5 0 01-5-5V7a5 5 0 015-5h17V0H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 9.438v11.124L27.594 15 22 9.437z",
  fill: "#fff"
}));

export default SvgComponent;