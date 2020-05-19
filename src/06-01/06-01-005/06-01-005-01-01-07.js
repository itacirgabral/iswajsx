function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M35 17.5C35 27.165 27.165 35 17.5 35S0 27.165 0 17.5 7.835 0 17.5 0 35 7.835 35 17.5zm-1.5 0c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zM37 12v11h1V12h-1zM41 18a3 3 0 01-3 3v-1a2 2 0 002-2v-1a2 2 0 00-2-2v-1a3 3 0 013 3v1z"
}));

export default SvgComponent;