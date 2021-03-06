function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 9.9V0H9.1l2.011 2.01h5.878V7.89L19 9.899zM13 21l5.5-5.5L13 10v1.414l4.086 4.086L13 19.586V21z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 5c0 7.18 5.82 13 13 13v-1C6.373 17 1 11.627 1 5V3H0v2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 5c0 6.627 5.373 12 12 12v-3a9 9 0 01-9-9V3H1v2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.85 5.565L1.413 19 0 17.586 13.435 4.151l1.414 1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 5a9 9 0 009 9v-1a8 8 0 01-8-8V3H4v2z"
}));

export default SvgComponent;