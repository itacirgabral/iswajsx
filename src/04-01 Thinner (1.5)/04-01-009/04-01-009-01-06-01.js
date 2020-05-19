function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.406 0L0 1.406 16.594 18 18 16.594 1.406 0z"
}));

export default SvgComponent;