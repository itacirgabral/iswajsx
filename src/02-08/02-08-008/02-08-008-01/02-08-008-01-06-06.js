function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 4l6 6h-2l-4-4-4 4H5l6-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 0v10a4 4 0 004 4c1.657 0 3-1.79 3-4h6a6 6 0 01-6 6H5a5 5 0 01-5-5V0h1z"
}));

export default SvgComponent;