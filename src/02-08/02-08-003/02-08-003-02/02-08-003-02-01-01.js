function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8h14l-7 7-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 0a5 5 0 00-5 5v3h2V5a3 3 0 013-3h1a4 4 0 014 4v8.563A3.99 3.99 0 0014 14a4 4 0 100 8 4 4 0 001.969-.531C15.622 25.545 11 32 11 32h12s-5-6.972-5-11V6a6 6 0 00-6-6h-1zm3 16a2 2 0 110 4 2 2 0 010-4z"
}));

export default SvgComponent;