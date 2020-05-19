function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0a4 4 0 00-4 4v4h2V4a2 2 0 114 0v10h2V4a4 4 0 00-4-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.031 0A5.19 5.19 0 000 1.031V4a4 4 0 014-4H1.031zM4 0a4 4 0 014 4v10h1V4C9 2.36 8.188.912 6.969 0H4zm0 2a2 2 0 00-2 2v4H0v1h3V4a1 1 0 012 0v10h1V4a2 2 0 00-2-2z",
  fill: "#fff"
}));

export default SvgComponent;