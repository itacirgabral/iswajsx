function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 49,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 13L.5 6.5 7 0v13zm-1-2.438V2.438L1.906 6.5 6 10.563zM37 10a10.97 10.97 0 007.781-3.219L49 2.594l-1.438-1.406-4.187 4.187C41.746 7.004 39.485 7 37 7s-4.746.004-6.375-1.625l-.844-1.156A10.97 10.97 0 0022 1a10.97 10.97 0 00-7.781 3.219l-1 1a1.015 1.015 0 01-.719.281H7v2h5.5c.828 0 1.582-.332 2.125-.875l1-1A8.988 8.988 0 0122 3c2.485 0 4.746.996 6.375 2.625l.844 1.156A10.97 10.97 0 0037 10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 10.563L1.906 6.5 6 2.437v8.126z",
  fill: "#fff"
}));

export default SvgComponent;