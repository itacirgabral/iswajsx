function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 9h15v13H8zM23 0l1.406 1.406L18.813 7H16l7-7zM1.625 7.813L.219 9.219 7 16v-2.813L1.625 7.814z"
}));

export default SvgComponent;