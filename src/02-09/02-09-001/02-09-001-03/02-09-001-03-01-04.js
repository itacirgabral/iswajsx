function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 23l8-8-8-8v16zM7 0v2a5 5 0 00-5 5v1a5 5 0 005 5h14v4H8a8 8 0 01-8-8V7a7 7 0 017-7z"
}));

export default SvgComponent;