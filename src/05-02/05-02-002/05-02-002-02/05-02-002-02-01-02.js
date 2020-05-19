function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.825.286L.893.804l8.282 30.91 1.932-.518L2.825.286z"
}));

export default SvgComponent;