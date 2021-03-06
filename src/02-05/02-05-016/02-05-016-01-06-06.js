function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 11.1V21H9.1l2.011-2.01h5.878V13.11L19 11.101zM13 0l5.5 5.5L13 11V9.586L17.086 5.5 13 1.414V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 16C0 8.82 5.82 3 13 3v1C6.373 4 1 9.373 1 16v2H0v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.85 15.435L1.413 2 0 3.414l13.435 13.435 1.414-1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 16C1 9.373 6.373 4 13 4v3a9 9 0 00-9 9v2H1v-2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 16a9 9 0 019-9v1a8 8 0 00-8 8v2H4v-2z"
}));

export default SvgComponent;