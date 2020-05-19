function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 5v4h1V5H2zM18.5 0l-2.594 4.469.875.531L18.5 2.031 20.219 5l.875-.531L18.5 0zM2.5 0L-.094 4.469.781 5 2.5 2.031 4.219 5l.875-.531L2.5 0zM18 5v4h1V5h-1zM6 6c0 2.21 2.015 4 4.5 4S15 8.21 15 6s-2.015-4-4.5-4S6 3.79 6 6zm4.5-2c1.38 0 2.5.895 2.5 2s-1.12 2-2.5 2S8 7.105 8 6s1.12-2 2.5-2z"
}));

export default SvgComponent;