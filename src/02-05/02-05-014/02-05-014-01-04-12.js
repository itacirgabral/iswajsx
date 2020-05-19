function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22.343 19.799L3.958 1.414 5.372 0l18.385 18.385-1.414 1.414zM18 19l-5.5 5.5L7 19h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28 14.1L18.1 24H28v-9.9zM23 8c-6.075 0-11 4.925-11 11h1c0-5.523 4.477-10 10-10h2V8h-2zM11 12l-5.5 5.5L0 12h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 1C9.925 1 5 5.925 5 12h1C6 6.477 10.477 2 16 2h2V1h-2z"
}));

export default SvgComponent;