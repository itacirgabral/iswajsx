function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 10v2h-9v-2h9zm-12 0v2H0v-2h13zM9 6h11L14.5.5 9 6zm2.408-.994L14.5 1.914l3.07 3.07-6.162.022zM25 18l7-7-7-7v14zm1-2.438V6.438L30.563 11 26 15.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 15.563L30.563 11 26 6.437v9.125zM11.408 5.006l6.162-.022-3.07-3.07-3.092 3.092z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 5v10c0 1.105-.672 2-1.5 2s-1.5-.895-1.5-2v-1H6v1c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4V5h-1z"
}));

export default SvgComponent;