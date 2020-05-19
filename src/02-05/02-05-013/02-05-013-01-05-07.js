function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 11H0V9h25v2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 4v1h-2a5 5 0 00-5 5c0 1.657 2.239 3 5 3h5v3h-5a6 6 0 010-12h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0l4.5 4.5L15 9V0zm1 2.406v4.188L18.094 4.5 16 2.406zM25 17l7-7-7-7v14zm1-2.438V5.438L30.563 10 26 14.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 14.563L30.563 10 26 5.437v9.125zM16 2.406L18.094 4.5 16 6.594V2.406z",
  fill: "#fff"
}));

export default SvgComponent;