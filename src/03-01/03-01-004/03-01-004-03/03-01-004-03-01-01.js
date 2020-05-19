function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0C3.834 0 .776 2.568 0 6h1.156A6.729 6.729 0 017.5 1.5 6.729 6.729 0 0113.844 6H15c-.776-3.432-3.834-6-7.5-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.5 0C11.834 0 8.776 2.568 8 6h1.156A6.729 6.729 0 0115.5 1.5 6.729 6.729 0 0121.844 6H23c-.776-3.432-3.834-6-7.5-6z"
}));

export default SvgComponent;