function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23 7l-7-7-7 7h14zM17 7v6a5 5 0 01-5 5 4.978 4.978 0 01-3.531-1.469l-.75-.75A1.015 1.015 0 007 15.5a1 1 0 00-1 1V20c0 3.59 4 10 4 10H0s4-6.41 4-10v-3.5a3 3 0 013-3c.828 0 1.582.332 2.125.875l.75.75A2.996 2.996 0 0012 16a3 3 0 003-3V7h2z"
}));

export default SvgComponent;