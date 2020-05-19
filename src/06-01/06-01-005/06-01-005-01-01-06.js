function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 35C27.165 35 35 27.165 35 17.5S27.165 0 17.5 0 0 7.835 0 17.5 7.835 35 17.5 35zm0-1.5c-8.837 0-16-7.163-16-16 0-8.836 7.163-16 16-16s16 7.164 16 16c0 8.837-7.163 16-16 16zM35.188 27.406l-7.782 7.782.688.687 7.781-7.781-.688-.688zM34.47 33.764a3 3 0 000-4.243l-.707.707a2 2 0 010 2.829l-.707.707a2 2 0 01-2.828 0l-.707.707a3 3 0 004.242 0l.708-.707z"
}));

export default SvgComponent;