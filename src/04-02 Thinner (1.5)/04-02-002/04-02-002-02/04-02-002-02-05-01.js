function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0L0 5l.719.719L5.406 1H10V0H5zM6.594 3L2.28 7.281 3 8l4-4h5V3H6.594z"
}));

export default SvgComponent;