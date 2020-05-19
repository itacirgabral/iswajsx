function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 0v18L12 6v17.188L1.406 12.594 0 14l14 14V10.812L26 23V0h-2z"
}));

export default SvgComponent;