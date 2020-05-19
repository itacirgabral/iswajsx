function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 0v4h-.5C10.596 4 5 10.044 5 17.5V36H0V17.5C0 7.835 7.835 0 17.5 0h.5z"
}));

export default SvgComponent;