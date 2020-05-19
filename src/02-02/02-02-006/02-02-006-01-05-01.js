function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.5.257L.55 5.207l.707.707L5.5 1.672l4.243 4.242.707-.707L5.5.257z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 5H5v5h1V5z"
}));

export default SvgComponent;