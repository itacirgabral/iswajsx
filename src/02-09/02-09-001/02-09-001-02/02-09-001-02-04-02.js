function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0a7 7 0 00-7 7v6h4V6a4 4 0 014-4h13V0H7z"
}));

export default SvgComponent;