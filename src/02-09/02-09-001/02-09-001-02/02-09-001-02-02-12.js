function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 6v14l-7-7 7-7zM6 8.438L1.406 13 6 17.563V8.438zM17 0a6 6 0 016 6v3a6 6 0 01-6 6H7v-4h11a3 3 0 003-3V6a4 4 0 00-4-4V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 8.438v9.124L1.406 13 6 8.437z",
  fill: "#fff"
}));

export default SvgComponent;