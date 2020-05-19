function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 45,
  height: 45
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M27.5 10C17.835 10 10 17.835 10 27.5S17.835 45 27.5 45 45 37.165 45 27.5 37.165 10 27.5 10zm0 2C36.06 12 43 18.94 43 27.5 43 36.06 36.06 43 27.5 43 18.94 43 12 36.06 12 27.5 12 18.94 18.94 12 27.5 12zM23.042 7.778h-7.071V6.762h6.055V.707h1.016v7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.86 5.303l.707-.707L16.324.354l-.707.707 4.243 4.242zM6.779 7.071h7.07v1.017H7.796v6.054H6.779v-7.07z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.96 9.546l-.707.707 4.243 4.243.707-.707L9.96 9.546zM7.486 23.335H.415v-1.017h6.054v-6.055h1.017v7.072z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.304 20.86l.707-.707L.768 15.91l-.707.707 4.243 4.243z"
}));

export default SvgComponent;