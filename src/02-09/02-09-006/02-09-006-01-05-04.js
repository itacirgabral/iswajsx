function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 26l4.5-4.5L13 17v9zm1-2.438v-4.125l2.094 2.063L14 23.563zM0 12c0 5.523 4.477 10 10 10h3v-1h-3a9 9 0 01-9-9V6H0v6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 23.563l2.094-2.063L14 19.437v4.125z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 20l4.5-4.5L19 11v9zm1-2.438v-4.125l2.094 2.063L20 17.563zM6 6c0 5.523 4.477 10 10 10h3v-1h-3a9 9 0 01-9-9V0H6v6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 17.563l2.094-2.063L20 13.437v4.126z",
  fill: "#fff"
}));

export default SvgComponent;