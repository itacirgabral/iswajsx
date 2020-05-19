function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.799 5.657L1.414 24.042 0 22.628 18.385 4.243l1.414 1.414zM14 15l5.5 5.5L25 15H14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.1 0L24 9.9V0h-9.9zM9 4c6.075 0 11 4.925 11 11h-1C19 9.477 14.523 5 9 5H7V4h2zM7 22l5.5 5.5L18 22H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 11c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H0v-1h2z"
}));

export default SvgComponent;