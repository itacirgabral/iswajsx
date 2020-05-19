function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 16l7-7-7-7v2.844L29.156 9 25 13.156V16zM25 10H0V8h25v2zM16 0v1.406L18.094 3.5 16 5.594V7l3.5-3.5L16 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 3v1h-2a5 5 0 00-5 5c0 1.657 2.239 3 5 3h5v3h-5a6 6 0 010-12h2z"
}));

export default SvgComponent;