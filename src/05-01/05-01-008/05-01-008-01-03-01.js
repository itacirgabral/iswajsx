function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v6h6V5H1V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 0a10.089 10.089 0 00-7.156 2.969L2 3.313 2.75 4l.313-.313C4.713 2.038 6.98 1 9.5 1c2.52 0 4.786 1.036 6.438 2.688L17.28 5 18 4.281 16.656 2.97A10.089 10.089 0 009.5 0z"
}));

export default SvgComponent;