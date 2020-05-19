function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 5v4h1V5H2zM18.5 0l-2.594 4.469.875.531L18.5 2.031 20.219 5l.875-.531L18.5 0zM2.5 0L-.094 4.469.781 5 2.5 2.031 4.219 5l.875-.531L2.5 0zM18 5v4h1V5h-1zM10.5 2C8.015 2 6 3.79 6 6s2.015 4 4.5 4S15 8.21 15 6s-2.015-4-4.5-4zm0 1.5c1.657 0 3 1.12 3 2.5s-1.343 2.5-3 2.5-3-1.12-3-2.5 1.343-2.5 3-2.5z"
}));

export default SvgComponent;