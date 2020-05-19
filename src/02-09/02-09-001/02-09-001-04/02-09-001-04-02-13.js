function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 46,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v12L12 0H0zm1 1h8.563L1 9.563V1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.5 15A26.434 26.434 0 015.75 7.25l-.5-.5 1.438-1.438.5.5C11.62 10.247 17.735 11 24.5 11c6.765 0 12.879-.754 17.313-5.188L44.593 3 46 4.406 43.25 7.25A26.434 26.434 0 0124.5 15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 1v8.563L9.563 1H1z",
  fill: "#fff"
}));

export default SvgComponent;