function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.385 23.799L0 5.414 1.414 4 19.8 22.385l-1.414 1.414zM9 18l-5.5 5.5L9 29V18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 18.1L14.1 28H24v-9.9zM20 13c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10v-2h1v2zM7 6L12.5.5 18 6H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 17c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10H0v1h2z"
}));

export default SvgComponent;