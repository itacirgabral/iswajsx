function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M29 15l-8 8-8-8h16zm-2.438 1H15.406L21 21.563 26.563 16zM15 0a8 8 0 018 8v7h-4V7a5 5 0 00-5-5H0V0h15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26.563 16L21 21.563 15.406 16h11.156z",
  fill: "#fff"
}));

export default SvgComponent;