function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 49
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.406 0L20 18.594V49h-2V19.406l-18-18L1.406 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.844 0L20 17.156v1.438L1.406 0h1.438zM0 1.406l18 18V49h-1V19.812L0 2.845V1.406z",
  fill: "#fff"
}));

export default SvgComponent;