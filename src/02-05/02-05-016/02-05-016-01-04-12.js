function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 0C8.82 0 3 5.82 3 13h1C4 6.373 9.373 1 16 1h2V0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.435 14.85L2 1.413 3.414 0 16.85 13.435l-1.414 1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 1C9.373 1 4 6.373 4 13h3a9 9 0 019-9h2V1h-2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 4a9 9 0 00-9 9h1a8 8 0 018-8h2V4h-2zM11 13l-5.5 5.5L0 13h11zM21 9.1L11.1 19H21V9.1z"
}));

export default SvgComponent;