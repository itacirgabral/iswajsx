function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 16l7-7-7-7v2.844L29.156 9 25 13.156V16zM25 10H0V8h25v2zM11 0v1.406L8.906 3.5 11 5.594V7L7.5 3.5 11 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3H8v3h5a6 6 0 000-12h-2z"
}));

export default SvgComponent;