function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0C1.784 0 0 1.784 0 4c0 3.324 1.784 6 4 6h7c2.216 0 4-2.676 4-6 0-2.216-1.784-4-4-4H4zM2 4h2v3.75C2.842 7.197 2 5.74 2 4zm3 0h2v4H5V4zm3 0h2v4H8V4zm3 0h2c0 1.74-.842 3.197-2 3.75V4z"
}));

export default SvgComponent;