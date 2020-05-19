function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 50
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0v1.5h4c12.979 0 23.5 10.521 23.5 23.5S20.979 48.5 8 48.5H0V50h8c13.807 0 25-11.193 25-25S21.807 0 8 0H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 1.5v4h4c10.77 0 19.5 8.73 19.5 19.5S18.77 44.5 8 44.5H0v4h8c12.979 0 23.5-10.521 23.5-23.5S20.979 1.5 8 1.5H4z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 5.5V7h4c9.941 0 18 8.059 18 18S17.941 43 8 43H0v1.5h8c10.77 0 19.5-8.73 19.5-19.5S18.77 5.5 8 5.5H4z"
}));

export default SvgComponent;