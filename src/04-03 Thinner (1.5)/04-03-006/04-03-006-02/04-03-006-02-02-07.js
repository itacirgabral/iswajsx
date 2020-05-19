function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 7v2H1V7zM10.641 13.455l-.517 1.931-9.66-2.588.518-1.932zM10.124.614l.517 1.932L.982 5.134.465 3.202z"
}));

export default SvgComponent;