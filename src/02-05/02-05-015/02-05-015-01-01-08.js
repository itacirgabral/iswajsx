function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.385 5.201L0 23.586 1.414 25 19.8 6.615l-1.414-1.414zM9 11L3.5 5.5 9 0v11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 10.9L14.1 1H24v9.9zM20 16C20 9.925 15.075 5 9 5v1c5.523 0 10 4.477 10 10v2h1v-2zM7 23l5.5 5.5L18 23H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 12c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H0v-1h2z"
}));

export default SvgComponent;