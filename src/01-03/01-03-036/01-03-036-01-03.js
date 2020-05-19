function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 6h15v15H14zM11.344.344L5.688 6H8.5l2.844-2.844L14.188 6H17L11.344.344zM0 6h14v2H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.406 2.563L1.97 3.968 14 16v-2.813L3.406 2.563z"
}));

export default SvgComponent;