function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 0v2l3.5 3.5L11 9v2l5.5-5.5L11 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 9.5c0-2.304-3.281-4.173-7.5-4.438v1.97C21.161 7.196 24 8.233 24 9.5c0 1.38-3.358 2.5-7.5 2.5h-8C4.358 12 1 10.88 1 9.5S4.358 7 8.5 7H10V5H8.5C3.806 5 0 7.015 0 9.5v2C0 13.985 3.806 16 8.5 16h8c4.694 0 8.5-2.015 8.5-4.5v-2z"
}));

export default SvgComponent;