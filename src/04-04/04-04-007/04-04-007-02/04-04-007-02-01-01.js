function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 24h1v4h-1zM24 24h1v4h-1zM24.5 19l-2.594 4.469.875.531 1.719-2.969L26.219 24l.875-.531L24.5 19zM10.5 19l-2.594 4.469.875.531 1.719-2.969L12.219 24l.875-.531L10.5 19zM20 26a2.5 3 0 11-5 0 2.5 3 0 115 0z"
}));

export default SvgComponent;