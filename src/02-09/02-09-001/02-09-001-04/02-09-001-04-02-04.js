function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26 11v16l8-8-8-8zm1 2.438L32.594 19 27 24.563V13.438zM8 0a8 8 0 00-8 8v4a9 9 0 009 9h17v-4H8a6 6 0 01-6-6V8a6 6 0 016-6V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27 13.438v11.124L32.594 19 27 13.437z",
  fill: "#fff"
}));

export default SvgComponent;