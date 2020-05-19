function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 .25v1.5h4V.25H0zm11 0v1.5h4V.25h-4zM5.5.25V1a2 2 0 104 0V.25h-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5.25V2a4 4 0 108 0V.25h-.844L10.5 2c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5L4.344.25H3.5z"
}));

export default SvgComponent;