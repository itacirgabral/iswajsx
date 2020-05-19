function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0L0 7l7 7V0zM6 2.438v9.124L1.406 7 6 2.437zM27 22a6 6 0 00-6-6h-5v-4a6 6 0 00-6-6H7v2h3a4 4 0 014 4v6h7a4 4 0 014 4v5h2v-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 2.438L1.406 7 6 11.563V2.437z",
  fill: "#fff"
}));

export default SvgComponent;