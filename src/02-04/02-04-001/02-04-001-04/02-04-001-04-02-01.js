function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 50
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8h16L8 0zm0 1.438l5.531 5.53H2.47L8 1.439zM4 8h2v42H4V8zM10 8h2v42h-2V8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 8v42h4V8H6zM8 1.438l-5.531 5.53H13.53L8 1.439z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 27v4h16v-4H0z"
}));

export default SvgComponent;