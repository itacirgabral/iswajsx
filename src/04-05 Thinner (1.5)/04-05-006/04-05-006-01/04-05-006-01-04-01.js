function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0C1.784 0 0 1.784 0 4c0 3.324 1.784 6 4 6h7c2.216 0 4-2.676 4-6 0-2.216-1.784-4-4-4H4zM1.5 4H4v4.313C2.547 7.764 1.5 6.05 1.5 4zM5 4h2v4.5H5V4zm3 0h2v4.5H8V4zm3 0h2.5c0 2.05-1.047 3.765-2.5 4.313V4z"
}));

export default SvgComponent;