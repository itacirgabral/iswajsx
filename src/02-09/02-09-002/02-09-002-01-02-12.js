function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26 0a6 6 0 016 6 8 8 0 01-8 8h-3v4a7 7 0 01-7 7H7v-4h9a3 3 0 003-3v-8h7a4 4 0 004-4c0-2.761-1.79-5-4-5V0zM7 16v14l-7-7 7-7zm-1 2.438L1.406 23 6 27.563v-9.125z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 18.438v9.125L1.406 23 6 18.437z",
  fill: "#fff"
}));

export default SvgComponent;