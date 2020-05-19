function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.585 4.243l-.707-.707L2.1 11.314l.707.707zM8.464 2.121l-.707-.707-7.778 7.778.707.707z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M9.878 3.536L8.464 2.12.686 9.9 2.1 11.314z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0v7.071h-1.016V1.016H4.929V0H12z"
}));

export default SvgComponent;