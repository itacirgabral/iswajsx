function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 20l6-6-6-6v12zM0 7a9.5 9.5 0 009.5 9.5H13v-1H9.5A8.5 8.5 0 011 7V0H0v7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 7a8.5 8.5 0 008.5 8.5H13v-3H9.5A5.5 5.5 0 014 7V0H1v7z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 7a5.5 5.5 0 005.5 5.5H13v-1H9.5A4.5 4.5 0 015 7V0H4v7z"
}));

export default SvgComponent;