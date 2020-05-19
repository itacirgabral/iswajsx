function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 8H0V6h25v2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 2v1h-3a5 5 0 00-5 5c0 1.657 2.239 3 5 3h2v3h-2a6 6 0 010-12h3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 8l4.5 4.5L16 17V8zm1 2.406v4.188l2.094-2.094L17 10.406zM25 14l7-7-7-7v14zm1-2.438V2.438L30.563 7 26 11.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 11.563L30.563 7 26 2.437v9.126zM17 10.406l2.094 2.094L17 14.594v-4.188z",
  fill: "#fff"
}));

export default SvgComponent;