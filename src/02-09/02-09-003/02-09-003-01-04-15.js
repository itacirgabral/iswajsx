function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0v2H6a4 4 0 00-4 4 4.01 4.01 0 001.156 2.844l1.656 1.844 1.063-.813A2.996 2.996 0 018 9a3 3 0 010 6 2.996 2.996 0 01-2.125-.875L4.75 13.062l-1.875 1.813A2.996 2.996 0 002 17a3 3 0 003 3h8v4H7a7 7 0 01-7-7c0-1.403.451-2.475 1.313-3.281l2.062-1.938L1.75 10.25A5.985 5.985 0 010 6a6 6 0 016-6h3zM8 10.5c-.414 0-.791.166-1.063.438l-1.03 1 1.03 1.124c.272.272.649.438 1.063.438a1.5 1.5 0 000-3z"
}));

export default SvgComponent;