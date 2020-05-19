function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 13C7.835 13 0 20.835 0 30.5S7.835 48 17.5 48 35 40.165 35 30.5 27.165 13 17.5 13zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM17.5 12a3 3 0 110-6 3 3 0 010 6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.75 7h1.5V0h-1.5v7zM9.5 12a3 3 0 110-6 3 3 0 010 6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.75 7h1.5V0h-1.5v7zM25.5 12a3 3 0 110-6 3 3 0 010 6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.75 7h1.5V0h-1.5v7z"
}));

export default SvgComponent;