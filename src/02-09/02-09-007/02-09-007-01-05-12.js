function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 28l-4.5-4.5L7 19v9zm-1-2.438v-4.125L3.906 23.5 6 25.563zM20 14c0 5.523-4.477 10-10 10H7v-1h3a9 9 0 009-9V8h1v6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 25.563L3.906 23.5 6 21.437v4.125z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 5L13.5.5 9 5h9zm-2.438-1h-4.124L13.5 1.906 15.563 4zM14 8c0 5.523-4.477 10-10 10H0v-1h4a9 9 0 009-9V5h1v3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.563 4L13.5 1.906 11.437 4h4.126z",
  fill: "#fff"
}));

export default SvgComponent;