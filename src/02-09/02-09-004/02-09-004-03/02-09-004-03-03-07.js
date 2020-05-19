function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 51
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0v2L2 7l5 5v2L0 7l7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 6v2h7.5a4.5 4.5 0 010 9H11C5.477 17 1 21.477 1 27s4.477 10 10 10h3a5 5 0 110 10H3v4h9a9 9 0 100-18H9a6 6 0 010-12h4.5a7.5 7.5 0 100-15H7z"
}));

export default SvgComponent;