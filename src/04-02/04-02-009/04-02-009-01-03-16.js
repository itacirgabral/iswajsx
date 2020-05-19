function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.342 4.482L6.806.946l-.707.707 2.828 2.829L6.1 7.31l.707.707 3.536-3.535zM3.182 6.16A4.006 4.006 0 016.01 4.968v1.017a3.009 3.009 0 00-3.005 3.005v1.989L2.011 11l-.022-2.01c0-1.105.47-2.105 1.193-2.83z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.768 4.747A5.99 5.99 0 016.01 2.979v1.016A4.99 4.99 0 001.016 8.99v1.989H0V8.989a5.99 5.99 0 011.768-4.242z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 8.978a5 5 0 015-5v1a4 4 0 00-4 4v2H1v-2z",
  fill: "#fff"
}));

export default SvgComponent;