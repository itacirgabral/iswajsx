function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.097 3.011c-.096.165-.239.312-.31.486-.195.482-.309.991-.309 1.503 0 .512.114 1.021.31 1.503.195.481.493.935.884 1.325.39.391.844.689 1.325.884.482.196.991.31 1.503.31.512 0 1.021-.114 1.503-.31.174-.07.321-.213.486-.31l-5.392-5.39z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z"
}));

export default SvgComponent;