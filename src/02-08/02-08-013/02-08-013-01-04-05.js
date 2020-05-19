function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 18l4.5-4.5L9 18H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 0v17c0 1.657-.895 3-2 3a2 2 0 01-2-2H2a4 4 0 004 4h1a5 5 0 005-5V0h-1zM12 18l4.5-4.5L21 18h-9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 0v17c0 1.657-.895 3-2 3a2 2 0 01-2-2h-5a4 4 0 004 4h1a5 5 0 005-5V0h-1z"
}));

export default SvgComponent;