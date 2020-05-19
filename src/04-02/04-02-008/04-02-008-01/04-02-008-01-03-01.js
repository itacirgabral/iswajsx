function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0L0 4l.719.719L4 1.406 7.281 4.72 8 4 4 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 4v5h1V4h-1z"
}));

export default SvgComponent;