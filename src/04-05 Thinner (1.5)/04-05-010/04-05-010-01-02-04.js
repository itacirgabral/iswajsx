function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 7
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7V1.344h1V6h4.656v1H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 .281L2.469 3.812l.719.72L6.717 1 6 .281z"
}));

export default SvgComponent;