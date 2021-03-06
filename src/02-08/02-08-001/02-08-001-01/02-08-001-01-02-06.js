function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 17l-7 7-7-7h14zm-2.438 1H2.438L7 22.594 11.563 18zM4 0a4 4 0 014 4v6c0 2.539 3 7 3 7H3s3-4.461 3-7V4a2 2 0 00-2-2 1 1 0 00-1 1v6H1V3a3 3 0 013-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.563 18L7 22.594 2.437 18h9.126z",
  fill: "#fff"
}));

export default SvgComponent;