function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0a6 6 0 00-6 6 8 8 0 008 8h3v4a7 7 0 007 7h7v-4h-9a3 3 0 01-3-3v-8H6a4 4 0 01-4-4c0-2.761 1.79-5 4-5V0zM25 16v14l7-7-7-7zm1 2.438L30.594 23 26 27.563v-9.125z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 18.438v9.125L30.594 23 26 18.437z",
  fill: "#fff"
}));

export default SvgComponent;