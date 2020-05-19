function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.21.423l1.932.517L2.79 39.577.858 39.06 11.21.423z"
}));

export default SvgComponent;