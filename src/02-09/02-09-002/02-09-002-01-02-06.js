function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 0l-6.5 6.5L18 13V0zm-1 2.438v8.124L12.906 6.5 17 2.437z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 6v1c2.21 0 4 2.239 4 5a4 4 0 01-4 4h-7v9a3 3 0 01-3 3H0v4h6a7 7 0 007-7v-5h3a8 8 0 008-8 6 6 0 00-6-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 2.438L12.906 6.5 17 10.563V2.437z",
  fill: "#fff"
}));

export default SvgComponent;