function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 8.812c.184-.048.39-.051.563-.125.478-.202.919-.481 1.28-.843.363-.362.642-.803.844-1.282C9.39 6.084 9.5 5.552 9.5 5s-.11-1.084-.313-1.563a4.012 4.012 0 00-.843-1.28 4.012 4.012 0 00-1.282-.844c-.173-.074-.378-.077-.562-.125v7.625z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z"
}));

export default SvgComponent;