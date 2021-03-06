function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 10h15v13H8zM7 0c1.656 0 3 1.344 3 3 0 .979-.461 1.859-1.188 2.406L10.313 8H8L6.844 5.969C5.264 5.884 4 4.6 4 3c0-1.656 1.344-3 3-3zM15 0c-1.656 0-3 1.344-3 3 0 .979.461 1.859 1.188 2.406L11.688 8H14l1.156-2.031C16.736 5.884 18 4.6 18 3c0-1.656-1.344-3-3-3zM1.625 8.813L.219 10.219 7 17v-2.813L1.625 8.814z"
}));

export default SvgComponent;