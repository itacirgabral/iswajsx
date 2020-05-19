function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 19c7.18 0 13-5.82 13-13h-1c0 6.627-5.373 12-12 12H0v1h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 18c6.627 0 12-5.373 12-12h-3a9 9 0 01-9 9H0v3h2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.849 17.435L1.414 4 0 5.414 13.435 18.85l1.414-1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 15a9 9 0 009-9h-1a8 8 0 01-8 8H0v1h2zM7 6L12.5.5 18 6H7zM9.1 23l9.9-9.9V23H9.1z"
}));

export default SvgComponent;