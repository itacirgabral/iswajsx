function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 26l4.5-4.5L13 17v1.438l3.063 3.062L13 24.563V26zM0 12c0 5.523 4.477 10 10 10h3v-1h-3a9 9 0 01-9-9V6H0v6zM19 20l4.5-4.5L19 11v1.438l3.063 3.062L19 18.563V20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 6c0 5.523 4.477 10 10 10h3v-1h-3a9 9 0 01-9-9V0H6v6z"
}));

export default SvgComponent;