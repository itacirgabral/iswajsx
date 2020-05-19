function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 6.5L26 11h-9l4.5-4.5zM12 24c5.523 0 10-4.477 10-10v-3h-1v3a9 9 0 01-9 9H6v1h6zM15.5.5L20 5h-9L15.5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 18c5.523 0 10-4.477 10-10V5h-1v3a9 9 0 01-9 9H0v1h6z"
}));

export default SvgComponent;