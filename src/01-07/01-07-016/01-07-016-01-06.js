function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 11h8v15h-8zM19 0v9h2V0h-2zM27.563 3.625L22.188 9H25l3.969-3.938-1.407-1.437zM0 11h13v3H0zM6.156 14L13 20.813V18l-4-4H6.156z"
}));

export default SvgComponent;