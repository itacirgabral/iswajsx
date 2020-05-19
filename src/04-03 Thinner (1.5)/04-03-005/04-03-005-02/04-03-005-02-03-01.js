function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23.5 0C14.376 0 6.904 6.993 6.094 15.906l1.5.125C8.34 7.89 15.163 1.5 23.5 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16c-3.48 0-6.687-1.114-9.313-3l-.843 1.219C16.21 33.769 19.707 35 23.5 35 33.165 35 41 27.165 41 17.5S33.165 0 23.5 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 23v2h17v-2H0zM17 26L0 30.563.5 32.5l17.031-4.563L17 26zM.5 15.5L0 17.438 17 22l.531-1.938L.5 15.5z"
}));

export default SvgComponent;