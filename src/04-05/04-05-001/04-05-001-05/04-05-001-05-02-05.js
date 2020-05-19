function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.688 6c.048.184.051.39.125.562.202.48.481.92.843 1.282s.803.641 1.282.843C4.416 8.89 4.948 9 5.5 9s1.084-.11 1.563-.313c.478-.202.919-.481 1.28-.843.363-.362.642-.803.844-1.282.074-.173.077-.378.125-.562H1.687z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z"
}));

export default SvgComponent;