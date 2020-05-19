function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 44,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M44 0v2l-8 2v5L0 17v-4.5L33 7V2l11-2z"
}));

export default SvgComponent;