function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C27.165 0 35 7.835 35 17.5S27.165 35 17.5 35 0 27.165 0 17.5 7.835 0 17.5 0zm0 2C8.94 2 2 8.94 2 17.5 2 26.06 8.94 33 17.5 33 26.06 33 33 26.06 33 17.5 33 8.94 26.06 2 17.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M31.375 6.875L42 17.5 31.375 28.125c1.307-1.705 2.326-3.633 2.937-5.75l4.876-4.875-4.876-4.875c-.611-2.117-1.63-4.045-2.937-5.75z"
}));

export default SvgComponent;