function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.45 12.157l.707-.707L1.55.843l-.707.707L11.45 12.157zM3.671 10.036a4 4 0 005.657 0l-.707-.708a3 3 0 01-4.242 0l-.708-.707a3 3 0 010-4.242l-.707-.707a4 4 0 000 5.656l.707.708z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.379 9.328a3 3 0 004.242 0l-4.95-4.95a3 3 0 000 4.243l.708.707z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.035 3.672a4 4 0 010 5.656l-.707-.707a3 3 0 000-4.242l-.707-.707a3 3 0 00-4.242 0l-.708-.708a4 4 0 015.657 0l.707.708z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.328 4.379a3 3 0 010 4.242l-4.95-4.95a3 3 0 014.243 0l.707.708z",
  fill: "#fff"
}));

export default SvgComponent;