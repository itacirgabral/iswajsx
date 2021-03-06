function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 4
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 .5V2H0v1.5h5V2h3v1.5h5V2H9V.5H4z"
}));

export default SvgComponent;