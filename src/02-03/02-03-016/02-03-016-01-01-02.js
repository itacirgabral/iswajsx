function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.828 7.071l16.264 16.264.707-.708L3.536 6.364l-.708.707zM14 19l-5.5 5.5L3 19h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.9 0L0 9.9V0h9.9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.364 3.536l16.263 16.263.708-.707L7.07 2.828l-.707.708z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 8C12.925 8 8 12.925 8 19h1c0-5.523 4.477-10 10-10h2V8h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.536 6.364l16.263 16.263 2.828-2.828L6.364 3.536 3.536 6.364z",
  fill: "#fff"
}));

export default SvgComponent;