function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 39,
  height: 43
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8h2l6-6 6 6h2L8 0zM7 8v11.5a3.5 3.5 0 003.5 3.5 3.48 3.48 0 002.469-1.031L15 19.937V29.5a3.5 3.5 0 003.5 3.5 3.48 3.48 0 002.469-1.031L23 29.937V39a4 4 0 004 4h4a8 8 0 008-8H29v3c0 1.657-.895 3-2 3a2 2 0 01-2-2V25.094l-5.438 5.468A1.498 1.498 0 0118.5 31a1.5 1.5 0 01-1.5-1.5V15.094l-5.438 5.469A1.498 1.498 0 0110.5 21 1.5 1.5 0 019 19.5V8H7z"
}));

export default SvgComponent;