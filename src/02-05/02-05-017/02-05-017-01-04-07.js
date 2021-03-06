function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 9v2h31V9H0zM22 3l-3.5 3.5L15 3h7zM31 3v14l7-7-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 0C23.433 0 25 1.343 25 3v8c0 4.418 1.79 8 4 8h-9c2.21 0 4-3.582 4-8V3c0-1.105-1.12-2-2.5-2S19 1.895 19 3h-1c0-1.657 1.567-3 3.5-3zM10 3L6.5 6.5 3 3h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 0C11.433 0 13 1.343 13 3v8c0 4.418 1.79 8 4 8H8c2.21 0 4-3.582 4-8V3c0-1.105-1.12-2-2.5-2S7 1.895 7 3H6c0-1.657 1.567-3 3.5-3z"
}));

export default SvgComponent;