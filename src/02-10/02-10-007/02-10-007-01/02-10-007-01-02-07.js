function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.281 10l-2.5-2.5 2.5-2.5.719.719L6.219 7.5 8 9.281 7.281 10zM10 8V6h2v2h-2zM1 6V4h2v2H1zm12 0V4h2v2h-2zM0 2V0h2v2H0zm14 0V0h2v2h-2z"
}));

export default SvgComponent;