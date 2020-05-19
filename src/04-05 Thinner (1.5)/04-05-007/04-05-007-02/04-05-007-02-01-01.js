function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 23v6h10v-6h-1v4.5h-2V23h-1v4.5h-2V23h-1v4.5h-2V23h-1zM7 18v1H6v1h1v2H6v1h1v1h1v-1h2v1h1v-1h1v-1h-1v-2h1v-1h-1v-1h-1v1H8v-1H7zm1 2h2v2H8v-2zM25 18v1h-1v1h1v2h-1v1h1v1h1v-1h2v1h1v-1h1v-1h-1v-2h1v-1h-1v-1h-1v1h-2v-1h-1zm1 2h2v2h-2v-2z"
}));

export default SvgComponent;