function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.9 1H0v9.9l2.01-2.011V3.01H7.89L9.899 1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.657 5.201l18.385 18.385L22.628 25 4.243 6.615l1.414-1.414zM15 0l5.5 5.5L15 11V9.586L19.086 5.5 15 1.414V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 16C4 9.925 8.925 5 15 5v1C9.477 6 5 10.477 5 16v2H4v-2zM22 7l5.5 5.5L22 18v-1.414l4.086-4.086L22 8.414V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 23c0-6.075 4.925-11 11-11v1c-5.523 0-10 4.477-10 10v2h-1v-2z"
}));

export default SvgComponent;