function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.134 1.18l1.732-1 20 34.64-1.732 1-20-34.64z"
}));

export default SvgComponent;