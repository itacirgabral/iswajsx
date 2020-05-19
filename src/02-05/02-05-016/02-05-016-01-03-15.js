function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 10v2h9v-2H7zm12 0v2h13v-2H19zM7 18l-7-7 7-7v2.844L2.844 11 7 15.156V18zM13 5L17.5.5 22 5h-1.406L17.5 1.906 14.406 5H13z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 5v10c0 1.105.672 2 1.5 2s1.5-.895 1.5-2v-1h5v1c0 2.21-2.015 4-4.5 4S17 17.21 17 15V5h1z"
}));

export default SvgComponent;