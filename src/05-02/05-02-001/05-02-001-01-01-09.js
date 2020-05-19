function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 39,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.406 0L0 1.406 24.594 26 26 24.594 1.406 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M37.594 0L13 24.594 14.406 26 39 1.406 37.594 0z"
}));

export default SvgComponent;