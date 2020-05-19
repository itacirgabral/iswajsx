function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 18.1V28h-9.9l2.011-2.01h5.878V20.11L24 18.101z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.799 22.343L1.414 3.958 0 5.372l18.385 18.385 1.414-1.414zM12 0l5.5 5.5L12 11V9.586L16.086 5.5 12 1.414V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 16C1 9.925 5.925 5 12 5v1C6.477 6 2 10.477 2 16v2H1v-2zM19 7l5.5 5.5L19 18v-1.414l4.086-4.086L19 8.414V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 23c0-6.075 4.925-11 11-11v1c-5.523 0-10 4.477-10 10v2H8v-2z"
}));

export default SvgComponent;