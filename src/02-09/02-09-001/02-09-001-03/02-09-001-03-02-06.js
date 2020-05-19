function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 0l-8 8h16l-8-8zm0 1.438L26.563 7H15.438L21 1.437zM20 8v8a5 5 0 01-5 5H0v4h14a8 8 0 008-8V8h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 1.438L15.437 7h11.126L21 1.437z",
  fill: "#fff"
}));

export default SvgComponent;