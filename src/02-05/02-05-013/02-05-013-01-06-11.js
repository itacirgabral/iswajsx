function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 14l7-7-7-7v2.844L29.156 7 25 11.156V14zM25 8H0V6h25v2zM17 9v1.406l2.094 2.094L17 14.594V16l3.5-3.5L17 9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 2v1h-3a5 5 0 00-5 5c0 1.657 2.239 3 5 3h3v3h-3a6 6 0 010-12h3z"
}));

export default SvgComponent;