function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C27.165 0 35 7.835 35 17.5S27.165 35 17.5 35 0 27.165 0 17.5 7.835 0 17.5 0zm0 1.5c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 29a4 4 0 110-8v1c-1.38 0-2.5 1.343-2.5 3s1.12 3 2.5 3v1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 29a4 4 0 110-8v1c-1.38 0-2.5 1.343-2.5 3s1.12 3 2.5 3v1z"
}));

export default SvgComponent;