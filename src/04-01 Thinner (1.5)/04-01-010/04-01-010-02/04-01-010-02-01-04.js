function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 46
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 4v2h18V4h-18zM17.5 11C27.165 11 35 18.835 35 28.5S27.165 46 17.5 46 0 38.165 0 28.5 7.835 11 17.5 11zm0 1.5c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM14.5 10l1.407-1.406L13.313 6H10.5l4 4z"
}));

export default SvgComponent;