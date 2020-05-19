function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 16v14l-7-7 7-7zm-1 2.438L1.406 23 6 27.563v-9.125z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 0a6 6 0 016 6 7.977 7.977 0 01-3.438 6.563A5.999 5.999 0 0120 18a7 7 0 01-7 7H7v-4h8a3 3 0 003-3 4 4 0 00-4-4H7v-4h7a4 4 0 100-8H6V0h8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 18.438v9.125L1.406 23 6 18.437z",
  fill: "#fff"
}));

export default SvgComponent;