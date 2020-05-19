function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v4h.5C7.404 4 13 10.044 13 17.5V36h5V17.5C18 7.835 10.165 0 .5 0H0z"
}));

export default SvgComponent;