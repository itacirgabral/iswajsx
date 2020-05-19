function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0l5 5-.719.719L6.594 1H0V0h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.406 3L9.72 7.281 9 8 5 4H1V3h4.406z"
}));

export default SvgComponent;