function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 41
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 35C7.835 35 0 27.165 0 17.5S7.835 0 17.5 0 35 7.835 35 17.5 27.165 35 17.5 35zm0-1.5c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM12 37v1h11v-1H12zM17 41a3 3 0 01-3-3h1a2 2 0 002 2h1a2 2 0 002-2h1a3 3 0 01-3 3h-1z"
}));

export default SvgComponent;