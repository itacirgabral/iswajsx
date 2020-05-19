function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M28 7l-4.5-4.5L19 7h1.438L23.5 3.937 26.563 7H28zM14 20c5.523 0 10-4.477 10-10V7h-1v3a9 9 0 01-9 9H8v1h6zM5 18L.5 13.5 5 9v1.438L1.937 13.5 5 16.563V18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 14c5.523 0 10-4.477 10-10V0h-1v4a9 9 0 01-9 9H5v1h3z"
}));

export default SvgComponent;