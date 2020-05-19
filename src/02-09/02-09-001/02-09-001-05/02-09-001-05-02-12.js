function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 7v14l-7-7 7-7zM6 9.438L1.406 14 6 18.563V9.438zM35 0a8 8 0 010 16H7v-4h28c3.314 0 6-1.79 6-4a6 6 0 00-6-6H9V0h26z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 9.438v9.124L1.406 14 6 9.437z",
  fill: "#fff"
}));

export default SvgComponent;