function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 8H0V6h25v2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 2a6 6 0 010 12h-3v-3h3c2.761 0 5-1.343 5-3a5 5 0 00-5-5h-3V2h3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 8l-4.5 4.5L11 17V8zm-1 2.406v4.188L7.906 12.5 10 10.406zM25 14l7-7-7-7v14zm1-2.438V2.438L30.563 7 26 11.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 11.563L30.563 7 26 2.437v9.126zM10 10.406L7.906 12.5 10 14.594v-4.188z",
  fill: "#fff"
}));

export default SvgComponent;