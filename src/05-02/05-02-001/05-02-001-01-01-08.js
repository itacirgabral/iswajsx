function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 49
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.594 0L0 18.594V49h2V19.406l18-18L18.594 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.156 0L0 17.156v1.438L18.594 0h-1.438zM20 1.406l-18 18V49h1V19.812L20 2.845V1.406z",
  fill: "#fff"
}));

export default SvgComponent;