function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.156 0L21 2.813l-6 6V5h-1.813l4.97-5z"
}));

export default SvgComponent;