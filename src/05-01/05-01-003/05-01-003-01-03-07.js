function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 62,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6h42v4H0V6zM62 11l-5 5-.719-.719L60.563 11 56.28 6.719 57 6l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M58 13v-1h-6v1h6zM58 10V9h-6v1h6zM44 5l5 5 .719-.719L45.437 5 49.72.719 49 0l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48 7V6h6v1h-6zM48 4V3h6v1h-6z"
}));

export default SvgComponent;