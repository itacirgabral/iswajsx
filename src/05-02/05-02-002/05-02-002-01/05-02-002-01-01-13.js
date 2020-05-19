function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.826.884L.175 13.384l1 1.732 21.65-12.5-1-1.732z"
}));

export default SvgComponent;