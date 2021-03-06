function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 8h15v15H4zM3 0c1.656 0 3 1.344 3 3 0 .979-.461 1.859-1.188 2.406L6.313 8H4L2.844 5.969C1.264 5.884 0 4.6 0 3c0-1.656 1.344-3 3-3zM11 0C9.344 0 8 1.344 8 3c0 .979.461 1.859 1.188 2.406L7.688 8H10l1.156-2.031C12.736 5.884 14 4.6 14 3c0-1.656-1.344-3-3-3z"
}));

export default SvgComponent;