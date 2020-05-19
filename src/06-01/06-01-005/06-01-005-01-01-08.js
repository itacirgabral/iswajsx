function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 1C27.165 1 35 8.835 35 18.5S27.165 36 17.5 36 0 28.165 0 18.5 7.835 1 17.5 1zm0 1.5c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM28.094.125l-.688.688 7.782 7.78.687-.687L28.094.125zM34.47 2.237a3 3 0 010 4.242l-.707-.707a2 2 0 000-2.828l-.707-.707a2 2 0 00-2.828 0l-.707-.708a3 3 0 014.242 0l.708.708z"
}));

export default SvgComponent;