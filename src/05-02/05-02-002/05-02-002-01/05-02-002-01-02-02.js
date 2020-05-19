function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.85 2.073L7.32 26.22l4.83-1.294L5.68.779.85 2.073z"
}));

export default SvgComponent;