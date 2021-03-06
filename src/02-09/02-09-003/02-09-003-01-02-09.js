function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M40 1v10H30L40 1zm-1 2.438L32.406 10H39V3.437z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26.5 0c2.664 0 5.056 1.046 6.781 2.719L35.75 5.25l-1.406 1.406-2.469-2.531C30.513 2.822 28.605 2 26.5 2c-1.693 0-3.104.684-4.5 1.406-1.129.584-3.031 2.313-3.031 2.313l1.156 1.156C20.668 7.418 21 8.172 21 9a3 3 0 01-6 0c0-.828.332-1.582.875-2.125l1.156-1.156C16.004 4.97 15.13 3.99 14 3.406 12.604 2.684 11.193 2 9.5 2 5.358 2 2 5.134 2 9H0c0-4.97 4.253-9 9.5-9 1.992 0 3.747.642 5.344 1.594C16.122 2.356 18 4.75 18 4.75s1.895-2.42 3.188-3.188C22.774.62 24.523 0 26.5 0zM18 6.406l-1.406 1.188A1.982 1.982 0 0016 9a2 2 0 004 0c0-.552-.232-1.044-.594-1.406L18 6.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M39 3.438V10h-6.594L39 3.437z",
  fill: "#fff"
}));

export default SvgComponent;