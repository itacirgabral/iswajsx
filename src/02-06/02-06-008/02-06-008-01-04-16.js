function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0l6 6-6 6V0zM0 13a9.5 9.5 0 019.5-9.5H13v1H9.5A8.5 8.5 0 001 13v7H0v-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 13a8.5 8.5 0 018.5-8.5H13v3H9.5A5.5 5.5 0 004 13v7H1v-7z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 13a5.5 5.5 0 015.5-5.5H13v1H9.5A4.5 4.5 0 005 13v7H4v-7z"
}));

export default SvgComponent;