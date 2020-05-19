function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 4.5L13 0v9l4.5-4.5zM0 14C0 8.477 4.477 4 10 4h3v1h-3a9 9 0 00-9 9v6H0v-6zM6.5 27.5L2 23h9l-4.5 4.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 20c0-5.523 4.477-10 10-10h4v1h-4a9 9 0 00-9 9v3H6v-3z"
}));

export default SvgComponent;