function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 19c7.18 0 13-5.82 13-13h-1c0 6.627-5.373 12-12 12H3v1h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 18c6.627 0 12-5.373 12-12h-3a9 9 0 01-9 9H3v3h2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.565 4.15L19 17.587 17.586 19 4.15 5.565l1.414-1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 15a9 9 0 009-9h-1a8 8 0 01-8 8H3v1h2zM10 6L15.5.5 21 6H10zM0 9.9L9.9 0H0v9.9z"
}));

export default SvgComponent;