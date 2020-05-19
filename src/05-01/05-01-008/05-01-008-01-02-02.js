function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 46,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M46 11L4 17v5l42-9v-2zM5.5 0v1H13V0H5.5zm0 8v3H10V8H5.5zM5.5 0a5.5 5.5 0 000 11V8a3.5 3.5 0 010-7V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.75 5.25L9.687 6.313 12.876 9.5l-3.188 3.188 1.063 1.062L15 9.5l-4.25-4.25z"
}));

export default SvgComponent;