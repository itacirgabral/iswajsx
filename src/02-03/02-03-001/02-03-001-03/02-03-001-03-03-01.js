function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8h2.719l5.219-5.25L13.188 8H16L8 0zM4 8h2v34H4V8zM10 8h2v34h-2V8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 8v34h4V8H6z",
  fill: "#fff"
}));

export default SvgComponent;