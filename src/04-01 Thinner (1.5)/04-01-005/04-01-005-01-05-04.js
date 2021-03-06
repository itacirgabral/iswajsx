function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 45,
  height: 45
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 10C7.835 10 0 17.835 0 27.5S7.835 45 17.5 45 35 37.165 35 27.5 27.165 10 17.5 10zm.094 1.5c8.836 0 16 7.163 16 16s-7.164 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16zM21.958 7.778h7.071V6.762h-6.054V.707h-1.017v7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25.14 5.303l-.707-.707L28.676.354l.707.707-4.243 4.242zM38.222 7.071H31.15v1.017h6.054v6.054h1.017v-7.07z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M35.04 9.546l.707.707-4.243 4.243-.707-.707 4.243-4.243zM37.515 23.335h7.07v-1.017h-6.054v-6.055h-1.016v7.072z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M40.697 20.86l-.707-.707 4.242-4.243.707.707-4.242 4.243z"
}));

export default SvgComponent;