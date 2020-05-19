function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.245.559l1.932.518L2.754 47.44l-1.932-.518L13.245.56z"
}));

export default SvgComponent;