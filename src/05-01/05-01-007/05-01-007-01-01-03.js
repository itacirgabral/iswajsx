function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 10h42v4H0v-4zM31 2v6h-6V7h5V2h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 3a8.725 8.725 0 016.25 2.625l-.719.719A7.707 7.707 0 0021 4a7.707 7.707 0 00-5.531 2.344L13.844 8l-.719-.719 1.625-1.656A8.725 8.725 0 0121 3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 1c2.985 0 5.677 1.223 7.625 3.188L27.25 5.625A8.725 8.725 0 0021 3a8.725 8.725 0 00-6.25 2.625l-1.625 1.656-1.406-1.406 1.656-1.688A10.704 10.704 0 0121 1z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 0a11.72 11.72 0 018.344 3.469l-.719.719A10.704 10.704 0 0021 1a10.704 10.704 0 00-7.625 3.188l-1.656 1.687L11 5.156l1.656-1.687A11.72 11.72 0 0121 0z"
}));

export default SvgComponent;