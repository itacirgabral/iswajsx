function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 6L14.5.5 9 6h11zM15 6v6a4 4 0 01-4 4H7a7 7 0 01-7-7h9v2c0 1.657.895 3 2 3a3 3 0 003-3V6h1z"
}));

export default SvgComponent;