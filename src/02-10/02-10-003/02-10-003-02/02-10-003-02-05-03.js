function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 5.5L19 0v11l-5.5-5.5zm1.438 0L18 8.563V2.436L14.937 5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 10c0-2.761 5.373-5 12-5h.5v1.125C6.478 6.46 2 7.605 2 9c0 1.657 6.268 3 14 3s14-1.343 14-3c0-1.356-4.237-2.472-10-2.844V5h1c6.075 0 11 2.015 11 4.5v2c0 3.038-5.82 4.5-13 4.5h-7c-6.627 0-12-2.134-12-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.938 5.5L18 2.437v6.126L14.937 5.5z",
  fill: "#fff"
}));

export default SvgComponent;