function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v1.5h1.5a3 3 0 010 6H0V9h1.5a4.5 4.5 0 100-9H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.5 0a4.5 4.5 0 110 9h3.156A5.507 5.507 0 007 4.5 5.507 5.507 0 004.656 0H1.5zM0 1.5v1h1.5a2 2 0 110 4H0v1h1.5a3 3 0 000-6H0z",
  fill: "#fff"
}));

export default SvgComponent;