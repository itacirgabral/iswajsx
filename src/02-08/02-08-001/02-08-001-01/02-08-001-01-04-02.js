function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 0a4 4 0 014 4v1h-1V4a3 3 0 00-3-3C8.79 1 7 3.686 7 7v1c0 2.981 4 8 4 8H0s4-5.019 4-8V7a7 7 0 017-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 5l-5.5 5.5L9 5h11z"
}));

export default SvgComponent;