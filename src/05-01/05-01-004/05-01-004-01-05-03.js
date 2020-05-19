function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 10h42v4H0v-4zM44 19l5 5 .719-.719L45.437 19l4.282-4.281L49 14l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48 19.5v-1h6v1h-6zM58 12l-5 5-.719-.719L56.563 12 52.28 7.719 53 7l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M54 12.5v-1h-6v1h6zM44 5l5 5 .719-.719L45.437 5 49.72.719 49 0l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48 5.5v-1h6v1h-6z"
}));

export default SvgComponent;