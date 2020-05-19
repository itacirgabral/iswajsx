function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.938 13.375l-7 12.125L8 29l7-12.125-6.063-3.5zM5.5.406l-3.469 2 4.063 7.031 6.906 4L5.5.408zM0 17v2h3.406l1.125-2H0z"
}));

export default SvgComponent;