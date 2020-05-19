function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 2
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 .5V2h9V.5H0zM12 .5V2h9V.5h-9z"
}));

export default SvgComponent;