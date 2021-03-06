function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 15l-5-5 .719-.719L10.406 14H16v1h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 12.031L11.594 12 7.28 7.719 8 7l4 4h5v1.031zM25 15l5-5-.719-.719L24.594 14H19v1h6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 12.031L23.406 12l4.313-4.281L27 7l-4 4h-5v1.031z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}));

export default SvgComponent;