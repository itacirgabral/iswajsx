function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 55,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M55 4H13v4h42V4zM7 9V8H0v1h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 6a2.5 2.5 0 110 5 2.5 2.5 0 110-5zM7 3V2H0v1h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 0a2.5 2.5 0 110 5 2.5 2.5 0 110-5z"
}));

export default SvgComponent;