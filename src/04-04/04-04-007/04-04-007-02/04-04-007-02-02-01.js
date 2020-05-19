function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 5v4h1V5h-1zM2 9h1V5H2v4zM16.5 0l-2.594 4.469.875.531L16.5 2.031 18.219 5l.875-.531L16.5 0zM2.5 0L-.094 4.469.781 5 2.5 2.031 4.219 5l.875-.531L2.5 0zM12 7a2.5 3 0 11-5 0 2.5 3 0 115 0z"
}));

export default SvgComponent;