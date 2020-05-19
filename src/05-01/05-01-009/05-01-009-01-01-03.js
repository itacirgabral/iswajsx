function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 43
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 8C7.835 8 0 15.835 0 25.5S7.835 43 17.5 43 35 35.165 35 25.5 27.165 8 17.5 8zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM11.5 3a3 3 0 106 0 3 3 0 00-6 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.5 3.75v-1.5h7v1.5h-7z"
}));

export default SvgComponent;