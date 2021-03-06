function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 17.5C6 27.165 13.835 35 23.5 35S41 27.165 41 17.5 33.165 0 23.5 0 6 7.835 6 17.5zm1.5 0c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16-16-7.163-16-16zM3 12v11h1V12H3zM0 18a3 3 0 003 3v-1a2 2 0 01-2-2v-1a2 2 0 012-2v-1a3 3 0 00-3 3v1z"
}));

export default SvgComponent;