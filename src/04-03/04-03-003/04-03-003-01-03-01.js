function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 47,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23.5 0C13.835 0 6 7.835 6 17.5S13.835 35 23.5 35 41 27.165 41 17.5 33.165 0 23.5 0zm0 2C32.06 2 39 8.94 39 17.5 39 26.06 32.06 33 23.5 33 14.94 33 8 26.06 8 17.5 8 8.94 14.94 2 23.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10a7 7 0 000 14c.084 0 .167.003.25 0a17.301 17.301 0 01-.656-2.031C4.027 21.757 2 19.62 2 17a5.005 5.005 0 014.875-5c.225-.681.51-1.328.813-1.969A7.138 7.138 0 007 10z"
}));

export default SvgComponent;