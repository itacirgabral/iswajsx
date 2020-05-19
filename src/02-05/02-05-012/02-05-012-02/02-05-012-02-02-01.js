function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 0l-8 8h16l-8-8zm0 1.438L30.563 7H19.438L25 1.437zM24 8v18L12 14v17.188L1.406 20.593 0 22l14 14V18.812L26 31V8h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 1.438L19.437 7h11.125L25 1.437z",
  fill: "#fff"
}));

export default SvgComponent;