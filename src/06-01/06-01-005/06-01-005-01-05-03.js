function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C27.165 0 35 7.835 35 17.5S27.165 35 17.5 35 0 27.165 0 17.5 7.835 0 17.5 0zm0 1.5c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M31.375 6.875L42 17.5 31.375 28.125c1.307-1.705 2.326-3.633 2.938-5.75l4.874-4.875-4.874-4.875c-.612-2.117-1.63-4.045-2.938-5.75zM1.531 24.594c-.044-.099-.114-.182-.156-.282-.151-.358-.216-.755-.344-1.125C3.586 22.5 5.5 20.272 5.5 17.5c0-2.772-1.914-4.999-4.469-5.688.128-.37.193-.766.344-1.125.042-.099.112-.182.156-.28C4.66 11.308 7 14.08 7 17.5s-2.34 6.19-5.469 7.094z"
}));

export default SvgComponent;