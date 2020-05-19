function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 5v4h1V5H2zM20.5 0l-2.594 4.469.875.531L20.5 2.031 22.219 5l.875-.531L20.5 0zM2.5 0L-.094 4.469.781 5 2.5 2.031 4.219 5l.875-.531L2.5 0zM20 5v4h1V5h-1zM9.5 6C6 6 6 10 6 10h2s0-2 1.5-2 1.5 2 4 2C17 10 17 6 17 6h-2s0 2-1.5 2-1.5-2-4-2z"
}));

export default SvgComponent;