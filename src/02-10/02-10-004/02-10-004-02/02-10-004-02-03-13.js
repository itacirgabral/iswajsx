function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 16H9l-3.5 3.5L2 16H0l5.5 5.5L11 16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 32c2.761 0 5-5.373 5-12v-9c0-6.075-2.015-11-4.5-11h-2C6.052 0 3.995 3.775 3.281 9h5.063c.431-4.176 1.232-7 2.156-7C11.88 2 13 8.268 13 16s-1.12 14-2.5 14c-.96 0-1.773-3.047-2.188-7.5H3.157C3.828 27.929 6.634 32 10 32z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 10H9l-3.5 3.5L2 10H0l5.5 5.5L11 10z"
}));

export default SvgComponent;