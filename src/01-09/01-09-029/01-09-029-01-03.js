function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 8h8v18h-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 6c-5 0-5 5-5 5v3h3v-2c0-2 2-2 2-2h3c2 0 2 2 2 2V8h2.125C10.692 6.02 8 6 8 6H5zM16.092 8.017L18 8V0h-7v5h2V3h3l.092 5.017z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.969 3.281l-1.907.5L10 26v-7.719l-4.031-15z"
}));

export default SvgComponent;