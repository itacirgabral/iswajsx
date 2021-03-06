function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 9v2h9V9H7zm12 0v2h13V9H19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 0a3 3 0 00-3 3v8a4 4 0 01-4 4h9a4 4 0 01-4-4V3a2 2 0 014 0v4h1V3a3 3 0 00-3-3zM13 15l4.5 4.5L22 15h-9zM7 3v14l-7-7 7-7z"
}));

export default SvgComponent;