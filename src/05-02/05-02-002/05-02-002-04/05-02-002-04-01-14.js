function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 48,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M46.923.822l.518 1.932L1.077 15.178l-.518-1.932L46.923.822z"
}));

export default SvgComponent;