function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M58 10H16v4h42v-4zM0 19l5 5 .719-.719L1.437 19l4.282-4.281L5 14l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 19.5v-1h6v1H4zM14 12l-5 5-.719-.719L12.562 12l-4.28-4.281L9 7l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 12.5v-1H4v1h6zM0 5l5 5 .719-.719L1.437 5 5.72.719 5 0 0 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 5.5v-1h6v1H4z"
}));

export default SvgComponent;