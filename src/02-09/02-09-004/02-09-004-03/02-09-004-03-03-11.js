function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 50
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 36l-7 7 7 7v-2l-5-5 5-5v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 0a7.5 7.5 0 110 15H9a6 6 0 000 12h3a9 9 0 110 18H7v-4h7a5 5 0 100-10h-3C5.477 31 1 26.523 1 21s4.477-10 10-10h3.5a4.5 4.5 0 000-9H3V0h10.5z"
}));

export default SvgComponent;