function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 49,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M47.035.373l1.294 4.83L1.965 17.626.67 12.796 47.035.373z"
}));

export default SvgComponent;