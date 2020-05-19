function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 57,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M55.281 0L57 1 39.094 32H0v-2h37.938L55.28 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M55.281 0L37.938 30H0v-1h37.375l16.75-29h1.156zM57 1v2L40.25 32h-1.156L57 1z",
  fill: "#fff"
}));

export default SvgComponent;