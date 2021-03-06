function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 46
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26.5 6V4h-18v2h18zM17.5 11C27.165 11 35 18.835 35 28.5S27.165 46 17.5 46 0 38.165 0 28.5 7.835 11 17.5 11zm0 1.5c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM20.5 0l-1.406 1.406L21.687 4H24.5l-4-4z"
}));

export default SvgComponent;