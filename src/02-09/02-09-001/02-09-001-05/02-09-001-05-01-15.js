function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M36 0v14l7-7-7-7zM36 6v2H8a6 6 0 00-6 6c0 2.21 2.686 4 6 4h10v4H8A8 8 0 118 6h28z"
}));

export default SvgComponent;