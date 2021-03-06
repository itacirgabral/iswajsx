function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 11l5.5-5.5L16 0v11zM9.9 0L0 9.9V0h9.9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.828 7.071l20.507 20.506.707-.707L3.536 6.364l-.708.707z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 16C5 9.925 9.925 5 16 5v1C10.477 6 6 10.477 6 16v2H5v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.364 3.536L26.87 24.042l.707-.707L7.071 2.828l-.707.708zM24 19l5.5-5.5L24 8v11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 24c0-6.075 4.925-11 11-11v1c-5.523 0-10 4.477-10 10v2h-1v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.536 6.364L24.042 26.87l2.828-2.828L6.364 3.536 3.536 6.364z",
  fill: "#fff"
}));

export default SvgComponent;