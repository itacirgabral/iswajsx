function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0L5 8h16l-8-8zm0 1.438L18.563 7H7.438L13 1.437zM12 8v20.188l-12-12V40h2V21l12 12V8h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 1.438L7.437 7h11.125L13 1.437z",
  fill: "#fff"
}));

export default SvgComponent;