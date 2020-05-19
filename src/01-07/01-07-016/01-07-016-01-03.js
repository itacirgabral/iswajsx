function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 11h8v15h-8zM19 0v11h2V0h-2zM27.563 3.625L21 10.188V11h2l5.969-5.938-1.407-1.437zM0 11h15v3H0zM6.156 14L15 22.813V20l-6-6H6.156z"
}));

export default SvgComponent;