function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.126.09L.59 3.626 28.874 31.91l3.536-3.536L4.126.09z"
}));

export default SvgComponent;