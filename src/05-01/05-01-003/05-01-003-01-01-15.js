function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 54,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M54 5H12v4h42V5zM0 5l5 5 .719-.719L1.437 5 5.72.719 5 0 0 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 7V6h6v1H4zM4 4V3h6v1H4z"
}));

export default SvgComponent;