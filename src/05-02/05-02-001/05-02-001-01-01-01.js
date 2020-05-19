function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.406 0L0 1.406 22.594 24 24 22.594 1.406 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.594 0L24 1.406 1.406 24 0 22.594 22.594 0z"
}));

export default SvgComponent;