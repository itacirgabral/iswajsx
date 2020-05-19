function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 9.9V0h9.9L7.888 2.01H2.01V7.89L0 9.899zM1 17l5.5 5.5L12 17h-1.414L6.5 21.086 2.414 17H1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 4C9.82 4 4 9.82 4 17h1c0-6.627 5.373-12 12-12h2V4h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.15 5.565L17.587 19 19 17.586 5.565 4.151 4.151 5.565z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 5C10.373 5 5 10.373 5 17h3a9 9 0 019-9h2V5h-2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 8a9 9 0 00-9 9h1a8 8 0 018-8h2V8h-2z"
}));

export default SvgComponent;