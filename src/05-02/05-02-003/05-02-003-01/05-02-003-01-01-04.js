function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.636 2.05L11.95 13.364l1.414-1.414L2.05.636.636 2.05z"
}));

export default SvgComponent;