function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 .25v1.5h7V.25H8zM2 .25V1a2 2 0 104 0V.25H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 .25V2a4 4 0 108 0V.25H7V2c0 1.38-1.343 2.5-3 2.5S1 3.38 1 2V.25H0z"
}));

export default SvgComponent;