function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.364 3.536l16.263 16.263.708-.707L7.07 2.828l-.707.708z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 9.9V0h9.9L7.888 2.01H2.01V7.89L0 9.899z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.828 7.071l16.264 16.264.707-.708L3.536 6.364l-.708.707zM18.998 2.998L24.5 8.5l-5.502 5.502v-1.414L23.086 8.5l-4.088-4.088V2.998z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 19c0-6.075 4.925-11 11-11v1C13.477 9 9 13.477 9 19v2H8v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.536 6.364l16.263 16.263 2.828-2.828L6.364 3.536 3.536 6.364z",
  fill: "#fff"
}));

export default SvgComponent;