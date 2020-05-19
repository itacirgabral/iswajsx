function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 23h1v-4H8zM26 23h1v-4h-1zM26.5 28l-2.594-4.469.875-.531 1.719 2.969L28.219 23l.875.531L26.5 28zM8.5 28l-2.594-4.469.875-.531L8.5 25.969 10.219 23l.875.531L8.5 28zM15.5 25C12 25 12 29 12 29h2s0-2 1.5-2 1.5 2 4 2c3.5 0 3.5-4 3.5-4h-2s0 2-1.5 2-1.5-2-4-2z"
}));

export default SvgComponent;