function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0a4 4 0 00-4 4v1h1V4a3 3 0 013-3c2.21 0 4 2.686 4 6v1c0 2.981-4 8-4 8h11s-4-5.019-4-8V7a7 7 0 00-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 5l5.5 5.5L11 5H0z"
}));

export default SvgComponent;