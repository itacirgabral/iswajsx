function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M31 9v2h-6V9h6zm-9 0v2h-9V9h9zM10 9v2H0V9h10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 0a3 3 0 013 3v8a4 4 0 004 4h-9a4 4 0 004-4V3a2 2 0 00-4 0v4h-1V3a3 3 0 013-3zM28 15l-4.5 4.5L19 15h9zM31 3v14l7-7-7-7zM8.5 0C10.433 0 12 1.343 12 3v8c0 4.418 1.79 8 4 8H7c2.21 0 4-3.582 4-8V3c0-1.105-1.12-2-2.5-2S6 1.895 6 3H5c0-1.657 1.567-3 3.5-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 3l3.5 3.5L9 3H2z"
}));

export default SvgComponent;