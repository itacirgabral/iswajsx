function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8h16L8 0zm0 1.438l5.531 5.53H2.47L8 1.439zM4 8h2v34H4V8zM10 8h2v34h-2V8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 8v34h4V8H6zM8 1.438l-5.531 5.53H13.53L8 1.439z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 19.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"
}));

export default SvgComponent;