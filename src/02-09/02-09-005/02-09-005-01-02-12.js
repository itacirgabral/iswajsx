function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0H8v24h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0H9v24h3V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0h-1v24h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 6a5 5 0 015 5v2a5 5 0 01-5 5H6v-3h8a3 3 0 003-3v-2a3 3 0 00-3-3V6zM6 11v11L.5 16.5 6 11zm-1 2.438L1.937 16.5 5 19.563v-6.125z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 13.438v6.124L1.937 16.5 5 13.437z",
  fill: "#fff"
}));

export default SvgComponent;