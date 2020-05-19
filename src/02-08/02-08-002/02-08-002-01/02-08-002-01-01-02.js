function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17 0a4 4 0 014 4v1h-2V4a2 2 0 00-2-2h-1a3 3 0 00-3 3v10l-2.375-4.156A1.982 1.982 0 009 10a3 3 0 00-3 3v2c0 3.283 4 9 4 9H0s4-5.717 4-9v-2a5 5 0 015-5c.73 0 1.41.221 2 .563V5a5 5 0 015-5h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 5l-6 6-6-6h12z"
}));

export default SvgComponent;