function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 11v16l-8-8 8-8zm-1 2.438L1.406 19 7 24.563V13.438z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 0a8 8 0 018 8v4a9 9 0 01-9 9H8v-4h18a6 6 0 006-6V8a6 6 0 00-6-6H5V0h21z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 13.438v11.124L1.406 19 7 13.437z",
  fill: "#fff"
}));

export default SvgComponent;