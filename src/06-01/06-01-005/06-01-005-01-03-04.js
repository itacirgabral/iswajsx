function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24.5 0C14.835 0 7 7.835 7 17.5S14.835 35 24.5 35 42 27.165 42 17.5 34.165 0 24.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.625 6.875L0 17.5l10.625 10.625c-1.307-1.705-2.326-3.633-2.938-5.75L2.813 17.5l4.876-4.875c.611-2.117 1.63-4.045 2.937-5.75z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.192 23.776c.039.1.048.209.089.309.146.36.381.687.552 1.038 2.293-1.319 5.222-1.098 7.182.862s2.18 4.889.862 7.182c.351.17.678.406 1.038.552.1.04.209.05.31.089 1.573-2.85 1.268-6.466-1.15-8.883-2.417-2.418-6.032-2.723-8.883-1.15z"
}));

export default SvgComponent;