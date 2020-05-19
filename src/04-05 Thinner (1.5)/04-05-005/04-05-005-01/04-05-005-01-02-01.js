function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0C1.784 0 0 1.784 0 4s1.784 4 4 4h7c2.216 0 4-1.784 4-4s-1.784-4-4-4H4zm0 1.5v5A2.495 2.495 0 011.5 4c0-1.385 1.115-2.5 2.5-2.5zm1 0h2v5H5v-5zm3 0h2v5H8v-5zm3 0c1.385 0 2.5 1.115 2.5 2.5S12.385 6.5 11 6.5v-5z"
}));

export default SvgComponent;