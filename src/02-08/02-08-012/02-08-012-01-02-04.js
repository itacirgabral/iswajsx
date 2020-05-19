function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 9H1.1l9.9 9.9V9zm-.994.994l-.022 6.475-6.453-6.453 6.475-.022z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25.85 6.879L12.413 20.314a3 3 0 01-4.242-4.243l-4.243-4.243c-1.953 1.953-1.636 5.435.707 7.779l2.121 2.12a5 5 0 007.071 0L27.263 8.294 25.85 6.879z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.1.515l-.707.707 6.364 6.364.707-.707L1.101.515zm12.021 12.02l-.707.708 11.314 11.313.707-.707-11.314-11.313z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.006 9.994l-6.475.022 6.453 6.453.022-6.475z",
  fill: "#fff"
}));

export default SvgComponent;