function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 16L0 9l7-7v2.844L2.844 9 7 13.156V16zM7 10h25V8H7v2zM21 0v1.406L23.094 3.5 21 5.594V7l3.5-3.5L21 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 3v1h-2a5 5 0 00-5 5c0 1.657 2.239 3 5 3h5v3h-5a6 6 0 010-12h2z"
}));

export default SvgComponent;