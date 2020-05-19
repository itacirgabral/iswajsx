function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 6v15h8V6h-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25.656.344L20 6l3 1.25 4.781-4.781L25.656.344zM0 6h15v4H0zM7 10l8 8v-2.813L9.812 10H7z"
}));

export default SvgComponent;