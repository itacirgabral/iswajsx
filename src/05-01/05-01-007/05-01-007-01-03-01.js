function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 2v6h6V7H1V2H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 3a8.725 8.725 0 00-6.25 2.625l.719.719A7.707 7.707 0 0110 4c2.172 0 4.124.904 5.531 2.344L17.156 8l.719-.719-1.625-1.656A8.725 8.725 0 0010 3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 1a10.704 10.704 0 00-7.625 3.188L3.75 5.625A8.725 8.725 0 0110 3a8.725 8.725 0 016.25 2.625l1.625 1.656 1.406-1.406-1.656-1.688A10.704 10.704 0 0010 1z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0a11.72 11.72 0 00-8.344 3.469l.719.719A10.704 10.704 0 0110 1c2.985 0 5.677 1.223 7.625 3.188l1.656 1.687.719-.719-1.656-1.687A11.72 11.72 0 0010 0z"
}));

export default SvgComponent;