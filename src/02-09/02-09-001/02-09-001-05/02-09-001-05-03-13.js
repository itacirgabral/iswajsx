function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 45,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 0v2l5 5-5 5v2l7-7-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M37 6a8 8 0 010 16H8A8 8 0 118 6h8v2H8a6 6 0 00-6 6c0 2.21 2.686 4 6 4h29c3.314 0 6-1.79 6-4a6 6 0 00-6-6h-9V6h9z"
}));

export default SvgComponent;