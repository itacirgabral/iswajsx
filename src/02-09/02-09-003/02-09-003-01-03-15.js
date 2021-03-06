function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0v2l5 5-5 5v2l7-7-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 6v2H6a4 4 0 00-4 4 4.01 4.01 0 001.156 2.844l1.656 1.844 1.063-.813A2.996 2.996 0 018 15a3 3 0 010 6 2.996 2.996 0 01-2.125-.875L4.75 19.062l-1.875 1.813A2.996 2.996 0 002 23a3 3 0 003 3h8v4H7a7 7 0 01-7-7c0-1.403.451-2.475 1.313-3.281l2.062-1.938L1.75 16.25A5.985 5.985 0 010 12a6 6 0 016-6h3zM8 16.5c-.414 0-.791.166-1.063.438l-1.03 1 1.03 1.125c.272.27.649.437 1.063.437a1.5 1.5 0 000-3z"
}));

export default SvgComponent;