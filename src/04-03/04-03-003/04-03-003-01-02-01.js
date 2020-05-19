function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 47,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23.5 0C13.835 0 6 7.835 6 17.5S13.835 35 23.5 35 41 27.165 41 17.5 33.165 0 23.5 0zm0 2C32.06 2 39 8.94 39 17.5 39 26.06 32.06 33 23.5 33 14.94 33 8 26.06 8 17.5 8 8.94 14.94 2 23.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M40 10c-.231 0-.462.01-.688.031.304.641.588 1.288.813 1.969A5.005 5.005 0 0145 17c0 2.621-2.027 4.757-4.594 4.969A17.301 17.301 0 0139.75 24c.083.003.166 0 .25 0a7 7 0 000-14z"
}));

export default SvgComponent;