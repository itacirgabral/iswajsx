function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M58 10H16v4h42v-4zM14 19l-5 5-.719-.719L12.562 19l-4.28-4.281L9 14l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 19.5v-1H4v1h6zM0 12l5 5 .719-.719L1.437 12 5.72 7.719 5 7l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 12.5v-1h6v1H4zM14 5l-5 5-.719-.719L12.562 5 8.282.719 9 0l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 5.5v-1H4v1h6z"
}));

export default SvgComponent;