function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 10H0v4h42v-4zM11 6V0h6v1h-5v5h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 5a8.725 8.725 0 01-6.25-2.625l.719-.719A7.707 7.707 0 0021 4a7.707 7.707 0 005.531-2.344L28.156 0l.719.719-1.625 1.656A8.725 8.725 0 0121 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 7a10.704 10.704 0 01-7.625-3.188l1.375-1.437A8.725 8.725 0 0021 5a8.725 8.725 0 006.25-2.625L28.875.719l1.406 1.406-1.656 1.688A10.704 10.704 0 0121 7z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 8a11.72 11.72 0 01-8.344-3.469l.719-.718A10.704 10.704 0 0021 7c2.985 0 5.677-1.223 7.625-3.188l1.656-1.687.719.719-1.656 1.687A11.72 11.72 0 0121 8z"
}));

export default SvgComponent;