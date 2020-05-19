function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 8h13v2H1zM.482 4.068L13.04.703l.518 1.932L1 6zM1 12l12.557 3.364-.517 1.932L.483 13.932z"
}));

export default SvgComponent;