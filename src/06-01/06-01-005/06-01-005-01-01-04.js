function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.5 35C8.835 35 1 27.165 1 17.5S8.835 0 18.5 0 36 7.835 36 17.5 28.165 35 18.5 35zm0-1.5c8.836 0 16-7.163 16-16 0-8.836-7.164-16-16-16-8.837 0-16 7.164-16 16 0 8.837 7.163 16 16 16zM.813 27.406l-.688.688 7.781 7.781.688-.688-7.781-7.78zM1.53 33.764a3 3 0 010-4.243l.706.707a2 2 0 000 2.829l.707.707a2 2 0 002.829 0l.707.707a3 3 0 01-4.243 0l-.707-.707z"
}));

export default SvgComponent;