function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.615 5.201L24 23.586 22.586 25 4.2 6.615l1.414-1.414zM15 11l5.5-5.5L15 0v11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 10.9L9.9 1H0v9.9zM4 16C4 9.925 8.925 5 15 5v1C9.477 6 5 10.477 5 16v2H4v-2zM17 23l-5.5 5.5L6 23h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 12c-6.075 0-11 4.925-11 11h1c0-5.523 4.477-10 10-10h2v-1h-2z"
}));

export default SvgComponent;