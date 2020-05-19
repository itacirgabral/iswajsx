function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.79.423L.858.94 11.21 39.577l1.932-.517L2.79.423z"
}));

export default SvgComponent;