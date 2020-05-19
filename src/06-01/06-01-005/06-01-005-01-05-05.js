function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C27.165 0 35 7.835 35 17.5S27.165 35 17.5 35 0 27.165 0 17.5 7.835 0 17.5 0zm0 1.5c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M31.375 6.875L42 17.5 31.375 28.125c1.307-1.705 2.326-3.633 2.938-5.75l4.874-4.875-4.874-4.875c-.612-2.117-1.63-4.045-2.938-5.75zM24.594 33.469c-.099.044-.182.114-.282.156-.358.151-.755.216-1.124.344-.69-2.555-2.916-4.469-5.688-4.469s-4.999 1.914-5.687 4.469c-.37-.128-.767-.193-1.126-.344-.099-.042-.182-.112-.28-.156C11.308 30.34 14.08 28 17.5 28s6.19 2.34 7.094 5.469z"
}));

export default SvgComponent;