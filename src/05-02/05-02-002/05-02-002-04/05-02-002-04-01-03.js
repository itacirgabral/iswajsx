function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 44
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.134 1.715l1.732-1 24 41.57-1.732 1-24-41.57z"
}));

export default SvgComponent;