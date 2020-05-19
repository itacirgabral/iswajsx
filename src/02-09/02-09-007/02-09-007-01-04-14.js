function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 2.5L0 7h9L4.5 2.5zM14 20C8.477 20 4 15.523 4 10V7h1v3a9 9 0 009 9h6v1h-6zM27.5 13.5L23 18V9l4.5 4.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 14c-5.523 0-10-4.477-10-10V0h1v4a9 9 0 009 9h3v1h-3z"
}));

export default SvgComponent;