function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.172.343L.343 3.172l8.485 8.485 2.829-2.829L3.172.343z"
}));

export default SvgComponent;