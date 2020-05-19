function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35c3.793 0 7.29-1.23 10.156-3.281l-.843-1.219a15.892 15.892 0 01-9.313 3c-8.837 0-16-7.163-16-16s7.163-16 16-16c8.337 0 15.159 6.389 15.906 14.531l1.5-.125C34.096 6.993 26.624 0 17.5 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M41 23v2H24v-2h17zM24 26l17 4.563-.5 1.937-17.031-4.563L24 26zM40.5 15.5l.5 1.938L24 22l-.531-1.938L40.5 15.5z"
}));

export default SvgComponent;