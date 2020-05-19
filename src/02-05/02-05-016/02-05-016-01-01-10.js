function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 4c7.18 0 13 5.82 13 13h-1C14 10.373 8.627 5 2 5H0V4h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.849 5.565L1.414 19 0 17.586 13.435 4.15l1.414 1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 5c6.627 0 12 5.373 12 12h-3a9 9 0 00-9-9H0V5h2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 8a9 9 0 019 9h-1a8 8 0 00-8-8H0V8h2zM7 17l5.5 5.5L18 17H7zM9.1 0L19 9.9V0H9.1z"
}));

export default SvgComponent;