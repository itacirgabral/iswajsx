function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 46
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 11C7.835 11 0 18.835 0 28.5S7.835 46 17.5 46 35 38.165 35 28.5 27.165 11 17.5 11zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM29.622 1.878a3 3 0 11-4.243 4.243 3 3 0 014.243-4.243z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26.616 5.944l-1.06-1.06-4.95 4.95 1.06 1.06 4.95-4.95zM21.622.878a3 3 0 11-4.243 4.243A3 3 0 0121.622.878z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.616 4.944l-1.06-1.06-4.95 4.95 1.06 1.06 4.95-4.95z"
}));

export default SvgComponent;