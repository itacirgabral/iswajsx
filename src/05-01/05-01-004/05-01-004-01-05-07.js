function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 10h42v4H0v-4zM58 19l-5 5-.719-.719L56.563 19l-4.282-4.281L53 14l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M54 19.5v-1h-6v1h6zM44 12l5 5 .719-.719L45.437 12l4.282-4.281L49 7l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48 12.5v-1h6v1h-6zM58 5l-5 5-.719-.719L56.563 5 52.28.719 53 0l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M54 5.5v-1h-6v1h6z"
}));

export default SvgComponent;