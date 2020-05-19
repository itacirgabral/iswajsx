function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.903 6.989c.096-.165.239-.312.31-.486.195-.482.309-.991.309-1.503 0-.512-.114-1.021-.31-1.503a4.014 4.014 0 00-.884-1.325 4.014 4.014 0 00-1.325-.884A4.012 4.012 0 005.5.978c-.512 0-1.021.114-1.503.31-.174.07-.321.213-.486.31l5.392 5.39z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z"
}));

export default SvgComponent;