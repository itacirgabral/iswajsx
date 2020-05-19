function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 6l-6-6-6 6h12zm-2.438-1h-7.125L14 1.437 17.563 5zM7 19a9.5 9.5 0 009.5-9.5V6h-1v3.5A8.5 8.5 0 017 18H0v1h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 18a8.5 8.5 0 008.5-8.5V6h-3v3.5A5.5 5.5 0 017 15H0v3h7z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 15a5.5 5.5 0 005.5-5.5V6h-1v3.5A4.5 4.5 0 017 14H0v1h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.563 5L14 1.437 10.437 5h7.126z",
  fill: "#fff"
}));

export default SvgComponent;