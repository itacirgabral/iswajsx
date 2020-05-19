function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 9v2h6V9H7zm9 0v2h9V9h-9zm12 0v2h10V9H28z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M29 0a3 3 0 00-3 3v8a4 4 0 01-4 4h9a4 4 0 01-4-4V3a2 2 0 014 0v4h1V3a3 3 0 00-3-3zM22 15l4.5 4.5L31 15h-9zM7 3v14l-7-7 7-7zM17.5 0C15.567 0 14 1.343 14 3v8c0 4.418-1.79 8-4 8h9c-2.21 0-4-3.582-4-8V3c0-1.105 1.12-2 2.5-2s2.5.895 2.5 2h1c0-1.657-1.567-3-3.5-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 3l-3.5 3.5L17 3h7z"
}));

export default SvgComponent;