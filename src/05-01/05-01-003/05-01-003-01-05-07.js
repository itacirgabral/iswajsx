function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 56,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 11h42v4H0v-4zM56 21l-5 5-.719-.719L54.563 21l-4.282-4.281L51 16l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M52 23v-1h-6v1h6zM52 20v-1h-6v1h6zM44 13l5 5 .719-.719L45.437 13l4.282-4.281L49 8l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48 15v-1h6v1h-6zM48 12v-1h6v1h-6zM56 5l-5 5-.719-.719L54.563 5 50.28.719 51 0l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M52 7V6h-6v1h6zM52 4V3h-6v1h6z"
}));

export default SvgComponent;