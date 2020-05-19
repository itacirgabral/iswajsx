function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8h2.719l5.219-5.25L13.188 8H16L8 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27 5v20H6V8H4v19h25V5h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 5v14h-9V8h-2v13h13V5h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 5v16H10V8H6v17h21V5h-4z",
  fill: "#fff"
}));

export default SvgComponent;