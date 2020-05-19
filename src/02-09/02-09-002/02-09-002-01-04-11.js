function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0a6 6 0 016 6 7.977 7.977 0 01-3.438 6.563A5.999 5.999 0 0114 18a7 7 0 01-7 7H1v-4h8a3 3 0 003-3 4 4 0 00-4-4H1v-4h7a4 4 0 100-8H0V0h8z"
}));

export default SvgComponent;