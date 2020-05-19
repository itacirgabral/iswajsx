function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 13C7.835 13 0 20.835 0 30.5S7.835 48 17.5 48 35 40.165 35 30.5 27.165 13 17.5 13zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM21.378 11.121a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25.444 8.116l-1.06-1.06 4.95-4.95 1.06 1.06-4.95 4.95zM21.621.878a3 3 0 11-4.242 4.243A3 3 0 0121.62.878z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.616 4.944l-1.06-1.06-4.95 4.95 1.06 1.06 4.95-4.95z"
}));

export default SvgComponent;