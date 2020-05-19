function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7v2h25V7H0zM9.5 9.5L4 15h11L9.5 9.5zm0 1.406L12.594 14H6.406L9.5 10.906zM25 15l7-7-7-7v14zm1-2.438V3.438L30.563 8 26 12.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 12.563L30.563 8 26 3.437v9.126zM9.5 10.938L6.437 14h6.125L9.5 10.937z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0v15a2 2 0 01-4 0H7c0 2.21 2.239 4 5 4s5-1.79 5-4V0h-1z"
}));

export default SvgComponent;