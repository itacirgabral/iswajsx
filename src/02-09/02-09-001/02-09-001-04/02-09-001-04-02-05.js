function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 46,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M46 0v12L34 0h12zm-1 1h-8.563L45 9.563V1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 15a26.434 26.434 0 0018.75-7.75l.5-.5-1.438-1.438-.5.5C34.38 10.247 28.265 11 21.5 11c-6.765 0-12.879-.754-17.313-5.188L1.408 3 0 4.406 2.75 7.25A26.434 26.434 0 0021.5 15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M45 1v8.563L36.437 1H45z",
  fill: "#fff"
}));

export default SvgComponent;