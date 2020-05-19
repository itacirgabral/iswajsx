function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v6h6V5H1V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 0C6.6 0 3.963 1.162 2.062 3.063l.72.718A9.472 9.472 0 019.5 1c2.623 0 5 1.062 6.719 2.781l1.093 1.094.688-.719-1.063-1.062A10.513 10.513 0 009.5 0z"
}));

export default SvgComponent;