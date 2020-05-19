function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 45
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v2h7.5a4.5 4.5 0 010 9H10C4.477 11 0 15.477 0 21s4.477 10 10 10h3a5 5 0 110 10H2v4h9a9 9 0 100-18H8a6 6 0 010-12h4.5a7.5 7.5 0 100-15H6z"
}));

export default SvgComponent;