function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0a4 4 0 100 8 4 4 0 000-8zM14 0a4 4 0 100 8 4 4 0 000-8zM24 0a4 4 0 100 8 4 4 0 000-8z"
}));

export default SvgComponent;