function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 14l7-7-7-7v2.844L29.156 7 25 11.156V14zM25 8H0V6h25v2zM10 9v1.406L7.906 12.5 10 14.594V16l-3.5-3.5L10 9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 2v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-3v3h3a6 6 0 000-12h-3z"
}));

export default SvgComponent;