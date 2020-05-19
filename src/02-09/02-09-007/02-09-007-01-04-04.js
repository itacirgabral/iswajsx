function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 23.5L13 28v-9l4.5 4.5zM0 14c0 5.523 4.477 10 10 10h3v-1h-3a9 9 0 01-9-9V8H0v6zM6.5.5L2 5h9L6.5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 8c0 5.523 4.477 10 10 10h4v-1h-4a9 9 0 01-9-9V5H6v3z"
}));

export default SvgComponent;