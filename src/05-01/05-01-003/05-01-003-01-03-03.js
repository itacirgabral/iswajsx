function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 62,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6h42v4H0V6zM44 11l5 5 .719-.719L45.437 11l4.282-4.281L49 6l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48 13v-1h6v1h-6zM48 10V9h6v1h-6zM62 5l-5 5-.719-.719L60.563 5 56.28.719 57 0l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M58 7V6h-6v1h6zM58 4V3h-6v1h6z"
}));

export default SvgComponent;